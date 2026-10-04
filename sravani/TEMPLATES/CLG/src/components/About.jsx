import React from 'react';
import { Target, Compass, Award, CheckCircle2, History, ChevronRight } from 'lucide-react';
import { stats } from '../data/collegeData';

export default function About({ onOpenJourneyModal }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-100/40 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-800 text-xs font-semibold tracking-wide uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-gold-600" />
            <span>Legacy of Educational Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Our Story, Our Vision, <br className="hidden sm:inline" />
            <span className="text-navy-700">Your Future.</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-navy-800 via-gold-500 to-sky-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid: Left Story, Right Image */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story, Vision & Mission, and Journey Button */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                Established in <strong className="font-semibold text-navy-950">1989</strong>, 
                Green Valley College began with a singular ambitious mission: to democratize world-class higher education and nurture creative thinkers capable of solving the world’s most pressing challenges. What began as a modest academy with 120 aspiring scholars has flourished into a nationally revered institution spanning a 75-acre scenic, sustainable campus.
              </p>
              <p className="text-slate-600 text-base">
                Over three and a half decades, our journey has been defined by uncompromising academic ethics, student-centric pedagogy, and continuous innovation. We bridge the critical gap between classical foundational knowledge and modern technical competence, preparing students not just for their first job, but for an impactful, lifelong career.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {/* Vision Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm hover:shadow-soft-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-navy-100 text-navy-800 flex items-center justify-center mb-3">
                  <Compass className="w-5 h-5 text-navy-800" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-normal">
                  To be globally recognized as a premier center of higher learning, pioneering breakthrough research, nurturing ethical character, and fostering cross-cultural understanding.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-soft-sm hover:shadow-soft-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-gold-100 text-gold-700 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-gold-700" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-normal">
                  Empower students through experiential learning, visionary mentorship, state-of-the-art facilities, and strong societal engagement to lead positive transformation worldwide.
                </p>
              </div>
            </div>

            {/* Values Points */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3">
                Core Institutional Pillars
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Academic Integrity', 'Global Inclusivity', 'Innovation & Discovery', 'Sustainable Impact', 'Student Leadership', 'Lifelong Mentorship'].map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Discover Our Journey Button */}
            <div className="pt-4">
              <button
                onClick={onOpenJourneyModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-navy-900 hover:bg-navy-800 shadow-soft-md hover:shadow-soft-lg hover:-translate-y-0.5 transition-all group"
              >
                <History className="w-4 h-4 text-gold-400 group-hover:rotate-45 transition-transform" />
                <span>Discover Our Journey</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Campus Image with Overlaid Accent Badges */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background Accent Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-navy-900/10 via-gold-400/20 to-sky-400/20 rounded-3xl transform rotate-1 scale-102"></div>
              
              {/* Main Campus Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
                  alt="Green Valley College Collegiate Architecture and Students"
                  className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gold-400">Green Valley Main Hall</span>
                  <h4 className="text-lg font-bold">Center for Academic Excellence</h4>
                  <p className="text-xs text-slate-200 mt-1">75 acres of state-of-the-art facilities, smart amphitheaters, and green study commons.</p>
                </div>
              </div>

              {/* Floating Badge Top Left */}
              <div className="absolute -top-5 -left-5 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500 text-white flex items-center justify-center font-bold text-lg">
                  35
                </div>
                <div>
                  <div className="text-xs font-bold text-navy-950">Years of Heritage</div>
                  <div className="text-[11px] text-slate-500">Inspiring Scholars Since 1989</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Statistics Bar (4 Key Stats) */}
        <div className="mt-20 pt-12 border-t border-slate-200/80">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-soft-sm hover:shadow-soft-md hover:-translate-y-1 transition-all text-center group"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 group-hover:text-gold-600 transition-colors">
                  {stat.value}
                </div>
                <div className="text-base sm:text-lg font-bold text-navy-950 mt-2">
                  {stat.label}
                </div>
                <div className="text-xs sm:text-sm text-slate-500 mt-1">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
