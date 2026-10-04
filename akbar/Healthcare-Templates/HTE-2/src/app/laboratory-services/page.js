import Image from "next/image";
import Link from "next/link";
import { Activity, ShieldCheck, CheckCircle2, Clock, Calendar } from "lucide-react";
import { laboratoryServices, hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: "Laboratory Services | Pre-Operative Blood Tests, ECG & Pathology",
  description: `In-house clinical laboratory services at ${hospitalInfo.name} providing pre-surgical blood investigations, ECG, and pathology testing for patient safety.`
};

export default function LaboratoryServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Laboratory Services</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Laboratory Services
          </h1>
          <p className="mt-3 text-cyan-100 max-w-2xl text-base sm:text-lg">
            In-house clinical pathology, pre-surgical fitness blood testing, and cardiac ECG evaluation ensuring surgical safety.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#1380be] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Clinical Pathology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Pre-Operative & Health Diagnostics
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Having an in-house laboratory enables rapid pre-anesthesia medical fitness assessments, eliminating the need for patients to travel between external labs before surgery.
          </p>
        </div>

        {/* 3 Laboratory Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {laboratoryServices.map((lab, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={lab.image}
                    alt={lab.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0e3b64]/90 backdrop-blur-sm text-cyan-200 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                    In-House Lab
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {lab.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {lab.desc}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-50 mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1 text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Same-Day Reports</span>
                </span>
                <span className="font-semibold text-slate-700">Quality Standards</span>
              </div>
            </div>
          ))}
        </div>

        {/* Laboratory Safety Highlights */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-md">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Safety & Quality Controls in Our Laboratory
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Calibrated automated hematology and biochemistry analyzers ensuring exact test accuracy.</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Full compliance with clinical patient identification and barcoded sample tracking protocols.</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Immediate blood glucose and coagulation (PT/INR) turn-around for surgical list clearance.</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Qualified lab technicians supervised by senior consultants.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
