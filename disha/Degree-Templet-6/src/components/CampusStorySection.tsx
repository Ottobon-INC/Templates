import React from 'react';
import { campusStoryData } from '../data/collegeData';
import type { CampusStoryItem } from '../data/collegeData';

interface CampusStoryProps {
  onSelectStory: (item: CampusStoryItem) => void;
}

export const CampusStorySection: React.FC<CampusStoryProps> = ({ onSelectStory }) => {
  return (
    <section id="our-campus" className="py-12 lg:py-16 bg-[#FFFDF8]">
      <div className="w-full px-4 md:px-8 max-w-7xl mx-auto space-y-16">
        <div className="pb-8 border-b border-[#3B2038]/15 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#C85C45] uppercase">
              CHAPTER VI &bull; LIFE ON BEACH ROAD
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-normal text-[#3B2038] mt-2">
              OUR CAMPUS
            </h2>
          </div>
          <p className="text-sm font-sans text-[#202020]/75 max-w-md mt-4 md:mt-0">
            A vertical visual narrative of 18 acres of coastal architecture, innovation labs, and student culture.
          </p>
        </div>

        {/* Compact Grid Photographic Story Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {campusStoryData.map((item) => (
            <div
              key={item.number}
              onClick={() => onSelectStory(item)}
              className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-[#3B2038]/10 bg-white flex flex-col h-full cursor-pointer"
            >
              {/* Image Block */}
              <div className="relative h-56 w-full overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 left-3 bg-[#3B2038]/90 backdrop-blur-sm text-[#F3E8D0] font-mono text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider z-10">
                  {item.number}
                </span>
              </div>

              {/* Typographic Card Content */}
              <div className="p-6 flex flex-col grow justify-start gap-3">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C85C45] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#3B2038]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs font-sans text-[#202020]/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
