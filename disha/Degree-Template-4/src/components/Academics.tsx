import { useState } from 'react';
import { Search, ChevronUp, ArrowRight } from 'lucide-react';
import { disciplinesData, programmesData } from '../data/siteData';

export const Academics = () => {
  const [activeTab, setActiveTab] = useState('computing');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProgrammes = programmesData.filter(prog => 
    (searchQuery === '' ? prog.discipline === activeTab : true) &&
    (searchQuery === '' || 
     prog.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
     prog.degree.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="academics" className="py-24 md:py-32 bg-[var(--color-ivory)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-[48px] font-bold text-[var(--color-primary)] mb-6 max-w-2xl">
            FIND THE PROGRAMME<br />THAT FITS YOU.
          </h2>
        </div>

        {/* Programme Discovery */}
        <div className="bg-[var(--color-white)] rounded-xl shadow-sm border border-[var(--color-sage)] overflow-hidden mb-24">
          
          {/* Header & Search */}
          <div className="p-8 border-b border-[var(--color-sage)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex space-x-2 md:space-x-8 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {disciplinesData.map(disc => (
                <button
                  key={disc.id}
                  onClick={() => {
                    setActiveTab(disc.id);
                    setSearchQuery('');
                  }}
                  className={`whitespace-nowrap pb-2 text-[15px] font-medium transition-colors border-b-2 ${
                    activeTab === disc.id && !searchQuery
                      ? 'border-[var(--color-secondary)] text-[var(--color-primary)]'
                      : 'border-transparent text-[var(--color-text)] hover:text-[var(--color-primary)]'
                  }`}
                >
                  {disc.name}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search programmes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-[var(--color-ivory)] border border-[var(--color-sage)] rounded text-sm focus:outline-none focus:border-[var(--color-primary)]"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-[var(--color-text)]" />
            </div>
          </div>

          {/* Programme List */}
          <div>
            {filteredProgrammes.length > 0 ? (
              filteredProgrammes.map((prog) => (
                <div key={prog.id} className="border-b border-[var(--color-sage)] last:border-b-0 group">
                  <div 
                    className="p-6 md:px-8 md:py-6 flex justify-between items-center cursor-pointer hover:bg-[var(--color-ivory)] transition-colors"
                    onClick={() => toggleExpand(prog.id)}
                  >
                    <div>
                      <h4 className="text-xl font-bold text-[var(--color-primary)] mb-1">{prog.name}</h4>
                      <p className="text-sm text-[var(--color-text)]">
                        {disciplinesData.find(d => d.id === prog.discipline)?.name} · {prog.duration}
                      </p>
                    </div>
                    <div className="text-[var(--color-secondary)]">
                      {expandedId === prog.id ? <ChevronUp /> : <ArrowRight className="group-hover:translate-x-1 transition-transform" />}
                    </div>
                  </div>
                  
                  {/* Expanded Content */}
                  {expandedId === prog.id && (
                    <div className="px-6 pb-6 md:px-8 md:pb-8 bg-[var(--color-ivory)] grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <span className="block text-xs uppercase tracking-widest text-[var(--color-text)] mb-2 font-semibold">Eligibility</span>
                        <p className="text-[var(--color-primary)] text-sm">{prog.eligibility}</p>
                      </div>
                      <div>
                        <span className="block text-xs uppercase tracking-widest text-[var(--color-text)] mb-2 font-semibold">Key Skills</span>
                        <div className="flex flex-wrap gap-2">
                          {prog.skills.map((skill, i) => (
                            <span key={i} className="bg-[var(--color-white)] border border-[var(--color-sage)] px-3 py-1 rounded text-xs text-[var(--color-primary)]">{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="block text-xs uppercase tracking-widest text-[var(--color-text)] mb-2 font-semibold">Career Areas</span>
                        <p className="text-[var(--color-primary)] text-sm">{prog.career.join(' · ')}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-[var(--color-text)]">
                No programmes found. Try adjusting your search.
              </div>
            )}
          </div>
        </div>

        {/* Faculty & Research */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <h3 className="text-3xl md:text-[40px] font-bold text-[var(--color-primary)] mb-6">
              LEARN FROM EXPERIENCE.
            </h3>
            <p className="text-[var(--color-text)] mb-8">
              Our faculty members are not just academicians; they are industry practitioners, researchers, and mentors dedicated to guiding your intellectual journey.
            </p>
            <div className="bg-[var(--color-white)] p-8 rounded-lg border border-[var(--color-sage)]">
              <h4 className="text-lg font-bold text-[var(--color-primary)] mb-4">12 Research Centres</h4>
              <ul className="space-y-3">
                {['AI & Data Intelligence', 'BioScience', 'Business Innovation', 'Sustainable Technology', 'Media Innovation'].map((center, i) => (
                  <li key={i} className="flex items-center text-[var(--color-text)] text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] mr-3"></span>
                    {center}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=600" alt="Lab Research" className="rounded-lg h-64 w-full object-cover" />
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" alt="Classroom Lecture" className="rounded-lg h-64 w-full object-cover mt-8" />
          </div>
        </div>

      </div>
    </section>
  );
};
