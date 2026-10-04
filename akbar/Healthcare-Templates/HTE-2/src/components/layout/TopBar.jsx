import Link from "next/link";
import Image from "next/image";
import { Phone, Clock, MapPin, UserCheck, ShieldCheck } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

export default function TopBar() {
  return (
    <div className="bg-[#0e3b64] text-white text-xs py-2 border-b border-blue-900/40 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Contact & Timings */}
        <div className="flex items-center space-x-6">
          <a
            href={`tel:${hospitalInfo.phoneRaw}`}
            className="flex items-center space-x-1.5 hover:text-cyan-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-medium">Appointments: {hospitalInfo.phoneDisplay}</span>
          </a>
          <div className="flex items-center space-x-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>OPD: {hospitalInfo.timings.opdMonSat}</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>{hospitalInfo.address.shortDisplay}</span>
          </div>
        </div>

        {/* Right: Status Badge & Staff Portal */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1.5 bg-blue-950/60 px-2.5 py-1 rounded text-cyan-200 border border-blue-800/60">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-semibold tracking-wide">DEMO HEALTHCARE TEMPLATE</span>
          </div>
          <a
            href={hospitalInfo.staffLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 text-slate-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded"
          >
            <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Staff Login</span>
          </a>
        </div>
      </div>
    </div>
  );
}
