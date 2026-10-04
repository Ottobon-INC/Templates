import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, HeartHandshake, ExternalLink } from "lucide-react";
import { hospitalInfo, clinicalServices } from "@/data/hospitalData";

export default function Footer() {
  return (
    <footer className="bg-[#0a2744] text-slate-300 pt-16 pb-10 border-t-4 border-[#1380be]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency & Callout Bar */}
        <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] rounded-2xl p-6 sm:p-8 mb-14 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-cyan-500/20">
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-200 font-semibold mb-1">
              Need Immediate Eye Care or Consultation?
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Call For Appointments & Emergencies
            </h3>
            <p className="text-sm text-cyan-100 mt-1 max-w-xl">
              Dedicated trauma and urgent eye assistance available 24 hours a day, 7 days a week.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`tel:${hospitalInfo.phoneRaw}`}
              className="inline-flex items-center space-x-2 bg-white text-[#0e3b64] hover:bg-cyan-50 px-6 py-3 rounded-xl font-bold text-base shadow-md transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5 text-[#1380be]" />
              <span>{hospitalInfo.phoneDisplay}</span>
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center space-x-2 bg-[#cd2653] hover:bg-[#b01f46] text-white px-6 py-3 rounded-xl font-bold text-base shadow-md transition-all hover:scale-105"
            >
              <span>Book Online</span>
            </Link>
          </div>
        </div>

        {/* 4 Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: About & Quality Accreditation */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-xl inline-block">
              <Image
                src="/images/branding/demo-logo.png"
                alt={hospitalInfo.name}
                width={180}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              Demo eye hospital and ophthalmic surgery website template showcasing modern clinical infrastructure, subspecialty treatments, and patient care.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <div className="w-10 h-10 flex-shrink-0 bg-blue-900/60 p-2 rounded-lg border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <div className="text-white font-bold tracking-wide">QUALITY ACCREDITED</div>
                <div className="text-slate-400">Advanced Ophthalmic Standards</div>
              </div>
            </div>
          </div>

          {/* Col 2: Clinical Specialties */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 border-l-4 border-cyan-400 pl-3">
              Clinical Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {clinicalServices.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-cyan-500">›</span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/scope-of-services"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-1 pt-1"
                >
                  <span>View All 11 Specialties →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hospital Services & Scope */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 border-l-4 border-cyan-400 pl-3">
              Hospital Scope
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/scope-of-services" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Scope of Services</span>
                </Link>
              </li>
              <li>
                <Link href="/services-out-of-scope" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Services Out of Scope</span>
                </Link>
              </li>
              <li>
                <Link href="/diagnostic-services" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Diagnostic Services (OCT, FFA, Lasers)</span>
                </Link>
              </li>
              <li>
                <Link href="/laboratory-services" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Laboratory & Pathology</span>
                </Link>
              </li>
              <li>
                <Link href="/foundation-trust" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>{hospitalInfo.trustName}</span>
                </Link>
              </li>
              <li>
                <Link href="/medical-director" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Medical Director Profile</span>
                </Link>
              </li>
              <li>
                <Link href="/our-team" className="hover:text-cyan-300 transition-colors flex items-center space-x-1.5">
                  <span className="text-cyan-500">›</span>
                  <span>Our Medical Specialists</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Timings */}
          <div>
            <h4 className="text-base font-bold text-white mb-4 border-l-4 border-cyan-400 pl-3">
              Hospital Location
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>{hospitalInfo.address.full}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`tel:${hospitalInfo.phoneRaw}`} className="hover:text-white">
                  {hospitalInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <a href={`mailto:${hospitalInfo.email}`} className="hover:text-white">
                  {hospitalInfo.email}
                </a>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <div className="font-semibold text-white mb-1 flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>OPD Consultation Hours</span>
                </div>
                <div className="text-slate-400 leading-relaxed">
                  Mon – Sat: {hospitalInfo.timings.opdMonSat}<br />
                  Sunday: {hospitalInfo.timings.opdSunday}<br />
                  <span className="text-rose-400 font-semibold">24x7 Emergency Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} {hospitalInfo.name}. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <a
              href={hospitalInfo.staffLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-200 transition-colors flex items-center space-x-1"
            >
              <span>Staff Login</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
