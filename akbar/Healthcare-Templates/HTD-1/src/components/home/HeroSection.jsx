import Link from "next/link";
import Image from "next/image";
import { Calendar, Phone, Award, Star, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { clinicInfo } from "@/data/siteData";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-mesh pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Award badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200/60 text-[#019FE6] text-xs font-semibold tracking-wide">
              <Award className="w-4 h-4 text-[#019FE6]" />
              <span>{clinicInfo.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Welcome To <br />
              <span className="gradient-text">{clinicInfo.name}</span> <br />
              Modern Dentistry
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Welcome to {clinicInfo.name} in {clinicInfo.city}, led by{" "}
              <strong className="text-slate-900 font-semibold">{clinicInfo.leadDoctor}</strong>.
              We offer world-class aesthetic and restorative dental care with a gentle, patient-first approach for all your oral health needs.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact-us" className="btn-primary text-base px-6 py-3.5 shadow-lg">
                <Calendar className="w-5 h-5" />
                <span>Book Your Appointment</span>
              </Link>

              <a
                href={`tel:${clinicInfo.phoneRaw}`}
                className="btn-secondary text-base px-6 py-3.5"
              >
                <Phone className="w-4 h-4 text-[#019FE6]" />
                <span>Call {clinicInfo.phone}</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#4B916D] flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">100% Sterile Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#019FE6] flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">Gentle &amp; Painless</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#2F5DFF] flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">Aesthetic Mastery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-300/30 to-indigo-300/30 rounded-3xl blur-2xl -z-10" />

              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/images/hero-clinic.jpg"
                  alt={`${clinicInfo.name} Modern Operatory`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Badge 1: 5.0 Google Rating */}
              <a
                href={clinicInfo.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-float hover:scale-105 transition-transform"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-extrabold text-slate-900 text-lg">{clinicInfo.rating}</span>
                    <span className="text-xs text-amber-500 font-bold">★★★★★</span>
                  </div>
                  <span className="text-xs font-medium text-slate-500">{clinicInfo.ratingCount}</span>
                </div>
              </a>

              {/* Floating Badge 2: 1,000+ Happy Patients */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#019FE6]">
                  <Sparkles className="w-5 h-5 text-[#019FE6]" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-lg tracking-tight">{clinicInfo.patientCount}</div>
                  <span className="text-xs font-medium text-slate-500">{clinicInfo.patientLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
