import { Clock, Phone, AlertCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { hospitalInfo } from "@/data/hospitalData";

export default function TimingsWidget() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Timings Schedule Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0e3b64] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#1380be]">
                  Hospital Schedule
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Opening & Consultation Hours
                </h3>
              </div>
            </div>

            <div className="divide-y divide-slate-100">
              <div className="py-3.5 flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-700">Monday – Saturday (OPD)</span>
                <span className="font-bold text-[#0e3b64] bg-blue-50 px-3 py-1 rounded-md">
                  {hospitalInfo.timings.opdMonSat}
                </span>
              </div>
              <div className="py-3.5 flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-700">Sunday Consultations</span>
                <span className="font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-md">
                  {hospitalInfo.timings.opdSunday}
                </span>
              </div>
              <div className="py-3.5 flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-700">{hospitalInfo.trustName} (Free Community OPD)</span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md">
                  {hospitalInfo.timings.trustBPL}
                </span>
              </div>
              <div className="py-3.5 flex justify-between items-center text-sm">
                <span className="font-semibold text-rose-700 flex items-center space-x-1.5">
                  <AlertCircle className="w-4 h-4" />
                  <span>Trauma & Emergency Care</span>
                </span>
                <span className="font-extrabold text-white bg-[#cd2653] px-3 py-1 rounded-md">
                  24x7 Open
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#0e3b64] hover:bg-[#1380be] text-white py-3 rounded-xl text-sm font-bold shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </Link>
              <a
                href={`tel:${hospitalInfo.phoneRaw}`}
                className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1380be]" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>

          {/* Right: Hospital Philosophy & Patient Promise */}
          <div className="space-y-6">
            <div className="text-xs font-bold uppercase tracking-widest text-[#1380be]">
              Patient Centric Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Prompt Appointments & Zero Waiting Trauma Support
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We understand that vision problems can cause significant anxiety. Our computerized scheduling system ensures minimal waiting times for pre-booked consultations.
            </p>
            <div className="bg-white p-6 rounded-2xl border-l-4 border-[#1380be] shadow-sm space-y-2">
              <h4 className="font-bold text-slate-800">Direct Doctor Appointments</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you need a routine eye vision evaluation, advanced corneal transplantation consultation, or complex vitreoretinal assessment, our specialist faculty is at your service.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-xs font-semibold text-slate-500">
              <span>✓ Pre-operative lab tests on-site</span>
              <span>✓ Same-day discharge surgeries</span>
              <span>✓ Cashless insurance available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
