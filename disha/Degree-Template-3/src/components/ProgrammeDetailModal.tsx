import React from 'react';
import { X, Clock, BookOpen, Briefcase, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Programme } from '../data/universityData';

interface ProgrammeDetailModalProps {
  programme: Programme | null;
  onClose: () => void;
  onApplyClick: (progId: string) => void;
}

export const ProgrammeDetailModal: React.FC<ProgrammeDetailModalProps> = ({
  programme,
  onClose,
  onApplyClick
}) => {
  if (!programme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/85 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-navy border border-electric/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-white my-8 max-h-[90vh] flex flex-col">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto pr-2 space-y-6 no-scrollbar">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest bg-electric/20 text-electric-light px-2.5 py-1 rounded border border-electric/30">
                {programme.degree}
              </span>
              <span className="text-xs font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded border border-gold/30">
                {programme.disciplineName}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
              {programme.name}
            </h2>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              {programme.description}
            </p>
          </div>

          {/* Key Facts Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-navy-dark p-4 rounded-xl border border-slate-700 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Duration:</span>
              <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-gold" /> {programme.duration}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Seats:</span>
              <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                <BookOpen className="w-3.5 h-3.5 text-electric" /> {programme.seats} Intake
              </span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Mode:</span>
              <span className="font-bold text-white mt-0.5 block">{programme.mode}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Demo Fee:</span>
              <span className="font-bold text-gold font-mono mt-0.5 block">{programme.annualFeeDemo}</span>
            </div>
          </div>

          {/* Curriculum Highlights */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" /> Curriculum & Core Modules
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {programme.curriculumHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white/5 p-3 rounded-lg border border-white/10 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Criteria */}
          <div className="bg-navy-dark/70 p-4 rounded-xl border border-slate-700">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-400 mb-1">
              Eligibility Requirement — DEMO
            </h4>
            <p className="text-sm font-semibold text-slate-200">
              {programme.eligibility}
            </p>
          </div>

          {/* Career Pathways */}
          <div>
            <h4 className="font-heading font-bold text-lg text-white mb-3 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-electric-light" /> Career Pathways & Roles
            </h4>
            <div className="flex flex-wrap gap-2">
              {programme.careerAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="bg-navy-dark border border-electric/30 text-electric-light text-xs font-semibold px-3 py-1.5 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              ⚡ Early applications eligible for presidential merit grants.
            </div>
            <button
              onClick={() => {
                onClose();
                onApplyClick(programme.id);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-gold to-gold-hover text-navy font-bold rounded-lg hover:shadow-gold-glow transition flex items-center justify-center gap-2 text-sm"
            >
              <span>Apply for {programme.degree}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
