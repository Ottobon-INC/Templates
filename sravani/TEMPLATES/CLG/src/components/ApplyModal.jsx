import React, { useState } from 'react';
import { X, CheckCircle2, GraduationCap, Send } from 'lucide-react';

export default function ApplyModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    sscSchool: '',
    sscGpa: '',
    stream: 'M.P.C. (Maths, Physics, Chemistry) — JEE & EAPCET',
    studentType: 'Day Scholar (With Bus Facility)',
    district: 'Krishna / Vijayawada',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    setAppId(`BIEAP-GVJC-${randomNum}`);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-none max-w-lg w-full shadow-2xl border-2 border-mjc-blue overflow-hidden animate-fadeIn">
        
        {/* Header Bar */}
        <div className="bg-primary text-white p-5 flex items-center justify-between border-b-4 border-mjc-yellow">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/10 flex items-center justify-center text-mjc-yellow border border-white/20">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                AP Intermediate Admissions (2026–2027)
              </h3>
              <p className="text-xs text-mjc-yellow">
                Green Valley Junior College • BIEAP Code: 07142
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto rounded-full">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-black text-mjc-blue uppercase">
                Application Submitted Successfully!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your admission inquiry has been registered with the Green Valley Intermediate Admissions Cell. Our academic counselor will call you within 24 hours for certificate verification and batch allotment.
              </p>

              <div className="p-4 bg-slate-100 border border-slate-300 inline-block text-left w-full">
                <span className="text-xs text-slate-500 uppercase font-bold block">
                  Provisional Application Number:
                </span>
                <span className="text-base sm:text-lg font-mono font-bold text-mjc-blue">
                  {appId}
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleReset}
                  className="btn btn-yellow text-xs px-6 py-2.5 font-bold uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-slate-800">
              
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="As per 10th Marks Memo"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-mjc-blue"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Father / Mother Name"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-mjc-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Mobile for SMS / Call"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-mjc-blue"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    10th / SSC GPA or Marks *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 10.0 GPA or 580/600"
                    value={formData.sscGpa}
                    onChange={(e) => setFormData({ ...formData, sscGpa: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-mjc-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                  Desired Intermediate Stream *
                </label>
                <select
                  value={formData.stream}
                  onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-mjc-blue"
                >
                  <option value="M.P.C. (Maths, Physics, Chemistry) — JEE & EAPCET">M.P.C. (Maths, Physics, Chemistry) — JEE &amp; EAPCET</option>
                  <option value="Bi.P.C. (Biology, Physics, Chemistry) — NEET & Medical">Bi.P.C. (Biology, Physics, Chemistry) — NEET &amp; Medical</option>
                  <option value="M.E.C. (Maths, Economics, Commerce) — CA Foundation">M.E.C. (Maths, Economics, Commerce) — CA Foundation</option>
                  <option value="C.E.C. (Civics, Economics, Commerce) — Law & Civils">C.E.C. (Civics, Economics, Commerce) — Law &amp; Civils</option>
                  <option value="H.E.C. (History, Economics, Civics) — Humanities">H.E.C. (History, Economics, Civics) — Humanities</option>
                  <option value="Vocational (Computer Science / Paramedical)">Vocational (Computer Science / Paramedical)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Accommodation Type
                  </label>
                  <select
                    value={formData.studentType}
                    onChange={(e) => setFormData({ ...formData, studentType: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-mjc-blue"
                  >
                    <option value="Day Scholar (With Bus Facility)">Day Scholar (With Bus Facility)</option>
                    <option value="Campus Residential Hostel (AC)">Campus Residential Hostel (AC)</option>
                    <option value="Campus Residential Hostel (Non-AC)">Campus Residential Hostel (Non-AC)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    District / Region (AP)
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 focus:outline-none focus:border-mjc-blue"
                  >
                    <option value="Krishna / Vijayawada">NTR / Krishna (Vijayawada)</option>
                    <option value="Guntur">Guntur / Tenali</option>
                    <option value="East Godavari">East Godavari / Rajahmundry</option>
                    <option value="West Godavari">West Godavari / Eluru</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Other AP District">Other AP District</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="btn btn-yellow w-full py-3 text-xs font-black uppercase tracking-wider shadow"
                >
                  Submit Application to Admissions Desk
                </button>
                <p className="text-[10px] text-slate-500 text-center mt-2">
                  * Valid for both BIEAP General &amp; Integrated Coaching streams.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
