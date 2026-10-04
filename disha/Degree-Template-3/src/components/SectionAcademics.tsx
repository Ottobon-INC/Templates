import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Filter,
  ArrowRight,
  UserCheck,
  FlaskConical,
  Award,
  CheckCircle2,
  Sparkles,
  Code,
  Atom,
  TrendingUp,
  Briefcase,
  Video,
  Layers
} from 'lucide-react';
import {
  disciplinesData,
  programmesData,
  facultyData,
  researchCentersData,
  Programme
} from '../data/universityData';

interface SectionAcademicsProps {
  onOpenProgrammeModal: (prog: Programme) => void;
  onApplyClick: (progId: string) => void;
}

export const SectionAcademics: React.FC<SectionAcademicsProps> = ({
  onOpenProgrammeModal,
  onApplyClick
}) => {
  const [selectedDisciplineTab, setSelectedDisciplineTab] = useState<string>('all');
  const [selectedDegreeFilter, setSelectedDegreeFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const disciplineIcons: Record<string, React.ReactNode> = {
    computing: <Code className="w-4 h-4" />,
    science: <Atom className="w-4 h-4" />,
    commerce: <TrendingUp className="w-4 h-4" />,
    management: <Briefcase className="w-4 h-4" />,
    arts: <BookOpen className="w-4 h-4" />,
    media: <Video className="w-4 h-4" />
  };

  // Filtered Programmes Logic
  const filteredProgrammes = useMemo(() => {
    return programmesData.filter((prog) => {
      const matchesDiscipline =
        selectedDisciplineTab === 'all' || prog.disciplineId === selectedDisciplineTab;
      const matchesDegree =
        selectedDegreeFilter === 'all' || prog.degree === selectedDegreeFilter;
      const matchesSearch =
        prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.careerAreas.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesDiscipline && matchesDegree && matchesSearch;
    });
  }, [selectedDisciplineTab, selectedDegreeFilter, searchQuery]);

  return (
    <div className="space-y-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* ================= ACADEMIC INTRODUCTION ================= */}
      <section className="text-center max-w-4xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          <span>Multidisciplinary Academic Explorer</span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
          32+ PROGRAMMES <br />
          <span className="text-gradient-gold">ENDLESS DIRECTIONS</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
          Explore programmes designed across disciplines, interests and emerging career pathways. Build interdisciplinary expertise tailored for modern industry demands.
        </p>
      </section>

      {/* ================= DISCIPLINES OVERVIEW ================= */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-heading font-extrabold text-2xl text-white">
            Academic Schools & Disciplines
          </h3>
          <span className="text-xs text-slate-400">6 Core Faculties</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <button
            onClick={() => setSelectedDisciplineTab('all')}
            className={`p-4 rounded-xl border text-left transition flex flex-col justify-between ${
              selectedDisciplineTab === 'all'
                ? 'bg-electric text-white border-electric shadow-lg'
                : 'bg-navy border-slate-700 text-slate-300 hover:border-slate-500'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <Layers className="w-5 h-5" />
              <span className="text-xs font-bold font-mono">32+</span>
            </div>
            <div>
              <div className="font-bold text-sm">All Schools</div>
              <div className="text-[11px] opacity-80 mt-0.5">Explore All</div>
            </div>
          </button>

          {disciplinesData.map((d) => {
            const isSelected = selectedDisciplineTab === d.id;
            return (
              <button
                key={d.id}
                onClick={() => setSelectedDisciplineTab(d.id)}
                className={`p-4 rounded-xl border text-left transition flex flex-col justify-between ${
                  isSelected
                    ? 'bg-electric text-white border-electric shadow-lg'
                    : 'bg-navy border-slate-700 text-slate-300 hover:border-slate-500'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  {disciplineIcons[d.id]}
                  <span className="text-xs font-bold font-mono text-gold">{d.programmesCount}</span>
                </div>
                <div>
                  <div className="font-bold text-sm truncate">{d.name}</div>
                  <div className="text-[11px] opacity-80 mt-0.5 truncate">{d.shortCode}</div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= PROGRAMME FINDER (SEARCH & FILTERS) ================= */}
      <section className="bg-navy border border-electric/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center border-b border-slate-700/80 pb-6">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search programmes (e.g. Data Science, AI, Finance)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-dark border border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric"
            />
          </div>

          {/* Degree Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 flex-shrink-0">
              <Filter className="w-3.5 h-3.5" /> Degree:
            </span>
            {['all', 'B.Sc.', 'BCA', 'B.Com.', 'BBA', 'B.A.', 'B.Voc.'].map((deg) => (
              <button
                key={deg}
                onClick={() => setSelectedDegreeFilter(deg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex-shrink-0 ${
                  selectedDegreeFilter === deg
                    ? 'bg-gold text-navy shadow'
                    : 'bg-navy-dark text-slate-300 border border-slate-700 hover:border-slate-500'
                }`}
              >
                {deg === 'all' ? 'All Degrees' : deg}
              </button>
            ))}
          </div>

        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center text-xs text-slate-400 font-medium">
          <span>Showing <strong className="text-gold">{filteredProgrammes.length}</strong> matching undergraduate programmes</span>
          {(searchQuery || selectedDisciplineTab !== 'all' || selectedDegreeFilter !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDisciplineTab('all');
                setSelectedDegreeFilter('all');
              }}
              className="text-electric-light hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProgrammes.map((prog) => (
            <div
              key={prog.id}
              className="bg-navy-dark/90 border border-slate-700/80 hover:border-electric/70 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest bg-electric/20 text-electric-light px-2.5 py-0.5 rounded border border-electric/30">
                    {prog.degree}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {prog.duration}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white group-hover:text-gold transition">
                  {prog.name}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {prog.description}
                </p>

                <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-center justify-between">
                    <span>Intake Seats:</span>
                    <span className="font-semibold text-slate-200">{prog.seats}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Eligibility:</span>
                    <span className="font-semibold text-slate-200 truncate max-w-[180px]">{prog.eligibility.split('—')[0]}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {prog.careerAreas.slice(0, 3).map((area, idx) => (
                    <span key={idx} className="text-[10px] bg-navy text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => onOpenProgrammeModal(prog)}
                  className="text-xs font-bold text-electric-light hover:text-white flex items-center gap-1 transition"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onApplyClick(prog.id)}
                  className="px-3.5 py-1.5 bg-gold hover:bg-gold-hover text-navy font-bold text-xs rounded-lg transition shadow"
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ================= FACULTY ================= */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-gold">Faculty Excellence</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            LEARN FROM PEOPLE WHO BUILD
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Over 220+ distinguished professors, researchers, and industry fellows with doctorates from top institutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyData.map((fac) => (
            <div
              key={fac.id}
              className="bg-navy border border-slate-700/80 rounded-2xl p-5 hover:border-gold/50 transition flex items-center gap-4 group"
            >
              <img
                src={fac.image}
                alt={fac.name}
                className="w-20 h-20 rounded-xl object-cover border-2 border-gold/30 group-hover:scale-105 transition-transform"
              />
              <div className="space-y-1">
                <h4 className="font-heading font-bold text-lg text-white group-hover:text-gold transition">
                  {fac.name}
                </h4>
                <div className="text-xs font-semibold text-gold">{fac.designation}</div>
                <div className="text-[11px] text-slate-300">{fac.department}</div>
                <div className="text-[10px] text-electric-light font-mono truncate max-w-[200px]">{fac.qualification}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= RESEARCH & INNOVATION ================= */}
      <section className="bg-navy-dark border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-electric-light text-xs font-bold uppercase tracking-wider mb-1">
              <FlaskConical className="w-4 h-4" />
              <span>Research Ecosystem</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              12 Multidisciplinary Research Centres
            </h2>
          </div>
          <span className="text-xs text-slate-400">Undergraduate Research Fellowships</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchCentersData.map((res) => (
            <div key={res.id} className="bg-navy p-6 rounded-2xl border border-slate-700 space-y-4 hover:border-electric/50 transition">
              <div className="h-40 rounded-xl overflow-hidden relative">
                <img src={res.image} alt={res.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-navy-dark/90 text-gold text-[10px] font-bold px-2 py-1 rounded border border-gold/30">
                  {res.activeProjects} Active Projects
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-bold text-lg text-white">{res.title}</h3>
                <p className="text-xs text-slate-300">{res.description}</p>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div>Director: <strong className="text-slate-200">{res.director}</strong></div>
                <div>Student Fellows: <strong className="text-gold font-mono">{res.studentFellows} Enrolled</strong></div>
              </div>
            </div>
          ))}
        </div>

      </section>

    </div>
  );
};
