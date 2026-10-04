import {
  placementStats,
  recruiterLogos
} from '../data/collegeData';

interface CampusCareersProps {
  onOpenApplyModal: () => void;
  onExploreProgrammes: () => void;
}

export const CampusCareersSection: React.FC<CampusCareersProps> = () => {

  return (
    <section id="campus-careers" className="py-12 lg:py-16 space-y-8 lg:space-y-12 bg-[#FFFDF8]">
      {/* 3. CAREERS — VISUAL TRANSITION INTO DEEP PLUM */}
      <div className="bg-transparent text-[#3B2038] py-16 px-4 md:px-8 relative overflow-hidden">
        <div className="w-full space-y-8 relative z-10">
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#C85C45] uppercase">
              OUTCOMES & RECRUITMENT
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl font-normal text-[#3B2038] leading-none">
              "AND THEN, WHAT'S NEXT?"
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#202020]/80 leading-relaxed">
              Our dedicated Centre for Corporate Relations ensures Northstar graduates secure high-impact roles across technology multinationals, financial institutions, media studios, and global research labs.
            </p>
          </div>

          {/* Placement Key Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {placementStats.map((st, i) => (
              <div
                key={i}
                className="bg-[#F3E8D0] p-4 rounded-xl border border-[#3B2038]/10 space-y-1 hover:border-[#C85C45] hover:shadow-lg transition-all"
              >
                <span className="font-serif text-2xl sm:text-3xl font-bold text-[#C85C45] block">
                  {st.value}
                </span>
                <span className="text-[10px] font-sans text-[#3B2038]/80 font-bold block uppercase tracking-wider">
                  {st.label}
                </span>
                {st.isDemo && (
                  <span className="inline-block text-[8px] font-mono text-[#3B2038] bg-[#F3E8D0] px-1.5 py-0.5 rounded mt-2">
                    DEMO STATISTIC
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Recruiter Partners Showcase */}
          <div className="space-y-6 pt-8 border-t border-[#3B2038]/10 overflow-hidden relative w-full">
            <span className="text-xs font-mono text-[#C85C45] uppercase tracking-widest block text-center">
              PROMINENT HIRING PARTNERS & RECRUITERS
            </span>
            
            {/* Infinite Marquee Container */}
            <div className="relative flex overflow-hidden group">
              <div className="flex space-x-4 sm:space-x-6 animate-marquee min-w-max whitespace-nowrap pr-4 sm:pr-6">
                {[...recruiterLogos, ...recruiterLogos].map((brand, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 rounded-xl bg-[#F3E8D0] border border-[#3B2038]/10 text-xs font-mono font-bold text-[#3B2038] hover:bg-[#C85C45] hover:text-white hover:border-[#C85C45] shadow-sm hover:shadow-md transition-all shrink-0"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
