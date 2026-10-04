import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Heart, Sparkles, ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { clinicInfo, services } from "@/data/siteData";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneRaw}?text=${encodeURIComponent(
    `Hello ${clinicInfo.shortName}, I would like to inquire about a dental appointment.`
  )}`;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Doctor intro */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white p-1 rounded-xl">
                <Image
                  src="/images/aura-dental-logo.svg"
                  alt={clinicInfo.name}
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">{clinicInfo.name}</h3>
                <p className="text-xs text-[#019FE6] font-semibold">Dental Studio &bull; {clinicInfo.city}</p>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Led by <span className="text-white font-medium">{clinicInfo.leadDoctor}</span>. Providing gentle, high-precision dental treatments and transformative smile aesthetics.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={clinicInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/30 transition-colors"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#019FE6]" />
              Our Treatments
            </h4>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="/#services"
                    className="hover:text-[#019FE6] transition-colors text-slate-400 flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-[#019FE6] transition-colors" />
                    <span>{s.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/smile-gallery"
                  className="hover:text-[#019FE6] transition-colors text-slate-400 flex items-center gap-1.5 group"
                >
                  <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-[#019FE6] transition-colors" />
                  <span>Smile Makeovers</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-[#019FE6] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#019FE6] transition-colors">
                  About {clinicInfo.leadDoctorShort}
                </Link>
              </li>
              <li>
                <Link href="/smile-gallery" className="hover:text-[#019FE6] transition-colors">
                  Smile Transformations Gallery
                </Link>
              </li>
              <li>
                <Link href="/school-dental-camps" className="hover:text-[#019FE6] transition-colors">
                  Community &amp; School Camps
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#019FE6] transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <a
                  href={clinicInfo.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#019FE6] transition-colors"
                >
                  Read Patient Reviews (5.0 ★)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Timings */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Clinic Hours &amp; Contact
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-[#019FE6] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Monday to Saturday</div>
                  <div className="text-xs text-slate-400">{clinicInfo.hours.replace(/^[^:]+:\s*/, "")}</div>
                  <div className="text-xs text-amber-400/90 mt-0.5">Sunday: By Special Appointment</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-[#019FE6] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{clinicInfo.address}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{clinicInfo.area}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Phone className="w-4 h-4 text-[#019FE6] flex-shrink-0" />
                <a href={`tel:${clinicInfo.phoneRaw}`} className="text-white hover:text-[#019FE6] transition-colors font-medium">
                  {clinicInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-[#019FE6] flex-shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="text-xs hover:text-[#019FE6] transition-colors truncate">
                  {clinicInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} {clinicInfo.name}. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Crafted for exceptional patient care with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> in {clinicInfo.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
