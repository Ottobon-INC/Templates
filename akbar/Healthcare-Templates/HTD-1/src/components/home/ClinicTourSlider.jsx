"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { clinicTourPhotos, clinicInfo } from "@/data/siteData";

export default function ClinicTourSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? clinicTourPhotos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === clinicTourPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-[#019FE6] text-xs font-bold uppercase tracking-wider mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Virtual Clinic Tour</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            A Look Around <span className="gradient-text">{clinicInfo.name}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Designed for warmth, calm, and uncompromising clinical hygiene. Step inside our modern dental sanctuary.
          </p>
        </div>

        {/* Carousel Visual Frame */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Display Image */}
          <div className="relative aspect-[16/9] sm:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50 bg-slate-900">
            <Image
              src={clinicTourPhotos[currentIndex].src}
              alt={clinicTourPhotos[currentIndex].caption}
              fill
              className="object-cover transition-all duration-700 ease-in-out"
              priority
            />

            {/* Bottom Gradient Overlay & Caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-6 text-white flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold text-[#019FE6] uppercase tracking-wider">
                  Tour Photo {currentIndex + 1} of {clinicTourPhotos.length}
                </p>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  {clinicTourPhotos[currentIndex].caption}
                </h3>
              </div>
            </div>

            {/* Left Nav Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-110 focus:outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 hover:bg-white text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-110 focus:outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails row */}
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
            {clinicTourPhotos.map((photo, idx) => (
              <button
                key={photo.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative w-16 h-12 rounded-xl overflow-hidden border-2 transition-all focus:outline-none ${
                  currentIndex === idx
                    ? "border-[#019FE6] scale-110 shadow-md ring-2 ring-sky-200"
                    : "border-slate-200 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
