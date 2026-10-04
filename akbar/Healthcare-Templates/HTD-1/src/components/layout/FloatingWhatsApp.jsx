"use client";

import { MessageCircle } from "lucide-react";
import { clinicInfo } from "@/data/siteData";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneRaw}?text=${encodeURIComponent(
    `Hello ${clinicInfo.leadDoctorShort || "Doctor"}, I would like to book a dental consultation at ${clinicInfo.name}.`
  )}`;

  return (
    <aside aria-label="Quick WhatsApp Chat" className="fixed bottom-6 right-6 z-50 flex items-center group">
      <div className="hidden sm:block mr-2 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-700">
        Chat with us on WhatsApp
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label={`Chat on WhatsApp with ${clinicInfo.name}`}
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  );
}
