import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Microscope, 
  TrendingUp, 
  Briefcase, 
  Cpu, 
  ArrowRight, 
  BookOpenCheck,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { academicPrograms } from '../data/collegeData';

const iconMap = {
  GraduationCap: GraduationCap,
  Award: Award,
  Microscope: Microscope,
  TrendingUp: TrendingUp,
  Briefcase: Briefcase,
  Cpu: Cpu,
};

export default function Academics({ onSelectProgram, onOpenApplyModal }) {
  return (
    <section id="academics" className="py-20 lg:py-28 bg-white relative">
      {/* Subtle top divider background accent */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-sky-800 text-xs font-semibold tracking-wide uppercase mb-3">
            <BookOpenCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Academic Pathways to Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Learn Today. <span className="text-navy-700">Lead Tomorrow.</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-navy-800 via-gold-500 to-sky-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Green Valley College offers intellectually stimulating programs curated by distinguished academicians and industry luminaries to prepare tomorrow's pioneers.
          </p>
        </div>

        {/* 6 Academic Program Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicPrograms.map((program) => {
            const IconComponent = iconMap[program.icon] || GraduationCap;
            return (
              <div
                key={program.id}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-200 hover:border-sky-300 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Top Accent Gradient on Hover */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-navy-800 via-gold-500 to-sky-500 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-navy-900 shadow-md border border-slate-100 flex items-center justify-center text-navy-900 group-hover:text-gold-400 transition-all duration-300 group-hover:scale-110">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-slate-200/70 group-hover:bg-gold-100 text-slate-700 group-hover:text-gold-800 transition-colors">
                      {program.badge}
                    </span>
                  </div>

                  {/* Program Title */}
                  <div className="text-xs uppercase tracking-wider font-semibold text-sky-700 mb-1">
                    {program.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mb-3 group-hover:text-navy-800 transition-colors">
                    {program.title}
                  </h3>

                  {/* Program Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Quick Feature Highlights */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-200/70">
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{program.details.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                      <span>{program.details.degrees[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onSelectProgram(program)}
                    className="w-full py-3 px-4 rounded-xl text-sm font-semibold text-navy-900 bg-white group-hover:bg-navy-900 group-hover:text-white border border-slate-300 group-hover:border-navy-900 shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative z-10 max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Undecided on your academic pathway?
            </h3>
            <p className="text-sm text-slate-300">
              Our academic guidance counselors offer personalized 1-on-1 consultations to match your passions, skills, and future aspirations with the ideal program.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button
              onClick={onOpenApplyModal}
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-md transition-all duration-200"
            >
              Request Academic Guidance
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
