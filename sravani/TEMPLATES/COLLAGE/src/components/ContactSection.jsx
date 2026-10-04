import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building,
  Camera,
  GraduationCap
} from 'lucide-react';

export default function ContactSection({ onOpenEnquiry }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    stream: 'MPC (Maths, Physics, Chem)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const campusHighlights = [
    { title: 'Advanced Science & Optics Labs', category: 'LABORATORY', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80' },
    { title: 'Sprawling Campus Quad & Commons', category: 'CAMPUS', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=500&q=80' },
    { title: 'Central Research & Digital Library', category: 'LIBRARY', img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <section id="section-5" className="lincoln-contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title justify-center">
            Admissions, Campus & Contact
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
            Visit our 15-acre modern campus for personalized counseling or submit your admission enquiry below
          </p>
        </div>

        {/* 3 Campus Snapshots */}
        <div className="campus-mini-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
          {campusHighlights.map((c, i) => (
            <div key={i} className="campus-card elevation-1" style={{ borderRadius: '4px', overflow: 'hidden', height: '170px', position: 'relative' }}>
              <img src={c.img} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '12px 14px', background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)', color: '#fff' }}>
                <span style={{ fontSize: '10px', background: '#4353a4', padding: '2px 6px', borderRadius: '2px', fontWeight: 'bold' }}>{c.category}</span>
                <div style={{ fontSize: '13px', fontWeight: '500', marginTop: '4px' }}>{c.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-main-grid">
          {/* Left Column: Campus Info & Visiting Hours */}
          <div className="contact-info-panel elevation-2">
            <h3 className="panel-title">Campus Information</h3>
            <p className="panel-intro">
              Our academic counselors are available to guide you through stream selections, entrance coaching schedules, and scholarship eligibility.
            </p>

            <div className="info-items-list">
              <div className="info-box-item">
                <div className="info-box-icon">
                  <MapPin size={20} />
                </div>
                <div className="info-box-text">
                  <h5>College Campus Location</h5>
                  <p>Lincoln Intermediate College, Sector 4, University Enclave, Knowledge Park, Hyderabad / Amaravati, 500081</p>
                </div>
              </div>

              <div className="info-box-item">
                <div className="info-box-icon">
                  <Phone size={20} />
                </div>
                <div className="info-box-text">
                  <h5>Phone & Helpline</h5>
                  <p>Admission Office: +91 (40) 2345-6789<br />Direct Counseling Cell: +91 98490 12345</p>
                </div>
              </div>

              <div className="info-box-item">
                <div className="info-box-icon">
                  <Mail size={20} />
                </div>
                <div className="info-box-text">
                  <h5>Official Email</h5>
                  <p>admissions@lincolncollege.edu<br />info@lincolnintermediate.org</p>
                </div>
              </div>

              <div className="info-box-item">
                <div className="info-box-icon">
                  <Clock size={20} />
                </div>
                <div className="info-box-text">
                  <h5>Office & Counseling Hours</h5>
                  <p>Monday - Saturday: 8:30 AM to 5:30 PM<br />Sunday: 10:00 AM to 2:00 PM (By Appointment)</p>
                </div>
              </div>
            </div>

            {/* Quick Transport notice */}
            <div className="transport-note">
              <Building size={16} />
              <span>Campus bus transport available across all major city routes.</span>
            </div>
          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="contact-form-panel elevation-2">
            <h3 className="panel-title">Send Admission Enquiry</h3>
            <p className="panel-intro">Fill out the quick form to receive course brochures, fee breakdown, and syllabus preview.</p>

            {submitted ? (
              <div className="form-success-box animate-fade-in">
                <CheckCircle2 size={54} color="#009688" />
                <h4>Enquiry Submitted Successfully!</h4>
                <p>
                  Thank you, <strong>{formData.studentName || 'Student'}</strong>. Our senior admissions counselor will reach out to <strong>{formData.phone || 'your phone number'}</strong> within 2 hours.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      studentName: '',
                      parentName: '',
                      phone: '',
                      email: '',
                      stream: 'MPC (Maths, Physics, Chem)',
                      message: ''
                    });
                  }}
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form-inner">
                <div className="form-row-2">
                  <div className="form-group">
                    <label>Student's Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Parent / Guardian Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label>Contact Phone Number *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="student@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Interested Intermediate Stream *</label>
                  <select 
                    value={formData.stream}
                    onChange={(e) => setFormData({...formData, stream: e.target.value})}
                  >
                    <option value="MPC (Maths, Physics, Chem)">MPC (Maths, Physics, Chem) - IIT-JEE / B.Tech Track</option>
                    <option value="BiPC (Biology, Physics, Chem)">BiPC (Biology, Physics, Chem) - NEET / Medical Track</option>
                    <option value="MEC (Maths, Eco, Commerce)">MEC (Maths, Eco, Commerce) - CA / Finance Track</option>
                    <option value="CEC (Civics, Eco, Commerce)">CEC (Civics, Eco, Commerce) - Law / Civil Services Track</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message / Specific Questions (Optional)</label>
                  <textarea 
                    rows={4}
                    placeholder="Mention previous 10th standard score, hostel requirements, or scholarship queries..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  <Send size={16} />
                  <span>Submit Admission Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
