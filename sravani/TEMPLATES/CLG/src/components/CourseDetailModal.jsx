import React from 'react';
import { X, CheckCircle2, Clock, Award, Briefcase, BookOpen, ArrowRight } from 'lucide-react';

export default function CourseDetailModal({ program, onClose, onApply }) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn">
        
        {/* Header Bar */}
        <div className="bg-navy-950 text-white p-6 sm:p-8 flex items-start justify-between">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-gold-400">
              {program.category}
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              {program.title}
            </h3>
            <p className="text-xs sm:text-sm text-sky-200 mt-1 max-w-lg">
              {program.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key Facts */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                <Clock className="w-4 h-4 text-navy-800" />
                <span>Program Duration</span>
              </div>
              <p className="text-base font-bold text-navy-950">{program.details.duration}</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                <Award className="w-4 h-4 text-gold-600" />
                <span>Accreditation</span>
              </div>
              <p className="text-base font-bold text-navy-950">Grade A++ Certified</p>
            </div>
          </div>

          {/* Degrees Offered */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-2.5 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-navy-800" />
              <span>Conferred Degrees & Specializations</span>
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {program.details.degrees.map((deg, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 bg-navy-50/50 p-2.5 rounded-xl border border-navy-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">{deg}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum Structure */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5">
              Curriculum & Practical Exposure
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {program.details.curriculum}
            </p>
          </div>

          {/* Career Prospects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-gold-600" />
              <span>Career & Industry Pathways</span>
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {program.details.careerProspects}
            </p>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply();
              }}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Apply for this Program</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
