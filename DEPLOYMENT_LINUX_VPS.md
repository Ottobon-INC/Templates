# Ubuntu Linux VPS Deployment Guide (Docker & Docker Compose)

This guide walks you through deploying the **Ottobon Templates Hub** on an Ubuntu Linux VPS Server using Docker and Docker Compose.

---

## 1. Quickstart (One-Liner Deployment)

On your Ubuntu VPS, run the following commands:

```bash
# 1. Update packages & install Docker + Compose (if not already installed)
sudo apt update && sudo apt install -y docker.io docker-compose-v2 git

# 2. Add your user to the docker group (optional, avoids typing sudo)
sudo usermod -aG docker $USER
newgrp docker

# 3. Clone your repository
git clone https://github.com/Ottobon-INC/Templates.git
cd Templates

# 4. (Optional) Configure custom port in .env (defaults to 3000)
cp .env.example .env

# 5. Build and launch the container in detached mode
docker compose up -d --build
```

That's it! Your dashboard is now live and accessible at:
```
http://YOUR_VPS_PUBLIC_IP:3000
```

---

## 2. Verify Container Health & Logs

Check if the container is running and healthy:

```bash
# Check container status (should show 'Up' and 'healthy')
docker compose ps

# Check the built-in health endpoint
curl -i http://localhost:3000/health

# View live container logs
docker compose logs -f
```

---

## 3. Configure Ubuntu UFW Firewall

Ensure your VPS firewall allows HTTP traffic on your selected port:

```bash
# Allow port 3000 (or whichever port you configured in .env)
sudo ufw allow 3000/tcp

# If mapping directly to port 80 / 443
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Enable firewall (if not already active)
sudo ufw enable
```

---

## 4. (Optional) Expose Directly on Port 80

If you want the dashboard accessible directly on standard HTTP (`http://YOUR_VPS_PUBLIC_IP/`) without typing `:3000`:

Edit `.env`:
```bash
HOST_PORT=80
```
Then restart the compose service:
```bash
docker compose up -d
```

---

## 5. (Optional) Production Setup with Nginx & Free SSL (Let's Encrypt)

If you have a domain name (e.g. `templates.yourdomain.com`):

### Step 1: Install Nginx & Certbot
```bash
sudo apt install -y nginx certbot python3-certbot-nginx
```

### Step 2: Configure Nginx Reverse Proxy
Create `/etc/nginx/sites-available/templates.conf`:
```nginx
server {
    server_name templates.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/templates.conf /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 3: Install Free SSL Certificate
```bash
sudo certbot --nginx -d templates.yourdomain.com
```

---

## 6. Daily Management Cheatsheet

| Task | Command |
| :--- | :--- |
| **Pull updates & rebuild** | `git pull && docker compose up -d --build` |
| **Stop service** | `docker compose down` |
| **Restart service** | `docker compose restart` |
| **Inspect live logs** | `docker compose logs -f --tail=100` |
| **Check container resource usage** | `docker stats ottobon-templates` |
| **Run command inside container** | `docker compose exec templates-hub sh` |
