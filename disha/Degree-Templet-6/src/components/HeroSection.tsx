import React from 'react';
import { Compass, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onApplyClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onApplyClick }) => {
  return (
    <section id="home" className="relative h-[100svh] flex items-center overflow-hidden w-full bg-[#FFFDF8]">
      
      {/* RIGHT 60%: Full-height Background Image with Curved Fade Intersection */}
      <div 
        className="absolute inset-y-0 right-0 w-full lg:w-[65%] h-full z-0"
        style={{
          WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 100% 50%, black 45%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 100% 100% at 100% 50%, black 45%, transparent 100%)'
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop"
          alt="Northstar Institute Campus Visakhapatnam"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle Dark Gradient from top to bottom for contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B2038]/30 via-transparent to-transparent" />
      </div>

      {/* LEFT 40%: Text Content (Matter) */}
      <div className="relative z-10 w-full lg:w-[50%] px-6 md:px-12 lg:pl-16 xl:pl-24 pt-24 lg:pt-32 pb-16 flex flex-col justify-center h-full">
        
        {/* Small Label */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#F3E8D0] border border-[#C85C45]/20 text-[#3B2038] w-fit shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C85C45] animate-ping" />
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
            NORTHSTAR INSTITUTE &bull; VISAKHAPATNAM
          </span>
        </div>

        {/* Large Stacked Headline */}
        <div className="space-y-0 mb-8 md:mb-10">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-[#3B2038] font-bold uppercase">
            FIND
            <br />
            <span className="text-[#C85C45] italic">YOUR</span>
            <br />
            DIRECTION
          </h1>
        </div>

        {/* Institutional Description */}
        <p className="font-sans text-lg sm:text-xl text-[#202020]/80 max-w-md leading-relaxed mb-10 md:mb-12 font-medium">
          A multidisciplinary degree college blending research, technology, media, and executive enterprise. Designed for thinkers, creators, and future leaders.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-5">
          <button
            onClick={onApplyClick}
            className="px-8 py-4 bg-[#C85C45] text-white rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:bg-[#3B2038] transition-all duration-300 shadow-xl shadow-[#C85C45]/25 hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-2 group"
          >
            <span>Admissions 2026-27</span>
            <Sparkles className="w-4 h-4 text-[#E9A23B] group-hover:rotate-12 transition-transform" />
          </button>
          <button
            onClick={onExploreClick}
            className="px-8 py-4 bg-[#F3E8D0] text-[#3B2038] border border-[#3B2038]/15 rounded-full font-sans text-sm font-bold uppercase tracking-widest hover:bg-[#3B2038] hover:text-[#FFFDF8] transition-all duration-300 flex items-center gap-2"
          >
            <span>Explore Index</span>
            <Compass className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Numbers Strip floating on the right side */}
      <div className="hidden md:flex absolute bottom-8 lg:bottom-12 right-6 lg:right-12 z-30">
        <div className="bg-[#F3E8D0]/95 backdrop-blur-md rounded-2xl px-8 py-5 lg:px-10 lg:py-6 flex items-center gap-8 lg:gap-10 shadow-2xl border border-[#3B2038]/10">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-black text-[#3B2038] leading-none">5,200+</span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-[#C85C45] mt-0.5 tracking-widest">Students</span>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-black text-[#C85C45] leading-none">32+</span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-[#3B2038] mt-0.5 tracking-widest">Programmes</span>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-black text-[#3B2038] leading-none">220+</span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-[#C85C45] mt-0.5 tracking-widest">Faculty</span>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-black text-[#C85C45] leading-none">18</span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-[#3B2038] mt-0.5 tracking-widest">Acres</span>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-black text-[#3B2038] leading-none">140+</span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase text-[#C85C45] mt-0.5 tracking-widest">Recruiters</span>
          </div>
          
        </div>
      </div>

    </section>
  );
};
