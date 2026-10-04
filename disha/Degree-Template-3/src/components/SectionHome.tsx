import React, { useState, useEffect } from 'react';
import {
  Compass,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Code,
  Atom,
  TrendingUp,
  Briefcase,
  BookOpen,
  Video,
  Quote
} from 'lucide-react';
import {
  collegeData,
  statisticsData,
  disciplinesData,
  placementStatData,
  recruitersData,
  alumniStoriesData
} from '../data/universityData';
import { AnimatedCounter } from './AnimatedCounter';

interface SectionHomeProps {
  onNavigateSection: (sectionId: string) => void;
  onApplyClick: () => void;
  onOpenProgrammeModal: (progId: string) => void;
}

export const SectionHome: React.FC<SectionHomeProps> = ({
  onNavigateSection,
  onApplyClick,
  onOpenProgrammeModal
}) => {
  const [activeAlumniIndex, setActiveAlumniIndex] = useState(0);

  // Hero Background Slideshow State
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const heroSlides = [
    {
      id: 1,
      image: '/images/hero_courtyard.jpg',
      title: 'Coastal Quadrangle & Student Commons',
      subtitle: 'Visakhapatnam Main Campus'
    },
    {
      id: 2,
      image: '/images/hero_campus.jpg',
      title: 'Main Academic Building & Central Lawn',
      subtitle: 'Coastal Knowledge Hub'
    },
    {
      id: 3,
      image: '/images/library_lab.jpg',
      title: 'Innovation & AI Research Hub',
      subtitle: 'Robotics & Computing Pods'
    },
    {
      id: 4,
      image: '/images/hero_auditorium.jpg',
      title: 'Grand Auditorium & Digital Conference Center',
      subtitle: '1,200-Seat Academic Symposia Complex'
    }
  ];

  // Preload all hero images on mount to ensure ZERO lag on slide click
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Auto-play timer for hero background slideshow (continuous loop every 4.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Auto-play timer for Student Stories & Alumni Carousel (continuous loop every 4 seconds)
  useEffect(() => {
    if (alumniStoriesData.length === 0) return;

    const timer = setInterval(() => {
      setActiveAlumniIndex((prev) => (prev + 1) % alumniStoriesData.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleNextHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const disciplineIcons: Record<string, React.ReactNode> = {
    computing: <Code className="w-6 h-6" />,
    science: <Atom className="w-6 h-6" />,
    commerce: <TrendingUp className="w-6 h-6" />,
    management: <Briefcase className="w-6 h-6" />,
    arts: <BookOpen className="w-6 h-6" />,
    media: <Video className="w-6 h-6" />
  };

  const handleNextAlumni = () => {
    setActiveAlumniIndex((prev) => (prev + 1) % alumniStoriesData.length);
  };

  const handlePrevAlumni = () => {
    setActiveAlumniIndex((prev) => (prev - 1 + alumniStoriesData.length) % alumniStoriesData.length);
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* ================= HERO SECTION WITH CLEAR VIVID IMAGES & HIGH-CONTRAST DARK GRADIENT OVERLAY ================= */}
      <section className="relative min-h-[92vh] -mt-16 sm:-mt-20 pt-24 sm:pt-28 flex items-center justify-center overflow-hidden bg-slate-950 pb-20 group">
        
        {/* Background Images Layer — Crisp, High-Vibrancy Campus Photos */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${
              idx === activeHeroSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-105 contrast-105 saturate-105"
            />
            {/* Non-obscuring Dark Gradient Overlay: Clear Image Visibility on Right, Readable Text on Left */}
            <div className="absolute inset-0 bg-slate-950/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/45 via-slate-950/25 to-transparent max-w-5xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-slate-950/15" />
          </div>
        ))}

        {/* Manual Slideshow Chevron Controls */}
        <button
          onClick={handlePrevHeroSlide}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-slate-950 hover:bg-amber-400 hover:scale-110 transition-all duration-300 shadow-2xl backdrop-blur-md"
          aria-label="Previous Campus Photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNextHeroSlide}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:text-slate-950 hover:bg-amber-400 hover:scale-110 transition-all duration-300 shadow-2xl backdrop-blur-md"
          aria-label="Next Campus Photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Hero Content — Crisp High-Contrast Editorial Typography */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wide shadow-lg">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{collegeData.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-amber-300 font-extrabold">{collegeData.location.city.toUpperCase()}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.08] drop-shadow-lg">
              {collegeData.tagline.toUpperCase()}
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl drop-shadow">
              Discover a multidisciplinary education built around knowledge, experience, innovation and opportunity.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigateSection('academics')}
                className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-sm tracking-wider uppercase rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-600" />
              </button>

              <button
                onClick={onApplyClick}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-extrabold text-sm tracking-wider uppercase rounded-xl shadow-xl hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2 border border-amber-300/40"
              >
                <span>Apply Now</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-slate-200 border-t border-white/15">
              <span className="flex items-center gap-1.5 font-bold text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Autonomous Degree Status
              </span>
              <span className="flex items-center gap-1.5 font-bold text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Est. {collegeData.established}
              </span>
              <span className="flex items-center gap-1.5 font-bold text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 18-Acre Coastal Campus
              </span>
            </div>

            {/* Miniature Stats Box */}
            <div className="pt-10">
              <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 shadow-2xl w-full max-w-2xl pointer-events-auto">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 text-center divide-x divide-white/10">
                  {statisticsData.map((stat) => (
                    <div key={stat.id} className="px-2">
                      <div className="font-heading font-extrabold text-xl sm:text-2xl text-amber-400 mb-1">
                        <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="font-bold text-[9px] uppercase tracking-wider text-slate-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>



      </section>



      {/* ================= WHY NORTHSTAR ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-electric-light">
              Multidisciplinary Breadth
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
              ONE INSTITUTION <br />
              <span className="text-gradient-gold">MANY DIRECTIONS</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              At Northstar Institute, students build specialized expertise while exploring cross-disciplinary subjects across six academic schools.
            </p>
          </div>

          <button
            onClick={() => onNavigateSection('academics')}
            className="self-start md:self-auto px-6 py-3 rounded-xl border border-electric/40 text-electric-light hover:bg-electric/10 font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
          >
            <span>View All 32+ Programmes</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Tall Image-Led Cards Side-by-Side in 1 Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {disciplinesData.slice(0, 4).map((disc) => (
            <div
              key={disc.id}
              onClick={() => onNavigateSection('academics')}
              className="group relative h-96 sm:h-[410px] rounded-2xl overflow-hidden border border-slate-700/80 hover:border-gold/60 cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Background Image */}
              <img
                src={disc.image}
                alt={disc.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 absolute inset-0"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/75 to-transparent group-hover:via-navy-dark/85 transition-all z-0" />

              {/* Content */}
              <div className="relative inset-0 p-5 flex flex-col justify-between h-full z-10">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-amber-300 flex items-center justify-center shadow-lg">
                    {disciplineIcons[disc.id] || <Compass className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest bg-slate-950/85 backdrop-blur-md text-amber-300 px-3 py-1 rounded-full border border-amber-400/40 shadow-lg">
                    {disc.programmesCount} Tracks
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white group-hover:text-amber-300 transition-colors leading-tight">
                    {disc.name}
                  </h3>
                  <p className="text-xs text-slate-200 line-clamp-3 leading-relaxed drop-shadow-sm">
                    {disc.description}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {disc.highlights.map((h, i) => (
                      <span key={i} className="text-[10px] bg-slate-900/80 backdrop-blur-sm text-slate-200 px-2 py-0.5 rounded-md border border-white/15 shadow-sm">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-electric-light group-hover:text-white transition">
                    <span>Explore School</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ================= OUTCOMES ================= */}
      <section className="bg-navy-dark py-16 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/30">
              Career Outcomes & Industry Connection
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
              WHERE EDUCATION MEETS OPPORTUNITY
            </h2>
            <p className="text-slate-300 text-sm">
              Our graduates enter leading technology firms, financial institutions, media houses, and scientific research labs worldwide.
            </p>
          </div>

          {/* Outcomes Stat Badges */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-navy p-5 rounded-2xl border border-slate-700 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{placementStatData.recruitingPartners}</div>
              <div className="text-xs font-bold text-gold uppercase mt-1">Recruiting Partners</div>
            </div>
            <div className="bg-navy p-5 rounded-2xl border border-slate-700 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">{placementStatData.internshipsOffered}</div>
              <div className="text-xs font-bold text-gold uppercase mt-1">Internship Offers</div>
            </div>
            <div className="bg-navy p-5 rounded-2xl border border-slate-700 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">{placementStatData.placementAssistanceRate}</div>
              <div className="text-xs font-bold text-slate-300 uppercase mt-1">Placement Record</div>
            </div>
            <div className="bg-navy p-5 rounded-2xl border border-slate-700 text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-electric-light font-heading">{placementStatData.avgPackageDemo}</div>
              <div className="text-xs font-bold text-slate-300 uppercase mt-1">Avg Package — DEMO</div>
            </div>
            <div className="bg-navy p-5 rounded-2xl border border-slate-700 text-center col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-gold font-heading">{placementStatData.highestPackageDemo}</div>
              <div className="text-xs font-bold text-gold uppercase mt-1">Highest Package — DEMO</div>
            </div>
          </div>

          {/* Recruiter Logos Infinite Horizontal Rotation Banner */}
          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-center text-xs font-semibold text-slate-400 px-1">
              <span className="tracking-wider uppercase font-bold text-slate-300">
                140+ FEATURED HIRING & INDUSTRY PARTNERS
              </span>
              <span className="text-[10px] bg-gold/10 text-gold border border-gold/30 px-2.5 py-0.5 rounded-full font-bold">
                Infinite Ticker • Hover to Pause
              </span>
            </div>

            {/* Marquee Outer Wrapper with Edge Fade Gradient Overlays */}
            <div className="relative overflow-hidden py-2 space-y-3">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy-dark to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy-dark to-transparent z-10 pointer-events-none" />

              {/* Row 1: Leftward Scrolling Ticker */}
              <div className="flex gap-4 animate-marquee cursor-pointer">
                {[...recruitersData.slice(0, 8), ...recruitersData.slice(0, 8)].map((rec, idx) => (
                  <div
                    key={`row1-${rec.id}-${idx}`}
                    className="w-48 sm:w-56 shrink-0 bg-navy/80 border border-slate-700/70 hover:border-gold/60 rounded-xl p-3.5 px-5 flex flex-col items-center justify-center text-center hover:bg-slate-800/90 transition-all duration-300 shadow-md group"
                  >
                    <div className="font-heading font-black text-lg sm:text-xl text-slate-200 group-hover:text-gold tracking-widest transition-colors">
                      {rec.logoText}
                    </div>
                    <div className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors mt-0.5 truncate max-w-full">
                      {rec.industry}
                    </div>
                  </div>
                ))}
              </div>

              {/* Row 2: Rightward Scrolling Ticker */}
              <div className="flex gap-4 animate-marquee-reverse cursor-pointer">
                {[...recruitersData.slice(8, 16), ...recruitersData.slice(8, 16)].map((rec, idx) => (
                  <div
                    key={`row2-${rec.id}-${idx}`}
                    className="w-48 sm:w-56 shrink-0 bg-navy/80 border border-slate-700/70 hover:border-gold/60 rounded-xl p-3.5 px-5 flex flex-col items-center justify-center text-center hover:bg-slate-800/90 transition-all duration-300 shadow-md group"
                  >
                    <div className="font-heading font-black text-lg sm:text-xl text-slate-200 group-hover:text-gold tracking-widest transition-colors">
                      {rec.logoText}
                    </div>
                    <div className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors mt-0.5 truncate max-w-full">
                      {rec.industry}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= STUDENT STORIES CAROUSEL ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Alumni & Student Outcomes</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
              Student Stories & Graduate Journeys
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevAlumni}
              className="p-3 rounded-full bg-navy border border-slate-700 text-slate-300 hover:text-white hover:border-gold transition"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextAlumni}
              className="p-3 rounded-full bg-navy border border-slate-700 text-slate-300 hover:text-white hover:border-gold transition"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Story Highlight */}
        {alumniStoriesData.length > 0 && (
          <div className="bg-navy border border-electric/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-5 relative">
                <div key={activeAlumniIndex} className="aspect-square rounded-2xl overflow-hidden border-2 border-gold/40 shadow-xl animate-fade-in transition-all duration-500">
                  <img
                    src={alumniStoriesData[activeAlumniIndex].image}
                    alt={alumniStoriesData[activeAlumniIndex].name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-gold text-navy text-xs font-black uppercase px-3 py-1 rounded-lg shadow-lg z-10">
                  Batch {alumniStoriesData[activeAlumniIndex].graduationYear}
                </div>
              </div>

              <div key={`info-${activeAlumniIndex}`} className="md:col-span-7 space-y-5 transition-all duration-500 animate-fade-in">
                <Quote className="w-10 h-10 text-gold/40" />
                <p className="text-lg sm:text-xl text-slate-200 italic font-serif leading-relaxed">
                  "{alumniStoriesData[activeAlumniIndex].quote}"
                </p>

                <div className="pt-2 border-t border-slate-700">
                  <h4 className="font-heading font-extrabold text-2xl text-white">
                    {alumniStoriesData[activeAlumniIndex].name}
                  </h4>
                  <div className="text-sm font-semibold text-gold mt-0.5">
                    {alumniStoriesData[activeAlumniIndex].currentRole} @ {alumniStoriesData[activeAlumniIndex].company}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                    <span>{alumniStoriesData[activeAlumniIndex].degree}</span>
                    <span>•</span>
                    <span>{alumniStoriesData[activeAlumniIndex].location}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  {alumniStoriesData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveAlumniIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === activeAlumniIndex ? 'w-8 bg-gold' : 'w-2 bg-slate-700'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </section>

    </div>
  );
};
