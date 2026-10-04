import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="brand">
          ELARA
        </Link>
        
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/womens-care">Women's Care</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="header-actions">
          <Link to="/appointments" className="btn btn-primary d-none-sm">
            <Calendar size={18} />
            <span>Book Appointment</span>
          </Link>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/womens-care">Women's Care</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/appointments" className="btn btn-primary mt-4">
            Book Appointment
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
