import React from 'react';
import { 
  FlaskConical, 
  Trophy, 
  GraduationCap, 
  Laptop, 
  Users2, 
  ShieldCheck, 
  Library, 
  Compass 
} from 'lucide-react';

export default function WhyChooseUs({ onOpenEnquiry }) {
  const highlights = [
    {
      icon: FlaskConical,
      color: '#0288d1',
      title: 'Advanced Science & Tech Labs',
      desc: 'Separate, state-of-the-art laboratory spaces for Physics, Chemistry, Biology & Computer Science with calibrated apparatus and strict safety protocols.'
    },
    {
      icon: Trophy,
      color: '#ff9800',
      title: 'Integrated Competitive Coaching',
      desc: 'Dual-curriculum pedagogy covering Intermediate Public Examination (IPE) alongside intensive preparation for IIT-JEE, NEET, BITSAT, CLAT & CA-CPT.'
    },
    {
      icon: GraduationCap,
      color: '#4353a4',
      title: 'Eminent Faculty & Personal Mentors',
      desc: 'Learn under senior PhD doctorates and former IITian academicians with 15+ years of pedagogical mastery and dedicated 1-on-1 doubt counters.'
    },
    {
      icon: Laptop,
      color: '#009688',
      title: 'Digital Smart Classrooms',
      desc: 'Air-conditioned digital multimedia classrooms with interactive 4K smart screens, visualized 3D concept animations, and recorded revision lectures.'
    },
    {
      icon: Library,
      color: '#7cb342',
      title: '25,000+ Volume Research Library',
      desc: 'Comprehensive reference section with national journals, previous year question archives, competitive exam modules, and quiet individual cubicles.'
    },
    {
      icon: Compass,
      color: '#e91e63',
      title: 'Career & College Counseling',
      desc: 'Periodic diagnostic aptitude evaluations, psychometric mapping, university application guidance, and motivational sessions by industry leaders.'
    }
  ];

  return (
    <section id="why-us" className="lincoln-why-section">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <h2 className="section-title justify-center">
            Why Choose Lincoln Intermediate College
            <span className="dots-grid">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </span>
          </h2>
          <p className="section-subtitle">
            Providing the strongest conceptual foundation for higher education and competitive success
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="why-cards-grid">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="why-feature-card elevation-1">
                <div 
                  className="why-icon-box"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <Icon size={28} />
                </div>
                <h4 className="why-card-title">{item.title}</h4>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Statistics Banner */}
        <div className="why-banner-cta elevation-2">
          <div className="why-banner-text">
            <h3>Ready to Experience Lincoln's Academic Excellence?</h3>
            <p>Applications for 2026-27 batch are filling fast. Merit scholarships available for top 10th-grade scorers.</p>
          </div>
          <div className="why-banner-btn-wrap">
            <button className="btn btn-outline-white" onClick={onOpenEnquiry}>
              Request College Prospectus
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
