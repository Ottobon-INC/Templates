import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { clinicalServices, hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: "Scope of Services | Complete Clinical Ophthalmology Specialties",
  description: `Explore the full accredited scope of ophthalmic surgical and clinical services offered at ${hospitalInfo.name}.`
};

export default function ScopeOfServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Scope of Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Scope of Services
          </h1>
          <p className="mt-3 text-cyan-100 max-w-2xl text-base sm:text-lg">
            Comprehensive clinical, surgical, and diagnostic ophthalmic services delivered in compliance with quality healthcare accreditation standards.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900">
              Documented Clinical Scope
            </h2>
            <p className="text-sm text-slate-600">
              {hospitalInfo.name} maintains documented clinical scope boundaries ensuring patient safety, infection control, and rapid emergency intervention.
            </p>
          </div>
          <div className="flex items-center space-x-3 flex-shrink-0">
            <Link
              href="/services-out-of-scope"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors"
            >
              View Services Out of Scope →
            </Link>
          </div>
        </div>

        {/* 11 Clinical Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicalServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0e3b64]/90 backdrop-blur-sm text-cyan-200 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {service.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1380be] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5 mb-3">
                    {service.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/${service.slug}`}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-slate-50 hover:bg-[#0e3b64] text-slate-700 hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all border border-slate-200"
                >
                  <span>Detailed Clinical Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
