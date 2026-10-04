import React from 'react';
import { X, History, Milestone, CheckCircle2 } from 'lucide-react';
import { journeyMilestones } from '../data/collegeData';

export default function JourneyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        
        {/* Header */}
        <div className="bg-navy-950 text-white p-6 sm:p-8 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-500/30">
              <History className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Our Educational Journey</h3>
              <p className="text-xs sm:text-sm text-sky-200">35+ Years of Academic Distinction & Innovation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <p className="text-sm text-slate-600 leading-relaxed">
            From humble beginnings to global prominence, Green Valley College has continually transformed to empower scholars, spearhead scientific discovery, and shape generations of leaders.
          </p>

          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-navy-200">
            {journeyMilestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Dot */}
                <div className="absolute -left-[27px] sm:-left-[35px] top-1 w-6 h-6 rounded-full bg-white border-4 border-navy-900 group-hover:border-gold-500 transition-colors shadow-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                </div>

                <div className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 transition-all shadow-soft-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-gold-600 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
                      {item.year}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">Milestone</span>
                  </div>
                  <h4 className="text-base font-bold text-navy-950 mt-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-200 text-right">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-navy-950 hover:bg-navy-900 transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
