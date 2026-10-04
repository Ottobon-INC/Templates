import React from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';

export default function MjcHeroBanner({ onOpenApply }) {
  const handleScrollDown = (e) => {
    e.preventDefault();
    const el = document.getElementById('content-start');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-banner-section index-banner-section relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-[#172b54]">
      
      {/* Background Image: Royal Blue Graduation Caps and Gowns in the Sun */}
      <div className="main-banner-image common-section-overlay absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=2400&q=85"
          alt="Graduates celebrating in blue graduation caps and gowns"
          className="w-full h-full object-cover object-[75%_center] sm:object-right"
          id="homepage-hero"
        />

        {/* Exact Linear Gradient from MJC Source */}
        <div
          className="section-overlay absolute inset-0"
          style={{
            background:
              'transparent linear-gradient(90deg, #172b54 0%, #000000b1 48%, #00000088 68%, #00000000 100%) 0% 0% no-repeat padding-box',
          }}
        />
      </div>

      {/* Main Banner Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-24">
        <div className="max-w-xl text-left space-y-6">
          
          <div className="banner-detail">
            {/* Headline - Exact Stacked Condensed White Typography */}
            <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold text-white uppercase tracking-tight leading-[0.98] font-condensed">
              YOUR PATH TO <br />
              SUCCESS
            </h1>

            {/* Subtitle */}
            <div className="detail large-text mt-5">
              <p className="text-lg sm:text-xl lg:text-2xl text-white font-normal leading-relaxed">
                Start your new career journey at MJC
              </p>

              {/* Yellow Apply Button */}
              <div className="banner-buttons mt-7">
                <button
                  onClick={onOpenApply}
                  className="bg-[#f6a800] hover:bg-[#e59b00] text-slate-950 font-bold text-base px-10 py-3.5 rounded-md shadow-md uppercase tracking-wider transition-colors inline-block"
                  role="button"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Center: Scroll Down */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <a
          href="#content-start"
          onClick={handleScrollDown}
          className="scroll-to-section text-white hover:text-[#f6a800] transition-colors flex flex-col items-center text-xs sm:text-sm font-semibold tracking-wider gap-0.5"
        >
          <span>Scroll Down</span>
          <ChevronDown className="w-4 h-4 text-white" />
        </a>
      </div>

      {/* Bottom Right: Floating 'QUESTIONS? ASK PETEY' Widget */}
      <div className="absolute bottom-5 right-5 sm:right-8 z-30 hidden sm:block">
        <button
          onClick={onOpenApply}
          className="bg-[#f6a800] hover:bg-[#e59b00] text-slate-950 px-4 py-2.5 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
        >
          <MessageSquare className="w-4 h-4 fill-slate-950 text-slate-950" />
          <span>QUESTIONS? ASK PETEY</span>
        </button>
      </div>

    </div>
  );
}
