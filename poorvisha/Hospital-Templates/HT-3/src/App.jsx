import React, { useState, useEffect } from 'react';
import { Activity, Calendar, Heart, Shield, Users, Stethoscope, Clock, Phone } from 'lucide-react';
import './App.css';
import Login from './Login';

const diseasesData = [
  { name: 'Asthma', description: 'A condition in which your airways narrow and swell and may produce extra mucus.' },
  { name: 'Arthritis', description: 'Inflammation of one or more of your joints, causing pain and stiffness.' },
  { name: 'Bronchitis', description: 'Inflammation of the lining of your bronchial tubes, which carry air to and from your lungs.' },
  { name: 'Cataracts', description: 'A clouding of the normally clear lens of your eye.' },
  { name: 'Diabetes', description: 'A group of diseases that result in too much sugar in the blood (high blood glucose).' },
  { name: 'Emphysema', description: 'A lung condition that causes shortness of breath.' },
  { name: 'Fibromyalgia', description: 'A disorder characterized by widespread musculoskeletal pain accompanied by fatigue.' },
  { name: 'Glaucoma', description: 'A group of eye conditions that damage the optic nerve.' },
  { name: 'Heart Arrhythmia', description: 'An irregular heartbeat that occurs when the electrical signals that coordinate the heart\'s beats don\'t work properly.' },
  { name: 'Hernia', description: 'A condition where an internal organ pushes through a weak spot in your muscle or tissue.' },
  { name: 'Hypertension', description: 'High blood pressure, a common condition where the long-term force of the blood against your artery walls is high enough to cause health problems.' },
  { name: 'Hyperthyroidism', description: 'A condition in which your thyroid gland produces too much of the hormone thyroxine.' },
  { name: 'Insomnia', description: 'A common sleep disorder that can make it hard to fall asleep or stay asleep.' },
  { name: 'Jaundice', description: 'A yellowish tinge to the skin and the whites of the eyes.' },
  { name: 'Kidney Stones', description: 'Hard deposits made of minerals and salts that form inside your kidneys.' },
  { name: 'Leukemia', description: 'Cancer of the body\'s blood-forming tissues, including the bone marrow.' },
  { name: 'Migraine', description: 'A headache that can cause severe throbbing pain or a pulsing sensation.' },
  { name: 'Neuropathy', description: 'Weakness, numbness and pain from nerve damage.' },
  { name: 'Osteoporosis', description: 'A condition that causes bones to become weak and brittle.' },
  { name: 'Pneumonia', description: 'An infection that inflames the air sacs in one or both lungs.' },
  { name: 'Rosacea', description: 'A common skin condition that causes redness and visible blood vessels in your face.' },
  { name: 'Scoliosis', description: 'A sideways curvature of the spine.' },
  { name: 'Tonsillitis', description: 'Inflammation of the tonsils, two oval-shaped pads of tissue at the back of the throat.' },
  { name: 'Ulcer', description: 'A sore that develops on the lining of the esophagus, stomach or small intestine.' },
  { name: 'Vertigo', description: 'A sensation of feeling off balance.' },
  { name: 'Yeast Infection', description: 'A fungal infection that causes irritation, discharge and intense itchiness.' },
  { name: 'Yellow Fever', description: 'A viral infection spread by a particular species of mosquito.' },
  { name: 'Zika Virus', description: 'A disease caused by a virus transmitted primarily by mosquitoes.' }
];

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredDiseases = selectedLetter 
    ? diseasesData.filter(d => d.name.startsWith(selectedLetter)) 
    : [];

  if (currentPage === 'login') {
    return <Login onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="animate-fade-in">
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          <a href="#" className="logo">
            <Heart color="var(--primary)" size={28} />
            Veridia Health
          </a>
          <ul className="nav-links">
            <li><a href="#services">Specialties</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#doctors">Physicians</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-actions" style={{ alignItems: 'center', gap: '0.5rem' }}>
            <a href="#" className="btn-arrow" style={{ width: '15rem' }} onClick={(e) => { e.preventDefault(); setCurrentPage('login'); }}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Portal & Booking</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ flexDirection: 'column' }}>
        <video autoPlay loop muted playsInline className="hero-video">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        
        <div className="container hero-content" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1>Excellence in Healthcare, Rooted in Compassion.</h1>
          <p>
            Experience a new standard of medical care. At Veridia Health, we blend state-of-the-art 
            technology with warm, personalized attention to ensure your well-being.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
            <a href="#" className="btn-arrow">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Our Services</span>
            </a>
            
            <a href="#" className="btn-arrow" style={{ width: '15rem' }}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow" />
              </span>
              <span className="button-text">Meet Our Doctors</span>
            </a>
          </div>
        </div>

        {/* Stats Section Merged into Hero */}
        <div className="container grid grid-4 text-center" style={{ position: 'relative', zIndex: 1, paddingBottom: '3rem', width: '100%', paddingTop: '3rem' }}>
          <div className="stat-item">
            <h3 style={{ color: 'var(--secondary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>25+</h3>
            <p style={{ color: 'var(--text-main)', opacity: 0.8 }}>Years of Excellence</p>
          </div>
          <div className="stat-item">
            <h3 style={{ color: 'var(--secondary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>150+</h3>
            <p style={{ color: 'var(--text-main)', opacity: 0.8 }}>Specialist Doctors</p>
          </div>
          <div className="stat-item">
            <h3 style={{ color: 'var(--secondary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>50k+</h3>
            <p style={{ color: 'var(--text-main)', opacity: 0.8 }}>Happy Patients</p>
          </div>
          <div className="stat-item">
            <h3 style={{ color: 'var(--secondary)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>24/7</h3>
            <p style={{ color: 'var(--text-main)', opacity: 0.8 }}>Emergency Care</p>
          </div>
        </div>
      </section>

      {/* Features/Services */}
      <section id="services" className="section container">
        <div className="text-center" style={{ marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem' }}>
          <h2>Comprehensive Care</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            We provide a wide range of specialized medical services tailored to your unique needs, 
            delivered by leading experts in a comforting environment.
          </p>
        </div>
        
        <div className="grid grid-3">
          <div className="service-card">
            <div className="service-icon">
              <Stethoscope size={24} />
            </div>
            <h3>Primary Care</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
              Comprehensive health management, preventive care, and wellness planning for the entire family.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <Activity size={24} />
            </div>
            <h3>Cardiology</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
              Advanced diagnostics and treatment for heart conditions using cutting-edge medical technology.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <Shield size={24} />
            </div>
            <h3>Neurology</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
              Expert care for disorders of the nervous system, providing accurate diagnosis and effective management.
            </p>
          </div>
        </div>
      </section>

      {/* A-Z Directory */}
      <section id="directory" className="section container" style={{ paddingTop: '2rem' }}>
        <div className="text-center" style={{ marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
          <h2>Browse Treatments & Procedures by A-Z</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Explore our comprehensive medical directory to learn more about conditions, symptoms, and the advanced treatments we offer.
          </p>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '4rem' }}>
          {['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].map(letter => (
            <button 
              key={letter} 
              className={`alphabet-btn ${selectedLetter === letter ? 'active' : ''}`}
              onClick={() => setSelectedLetter(letter)}
            >
              {letter}
            </button>
          ))}
        </div>

        <div className="grid grid-2">
          {selectedLetter === null ? (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.2rem' }}>Please select a letter above to browse our directory.</p>
            </div>
          ) : filteredDiseases.length > 0 ? (
            filteredDiseases.map((disease, index) => (
              <div 
                key={disease.name} 
                className="service-card disease-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1rem', 
                  padding: '2rem',
                  animationDelay: `${index * 0.1}s` 
                }}
              >
                <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{disease.name}</h3>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>{disease.description}</p>
                <a href="#" style={{ color: 'var(--secondary)', fontWeight: '600', textDecoration: 'none', marginTop: 'auto' }}>Read More →</a>
              </div>
            ))
          ) : (
            <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.2rem' }}>No treatments or procedures currently listed starting with "{selectedLetter}".</p>
            </div>
          )}
        </div>
      </section>



      {/* Footer / CTA Combined */}
      <footer className="footer" style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '4rem' }}>
        <div className="container" style={{ marginBottom: '4rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 10px 30px rgba(26,66,49,0.05)' }}>
            <div style={{ maxWidth: '50%' }}>
              <h2>Ready to prioritize your health?</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem', marginBottom: '2rem' }}>
                Schedule a consultation with our experts today. We offer flexible appointment times to fit your busy life.
              </p>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <a href="#" className="btn btn-primary"><Calendar size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} /> Book Now</a>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--primary)' }}>
                  <Phone size={20} /> (555) 123-4567
                </span>
              </div>
            </div>
            <div style={{ width: '40%', height: '300px', backgroundColor: 'var(--secondary-light)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
               <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'linear-gradient(45deg, #1a4231 0%, #2c5f49 100%)', opacity: 0.1 }}></div>
               <Users size={64} color="var(--primary)" opacity={0.5} />
            </div>
          </div>
        </div>

        <div className="container grid grid-4">
          <div>
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)' }}>
               <Heart size={24} color="var(--primary)" /> Veridia Health
            </h3>
            <p style={{ marginTop: '1rem', opacity: 0.8 }}>
              Setting the standard in professional, compassionate healthcare for our community.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--primary)' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', opacity: 0.8 }}>Home</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', opacity: 0.8 }}>About Us</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', opacity: 0.8 }}>Our Services</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', opacity: 0.8 }}>Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--primary)' }}>Services</h4>
            <ul style={{ listStyle: 'none', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', opacity: 0.8 }}>Cardiology</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', opacity: 0.8 }}>Neurology</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', opacity: 0.8 }}>Orthopedics</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none', opacity: 0.8 }}>Pediatrics</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--primary)' }}>Contact Info</h4>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', opacity: 0.8 }}>
              <p>123 Medical Center Blvd.<br />Suite 100<br />New York, NY 10001</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Phone size={16} /> (555) 123-4567</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> Mon - Fri: 8am - 8pm</p>
            </div>
          </div>
        </div>
        
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} Veridia Health. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
