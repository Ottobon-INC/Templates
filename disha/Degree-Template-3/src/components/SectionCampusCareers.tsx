import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Globe,
  Building2,
  Award,
  TrendingUp,
  Briefcase,
  Users,
  Compass,
  CheckCircle2,
  Quote
} from 'lucide-react';
import {
  collegeData,
  campusFacilitiesData,
  studentLifeCategoriesData,
  placementStatData,
  recruitersData,
  alumniStoriesData,
  globalPartnersData
} from '../data/universityData';

interface SectionCampusCareersProps {
  onApplyClick: () => void;
  onNavigateSection: (sec: string) => void;
}

export const SectionCampusCareers: React.FC<SectionCampusCareersProps> = ({
  onApplyClick,
  onNavigateSection
}) => {
  const [activeFacilityId, setActiveFacilityId] = useState(campusFacilitiesData[0].id);

  const activeFacility =
    campusFacilitiesData.find((f) => f.id === activeFacilityId) || campusFacilitiesData[0];

  const careerServices = [
    { title: 'Career Guidance & Counseling', desc: '1-on-1 industry career mapping from 3rd semester onwards.', icon: '🎯' },
    { title: 'Resume Building & Portfolio Review', desc: 'Expert resume audits, GitHub optimization, and LinkedIn branding.', icon: '📄' },
    { title: 'Mock Interviews & Coding Tests', desc: 'Simulated corporate tech & behavioral interviews with alumni.', icon: '💬' },
    { title: '680+ Internship Opportunities', desc: 'Guaranteed 8-week summer corporate & research lab internships.', icon: '💼' },
    { title: 'Live Industry Capstones', desc: 'Solving real enterprise problems provided by corporate partners.', icon: '⚡' },
    { title: 'Placement Aptitude Training', desc: 'Rigorous quantitative logic, verbal skills, and domain prep.', icon: '📈' }
  ];

  return (
    <div className="space-y-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* ================= CAMPUS HERO ================= */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Student Life & Infrastructure</span>
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight mt-1">
              YOUR LIFE HERE <br />
              <span className="text-gradient-gold">MATTERS</span>
            </h1>
          </div>
          <p className="text-slate-300 text-sm max-w-md">
            Life at Northstar Institute extends far beyond classrooms — our 18-acre oceanfront campus is designed to foster creativity, physical wellness, and lifelong community bonds.
          </p>
        </div>

        {/* Asymmetrical Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Large Showcase Image */}
          <div className="md:col-span-8 bg-navy border border-slate-700/80 rounded-3xl overflow-hidden relative group h-96 sm:h-[450px]">
            <img
              src={activeFacility.image}
              alt={activeFacility.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-navy/90 backdrop-blur-md border border-white/15 text-white space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-2.5 py-0.5 rounded border border-gold/30">
                  {activeFacility.category}
                </span>
                <span className="text-xs text-slate-300 font-mono">{activeFacility.areaSize || 'Main Campus'}</span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white">{activeFacility.title}</h3>
              <p className="text-xs text-slate-300">{activeFacility.description}</p>
            </div>
          </div>

          {/* Facility Selector Sidebar */}
          <div className="md:col-span-4 bg-navy border border-slate-700/80 rounded-3xl p-5 space-y-3 flex flex-col justify-between max-h-[450px] overflow-y-auto no-scrollbar">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
              Explore Campus Spaces ({campusFacilitiesData.length}):
            </div>

            <div className="space-y-2">
              {campusFacilitiesData.map((fac) => {
                const isSelected = fac.id === activeFacilityId;
                return (
                  <button
                    key={fac.id}
                    onClick={() => setActiveFacilityId(fac.id)}
                    className={`w-full text-left p-3 rounded-xl border transition flex items-center justify-between ${
                      isSelected
                        ? 'bg-electric text-white border-electric shadow-md'
                        : 'bg-navy-dark/80 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-xs">{fac.title}</div>
                      <div className="text-[10px] opacity-80 mt-0.5">{fac.category}</div>
                    </div>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded font-mono">
                      View
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ================= STUDENT LIFE CATEGORIES ================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Co-Curricular Culture</span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
              Clubs, Sports, Culture & Events
            </h2>
          </div>
          <span className="text-xs text-slate-400">28+ Active Guilds</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentLifeCategoriesData.map((sl) => (
            <div
              key={sl.id}
              className="bg-navy border border-slate-700/80 rounded-2xl overflow-hidden hover:border-gold/50 transition group"
            >
              <div className="h-44 overflow-hidden relative">
                <img src={sl.image} alt={sl.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-navy-dark/90 text-gold text-[10px] font-bold px-2 py-1 rounded border border-gold/30">
                  {sl.tag}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-gold transition">{sl.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{sl.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CAREER DEVELOPMENT ================= */}
      <section className="bg-navy-dark border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Career Ecosystem</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            FROM CLASSROOM TO CAREER
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Structured 3-year preparation roadmap to ensure high corporate readiness and placement success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerServices.map((cs, idx) => (
            <div key={idx} className="bg-navy p-6 rounded-2xl border border-slate-700 space-y-3 hover:border-electric/50 transition">
              <div className="text-3xl">{cs.icon}</div>
              <h3 className="font-heading font-bold text-lg text-white">{cs.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{cs.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PLACEMENTS DASHBOARD ================= */}
      <section className="bg-navy border border-electric/30 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-700 pb-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Placement Dashboard</span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
              Top Corporate Recruitment Statistics
            </h2>
          </div>
          <span className="text-[11px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-full font-mono">
            ⚠️ DEMO SALARY & RECRUITER DATA
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-navy-dark p-6 rounded-2xl border border-slate-700">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white">{placementStatData.recruitingPartners}</div>
            <div className="text-xs font-bold text-gold uppercase mt-1">Hiring Partners</div>
          </div>
          <div className="bg-navy-dark p-6 rounded-2xl border border-slate-700">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400">{placementStatData.placementAssistanceRate}</div>
            <div className="text-xs font-bold text-slate-300 uppercase mt-1">Placement Rate</div>
          </div>
          <div className="bg-navy-dark p-6 rounded-2xl border border-slate-700">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-electric-light">{placementStatData.avgPackageDemo}</div>
            <div className="text-xs font-bold text-slate-300 uppercase mt-1">Avg CTC — DEMO</div>
          </div>
          <div className="bg-navy-dark p-6 rounded-2xl border border-slate-700">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-gold">{placementStatData.highestPackageDemo}</div>
            <div className="text-xs font-bold text-gold uppercase mt-1">Highest CTC — DEMO</div>
          </div>
        </div>

        {/* Corporate Logos Ticker */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            <span>PARTNER HIRING ENTERPRISES:</span>
            <span className="text-[10px] text-gold font-bold bg-gold/10 px-2 py-0.5 rounded border border-gold/20">Continuous Rotation</span>
          </div>

          <div className="relative overflow-hidden py-1">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

            <div className="flex gap-3 animate-marquee cursor-pointer">
              {[...recruitersData, ...recruitersData].map((r, idx) => (
                <div
                  key={`rec-ticker-${r.id}-${idx}`}
                  className="w-40 shrink-0 bg-navy-dark p-3.5 rounded-xl border border-slate-700 hover:border-gold/60 text-center hover:bg-slate-800 transition-all shadow-sm group"
                >
                  <div className="font-heading font-black text-base text-slate-200 group-hover:text-gold transition-colors">{r.logoText}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{r.hiresCountDemo} Placed</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= ALUMNI ================= */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Alumni Network</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            WHERE NORTHSTAR TAKES YOU
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            42,000+ alumni shaping global technology, financial markets, media, and scientific innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {alumniStoriesData.map((al) => (
            <div key={al.id} className="bg-navy border border-slate-700/80 rounded-2xl p-5 space-y-4 hover:border-gold/50 transition flex flex-col justify-between">
              <div className="space-y-3">
                <img src={al.image} alt={al.name} className="w-16 h-16 rounded-xl object-cover border-2 border-gold/30" />
                <div>
                  <h4 className="font-heading font-bold text-lg text-white">{al.name}</h4>
                  <div className="text-xs font-semibold text-gold">{al.currentRole} @ {al.company}</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">{al.degree} • Class of {al.graduationYear}</div>
                </div>
                <p className="text-xs text-slate-300 italic">"{al.quote}"</p>
              </div>
              <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-2 font-mono">
                📍 {al.location}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GLOBAL EXPOSURE ================= */}
      <section className="bg-navy-dark border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-electric-light text-xs font-bold uppercase tracking-wider mb-1">
              <Globe className="w-4 h-4" />
              <span>International Alliances</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              85+ Global Academic Partners
            </h2>
          </div>
          <span className="text-xs text-slate-400">Collaborative Programs Across 24+ Countries</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {globalPartnersData.map((gp) => (
            <div key={gp.id} className="bg-navy p-5 rounded-2xl border border-slate-700 space-y-2 hover:border-electric/50 transition">
              <div className="flex justify-between items-center">
                <span className="text-2xl">{gp.flagCode}</span>
                <span className="text-[10px] font-bold bg-white/10 text-slate-300 px-2 py-0.5 rounded">{gp.country}</span>
              </div>
              <h4 className="font-heading font-bold text-base text-white">{gp.institution}</h4>
              <p className="text-xs text-slate-300">{gp.collaborationType}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gradient-to-br from-navy via-navy-light to-navy border-2 border-gold/40 rounded-3xl p-8 sm:p-14 shadow-2xl text-center space-y-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            Shape Your Tomorrow Today
          </span>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white">
            YOUR FUTURE HAS MORE THAN ONE DIRECTION
          </h2>

          <p className="text-slate-200 text-base sm:text-lg">
            Explore. Learn. Experience. Build. Join Northstar Institute of Higher Education for 2027 admissions.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigateSection('academics')}
              className="px-8 py-4 bg-navy-dark border border-slate-500 hover:border-slate-300 text-white font-bold text-sm uppercase tracking-wider rounded-xl transition"
            >
              Explore Programmes
            </button>

            <button
              onClick={onApplyClick}
              className="px-8 py-4 bg-gradient-to-r from-gold via-gold-light to-gold text-navy font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-gold-glow transition flex items-center gap-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
