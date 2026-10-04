const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const dirs = [
  'components',
  'pages',
  'pages/CancerCare',
  'pages/Treatments',
  'pages/Doctors',
  'pages/PatientPortal',
  'pages/PatientResources',
  'pages/Insights',
  'data'
];

dirs.forEach(dir => {
  const fullPath = path.join(srcDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

const templateComponent = (name, title) => `
export default function ${name}() {
  return (
    <div className="section container">
      <h1 style={{color: 'var(--color-primary)'}}>${title}</h1>
      <p>This is a fictional demonstration page for ${title}.</p>
    </div>
  );
}
`;

const pages = {
  'About': 'About Velora',
  'Facilities': 'Our Facilities',
  'Research': 'Research & Clinical Trials',
  'SupportiveCare': 'Supportive Care',
  'FAQ': 'Frequently Asked Questions',
  'Contact': 'Contact Us',
  'Emergency': 'Emergency Assistance',
  
  'CancerCare/Index': 'Cancer Care Programs',
  'CancerCare/BreastCancer': 'Breast Cancer',
  'CancerCare/LungCancer': 'Lung Cancer',
  'CancerCare/GastrointestinalCancer': 'Gastrointestinal Cancer',
  
  'Treatments/Index': 'Treatments',
  'Treatments/Chemotherapy': 'Chemotherapy',
  'Treatments/RadiationTherapy': 'Radiation Therapy',
  
  'Doctors/Index': 'Our Doctors',
  'Doctors/Profile': 'Doctor Profile',
  
  'Appointments': 'Book an Appointment',
  'AppointmentsConfirmation': 'Appointment Confirmed',
  
  'PatientResources/Index': 'Patient Resources',
  'PatientResources/FirstVisit': 'Preparing for Your First Visit',
  
  'Insights/Index': 'Insights & Health Articles',
  'Insights/Article': 'Article Detail',
  
  'PatientPortal/Login': 'Patient Portal Login',
  'PatientPortal/Dashboard': 'Patient Dashboard'
};

Object.entries(pages).forEach(([filepath, title]) => {
  const componentName = filepath.split('/').pop();
  fs.writeFileSync(path.join(srcDir, 'pages', filepath + '.jsx'), templateComponent(componentName, title));
});

const appContent = `
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Facilities from './pages/Facilities';
import Research from './pages/Research';
import SupportiveCare from './pages/SupportiveCare';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Emergency from './pages/Emergency';
import CancerCareIndex from './pages/CancerCare/Index';
import BreastCancer from './pages/CancerCare/BreastCancer';
import TreatmentsIndex from './pages/Treatments/Index';
import DoctorsIndex from './pages/Doctors/Index';
import DoctorProfile from './pages/Doctors/Profile';
import Appointments from './pages/Appointments';
import PatientPortalLogin from './pages/PatientPortal/Login';
import PatientPortalDashboard from './pages/PatientPortal/Dashboard';
import NotFound from './pages/NotFound';
import './index.css';
import './components.css';

function App() {
  return (
    <Router>
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header />
        <main style={{flexGrow: 1, paddingTop: '80px'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/research" element={<Research />} />
            <Route path="/supportive-care" element={<SupportiveCare />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/emergency" element={<Emergency />} />
            
            <Route path="/cancer-care" element={<CancerCareIndex />} />
            <Route path="/cancer-care/breast-cancer" element={<BreastCancer />} />
            
            <Route path="/treatments" element={<TreatmentsIndex />} />
            
            <Route path="/doctors" element={<DoctorsIndex />} />
            <Route path="/doctors/:id" element={<DoctorProfile />} />
            
            <Route path="/appointments" element={<Appointments />} />
            
            <Route path="/patient-portal/login" element={<PatientPortalLogin />} />
            <Route path="/patient-portal" element={<PatientPortalDashboard />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
`;

fs.writeFileSync(path.join(srcDir, 'App.jsx'), appContent);
fs.writeFileSync(path.join(srcDir, 'pages', 'NotFound.jsx'), `
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="section container text-center" style={{minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1 style={{color: 'var(--color-primary)', fontSize: '4rem', marginBottom: '1rem'}}>404</h1>
      <h2 style={{color: 'var(--color-text-primary)'}}>Page not found.</h2>
      <p style={{marginBottom: '2rem'}}>The page you're looking for may have moved or doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Return Home</Link>
    </div>
  );
}
`);

console.log('Scaffold complete');
