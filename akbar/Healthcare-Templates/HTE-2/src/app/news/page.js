import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import { newsArticles, hospitalInfo } from "@/data/hospitalData";

export const metadata = {
  title: `Hospital News & Medical Articles | ${hospitalInfo.name}`,
  description: `Stay informed with eye health articles, diabetic retinopathy guides, community trust initiatives, and surgical milestones from ${hospitalInfo.name}.`
};

export default function NewsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-[#0e3b64] to-[#1380be] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-semibold text-cyan-200 mb-3 uppercase tracking-wider">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>News & Articles</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            News & Medical Articles
          </h1>
          <p className="mt-3 text-cyan-100 max-w-2xl text-base sm:text-lg">
            Educational eye care insights, hospital milestones, and community care updates from our clinical faculty.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {newsArticles.map((article) => (
            <article
              key={article.slug}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center space-x-1.5">
                      <Calendar className="w-4 h-4 text-[#1380be]" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1.5">
                      <User className="w-4 h-4 text-slate-400" />
                      <span>{article.author}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#1380be] transition-colors leading-snug mb-3">
                    <Link href={`/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href={`/${article.slug}`}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-[#0e3b64] hover:text-[#1380be] transition-colors"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Eye Health Awareness Callout */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Concerned About Your Vision?
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            Early detection is the key to preventing permanent vision loss in conditions like glaucoma and diabetic retinopathy.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center space-x-2 bg-[#cd2653] hover:bg-[#b01f46] text-white px-7 py-3 rounded-xl text-sm font-bold shadow-md transition-all hover:scale-105"
          >
            <span>Book a Comprehensive Eye Exam</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
