import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Eye, Truck, GraduationCap, Users, CheckCircle2, Phone, Calendar } from "lucide-react";
import { trustData, hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: `${trustData.title} | Charitable Eye Care, Free OPD & School Screenings`,
  description: `${trustData.title} conducts daily free community clinics, screens 10,000+ school children annually, and operates mobile eye health units.`
};

export default function FoundationTrustPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>{trustData.title}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            {trustData.title}
          </h1>
          <p className="mt-3 text-cyan-100 max-w-2xl text-base sm:text-lg">
            Dedicated Charitable Wing Providing Free Eye Care, Rural Mobile Screenings & School Vision Programs Since {trustData.founded}.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-rose-50 text-[#cd2653] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Community Outreach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Dedicated to Eye Health Equity & Community Vision
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              The charitable wing of {hospitalInfo.name} was established in <strong>{trustData.founded}</strong> to eliminate preventable blindness and ensure that advanced eye care is accessible to all individuals regardless of socio-economic background.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Today, the trust operates an active outpatient division at the base hospital for underserved patients, conducts regular outreach screening camps in rural and suburban areas, runs the extensive School Children's Eye Screening Program, and trains paramedical personnel.
            </p>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start space-x-3 text-emerald-900">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm">
                <strong>Free Daily Community Outpatient Care:</strong> Low-income individuals and families can avail completely free eye examinations, diagnostic tests, medicines, and surgical referrals daily between <strong>9:00 AM and 12:00 Noon</strong>.
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[380px] sm:h-[440px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/2025/10/blog-2.jpg"
                alt={`${trustData.title} Community Screening Camp`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#0e3b64] text-white p-5 rounded-2xl shadow-xl flex items-center space-x-4 border border-white/20">
              <div className="text-3xl font-extrabold text-cyan-400">10,000+</div>
              <div className="text-xs font-semibold leading-tight uppercase">
                School Children<br />Screened Annually
              </div>
            </div>
          </div>
        </div>

        {/* 5 Core Trust Programs */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {trustData.title} Initiatives
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Comprehensive preventive, diagnostic, and surgical eye care reaching underserved populations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustData.programs.map((prog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0e3b64] flex items-center justify-center mb-5 font-bold">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {prog.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CSR Collaboration & Outreach */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#1380be] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                <Truck className="w-3.5 h-3.5" />
                <span>Outreach Initiative</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
                Mobile Eye Clinic Diagnostic Fleet
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Supported by CSR partners and community benefactors, our fleet of mobile ophthalmic units is equipped with high-precision diagnostic and examination technology.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                The mobile eye hospital travels into remote rural communities and suburban neighborhoods, conducting on-site eye examinations, distributing prescription spectacles, and referring cataract patients for free surgery at our base hospital.
              </p>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/2025/10/vizag.jpg"
                alt="Mobile Eye Clinic Unit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact & Volunteer Banner */}
        <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
              Partner with {trustData.title} for Community Eye Camps
            </h3>
            <p className="text-cyan-100 text-sm max-w-xl">
              Corporations, NGOs, and educational institutions are invited to partner with us for school screening programs and community eye health drives.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="bg-white text-[#0e3b64] hover:bg-cyan-50 px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              Contact Trust Coordinator
            </Link>
            <a
              href={`tel:${hospitalInfo.phoneRaw}`}
              className="bg-[#cd2653] hover:bg-[#b01f46] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              Call: {hospitalInfo.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
