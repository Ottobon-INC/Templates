import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ShieldAlert, CheckCircle2 } from "lucide-react";
import { servicesOutOfScope, hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: "Services Out of Scope | Clinical Scope Transparency",
  description: `Official clinical boundary listing procedures and rare ophthalmic conditions managed via tertiary referral outside the direct scope of ${hospitalInfo.name}.`
};

export default function ServicesOutOfScopePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Services Out of Scope</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Services Out of Scope
          </h1>
          <p className="mt-3 text-cyan-100 max-w-2xl text-base sm:text-lg">
            Clinical transparency defining specialized procedures and tertiary services coordinated with apex academic partner institutions.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 mb-12 flex items-start space-x-4 text-amber-900">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm leading-relaxed space-y-1">
            <h3 className="font-bold text-amber-950 text-base">Why We Publish Services Out of Scope</h3>
            <p>
              In accordance with recognized hospital accreditation and patient safety standards, {hospitalInfo.name} explicitly publishes procedures that are outside our direct in-house surgical scope.
            </p>
            <p className="text-xs text-amber-800">
              Patients presenting with these rare conditions receive thorough primary diagnostic evaluations and are then smoothly transferred with complete documentation to specialized apex teaching centers.
            </p>
          </div>
        </div>

        {/* 4 Out of Scope Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {servicesOutOfScope.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-amber-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    Tertiary Referral
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Primary Evaluation Provided</span>
                </span>
                <Link
                  href="/contact-us"
                  className="font-bold text-[#0e3b64] hover:text-[#1380be]"
                >
                  Consult Specialist →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center max-w-2xl mx-auto">
          <h4 className="text-lg font-bold text-slate-900 mb-2">
            Have Questions About a Complex Ocular Condition?
          </h4>
          <p className="text-xs text-slate-600 mb-5">
            Contact our senior consultants for comprehensive preliminary examinations and guided treatment pathways.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center space-x-2 bg-[#0e3b64] hover:bg-[#1380be] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-colors"
          >
            <span>Contact Reception Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
