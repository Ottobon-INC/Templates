import React from 'react';
import { Compass, MapPin, Phone, Mail, Globe, ArrowUp, ShieldCheck } from 'lucide-react';
import { collegeData } from '../data/universityData';

interface FooterProps {
  setActiveSection: (sec: string) => void;
  onEnquireClick: () => void;
  onApplyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveSection,
  onEnquireClick,
  onApplyClick
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-slate-300 border-t border-slate-800 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric to-navy-light flex items-center justify-center text-gold border border-white/20">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <div className="font-heading font-extrabold text-xl text-white">
                  {collegeData.name}
                </div>
                <div className="text-xs text-gold font-semibold uppercase tracking-widest">
                  {collegeData.type}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              "{collegeData.tagline}" — Established in {collegeData.established}. Delivering credit-based multidisciplinary degree education, research laboratories, and placement training across 32+ undergraduate programmes.
            </p>

            <div className="text-xs text-slate-400 space-y-1.5 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{collegeData.location.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-electric-light flex-shrink-0" />
                <span>{collegeData.location.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{collegeData.location.email}</span>
              </div>
            </div>
          </div>

          {/* Quick Section Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Primary Sections
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'about', label: 'ABOUT INSTITUTION' },
                { id: 'academics', label: 'ACADEMICS & PROGRAMMES' },
                { id: 'admissions', label: 'ADMISSIONS 2027' },
                { id: 'campus-careers', label: 'CAMPUS & CAREERS' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      scrollToTop();
                    }}
                    className="hover:text-gold transition flex items-center gap-1.5"
                  >
                    <span>→</span> {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions & Rebranding Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Student Actions
            </h4>

            <div className="flex flex-col gap-2.5">
              <button
                onClick={onApplyClick}
                className="w-full py-2.5 bg-gold hover:bg-gold-hover text-navy font-bold text-xs rounded-lg transition shadow"
              >
                Apply Online for 2027
              </button>

              <button
                onClick={onEnquireClick}
                className="w-full py-2.5 bg-navy border border-slate-700 hover:border-slate-500 text-slate-200 font-semibold text-xs rounded-lg transition"
              >
                Send Admission Enquiry
              </button>
            </div>

            {/* Template Demo Notice */}
            <div className="bg-navy p-3.5 rounded-xl border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="font-bold text-gold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> REREBRANDABLE CLIENT DEMO
              </div>
              <p>
                This template uses fictional demonstration statistics, recruiter names, and rankings. All components are driven by <code className="text-electric-light">universityData.ts</code>.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2027 {collegeData.name} ({collegeData.shortName}). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Admission</span>
            <span className="hover:underline cursor-pointer">Mandatory Disclosures</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-navy border border-slate-700 rounded-lg hover:text-white transition"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
