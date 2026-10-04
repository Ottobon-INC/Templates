
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
