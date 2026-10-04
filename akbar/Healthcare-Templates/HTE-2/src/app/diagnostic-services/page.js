import Image from "next/image";
import Link from "next/link";
import { Microscope, ArrowRight, ShieldCheck, Calendar, Phone } from "lucide-react";
import { diagnosticEquipment, hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: "Diagnostic Services | OCT, FFA, Topography & Lasers",
  description: `Advanced ophthalmic diagnostic suite at ${hospitalInfo.name}: Optical Coherence Tomography (OCT), Fundus Fluorescein Angiography, Topography, B-Scan, and YAG lasers.`
};

export default function DiagnosticServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Diagnostic Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Diagnostic Services
          </h1>
          <p className="mt-3 text-cyan-100 max-w-2xl text-base sm:text-lg">
            High-precision ocular imaging, computerized tomography, vascular angiography, and therapeutic lasers.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#1380be] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Microscope className="w-3.5 h-3.5" />
            <span>Advanced Technology Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            State-of-the-Art Ophthalmic Diagnostics & Lasers
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Accurate diagnosis is the cornerstone of successful treatment. Our center is equipped with the latest world-class imaging instruments.
          </p>
        </div>

        {/* 14 Diagnostic Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {diagnosticEquipment.map((equip, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={equip.image}
                    alt={equip.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0e3b64]/90 backdrop-blur-sm text-cyan-200 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    Diagnostic Lab
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1380be] transition-colors mb-2">
                    {equip.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {equip.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 mt-4 flex items-center justify-between text-xs font-semibold text-[#0e3b64]">
                <span>In-House Testing Available</span>
                <Link href="/contact-us" className="text-[#1380be] hover:underline">
                  Book Test →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
              Referred by a Physician for Eye Diagnostics?
            </h3>
            <p className="text-cyan-100 text-sm max-w-xl">
              We provide rapid appointment slots with same-day reports for OCT, FFA, Perimetry, and B-Scan Ultrasound.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="bg-white text-[#0e3b64] hover:bg-cyan-50 px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              Book Diagnostic Slot
            </Link>
            <a
              href={`tel:${hospitalInfo.phoneRaw}`}
              className="bg-[#cd2653] hover:bg-[#b01f46] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              Call: {hospitalInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
