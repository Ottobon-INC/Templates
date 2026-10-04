import React, { useState } from 'react';
import {
  Compass,
  Award,
  BookOpen,
  Eye,
  Target,
  ChevronRight,
  ShieldAlert,
  Building,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import {
  collegeData,
  timelineEventsData,
  leadershipData,
  campusFacilitiesData,
  demoRecognitionsData
} from '../data/universityData';

export const SectionAbout: React.FC = () => {
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(timelineEventsData.length - 1);

  return (
    <div className="space-y-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* ================= HERO & OUR STORY ================= */}
      <section className="space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
          <Compass className="w-4 h-4" />
          <span>Institutional History & Mission</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
              BUILT FOR THE <br />
              <span className="text-gradient-gold">NEXT GENERATION</span>
            </h1>

            <div className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg leading-relaxed space-y-4">
              <p className="font-semibold text-white">
                Founded in 2008, Northstar Institute of Higher Education (NIHE) was created around a simple idea: higher education should help students build knowledge, confidence and the ability to adapt.
              </p>
              <p className="text-sm sm:text-base text-slate-300">
                Situated on an 18-acre coastal campus in Visakhapatnam, Andhra Pradesh, Northstar has grown from four foundational degree streams into a comprehensive autonomous degree college educating over 5,200 undergraduate students across 32+ programmes.
              </p>
              <p className="text-sm text-slate-400">
                Our interdisciplinary pedagogy combines rigorous academic theory with real-world lab experimentation, corporate internships, and student-led research initiatives.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-2 bg-navy p-3 rounded-xl border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Autonomous Governance
              </div>
              <div className="flex items-center gap-2 bg-navy p-3 rounded-xl border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Credit-Based Pedagogy
              </div>
              <div className="flex items-center gap-2 bg-navy p-3 rounded-xl border border-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 18-Acre Coastal Campus
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl relative">
              <img
                src="/images/hero_campus.jpg"
                alt="Northstar Building Architecture"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy/90 backdrop-blur-md border border-white/10 text-white text-xs">
                <div className="font-bold text-gold text-sm">Northstar Coastal Campus</div>
                <div className="text-slate-300">Rushikonda, Visakhapatnam, AP</div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-navy border border-electric/30 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Institutional Progression</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
              Historical Timeline (2008 – 2027)
            </h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">Click milestones to explore evolution</span>
        </div>

        {/* Horizontal Timeline Steps */}
        <div className="relative pt-6">
          
          {/* Progress Bar Line */}
          <div className="hidden md:block absolute top-12 left-6 right-6 h-1 bg-slate-700 rounded-full z-0" />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative z-10">
            {timelineEventsData.map((ev, idx) => {
              const isSelected = idx === activeTimelineIndex;
              return (
                <div
                  key={ev.year}
                  onClick={() => setActiveTimelineIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between ${
                    isSelected
                      ? 'bg-electric/20 border-electric shadow-lg shadow-electric/20 text-white scale-105'
                      : 'bg-navy-dark/70 border-slate-700 text-slate-300 hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-heading font-black text-2xl ${isSelected ? 'text-gold' : 'text-slate-400'}`}>
                      {ev.year}
                    </span>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300 font-semibold">
                      {ev.milestoneTag}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm line-clamp-2">{ev.title}</h4>
                </div>
              );
            })}
          </div>

        </div>

        {/* Active Milestone Highlight */}
        <div className="bg-navy-dark p-6 rounded-2xl border border-slate-700 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="w-14 h-14 rounded-2xl bg-gold/20 text-gold flex items-center justify-center font-heading font-black text-xl flex-shrink-0 border border-gold/40">
            {timelineEventsData[activeTimelineIndex].year}
          </div>
          <div className="space-y-1 flex-1">
            <div className="text-xs font-bold uppercase tracking-wider text-gold">
              Milestone: {timelineEventsData[activeTimelineIndex].milestoneTag}
            </div>
            <h3 className="font-heading font-extrabold text-xl text-white">
              {timelineEventsData[activeTimelineIndex].title}
            </h3>
            <p className="text-slate-300 text-sm">
              {timelineEventsData[activeTimelineIndex].description}
            </p>
          </div>
        </div>

      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* VISION */}
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy border border-electric/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold flex items-center justify-center border border-gold/40">
            <Eye className="w-6 h-6" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold block">
            Our Vision
          </span>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-snug">
            "To create an inclusive academic environment where students learn deeply, think independently and build meaningful futures."
          </h3>
          <p className="text-xs text-slate-300">
            We envision an institution where regional talent reaches global standard leadership, combining scientific inquiry with humanitarian values.
          </p>
        </div>

        {/* MISSION */}
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy border border-electric/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-electric/20 text-electric-light flex items-center justify-center border border-electric/40">
            <Target className="w-6 h-6" />
          </div>
          <span className="text-xs font-extrabold uppercase tracking-widest text-electric-light block">
            Our Mission
          </span>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white leading-snug">
            "To combine multidisciplinary education, practical experience, research and student development."
          </h3>
          <p className="text-xs text-slate-300">
            Delivering Industry-aligned curricula, state-of-the-art research laboratories, and dedicated placement mentorship for every undergraduate learner.
          </p>
        </div>

      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Academic Leadership</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Guided by Academic Pioneers
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Meet the deans and administrators guiding Northstar Institute's vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadershipData.map((leader) => (
            <div
              key={leader.id}
              className="bg-navy border border-slate-700/80 rounded-2xl overflow-hidden hover:border-gold/60 transition-all group flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gold text-navy px-2 py-0.5 rounded">
                    {leader.title}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-gold transition">
                    {leader.name}
                  </h3>
                  <div className="text-xs text-slate-400 mt-0.5">{leader.role}</div>
                  <div className="text-[11px] text-electric-light font-mono mt-1">{leader.qualification}</div>
                </div>

                <p className="text-xs text-slate-300 italic border-t border-slate-800 pt-3">
                  "{leader.messageQuote}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ================= CAMPUS IDENTITY ================= */}
      <section className="space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Physical Infrastructure</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
              Our 18-Acre Coastal Campus
            </h2>
          </div>
          <span className="text-xs text-slate-400">Visakhapatnam, Andhra Pradesh</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusFacilitiesData.slice(0, 6).map((fac) => (
            <div
              key={fac.id}
              className="bg-navy border border-slate-700/80 rounded-2xl overflow-hidden hover:border-electric/60 transition group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-navy-dark/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-gold uppercase border border-white/10">
                  {fac.category}
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-gold transition">
                  {fac.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  {fac.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-1">
                  {fac.features.map((ft, i) => (
                    <span key={i} className="text-[10px] bg-navy-dark text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      ✓ {ft}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ================= FICTIONAL RECOGNITION ================= */}
      <section className="bg-navy-dark border border-slate-800 rounded-3xl p-8 space-y-6">
        
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2 text-gold">
            <Award className="w-5 h-5" />
            <h3 className="font-heading font-extrabold text-xl text-white">Institutional Honors & Recognition</h3>
          </div>
          <span className="text-[11px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full font-mono">
            ⚠️ Demo recognition content for presentation
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {demoRecognitionsData.map((recog) => (
            <div key={recog.id} className="bg-navy p-5 rounded-2xl border border-slate-700 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-gold">
                <span>{recog.year}</span>
                <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300">{recog.category}</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-white">{recog.title}</h4>
              <p className="text-xs text-slate-400">Awarded by: {recog.awardingBody}</p>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};
