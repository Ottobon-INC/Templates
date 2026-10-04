import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Building, Users, BookOpen } from 'lucide-react';
import type { CampusStoryItem } from '../data/collegeData';

interface CampusStoryLandingPageProps {
  story: CampusStoryItem;
  onBack: () => void;
  onExploreAdmissions: () => void;
}

export const CampusStoryLandingPage: React.FC<CampusStoryLandingPageProps> = ({
  story,
  onBack,
  onExploreAdmissions
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF8] animate-in fade-in duration-300">
      {/* Navbar for Landing Page */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#3B2038]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#3B2038] hover:text-[#C85C45] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Campus</span>
          </button>
          
          <div className="text-xs font-serif font-bold text-[#3B2038]">
            NORTHSTAR INSTITUTE
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-12 relative w-full bg-[#3B2038]">
        <img
          src={story.image}
          alt={story.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3B2038] to-[#3B2038]/40 opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-end space-y-1 sm:space-y-2">
          <div className="inline-block px-4 py-1.5 bg-[#C85C45] text-white font-mono text-xs font-bold rounded-full w-max">
            CHAPTER {story.number} &bull; CAMPUS LIFE
          </div>
          <h1 className="font-serif text-6xl md:text-8xl text-white leading-none">
            {story.title}
          </h1>
          <p className="font-mono text-sm md:text-base text-[#E9A23B] tracking-widest uppercase max-w-2xl">
            {story.subtitle}
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column - Main Story */}
        <div className="md:col-span-7 space-y-8">
          <h2 className="font-serif text-3xl md:text-4xl text-[#3B2038]">
            Discover the Heart of Northstar
          </h2>
          <p className="font-sans text-lg md:text-xl text-[#202020]/80 leading-relaxed">
            {story.description}
          </p>
          <p className="font-sans text-base text-[#202020]/70 leading-relaxed">
            A vibrant community built around these spaces ensures every student finds their place to learn, connect, and thrive. Here, modern infrastructure meets human-centric design, creating an environment that continually inspires innovation and collaboration among our scholars and faculty.
          </p>
          
          <div className="pt-8">
             <button
              onClick={onExploreAdmissions}
              className="px-8 py-4 bg-[#C85C45] hover:bg-[#3B2038] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-3 shadow-lg"
            >
              <span>Explore Admissions</span>
              <ArrowRight className="w-4 h-4 text-[#E9A23B]" />
            </button>
          </div>
        </div>

        {/* Right Column - Details & Stats */}
        <div className="md:col-span-5 space-y-6">
          <div className="bg-[#F3E8D0] p-8 rounded-3xl space-y-6 border border-[#3B2038]/10">
            <h3 className="font-mono text-sm font-bold text-[#3B2038] uppercase tracking-widest border-b border-[#3B2038]/10 pb-4">
              At a Glance
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Building className="w-5 h-5 text-[#C85C45]" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[#3B2038]">World-Class Facilities</h4>
                  <p className="text-sm text-[#202020]/70 mt-1">State-of-the-art infrastructure designed for modern pedagogy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <BookOpen className="w-5 h-5 text-[#C85C45]" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[#3B2038]">24/7 Access</h4>
                  <p className="text-sm text-[#202020]/70 mt-1">Continuous access to resources, libraries, and collaborative zones.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <Users className="w-5 h-5 text-[#C85C45]" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-[#3B2038]">Vibrant Community</h4>
                  <p className="text-sm text-[#202020]/70 mt-1">A diverse ecosystem of students, faculty, and industry mentors.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Simple Footer for Landing Page */}
      <footer className="bg-[#3B2038] py-8 text-center text-white/50 text-xs font-mono">
        &copy; {new Date().getFullYear()} Northstar Institute. All fictional demonstration content.
      </footer>
    </div>
  );
};
