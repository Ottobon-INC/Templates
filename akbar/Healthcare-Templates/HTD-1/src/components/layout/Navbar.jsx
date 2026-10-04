"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Sparkles } from "lucide-react";
import { clinicInfo } from "@/data/siteData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Our Services", href: "/#services" },
    { name: "Smile Gallery", href: "/smile-gallery" },
    { name: "Our School Camps", href: "/school-dental-camps" },
    { name: "Contact Us", href: "/contact-us" }
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0 bg-white p-1 rounded-xl shadow-sm border border-slate-100 group-hover:shadow-md transition-shadow">
              <Image
                src="/images/aura-dental-logo.svg"
                alt={`${clinicInfo.name} Logo`}
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900 tracking-tight flex items-center gap-1 group-hover:text-[#019FE6] transition-colors">
                {clinicInfo.name}
                <Sparkles className="w-3.5 h-3.5 text-[#019FE6] opacity-80" />
              </span>
              <span className="text-xs font-semibold text-[#019FE6] tracking-wider uppercase">
                Dental Studio &bull; {clinicInfo.city}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link.href)
                    ? "text-[#019FE6] bg-sky-50/80 font-semibold"
                    : "text-slate-700 hover:text-[#019FE6] hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact-us"
              className="btn-primary text-sm hidden sm:inline-flex"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#019FE6] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-2 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive(link.href)
                  ? "text-[#019FE6] bg-sky-50 font-semibold"
                  : "text-slate-800 hover:text-[#019FE6] hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full py-3"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
