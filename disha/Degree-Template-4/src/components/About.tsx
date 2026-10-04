import { useState } from 'react';
import { X } from 'lucide-react';
import { timelineData, facultyData } from '../data/siteData';

export const About = () => {
  const [activeYear, setActiveYear] = useState<typeof timelineData[0] | null>(null);

  return (
    <>
    <section id="about" className="py-24 md:py-32 bg-[var(--color-white)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-[48px] font-bold text-[var(--color-primary)] mb-8">
            AN INSTITUTION BUILT<br />FOR WHAT'S NEXT.
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text)] leading-relaxed">
            Founded with a vision to redefine higher education, Northstar Institute brings together 
            multidisciplinary learning, research excellence, and practical industry exposure to shape 
            the leaders of tomorrow.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-sm uppercase tracking-widest font-semibold text-[var(--color-secondary)] mb-12 text-center">Our Story</h3>
          
          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[var(--color-sage)] -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative z-10">
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className="flex md:flex-col items-center md:items-start group cursor-pointer"
                  onMouseEnter={() => setActiveYear(item)}
                  onTouchStart={() => setActiveYear(item)}
                  onMouseLeave={() => setActiveYear(null)}
                  onTouchEnd={() => setActiveYear(null)}
                >
                  <div className="w-10 h-10 rounded-full bg-[var(--color-ivory)] border-2 border-[var(--color-primary)] flex items-center justify-center text-[var(--color-primary)] font-bold text-xs shrink-0 md:mb-3 group-hover:bg-[var(--color-secondary)] group-hover:border-[var(--color-secondary)] group-hover:text-[var(--color-white)] transition-colors">
                    {item.year.slice(-2)}'
                  </div>
                  <div className="ml-5 md:ml-0">
                    <h4 className="text-lg font-bold text-[var(--color-primary)] mb-1 group-hover:text-[var(--color-secondary)] transition-colors">{item.year}</h4>
                    <p className="text-xs text-[var(--color-text)] font-medium">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Leadership */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-[var(--color-primary)] mb-12">
            PEOPLE WHO SHAPE THE INSTITUTION.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyData.map((faculty, index) => (
              <div key={index} className="group cursor-pointer max-w-[240px] mx-auto w-full">
                <div className="aspect-[3/4] mb-6 overflow-hidden rounded bg-[var(--color-ivory)]">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <h4 className="text-xl font-bold text-[var(--color-primary)] mb-1">{faculty.name}</h4>
                <p className="text-[var(--color-secondary)] font-medium text-sm">{faculty.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
    
    {/* Full Screen Timeline Modal Overlay */}
    {activeYear && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md animate-fade-in-up pointer-events-none" style={{ animationDuration: '0.3s' }}>
        <div className="max-w-4xl w-full mx-6 bg-[var(--color-ivory)] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64 md:h-auto relative">
            <img 
              src={activeYear.image} 
              alt={activeYear.event} 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <h3 className="text-sm uppercase tracking-widest font-semibold text-[var(--color-secondary)] mb-4">{activeYear.year}</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">{activeYear.event}</h2>
            <p className="text-[var(--color-text)] leading-relaxed text-lg">
              {activeYear.description}
            </p>
          </div>
        </div>
      </div>
    )}
    </>
  );
};
