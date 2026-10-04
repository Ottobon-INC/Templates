import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Calendar, Users, Eye } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Hospital Imagery & Experience Badge */}
          <div className="relative">
            <div className="relative h-[380px] sm:h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/2025/10/blog-1.jpg"
                alt={`${hospitalInfo.name} Facility`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Overlapping Secondary Image */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-60 h-44 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/2025/10/newslider-2.jpg"
                alt="Hospital Operation Theaters"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-6 left-6 bg-[#0e3b64] text-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center space-x-3.5 border border-white/20">
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">30+</div>
              <div className="text-xs font-semibold leading-tight uppercase tracking-wider">
                Years of<br />Excellence<br /><span className="text-slate-300 font-normal">Since {hospitalInfo.established}</span>
              </div>
            </div>
          </div>

          {/* Right: Content & Core Strengths */}
          <div className="space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#1380be] mb-2">
                About {hospitalInfo.name}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                We Have Experts & Experienced Eye Specialists
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Established with a dedication to clinical excellence and cutting-edge microsurgery, <strong>{hospitalInfo.name}</strong> is an accredited tertiary eye care institution led by fellowship-trained senior ophthalmic specialists.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              With over <strong>50,000 successful eye surgeries</strong> performed, our center combines clinical excellence, advanced microsurgical instrumentation, and dedicated charitable care through our {hospitalInfo.trustName}.
            </p>

            {/* Key Checklist Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                "Benchmark Healthcare Quality Standards",
                "Advanced 3D Vitreoretinal Surgery",
                "Laser-Assisted Cataract (Phaco)",
                "Full-fledged Eye Bank Collaboration",
                "Free Daily Community Care Clinics",
                "Accredited Clinical Training Center"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about-us"
                className="bg-[#0e3b64] hover:bg-[#092945] text-white px-7 py-3 rounded-xl text-sm font-bold shadow-md transition-all hover:scale-105"
              >
                Learn More About Us
              </Link>
              <Link
                href="/our-team"
                className="bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              >
                Meet Our Doctors
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {hospitalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0e3b64] mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
