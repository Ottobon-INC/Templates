import Link from "next/link";
import { Clock, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { clinicInfo } from "@/data/siteData";

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2">
        {/* Left: Schedule & Location */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-slate-200">
            <Clock className="w-3.5 h-3.5 text-[#019FE6]" />
            <span>{clinicInfo.shortHours}</span>
          </div>
          <span className="hidden sm:inline text-slate-700">|</span>
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#019FE6]" />
            <span>{clinicInfo.area}</span>
          </div>
        </div>

        {/* Right: Phone & Instagram */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${clinicInfo.phoneRaw}`}
            className="flex items-center gap-1.5 font-medium text-white hover:text-[#019FE6] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#019FE6]" />
            <span>{clinicInfo.phone}</span>
          </a>
          <span className="text-slate-700">|</span>
          <a
            href={clinicInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-300 hover:text-pink-400 transition-colors"
            title={`Follow ${clinicInfo.shortName} on Instagram`}
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{clinicInfo.instagram}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
