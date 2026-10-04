import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  Brain, 
  Baby, 
  Bone, 
  PhoneCall, 
  Calendar,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const services = [
  { icon: <HeartPulse />, title: 'Cardiology', desc: 'Expert care for your heart with advanced diagnostics and treatments.' },
  { icon: <Brain />, title: 'Neurology', desc: 'Comprehensive neurological care for brain and nervous system disorders.' },
  { icon: <Baby />, title: 'Pediatrics', desc: 'Compassionate pediatric services to keep your little ones healthy.' },
  { icon: <Bone />, title: 'Orthopedics', desc: 'Specialized treatments for bone, joint, and muscle conditions.' },
  { icon: <Stethoscope />, title: 'Primary Care', desc: 'Your first stop for general health, wellness, and preventative care.' },
  { icon: <Activity />, title: 'Emergency Care', desc: '24/7 immediate medical attention for urgent health conditions.' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar" style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none'
      }}>
        <div className="nav-logo">
          <HeartPulse size={32} />
          <span>MedCare</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <Link to="/book" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
          <Calendar size={18} /> Book Appointment
        </Link>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
          src="https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4"
        />
        <div className="hero-content">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="hero-badge">
              Leading Healthcare Provider
            </motion.div>
            <motion.h1 variants={fadeIn}>
              Advanced Healthcare, Compassionate Professionals
            </motion.h1>
            <motion.p variants={fadeIn}>
              Experience world-class medical facilities and expert doctors dedicated to your health and well-being. We combine cutting-edge technology with human touch.
            </motion.p>
            <motion.div variants={fadeIn} className="hero-buttons">
              <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                Get Started <ArrowRight size={18} />
              </button>
              <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <PhoneCall size={18} /> Emergency 24/7
              </button>
            </motion.div>
            </motion.div>
            
            {/* Embedded Stats */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="hero-stats"
              style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '40px', marginTop: '60px' }}
            >
              <motion.div variants={fadeIn} className="stat-item">
                <h3>100+</h3>
                <p>Specialist Doctors</p>
              </motion.div>
              <motion.div variants={fadeIn} className="stat-item">
                <h3>10k+</h3>
                <p>Happy Patients</p>
              </motion.div>
              <motion.div variants={fadeIn} className="stat-item">
                <h3>25+</h3>
                <p>Years Experience</p>
              </motion.div>
              <motion.div variants={fadeIn} className="stat-item">
                <h3>24/7</h3>
                <p>Emergency Care</p>
              </motion.div>
            </motion.div>

        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="services">
        <div className="section-header">
          <h2>Our Medical Services</h2>
          <p>Comprehensive healthcare solutions tailored to your needs, delivered by renowned specialists using modern technology.</p>
        </div>
        
        <motion.div 
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeIn} className="service-card">
              <div className="service-icon-wrapper">
                {React.cloneElement(service.icon, { size: 32 })}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="footer-content">
          <div className="footer-col">
            <div className="footer-logo">
              <HeartPulse size={28} color="var(--accent)" />
              <span>MedCare</span>
            </div>
            <p>Providing advanced medical care with a focus on compassion and innovation. Your health is our top priority.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#doctors">Doctors</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <PhoneCall size={16} /> +1 (555) 123-4567
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={16} /> Mon - Sun: 24/7 Open
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} MedCare Hospital. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
