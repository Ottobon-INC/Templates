import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-logo">VELORA</Link>
            <p style={{color: 'rgba(247, 243, 237, 0.8)', maxWidth: '300px'}}>
              Compassionate cancer care, advanced diagnostics, and coordinated treatment — centered around every patient.
            </p>
          </div>
          <div>
            <h4 className="footer-heading">Cancer Care</h4>
            <ul className="footer-links">
              <li><Link to="/cancer-care/breast-cancer">Breast Cancer</Link></li>
              <li><Link to="/cancer-care/lung-cancer">Lung Cancer</Link></li>
              <li><Link to="/cancer-care">All Specialities</Link></li>
              <li><Link to="/treatments">Treatments</Link></li>
              <li><Link to="/doctors">Doctors</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Institute</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/insights">Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-links">
              <li><Link to="/patient-resources">Patient Resources</Link></li>
              <li><Link to="/supportive-care">Supportive Care</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Emergency</h4>
            <ul className="footer-links">
              <li><a href="tel:+918000056799" style={{color: 'var(--color-accent)', fontWeight: '600'}}>+91 80000 56799</a></li>
              <li><span style={{color: 'rgba(247, 243, 237, 0.6)', fontSize: '0.875rem'}}>Available 24/7</span></li>
              <li style={{marginTop: '1rem'}}><Link to="/emergency" className="btn btn-secondary" style={{borderColor: 'rgba(255,255,255,0.2)', color: '#fff', padding: '0.5rem 1rem', fontSize: '0.875rem'}}>Emergency Info</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; 2026 Velora Cancer Institute. All rights reserved.</div>
          <div style={{display: 'flex', gap: '1.5rem'}}>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
        <div style={{marginTop: '2rem', fontSize: '0.75rem', color: 'rgba(247,243,237,0.4)', textAlign: 'center'}}>
          Disclaimer: This website is a fictional demonstration template. All hospital information, doctors, statistics, patient information, testimonials, and medical content shown are fictional.
        </div>
      </div>
    </footer>
  );
}
