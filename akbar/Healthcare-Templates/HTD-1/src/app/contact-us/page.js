"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Upload, 
  CheckCircle, 
  Sparkles, 
  AlertCircle,
  FileImage,
  X
} from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { clinicInfo } from "@/data/siteData";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    service: "General Consultation",
    message: ""
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const newImages = filesArray.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
        name: file.name
      }));
      setSelectedImages((prev) => [...prev, ...newImages]);
    }
  };

  const removeImage = (index) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="bg-slate-50/50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#019FE6] text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Schedule A Visit</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Book Your <span className="gradient-text">Appointment</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Ready to experience gentle, personalized dental care? Fill out the form below or contact us directly. {clinicInfo.leadDoctorShort} and our team will get back to you promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Appointment Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Appointment Request Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our clinic coordinator will contact you at{" "}
                  <strong className="text-slate-900">{formData.phone}</strong> to confirm your slot for{" "}
                  <strong className="text-[#019FE6]">{formData.date || "your requested date"}</strong>.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/${clinicInfo.phoneRaw}?text=${encodeURIComponent(
                      `Hello ${clinicInfo.shortName}, I just submitted an appointment request for ${formData.name} (${formData.phone}) on ${formData.date}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs"
                  >
                    Confirm via WhatsApp Instant
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        date: "",
                        service: "General Consultation",
                        message: ""
                      });
                      setSelectedImages([]);
                    }}
                    className="btn-secondary text-xs"
                  >
                    Book Another Appointment
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">Patient Details</h2>
                  <p className="text-xs text-slate-500">All fields marked with * are required.</p>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Enter Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#019FE6] focus:border-transparent transition-all"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Enter Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#019FE6] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Enter Your Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98200 12345"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#019FE6] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Date & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Select Appointment Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#019FE6] focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                      Interested Treatment
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#019FE6] focus:border-transparent transition-all bg-white"
                    >
                      <option value="General Consultation">Routine Dental Check-up & Consultation</option>
                      <option value="Emergency Care">Emergency / Severe Pain Relief</option>
                      <option value="Teeth Whitening">Laser Teeth Whitening</option>
                      <option value="Restoration">Dental Fillings / Crowns</option>
                      <option value="Orthodontics">Braces / Aligners / Realignment</option>
                      <option value="Smile Makeover">Complete Aesthetic Smile Makeover</option>
                    </select>
                  </div>
                </div>

                {/* Upload Teeth Images (Unique feature from Wix site) */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Upload Your Teeth Images (Optional)
                    </label>
                    <span className="text-[11px] text-slate-400">For preliminary assessment</span>
                  </div>

                  <div className="border-2 border-dashed border-slate-200 hover:border-[#019FE6] rounded-2xl p-6 text-center transition-colors cursor-pointer bg-slate-50/50 relative">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs font-semibold text-slate-700">
                      Upload Here &ndash; Drag & Drop or Click to Select
                    </p>
                    <p className="text-[11px] text-slate-400 mt-1">PNG, JPG, JPEG up to 10MB</p>
                  </div>

                  {/* Uploaded Thumbnails */}
                  {selectedImages.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-3">
                      {selectedImages.map((img, idx) => (
                        <div key={idx} className="relative w-16 h-16 rounded-xl overflow-hidden border border-slate-200 group">
                          <Image
                            src={img.preview}
                            alt="Teeth Preview"
                            fill
                            className="object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-0.5 shadow-md hover:bg-red-700 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Additional Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    Any Additional Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about any specific symptoms, sensitivity, or dental goals..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#019FE6] focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-4 text-base tracking-wide"
                >
                  {loading ? (
                    <span>Processing Appointment Request...</span>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>Book Appointment</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Quick Contact & Clinic Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">For Quick Contact</h3>
                <p className="text-xs text-slate-500">Reach out directly via phone or WhatsApp</p>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-sky-50/70 border border-sky-100 hover:bg-sky-100/70 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#019FE6] text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Direct Phone</div>
                    <div className="font-bold text-slate-900 group-hover:text-[#019FE6]">{clinicInfo.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${clinicInfo.email}`}
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#2F5DFF] text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <div className="text-xs text-slate-500">Clinic Email</div>
                    <div className="font-semibold text-slate-900 group-hover:text-[#2F5DFF] text-xs truncate">
                      {clinicInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={clinicInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-pink-50/60 border border-pink-100 hover:bg-pink-100/60 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-pink-500 text-white flex items-center justify-center flex-shrink-0">
                    <InstagramIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Instagram Handle</div>
                    <div className="font-bold text-slate-900 group-hover:text-pink-600">{clinicInfo.instagram}</div>
                  </div>
                </a>
              </div>

              {/* Clinic Timings */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinic Hours</h4>
                <div className="flex items-start gap-2.5 text-slate-700 text-sm">
                  <Clock className="w-4 h-4 text-[#019FE6] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">Monday to Saturday</p>
                    <p className="text-xs text-slate-600">9:00 AM to 6:30 PM</p>
                    <p className="text-xs text-amber-600 mt-1 font-medium">Sunday: By Special Appointment Only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Location & Directions */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Clinic Location</h4>
                  <p className="text-xs text-slate-500">{clinicInfo.address}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-[#019FE6] text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Main Studio</span>
                </span>
              </div>

              {/* Map Embed Frame */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200">
                <iframe
                  title={`${clinicInfo.name} Location`}
                  src="https://maps.google.com/maps?q=Beverly+Hills+Dentist&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
      </div>
    </div>
  );
}
