"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Calendar, ShieldCheck } from "lucide-react";
import { hospitalInfo, clinicalServices } from "@/data/hospitalData";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [specialtiesOpen, setSpecialtiesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setSpecialtiesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const hospitalServicesList = [
    { title: "Scope of Services", href: "/scope-of-services", desc: "Specialized clinical procedures" },
    { title: "Services Out of Scope", href: "/services-out-of-scope", desc: "Tertiary referral boundaries" },
    { title: "Diagnostic Services", href: "/diagnostic-services", desc: "OCT, FFA, Topography & Lasers" },
    { title: "Laboratory Services", href: "/laboratory-services", desc: "Pathology, Blood & ECG testing" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md py-2" : "bg-white py-3 border-b border-slate-100"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-44 h-12 sm:w-56 sm:h-14">
              <Image
                src="/images/branding/demo-logo.png"
                alt={`${hospitalInfo.name} Logo`}
                fill
                sizes="224px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/" ? "text-[#0e3b64] font-bold bg-blue-50" : "text-slate-700 hover:text-[#0e3b64] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/about-us" ? "text-[#0e3b64] font-bold bg-blue-50" : "text-slate-700 hover:text-[#0e3b64] hover:bg-slate-50"
              }`}
            >
              About Us
            </Link>

            {/* Specialties Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0e3b64] hover:bg-slate-50 rounded-md transition-colors"
                onMouseEnter={() => setSpecialtiesOpen(true)}
                onClick={() => setSpecialtiesOpen(!specialtiesOpen)}
              >
                <span>Specialties</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div
                className="absolute left-0 top-full pt-2 w-72 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50"
                onMouseLeave={() => setSpecialtiesOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 max-h-[80vh] overflow-y-auto">
                  <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                    11 Clinical Departments
                  </div>
                  {clinicalServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="block px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-blue-50 hover:text-[#0e3b64] transition-colors"
                    >
                      <div className="font-semibold">{service.title}</div>
                      <div className="text-[11px] text-slate-500 truncate">{service.tag}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Hospital Services Dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#0e3b64] hover:bg-slate-50 rounded-md transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <span>Hospital Scope</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div
                className="absolute left-0 top-full pt-2 w-64 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50"
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2">
                  {hospitalServicesList.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-xs rounded-lg text-slate-700 hover:bg-blue-50 hover:text-[#0e3b64] transition-colors"
                    >
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-[11px] text-slate-500">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/our-team"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/our-team" ? "text-[#0e3b64] font-bold bg-blue-50" : "text-slate-700 hover:text-[#0e3b64] hover:bg-slate-50"
              }`}
            >
              Our Team
            </Link>

            <Link
              href="/foundation-trust"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/foundation-trust" ? "text-[#0e3b64] font-bold bg-blue-50" : "text-slate-700 hover:text-[#0e3b64] hover:bg-slate-50"
              }`}
            >
              {hospitalInfo.trustShortName || "Demo Trust"}
            </Link>

            <Link
              href="/news"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/news" ? "text-[#0e3b64] font-bold bg-blue-50" : "text-slate-700 hover:text-[#0e3b64] hover:bg-slate-50"
              }`}
            >
              News
            </Link>

            <Link
              href="/contact-us"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/contact-us" ? "text-[#0e3b64] font-bold bg-blue-50" : "text-slate-700 hover:text-[#0e3b64] hover:bg-slate-50"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action: Phone & Appointment CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href={`tel:${hospitalInfo.phoneRaw}`}
              className="hidden xl:inline-flex items-center space-x-1.5 text-xs font-bold text-[#0e3b64] hover:text-[#1380be] transition-colors bg-blue-50/80 hover:bg-blue-100/80 px-3 py-2 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-[#1380be]" />
              <span>{hospitalInfo.phoneDisplay}</span>
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center space-x-2 bg-[#cd2653] hover:bg-[#b01f46] text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-rose-900/10 hover:shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a
              href={`tel:${hospitalInfo.phoneRaw}`}
              className="p-2 text-white bg-[#0e3b64] rounded-lg"
              aria-label="Call Hospital"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-700 hover:text-[#0e3b64] rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Off-Canvas Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="text-sm font-bold text-[#0e3b64] uppercase">{hospitalInfo.name}</div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-blue-50"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-blue-50"
              >
                About Us
              </Link>
              <Link
                href="/scope-of-services"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-blue-50"
              >
                Scope of Services
              </Link>
              <Link
                href="/services-out-of-scope"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-blue-50"
              >
                Services Out of Scope
              </Link>
              <Link
                href="/diagnostic-services"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-blue-50"
              >
                Diagnostic Services
              </Link>
              <Link
                href="/laboratory-services"
                className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-blue-50"
              >
                Laboratory Services
              </Link>

              <div className="pt-2 pb-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Clinical Departments
              </div>
              <div className="pl-2 space-y-1">
                {clinicalServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="block px-2 py-1.5 text-xs text-slate-600 hover:text-[#0e3b64]"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  href="/our-team"
                  className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-blue-50"
                >
                  Our Team
                </Link>
                <Link
                  href="/foundation-trust"
                  className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-blue-50"
                >
                  {hospitalInfo.trustShortName || "Demo Trust"}
                </Link>
                <Link
                  href="/news"
                  className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-blue-50"
                >
                  News & Articles
                </Link>
                <Link
                  href="/contact-us"
                  className="block px-3 py-2 text-sm font-medium rounded-lg text-slate-800 hover:bg-blue-50"
                >
                  Contact Us
                </Link>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact-us"
                  className="w-full flex items-center justify-center space-x-2 bg-[#cd2653] text-white py-2.5 rounded-lg text-sm font-semibold"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </Link>
                <a
                  href={`tel:${hospitalInfo.phoneRaw}`}
                  className="mt-2 w-full flex items-center justify-center space-x-2 bg-[#0e3b64] text-white py-2.5 rounded-lg text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {hospitalInfo.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
