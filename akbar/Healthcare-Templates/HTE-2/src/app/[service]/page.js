import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Phone, Share2 } from "lucide-react";
import ServiceLayout from "@/components/services/ServiceLayout";
import { clinicalServices, newsArticles, hospitalInfo } from "@/data/hospitalData";
import { serviceArticles, blogPosts } from "@/data/serviceContent";

export async function generateStaticParams() {
  const serviceParams = clinicalServices.map((s) => ({ service: s.slug }));
  const articleParams = newsArticles.map((a) => ({ service: a.slug }));
  return [...serviceParams, ...articleParams];
}

export async function generateMetadata({ params }) {
  const { service: slug } = await params;

  const service = clinicalServices.find((s) => s.slug === slug);
  if (service) {
    return {
      title: `${service.title} | ${hospitalInfo.name}`,
      description: service.excerpt,
      openGraph: {
        title: `${service.title} - Scope of Services`,
        description: service.excerpt,
        images: [{ url: service.image }]
      }
    };
  }

  const article = newsArticles.find((a) => a.slug === slug);
  if (article) {
    return {
      title: `${article.title} | ${hospitalInfo.name} News`,
      description: article.excerpt,
      openGraph: {
        title: article.title,
        description: article.excerpt,
        images: [{ url: article.image }]
      }
    };
  }

  return {
    title: `Page Not Found | ${hospitalInfo.name}`
  };
}

export default async function DynamicServiceOrArticlePage({ params }) {
  const { service: slug } = await params;

  // 1. Check if it's a Clinical Specialty
  const service = clinicalServices.find((s) => s.slug === slug);
  if (service) {
    const rawData = serviceArticles[slug];
    const htmlContent = rawData?.rawHtml || `<p>${service.excerpt}</p>`;

    return (
      <ServiceLayout currentSlug={slug} service={service}>
        <div
          className="clinical-content"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </ServiceLayout>
    );
  }

  // 2. Check if it's a Blog / News Article
  const article = newsArticles.find((a) => a.slug === slug);
  if (article) {
    const rawPost = blogPosts[slug];
    const postBody = rawPost?.body || article.content;

    return (
      <div className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Back link */}
          <Link
            href="/news"
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#0e3b64] hover:text-[#1380be] mb-6 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl overflow-hidden">
            {/* Meta header */}
            <div className="flex items-center space-x-3 text-xs text-slate-400 mb-4">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-[#1380be]" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <User className="w-4 h-4 text-slate-400" />
                <span>{article.author}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight mb-6">
              {article.title}
            </h1>

            {/* Featured Image */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-sm">
              <Image
                src={article.image}
                alt={article.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>

            {/* Post Content */}
            <div
              className="prose prose-slate max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-headings:text-[#0e3b64] text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: postBody }}
            />

            {/* Article Footer & Consultation CTA */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {hospitalInfo.name} Editorial
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  {hospitalInfo.tagline}
                </div>
              </div>
              <Link
                href="/contact-us"
                className="bg-[#0e3b64] hover:bg-[#1380be] text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-colors"
              >
                Schedule an Eye Checkup
              </Link>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // Not found
  notFound();
}
