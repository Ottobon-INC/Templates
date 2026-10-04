import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function MjcHowToGetStarted({ onOpenApply }) {
  return (
    <div id="get-started" className="home-3-column-highlight wave-effect-section bg-primary text-white py-16 lg:py-24 relative overflow-hidden">
      
      {/* Background Subtle Wave Accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="how-get-started-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            
            {/* Left Content (8 cols on desktop) */}
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="get-started-detail">
                
                {/* Sup text & Title block */}
                <div className="sup-text text-mjc-yellow font-extrabold uppercase tracking-widest text-xs sm:text-sm mb-2">
                  We make it easy!
                </div>
                <h2 className="title-block text-white text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-8">
                  How to get started
                </h2>

                {/* 3 Columns of Action Blocks */}
                <div className="get-started-list grid sm:grid-cols-3 gap-6">
                  
                  {/* Block 1: Admissions */}
                  <div
                    onClick={onOpenApply}
                    className="get-started-block bg-white/10 hover:bg-white/15 p-6 border border-white/20 transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="title text-uppercase font-black text-sm sm:text-base text-white tracking-wide mb-2 group-hover:text-mjc-yellow transition-colors">
                        The Admissions Process
                      </div>
                      <div className="detail text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                        <p>Follow our step-by-step AP Intermediate admission guide (SSC GPA, stream allocation, verification).</p>
                      </div>
                    </div>
                    <div>
                      <span className="btn-simple-arrow text-xs tracking-wider flex items-center gap-1.5 text-mjc-yellow group-hover:text-white">
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* Block 2: Paying / JVD Scheme */}
                  <div
                    onClick={onOpenApply}
                    className="get-started-block bg-white/10 hover:bg-white/15 p-6 border border-white/20 transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="title text-uppercase font-black text-sm sm:text-base text-white tracking-wide mb-2 group-hover:text-mjc-yellow transition-colors">
                        How to pay for college
                      </div>
                      <div className="detail text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                        <p>Find out about fee concessions, Jagananna Vidya Deevena (JVD), and merit scholarships for 10/10 GPA students.</p>
                      </div>
                    </div>
                    <div>
                      <span className="btn-simple-arrow text-xs tracking-wider flex items-center gap-1.5 text-mjc-yellow group-hover:text-white">
                        <span>Paying for College</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* Block 3: Register for Batches */}
                  <div
                    onClick={onOpenApply}
                    className="get-started-block bg-white/10 hover:bg-white/15 p-6 border border-white/20 transition-all cursor-pointer flex flex-col justify-between group"
                  >
                    <div>
                      <div className="title text-uppercase font-black text-sm sm:text-base text-white tracking-wide mb-2 group-hover:text-mjc-yellow transition-colors">
                        Register for classes
                      </div>
                      <div className="detail text-xs sm:text-sm text-slate-200 leading-relaxed mb-4">
                        <p>Sign up for morning study batches, practical science labs, and weekend JEE/NEET test series.</p>
                      </div>
                    </div>
                    <div>
                      <span className="btn-simple-arrow text-xs tracking-wider flex items-center gap-1.5 text-mjc-yellow group-hover:text-white">
                        <span>Register Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Right Cutout Image (4 cols on desktop) */}
            <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
              <div className="get-started-image relative max-w-xs sm:max-w-sm">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900">
                  <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                    alt="Student achieves top honours in AP Intermediate"
                    className="w-full h-80 sm:h-96 object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mjc-dark via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-[11px] font-bold text-mjc-yellow uppercase tracking-widest block">
                      State Ranker Pathway
                    </span>
                    <span className="text-sm font-bold text-white">
                      BIEAP Gold Medalists &amp; Top 100 JEE/NEET Qualifiers
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
