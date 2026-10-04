# Ubuntu Linux VPS Deployment Guide — Host Port 9600
### Production Multi-Container Environment Guide

This guide ensures safe, production deployment of **Ottobon Templates** on **Host Port 9600** on an existing Ubuntu Linux VPS without disturbing or modifying any other running applications or containers.

---

## 1. Pre-Deployment Safety Checks (Confirm Port 9600 is Free)

Before running anything, verify that host port **9600** is available and not in use by any other process or container:

```bash
# Check if any host process is listening on port 9600
sudo ss -tulpn | grep :9600

# Check if any Docker container already maps to port 9600
docker ps --format "table {{.Names}}\t{{.Ports}}" | grep 9600
```
*If both commands return empty, port 9600 is 100% free to use.*

---

## 2. Clone & Setup Repository

```bash
# 1. Clone into your VPS applications directory
git clone https://github.com/Ottobon-INC/Templates.git
cd Templates

# 2. Copy the production environment file (pre-configured for HOST_PORT=9600)
cp .env.example .env
```

---

## 3. Build & Launch Container

Run Docker Compose to build the image and start the container in isolated detached mode:

```bash
docker compose up -d --build
```

> **Safety Guarantee**:
> - Does **NOT** stop, restart, or modify any other containers.
> - Runs in an isolated Docker network (`ottobon-net`).
> - Uses container name `ottobon-templates`.
> - Maps **Host Port 9600 -> Internal Port 3000** (`0.0.0.0:9600->3000/tcp`).

---

## 4. Verification & Health Probes

```bash
# 1. Confirm container is running and healthy
docker ps --filter "name=ottobon-templates" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# Expected Output:
# NAMES               STATUS                    PORTS
# ottobon-templates   Up (healthy)              0.0.0.0:9600->3000/tcp, [::]:9600->3000/tcp

# 2. Test local HTTP response on port 9600
curl -I http://localhost:9600

# 3. Test internal health probe
curl -s http://localhost:9600/health

# 4. Inspect container logs
docker logs --tail 50 ottobon-templates
```

---

## 5. Firewall Configuration (UFW)

Only add a rule for port 9600 without touching any other existing firewall rules:

```bash
# Check current UFW status
sudo ufw status

# If UFW is active, allow incoming TCP traffic ONLY on port 9600
sudo ufw allow 9600/tcp

# Reload UFW (does not disrupt active connections)
sudo ufw reload
```
*(Note: If your VPS is hosted on AWS, GCP, Azure, DigitalOcean, or Hetzner, ensure port 9600 is also allowed in your Cloud Provider's Security Group / Inbound Firewall rules).*

---

## 6. Access Public Dashboard

The templates dashboard is immediately accessible at:
```
http://YOUR_SERVER_IP:9600
```

---

## 7. Isolated Management Cheatsheet

All commands target **only** `ottobon-templates` and never affect other containers:

| Action | Command |
| :--- | :--- |
| **View live logs** | `docker compose logs -f` |
| **Pull updates & rebuild** | `git pull && docker compose up -d --build` |
| **Restart application** | `docker compose restart` |
| **Stop application** | `docker compose down` |
| **Container resource stats** | `docker stats ottobon-templates --no-stream` |
