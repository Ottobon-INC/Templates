import { ArrowRight } from 'lucide-react';
import { statisticsData } from '../data/siteData';

export const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12">
        {/* Full Page Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--color-primary)]">
          <img 
            src="/hero-bg.jpg" 
            alt="Campus Life" 
            className="absolute inset-0 w-full h-full object-cover transform scale-105 animate-[image-pan_20s_ease-in-out_infinite_alternate]"
          />
          {/* Simple overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-8">
          <div className="animate-fade-in-up max-w-2xl">
            <div className="uppercase tracking-widest text-xs font-semibold text-[var(--color-accent)] mb-6 flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <span>NORTHSTAR INSTITUTE</span>
              <span className="hidden sm:inline">·</span>
              <span>VISAKHAPATNAM, INDIA</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold text-white mb-8">
              DISCOVER WHAT<br />YOU CAN BECOME.
            </h1>
            <p className="text-[16px] sm:text-[18px] text-white/90 mb-10 leading-relaxed max-w-xl">
              An education built around knowledge, practical experience, curiosity and the confidence to shape your own future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#academics" className="bg-[var(--color-secondary)] text-[var(--color-white)] px-8 py-4 rounded font-medium hover:bg-opacity-90 transition-all inline-flex justify-center items-center group shadow-lg">
                Explore Programmes
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#admissions" className="bg-transparent border border-white text-white px-8 py-4 rounded font-medium hover:bg-white hover:text-[var(--color-primary)] transition-colors text-center shadow-lg backdrop-blur-sm">
                Apply Now
              </a>
            </div>
          </div>
        </div>

        {/* Floating Stats Box - Positioned fully inside the hero section */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[85%] max-w-[800px] z-20 animate-fade-in-up hidden md:block" style={{ animationDelay: '0.4s' }}>
          <div className="bg-[var(--color-white)] rounded-xl shadow-2xl border border-black/5 p-4 md:p-5 flex justify-between items-center backdrop-blur-md bg-white/95">
            {statisticsData.map((stat, index) => (
              <div key={index} className={`flex-1 flex flex-col items-center text-center ${index !== statisticsData.length - 1 ? 'border-r border-[var(--color-sage)]' : ''}`}>
                <span className="text-2xl md:text-3xl font-display text-[var(--color-primary)] mb-1">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-widest text-[var(--color-text)] font-semibold">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};
