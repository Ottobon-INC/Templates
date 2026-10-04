import Link from "next/link";
import { EyeOff, Home, Phone, Calendar } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: `404 - Page Not Found | ${hospitalInfo.name}`,
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-100 shadow-xl">
        <div className="w-16 h-16 bg-blue-50 text-[#0e3b64] rounded-2xl flex items-center justify-center mx-auto">
          <EyeOff className="w-8 h-8 text-[#1380be]" />
        </div>

        <div className="space-y-2">
          <div className="text-4xl font-black text-[#0e3b64]">404</div>
          <h1 className="text-xl font-bold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link
            href="/"
            className="w-full inline-flex items-center justify-center space-x-2 bg-[#0e3b64] hover:bg-[#1380be] text-white py-3 rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/contact-us"
            className="w-full inline-flex items-center justify-center space-x-2 bg-[#cd2653] hover:bg-[#b01f46] text-white py-3 rounded-xl text-xs font-bold transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>

          <a
            href={`tel:${hospitalInfo.phoneRaw}`}
            className="w-full inline-flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl text-xs font-semibold transition-colors"
          >
            <Phone className="w-4 h-4 text-[#1380be]" />
            <span>Call: {hospitalInfo.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
