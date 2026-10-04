import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Award, Briefcase, BookOpen, ShieldCheck, Phone, Calendar } from "lucide-react";
import { gopalaRajuData, hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: `${gopalaRajuData.name} | ${gopalaRajuData.title}`,
  description: `Profile and surgical milestones of ${gopalaRajuData.name}, ${gopalaRajuData.degrees} at ${hospitalInfo.name}.`
};

export default function MedicalDirectorPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/our-team" className="hover:underline">Our Team</Link>
            <span>/</span>
            <span>{gopalaRajuData.name}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {gopalaRajuData.name}
          </h1>
          <p className="mt-3 text-cyan-100 max-w-2xl text-base sm:text-lg">
            {gopalaRajuData.title} in Cornea, Anterior Segment & Refractive Surgery
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: Portrait & Quick Info Card */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl p-6 text-center">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
                <Image
                  src={gopalaRajuData.image}
                  alt={gopalaRajuData.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <h2 className="text-2xl font-black text-slate-900">
                {gopalaRajuData.name}
              </h2>
              <div className="text-xs font-bold text-[#1380be] mt-1 mb-2">
                {gopalaRajuData.title}
              </div>
              <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 mb-6 font-medium leading-relaxed">
                {gopalaRajuData.degrees}
              </div>

              <div className="space-y-3">
                <Link
                  href="/contact-us"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#cd2653] hover:bg-[#b01f46] text-white py-3 rounded-xl text-sm font-bold shadow-md transition-all hover:scale-105"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Link>

                <a
                  href={`tel:${hospitalInfo.phoneRaw}`}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl text-sm font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#1380be]" />
                  <span>{hospitalInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Accreditation Badge */}
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6">
              <div className="flex items-center space-x-3 text-[#0e3b64] font-bold mb-2">
                <ShieldCheck className="w-6 h-6 text-[#1380be]" />
                <span>Certified Clinical Specialist</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Qualified Senior Specialist & Fellowship Mentor for Healthcare Quality & Patient Safety, actively promoting high clinical standards.
              </p>
            </div>
          </div>

          {/* Right Column: Full Curriculum & Biography */}
          <div className="lg:col-span-2 space-y-10">
            {/* Education */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0e3b64] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Education & Specialization</h3>
              </div>
              <ul className="space-y-4">
                {gopalaRajuData.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full bg-[#1380be] mt-2 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">{edu.title} ({edu.year})</div>
                      <div className="text-xs text-slate-600 mt-0.5">{edu.institute}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Career */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#1380be] flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Professional Career</h3>
              </div>
              <ul className="space-y-3.5">
                {gopalaRajuData.career.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-[#0e3b64] mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Academics & Research */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Academics & Research</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                {gopalaRajuData.academics.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Awards & Honors</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gopalaRajuData.awards.map((award, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="text-xs font-black text-[#1380be]">{award.year}</div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">{award.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{award.org}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership Roles */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Organizational & Society Leadership</h3>
              </div>
              <ul className="space-y-3 text-sm text-slate-700">
                {gopalaRajuData.leadership.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
