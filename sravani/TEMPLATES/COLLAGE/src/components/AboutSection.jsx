import React, { useState } from 'react';
import { 
  Play, 
  ChevronRight, 
  GraduationCap, 
  School, 
  Users, 
  CheckCircle, 
  Award, 
  BookOpen, 
  X 
} from 'lucide-react';

export default function AboutSection({ onOpenEnquiry }) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="section-2" className="lincoln-welcome-section">
      {/* Blue Top Band matching reference image: "Welcome to Lincoln School :::" */}
      <div className="welcome-blue-band">
        <div className="container">
          <div className="welcome-heading-row">
            <h2 className="welcome-heading">
              Welcome to Lincoln Junior College
              <span className="dots-grid-white">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content Area Overlapping the Blue Band */}
      <div className="container welcome-cards-container">
        <div className="welcome-cards-grid">
          {/* Left White Card - "About School" */}
          <div className="about-text-card elevation-2">
            <h3 className="about-card-title">About College</h3>
            
            <p className="about-card-para">
              Lincoln Intermediate College has an unyielding commitment to academic excellence and student empowerment. We seek to cultivate within every intermediate pupil a positive, ambitious vision for their future, ensuring they become well-rounded, responsible, and triumphant citizens.
            </p>

            <p className="about-card-para">
              Our seasoned faculty takes immense pride in our meticulously structured 2-year intermediate streams—MPC, BiPC, MEC, and CEC. By integrating core board curriculum with parallel national entrance preparation (IIT-JEE, NEET, CUET, CA-Foundation), we prepare students for admission into the nation’s foremost universities.
            </p>

            <div className="about-features-micro">
              <div className="micro-feat">
                <CheckCircle size={15} color="#4353a4" />
                <span>State Board Certified & Top Rank History</span>
              </div>
              <div className="micro-feat">
                <CheckCircle size={15} color="#4353a4" />
                <span>Daily Practice Problems & Regular Mock Tests</span>
              </div>
            </div>

            <div className="about-card-action">
              <a href="#courses" className="btn btn-primary btn-read-more">
                <span>Read more</span>
                <ChevronRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Card - Video Player with Campus Image and Play Button */}
          <div className="about-video-card elevation-2">
            <div 
              className="video-thumbnail-wrapper"
              onClick={() => setVideoModalOpen(true)}
              role="button"
              tabIndex={0}
              title="Click to watch Lincoln Campus Tour"
            >
              {/* Campus architectural photo resembling the stone castle/heritage university in the reference */}
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80" 
                alt="Lincoln Intermediate College Campus Building" 
                className="campus-video-img"
              />

              {/* YouTube Style Overlay Bar at Top */}
              <div className="video-top-bar">
                <div className="video-channel-info">
                  <div className="channel-avatar">
                    <GraduationCap size={16} color="#fff" />
                  </div>
                  <span className="video-title-text">Lincoln Intermediate College - Official Campus Tour (2026)</span>
                </div>
              </div>

              {/* Centered Red Play Button from Reference */}
              <div className="youtube-play-btn-pulse">
                <div className="youtube-red-btn">
                  <Play size={24} fill="#ffffff" color="#ffffff" style={{ marginLeft: '3px' }} />
                </div>
              </div>

              {/* Bottom YouTube watermark */}
              <div className="video-bottom-bar">
                <span className="watch-on-yt">Watch Campus Tour • Experience World-Class Infrastructure</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Colored Material Stats Cards Matching Reference Image */}
        <div className="material-stats-row">
          {/* Card 1: Sky Blue (#02a8f3) */}
          <div className="stat-card stat-blue elevation-1">
            <div className="stat-card-header">
              <span className="stat-label">GRADUATION</span>
              <GraduationCap size={28} className="stat-icon" />
            </div>
            <div className="stat-value">98.4%</div>
            <div className="stat-sub">IPE Board Distinction & First Class</div>
          </div>

          {/* Card 2: Teal Green (#009688) */}
          <div className="stat-card stat-teal elevation-1">
            <div className="stat-card-header">
              <span className="stat-label">CLASS ROOMS & LABS</span>
              <School size={28} className="stat-icon" />
            </div>
            <div className="stat-value">60+</div>
            <div className="stat-sub">Air-Conditioned Smart Digital Studios</div>
          </div>

          {/* Card 3: Lime Green (#7cb342) */}
          <div className="stat-card stat-lime elevation-1">
            <div className="stat-card-header">
              <span className="stat-label">STUDENTS</span>
              <Users size={28} className="stat-icon" />
            </div>
            <div className="stat-value">1,624</div>
            <div className="stat-sub">Enrolled Scholars Across All Streams</div>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {videoModalOpen && (
        <div className="modal-backdrop" onClick={() => setVideoModalOpen(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setVideoModalOpen(false)}>
              <X size={24} />
            </button>
            <div className="video-responsive-frame">
              <video
                controls
                autoPlay
                className="w-full h-full rounded"
                style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                poster="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
            </div>
            <div className="modal-caption">
              <h4>Lincoln Intermediate College - State-of-the-art Learning Environment</h4>
              <p>Experience our world-class science labs, digital classrooms, sports complex, and serene study spaces.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
