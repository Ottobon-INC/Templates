import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { disciplinesData } from '../data/collegeData';

interface DisciplinesSectionProps {
  onSelectDiscipline?: (disciplineId: string) => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({ onSelectDiscipline }) => {
  const [activeId, setActiveId] = useState<string>(disciplinesData[1].id); // default computing

  const activeDiscipline = disciplinesData.find(d => d.id === activeId) || disciplinesData[0];

  return (
    <section className="py-12 lg:py-16 px-4 md:px-8 w-full relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#3B2038]/20 mb-12">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-[#C85C45] uppercase">
            DISCIPLINARY FACULTIES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#3B2038] mt-2">
            A COLLEGE OF MANY DIRECTIONS
          </h2>
        </div>
        <p className="text-sm font-sans text-[#202020]/75 max-w-md mt-4 md:mt-0 leading-relaxed">
          Hover over each disciplinary pillar to inspect specialized degree programmes, laboratory facilities, and career pathways.
        </p>
      </div>

      {/* Main Interactive Typographic Blocks & Preview Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Left Side: Typographic Discipline List */}
        <div className="lg:col-span-6 flex flex-col">
          {disciplinesData.map((discipline) => {
            const isSelected = activeId === discipline.id;
            return (
              <div
                key={discipline.id}
                onMouseEnter={() => setActiveId(discipline.id)}
                onClick={() => onSelectDiscipline && onSelectDiscipline(discipline.id)}
                className={`group cursor-pointer py-5 px-4 sm:px-6 rounded-2xl transition-all duration-300 border-b border-[#3B2038]/10 flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#3B2038] text-[#FFFDF8] shadow-xl translate-x-2'
                    : 'bg-transparent text-[#3B2038] hover:bg-[#F3E8D0]/60'
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-6">
                  <h3
                    className={`font-serif text-base sm:text-lg lg:text-xl font-normal tracking-tight uppercase transition-all duration-300 ${
                      isSelected ? 'text-[#FFFDF8]' : 'group-hover:text-[#C85C45]'
                    }`}
                  >
                    {discipline.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`hidden sm:inline-block text-xs font-sans font-medium opacity-80 ${
                      isSelected ? 'text-[#D8A39A]' : 'text-[#202020]/60'
                    }`}
                  >
                    {discipline.programmes.length} Programmes
                  </span>
                  <ArrowUpRight
                    className={`w-6 h-6 transition-transform duration-300 ${
                      isSelected
                        ? 'text-[#E9A23B] rotate-45'
                        : 'text-[#C85C45] group-hover:translate-x-1 group-hover:-translate-y-1'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Dynamic Image Reveal & Programme Quick List Card */}
        <div className="lg:col-span-6 relative">
          <div className="h-full bg-[#FFFDF8] rounded-3xl p-6 sm:p-8 border border-[#3B2038]/15 shadow-2xl flex flex-col md:flex-row gap-8 animate-in fade-in duration-500">
            
            {/* Left Column: Offered Degrees */}
            <div className="w-full md:w-2/5 flex flex-col h-full gap-4">
              <span className="text-xl font-mono uppercase font-bold text-[#C85C45] tracking-widest block">
                OFFERED DEGREES
              </span>
              <div className="flex flex-col flex-1 gap-2.5">
                {activeDiscipline.programmes.map((prog, i) => (
                  <div
                    key={i}
                    onClick={() => onSelectDiscipline && onSelectDiscipline(activeDiscipline.id)}
                    className="flex-1 flex items-center px-5 py-2 rounded-xl text-sm font-sans font-bold bg-[#F3E8D0]/50 text-[#3B2038] border border-[#3B2038]/10 hover:bg-[#C85C45] hover:text-white transition-colors cursor-pointer shadow-sm"
                  >
                    {prog}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image and Description */}
            <div className="w-full md:w-3/5 flex flex-col h-full gap-5">
              {/* Dynamic Discipline Photograph */}
              <div className="relative flex-1 min-h-[16rem] rounded-2xl overflow-hidden shadow-inner border border-[#3B2038]/10">
                <img
                  src={activeDiscipline.image}
                  alt={activeDiscipline.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2038]/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E9A23B] block">
                    FACULTY PREVIEW
                  </span>
                  <h4 className="font-serif text-2xl md:text-3xl font-normal mt-1 leading-tight">
                    {activeDiscipline.subtitle}
                  </h4>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base font-sans text-[#202020]/80 leading-relaxed border-l-2 border-[#C85C45] pl-4">
                {activeDiscipline.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
