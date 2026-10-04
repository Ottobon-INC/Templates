import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ScrollIndicator from './components/ScrollIndicator';
import Home from './sections/Home';
import About from './sections/About';
import Academics from './sections/Academics';
import Admissions from './sections/Admissions';
import Campus from './sections/Campus';

import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(index + 1);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <Navigation activeSection={activeSection} />
      <ScrollIndicator activeSection={activeSection} />
      
      <main>
        <section id="home" className="section-container"><Home /></section>
        <section id="about" className="section-container"><About /></section>
        <section id="academics" className="section-container"><Academics /></section>
        <section id="campus" className="section-container"><Campus /></section>
        <section id="admissions" className="section-container"><Admissions /></section>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <h2>ORBITA</h2>
              <p>Institute of Higher Education</p>
              <div className="contact-info">
                <p>Visakhapatnam, Andhra Pradesh, India</p>
                <p>admissions@orbita.edu.in</p>
                <p>+91 98765 43210</p>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#academics">Programmes</a></li>
                  <li><a href="#admissions">Admissions</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h4>Resources</h4>
                <ul>
                  <li><a href="#">Student Portal</a></li>
                  <li><a href="#">Library</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="container footer-bottom">
            <p>&copy; 2027 Orbita Institute of Higher Education. All rights reserved.</p>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
