import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { programmesData } from '../data/collegeData';
import type { Programme } from '../data/collegeData';

interface AcademicsSectionProps {
  onSelectProgramme: (programme: Programme) => void;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({
  onSelectProgramme
  // onApplyClick is unused here, but kept in props type
}) => {
  const [activeInterest, setActiveInterest] = useState<'Technology' | 'Science' | 'Business' | 'People' | 'Creativity'>('Technology');

  const filteredFinderProgrammes = programmesData.filter(p => p.category === activeInterest);
  const ugProgrammes = filteredFinderProgrammes.filter(p => p.duration.includes('3'));
  const pgProgrammes = filteredFinderProgrammes.filter(p => p.duration.includes('2'));

  const interestCategories: Array<'Technology' | 'Science' | 'Business' | 'People' | 'Creativity'> = [
    'Technology',
    'Science',
    'Business',
    'People',
    'Creativity'
  ];

  return (
    <section id="academics" className="py-12 lg:py-16 space-y-16 bg-[#FFFDF8]">
      {/* 2. PROGRAMME FINDER */}
      <div className="bg-transparent text-[#3B2038] py-8 px-4 md:px-8">
        <div className="w-full space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono text-[#C85C45] font-bold tracking-widest uppercase">
              INTERACTIVE DISCOVERY MODULE
            </span>
            <h3 className="font-serif text-4xl sm:text-6xl font-normal text-[#3B2038] uppercase tracking-wider">
              COURSES
            </h3>
            <p className="text-sm font-sans text-[#202020]/80">
              Select your primary core passion to filter recommended Northstar degree pathways.
            </p>

            {/* Interest Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {interestCategories.map((cat) => {
                const isSelected = activeInterest === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveInterest(cat)}
                    className={`px-6 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#C85C45] text-white shadow-lg shadow-[#C85C45]/40 scale-105 border border-[#C85C45]'
                        : 'bg-[#F3E8D0] text-[#3B2038] hover:bg-[#C85C45] hover:text-white border border-[#3B2038]/10'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtered Recommended Programmes Grid */}
          <div className="space-y-12">
            {ugProgrammes.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <h4 className="font-serif text-2xl text-[#3B2038]">Undergraduate</h4>
                  <div className="h-px bg-[#3B2038]/10 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {ugProgrammes.map((prog) => (
                    <div
                      key={prog.id}
                      onClick={() => onSelectProgramme(prog)}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-[#3B2038]/10 hover:shadow-lg hover:border-[#C85C45] transition-all cursor-pointer group flex flex-col justify-between h-full"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-[#3B2038]/60">
                          <span>DEGREE</span>
                          <span className="text-[#C85C45]">{prog.duration}</span>
                        </div>
                        <h4 className="font-serif text-2xl text-[#3B2038] font-normal group-hover:text-[#C85C45] transition-colors">
                          {prog.title}
                        </h4>
                        <p className="text-xs text-[#202020]/80 line-clamp-2">
                          {prog.description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-[#3B2038]/10 mt-6 flex items-center justify-between">
                        <span className="text-[11px] font-sans font-semibold text-[#C85C45] line-clamp-1">
                          {prog.careerPath}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#C85C45] shrink-0 group-hover:translate-x-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {pgProgrammes.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <h4 className="font-serif text-2xl text-[#3B2038]">Postgraduate</h4>
                  <div className="h-px bg-[#3B2038]/10 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {pgProgrammes.map((prog) => (
                    <div
                      key={prog.id}
                      onClick={() => onSelectProgramme(prog)}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-[#3B2038]/10 hover:shadow-lg hover:border-[#C85C45] transition-all cursor-pointer group flex flex-col justify-between h-full"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs font-mono text-[#3B2038]/60">
                          <span>DEGREE</span>
                          <span className="text-[#C85C45]">{prog.duration}</span>
                        </div>
                        <h4 className="font-serif text-2xl text-[#3B2038] font-normal group-hover:text-[#C85C45] transition-colors">
                          {prog.title}
                        </h4>
                        <p className="text-xs text-[#202020]/80 line-clamp-2">
                          {prog.description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-[#3B2038]/10 mt-6 flex items-center justify-between">
                        <span className="text-[11px] font-sans font-semibold text-[#C85C45] line-clamp-1">
                          {prog.careerPath}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[#C85C45] shrink-0 group-hover:translate-x-1" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>



    </section>
  );
};
