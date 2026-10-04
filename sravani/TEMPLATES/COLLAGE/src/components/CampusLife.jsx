import React, { useState } from 'react';
import { Camera, MapPin, Eye } from 'lucide-react';

export default function CampusLife() {
  const [activeTab, setActiveTab] = useState('ALL');

  const galleryItems = [
    {
      id: 1,
      category: 'LABS',
      title: 'Modern Advanced Chemistry & Optics Lab',
      desc: 'Hands-on experimentation with optical benches, spectrometers, and fume hoods.',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 2,
      category: 'CAMPUS',
      title: 'Lincoln Heritage Quad & Student Commons',
      desc: 'Open green spaces for collaborative peer discussions and recreational leisure.',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 3,
      category: 'LIBRARY',
      title: 'Central Digital Knowledge Repository',
      desc: 'Quiet reading zones with high-speed WiFi, digital e-book kiosks, and reference archives.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 4,
      category: 'CLASSROOMS',
      title: 'Acoustically Tuned Smart Lecture Theatres',
      desc: 'Ergonomic seating, dual projection systems, and interactive question-answer boards.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 5,
      category: 'SPORTS',
      title: 'Multi-Sport Arena & Athletic Grounds',
      desc: 'Basketball courts, cricket nets, table tennis, badminton, and outdoor fitness arena.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=700&q=80',
    },
    {
      id: 6,
      category: 'LABS',
      title: 'High-Performance Computer & AI Center',
      desc: '120+ modern workstations dedicated to coding, computational physics, and mock tests.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80',
    }
  ];

  const filteredItems = activeTab === 'ALL' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="campus" className="lincoln-campus-section">
      <div className="container">
        <div className="campus-header-row">
          <div>
            <h2 className="section-title">
              Campus Life & Infrastructure
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
              A serene 15-acre campus crafted to nurture intellectual curiosity, wellness, and holistic growth
            </p>
          </div>

          {/* Filter Pills */}
          <div className="campus-filter-pills">
            {['ALL', 'LABS', 'CLASSROOMS', 'LIBRARY', 'SPORTS'].map((tab) => (
              <button
                key={tab}
                className={`campus-pill ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="campus-gallery-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="campus-card elevation-1">
              <div className="campus-img-container">
                <img src={item.image} alt={item.title} className="campus-img" />
                <div className="campus-overlay-hover">
                  <span className="campus-cat-badge">{item.category}</span>
                  <h4 className="campus-img-title">{item.title}</h4>
                  <p className="campus-img-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
