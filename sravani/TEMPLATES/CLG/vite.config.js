import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-sibling-templates',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const match = req.url.match(/^\/(COLLAGE|SCHOOL1|SCHOOL2)(\/.*)?$/)
          if (match) {
            const folder = match[1]
            let subpath = match[2] || '/index.html'
            if (subpath === '/' || subpath === '') subpath = '/index.html'

            let filePath = path.resolve(__dirname, '..', folder, subpath.replace(/^\//, ''))
            if (!fs.existsSync(filePath) && (folder === 'COLLAGE' || folder === 'SCHOOL1')) {
              const distPath = path.resolve(__dirname, '..', folder, 'dist', subpath.replace(/^\//, ''))
              if (fs.existsSync(distPath)) filePath = distPath
            }

            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
              const ext = path.extname(filePath).toLowerCase()
              const mimeTypes = {
                '.html': 'text/html; charset=utf-8',
                '.js': 'application/javascript; charset=utf-8',
                '.css': 'text/css; charset=utf-8',
                '.json': 'application/json',
                '.png': 'image/png',
                '.jpg': 'image/jpeg',
                '.jpeg': 'image/jpeg',
                '.webp': 'image/webp',
                '.svg': 'image/svg+xml',
                '.ico': 'image/x-icon',
                '.woff2': 'font/woff2',
                '.woff': 'font/woff'
              }
              res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
              fs.createReadStream(filePath).pipe(res)
              return
            }
          }
          next()
        })
      }
    }
  ],
  server: {
    fs: {
      allow: ['..']
    }
  }
})

