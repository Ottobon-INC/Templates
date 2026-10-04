# 🗂️ Ottobon Templates Hub

A modern, enterprise-grade unified dashboard for previewing and downloading **28+ production website templates** across Healthcare, Colleges & Universities, and Schools.

---

## 🌟 Key Features

- **Pristine White Background & Modern SaaS UI**: Corporate blue (`#2563EB`) accents, Inter typography, and clean cards with smooth hover animations.
- **Interactive Multi-Device Live Preview**: Inspect any template inside the dashboard with real-time viewport toggling:
  - 🖥️ **Desktop** (100% full width)
  - 💻 **Tablet** (768px viewport)
  - 📱 **Mobile** (375px viewport)
- **Flexible Download Architectures**:
  - 📦 **Download Individual Template Folder (ZIP)**: Downloads only that specific template subfolder directly as a clean `.zip` archive without needing to clone the whole repository.
  - 🌐 **Download Entire Repository (ZIP)**: One-click master archive download from GitHub.
  - 📋 **Git Clone Command Generator**: Instant one-click copy with setup instructions (`git clone`, `cd`, `npm install && npm run dev`).
  - ⚙️ **Configurable GitHub Repo Settings**: Easily set your repository URL (e.g. `https://github.com/your-org/templates`) with persistent `localStorage` storage.
- **Dynamic Search & Multi-Dimensional Filters**:
  - Filter by Category (*Healthcare & Hospitals*, *Degree & University*, *Schools & Academies*)
  - Filter by Technology Stack (*Next.js 16*, *Vite + React*, *Tailwind CSS*, *TypeScript*, *HTML5*)
  - Filter by Contributor (*Akbar*, *Disha*, *Poorvisha*, *Sathvika*, *Sravani*)
  - Real-time instant search with `/` keyboard shortcut.
- **Saved Bookmarks**: Heart ❤️ any template to save it to your local favorites.
- **Dual Display Modes**: Toggle between Grid View and Compact List View.

---

## 📁 Repository Catalog (28 Templates)

```
templates/
├── index.html                           ← Master Dashboard UI
├── style.css                            ← Enterprise Design System
├── app.js                               ← 28-Template Registry & Logic
├── server.js                            ← Zero-dependency Local Server
├── start.bat                            ← One-click Windows Launcher
│
├── akbar/
│   └── Healthcare-Templates/
│       ├── HTD-1/                       ← Celestial Smiles Dental Clinic (Next.js 16, React 19)
│       └── HTE-2/                       ← Elite Healthcare & Diagnostics (Next.js 16, Tailwind)
│
├── disha/
│   ├── Degree-Template-1/               ← EduVibe Modern Degree College (Vite, React 19)
│   ├── Degree-Template-2/               ← Campus Pulse University Experience (Vite, 4K Video)
│   ├── Degree-Template-3/               ← Global Institute of Technology & Research (Vite, TS)
│   ├── Degree-Template-4/               ← Horizon University & Graduate Studies (Vite, TS)
│   ├── Degree-Template-5/               ← Apex College of Science & Arts (Vite, TS)
│   └── Degree-Templet-6/                ← Pinnacle Academy & Degree College (Vite, TS)
│
├── poorvisha/
│   └── Hospital-Templates/
│       ├── HT-1/                        ← St. Jude Memorial Hospital (HTML5, 10+ Pages)
│       ├── HT-2/                        ← Metro Care Specialty Clinic (Vite, Tailwind)
│       ├── HT-3/                        ← CarePoint Multispeciality Hospital (Vite, Emergency UI)
│       ├── HT-4/Aurevia Health/         ← Aurevia Health 3D Cardiology & Neurology (HTML5, 3D)
│       ├── HT-5/                        ← Hope Oncology & Cancer Institute (Vite, Clinical UI)
│       ├── HT-6/                        ← MediPulse 3D Interactive Medical Care (Vite, 3D)
│       └── HT-7/                        ← Zenith Children's Hospital & Pediatrics (Vite, TS)
│
├── sathvika/
│   └── Schools-and-College-Templates/
│       ├── Schools/                     ← Greenfield International School (HTML5, IB/CBSE)
│       ├── School page/                 ← Oakridge Global Academy (HTML5, Academic Calendar)
│       ├── Schoolpage 2/                ← Silver Oak Public School (HTML5, Parent Portal)
│       ├── Schoolwebpages/              ← St. Xavier High School & Junior College (HTML5)
│       ├── Collegepage1/                ← Royal College of Engineering & Tech (HTML5, Node)
│       ├── College2/                    ← Cambridge Institute of Management (HTML5, MBA)
│       └── College3/                    ← Oxford Metropolitan College (HTML5, Research)
│
└── sravani/
    └── TEMPLATES/
        ├── CLG/                         ← Apex Degree & Engineering College (Vite, Tailwind)
        ├── COLLAGE/                     ← Crestview University Academic Portal (Vite)
        ├── COLLAGE 1/                   ← Heritage State College (HTML5, Affiliated Syllabus)
        ├── COLLAGE 2/                   ← Horizon Technical University (HTML5, Labs & Grants)
        ├── SCHOOL1/                     ← Pinegrove High School & Montessori (HTML5, Activity)
        └── SCHOOL2/                     ← Sunrise Valley Public School (HTML5, Admissions)
```

---

## 🚀 How to Run Locally

### Option 1: Double-Click Launcher (Windows)
Double-click [`start.bat`](file:///c:/Users/ASUS/Desktop/Ottobon/templates/start.bat). It will launch the local server and automatically open the dashboard in your default browser at `http://localhost:3000`.

### Option 2: Using Node.js
```bash
# Navigate to the templates folder
cd c:\Users\ASUS\Desktop\Ottobon\templates

# Start the dashboard server
npm start
# or
node server.js
```
Then visit: [http://localhost:3000](http://localhost:3000)

### Option 3: Direct File Opening
You can also open [`index.html`](file:///c:/Users/ASUS/Desktop/Ottobon/templates/index.html) directly in any web browser without running a server.

---

## 🐳 Docker Deployment (Ubuntu Linux VPS)

To deploy on an Ubuntu Linux VPS Server with Docker & Docker Compose:

```bash
# 1. Clone the repository
git clone https://github.com/Ottobon-INC/Templates.git
cd Templates

# 2. Build and start the container
docker compose up -d --build
```

Access the dashboard on `http://YOUR_SERVER_IP:3000`.

- Dedicated setup guide: [`DEPLOYMENT_LINUX_VPS.md`](file:///c:/Users/ASUS/Desktop/Ottobon/templates/DEPLOYMENT_LINUX_VPS.md)
- Custom port configuration: Copy `.env.example` to `.env` and set `HOST_PORT=80` or `3000`.
- Health check: `curl http://localhost:3000/health`

