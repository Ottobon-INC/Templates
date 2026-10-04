import Image from "next/image";
import Link from "next/link";
import { Award, GraduationCap, Globe, CheckCircle2, Calendar } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { doctorBio, clinicInfo } from "@/data/siteData";

export default function MeetDoctor() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Background gradient frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#019FE6]/20 via-[#2F5DFF]/20 to-transparent rounded-3xl blur-xl" />

              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <Image
                  src={doctorBio.image}
                  alt={`${doctorBio.name} - ${doctorBio.role}`}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Qualification Tag */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-11/12 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 text-center">
                <h3 className="font-bold text-slate-900 text-base">{doctorBio.name}</h3>
                <p className="text-xs font-semibold text-[#019FE6] tracking-wide uppercase mt-0.5">
                  {doctorBio.credentials} &bull; Cosmetic &amp; Laser Dentist
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#019FE6] text-xs font-bold uppercase tracking-wider">
              <span>Meet The Founder</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Meet <span className="gradient-text">{doctorBio.name}</span>
              <span className="block text-xl sm:text-2xl font-semibold text-slate-500 mt-1">
                {doctorBio.credentials}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              {doctorBio.summary}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {doctorBio.description}
            </p>

            {/* Key Qualifications Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-100 shadow-sm">
                <Award className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-slate-900">Distinction Honors</div>
                  <div className="text-xs text-slate-500">Gold Medalist Clinical Graduate</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-100 shadow-sm">
                <Globe className="w-5 h-5 text-[#019FE6] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-slate-900">Aesthetic Fellowship</div>
                  <div className="text-xs text-slate-500">Advanced Cosmetic &amp; Laser Dentistry</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#4B916D] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-slate-900">Honest &amp; Transparent</div>
                  <div className="text-xs text-slate-500">Clear explanations with zero unnecessary procedures</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#2F5DFF] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-xs text-slate-900">Gentle Touch Care</div>
                  <div className="text-xs text-slate-500">Relaxed pacing tailored for nervous patients</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/contact-us" className="btn-primary text-sm">
                <Calendar className="w-4 h-4" />
                <span>Consult with {doctorBio.name}</span>
              </Link>
              
              <a
                href={clinicInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm inline-flex items-center gap-2"
              >
                <InstagramIcon className="w-4 h-4 text-pink-500" />
                <span>Follow {clinicInfo.instagram}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
