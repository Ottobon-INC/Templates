import { UserCheck, Microscope, HeartPulse, Clock } from "lucide-react";
import Link from "next/link";

export default function FeatureCards() {
  const features = [
    {
      icon: UserCheck,
      title: "Expert Doctors",
      desc: "Well-trained and qualified eye specialists with fellowship-trained academic leadership.",
      link: "/our-team",
      linkText: "Meet Specialists",
      accent: "border-blue-500 text-blue-600 bg-blue-50"
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      desc: "State-of-the-art diagnostic suites including OCT, FFA, Topography & 3D retina visualization.",
      link: "/diagnostic-services",
      linkText: "View Equipment",
      accent: "border-cyan-500 text-cyan-600 bg-cyan-50"
    },
    {
      icon: HeartPulse,
      title: "Emergency Care",
      desc: "Dedicated trauma response and urgent ophthalmic assistance available 24x7.",
      link: "/contact-us",
      linkText: "Emergency Helpline",
      accent: "border-rose-500 text-rose-600 bg-rose-50"
    }
  ];

  return (
    <section className="relative -mt-14 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl border border-slate-100 p-7 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${item.accent} transition-transform group-hover:scale-110`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={item.link}
                  className="inline-flex items-center text-xs font-bold text-[#0e3b64] group-hover:text-[#1380be] transition-colors"
                >
                  <span>{item.linkText}</span>
                  <span className="ml-1 text-base transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
