"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, ArrowRight, Eye, CheckCircle2 } from "lucide-react";
import { galleryItems, clinicInfo } from "@/data/siteData";

export default function SmileGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sliderPositions, setSliderPositions] = useState({});

  const categories = ["All", "Cosmetic", "Whitening", "Restoration", "Orthodontics"];

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  const handleSliderMove = (id, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPositions((prev) => ({ ...prev, [id]: percent }));
  };

  const handleTouchMove = (id, e) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPositions((prev) => ({ ...prev, [id]: percent }));
  };

  return (
    <div className="bg-slate-50/50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#019FE6] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Before &amp; After Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Smile <span className="gradient-text">Transformations</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Real patient results accomplished with meticulous aesthetic dentistry by{" "}
            <strong className="text-slate-900 font-semibold">{clinicInfo.leadDoctor}</strong>. 
            Drag the slider on each card below to inspect the Before and After results.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all focus:outline-none ${
                  selectedCategory === cat
                    ? "bg-[#019FE6] text-white shadow-md shadow-sky-500/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const position = sliderPositions[item.id] ?? 50;

            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col justify-between"
              >
                {/* Interactive Slider Frame */}
                <div>
                  <div
                    className="relative aspect-[4/3] bg-slate-900 overflow-hidden cursor-ew-resize select-none touch-none"
                    onMouseMove={(e) => handleSliderMove(item.id, e)}
                    onTouchMove={(e) => handleTouchMove(item.id, e)}
                  >
                    {/* Background: AFTER Image */}
                    <div className="absolute inset-0">
                      <Image
                        src={item.after}
                        alt={`${item.title} Result`}
                        fill
                        className="object-cover"
                        priority
                      />
                      <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                        AFTER
                      </div>
                    </div>

                    {/* Foreground: BEFORE Image (Clipped) */}
                    <div
                      className="absolute inset-y-0 left-0 overflow-hidden"
                      style={{ width: `${position}%` }}
                    >
                      <div className="relative w-full h-full">
                        {/* Render before image with matching dimensions */}
                        <div className="absolute inset-0 min-w-full" style={{ width: "300%" }}>
                          <Image
                            src={item.before}
                            alt={`${item.title} Before`}
                            fill
                            className="object-cover object-left"
                            priority
                          />
                        </div>
                      </div>
                      <div className="absolute top-3 left-3 bg-amber-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
                        BEFORE
                      </div>
                    </div>

                    {/* Divider Line & Handle */}
                    <div
                      className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none"
                      style={{ left: `${position}%` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-white text-slate-800 shadow-xl flex items-center justify-center text-[10px] font-black tracking-tighter border-2 border-[#019FE6]">
                        &harr;
                      </div>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#019FE6] uppercase tracking-wider">
                        {item.category} Case
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">{clinicInfo.city}</span>
                    </div>

                    <h3 className="font-bold text-lg text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href="/contact-us"
                    className="text-xs font-bold text-[#019FE6] hover:text-[#0087c5] flex items-center gap-1 group"
                  >
                    <span>Get Similar Transformation</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Booking Callout */}
        <div className="mt-16 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-slate-900 via-slate-800 to-sky-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to Transform Your Smile?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Schedule your smile analysis with {clinicInfo.leadDoctorShort}. We assess your facial aesthetics, tooth proportions, and design a custom treatment plan suited to your lifestyle.
            </p>
          </div>

          <Link href="/contact-us" className="btn-primary text-sm whitespace-nowrap shadow-xl">
            <Calendar className="w-4 h-4" />
            <span>Book Consultation Today</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
