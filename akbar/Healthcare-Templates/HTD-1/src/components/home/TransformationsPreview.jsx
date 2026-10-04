"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Check } from "lucide-react";
import { galleryItems, clinicInfo } from "@/data/siteData";

export default function TransformationsPreview() {
  const [activeToggle, setActiveToggle] = useState({});

  const toggleImage = (id) => {
    setActiveToggle((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const previewItems = galleryItems.slice(0, 3);

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#4B916D] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real Patient Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Smile <span className="gradient-text">Transformations</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Witness the artistry and clinical precision of {clinicInfo.leadDoctor}. Tap below to compare Before and After transformations.
            </p>
          </div>

          <Link
            href="/smile-gallery"
            className="btn-primary text-sm whitespace-nowrap self-start md:self-auto"
          >
            <span>See All Transformations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewItems.map((item) => {
            const isShowingAfter = activeToggle[item.id] ?? true;

            return (
              <div
                key={item.id}
                className="rounded-3xl overflow-hidden glass-card flex flex-col justify-between"
              >
                <div>
                  {/* Image Display */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <Image
                      src={isShowingAfter ? item.after : item.before}
                      alt={`${item.title} - ${isShowingAfter ? "After" : "Before"}`}
                      fill
                      className="object-cover transition-all duration-300"
                    />

                    {/* State Indicator Badge */}
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${isShowingAfter ? "bg-emerald-400" : "bg-amber-400"}`} />
                      <span>{isShowingAfter ? "AFTER Treatment" : "BEFORE Treatment"}</span>
                    </div>

                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                      {item.category}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Interactive Toggle Button */}
                <div className="p-6 pt-0">
                  <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                    <button
                      onClick={() => setActiveToggle((prev) => ({ ...prev, [item.id]: false }))}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${
                        !isShowingAfter
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      Before
                    </button>
                    <button
                      onClick={() => setActiveToggle((prev) => ({ ...prev, [item.id]: true }))}
                      className={`py-2 text-xs font-bold rounded-lg transition-all ${
                        isShowingAfter
                          ? "bg-[#019FE6] text-white shadow-sm"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      After (Result)
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-sky-50/80 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#019FE6] text-white flex items-center justify-center flex-shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Custom Smile Designing Available</h4>
              <p className="text-xs text-slate-600">Digital preview of your proposed smile before beginning any cosmetic treatment.</p>
            </div>
          </div>
          <Link href="/smile-gallery" className="btn-secondary text-xs px-4 py-2">
            Explore Full Smile Gallery &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
