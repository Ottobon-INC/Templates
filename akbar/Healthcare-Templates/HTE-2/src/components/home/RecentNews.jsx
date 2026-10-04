import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { newsArticles, hospitalInfo } from "@/data/hospitalData";

export default function RecentNews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#1380be] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{hospitalInfo.name} News</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our News & Medical Articles
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center space-x-1.5 text-sm font-bold text-[#0e3b64] hover:text-[#1380be] transition-colors"
          >
            <span>View All Hospital Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.slice(0, 3).map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-[#1380be]" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.author}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1380be] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/${article.slug}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0e3b64] group-hover:text-[#1380be] transition-colors"
                >
                  <span>Read Full Article</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
