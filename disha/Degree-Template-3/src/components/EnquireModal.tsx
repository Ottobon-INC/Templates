import React, { useState } from 'react';
import { X, Send, CheckCircle2, PhoneCall, Mail, User, BookOpen } from 'lucide-react';
import { collegeData, disciplinesData } from '../data/universityData';

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquireModal: React.FC<EnquireModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    discipline: 'computing',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // reset after feedback
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-navy border border-electric/30 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-white overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-white">Enquiry Received</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you, <span className="font-semibold text-gold">{formData.name}</span>. An academic advisor from {collegeData.shortName} Admissions will contact you at <span className="font-mono text-electric-light">{formData.phone}</span> within 24 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-electric text-white font-semibold text-sm rounded-lg hover:bg-electric-hover transition shadow-lg"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider mb-1">
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Academic Counselling</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
              Enquire at Northstar
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6">
              Have questions about eligibility, fee structures, or campus hostels? Leave your contact details below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aditi Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-navy-dark border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-navy-dark border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="aditi@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-navy-dark border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Area of Interest</label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full bg-navy-dark border border-slate-700 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-electric"
                  >
                    {disciplinesData.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} ({d.programmesCount} Programmes)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Message / Specific Questions (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Ask about hostel, fee payment plans, scholarships..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-navy-dark border border-slate-700 rounded-lg p-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-gold to-gold-hover text-navy font-bold rounded-lg shadow-lg hover:shadow-gold-glow transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-400">
                🔒 Demo Enquiry Portal — No real personal data is transmitted.
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
