import Link from "next/link";
import Image from "next/image";
import { Eye, Phone, Calendar, ArrowRight, ShieldCheck } from "lucide-react";
import { clinicalServices, hospitalInfo } from "@/data/hospitalData";

export default function ServiceLayout({ currentSlug, service, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-14 sm:py-18 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/scope-of-services" className="hover:underline">Scope of Services</Link>
            <span>/</span>
            <span>{service.title}</span>
          </div>

          <div className="inline-block bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
            Scope of Services
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {service.title}
          </h1>
          {service.subtitle && (
            <p className="mt-2 text-cyan-100 text-base sm:text-lg font-medium">
              {service.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* 2-Column Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Clinical Article (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-md">
            {/* Featured Image if available */}
            {service.image && (
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-8 shadow-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* In-depth Clinical Content */}
            <div className="prose prose-slate max-w-none prose-headings:text-[#0e3b64] prose-h5:text-lg prose-h5:font-bold prose-h5:mt-8 prose-h5:mb-3 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-strong:text-slate-900">
              {children}
            </div>

            {/* Bottom Appointment Callout */}
            <div className="mt-12 pt-8 border-t border-slate-100 bg-blue-50/60 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-100">
              <div>
                <h4 className="text-lg font-bold text-[#0e3b64]">
                  Need Consultation for {service.title}?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Our specialists are available Monday to Saturday for comprehensive evaluation.
                </p>
              </div>
              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <Link
                  href="/contact-us"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 bg-[#cd2653] hover:bg-[#b01f46] text-white px-6 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
                <a
                  href={`tel:${hospitalInfo.phoneRaw}`}
                  className="p-3 bg-[#0e3b64] text-white hover:bg-[#1380be] rounded-xl transition-colors"
                  aria-label="Call Hospital"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Scope of Services Navigation List */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md">
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                <span>Scope of Services</span>
                <span className="text-xs font-normal text-slate-400">11 Specialties</span>
              </h3>
              <ul className="space-y-1 text-xs">
                {clinicalServices.map((item) => {
                  const isActive = item.slug === currentSlug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/${item.slug}`}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${
                          isActive
                            ? "bg-[#0e3b64] text-white font-bold shadow-md"
                            : "text-slate-700 hover:bg-blue-50 hover:text-[#0e3b64]"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <Eye className={`w-3.5 h-3.5 ${isActive ? "text-cyan-300" : "text-[#1380be]"}`} />
                          <span>{item.title}</span>
                        </div>
                        <ArrowRight className={`w-3.5 h-3.5 ${isActive ? "text-cyan-300" : "text-slate-300"}`} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* 24x7 Helpline Card */}
            <div className="bg-gradient-to-br from-[#0e3b64] to-[#1380be] rounded-3xl p-6 text-white shadow-xl">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-cyan-300" />
              </div>
              <h4 className="text-lg font-bold mb-1">For Emergency Contact</h4>
              <p className="text-xs text-cyan-100 mb-4">
                Call our direct hospital hotline for immediate assistance or acute ophthalmic trauma.
              </p>
              <a
                href={`tel:${hospitalInfo.phoneRaw}`}
                className="block text-center bg-white text-[#0e3b64] hover:bg-cyan-50 font-bold py-2.5 rounded-xl text-sm transition-all shadow-md"
              >
                {hospitalInfo.phoneDisplay}
              </a>
            </div>

            {/* Quality Accreditation Badge */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#1380be] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Quality Accredited</div>
                <div className="text-xs text-slate-500 leading-tight mt-0.5">
                  Adhering to strict international patient safety and healthcare protocols.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
