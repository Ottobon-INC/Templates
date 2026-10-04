import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Award, FileText, Sparkles } from 'lucide-react';
import { collegeData, programmesData } from '../data/universityData';

interface ApplyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgrammeId?: string | null;
}

export const ApplyNowModal: React.FC<ApplyNowModalProps> = ({
  isOpen,
  onClose,
  preselectedProgrammeId
}) => {
  const [step, setStep] = useState(1);
  const [selectedProgId, setSelectedProgId] = useState(
    preselectedProgrammeId || programmesData[0].id
  );
  const [applicantInfo, setApplicantInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    qualification: '10+2 Passed',
    boardMarks: '85%',
    city: 'Visakhapatnam'
  });
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');

  if (!isOpen) return null;

  const currentProg = programmesData.find((p) => p.id === selectedProgId) || programmesData[0];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      const generatedId = `NIHE-2027-${Math.floor(10000 + Math.random() * 90000)}`;
      setAppId(generatedId);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/85 backdrop-blur-lg animate-fadeIn overflow-y-auto">
      <div className="bg-navy border border-electric/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-white my-8">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto border border-gold/50 shadow-gold-glow animate-pulse">
              <Award className="w-12 h-12" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
                Application Received — DEMO
              </span>
              <h3 className="font-heading font-extrabold text-3xl text-white mt-3">
                Provisional Offer Generated
              </h3>
              <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto">
                Application Reference ID: <span className="font-mono text-electric-light font-bold text-lg bg-navy-dark px-3 py-1 rounded border border-electric/30">{appId}</span>
              </p>
            </div>

            <div className="bg-navy-dark/60 rounded-xl p-5 border border-slate-700 text-left text-xs sm:text-sm space-y-2">
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Applicant:</span>
                <span className="font-semibold text-white">{applicantInfo.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Chosen Programme:</span>
                <span className="font-semibold text-gold">{currentProg.name} ({currentProg.degree})</span>
              </div>
              <div className="flex justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Campus:</span>
                <span className="text-slate-200">{collegeData.location.city} Main Campus</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-400">Status:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Eligible for Direct Counselling
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-gold text-navy font-bold rounded-lg hover:bg-gold-hover transition shadow-lg text-sm"
              >
                Done / Back to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Admissions 2027 Application Portal</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-2">
              Apply to {collegeData.shortName}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6">
              Start your journey with Northstar Institute of Higher Education. Fill out this brief demo application.
            </p>

            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
              <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 1 ? 'text-gold' : 'text-slate-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-gold text-navy font-bold' : 'bg-slate-700'}`}>1</span>
                <span>Select Programme</span>
              </div>
              <div className="h-0.5 bg-slate-700 flex-1 mx-4" />
              <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 2 ? 'text-gold' : 'text-slate-500'}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-gold text-navy font-bold' : 'bg-slate-700'}`}>2</span>
                <span>Applicant Details</span>
              </div>
            </div>

            <form onSubmit={handleNextStep}>
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-2">
                      Choose Your Degree Programme ({programmesData.length} Available)
                    </label>
                    <div className="max-h-60 overflow-y-auto pr-1 space-y-2 no-scrollbar">
                      {programmesData.map((prog) => {
                        const isSelected = prog.id === selectedProgId;
                        return (
                          <div
                            key={prog.id}
                            onClick={() => setSelectedProgId(prog.id)}
                            className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-electric/20 border-electric text-white'
                                : 'bg-navy-dark/50 border-slate-700 text-slate-300 hover:border-slate-500'
                            }`}
                          >
                            <div>
                              <div className="font-semibold text-sm flex items-center gap-2">
                                <span>{prog.name}</span>
                                {prog.isPopular && (
                                  <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded font-bold">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-slate-400 mt-0.5">
                                {prog.disciplineName} • {prog.duration} • {prog.annualFeeDemo}
                              </div>
                            </div>
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${isSelected ? 'border-electric bg-electric text-white' : 'border-slate-600'}`}>
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-navy-dark/80 p-4 rounded-xl border border-slate-700 text-xs text-slate-300">
                    <span className="font-semibold text-gold">Selected Track Eligibility Preview:</span>
                    <p className="mt-1 text-slate-400">{currentProg.eligibility}</p>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-gold to-gold-hover text-navy font-bold rounded-lg hover:shadow-gold-glow transition flex items-center gap-2 text-sm"
                    >
                      <span>Proceed to Step 2</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name (As per 10th Marks card) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Verma"
                      value={applicantInfo.fullName}
                      onChange={(e) => setApplicantInfo({ ...applicantInfo, fullName: e.target.value })}
                      className="w-full bg-navy-dark border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-electric"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="vikram@example.com"
                        value={applicantInfo.email}
                        onChange={(e) => setApplicantInfo({ ...applicantInfo, email: e.target.value })}
                        className="w-full bg-navy-dark border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-electric"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={applicantInfo.phone}
                        onChange={(e) => setApplicantInfo({ ...applicantInfo, phone: e.target.value })}
                        className="w-full bg-navy-dark border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-electric"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Qualification Status</label>
                      <select
                        value={applicantInfo.qualification}
                        onChange={(e) => setApplicantInfo({ ...applicantInfo, qualification: e.target.value })}
                        className="w-full bg-navy-dark border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-electric"
                      >
                        <option value="10+2 Passed">10+2 Passed (Completed)</option>
                        <option value="10+2 Appearing">10+2 Appearing (Final Year)</option>
                        <option value="Diploma Holder">Diploma / Equivalent</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">10+2 Board Marks (Approx %)</label>
                      <input
                        type="text"
                        placeholder="e.g. 88%"
                        value={applicantInfo.boardMarks}
                        onChange={(e) => setApplicantInfo({ ...applicantInfo, boardMarks: e.target.value })}
                        className="w-full bg-navy-dark border border-slate-700 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-electric"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition"
                    >
                      ← Back to Selection
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-gold to-gold-hover text-navy font-bold rounded-lg hover:shadow-gold-glow transition flex items-center gap-2 text-sm"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
