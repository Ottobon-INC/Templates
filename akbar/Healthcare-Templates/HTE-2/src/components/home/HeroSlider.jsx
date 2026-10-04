"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Calendar, PhoneCall, ShieldCheck } from "lucide-react";
import { hospitalInfo, heroSlides } from "@/data/hospitalData";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section className="relative h-[550px] sm:h-[620px] lg:h-[700px] w-full overflow-hidden bg-slate-900 text-white">
      {/* Background Images with Fade */}
      {heroSlides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            priority={idx === 0}
            className="object-cover object-center scale-105 transition-transform duration-10000"
          />
          {/* Multi-layered dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wide">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Accredited Tertiary Eye Care (Demo)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-md">
            {heroSlides[current].title}
          </h1>

          <p className="text-lg sm:text-xl text-cyan-100 font-medium leading-relaxed drop-shadow">
            {heroSlides[current].subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/contact-us"
              className="inline-flex items-center space-x-2.5 bg-[#cd2653] hover:bg-[#b01f46] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-rose-900/30 transition-all hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an Appointment</span>
            </Link>

            <a
              href={`tel:${hospitalInfo.phoneRaw}`}
              className="inline-flex items-center space-x-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 px-6 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105"
            >
              <PhoneCall className="w-5 h-5 text-cyan-400" />
              <span>Call: {hospitalInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm transition-all focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            className={`h-2.5 rounded-full transition-all focus:outline-none ${
              idx === current ? "w-8 bg-cyan-400" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
