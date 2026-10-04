import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, ArrowUpRight, PhoneCall } from 'lucide-react';
import { CollegeInfo } from '../data/universityData';

interface NavbarProps {
  college: CollegeInfo;
  activeSection: string;
  setActiveSection: (section: string) => void;
  onEnquireClick: () => void;
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  college,
  activeSection,
  setActiveSection,
  onEnquireClick,
  onApplyClick
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'academics', label: 'ACADEMICS' },
    { id: 'admissions', label: 'ADMISSIONS' },
    { id: 'campus-careers', label: 'CAMPUS & CAREERS' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomeTop = activeSection === 'home' && !scrolled;

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isHomeTop
          ? 'bg-slate-950/30 backdrop-blur-md border-b border-white/10 py-4 shadow-none'
          : 'bg-[#031A14] backdrop-blur-xl border-b border-amber-500/20 py-3.5 shadow-2xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LEFT: LOGO & BRAND */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric via-blue-600 to-navy-light flex items-center justify-center text-white shadow-lg shadow-electric/25 group-hover:scale-105 transition-transform duration-300 border border-white/20">
              <Compass className="w-5 h-5 text-gold animate-pulse-subtle" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none flex items-center gap-2">
                <span>{college.shortName}</span>
                <span className="text-[10px] font-sans font-semibold tracking-widest uppercase bg-gold/20 text-gold px-1.5 py-0.5 rounded border border-gold/30">
                  Autonomous
                </span>
              </div>
              <div className="text-[11px] font-sans font-medium text-slate-300 tracking-wider uppercase mt-0.5 group-hover:text-gold transition-colors">
                Northstar Institute
              </div>
            </div>
          </button>

          {/* CENTER: 5 PRIMARY NAVIGATION LINKS */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-xs lg:text-sm font-semibold tracking-wider transition-all relative ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-gold to-electric rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* RIGHT: ACTION BUTTONS */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onEnquireClick}
              className="px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase text-slate-200 border border-slate-600 hover:border-slate-400 hover:bg-white/5 transition flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold" />
              <span>Enquire</span>
            </button>

            <button
              onClick={onApplyClick}
              className="px-5 py-2 rounded-lg text-xs font-bold tracking-wider uppercase text-navy bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-hover hover:to-gold shadow-md hover:shadow-gold-glow transition-all duration-300 flex items-center gap-1.5 transform hover:-translate-y-0.5"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* MOBILE HAMBURGER TOGGLE */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onApplyClick}
              className="px-3 py-1.5 rounded-md text-xs font-bold uppercase text-navy bg-gold text-[11px]"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav-scrolled border-b border-white/10 px-4 pt-4 pb-6 mt-2 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-semibold tracking-wider transition ${
                    isActive
                      ? 'bg-electric text-white'
                      : 'text-slate-200 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5 mt-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onEnquireClick(); }}
                className="w-full py-3 rounded-lg text-sm font-semibold text-center border border-slate-500 text-slate-200 hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-gold" />
                <span>Enquire Now</span>
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onApplyClick(); }}
                className="w-full py-3 rounded-lg text-sm font-bold text-center text-navy bg-gold hover:bg-gold-hover transition shadow-lg flex items-center justify-center gap-2"
              >
                <span>Apply For 2027 Admissions</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
