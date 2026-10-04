import React, { useState } from 'react';
import { BookOpen, CheckCircle, Award, ArrowRight, Sparkles } from 'lucide-react';

export default function MjcExploreSection({ onOpenApply }) {
  const [selectedPathway, setSelectedPathway] = useState('ALL');

  const streams = [
    {
      id: 'mpc',
      code: 'M.P.C.',
      name: 'Mathematics, Physics & Chemistry',
      focus: 'Engineering, Technology & Data Science',
      coaching: 'Integrated IIT-JEE (Mains & Advanced) + AP EAPCET',
      subjects: ['Mathematics (1A, 1B, 2A, 2B)', 'Physics (Theory & Practicals)', 'Chemistry (Organic & Inorganic)'],
      careers: ['B.Tech / B.E. at IITs, NITs, BITS, and Top AP Universities', 'Data Science & Artificial Intelligence', 'Defence (NDA) & Architecture (B.Arch)']
    },
    {
      id: 'bipc',
      code: 'Bi.P.C.',
      name: 'Biology, Physics & Chemistry',
      focus: 'Medicine, Dentistry & Biotechnology',
      coaching: 'Integrated NEET-UG + AIIMS + AP EAPCET (Agriculture & Pharmacy)',
      subjects: ['Botany (Plant Physiology & Genetics)', 'Zoology (Human Anatomy)', 'Physics & Chemistry Practicals'],
      careers: ['MBBS, BDS, AYUSH, and Veterinary Sciences', 'B.Sc Nursing, Physiotherapy & Radiology', 'Biotechnology & Pharmaceutical Sciences']
    },
    {
      id: 'mec',
      code: 'M.E.C.',
      name: 'Mathematics, Economics & Commerce',
      focus: 'Finance, Banking & Chartered Accountancy',
      coaching: 'Integrated CA Foundation + CMA + IPMAT (IIMs)',
      subjects: ['Commerce & Accountancy', 'Economics (Indian & Global)', 'Mathematics & Statistics'],
      careers: ['Chartered Accountant (CA) & Cost Management (CMA)', 'B.Com Honors, BBA & Corporate Finance', 'Actuarial Science & Investment Banking']
    },
    {
      id: 'cec',
      code: 'C.E.C.',
      name: 'Civics, Economics & Commerce',
      focus: 'Corporate Management, Law & Civil Services',
      coaching: 'Integrated CLAT (Law) + UPSC Foundation Mentorship',
      subjects: ['Civics & Indian Constitution', 'Economics & Commerce', 'Business Studies & Auditing'],
      careers: ['Corporate Law (5-Year Integrated LLB via CLAT)', 'UPSC Civil Services & APPSC Group-1 Tracks', 'Banking, Marketing & International Trade']
    },
    {
      id: 'vocational',
      code: 'Vocational',
      name: 'Applied Technology & Paramedical',
      focus: 'Job-Ready Industry Certification',
      coaching: 'BIEAP Certified Skill Practicals & Direct Employment',
      subjects: ['Computer Science & Web Technologies', 'Medical Lab Technician (MLT)', 'Electronics & Communications'],
      careers: ['Direct Junior Technician Roles', 'Lateral Entry into Engineering Poly-technic', 'Paramedical Diagnostics & IT Support']
    },
    {
      id: 'hec',
      code: 'H.E.C.',
      name: 'History, Economics & Civics',
      focus: 'Humanities, Journalism & Public Policy',
      coaching: 'Civil Services Foundation & State Administrative Services',
      subjects: ['History of India & World', 'Economics & Public Finance', 'Civics & Political Science'],
      careers: ['Civil Services (IAS, IPS, IRS)', 'Journalism & Mass Media Communication', 'Public Administration & Policy Think Tanks']
    }
  ];

  const filteredStreams = selectedPathway === 'ALL'
    ? streams
    : streams.filter(s => s.id === selectedPathway);

  return (
    <div className="explore-section bg-dark text-center py-16 lg:py-24" data-scroll-index="0" id="content-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="explore-content">
          
          {/* Section Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-8">
            Explore our Intermediate Streams and Pathways
          </h2>

          {/* Filter Bar with Yellow Button + OR + Select2 Dropdown */}
          <div className="explore-filter flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            
            <button
              onClick={() => setSelectedPathway('ALL')}
              className={`btn btn-yellow btn-lg px-8 py-3.5 text-sm font-bold uppercase tracking-wider ${
                selectedPathway === 'ALL' ? 'ring-2 ring-white' : ''
              }`}
              role="button"
            >
              VIEW ALL
            </button>

            <span className="or text-slate-400 font-bold uppercase text-sm">
              OR
            </span>

            <div className="common-gray-select2 w-full sm:w-auto">
              <label htmlFor="select_pathways" className="sr-only">
                Pathways Select
              </label>
              <select
                className="form-select bg-slate-800 text-white font-medium border border-slate-700 px-5 py-3.5 text-sm uppercase focus:outline-none focus:border-mjc-yellow cursor-pointer w-full sm:w-80"
                id="select_pathways"
                value={selectedPathway}
                onChange={(e) => setSelectedPathway(e.target.value)}
              >
                <option value="ALL">INTERMEDIATE STREAMS AT GVJC</option>
                <option value="mpc">M.P.C. (Maths, Physics, Chemistry) — JEE & EAPCET</option>
                <option value="bipc">Bi.P.C. (Biology, Physics, Chemistry) — NEET & Medical</option>
                <option value="mec">M.E.C. (Maths, Economics, Commerce) — CA Foundation</option>
                <option value="cec">C.E.C. (Civics, Economics, Commerce) — Law & Civils</option>
                <option value="hec">H.E.C. (History, Economics, Civics) — Humanities</option>
                <option value="vocational">Vocational (Computer Science & Lab Tech)</option>
              </select>
            </div>

          </div>

          {/* Stream Grid Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredStreams.map((stream) => (
              <div
                key={stream.id}
                className="bg-slate-900 border border-slate-800 p-6 sm:p-7 hover:border-mjc-yellow transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-3 py-1 bg-mjc-yellow text-mjc-blue uppercase tracking-wider">
                      {stream.code}
                    </span>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      2-Year Intermediate
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-mjc-yellow transition-colors">
                    {stream.name}
                  </h3>

                  <div className="text-xs font-semibold text-sky-400 mb-4 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-mjc-yellow" />
                    <span>{stream.coaching}</span>
                  </div>

                  {/* Key subjects */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800 mb-4">
                    <span className="text-[11px] font-bold text-slate-400 uppercase block">Core Curriculum:</span>
                    {stream.subjects.map((sub, sIdx) => (
                      <div key={sIdx} className="text-xs text-slate-300 flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Board: BIEAP, Govt. of AP</span>
                  <button
                    onClick={onOpenApply}
                    className="text-xs font-bold text-mjc-yellow hover:text-white uppercase flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
