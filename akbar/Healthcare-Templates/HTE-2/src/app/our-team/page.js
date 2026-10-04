import Image from "next/image";
import Link from "next/link";
import { UserCheck, Award, GraduationCap, Calendar, ArrowRight } from "lucide-react";
import { doctors, hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: "Our Team | Expert Eye Specialists & Surgeons",
  description: `Meet the team of ophthalmologists, cornea specialists, vitreoretinal surgeons, and glaucoma experts at ${hospitalInfo.name}.`
};

export default function OurTeamPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Our Team</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Medical Specialists
          </h1>
          <p className="mt-3 text-cyan-100 max-w-2xl text-base sm:text-lg">
            We have well-trained, qualified, and compassionate eye specialists with advanced fellowship training across all ophthalmic subspecialties.
          </p>
        </div>
      </div>

      {/* Main Doctors Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#1380be] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Dedicated Clinical Faculty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Senior Consultants & Surgeons
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Our specialists combine academic research, surgical experience, and empathetic care to deliver the highest standard of ophthalmic medicine.
          </p>
        </div>

        {/* 8 Doctor Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Photo */}
                <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#0e3b64]/90 backdrop-blur-sm text-cyan-300 text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {doc.specialty.split(",")[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-[#1380be] transition-colors">
                    {doc.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#1380be] mt-1 mb-2">
                    {doc.role}
                  </div>

                  <div className="flex items-start space-x-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4">
                    <GraduationCap className="w-4 h-4 text-[#0e3b64] flex-shrink-0 mt-0.5" />
                    <span className="leading-snug font-medium">{doc.degrees}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {doc.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 space-y-2">
                {doc.profileUrl ? (
                  <Link
                    href={doc.profileUrl}
                    className="w-full inline-flex items-center justify-center space-x-2 bg-[#0e3b64] hover:bg-[#1380be] text-white py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm"
                  >
                    <span>View Full Biography & Achievements</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ) : (
                  <Link
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-slate-50 hover:bg-[#0e3b64] text-slate-700 hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all border border-slate-200"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consultation</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Schedule an OPD Consultation
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Call our hospital reception at <strong className="text-[#0e3b64]">{hospitalInfo.phoneDisplay}</strong> or book an appointment online for any clinical department.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center space-x-2 bg-[#cd2653] hover:bg-[#b01f46] text-white px-8 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-all hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment Online</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
