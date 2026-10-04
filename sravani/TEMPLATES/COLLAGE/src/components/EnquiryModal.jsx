import React, { useState } from 'react';
import { X, Send, CheckCircle, GraduationCap, Sparkles, BookOpen } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tenthMarks: '',
    stream: 'MPC (IIT-JEE / B.Tech Track)',
    hostelRequired: 'No'
  });
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      // Allow user to view success
    }, 500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="enquiry-modal-box elevation-3" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header-band">
          <div className="modal-header-title-box">
            <GraduationCap size={24} color="#ffffff" />
            <div>
              <h3>Lincoln Admission Enquiry 2026-27</h3>
              <p>Intermediate 1st & 2nd Year Admissions (MPC, BiPC, MEC, CEC)</p>
            </div>
          </div>
          <button className="modal-close-white" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="modal-body-content">
          {isSuccess ? (
            <div className="modal-success-state">
              <CheckCircle size={60} color="#009688" />
              <h4>Application Enquiry Registered!</h4>
              <p>
                Thank you, <strong>{formData.name}</strong>. Your enquiry for <strong>{formData.stream}</strong> has been logged. Our counseling team will contact you shortly with fee details, syllabus booklets, and scholarship counseling.
              </p>
              <button className="btn btn-primary" onClick={handleReset}>
                Done & Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="modal-form-grid">
              <div className="form-group">
                <label>Student's Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="modal-row-2">
                <div className="form-group">
                  <label>Mobile Number (For WhatsApp / Call) *</label>
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
                    placeholder="student@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="modal-row-2">
                <div className="form-group">
                  <label>Expected / Scored 10th Class % (or GPA)</label>
                  <input 
                    type="text" 
                    placeholder="e.g. 9.8 GPA or 94%"
                    value={formData.tenthMarks}
                    onChange={(e) => setFormData({...formData, tenthMarks: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label>Hostel Facility Required?</label>
                  <select 
                    value={formData.hostelRequired}
                    onChange={(e) => setFormData({...formData, hostelRequired: e.target.value})}
                  >
                    <option value="No">No, Day Scholar (Bus Transport)</option>
                    <option value="Yes">Yes, AC Residential Campus</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Select Target Stream *</label>
                <select 
                  value={formData.stream}
                  onChange={(e) => setFormData({...formData, stream: e.target.value})}
                >
                  <option value="MPC (IIT-JEE / B.Tech Track)">MPC - Maths, Physics, Chemistry (IIT-JEE / BITSAT)</option>
                  <option value="BiPC (NEET / Medical Track)">BiPC - Biology, Physics, Chemistry (NEET / Medical)</option>
                  <option value="MEC (CA / Finance Track)">MEC - Maths, Economics, Commerce (CA-Foundation / IPMAT)</option>
                  <option value="CEC (Civil Services & Law Track)">CEC - Civics, Economics, Commerce (CLAT / Civils)</option>
                </select>
              </div>

              <div className="scholarship-hint">
                <Sparkles size={16} color="#ff9800" />
                <span>Merit scholarships of up to 50% tuition waiver awarded for 10th Board GPA ≥ 9.5</span>
              </div>

              <div className="modal-actions-row">
                <button type="button" className="btn btn-outline-cancel" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary modal-submit-btn">
                  <Send size={15} />
                  <span>Submit Admission Enquiry</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
