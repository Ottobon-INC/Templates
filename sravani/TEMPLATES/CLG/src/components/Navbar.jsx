import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, GraduationCap, ChevronRight } from 'lucide-react';
import { collegeInfo } from '../data/collegeData';

export default function Navbar({ onOpenApplyModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'academics', 'campus-life', 'admissions'];
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Academics', href: '#academics', id: 'academics' },
    { name: 'Campus Life', href: '#campus-life', id: 'campus-life' },
    { name: 'Admissions & Contact', href: '#admissions', id: 'admissions' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={`hidden md:block bg-navy-950/95 text-slate-300 text-xs border-b border-navy-800/80 transition-all duration-300 ${isScrolled ? 'py-1 opacity-90' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{collegeInfo.phone}</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{collegeInfo.admissionsEmail}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              Fall Admissions Open
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-slate-400">Accredited Grade A++ by Academic Council</span>
            <a 
              href="#admissions" 
              onClick={(e) => handleNavClick(e, '#admissions')} 
              className="text-gold-400 hover:text-gold-300 font-medium transition-colors flex items-center gap-1"
            >
              Virtual Tour <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-soft-lg py-3 border-b border-navy-800/80'
            : 'bg-navy-900/85 backdrop-blur-md py-4 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-navy-800 via-navy-700 to-sky-600 flex items-center justify-center shadow-md border border-white/20 group-hover:scale-105 transition-transform duration-200">
                <GraduationCap className="w-6 h-6 text-gold-400 group-hover:rotate-6 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                  Green Valley <span className="text-gold-400 font-semibold">College</span>
                </span>
                <span className="text-[10px] sm:text-xs text-sky-200 font-medium tracking-wider uppercase">
                  Excellence • Integrity • Innovation
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-white bg-white/10 shadow-inner'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gold-400 rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center space-x-3">
              <button
                onClick={onOpenApplyModal}
                className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 shadow-md hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-200"
              >
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={onOpenApplyModal}
                className="sm:hidden px-3 py-1.5 text-xs font-bold text-navy-950 bg-gold-400 rounded-lg hover:bg-gold-300 transition-colors"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950/98 border-t border-navy-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-gold-500/20 text-gold-300 border-l-4 border-gold-400 font-semibold'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-navy-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplyModal();
                }}
                className="w-full py-3 rounded-xl text-center text-sm font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 shadow-md hover:from-gold-300 hover:to-gold-400 transition-all"
              >
                Begin Application Online
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
