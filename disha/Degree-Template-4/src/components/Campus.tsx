import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { campusData, placementsData, alumniData } from '../data/siteData';

export const Campus = () => {
  const [activeFacility, setActiveFacility] = useState<typeof campusData.facilities[0] | null>(null);
  const [activeAlumniIndex, setActiveAlumniIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlumniIndex((prev) => (prev + 1) % alumniData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section id="campus" className="py-16 md:py-24 bg-[var(--color-sage)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Campus Header & Image */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-[48px] font-bold text-[var(--color-primary)] mb-12 text-center">
            CAMPUS STORY.
          </h2>


          <div className="flex flex-col md:flex-row h-[600px] md:h-[450px] gap-2 md:gap-4 w-full">
            {campusData.facilities.map((fac, i) => (
              <div 
                key={i}
                onClick={() => setActiveFacility(fac)}
                className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex-1 hover:flex-[4] group"
              >
                <img src={fac.image} alt={fac.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 whitespace-nowrap overflow-hidden text-ellipsis group-hover:text-[var(--color-accent)] transition-colors transform translate-y-4 group-hover:translate-y-0 duration-500">{fac.name}</h3>
                  <div className="w-12 h-1 bg-[var(--color-secondary)] opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Careers & Placements */}
        <div id="alumni" className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-[48px] font-bold text-[var(--color-primary)]">
              FROM LEARNING<br />TO WHAT'S NEXT.
            </h2>
          </div>
          
          {/* Alumni Stories */}
          <div className="mb-20 overflow-hidden px-4">
            <h3 className="text-sm uppercase tracking-widest font-semibold text-[var(--color-primary)] mb-12 text-center">Alumni Stories</h3>
            
            <div className="relative max-w-6xl mx-auto flex justify-center items-center h-[450px]">
              {alumniData.map((alumni, i) => {
                let position = 'hidden';
                let zIndex = 'z-0';
                let styles = '';
                
                if (i === activeAlumniIndex) {
                  position = 'center';
                  zIndex = 'z-20';
                  styles = 'translate-x-0 scale-100 opacity-100 blur-none shadow-2xl';
                } else if (i === (activeAlumniIndex - 1 + alumniData.length) % alumniData.length) {
                  position = 'left';
                  zIndex = 'z-10';
                  styles = '-translate-x-[65%] md:-translate-x-[85%] scale-90 opacity-40 blur-[2px] cursor-pointer hover:opacity-60 shadow-md';
                } else if (i === (activeAlumniIndex + 1) % alumniData.length) {
                  position = 'right';
                  zIndex = 'z-10';
                  styles = 'translate-x-[65%] md:translate-x-[85%] scale-90 opacity-40 blur-[2px] cursor-pointer hover:opacity-60 shadow-md';
                } else if (i === (activeAlumniIndex - 2 + alumniData.length) % alumniData.length) {
                  position = 'far-left';
                  zIndex = 'z-0';
                  styles = '-translate-x-[130%] md:-translate-x-[170%] scale-75 opacity-20 blur-[4px] cursor-pointer hover:opacity-40 shadow-sm';
                } else if (i === (activeAlumniIndex + 2) % alumniData.length) {
                  position = 'far-right';
                  zIndex = 'z-0';
                  styles = 'translate-x-[130%] md:translate-x-[170%] scale-75 opacity-20 blur-[4px] cursor-pointer hover:opacity-40 shadow-sm';
                } else {
                  styles = 'translate-x-0 scale-50 opacity-0 pointer-events-none';
                }

                return (
                  <div 
                    key={i} 
                    onClick={() => {
                      if (position === 'left' || position === 'far-left') setActiveAlumniIndex((activeAlumniIndex - 1 + alumniData.length) % alumniData.length);
                      if (position === 'right' || position === 'far-right') setActiveAlumniIndex((activeAlumniIndex + 1) % alumniData.length);
                    }}
                    className={`absolute transition-all duration-500 ease-out bg-[var(--color-white)] rounded-xl border border-black/5 flex flex-col justify-between w-[320px] md:w-[350px] overflow-hidden ${zIndex} ${styles}`}
                  >
                    <div className="flex flex-col h-full">
                      <div className="h-56 md:h-64 w-full">
                        <img src={alumni.image} alt={alumni.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-8 text-center flex flex-col justify-center flex-grow bg-[var(--color-white)]">
                        <h4 className="font-bold text-[var(--color-primary)] text-2xl mb-2">{alumni.name}</h4>
                        <p className="text-base text-[var(--color-text)] mb-1">{alumni.degree}</p>
                        <p className="text-lg font-semibold text-[var(--color-secondary)]">{alumni.role}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-[var(--color-ivory)] rounded-2xl p-16 text-center shadow-lg border border-[var(--color-sage)]">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] mb-8">
            YOUR FUTURE STARTS<br />WITH A DIRECTION.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#academics" className="bg-[var(--color-primary)] text-[var(--color-white)] px-8 py-4 rounded font-medium hover:bg-opacity-90 transition-all">
              Explore Programmes
            </a>
            <a href="#admissions" className="bg-[var(--color-secondary)] text-[var(--color-white)] px-8 py-4 rounded font-medium hover:bg-opacity-90 transition-all">
              Apply Now
            </a>
          </div>
        </div>

      </div>
    </section>

    {/* Expanded Facility Landing Page */}
    {activeFacility && (
      <div className="fixed inset-0 z-[100] bg-[var(--color-ivory)] overflow-y-auto animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-12 md:py-24">
          <button 
            onClick={() => setActiveFacility(null)}
            className="inline-flex items-center text-[var(--color-secondary)] font-bold hover:text-[var(--color-primary)] transition-colors mb-12 group tracking-wide uppercase text-sm"
          >
            <ArrowRight className="mr-3 w-5 h-5 rotate-180 group-hover:-translate-x-2 transition-transform" />
            Back to Campus
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-[64px] font-bold text-[var(--color-primary)] mb-8 leading-tight">{activeFacility.name}</h2>
              <p className="text-[var(--color-text)] text-xl md:text-2xl leading-relaxed">{activeFacility.description}</p>
            </div>
            
            <div className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={activeFacility.image} 
                alt={activeFacility.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};
