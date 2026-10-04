import React, { useState } from 'react';
import { X, Download, CheckCircle, Mail, FileText } from 'lucide-react';
import { collegeData } from '../data/universityData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  const handleDone = () => {
    setDownloaded(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-navy border border-electric/30 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-white">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-heading font-bold text-xl text-white">Brochure Sent & Downloaded</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              The 2027 Information Prospectus for <span className="text-gold font-semibold">{collegeData.name}</span> has been sent to <span className="font-mono text-electric-light">{email}</span>.
            </p>
            <div className="pt-2">
              <button
                onClick={handleDone}
                className="px-6 py-2.5 bg-electric text-white font-semibold text-xs rounded-lg hover:bg-electric-hover transition"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="w-12 h-12 bg-gold/20 text-gold rounded-xl flex items-center justify-center mb-4 border border-gold/40">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-xl text-white mb-1">
              Download 2027 Academic Prospectus
            </h3>
            <p className="text-slate-300 text-xs mb-6">
              Get detailed fee structures, lab infrastructure specs, hostel guides, and 32+ programme course maps.
            </p>

            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Enter Email to Receive PDF *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="student@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-navy-dark border border-slate-700 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-electric"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-gold to-gold-hover text-navy font-bold rounded-lg shadow-lg hover:shadow-gold-glow transition flex items-center justify-center gap-2 text-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF Prospectus</span>
              </button>

              <div className="text-[10px] text-slate-400 text-center">
                Instant digital prospectus link • 4.8 MB PDF
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
