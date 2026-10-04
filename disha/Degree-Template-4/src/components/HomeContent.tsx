import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { disciplinesData, programmesData } from '../data/siteData';

export const HomeContent = () => {
  const [activeDiscipline, setActiveDiscipline] = useState<string | null>(null);

  const activeDiscData = activeDiscipline ? disciplinesData.find(d => d.id === activeDiscipline) : null;
  const activeProgrammes = activeDiscipline ? programmesData.filter(p => p.discipline === activeDiscipline) : [];
  const ugProgrammes = activeProgrammes.filter(p => p.level === 'UG');
  const pgProgrammes = activeProgrammes.filter(p => p.level === 'PG');

  return (
    <>
    <section id="academics" className="bg-[var(--color-ivory)] pt-24 pb-16 md:pb-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Academic Directions */}
        <div className="mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] max-w-xl">
              MORE WAYS TO FIND YOUR DIRECTION.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {disciplinesData.map((disc) => (
              <div 
                key={disc.id} 
                onClick={() => setActiveDiscipline(disc.id)}
                className="group border border-[var(--color-sage)] p-8 rounded bg-[var(--color-ivory)] hover:bg-[var(--color-primary)] transition-colors duration-300 cursor-pointer flex flex-col justify-between h-64 shadow-sm hover:shadow-xl"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-white)] mb-4 transition-colors">
                    {disc.name}
                  </h3>
                  <p className="text-[var(--color-text)] group-hover:text-[var(--color-sage)] transition-colors line-clamp-3">
                    {disc.description}
                  </p>
                </div>
                <div className="flex justify-end">
                  <ArrowRight className="text-[var(--color-secondary)] group-hover:text-[var(--color-accent)] transform group-hover:translate-x-2 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>

    {/* Expanded Discipline Landing Page */}
    {activeDiscData && (
      <div className="fixed inset-0 z-[100] bg-[var(--color-ivory)] overflow-y-auto animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 py-12 md:py-24">
          <button 
            onClick={() => setActiveDiscipline(null)}
            className="inline-flex items-center text-[var(--color-secondary)] font-bold hover:text-[var(--color-primary)] transition-colors mb-12 group tracking-wide uppercase text-sm"
          >
            <ArrowRight className="mr-3 w-5 h-5 rotate-180 group-hover:-translate-x-2 transition-transform" />
            Back to Academics
          </button>
          
          <h3 className="text-sm uppercase tracking-widest font-semibold text-[var(--color-secondary)] mb-4">Academic Branch</h3>
          <h2 className="text-4xl md:text-[64px] font-bold text-[var(--color-primary)] mb-8 leading-tight">{activeDiscData.name}</h2>
          <p className="text-[var(--color-text)] mb-16 text-xl md:text-2xl max-w-3xl leading-relaxed">{activeDiscData.description}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* UG */}
            <div>
              <h4 className="text-3xl font-bold text-[var(--color-primary)] mb-8 border-b-2 border-[var(--color-sage)] pb-4">Undergraduate (UG)</h4>
              <div className="space-y-8">
                {ugProgrammes.map(prog => (
                  <div key={prog.id} className="bg-white p-8 rounded-2xl border border-[var(--color-sage)] shadow-sm hover:shadow-lg transition-shadow">
                    <h5 className="font-bold text-2xl text-[var(--color-primary)] mb-2">{prog.name}</h5>
                    <p className="text-[var(--color-text)] mb-6 font-medium">{prog.duration} • {prog.degree}</p>
                    <p className="text-sm text-[var(--color-secondary)] font-bold uppercase tracking-wider mb-2">Career Paths</p>
                    <p className="text-[var(--color-text)] text-lg">{prog.career.join(', ')}</p>
                  </div>
                ))}
                {ugProgrammes.length === 0 && <p className="text-[var(--color-text)] italic text-lg">No UG programmes currently listed.</p>}
              </div>
            </div>
            
            {/* PG */}
            <div>
              <h4 className="text-3xl font-bold text-[var(--color-primary)] mb-8 border-b-2 border-[var(--color-sage)] pb-4">Postgraduate (PG)</h4>
              <div className="space-y-8">
                {pgProgrammes.map(prog => (
                  <div key={prog.id} className="bg-white p-8 rounded-2xl border border-[var(--color-sage)] shadow-sm hover:shadow-lg transition-shadow">
                    <h5 className="font-bold text-2xl text-[var(--color-primary)] mb-2">{prog.name}</h5>
                    <p className="text-[var(--color-text)] mb-6 font-medium">{prog.duration} • {prog.degree}</p>
                    <p className="text-sm text-[var(--color-secondary)] font-bold uppercase tracking-wider mb-2">Career Paths</p>
                    <p className="text-[var(--color-text)] text-lg">{prog.career.join(', ')}</p>
                  </div>
                ))}
                {pgProgrammes.length === 0 && <p className="text-[var(--color-text)] italic text-lg">No PG programmes currently listed.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};
