import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Trophy, Users, BookOpen } from 'lucide-react';

export default function Hero({ onOpenApplyModal }) {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with Rich Multi-layered Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=2200&q=85"
          alt="Green Valley College Iconic Campus"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Navy Gradient Overlay for high readability and premium mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-950/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        {/* Subtle decorative grid pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center lg:text-left flex flex-col justify-center min-h-[calc(100vh-6rem)]">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-200 text-xs sm:text-sm font-medium shadow-soft-sm">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Admissions Open for Academic Year 2026–2027</span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span className="hidden sm:inline-block text-gold-300 font-semibold">Priority Round Active</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Your Future <br />
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-amber-400 bg-clip-text text-transparent">
                Begins Here.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
              At <strong className="font-semibold text-white">Green Valley College</strong>, we unite world-class academic rigor with transformative student mentorship. Discover high-impact degree programs designed to cultivate ethical leadership, empower breakthrough research, and unlock boundless global career opportunities.
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => handleScrollTo('about')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all duration-200 shadow-soft-md hover:shadow-soft-lg flex items-center justify-center gap-2 group"
              >
                <Compass className="w-5 h-5 text-sky-300 group-hover:rotate-45 transition-transform" />
                <span>Explore Our College</span>
              </button>

              <button
                onClick={onOpenApplyModal}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 shadow-lg hover:shadow-glow-gold hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Metrics Bar below buttons */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">98%</div>
                <div className="text-xs text-slate-300 font-medium">Placement Rate</div>
              </div>
              <div className="text-left border-l border-white/20 pl-4 sm:pl-8">
                <div className="text-2xl sm:text-3xl font-bold text-gold-400">#12</div>
                <div className="text-xs text-slate-300 font-medium">National Ranking</div>
              </div>
              <div className="text-left border-l border-white/20 pl-4 sm:pl-8">
                <div className="text-2xl sm:text-3xl font-bold text-sky-300">14:1</div>
                <div className="text-xs text-slate-300 font-medium">Student-Faculty Ratio</div>
              </div>
            </div>

          </div>

          {/* Right Floating Card / Key Value Highlights */}
          <div className="hidden lg:block lg:col-span-4">
            <div className="relative">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-500 to-sky-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              
              <div className="relative bg-navy-900/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl text-left space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">Campus Highlight</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30">Accredited A++</span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="p-2 rounded-lg bg-gold-500/20 text-gold-400 shrink-0">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Excellence in Research</h4>
                      <p className="text-xs text-slate-300 mt-0.5">$18M+ invested in state-of-the-art innovation labs.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="p-2 rounded-lg bg-sky-500/20 text-sky-300 shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Global Alumni Network</h4>
                      <p className="text-xs text-slate-300 mt-0.5">50,000+ graduates leading top enterprises worldwide.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Holistic Development</h4>
                      <p className="text-xs text-slate-300 mt-0.5">80+ student clubs, varsity athletics, and arts initiatives.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleScrollTo('admissions')}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-sky-600/30 hover:bg-sky-600/40 border border-sky-400/30 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Schedule an In-Person Campus Tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none" />
    </section>
  );
}
