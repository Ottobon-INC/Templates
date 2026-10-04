import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">ELARA</Link>
          <p className="footer-tagline">Care Designed Around Her.</p>
        </div>
        
        <div className="footer-links-grid">
          <div className="footer-col">
            <h4>Care</h4>
            <Link to="/gynecology">Gynecology</Link>
            <Link to="/maternity">Maternity</Link>
            <Link to="/wellness">Wellness</Link>
          </div>
          
          <div className="footer-col">
            <h4>Institute</h4>
            <Link to="/about">About Us</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Elara Women's Institute. A fictional demonstration template.</p>
          <div className="footer-legal">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
