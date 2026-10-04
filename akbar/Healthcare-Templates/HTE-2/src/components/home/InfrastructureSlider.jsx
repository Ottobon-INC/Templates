import Image from "next/image";
import Link from "next/link";
import { Building2, ShieldCheck, Microscope, HeartHandshake } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

export default function InfrastructureSlider() {
  const facilities = [
    {
      title: "Modular Operation Theatres",
      desc: "HEPA-filtered laminar airflow surgical suites equipped with Leica ophthalmic microscopes and TrueVision 3D systems.",
      image: "/images/2025/10/newslider-2.jpg"
    },
    {
      title: "Advanced Diagnostic Suites",
      desc: "Comprehensive testing wings housing Optical Coherence Tomography (OCT), FFA, Humphrey Perimetry, and Topography.",
      image: "/images/2025/10/blog-1.jpg"
    },
    {
      title: "Patient Outpatient Lounge & Optical Center",
      desc: "Fully computerized electronic medical record reception, in-house pharmacy, and comprehensive eyewear dispensary.",
      image: "/images/2025/10/vizag.jpg"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-slate-900/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-cyan-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Infrastructure & Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Built for World-Class Surgical Precision & Safety
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Benchmark clinical infection control, state-of-the-art microsurgical theaters, and patient amenities designed for safety and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700 shadow-xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{fac.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Community Trust Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-900/60 to-cyan-900/60 rounded-2xl p-6 sm:p-8 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">{hospitalInfo.trustName}</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Daily free community clinics, mobile eye screening vans, and over 10,000 children screened annually.
              </p>
            </div>
          </div>
          <Link
            href="/foundation-trust"
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs whitespace-nowrap transition-all shadow-md"
          >
            Explore Community Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
