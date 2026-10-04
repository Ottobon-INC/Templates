import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Shield, Users, Stethoscope } from 'lucide-react';
import introVideo from '../assets/open_video.mp4';
import heroVideo from '../assets/gynec.mp4';
import './Home.css';

const Home = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const introVideoRef = useRef(null);
  const heroVideoRef = useRef(null);

  useEffect(() => {
    if (introVideoRef.current) {
      introVideoRef.current.playbackRate = 1.5;
    }
    if (heroVideoRef.current) {
      heroVideoRef.current.playbackRate = 1.5; // Increase play speed
    }
  }, [showVideo]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Reveal animations
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showVideo]);

  if (showVideo) {
    return (
      <div className="video-intro-container">
        <div className="intro-video-overlay"></div>
        <video 
          ref={introVideoRef}
          autoPlay 
          muted 
          playsInline
          onEnded={() => setShowVideo(false)}
          onError={(e) => {
            console.error("Video failed to load", e);
            setShowVideo(false);
          }}
          className="intro-video"
        >
          <source src={introVideo} type="video/mp4" />
        </video>
        <button className="skip-video-btn" onClick={() => setShowVideo(false)}>Skip Intro</button>
      </div>
    );
  }

  return (
    <div className="home-page">
      {/* 2. HERO SECTION */}
      <section className="hero-section">
        <div className="hero-bg-visual" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
          <div className="abstract-circle"></div>
          <div className="abstract-line line-1"></div>
          <div className="abstract-line line-2"></div>
        </div>
        
        <div className="container hero-container">
          <div className="hero-content animate-fade-in-up">
            <span className="subtitle">Elara Women's Institute</span>
            <h1 className="hero-title">Care Designed<br />Around Her.</h1>
            <p className="hero-description">
              From preventive care and reproductive health to maternity and specialized gynecology, 
              Elara brings expert women's healthcare together under one roof.
            </p>
            <div className="hero-actions">
              <Link to="/appointments" className="btn btn-primary">
                Book an Appointment
              </Link>
              <Link to="/womens-care" className="btn btn-secondary">
                Explore Women's Care
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper animate-fade-in-up" style={{ animationDelay: '0.2s', transform: `translateY(${scrollY * 0.1}px)` }}>
            {/* Fictional Doctor/Patient image using placeholder styling for premium look */}
            <div className="hero-image-placeholder">
              <video 
                ref={heroVideoRef}
                src={heroVideo}
                autoPlay 
                loop 
                muted 
                playsInline
                className="hero-video"
              />
              <div className="hero-image-overlay"></div>
            </div>
            <div className="hero-stats-badge" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
              <span className="stat-number">16+</span>
              <span className="stat-label">Years of Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK ACCESS / SERVICES SECTION */}
      <section className="services-section section-padding">
        <div className="container">
          <div className="text-center section-header reveal">
            <span className="subtitle">Specialized Care</span>
            <h2>Comprehensive Healthcare Services</h2>
          </div>
          
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-icon">
                <Heart size={28} />
              </div>
              <h3>Gynecology</h3>
              <p>Specialized care for every stage of life, from adolescence to menopause.</p>
              <Link to="/gynecology" className="service-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="service-card reveal" style={{ transitionDelay: '0.1s' }}>
              <div className="service-icon">
                <Users size={28} />
              </div>
              <h3>Maternity Care</h3>
              <p>Thoughtful support and advanced care for your journey to motherhood.</p>
              <Link to="/maternity" className="service-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
            
            <div className="service-card reveal" style={{ transitionDelay: '0.2s' }}>
              <div className="service-icon">
                <Activity size={28} />
              </div>
              <h3>Advanced Diagnostics</h3>
              <p>State-of-the-art imaging and screening tailored for women's health.</p>
              <Link to="/diagnostics" className="service-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT & TRUST SECTION */}
      <section className="about-section section-padding">
        <div className="container about-container">
          <div className="about-image-wrapper reveal" style={{ transform: `translateY(${(scrollY - 800) * 0.05}px)` }}>
            <div className="about-image-placeholder">
              <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=800&auto=format&fit=crop" alt="Elara Women's Institute Modern Facility" className="about-image" />
            </div>
            <div className="trust-stats-box" style={{ transform: `translateY(${(scrollY - 800) * -0.05}px)` }}>
              <div className="stat-item">
                <span className="stat-value">28+</span>
                <span className="stat-text">Specialists</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">32k</span>
                <span className="stat-text">Patient Visits</span>
              </div>
            </div>
          </div>
          
          <div className="about-content reveal">
            <span className="subtitle">About Elara</span>
            <h2>Healthcare that understands every stage of her life.</h2>
            <p className="mb-4">
              Elara Women's Institute brings together gynecology, maternity, reproductive health, 
              diagnostics, preventive care, and wellness in a beautifully designed, coordinated care environment.
            </p>
            <ul className="feature-list">
              <li>
                <Shield size={20} className="feature-icon" />
                <span>Expert multidisciplinary care teams</span>
              </li>
              <li>
                <Stethoscope size={20} className="feature-icon" />
                <span>State-of-the-art diagnostic technology</span>
              </li>
              <li>
                <Heart size={20} className="feature-icon" />
                <span>Compassionate, human-centered approach</span>
              </li>
            </ul>
            <Link to="/about" className="btn btn-primary mt-4">
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
