import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { timelineData } from '../data/collegeData';

export const AboutSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollTimeline = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto-rotate the timeline carousel
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        
        // If we've reached the end (with a tiny buffer), scroll back to start
        if (container.scrollLeft >= maxScrollLeft - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll right by the width of approximately one card
          container.scrollBy({ left: 380, behavior: 'smooth' });
        }
      }
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId);
  }, []);



  return (
    <section id="about" className="py-12 lg:py-16 space-y-16 bg-[#FFFDF8]">
      {/* 2. OUR STORY — HORIZONTAL SCROLLING TIMELINE */}
      <div className="bg-transparent text-[#3B2038] py-8 px-4 md:px-8 relative overflow-hidden">
        <div className="w-full mb-10 flex items-end justify-between border-b border-[#C85C45]/30 pb-6">
          <div>
            <span className="text-xs font-mono text-[#C85C45] font-bold tracking-widest uppercase">
              CHRONICLE OF GROWTH
            </span>
            <h3 className="font-serif text-4xl sm:text-5xl font-normal text-[#3B2038] mt-1">
              OUR STORY
            </h3>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTimeline('left')}
              className="w-12 h-12 rounded-full border border-[#3B2038]/30 flex items-center justify-center hover:bg-[#3B2038] hover:text-white transition-colors focus:outline-none"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTimeline('right')}
              className="w-12 h-12 rounded-full border border-[#3B2038]/30 flex items-center justify-center hover:bg-[#3B2038] hover:text-white transition-colors focus:outline-none"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Track */}
        <div
          ref={scrollContainerRef}
          className="horizontal-scroll-container space-x-6 sm:space-x-8 pb-8 no-scrollbar w-full"
        >
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="horizontal-scroll-item w-[300px] sm:w-[360px] bg-[#F3E8D0] shadow-md rounded-3xl p-6 border border-[#3B2038]/10 flex flex-col justify-between group hover:border-[#C85C45] transition-all duration-300"
            >
              {/* Year Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-[#C85C45] group-hover:scale-105 transition-transform">
                  {item.year}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#3B2038]/60">
                  MILESTONE 0{index + 1}
                </span>
              </div>

              {/* Large Photograph between entries */}
              <div className="relative h-44 rounded-2xl overflow-hidden mb-4 border border-[#3B2038]/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2038]/40 to-transparent" />
              </div>

              {/* Content */}
              <div>
                <h4 className="font-sans text-lg font-bold text-[#3B2038] tracking-wide uppercase mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-[#202020]/80 font-sans leading-relaxed">
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
