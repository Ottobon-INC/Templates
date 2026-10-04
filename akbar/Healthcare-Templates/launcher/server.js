const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const net = require('net');

const PORT = process.env.PORT || 3000;
const MAIN_DIR = path.join(__dirname, '..');

// Track running dev servers: { templateName: { port, process, status, url, error } }
const runningServers = {};

// Designated ports for known templates to prevent any collisions
const TEMPLATE_PORTS = {
    'HTD-1': 3001,
    'HTD-3': 3002,
    'HTE-2': 3003
};

function getAssignedPort(templateName) {
    if (runningServers[templateName] && runningServers[templateName].port) {
        return runningServers[templateName].port;
    }
    if (TEMPLATE_PORTS[templateName]) {
        return TEMPLATE_PORTS[templateName];
    }
    const usedPorts = Object.values(runningServers).map(s => s.port).concat([PORT]);
    let candidate = 3001;
    while (usedPorts.includes(candidate)) {
        candidate++;
    }
    return candidate;
}

function getTemplateMetadata(templateName, templateDir) {
    let title = templateName;
    let subtitle = '';
    let category = 'Healthcare';
    let type = 'static';

    // Framework detection
    const pkgPath = path.join(templateDir, 'package.json');
    if (fs.existsSync(pkgPath)) {
        try {
            const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
            if ((pkg.dependencies && pkg.dependencies.next) || (pkg.devDependencies && pkg.devDependencies.next)) {
                type = 'nextjs';
            } else if ((pkg.dependencies && pkg.dependencies.vite) || (pkg.devDependencies && pkg.devDependencies.vite)) {
                type = 'vite';
            } else if (pkg.scripts && (pkg.scripts.dev || pkg.scripts.start)) {
                type = 'node';
            }
        } catch (e) {}
    }

    if (fs.existsSync(path.join(templateDir, 'next.config.js')) || 
        fs.existsSync(path.join(templateDir, 'next.config.mjs')) || 
        fs.existsSync(path.join(templateDir, 'next.config.ts'))) {
        type = 'nextjs';
    } else if (fs.existsSync(path.join(templateDir, 'vite.config.js')) || 
               fs.existsSync(path.join(templateDir, 'vite.config.ts'))) {
        type = 'vite';
    }

    // Category detection
    const lowerName = templateName.toLowerCase();
    if (lowerName.includes('eye') || lowerName.startsWith('hte')) {
        category = 'Eye Care';
    } else if (lowerName.includes('dental') || lowerName.startsWith('htd')) {
        category = 'Dental Care';
    } else if (lowerName.includes('cardio') || lowerName.startsWith('htc')) {
        category = 'Cardiology';
    } else if (lowerName.includes('ortho') || lowerName.startsWith('hto')) {
        category = 'Orthopedics';
    } else if (lowerName.includes('hospital') || lowerName.startsWith('htm')) {
        category = 'Hospital';
    }

    // Read README.md for title if exists
    const readmePath = path.join(templateDir, 'README.md');
    if (fs.existsSync(readmePath)) {
        try {
            const readme = fs.readFileSync(readmePath, 'utf8');
            const headingMatch = readme.match(/^#\s+(.+)$/m);
            if (headingMatch && !headingMatch[1].toLowerCase().includes('this is a [next.js]')) {
                title = headingMatch[1].replace(/—.*$/, '').replace(/--.*$/, '').trim();
            }
        } catch (e) {}
    }

    // Curated hospital templates metadata
    const KNOWN_TEMPLATES = {
        'HTD-1': {
            title: 'Celestial Smiles Dental Clinic',
            subtitle: 'Dr. Fatema Khanbhai | Luxury Dental Care',
            category: 'Dental Care'
        },
        'HTD-3': {
            title: 'SmileCare Dental Network',
            subtitle: 'Multi-Location Premium Dental Network',
            category: 'Dental Care'
        },
        'HTE-2': {
            title: 'Demo Eye Hospital',
            subtitle: 'Tertiary Eye Care & Microsurgery',
            category: 'Eye Care'
        }
    };

    if (KNOWN_TEMPLATES[templateName]) {
        title = KNOWN_TEMPLATES[templateName].title;
        subtitle = KNOWN_TEMPLATES[templateName].subtitle;
        category = KNOWN_TEMPLATES[templateName].category;
    }

    return { title, subtitle, category, type };
}

function checkPortListening(port) {
    return new Promise((resolve) => {
        const socket = new net.Socket();
        socket.setTimeout(400);
        socket.on('connect', () => {
            socket.destroy();
            resolve(true);
        });
        socket.on('timeout', () => {
            socket.destroy();
            resolve(false);
        });
        socket.on('error', () => {
            socket.destroy();
            resolve(false);
        });
        socket.connect(port, '127.0.0.1');
    });
}

function ensureDevServerRunning(templateName, templateDir) {
    return new Promise((resolve, reject) => {
        if (runningServers[templateName] && runningServers[templateName].status === 'running') {
            return resolve(runningServers[templateName].url);
        }

        if (runningServers[templateName] && runningServers[templateName].status === 'starting') {
            const checkInterval = setInterval(() => {
                if (runningServers[templateName].status === 'running') {
                    clearInterval(checkInterval);
                    resolve(runningServers[templateName].url);
                } else if (runningServers[templateName].status === 'error') {
                    clearInterval(checkInterval);
                    reject(new Error(runningServers[templateName].error || 'Server failed to start'));
                }
            }, 500);
            return;
        }

        const port = getAssignedPort(templateName);
        const meta = getTemplateMetadata(templateName, templateDir);

        console.log(`\n[Launcher] Starting dev server for ${templateName} on port ${port}...`);
        runningServers[templateName] = {
            status: 'starting',
            port: port,
            url: `http://localhost:${port}`
        };

        const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
        let spawnArgs = ['run', 'dev'];
        if (meta.type === 'nextjs') {
            spawnArgs = ['run', 'dev', '--', '-p', String(port)];
        } else if (meta.type === 'vite') {
            spawnArgs = ['run', 'dev', '--', '--port', String(port)];
        }

        const child = spawn(npmCmd, spawnArgs, {
            cwd: templateDir,
            env: {
                ...process.env,
                PORT: String(port),
                BROWSER: 'none',
                NEXT_TELEMETRY_DISABLED: '1'
            },
            shell: true
        });

        runningServers[templateName].process = child;

        let resolved = false;
        let outputBuffer = '';

        function markReady(url) {
            if (!resolved) {
                resolved = true;
                clearInterval(pollTimer);
                console.log(`[Launcher] ${templateName} is ready at ${url}`);
                runningServers[templateName].status = 'running';
                runningServers[templateName].url = url;
                resolve(url);
            }
        }

        child.stdout.on('data', (data) => {
            const output = data.toString();
            outputBuffer += output;
            process.stdout.write(`[${templateName}] ${output}`);
            const cleanOutput = outputBuffer.replace(/\x1B\[[0-9;]*[a-zA-Z]/g, '');

            const match = cleanOutput.match(/http:\/\/localhost:\d+/);
            if (match) {
                markReady(match[0]);
            }
            if (cleanOutput.includes('Ready in') || cleanOutput.includes('ready in')) {
                markReady(`http://localhost:${port}`);
            }
        });

        child.stderr.on('data', (data) => {
            const errStr = data.toString();
            process.stderr.write(`[${templateName} ERR] ${errStr}`);
            const match = errStr.match(/http:\/\/localhost:\d+/);
            if (match) {
                markReady(match[0]);
            }
        });

        child.on('close', (code) => {
            console.log(`[Launcher] ${templateName} dev server exited with code ${code}`);
            clearInterval(pollTimer);
            if (!resolved) {
                runningServers[templateName].status = 'error';
                runningServers[templateName].error = `Process exited with code ${code}`;
                reject(new Error(`Process exited with code ${code}`));
            } else {
                delete runningServers[templateName];
            }
        });

        // Fast TCP socket checking every 400ms
        const pollTimer = setInterval(async () => {
            if (resolved) {
                clearInterval(pollTimer);
                return;
            }
            const isListening = await checkPortListening(port);
            if (isListening) {
                markReady(`http://localhost:${port}`);
            }
        }, 400);

        // Timeout after 35 seconds
        setTimeout(() => {
            if (!resolved) {
                clearInterval(pollTimer);
                runningServers[templateName].status = 'error';
                runningServers[templateName].error = 'Dev server start timed out after 35 seconds';
                reject(new Error('Dev server start timed out'));
            }
        }, 35000);
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
        if (file === 'launcher' || file.startsWith('.') || file === 'node_modules') continue;

        const fullPath = path.join(dir, file);
        let stats;
        try {
            stats = fs.statSync(fullPath);
        } catch (e) { continue; }

        if (stats.isDirectory()) {
            const meta = getTemplateMetadata(file, fullPath);
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
                } catch (e) {}
            }

            // If it's a dynamic app (Next.js, Vite, Node app with dev script), entry is root '/'
            if (!entry && (meta.type === 'nextjs' || meta.type === 'vite' || meta.type === 'node')) {
                entry = '/';
            }

            let preview = null;
            const possiblePreviews = ['preview.png', 'preview.jpg', 'thumbnail.png', 'thumbnail.jpg'];
            for (const pp of possiblePreviews) {
                if (fs.existsSync(path.join(fullPath, pp))) {
                    preview = pp;
                    break;
                }
            }

            const serverInfo = runningServers[file];
            const isRunning = serverInfo && serverInfo.status === 'running';
            const port = getAssignedPort(file);

            templates.push({
                name: file,
                displayName: file,
                title: meta.title,
                subtitle: meta.subtitle,
                category: meta.category,
                type: meta.type,
                entry: entry,
                isDynamic: meta.type !== 'static',
                launchUrl: `/launch/${encodeURIComponent(file)}`,
                preview: preview ? `/${encodeURIComponent(file)}/${preview}` : null,
                path: `/${encodeURIComponent(file)}/`,
                isRunning: isRunning,
                port: isRunning ? serverInfo.port : port
            });
        }
    }
    return templates;
}

const server = http.createServer(async (req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    const pathname = parsedUrl.pathname;

    // API: List templates
    if (pathname === '/api/templates' || pathname === '/api/refresh') {
        const templates = scanTemplates(MAIN_DIR);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-cache' });
        res.end(JSON.stringify(templates));
        return;
    }

    // API: Check server status for a template
    if (pathname === '/api/status') {
        const templateName = parsedUrl.searchParams.get('template');
        const srv = runningServers[templateName];
        const port = getAssignedPort(templateName);
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-cache' });
        res.end(JSON.stringify({
            template: templateName,
            status: srv ? srv.status : 'stopped',
            port: srv && srv.port ? srv.port : port,
            url: srv && srv.url ? srv.url : `http://localhost:${port}`,
            error: srv && srv.error ? srv.error : null
        }));
        return;
    }

    // API: Start a template dev server
    if (pathname === '/api/start') {
        const templateName = parsedUrl.searchParams.get('template');
        const templateDir = path.join(MAIN_DIR, templateName);
        if (!fs.existsSync(templateDir)) {
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ error: 'Template not found' }));
            return;
        }

        ensureDevServerRunning(templateName, templateDir).catch(err => {
            console.error(`[Launcher API] Failed to start ${templateName}:`, err);
        });

        const srv = runningServers[templateName];
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-cache' });
        res.end(JSON.stringify({
            template: templateName,
            status: srv ? srv.status : 'starting',
            port: getAssignedPort(templateName)
        }));
        return;
    }

    // API: Stop a template dev server
    if (pathname === '/api/stop') {
        const templateName = parsedUrl.searchParams.get('template');
        const srv = runningServers[templateName];
        if (srv && srv.process) {
            try {
                if (process.platform === 'win32') {
                    spawn('taskkill', ['/pid', srv.process.pid, '/f', '/t']);
                } else {
                    srv.process.kill();
                }
            } catch (e) {}
            delete runningServers[templateName];
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
        return;
    }

    // Launch page handler
    if (pathname.startsWith('/launch')) {
        const pathSegments = pathname.split('/').filter(Boolean);
        const templateName = pathSegments[1] || parsedUrl.searchParams.get('template');

        if (!templateName) {
            res.writeHead(302, { 'Location': '/' });
            res.end();
            return;
        }

        const templateDir = path.join(MAIN_DIR, templateName);
        if (!fs.existsSync(templateDir) || !fs.statSync(templateDir).isDirectory()) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(`<h1>Template ${templateName} not found</h1><p><a href="/">Return to Library</a></p>`);
            return;
        }

        const meta = getTemplateMetadata(templateName, templateDir);

        // If it's a static HTML template, redirect immediately to its static entry
        if (meta.type === 'static') {
            const templates = scanTemplates(MAIN_DIR);
            const t = templates.find(x => x.name === templateName);
            if (t && t.entry && t.entry !== '/') {
                res.writeHead(302, { 'Location': `/${encodeURIComponent(templateName)}/${t.entry}` });
                res.end();
                return;
            }
        }

        // If dev server is already running, redirect immediately
        if (runningServers[templateName] && runningServers[templateName].status === 'running') {
            res.writeHead(302, { 'Location': runningServers[templateName].url });
            res.end();
            return;
        }

        // Trigger startup in background
        ensureDevServerRunning(templateName, templateDir).catch(err => {
            console.error(`[Launcher] Error launching ${templateName}:`, err);
        });

        // Serve the launching page
        serveFile(res, path.join(__dirname, 'public', 'launch.html'), 'text/html');
        return;
    }

    // Serve launcher public files
    if (pathname === '/' || pathname === '/index.html') {
        serveFile(res, path.join(__dirname, 'public', 'index.html'), 'text/html');
        return;
    }
    if (pathname === '/styles.css') {
        serveFile(res, path.join(__dirname, 'public', 'styles.css'), 'text/css');
        return;
    }
    if (pathname === '/script.js') {
        serveFile(res, path.join(__dirname, 'public', 'script.js'), 'text/javascript');
        return;
    }
    if (pathname === '/launch.html') {
        serveFile(res, path.join(__dirname, 'public', 'launch.html'), 'text/html');
        return;
    }

    // Check template requests (e.g. /HTD-1/ or /HTD-1)
    let safePath = decodeURIComponent(pathname);
    safePath = path.normalize(safePath).replace(/^(\.\.[\/\\])+/, '');
    const pathSegments = safePath.split(path.sep).filter(Boolean);

    if (pathSegments.length > 0) {
        const potentialTemplateName = pathSegments[0];
        const templateRoot = path.join(MAIN_DIR, potentialTemplateName);

        if (fs.existsSync(templateRoot) && fs.statSync(templateRoot).isDirectory()) {
            const meta = getTemplateMetadata(potentialTemplateName, templateRoot);

            // If it's a dynamic template (Next.js / Vite / Node)
            if (meta.type !== 'static') {
                // If requesting the template root (e.g. /HTD-1 or /HTD-1/)
                if (pathSegments.length === 1 || (pathSegments.length === 2 && ['index.html', 'index.htm', 'home.html'].includes(pathSegments[1]))) {
                    if (runningServers[potentialTemplateName] && runningServers[potentialTemplateName].status === 'running') {
                        res.writeHead(302, { 'Location': runningServers[potentialTemplateName].url });
                        res.end();
                        return;
                    } else {
                        res.writeHead(302, { 'Location': `/launch/${encodeURIComponent(potentialTemplateName)}` });
                        res.end();
                        return;
                    }
                }
            }
        }
    }

    // Serve static files from templates
    let fullPath = path.join(MAIN_DIR, safePath);
    fs.stat(fullPath, (err, stats) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not found');
            return;
        }

        if (stats.isDirectory()) {
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
                res.writeHead(403, { 'Content-Type': 'text/plain' });
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
                '.ttf': 'font/ttf',
                '.mp4': 'video/mp4'
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

// Clean up child processes on exit
function cleanup() {
    console.log('\n[Launcher] Shutting down running dev servers...');
    for (const [name, srv] of Object.entries(runningServers)) {
        if (srv.process && !srv.process.killed) {
            try {
                if (process.platform === 'win32') {
                    spawn('taskkill', ['/pid', srv.process.pid, '/f', '/t']);
                } else {
                    srv.process.kill();
                }
            } catch (e) {}
        }
    }
}

process.on('exit', cleanup);
process.on('SIGINT', () => { cleanup(); process.exit(); });
process.on('SIGTERM', () => { cleanup(); process.exit(); });

server.listen(PORT, () => {
    console.log(`\n========================================`);
    console.log(` Website Template Library is running at:`);
    console.log(` http://localhost:${PORT}/`);
    console.log(`========================================\n`);
});
