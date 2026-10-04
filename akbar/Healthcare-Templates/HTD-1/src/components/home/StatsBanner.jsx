import { Star, Users, Award, MapPin } from "lucide-react";
import { clinicInfo, stats as rawStats } from "@/data/siteData";

export default function StatsBanner() {
  const icons = [Star, Users, Award, MapPin];

  const stats = rawStats.map((item, idx) => ({
    ...item,
    icon: icons[idx % icons.length],
    link: idx === 0 ? clinicInfo.googleReviewsUrl : null
  }));

  return (
    <section className="bg-white py-10 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            const content = (
              <div className="p-5 rounded-2xl glass-card flex flex-col items-center text-center group cursor-pointer">
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.iconColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-700 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {item.subtext}
                </div>
              </div>
            );

            return item.link ? (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={idx}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
