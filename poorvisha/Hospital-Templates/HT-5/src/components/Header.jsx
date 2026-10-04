import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import '../components.css';
import AnimatedButton from './AnimatedButton';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <Link to="/" className="logo">VELORA</Link>
          
          <nav className="nav-links">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link to="/cancer-care" className={`nav-link ${location.pathname.includes('/cancer-care') ? 'active' : ''}`}>Cancer Care</Link>
            <Link to="/treatments" className={`nav-link ${location.pathname.includes('/treatments') ? 'active' : ''}`}>Treatments</Link>
            <Link to="/doctors" className={`nav-link ${location.pathname.includes('/doctors') ? 'active' : ''}`}>Doctors</Link>
          </nav>

          <div className="header-actions">
            <Link to="/emergency" className="btn btn-secondary" style={{borderColor: 'var(--color-accent)', color: 'var(--color-accent)'}}>
              <Phone size={18} /> Emergency
            </Link>
            <AnimatedButton />
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>VELORA</Link>
          <button className="mobile-nav-close" onClick={() => setMobileMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="mobile-nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/cancer-care">Cancer Care</Link>
          <Link to="/treatments">Treatments</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/emergency" style={{color: 'var(--color-accent)'}}>Emergency</Link>
        </div>
        <div style={{marginTop: 'auto'}}>
          <Link to="/appointments" className="btn btn-primary" style={{width: '100%', marginBottom: '1rem'}}>Book Appointment</Link>
          <Link to="/patient-portal/login" className="btn btn-secondary" style={{width: '100%'}}>Patient Portal</Link>
        </div>
      </div>
    </>
  );
}
