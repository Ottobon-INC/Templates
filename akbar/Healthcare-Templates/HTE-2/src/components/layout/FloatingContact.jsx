"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Calendar, MessageSquare, X } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      {/* Expanded quick buttons */}
      {open && (
        <div className="flex flex-col items-end space-y-2 mb-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <Link
            href="/contact-us"
            className="flex items-center space-x-2 bg-[#cd2653] hover:bg-[#b01f46] text-white px-4 py-2.5 rounded-full shadow-lg text-xs font-bold transition-transform hover:scale-105"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </Link>
          <a
            href={`tel:${hospitalInfo.phoneRaw}`}
            className="flex items-center space-x-2 bg-[#0e3b64] hover:bg-[#092b4a] text-white px-4 py-2.5 rounded-full shadow-lg text-xs font-bold transition-transform hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {hospitalInfo.phoneDisplay}</span>
          </a>
        </div>
      )}

      {/* Main floating trigger toggle */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-[#1380be] hover:bg-[#0f6aa0] text-white shadow-xl shadow-cyan-900/30 flex items-center justify-center transition-all hover:scale-105 focus:outline-none"
        aria-label="Contact Options"
      >
        {open ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
      </button>
    </div>
  );
}
