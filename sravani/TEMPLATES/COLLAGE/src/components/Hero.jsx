import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export default function Hero({ onOpenEnquiry }) {
  const slides = [
    {
      id: 1,
      // Group of college students walking outdoors on campus with books, exactly matching the reference mood
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
      title: 'SHAPE YOUR FUTURE WITH EXCELLENCE',
      subtitle: 'Premier 2-Year Intermediate College with specialized streams in MPC, BiPC, MEC & CEC. Comprehensive curriculum integrated with IIT-JEE, NEET & CA Foundation coaching.',
      btn1Text: 'GET STARTED NOW',
      btn2Text: 'TAKE A TOUR',
    },
    {
      id: 2,
      // Modern university campus library & study space
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=80',
      title: 'WORLD-CLASS LABORATORIES & FACULTY',
      subtitle: 'State-of-the-art science laboratories, digital smart boards, dedicated doubt-clearing sessions, and mentorship by senior PhD & IITian faculty.',
      btn1Text: 'EXPLORE COURSES',
      btn2Text: 'APPLY NOW',
    },
    {
      id: 3,
      // Graduating students / student life
      image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=1920&q=80',
      title: 'CONSISTENT TOP RANKS IN COMPETITIVE EXAMS',
      subtitle: 'Over 98% pass rate in Intermediate Public Examinations with exceptional selections in premier engineering, medical, and commerce institutions nationwide.',
      btn1Text: 'DISCOVER STREAMS',
      btn2Text: 'ADMISSION ENQUIRY',
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="section-1" className="lincoln-hero-section">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Subtle darkening overlay matching Lincoln material theme */}
          <div className="hero-overlay"></div>
        </div>
      ))}

      {/* Hero Content Overlay (Text and Dual Buttons) */}
      <div className="container hero-content-container">
        <div className="hero-text-box">
          <h1 className="hero-title animate-title">
            {slides[currentSlide].title}
          </h1>

          <p className="hero-subtitle animate-subtitle">
            {slides[currentSlide].subtitle}
          </p>

          <div className="hero-buttons-row">
            <a href="#courses" className="btn btn-primary hero-btn-solid">
              {slides[currentSlide].btn1Text}
            </a>
            <button 
              className="btn btn-outline-white hero-btn-outline"
              onClick={onOpenEnquiry}
            >
              {slides[currentSlide].btn2Text}
            </button>
          </div>
        </div>
      </div>

      {/* Left and Right Nav Arrows matching the reference '<' and '>' */}
      <button 
        className="hero-arrow-btn hero-arrow-left" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button 
        className="hero-arrow-btn hero-arrow-right" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slide Indicators - Dash/dots at bottom center */}
      <div className="hero-indicators">
        {slides.map((_, idx) => (
          <button 
            key={idx} 
            className={`indicator-bar ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
