const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const PORT = 3000;
const MAIN_DIR = path.join(__dirname, '..');

// Track running dev servers: { templateName: { port, process, status } }
const runningServers = {};

const server = http.createServer(async (req, res) => {
    // Basic API routes
    if (req.url === '/api/templates' || req.url === '/api/refresh') {
        const templates = scanTemplates(MAIN_DIR);
        res.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' });
        res.end(JSON.stringify(templates));
        return;
    }
    
    // Check referer to handle absolute paths from templates (e.g. <link href="/style.css">)
    let safePath = decodeURIComponent(req.url);
    safePath = path.normalize(safePath).replace(/^(\.\.[\/\\])+/, '');
    
    let isTemplateAsset = false;
    let templateName = '';
    
    if (req.headers.referer) {
        try {
            const refererUrl = new URL(req.headers.referer);
            const pathParts = refererUrl.pathname.split('/').filter(Boolean);
            if (pathParts.length > 0 && pathParts[0] !== 'api' && pathParts[0] !== 'launcher-assets') {
                // Potential template directory
                const possibleTemplate = pathParts[0];
                const templateDir = path.join(MAIN_DIR, possibleTemplate);
                if (fs.existsSync(templateDir) && fs.statSync(templateDir).isDirectory()) {
                    isTemplateAsset = true;
                    templateName = possibleTemplate;
                    // If the request is an absolute path (e.g. /style.css), redirect to the correct template path
                    if (!safePath.startsWith(`/${possibleTemplate}`) && !safePath.startsWith(`\\${possibleTemplate}`) && !safePath.startsWith(possibleTemplate)) {
                        // Issue a 302 redirect so the browser updates its context
                        res.writeHead(302, { 'Location': `/${encodeURIComponent(possibleTemplate)}/${safePath.replace(/^[/\\]+/, '')}` });
                        res.end();
                        return;
                    }
                }
            }
        } catch (e) {
            // Ignore URL parsing errors
        }
    }

    // Serve launcher public files (only if not requested by a template)
    if (!isTemplateAsset) {
        if (req.url === '/' || req.url === '/index.html') {
            serveFile(res, path.join(__dirname, 'public', 'index.html'), 'text/html');
            return;
        }
        
        if (req.url === '/styles.css') {
            serveFile(res, path.join(__dirname, 'public', 'styles.css'), 'text/css');
            return;
        }
        
        if (req.url === '/script.js') {
            serveFile(res, path.join(__dirname, 'public', 'script.js'), 'text/javascript');
            return;
        }
    }
    
    // Serve template files
    let fullPath = path.join(MAIN_DIR, safePath);
    
    // Check if the requested path is the root of a template (e.g. /HT-3/index.html or /HT-3/)
    const pathSegments = safePath.split(path.sep).filter(Boolean);
    if (pathSegments.length > 0) {
        const potentialTemplateName = pathSegments[0];
        const templateRoot = path.join(MAIN_DIR, potentialTemplateName);
        
        // If this is a request for the entry HTML of a dynamic app, start its dev server
        if (fs.existsSync(templateRoot) && fs.statSync(templateRoot).isDirectory()) {
            const isEntryRequest = pathSegments.length === 1 || (pathSegments.length === 2 && ['index.html', 'index.htm', 'home.html'].includes(pathSegments[1]));
            const hasViteConfig = fs.existsSync(path.join(templateRoot, 'vite.config.js')) || fs.existsSync(path.join(templateRoot, 'vite.config.ts'));
            
            if (isEntryRequest && hasViteConfig) {
                // It's a Vite app, we need to spin up the dev server and redirect
                try {
                    const devUrl = await ensureDevServerRunning(potentialTemplateName, templateRoot);
                    if (devUrl) {
                        res.writeHead(302, { 'Location': devUrl });
                        res.end();
                        return;
                    }
                } catch (e) {
                    console.error(`Failed to start dev server for ${potentialTemplateName}:`, e);
                    res.writeHead(500);
                    res.end(`Error starting dev server for ${potentialTemplateName}. Please check terminal for details.`);
                    return;
                }
            }
        }
    }
    
    fs.stat(fullPath, (err, stats) => {
        if (err) {
            res.writeHead(404);
            res.end('Not found');
            return;
        }
        
        if (stats.isDirectory()) {
            // Try to serve index.html or similar entry point
            const possibleEntries = ['index.html', 'index.htm', 'home.html'];
            let found = false;
            for (const pe of possibleEntries) {
                const indexPath = path.join(fullPath, pe);
                if (fs.existsSync(indexPath)) {
                    serveFile(res, indexPath, 'text/html');
                    found = true;
                    break;
                }
            }
            if (!found) {
                res.writeHead(403);
                res.end('Forbidden - Directory listing not allowed');
            }
        } else {
            const ext = path.extname(fullPath).toLowerCase();
            const mimeTypes = {
                '.html': 'text/html',
                '.htm': 'text/html',
                '.css': 'text/css',
                '.js': 'text/javascript',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.gif': 'image/gif',
                '.svg': 'image/svg+xml',
                '.woff': 'font/woff',
                '.woff2': 'font/woff2',
                '.ttf': 'font/ttf'
            };
            const contentType = mimeTypes[ext] || 'application/octet-stream';
            serveFile(res, fullPath, contentType);
        }
    });
});

function serveFile(res, filePath, contentType) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Server Error');
        } else {
            res.writeHead(200, { 
                'Content-Type': contentType,
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            });
            res.end(data);
        }
    });
}

function scanTemplates(dir) {
    const templates = [];
    let files;
    try {
        files = fs.readdirSync(dir);
    } catch (e) {
        return templates;
    }

    for (const file of files) {
        if (file === 'launcher' || file.startsWith('.')) continue;
        
        const fullPath = path.join(dir, file);
        let stats;
        try {
            stats = fs.statSync(fullPath);
        } catch (e) { continue; }
        
        if (stats.isDirectory()) {
            let entry = null;
            const possibleEntries = ['index.html', 'index.htm', 'home.html'];
            
            // Check root level
            for (const pe of possibleEntries) {
                if (fs.existsSync(path.join(fullPath, pe))) {
                    entry = pe;
                    break;
                }
            }
            
            // Check 1 level deep
            if (!entry) {
                try {
                    const subFiles = fs.readdirSync(fullPath);
                    for (const subFile of subFiles) {
                        const subPath = path.join(fullPath, subFile);
                        if (fs.statSync(subPath).isDirectory()) {
                            for (const pe of possibleEntries) {
                                if (fs.existsSync(path.join(subPath, pe))) {
                                    entry = `${subFile}/${pe}`;
                                    break;
                                }
                            }
                        }
                        if (entry) break;
                    }
                } catch(e) {}
            }
            
            let preview = null;
            const possiblePreviews = ['preview.png', 'preview.jpg', 'thumbnail.png', 'thumbnail.jpg'];
            for (const pp of possiblePreviews) {
                if (fs.existsSync(path.join(fullPath, pp))) {
                    preview = pp;
                    break;
                }
            }
            
            const lowerName = file.toLowerCase();
            let category = 'Website';
            if (lowerName.includes('hospital') || lowerName.includes('clinic') || lowerName.includes('medical') || lowerName.includes('gynecology') || lowerName.includes('cancer') || lowerName.includes('dental') || lowerName.includes('cardiology') || lowerName.includes('dermatology') || lowerName.includes('maternity')) {
                category = 'Healthcare';
            } else if (lowerName.includes('portfolio')) {
                category = 'Portfolio';
            } else if (lowerName.includes('edu') || lowerName.includes('school')) {
                category = 'Education';
            } else if (lowerName.includes('corp') || lowerName.includes('business')) {
                category = 'Corporate';
            }
            
            templates.push({
                name: file,
                entry: entry,
                preview: preview ? `/${encodeURIComponent(file)}/${preview}` : null,
                category: category,
                path: `/${encodeURIComponent(file)}/`
            });
        }
    }
    return templates;
}

function ensureDevServerRunning(templateName, templateDir) {
    return new Promise((resolve, reject) => {
        if (runningServers[templateName] && runningServers[templateName].status === 'running') {
            return resolve(runningServers[templateName].url);
        }
        
        if (runningServers[templateName] && runningServers[templateName].status === 'starting') {
            // Already starting, just wait a bit (basic polling for simplicity)
            const checkInterval = setInterval(() => {
                if (runningServers[templateName].status === 'running') {
                    clearInterval(checkInterval);
                    resolve(runningServers[templateName].url);
                } else if (runningServers[templateName].status === 'error') {
                    clearInterval(checkInterval);
                    reject(new Error('Server failed to start'));
                }
            }, 500);
            return;
        }

        console.log(`\n[Launcher] Starting dev server for ${templateName}...`);
        runningServers[templateName] = { status: 'starting' };

        const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
        
        const child = spawn(npmCmd, ['run', 'dev'], {
            cwd: templateDir,
            env: { ...process.env, BROWSER: 'none' }, // Prevent Vite from opening its own browser tab
            shell: true
        });

        runningServers[templateName].process = child;
        
        let resolved = false;
        let outputBuffer = '';

        child.stdout.on('data', (data) => {
            const output = data.toString();
            outputBuffer += output;
            process.stdout.write(`[${templateName}] ${output}`);
            // Strip ANSI escape codes (Vite sometimes puts a bold tag right before the port number!)
            const cleanOutput = outputBuffer.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '');
            
            // Look for the Vite local URL: e.g. "Local:   http://localhost:5173/"
            if (!resolved) {
                const match = cleanOutput.match(/http:\/\/localhost:\d+/);
                if (match) {
                    const devUrl = match[0];
                    console.log(`[Launcher] ${templateName} is ready at ${devUrl}`);
                    runningServers[templateName].status = 'running';
                    runningServers[templateName].url = devUrl;
                    resolved = true;
                    resolve(devUrl);
                }
            }
        });

        child.stderr.on('data', (data) => {
            process.stderr.write(`[${templateName} ERR] ${data.toString()}`);
        });

        child.on('close', (code) => {
            console.log(`[Launcher] ${templateName} dev server exited with code ${code}`);
            delete runningServers[templateName];
            if (!resolved) {
                reject(new Error(`Process exited with code ${code}`));
            }
        });
        
        // Timeout after 15 seconds if it doesn't start
        setTimeout(() => {
            if (!resolved) {
                runningServers[templateName].status = 'error';
                reject(new Error('Dev server start timed out'));
            }
        }, 15000);
    });
}

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
