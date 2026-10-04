import React, { useState } from 'react';
import { Sparkles, Maximize2, Users, HeartHandshake, Compass, Flame } from 'lucide-react';
import { campusLifeItems } from '../data/collegeData';

export default function CampusLife({ onSelectImage }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Facilities', 'Sports', 'Culture', 'Clubs'];

  const filteredItems = filter === 'All'
    ? campusLifeItems
    : campusLifeItems.filter(item => item.category === filter);

  return (
    <section id="campus-life" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-100 text-navy-800 text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Vibrant Student Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            More Than Just <span className="text-navy-700">a Classroom.</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-navy-800 via-gold-500 to-sky-500 mx-auto mt-4 rounded-full" />
          
          {/* Paragraph on student experiences and campus culture */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Life at Green Valley College is an exhilarating journey of self-discovery, creative collaboration, and lifelong friendships. From championship varsity sports and electrifying cultural fests to groundbreaking innovation hubs and peaceful library sanctums, our campus pulsates with energy, inclusivity, and boundless curiosity.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filter === cat
                  ? 'bg-navy-900 text-white shadow-soft-md scale-105'
                  : 'bg-white text-slate-600 hover:text-navy-950 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat === 'All' ? 'All Experiences' : cat}
            </button>
          ))}
        </div>

        {/* Modern Gallery Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-navy-950 shadow-md backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>

                {/* Highlight Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-gold-400 text-navy-950 shadow-md">
                    {item.highlight}
                  </span>
                </div>

                {/* Zoom Click Trigger */}
                <button
                  onClick={() => onSelectImage(item)}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white text-white hover:text-navy-950 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-md group-hover:scale-110"
                  aria-label="View photo in high resolution"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-navy-950 mb-2 group-hover:text-navy-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Interactive Action */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-medium text-navy-900 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-gold-500" />
                    Active Community Hub
                  </span>
                  <button
                    onClick={() => onSelectImage(item)}
                    className="font-semibold text-sky-600 hover:text-sky-800 transition-colors"
                  >
                    View Gallery &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Campus Culture */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-slate-200">
          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200">
            <div className="p-2.5 rounded-xl bg-sky-100 text-sky-700">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy-950">80+ Clubs</div>
              <div className="text-xs text-slate-500">Student-led societies</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200">
            <div className="p-2.5 rounded-xl bg-gold-100 text-gold-700">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy-950">18 Sports</div>
              <div className="text-xs text-slate-500">Varsity athletic leagues</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200">
            <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy-950">Global Fests</div>
              <div className="text-xs text-slate-500">Cultural & arts symphonies</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200">
            <div className="p-2.5 rounded-xl bg-purple-100 text-purple-700">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy-950">Mentorship</div>
              <div className="text-xs text-slate-500">Peer & faculty coaching</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
