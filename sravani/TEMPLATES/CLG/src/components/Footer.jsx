import React from 'react';
import { GraduationCap, ArrowUp, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { collegeInfo } from '../data/collegeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Our Story', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Campus Life', href: '#campus-life' },
    { name: 'Admissions & Contact', href: '#admissions' },
  ];

  const academicLinks = [
    'Undergraduate Programs',
    'Postgraduate Programs',
    'School of Science',
    'School of Commerce',
    'School of Management',
    'Computer Science & IT',
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-navy-800/80">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-navy-800 to-sky-600 flex items-center justify-center text-gold-400 border border-white/20 shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Green Valley <span className="text-gold-400">College</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Inspiring minds, cultivating ethical leaders, and empowering breakthrough innovation since 1989. Accredited Grade A++ by the National Academic Council.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{collegeInfo.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{collegeInfo.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{collegeInfo.admissionsEmail}</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-gold-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Divisions */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Academic Divisions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {academicLinks.map((prog, idx) => (
                <li key={idx}>
                  <a
                    href="#academics"
                    className="text-slate-400 hover:text-sky-300 transition-colors inline-block"
                  >
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions & Office Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Admissions Office
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Applications for the Fall 2026 term are currently being reviewed on a rolling basis. Contact our admissions advisors for guidance.
            </p>
            <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-800 text-xs text-slate-300 space-y-1">
              <span className="font-semibold text-white block">Advising Hours:</span>
              <span>Mon - Fri: 8:00 AM – 6:00 PM EST</span>
              <span className="block text-gold-400">Campus visits by appointment</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Social & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Green Valley College. All rights reserved. Fictional institutional showcase.
          </div>

          <div className="flex items-center space-x-6">
            <a href="#about" className="hover:text-slate-200 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-slate-200 transition-colors">Terms of Use</a>
            <a href="#about" className="hover:text-slate-200 transition-colors">Accreditation</a>
            
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white transition-all border border-navy-800 flex items-center gap-1 shadow-sm"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
