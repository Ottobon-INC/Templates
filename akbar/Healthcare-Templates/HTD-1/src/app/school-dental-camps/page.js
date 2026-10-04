import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Heart, CheckCircle2, Calendar, Phone, Sparkles, School } from "lucide-react";
import { schoolCamps, clinicInfo } from "@/data/siteData";

export const metadata = {
  title: `Our School Camps | ${clinicInfo.name}`,
  description:
    `Conducted School Dental Camps by ${clinicInfo.name} and ${clinicInfo.leadDoctor}. Empowering students with oral health education, preventive dental check-ups, and pediatric care.`
};

export default function SchoolDentalCampsPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#4B916D] text-xs font-bold uppercase tracking-wider mb-3">
            <School className="w-3.5 h-3.5" />
            <span>Community Outreach &amp; Pediatric Health</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Conducted <span className="gradient-text">School Dental Camps</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            At {clinicInfo.name}, we believe strong, healthy smiles begin in childhood. 
            Led by <strong className="text-slate-900 font-semibold">{clinicInfo.leadDoctor}</strong>, our team conducts interactive, fear-free dental health camps across educational institutions to foster lifelong oral hygiene habits.
          </p>
        </div>

        {/* Camp Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-slate-100 text-center shadow-sm">
            <div className="text-3xl font-extrabold text-[#019FE6]">15+</div>
            <div className="text-xs font-semibold text-slate-700 mt-1">School Camps Conducted</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-100 text-center shadow-sm">
            <div className="text-3xl font-extrabold text-[#4B916D]">3,500+</div>
            <div className="text-xs font-semibold text-slate-700 mt-1">Students Screened</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-100 text-center shadow-sm">
            <div className="text-3xl font-extrabold text-[#2F5DFF]">100%</div>
            <div className="text-xs font-semibold text-slate-700 mt-1">Free Preventive Guidance</div>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-100 text-center shadow-sm">
            <div className="text-3xl font-extrabold text-amber-500">Zero Fear</div>
            <div className="text-xs font-semibold text-slate-700 mt-1">Child-Friendly Approach</div>
          </div>
        </div>

        {/* Camp Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolCamps.map((camp) => (
            <div
              key={camp.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col justify-between group hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={camp.image}
                    alt={camp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {camp.location}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#019FE6] transition-colors mb-2">
                    {camp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {camp.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>Screening &bull; Awareness &bull; Dental Kits</span>
              </div>
            </div>
          ))}
        </div>

        {/* School Partnership Banner / Invitation */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-sky-500 via-[#019FE6] to-[#2F5DFF] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center lg:text-left">
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider inline-block">
              For Principals &amp; Educators
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Host a Free Dental Camp at Your School
            </h2>
            <p className="text-sm text-sky-100 max-w-xl leading-relaxed">
              We collaborate with schools and educational institutions to deliver certified pediatric dental screenings, dietary awareness workshops, and oral hygiene education.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <Link
              href="/contact-us"
              className="py-3.5 px-6 rounded-full bg-white text-[#019FE6] font-bold text-sm hover:bg-sky-50 transition-colors shadow-lg"
            >
              Request a School Camp
            </Link>
            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="py-3.5 px-6 rounded-full bg-sky-900/40 border border-white/30 text-white font-bold text-sm hover:bg-sky-900/60 transition-colors"
            >
              Call Us: {clinicInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
