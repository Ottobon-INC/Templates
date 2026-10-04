import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Award,
  Calendar,
  Download,
  PhoneCall,
  FileCheck,
  Compass,
  HelpCircle
} from 'lucide-react';
import {
  collegeData,
  admissionStepsData,
  scholarshipsData,
  faqsData,
  disciplinesData,
  programmesData
} from '../data/universityData';

interface SectionAdmissionsProps {
  onApplyClick: (progId?: string) => void;
  onEnquireClick: () => void;
  onBrochureClick: () => void;
  onNavigateSection: (sec: string) => void;
}

export const SectionAdmissions: React.FC<SectionAdmissionsProps> = ({
  onApplyClick,
  onEnquireClick,
  onBrochureClick,
  onNavigateSection
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('computing');
  const [selectedQualification, setSelectedQualification] = useState<string>('12th Math');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Interactive match calculation
  const matchedProgrammes = programmesData.filter(
    (p) => p.disciplineId === selectedDiscipline
  );

  return (
    <div className="space-y-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* ================= ADMISSIONS HERO ================= */}
      <section className="bg-gradient-to-r from-navy via-navy-light to-navy border border-electric/40 rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Admissions 2027 Open • Undergraduate Pathways</span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            YOUR NEXT CHAPTER <br />
            <span className="text-gradient-gold">STARTS HERE</span>
          </h1>

          <p className="text-slate-200 text-lg sm:text-xl">
            Find a programme that matches your interests, strengths and ambitions across 32+ degree pathways.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => onApplyClick()}
              className="px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-hover hover:to-gold text-navy font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-gold-glow transition flex items-center justify-center gap-2"
            >
              <span>Apply Now for 2027</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateSection('academics')}
              className="px-8 py-4 bg-navy-dark border border-slate-600 hover:border-slate-400 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition flex items-center justify-center gap-2"
            >
              <span>Explore Programmes</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMME DISCOVERY WIZARD ================= */}
      <section className="bg-navy border border-slate-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Interactive Selector</span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            Find Matching Degree Programmes
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Select your discipline preference and background to see matching Northstar degree courses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-navy-dark p-6 rounded-2xl border border-slate-700">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2">1. Which discipline interests you?</label>
            <select
              value={selectedDiscipline}
              onChange={(e) => setSelectedDiscipline(e.target.value)}
              className="w-full bg-navy border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold"
            >
              {disciplinesData.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.programmesCount} Courses)
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2">2. What is your 10+2 stream background?</label>
            <select
              value={selectedQualification}
              onChange={(e) => setSelectedQualification(e.target.value)}
              className="w-full bg-navy border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-gold"
            >
              <option value="12th Math">10+2 Science (PCM / Math Stream)</option>
              <option value="12th Bio">10+2 Science (PCB / Biotech Stream)</option>
              <option value="12th Commerce">10+2 Commerce & Accountancy</option>
              <option value="12th Arts">10+2 Arts / Humanities / Any Stream</option>
            </select>
          </div>
        </div>

        {/* Matches Display */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-400">
            RECOMMENDED MATCHES ({matchedProgrammes.length} PROGRAMMES FOUND):
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {matchedProgrammes.slice(0, 3).map((prog) => (
              <div key={prog.id} className="bg-navy-dark/80 p-4 rounded-xl border border-electric/40 space-y-2 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] bg-electric/20 text-electric-light px-2 py-0.5 rounded font-bold">{prog.degree}</span>
                  <h4 className="font-heading font-bold text-base text-white mt-1">{prog.name}</h4>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">{prog.description}</p>
                </div>
                <button
                  onClick={() => onApplyClick(prog.id)}
                  className="w-full py-2 bg-gold/20 hover:bg-gold text-gold hover:text-navy font-bold text-xs rounded-lg transition border border-gold/40 mt-2"
                >
                  Apply for {prog.degree}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ADMISSION PROCESS (6-STEP LINE) ================= */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Seamless Onboarding</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            6-Step Admission Journey
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Transparent and structured admission workflow for all undergraduate applicants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {admissionStepsData.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              className="bg-navy border border-slate-700/80 rounded-2xl p-5 relative hover:border-gold/60 transition group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center font-heading font-black text-lg border border-gold/40">
                  {stepItem.step}
                </div>
                <h3 className="font-heading font-bold text-base text-white group-hover:text-gold transition">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {stepItem.description}
                </p>
              </div>
              <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-2 mt-3">
                {stepItem.details}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SCHOLARSHIPS ================= */}
      <section className="bg-navy-dark border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Financial Support</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
              Merit & Talent Scholarships
            </h2>
          </div>
          <span className="text-xs text-slate-400">Awarded annually based on qualifying criteria</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {scholarshipsData.map((sch) => (
            <div key={sch.id} className="bg-navy p-6 rounded-2xl border border-slate-700 space-y-4 hover:border-gold/50 transition">
              <div className="w-12 h-12 rounded-xl bg-gold/20 text-gold flex items-center justify-center border border-gold/40">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-slate-300 px-2 py-0.5 rounded">
                  {sch.type} Track
                </span>
                <h3 className="font-heading font-bold text-lg text-white mt-2">{sch.title}</h3>
                <div className="text-xs font-bold text-emerald-400 mt-1">{sch.coverage}</div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">{sch.description}</p>
              <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-2">
                Eligibility: {sch.eligibilityDemo}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= IMPORTANT DATES 2027 ================= */}
      <section className="bg-navy border border-electric/30 rounded-3xl p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-700 pb-4">
          <div className="flex items-center gap-2 text-gold">
            <Calendar className="w-5 h-5" />
            <h3 className="font-heading font-extrabold text-2xl text-white">Admissions 2027 Calendar</h3>
          </div>
          <span className="text-[11px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full font-mono">
            ⚠️ DEMO SCHEDULE DATA
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-navy-dark p-5 rounded-2xl border border-slate-700 text-center">
            <span className="text-xs text-slate-400 block font-medium">Phase 1 Applications</span>
            <div className="font-heading font-extrabold text-2xl text-white mt-1">January 2027</div>
            <span className="text-[11px] text-emerald-400 font-bold block mt-1">Portal Open</span>
          </div>

          <div className="bg-navy-dark p-5 rounded-2xl border border-slate-700 text-center">
            <span className="text-xs text-slate-400 block font-medium">Priority Merit Deadline</span>
            <div className="font-heading font-extrabold text-2xl text-gold mt-1">April 2027</div>
            <span className="text-[11px] text-slate-300 block mt-1">Early Bird Evaluation</span>
          </div>

          <div className="bg-navy-dark p-5 rounded-2xl border border-slate-700 text-center">
            <span className="text-xs text-slate-400 block font-medium">Final Round Deadline</span>
            <div className="font-heading font-extrabold text-2xl text-white mt-1">June 2027</div>
            <span className="text-[11px] text-slate-400 block mt-1">Subject to seat availability</span>
          </div>

          <div className="bg-navy-dark p-5 rounded-2xl border border-slate-700 text-center">
            <span className="text-xs text-slate-400 block font-medium">Academic Session Begins</span>
            <div className="font-heading font-extrabold text-2xl text-electric-light mt-1">August 2027</div>
            <span className="text-[11px] text-electric-light font-bold block mt-1">Orientation Week</span>
          </div>
        </div>
      </section>

      {/* ================= ELIGIBILITY FAQS ================= */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Frequently Asked Questions</span>
          <h2 className="font-heading font-extrabold text-3xl text-white">
            Admission Guidelines & Eligibility FAQs
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqsData.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-navy border border-slate-700/80 rounded-2xl overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-5 text-left font-semibold text-white flex items-center justify-between gap-4 hover:bg-white/5 transition"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-gold" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FINAL ADMISSIONS CTA BANNER ================= */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy border-2 border-gold/40 rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-6 relative overflow-hidden">
        <div className="max-w-2xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/30">
            Admissions 2027 Action Portal
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            READY TO FIND YOUR DIRECTION?
          </h2>

          <p className="text-slate-200 text-sm sm:text-base">
            Take the first step towards a multidisciplinary degree at Northstar Institute of Higher Education.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onApplyClick()}
              className="px-8 py-3.5 bg-gradient-to-r from-gold to-gold-hover text-navy font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-gold-glow transition flex items-center gap-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onEnquireClick}
              className="px-6 py-3.5 bg-navy-dark border border-slate-600 hover:border-slate-400 text-slate-200 font-bold text-sm uppercase tracking-wider rounded-xl transition flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-gold" />
              <span>Talk to Admissions</span>
            </button>

            <button
              onClick={onBrochureClick}
              className="px-6 py-3.5 bg-electric/20 hover:bg-electric text-electric-light hover:text-white font-bold text-sm uppercase tracking-wider rounded-xl transition border border-electric/40 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Prospectus</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
