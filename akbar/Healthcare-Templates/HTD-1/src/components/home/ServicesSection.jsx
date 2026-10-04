import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";
import { services, clinicInfo } from "@/data/siteData";

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#019FE6] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Dental Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Dental Care, <br className="hidden sm:inline" />
            <span className="gradient-text">Tailored to You</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            At {clinicInfo.name}, we provide complete dental care for all ages &mdash; from preventive check-ups to high-precision smile makeovers. Every treatment is delivered with precision, comfort, and transparency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`rounded-3xl overflow-hidden glass-card flex flex-col justify-between group ${
                index === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
                    {service.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#019FE6] uppercase tracking-wider block mb-1">
                    {service.title}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#019FE6] transition-colors mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs italic text-slate-500 mb-3 font-medium">
                    &ldquo;{service.subheading}&rdquo;
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <Link
                  href="/contact-us"
                  className="text-xs font-bold text-[#019FE6] hover:text-[#0087c5] flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-400 font-medium">{clinicInfo.city}</span>
              </div>
            </div>
          ))}

          {/* 6th Card: Custom Consultation / Call Card */}
          <div className="rounded-3xl p-8 bg-gradient-to-br from-[#019FE6] to-[#2F5DFF] text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-2">
                Need a Personalized Consultation?
              </h3>
              <p className="text-sm text-sky-100 leading-relaxed">
                Whether you are experiencing unexpected pain, looking to whiten your teeth, or planning an orthodontic alignment, {clinicInfo.leadDoctorShort} is here to help you achieve your dream smile.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href="/contact-us"
                className="w-full py-3.5 px-6 rounded-full bg-white text-[#019FE6] font-bold text-sm text-center block hover:bg-sky-50 shadow-md transition-colors"
              >
                Schedule Appointment Now
              </Link>
              <div className="text-center text-xs text-sky-200">
                Direct Hotline: {clinicInfo.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
