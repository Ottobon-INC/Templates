import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Download, Phone, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { programmesData } from '../data/collegeData';
import type { Programme } from '../data/collegeData';

interface ModalsProps {
  applyModalOpen: boolean;
  onCloseApplyModal: () => void;
  brochureModalOpen: boolean;
  onCloseBrochureModal: () => void;
  consultationModalOpen: boolean;
  onCloseConsultationModal: () => void;
  selectedProgramme: Programme | null;
  onCloseProgrammeModal: () => void;
}

export const InteractiveModals: React.FC<ModalsProps> = ({
  applyModalOpen,
  onCloseApplyModal,
  brochureModalOpen,
  onCloseBrochureModal,
  consultationModalOpen,
  onCloseConsultationModal,
  selectedProgramme,
  onCloseProgrammeModal
}) => {
  // Application Form State
  const [appStep, setAppStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    programmeId: programmesData[0].id,
    marks12th: '85%',
    stream: 'Science (PCM)'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Brochure Download State
  const [brochureEmail, setBrochureEmail] = useState('');
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);

  // Consultation State
  const [consultPhone, setConsultPhone] = useState('');
  const [consultName, setConsultName] = useState('');
  const [consultBooked, setConsultBooked] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const resetApplyForm = () => {
    setIsSubmitted(false);
    setAppStep(1);
    onCloseApplyModal();
  };

  const handleBrochureDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setBrochureDownloaded(true);
    setTimeout(() => {
      // Simulate download trigger
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', 'Northstar_Prospectus_2026.pdf');
    }, 500);
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultBooked(true);
  };

  return (
    <>
      {/* 1. APPLICATION MODAL */}
      {applyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#FFFDF8] rounded-3xl max-w-2xl w-full border-2 border-[#C85C45]/40 shadow-2xl p-6 sm:p-10 relative space-y-6">
            <button
              onClick={resetApplyForm}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-[#3B2038] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleApplySubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#C85C45] font-bold uppercase tracking-widest">
                    ONLINE ADMISSION PORTAL &bull; 2026-27
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#3B2038] font-normal mt-1">
                    APPLICATION FORM
                  </h3>
                  <p className="text-xs font-sans text-[#202020]/75">
                    Visakhapatnam Campus &bull; Northstar Institute of Higher Education
                  </p>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2 border-y border-[#3B2038]/10 py-3 text-xs font-mono text-[#3B2038]">
                  <span className={`px-3 py-1 rounded-full ${appStep === 1 ? 'bg-[#3B2038] text-[#E9A23B]' : 'bg-[#F3E8D0]'}`}>
                    01 Candidate Info
                  </span>
                  <span className="text-xs">&rarr;</span>
                  <span className={`px-3 py-1 rounded-full ${appStep === 2 ? 'bg-[#3B2038] text-[#E9A23B]' : 'bg-[#F3E8D0]'}`}>
                    02 Academic Details
                  </span>
                </div>

                {appStep === 1 ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-sans font-bold text-[#3B2038] uppercase mb-1">
                        Full Candidate Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Aditya Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2038]/20 focus:border-[#C85C45] outline-none text-sm font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-sans font-bold text-[#3B2038] uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="aditya@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2038]/20 focus:border-[#C85C45] outline-none text-sm font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-sans font-bold text-[#3B2038] uppercase mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2038]/20 focus:border-[#C85C45] outline-none text-sm font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-sans font-bold text-[#3B2038] uppercase mb-1">
                        Current City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Visakhapatnam, Hyderabad, Vijayawada"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2038]/20 focus:border-[#C85C45] outline-none text-sm font-sans"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() => setAppStep(2)}
                      className="w-full py-3.5 bg-[#3B2038] text-white hover:bg-[#C85C45] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Next Step: Select Programme</span>
                      <ArrowRight className="w-4 h-4 text-[#E9A23B]" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-sans font-bold text-[#3B2038] uppercase mb-1">
                        Preferred Degree Programme *
                      </label>
                      <select
                        value={formData.programmeId}
                        onChange={(e) => setFormData({ ...formData, programmeId: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2038]/20 focus:border-[#C85C45] outline-none text-sm font-sans"
                      >
                        {programmesData.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.number} &bull; {p.title} ({p.category})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-sans font-bold text-[#3B2038] uppercase mb-1">
                          10+2 Stream
                        </label>
                        <select
                          value={formData.stream}
                          onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2038]/20 focus:border-[#C85C45] outline-none text-sm font-sans"
                        >
                          <option value="Science (PCM)">Science (PCM / Math)</option>
                          <option value="Science (PCB)">Science (PCB / Bio)</option>
                          <option value="Commerce">Commerce with Math / Computer</option>
                          <option value="Arts / Humanities">Arts / Humanities</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-sans font-bold text-[#3B2038] uppercase mb-1">
                          10+2 Aggregate Score (%)
                        </label>
                        <input
                          type="text"
                          value={formData.marks12th}
                          onChange={(e) => setFormData({ ...formData, marks12th: e.target.value })}
                          placeholder="e.g. 88%"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2038]/20 focus:border-[#C85C45] outline-none text-sm font-sans"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setAppStep(1)}
                        className="px-6 py-3.5 bg-[#F3E8D0] text-[#3B2038] rounded-xl text-xs font-bold uppercase"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 py-3.5 bg-[#C85C45] hover:bg-[#E9A23B] hover:text-[#202020] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
                      >
                        <span>Submit Application</span>
                        <Sparkles className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="text-center py-8 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#C85C45] text-white flex items-center justify-center mx-auto shadow-xl">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#C85C45] font-bold uppercase tracking-widest">
                    APPLICATION SUBMITTED SUCCESSFULLY
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#3B2038]">
                    WELCOME TO NORTHSTAR
                  </h3>
                  <p className="text-sm font-sans text-[#202020]/80 max-w-md mx-auto">
                    Application ID: <strong className="font-mono text-[#C85C45]">NS-2026-{Math.floor(100000 + Math.random() * 900000)}</strong>
                    <br />
                    Our admissions committee at Visakhapatnam will contact you within 24 hours via phone/email.
                  </p>
                </div>
                <button
                  onClick={resetApplyForm}
                  className="px-8 py-3 bg-[#3B2038] text-white rounded-full text-xs font-bold font-sans uppercase tracking-wider hover:bg-[#C85C45] transition-colors"
                >
                  Done & Return to Site
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. PROGRAMME DETAIL MODAL */}
      {selectedProgramme && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#FFFDF8] rounded-3xl max-w-3xl w-full border-2 border-[#C85C45]/40 shadow-2xl p-6 sm:p-10 relative space-y-6">
            <button
              onClick={onCloseProgrammeModal}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-black/5 text-[#3B2038] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#3B2038] text-[#E9A23B] font-mono text-xs font-bold rounded-full">
                  DEGREE {selectedProgramme.number}
                </span>
                <span className="text-xs font-mono text-[#C85C45] font-bold uppercase">
                  {selectedProgramme.category}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-5xl font-normal text-[#3B2038]">
                {selectedProgramme.title}
              </h3>

              <div className="relative h-64 rounded-2xl overflow-hidden border border-[#3B2038]/15">
                <img
                  src={selectedProgramme.image}
                  alt={selectedProgramme.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white font-sans text-xs">
                  Duration: {selectedProgramme.duration} &bull; Visakhapatnam Campus
                </div>
              </div>

              <p className="font-sans text-sm text-[#202020]/80 leading-relaxed">
                {selectedProgramme.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F3E8D0] p-5 rounded-2xl border border-[#C85C45]/20 text-xs font-sans">
                <div>
                  <span className="font-bold text-[#3B2038] uppercase font-mono block">ELIGIBILITY</span>
                  <span className="text-[#202020]/90">{selectedProgramme.eligibility}</span>
                </div>
                <div>
                  <span className="font-bold text-[#C85C45] uppercase font-mono block">CAREER SCOPE</span>
                  <span className="text-[#3B2038] font-bold">{selectedProgramme.careerPath}</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[#3B2038] font-bold uppercase block">
                  SYLLABUS & SYNOPSIS HIGHLIGHTS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProgramme.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-sans text-[#202020]/80">
                      <BookOpen className="w-3.5 h-3.5 text-[#C85C45]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={() => {
                    onCloseProgrammeModal();
                    // trigger apply modal open via callback
                  }}
                  className="w-full py-3.5 bg-[#C85C45] hover:bg-[#3B2038] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Apply for {selectedProgramme.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#E9A23B]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. BROCHURE DOWNLOAD MODAL */}
      {brochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#FFFDF8] rounded-3xl max-w-md w-full border-2 border-[#C85C45]/40 shadow-2xl p-6 sm:p-8 relative space-y-6 text-center">
            <button
              onClick={onCloseBrochureModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-[#3B2038]"
            >
              <X className="w-5 h-5" />
            </button>

            {!brochureDownloaded ? (
              <form onSubmit={handleBrochureDownload} className="space-y-4 text-left">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3E8D0] text-[#C85C45] flex items-center justify-center mx-auto">
                    <Download className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#3B2038]">CAMPUS PROSPECTUS</h3>
                  <p className="text-xs font-sans text-[#202020]/75">
                    Download Northstar's complete 2026-27 editorial brochure with fee structures & syllabus.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold text-[#3B2038] uppercase mb-1">
                    Enter Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={brochureEmail}
                    onChange={(e) => setBrochureEmail(e.target.value)}
                    placeholder="yourname@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2038]/20 focus:border-[#C85C45] outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C85C45] hover:bg-[#3B2038] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#E9A23B]" />
                  <span>Download PDF Prospectus</span>
                </button>
              </form>
            ) : (
              <div className="space-y-4 py-4">
                <CheckCircle2 className="w-12 h-12 text-[#C85C45] mx-auto" />
                <h4 className="font-serif text-2xl text-[#3B2038]">PROSPECTUS GENERATED</h4>
                <p className="text-xs text-[#202020]/80">
                  A digital copy of <strong>Northstar_Prospectus_2026.pdf</strong> has been initiated and sent to {brochureEmail}.
                </p>
                <button
                  onClick={onCloseBrochureModal}
                  className="px-6 py-2 bg-[#3B2038] text-white text-xs rounded-full font-bold uppercase"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 4. ADMISSIONS CONSULTATION MODAL */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-[#FFFDF8] rounded-3xl max-w-md w-full border-2 border-[#C85C45]/40 shadow-2xl p-6 sm:p-8 relative space-y-6">
            <button
              onClick={onCloseConsultationModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 text-[#3B2038]"
            >
              <X className="w-5 h-5" />
            </button>

            {!consultBooked ? (
              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#F3E8D0] text-[#3B2038] flex items-center justify-center mx-auto">
                    <Phone className="w-6 h-6 text-[#C85C45]" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#3B2038]">TALK TO ADMISSIONS</h3>
                  <p className="text-xs font-sans text-[#202020]/75">
                    Speak directly with an academic counselor at our Visakhapatnam Beach Road campus.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold text-[#3B2038] uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={consultName}
                    onChange={(e) => setConsultName(e.target.value)}
                    placeholder="e.g. Sravya Rao"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2038]/20 focus:border-[#C85C45] outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans font-bold text-[#3B2038] uppercase mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={consultPhone}
                    onChange={(e) => setConsultPhone(e.target.value)}
                    placeholder="+91 98480 12345"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#3B2038]/20 focus:border-[#C85C45] outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#3B2038] hover:bg-[#C85C45] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Request Instant Callback</span>
                  <Phone className="w-4 h-4 text-[#E9A23B]" />
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <CheckCircle2 className="w-12 h-12 text-[#C85C45] mx-auto" />
                <h4 className="font-serif text-2xl text-[#3B2038]">CALLBACK SCHEDULED</h4>
                <p className="text-xs text-[#202020]/80">
                  Thank you, {consultName}. Counselor Hotline (+91 891 285 4000) will reach you shortly at {consultPhone}.
                </p>
                <button
                  onClick={onCloseConsultationModal}
                  className="px-6 py-2 bg-[#3B2038] text-white text-xs rounded-full font-bold uppercase"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
