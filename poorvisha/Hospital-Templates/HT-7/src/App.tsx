import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { 
  DoctorsPage, 
  DepartmentsPage, 
  ServicesPage, 
  PatientInfoPage, 
  AboutPage, 
  ContactPage,
  PortalLoginPage,
  BookAppointmentPage
} from './pages/Pages';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-hospital-bg font-sans selection:bg-hospital-accent selection:text-white flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/patient-info" element={<PatientInfoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/portal" element={<PortalLoginPage />} />
            <Route path="/appointment" element={<BookAppointmentPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
