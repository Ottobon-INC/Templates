import React, { useState } from 'react';
import { 
  Calculator, 
  Dna, 
  TrendingUp, 
  Scale, 
  Clock, 
  Award, 
  ArrowRight, 
  Check, 
  FileText,
  Sparkles
} from 'lucide-react';

export default function CoursesSection({ onOpenEnquiry }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const courses = [
    {
      id: 'mpc',
      code: 'MPC STREAM',
      category: 'SCIENCE',
      title: 'Mathematics, Physics & Chemistry',
      subtitle: 'Integrated IIT-JEE (Mains & Advanced) + BITSAT + EAMCET',
      duration: '2 Years Full-Time',
      badgeColor: '#0288d1',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&w=600&q=80',
      description: 'Engineered for aspiring engineers and technologists. Rigorous conceptual mathematics coupled with advanced physics and chemical analysis in modern research labs.',
      keySubjects: ['Pure & Applied Mathematics', 'Classical & Modern Physics', 'Physical, Inorganic & Organic Chem'],
      careers: ['IITs / NITs / BITS', 'Computer Science & AI', 'Aerospace Engineering', 'Defense & NDA'],
      seats: '120 Seats',
      rating: '4.9 ★ (Top Placements)'
    },
    {
      id: 'bipc',
      code: 'BiPC STREAM',
      category: 'SCIENCE',
      title: 'Biology, Physics & Chemistry',
      subtitle: 'Integrated NEET (UG) + AIIMS + JIPMER + Veterinary',
      duration: '2 Years Full-Time',
      badgeColor: '#00897b',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80',
      description: 'The definitive pathway for future doctors, surgeons, and bioscientists. In-depth botanical and zoological dissections, organic reactions, and intensive mock NEET series.',
      keySubjects: ['Botany & Plant Physiology', 'Zoology & Human Anatomy', 'Applied Physics & Chemistry'],
      careers: ['MBBS & BDS', 'AIIMS / JIPMER', 'Biotechnology & Genetics', 'Pharmacy & Agro-Sciences'],
      seats: '90 Seats',
      rating: '4.95 ★ (Medical Selections)'
    },
    {
      id: 'mec',
      code: 'MEC STREAM',
      category: 'COMMERCE',
      title: 'Mathematics, Economics & Commerce',
      subtitle: 'Integrated CA-Foundation + CMA + IPMAT (IIMs)',
      duration: '2 Years Full-Time',
      badgeColor: '#e65100',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
      description: 'Combines mathematical precision with financial intelligence. Perfect for students targeting Chartered Accountancy, investment banking, and premier IIM 5-year IPM programs.',
      keySubjects: ['Advanced Mathematics & Stats', 'Micro & Macro Economics', 'Accountancy & Auditing'],
      careers: ['Chartered Accountancy (CA)', 'IIM Indore / Rohtak IPMAT', 'Investment Banking', 'Actuarial Sciences'],
      seats: '80 Seats',
      rating: '4.8 ★ (Highest CA-CPT Pass Rate)'
    },
    {
      id: 'cec',
      code: 'CEC STREAM',
      category: 'COMMERCE',
      title: 'Civics, Economics & Commerce',
      subtitle: 'Integrated CLAT (National Law Universities) + Civil Services Track',
      duration: '2 Years Full-Time',
      badgeColor: '#5e35b1',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
      description: 'Tailored for future legal counsels, civil servants (UPSC), corporate leaders, and economists. Builds profound foundation in governance, constitutional law, and trade systems.',
      keySubjects: ['Civics & Constitutional Framework', 'Business Economics & Banking', 'Commerce & Commercial Law'],
      careers: ['National Law Universities (CLAT)', 'UPSC Civil Services Foundation', 'Corporate Governance', 'Public Policy & Media'],
      seats: '70 Seats',
      rating: '4.85 ★ (Top Law Selections)'
    }
  ];

  const filteredCourses = selectedCategory === 'ALL' 
    ? courses 
    : courses.filter(c => c.category === selectedCategory);

  return (
    <section id="section-4" className="lincoln-courses-section">
      <div className="container">
        {/* Section Header */}
        <div className="courses-header-block">
          <div className="courses-header-left">
            <h2 className="section-title">
              Intermediate Academic Programs
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
              Comprehensive 2-Year Intermediate Programs (Board of Intermediate Education Approved)
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="category-filters">
            {['ALL', 'SCIENCE', 'COMMERCE'].map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="courses-cards-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-material-card elevation-2">
              {/* Card Image Banner */}
              <div className="course-card-image-wrap">
                <img src={course.image} alt={course.title} className="course-img" />
                <span 
                  className="course-stream-badge"
                  style={{ backgroundColor: course.badgeColor }}
                >
                  {course.code}
                </span>
                <div className="course-rating-pill">{course.rating}</div>
              </div>

              {/* Card Content */}
              <div className="course-card-body">
                <div className="course-meta-row">
                  <span className="course-duration"><Clock size={13} /> {course.duration}</span>
                  <span className="course-seats"><Sparkles size={13} /> {course.seats}</span>
                </div>

                <h3 className="course-title">{course.title}</h3>
                <h5 className="course-integrated-tag">{course.subtitle}</h5>
                <p className="course-description">{course.description}</p>

                {/* Key Subjects */}
                <div className="course-curriculum-list">
                  <strong>Curriculum Highlights:</strong>
                  <ul>
                    {course.keySubjects.map((sub, i) => (
                      <li key={i}>
                        <Check size={13} className="check-icon" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Career Pathways */}
                <div className="course-careers-row">
                  <span className="career-label">Career Gateways:</span>
                  <div className="career-tags">
                    {course.careers.slice(0, 3).map((car, i) => (
                      <span key={i} className="career-chip">{car}</span>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <div className="course-card-actions">
                  <button 
                    className="btn btn-primary course-apply-btn"
                    onClick={onOpenEnquiry}
                  >
                    <span>Apply For Stream</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
