import Link from "next/link";
import { Sparkles, Home, Phone, Calendar } from "lucide-react";
import { clinicInfo } from "@/data/siteData";

export const metadata = {
  title: `Page Not Found | ${clinicInfo.name}`,
  description: `The page you are looking for does not exist. Return to ${clinicInfo.name} home page.`
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
        <div className="w-16 h-16 bg-sky-50 text-[#019FE6] rounded-2xl flex items-center justify-center mx-auto shadow-inner">
          <Sparkles className="w-8 h-8" />
        </div>

        <div>
          <span className="text-4xl sm:text-5xl font-extrabold text-[#019FE6]">404</span>
          <h1 className="text-2xl font-bold text-slate-900 mt-2">Page Not Found</h1>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            The page you are looking for might have been moved or is temporarily unavailable. Let&apos;s get you back on track to a healthy smile.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          <Link href="/" className="btn-primary w-full py-3.5 text-sm">
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link href="/contact-us" className="btn-secondary w-full py-3.5 text-sm">
            <Calendar className="w-4 h-4" />
            <span>Book an Appointment</span>
          </Link>

          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="block text-xs text-slate-500 hover:text-[#019FE6] transition-colors pt-2"
          >
            Need urgent assistance? Call {clinicInfo.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
