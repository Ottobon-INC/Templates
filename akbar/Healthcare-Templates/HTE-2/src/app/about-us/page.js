import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Heart, CheckCircle2, Users, Building, ArrowRight, Calendar } from "lucide-react";
import { hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: "About Us | 30+ Years of Ophthalmic Excellence",
  description: `Learn about ${hospitalInfo.name}, an accredited tertiary eye care institution dedicated to clinical excellence and advanced microsurgical precision.`
};

export default function AboutUsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About {hospitalInfo.name}
          </h1>
          <p className="mt-3 text-cyan-100 max-w-2xl text-base sm:text-lg">
            Enhancing vision, pioneering advanced microsurgery, and serving our community since {hospitalInfo.established}.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#1380be] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Our Founding Legacy</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              A Legacy of Quality Eye Care & Social Responsibility
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              <strong>{hospitalInfo.name}</strong> was established with a dedicated vision: to provide state-of-the-art eye care accessible to all patients, combining medical innovation with compassionate treatment.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Starting with a core commitment to vision restoration, it has grown into a modern state-of-the-art tertiary hospital equipped with fully computerized patient systems, advanced diagnostic suites, HEPA-filtered modular operation theaters, an in-house pharmacy, comprehensive optical dispensary, and patient-centered amenities.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Over the past three decades, the hospital has successfully performed over <strong>50,000 eye surgeries</strong> across cataracts, complex corneal transplants, vitreoretinal procedures, and glaucoma.
            </p>

            <div className="pt-2 flex items-center space-x-4">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3 flex-1">
                <ShieldCheck className="w-8 h-8 text-[#1380be] flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm text-slate-900">Quality Accredited</div>
                  <div className="text-xs text-slate-500">Benchmark Patient Safety</div>
                </div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center space-x-3 flex-1">
                <Users className="w-8 h-8 text-[#0e3b64] flex-shrink-0" />
                <div>
                  <div className="font-bold text-sm text-slate-900">Fellowship Alumni</div>
                  <div className="text-xs text-slate-500">Premier Surgical Guidance</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/2025/10/blog-1.jpg"
                alt={`${hospitalInfo.name} Facility`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision, Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0e3b64] flex items-center justify-center mb-5 font-bold text-xl">
              🎯
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Maximizing the optical potential of every patient through quality treatment, cutting-edge surgical precision, ethical medical practice, and affordable care.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-[#1380be] flex items-center justify-center mb-5 font-bold text-xl">
              👁️
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To be the benchmark center of ophthalmic excellence, pioneering subspecialty eye care, postgraduate medical training, and community visual wellness.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#cd2653] flex items-center justify-center mb-5 font-bold text-xl">
              ❤️
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Community Commitment</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Through the {hospitalInfo.trustName}, ensuring no patient is deprived of sight due to financial constraints, offering daily free community clinics and school eye screening drives.
            </p>
          </div>
        </div>

        {/* Key Milestones Timeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-lg mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Three Decades of Milestones
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Key moments shaping the journey of {hospitalInfo.name} from {hospitalInfo.established} to the present day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: `${hospitalInfo.established}`, title: "Hospital Inception", desc: "Founded with state-of-the-art diagnostic and surgical capabilities." },
              { year: "2001", title: "Community Trust Established", desc: "Charitable wing launched; daily free OPD and mobile outreach clinics began." },
              { year: "2010+", title: "Subspecialty Modernization", desc: "Acquired advanced 3D TrueVision retina imaging and digital OCT suites." },
              { year: "Today", title: "Quality Accreditation", desc: "Over 50,000 surgeries performed and 10,000+ school screenings annually." }
            ].map((milestone, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 relative">
                <div className="text-2xl font-black text-[#1380be] mb-1">{milestone.year}</div>
                <div className="font-bold text-slate-900 text-base mb-1.5">{milestone.title}</div>
                <div className="text-xs text-slate-600 leading-relaxed">{milestone.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-2">
              Ready to Consult with Our Specialists?
            </h3>
            <p className="text-cyan-100 text-sm max-w-xl">
              Meet our team of board-certified ophthalmologists and experience compassionate, state-of-the-art eye care.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/our-team"
              className="bg-white text-[#0e3b64] hover:bg-cyan-50 px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              Meet Our Doctors
            </Link>
            <Link
              href="/contact-us"
              className="bg-[#cd2653] hover:bg-[#b01f46] text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
