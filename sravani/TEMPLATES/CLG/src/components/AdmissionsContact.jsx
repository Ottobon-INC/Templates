import React, { useState } from 'react';
import { 
  FileCheck2, 
  UploadCloud, 
  UserCheck, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { collegeInfo, admissionSteps } from '../data/collegeData';

const stepIcons = [UploadCloud, FileCheck2, UserCheck, GraduationCap];

export default function AdmissionsContact({ onOpenApplyModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    programInterest: 'Undergraduate Programs'
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus({ submitted: false, loading: false, error: 'Please fill in all required fields.' });
      return;
    }

    setFormStatus({ submitted: false, loading: true, error: null });

    // Simulate clean network dispatch
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false, error: null });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        programInterest: 'Undergraduate Programs'
      });
    }, 800);
  };

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold tracking-wide uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Admissions & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Your Journey <span className="text-navy-700">Starts Here.</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-navy-800 via-gold-500 to-sky-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Our admissions process is designed to recognize your individual strengths, passions, and leadership potential. Step into an inspiring academic chapter.
          </p>
        </div>

        {/* 4-Step Admission Process Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-navy-950">Simple 4-Step Admission Process</h3>
            <p className="text-sm text-slate-500 mt-1">From application to matriculation in four streamlined milestones</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-8 z-0" />

            {admissionSteps.map((step, idx) => {
              const IconComp = stepIcons[idx];
              return (
                <div
                  key={step.step}
                  className="relative z-10 bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-gold-300 shadow-soft-sm hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon & Step Number */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-navy-900 group-hover:bg-gold-500 text-gold-400 group-hover:text-navy-950 flex items-center justify-center shadow-md transition-colors duration-300">
                        <IconComp className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-extrabold text-slate-300 group-hover:text-gold-500/40 transition-colors">
                        {step.step}
                      </span>
                    </div>

                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 px-2.5 py-0.5 rounded-md mb-2">
                      {step.badge}
                    </span>
                    <h4 className="text-xl font-bold text-navy-950 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-navy-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Simple online milestone</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Admission CTA Button */}
          <div className="mt-10 text-center">
            <button
              onClick={onOpenApplyModal}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-400 shadow-lg hover:shadow-glow-gold hover:-translate-y-0.5 transition-all"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-slate-500 mt-2">
              Fall 2026 scholarship priority deadline: <span className="font-semibold text-navy-900">November 15, 2026</span>
            </p>
          </div>
        </div>

        {/* Contact Form and Information Grid */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 shadow-soft-lg overflow-hidden grid lg:grid-cols-12">
          
          {/* Left Column: College Contact Info */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white p-8 sm:p-12 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-gold-400">
                  Connect With Admissions
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  We're Here to Help.
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Have questions about degree options, credit transfers, campus housing, or financial aid? Our dedicated admissions officers are ready to assist.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-gold-400 flex items-center justify-center shrink-0 border border-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Campus Address</h5>
                    <p className="text-sm text-white font-medium mt-0.5 leading-snug">{collegeInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-gold-400 flex items-center justify-center shrink-0 border border-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Telephone Inquiries</h5>
                    <p className="text-sm text-white font-medium mt-0.5">{collegeInfo.phone}</p>
                    <p className="text-xs text-slate-400">Toll-free admissions desk</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-gold-400 flex items-center justify-center shrink-0 border border-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email Admissions</h5>
                    <p className="text-sm text-white font-medium mt-0.5">{collegeInfo.admissionsEmail}</p>
                    <p className="text-xs text-slate-400">{collegeInfo.generalEmail}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-gold-400 flex items-center justify-center shrink-0 border border-white/10">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Admissions Office Hours</h5>
                    <p className="text-sm text-white font-medium mt-0.5">{collegeInfo.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="pt-8 mt-8 border-t border-white/15">
              <span className="text-xs text-slate-400 block mb-3 font-semibold uppercase tracking-wider">
                Follow Green Valley
              </span>
              <div className="flex items-center space-x-3">
                {[
                  { name: 'LinkedIn', label: 'in' },
                  { name: 'Twitter / X', label: '𝕏' },
                  { name: 'Facebook', label: 'f' },
                  { name: 'Instagram', label: 'ig' },
                  { name: 'YouTube', label: 'yt' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#admissions"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-gold-500 hover:text-navy-950 text-white font-bold text-xs flex items-center justify-center transition-all duration-200 border border-white/10"
                    title={social.name}
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-wider font-semibold text-sky-700">
                Direct Inquiry Form
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-950 mt-1 mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm text-slate-500 mb-8">
                Fill out the form below and an admissions counselor will reach out to you within 24 business hours.
              </p>

              {formStatus.submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-navy-950">Message Sent Successfully!</h4>
                  <p className="text-sm text-slate-600">
                    Thank you for reaching out to Green Valley College. An admissions counselor has received your inquiry and will contact you via email or phone shortly.
                  </p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, loading: false, error: null })}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-navy-900 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {formStatus.error && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formStatus.error}</span>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Eleanor Vance"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent text-sm transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. eleanor@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent text-sm transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent text-sm transition-all bg-slate-50 focus:bg-white"
                      />
                    </div>

                    {/* Area of Interest */}
                    <div>
                      <label htmlFor="contact-program" className="block text-xs font-semibold text-navy-950 mb-1.5">
                        Program of Interest
                      </label>
                      <select
                        id="contact-program"
                        name="programInterest"
                        value={formData.programInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent text-sm transition-all bg-slate-50 focus:bg-white"
                      >
                        <option value="Undergraduate Programs">Undergraduate Programs</option>
                        <option value="Postgraduate Programs">Postgraduate Programs</option>
                        <option value="School of Science">School of Science</option>
                        <option value="School of Commerce">School of Commerce</option>
                        <option value="School of Management">School of Management</option>
                        <option value="Computer Science & IT">Computer Science & IT</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-navy-950 mb-1.5">
                      Your Message or Questions <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your academic background, questions regarding admissions or scholarships..."
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 focus:border-transparent text-sm transition-all bg-slate-50 focus:bg-white"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus.loading}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-navy-950 hover:bg-navy-900 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-75"
                    >
                      {formStatus.loading ? (
                        <span>Submitting message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
                          <span>Submit Contact Request</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      We value your privacy. Your information is never shared with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
