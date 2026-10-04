import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* 1. Header / Navigation */}
      <nav className="navbar">
        <div className="logo">Global<span>Academy</span></div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#academics">Academics</a></li>
          <li><a href="#admissions">Admissions</a></li>
        </ul>
        <button className="btn-primary">Apply Now</button>
      </nav>

      {/* 2. Hero Section */}
      <header id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Inspiring Excellence, <br /> Building Character</h1>
          <p>Join a vibrant community dedicated to fostering innovation and academic brilliance.</p>
          <div className="cta-group">
            <button className="btn-primary">Explore Campus</button>
            <button className="btn-secondary">Request Info</button>
          </div>
        </div>
      </header>

      {/* 3. About Section */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students collaborating" />
          </div>
          <div className="about-text">
            <h2>Why Choose Global Academy?</h2>
            <p>We believe in a holistic approach to education. Our state-of-the-art facilities and world-class faculty provide an environment where students thrive both academically and personally.</p>
            <ul className="feature-list">
              <li>🎓 100% University Acceptance Rate</li>
              <li>🌍 Global Exchange Programs</li>
              <li>💡 Advanced STEM Laboratories</li>
              <li>🎨 Award-Winning Arts Dept</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Academics / Programs Section */}
      <section id="academics" className="academics-section">
        <div className="section-header">
          <h2>Our Academic Programs</h2>
          <p>Tailored curriculum for every stage of development</p>
        </div>
        <div className="cards-container">
          <div className="card">
            <div className="card-image bg-early"></div>
            <div className="card-content">
              <h3>Early Childhood</h3>
              <p>Foundational learning through play and discovery.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image bg-elementary"></div>
            <div className="card-content">
              <h3>Elementary</h3>
              <p>Developing core skills in a nurturing environment.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image bg-middle"></div>
            <div className="card-content">
              <h3>Middle School</h3>
              <p>Fostering independence and critical thinking.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-image bg-high"></div>
            <div className="card-content">
              <h3>High School</h3>
              <p>Rigorous preparation for college and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer Section */}
      <footer id="admissions" className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Global<span>Academy</span></h2>
            <p>Shaping the leaders of tomorrow.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#academics">Academics</a>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>📍 456 Education Ave, Metro City</p>
            <p>📞 +1 (800) 555-0199</p>
            <p>✉️ info@globalacademy.edu</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Global Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
