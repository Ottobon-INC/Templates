import React, { useState } from 'react';
import { ArrowRight, Calendar, X } from 'lucide-react';

export default function MjcWhatsHappening() {
  const [activeNews, setActiveNews] = useState(null);

  const newsItems = [
    {
      id: 1,
      date: '07/20/2026',
      title: 'BIEAP IPE Practical Exam Dates & Hall Tickets Released',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      summary: 'The Board of Intermediate Education, Andhra Pradesh has published the timetable for intermediate 1st & 2nd year practical examinations. Students can download digital hall tickets from the college portal.'
    },
    {
      id: 2,
      date: '07/20/2026',
      title: 'AP EAPCET & JEE Mains Intensive Crash Course Registration Open',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
      summary: 'Special intensive booster batches commencing for MPC & BiPC aspirants. Daily mock CBT exams, doubt clarification counters, and chapter-wise state ranker formula handbooks.'
    },
    {
      id: 3,
      date: '07/06/2026',
      title: "Annual State-level Science & Cultural Fest 'Pratibha' - Register Today!",
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
      summary: "Inter-collegiate academic symposium featuring working robotics models, quiz competitions, commerce case studies, and cultural events with over ₹2 Lakhs in cash awards."
    },
    {
      id: 4,
      date: '06/08/2026',
      title: 'Merit Scholarship Distribution for Top 10th/SSC Scorers',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80',
      summary: 'Honoring top SSC rankers who secured 10/10 GPA with up to 100% tuition waivers and free hostel admission under the Green Valley Memorial Merit Trust.'
    }
  ];

  return (
    <div
      className="card-3-section-bg common-section-overlay py-20 lg:py-28 relative text-white"
      style={{
        background: `url('https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=80') no-repeat center center`,
        backgroundSize: 'cover',
      }}
    >
      {/* Exact Multiply Overlay from MJC source */}
      <div
        className="section-overlay absolute inset-0"
        style={{ background: '#172b54', mixBlendMode: 'multiply', opacity: 0.94 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="whats-happening-description section-overlay-content">
          
          {/* Main Title */}
          <div className="main-title text-center mb-14">
            <h2 className="title-block text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              What's happening at Green Valley Junior College?
            </h2>
            <div className="w-20 h-1 bg-mjc-yellow mx-auto mt-4"></div>
          </div>

          {/* 4 Feed Items List */}
          <div className="feed-items-list grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveNews(item)}
                className="feed-items-block bg-slate-900/90 border border-slate-700 hover:border-mjc-yellow transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="image h-44 overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2 bg-mjc-blue text-white text-[10px] font-bold px-2.5 py-1 uppercase">
                      {item.date}
                    </div>
                  </div>

                  <div className="feed-items-detail p-5">
                    <h3 className="title text-base font-bold text-white leading-snug group-hover:text-mjc-yellow transition-colors line-clamp-3">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="readmore-link px-5 pb-5 pt-2">
                  <span className="text-xs font-bold text-mjc-yellow uppercase tracking-wider flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* More News Button */}
          <div className="readmore-button text-center mt-12">
            <button
              onClick={() => setActiveNews(newsItems[0])}
              className="btn btn-simple-arrow hover-yellow text-sm font-bold uppercase tracking-wider text-white hover:text-mjc-yellow inline-flex items-center gap-2"
            >
              <span>More News</span> &rarr;
            </button>
          </div>

        </div>
      </div>

      {/* News Detail Modal */}
      {activeNews && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 max-w-lg w-full p-6 text-white relative animate-fadeIn shadow-2xl">
            <button
              onClick={() => setActiveNews(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-xs text-mjc-yellow font-bold uppercase mb-2">
              BIEAP News • {activeNews.date}
            </div>
            <h3 className="text-xl font-bold mb-4">{activeNews.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {activeNews.summary}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveNews(null)}
                className="btn btn-yellow text-xs px-4 py-2 font-bold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
