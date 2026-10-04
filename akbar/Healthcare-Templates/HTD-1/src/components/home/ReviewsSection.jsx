import Image from "next/image";
import { Star, Quote, ExternalLink } from "lucide-react";
import { patientReviews, clinicInfo } from "@/data/siteData";

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Google Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved By Our <span className="gradient-text">Patients</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-4">
            Hear why patients across {clinicInfo.city} and surrounding areas trust {clinicInfo.leadDoctor} for honest, reassuring, and life-changing dental care.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {patientReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-3xl p-8 glass-card flex flex-col justify-between relative"
            >
              <div>
                {/* Top Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-sky-200" />
                </div>

                {/* Patient Tag */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-sky-50 text-[#019FE6] text-xs font-semibold mb-3">
                  {rev.tag}
                </div>

                {/* Review Text */}
                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Patient Profile */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                {rev.image ? (
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
                    <Image
                      src={rev.image}
                      alt={rev.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#019FE6] to-[#2F5DFF] text-white font-bold flex items-center justify-center flex-shrink-0 text-sm shadow-sm">
                    {rev.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{rev.name}</h4>
                  <p className="text-xs text-slate-400">Verified Patient &bull; Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More Reviews CTA */}
        <div className="mt-12 text-center">
          <a
            href={clinicInfo.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm inline-flex items-center gap-2"
          >
            <span>Browse More Reviews on Google</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
