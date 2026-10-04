import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';
import './Academics.css';

interface Programme {
  name: string;
  level: string;
  duration: string;
  skills: string;
  careers: string;
}

const academicsData = [
  {
    category: 'COMPUTING',
    desc: 'Future-ready tech and software engineering programs.',
    programmes: [
      { name: 'B.Sc. Computer Science', level: 'UG', duration: '3 Years', skills: 'Python, Java, C++', careers: 'Software Engineer, Systems Analyst' },
      { name: 'BCA', level: 'UG', duration: '3 Years', skills: 'Web Dev, Databases, Networking', careers: 'Web Developer, IT Consultant' },
      { name: 'M.Sc. Data Science', level: 'PG', duration: '2 Years', skills: 'Python, Statistics, ML', careers: 'Data Analyst, Data Scientist' },
      { name: 'M.Tech Artificial Intelligence', level: 'PG', duration: '2 Years', skills: 'Deep Learning, NLP, Python', careers: 'AI Engineer, ML Engineer' },
    ]
  },
  {
    category: 'SCIENCE',
    desc: 'Explore the natural world and scientific methodologies.',
    programmes: [
      { name: 'B.Sc. Biotechnology', level: 'UG', duration: '3 Years', skills: 'Genetics, Lab Tech', careers: 'Biotechnologist' },
      { name: 'B.Sc. Mathematics', level: 'UG', duration: '3 Years', skills: 'Calculus, Algebra, Logic', careers: 'Mathematician' },
      { name: 'M.Sc. Physics', level: 'PG', duration: '2 Years', skills: 'Quantum Mechanics, Optics', careers: 'Physicist' },
    ]
  },
  {
    category: 'COMMERCE',
    desc: 'Business, trade, and financial acumen.',
    programmes: [
      { name: 'B.Com. Accounting & Finance', level: 'UG', duration: '3 Years', skills: 'Accounting, Taxation, Finance', careers: 'Accountant' },
      { name: 'M.Com. Business Analytics', level: 'PG', duration: '2 Years', skills: 'Data Analysis', careers: 'Business Analyst' },
    ]
  },
  {
    category: 'MANAGEMENT',
    desc: 'Leadership, strategy, and corporate governance.',
    programmes: [
      { name: 'BBA', level: 'UG', duration: '3 Years', skills: 'Management, HR, Marketing', careers: 'Manager, Entrepreneur' },
      { name: 'MBA Digital Marketing', level: 'PG', duration: '2 Years', skills: 'SEO, SEM, Content Strategy', careers: 'Digital Marketer' },
    ]
  },
  {
    category: 'ARTS',
    desc: 'Humanities, social sciences, and creative arts.',
    programmes: [
      { name: 'B.A. Psychology', level: 'UG', duration: '3 Years', skills: 'Counseling, Human Behavior', careers: 'Psychologist' },
      { name: 'M.A. Economics', level: 'PG', duration: '2 Years', skills: 'Macro/Micro Economics', careers: 'Economist' },
    ]
  },
  {
    category: 'MEDIA',
    desc: 'Media, journalism, and mass communication.',
    programmes: [
      { name: 'B.A. Visual Communication', level: 'UG', duration: '3 Years', skills: 'Design, Video Production', careers: 'Designer' },
      { name: 'M.A. Digital Media', level: 'PG', duration: '2 Years', skills: 'Content Creation, Editing', careers: 'Content Creator' },
    ]
  }
];

const Academics = () => {
  const [activeCategory, setActiveCategory] = useState<any | null>(null);
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);

  return (
    <div className="academics-section">
      <div className="container">
        <AnimatePresence mode="wait">
          {!activeCategory ? (
            <motion.div 
              key="grid"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="academics-header">
                <h2 className="heading-major">WHAT WILL YOU<br/>EXPLORE?</h2>
              </div>
              <div className="branch-grid">
                {academicsData.map((branch, index) => (
                  <div 
                    key={index} 
                    className="branch-card"
                    onClick={() => setActiveCategory(branch)}
                  >
                    <h3>{branch.category}</h3>
                    <p>{branch.desc}</p>
                    <span className="explore-link">Explore Branches <ArrowRight size={16} /></span>
                  </div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="details"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="branch-details-page"
            >
              <button className="back-btn" onClick={() => setActiveCategory(null)}>
                <ArrowLeft size={20} /> Back to Disciplines
              </button>
              
              <div className="branch-header">
                <h2 className="heading-major">{activeCategory.category}</h2>
                <p className="heading-sub">{activeCategory.desc}</p>
              </div>

              <div className="programmes-lists">
                <div className="programme-column">
                  <h3>Undergraduate (UG)</h3>
                  <div className="programme-list">
                    {activeCategory.programmes.filter((p: any) => p.level === 'UG').map((prog: any, i: number) => (
                      <div key={i} className="prog-card" onClick={() => setSelectedProgramme(prog)}>
                        <h4>{prog.name}</h4>
                        <span>View Details <ArrowRight size={14} /></span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="programme-column">
                  <h3>Postgraduate (PG)</h3>
                  <div className="programme-list">
                    {activeCategory.programmes.filter((p: any) => p.level === 'PG').map((prog: any, i: number) => (
                      <div key={i} className="prog-card" onClick={() => setSelectedProgramme(prog)}>
                        <h4>{prog.name}</h4>
                        <span>View Details <ArrowRight size={14} /></span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProgramme && (
          <motion.div 
            className="programme-side-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <button className="close-panel" onClick={() => setSelectedProgramme(null)}>
              <X size={24} />
            </button>
            
            <div className="panel-content">
              <h3 className="heading-major panel-title">{selectedProgramme.name}</h3>
              
              <div className="panel-detail">
                <span className="label">Level</span>
                <span className="value">{selectedProgramme.level}</span>
              </div>
              
              <div className="panel-detail">
                <span className="label">Duration</span>
                <span className="value">{selectedProgramme.duration}</span>
              </div>
              
              <div className="panel-detail">
                <span className="label">Skills</span>
                <div className="tags">
                  {selectedProgramme.skills.split(', ').map((skill, i) => (
                    <span key={i} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="panel-detail">
                <span className="label">Career Paths</span>
                <div className="tags career-tags">
                  {selectedProgramme.careers.split(', ').map((career, i) => (
                    <span key={i} className="tag tag-outline">{career}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="panel-footer">
              <button className="btn-primary w-full">
                Apply for Programme <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {selectedProgramme && (
        <div className="panel-overlay" onClick={() => setSelectedProgramme(null)}></div>
      )}
    </div>
  );
};

export default Academics;
