import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { clinicalServices } from "@/data/hospitalData";

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#1380be] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Scope Of Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Treatments We’re Offering to Our Clients
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From modern laser-assisted cataract surgery to 3D heads-up retina procedures, our tertiary center provides specialized diagnosis and therapeutic care for all ocular disorders.
          </p>
        </div>

        {/* 11 Specialties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicalServices.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0e3b64]/90 backdrop-blur-sm text-cyan-200 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                    {service.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1380be] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mt-0.5 mb-3">
                    {service.subtitle}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.excerpt}
                  </p>

                  {/* Feature Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.highlights.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Link CTA */}
              <div className="p-6 pt-0">
                <Link
                  href={`/${service.slug}`}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-slate-50 hover:bg-[#0e3b64] text-slate-700 hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all border border-slate-200 hover:border-[#0e3b64]"
                >
                  <span>Explore Department</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All & Scope of Services Callout */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200">
            <span className="text-sm font-semibold text-slate-700">
              Want to see our comprehensive diagnostic equipment and hospital scope?
            </span>
            <Link
              href="/diagnostic-services"
              className="bg-[#0e3b64] hover:bg-[#1380be] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors"
            >
              View Diagnostic Suite (OCT, FFA, Lasers)
            </Link>
            <Link
              href="/scope-of-services"
              className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 px-5 py-2.5 rounded-xl text-xs font-bold transition-colors"
            >
              Full Scope of Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
