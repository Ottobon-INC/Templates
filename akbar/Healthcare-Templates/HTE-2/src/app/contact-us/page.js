"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { hospitalInfo, clinicalServices } from "@/data/hospitalData";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    department: "Cataract",
    date: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate immediate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Contact & Appointments
          </h1>
          <p className="mt-3 text-cyan-100 max-w-2xl text-base sm:text-lg">
            Schedule a consultation, request medical records, or reach out to our emergency ophthalmic team.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Hospital Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
                Hospital Information
              </h2>

              {/* Phone Contacts */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0e3b64] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    For Appointments & Reception
                  </div>
                  <a
                    href={`tel:${hospitalInfo.phoneRaw}`}
                    className="text-base font-bold text-slate-900 hover:text-[#1380be] transition-colors block"
                  >
                    {hospitalInfo.phoneDisplay}
                  </a>
                  <a
                    href="tel:+18005550122"
                    className="text-xs text-slate-600 hover:text-[#1380be] block mt-0.5"
                  >
                    {hospitalInfo.mobileSecondary}
                  </a>
                </div>
              </div>

              {/* Emergency Alert */}
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start space-x-3 text-rose-900">
                <AlertCircle className="w-5 h-5 text-[#cd2653] flex-shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <strong>24x7 Ophthalmic Emergency:</strong> For acute ocular trauma, chemical splash, or sudden painless loss of vision, directly call <strong>{hospitalInfo.phoneDisplay}</strong> or visit our emergency casualty unit.
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#1380be] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Email Inquiries
                  </div>
                  <a
                    href={`mailto:${hospitalInfo.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-[#1380be]"
                  >
                    {hospitalInfo.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Location & Landmark
                  </div>
                  <div className="text-sm font-semibold text-slate-900 leading-snug">
                    {hospitalInfo.address.full}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {hospitalInfo.address.landmark}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 border-t border-slate-100 pt-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <div className="font-bold text-slate-900 text-sm">Consultation Hours</div>
                  <div>Mon – Sat: <strong>{hospitalInfo.timings.opdMonSat}</strong></div>
                  <div>Sunday: <strong>{hospitalInfo.timings.opdSunday}</strong></div>
                  <div>{hospitalInfo.trustName} (Free Community): <strong>{hospitalInfo.timings.trustBPL}</strong></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-xl">
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1380be] mb-1">
                  Online Scheduling
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Book an Appointment or Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and our hospital scheduling desk will confirm your consultation slot promptly.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900">
                    Appointment Request Received!
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || "Patient"}</strong>. Your request for the <strong>{formData.department}</strong> department has been recorded. Our reception will contact you on <strong>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        department: "Cataract",
                        date: "",
                        message: ""
                      });
                    }}
                    className="inline-flex items-center space-x-2 bg-[#0e3b64] text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#1380be] transition-colors"
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1380be] focus:border-transparent bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (800) 555-0199"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1380be] focus:border-transparent bg-slate-50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1380be] focus:border-transparent bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                        Preferred Department
                      </label>
                      <select
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1380be] focus:border-transparent bg-slate-50"
                      >
                        {clinicalServices.map((s) => (
                          <option key={s.slug} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1380be] focus:border-transparent bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Symptoms / Inquiries
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please describe your eye concern, symptoms, or any previous treatment details..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1380be] focus:border-transparent bg-slate-50 resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#cd2653] hover:bg-[#b01f46] text-white py-4 rounded-xl text-base font-bold shadow-lg shadow-rose-900/20 transition-all hover:scale-[1.01] disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Appointment Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Embedded Google Map Section */}
        <div className="mt-16 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200">
          <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-[#1380be]" />
              <span className="font-bold text-slate-900 text-sm sm:text-base">
                Hospital Location on Google Maps: {hospitalInfo.address.shortDisplay}
              </span>
            </div>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(hospitalInfo.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#1380be] hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="w-full h-80 sm:h-96 relative">
            <iframe
              title={`${hospitalInfo.name} Map`}
              src="https://maps.google.com/maps?q=Medical+Center+Boulevard+Hospital&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
