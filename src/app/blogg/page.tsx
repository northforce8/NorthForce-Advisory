import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { formatDate } from "@/lib/utils";
import { sanityFetch, queries } from "@/lib/sanity";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Blogg", description: "Insikter om affärsutveckling, ledarskap och tillväxt från Blomsnes Development." };

/* ── Sanity post type ── */

interface SanityPost {
  slug?: string;
  title: string;
  excerpt: string;
  category?: string;
  publishedAt?: string;
  readTime?: string;
}

/* ── Normalize Sanity post to display format ── */

function normalizePost(post: SanityPost) {
  return {
    title: post.title,
    excerpt: post.excerpt || "",
    date: post.publishedAt || "",
    readTime: post.readTime || "5 min",
    category: post.category || "",
    slug: post.slug,
  };
}

export default async function BloggPage() {
  const t = await getTranslations('blog');
  const tc = await getTranslations('common');

  /* ── Hardcoded fallback data (used when Sanity is not configured) ── */

  const fallbackFeatured = { title: t('featuredTitle'), excerpt: t('featuredExcerpt'), date: "2025-01-15", readTime: "6 min", category: t('featuredCategory') };

  const fallbackPosts = [
    { title: t('post1Title'), excerpt: t('post1Excerpt'), date: "2024-12-20", readTime: "5 min", category: t('post1Category') },
    { title: t('post2Title'), excerpt: t('post2Excerpt'), date: "2024-11-28", readTime: "7 min", category: t('post2Category') },
    { title: t('post3Title'), excerpt: t('post3Excerpt'), date: "2024-11-05", readTime: "8 min", category: t('post3Category') },
    { title: t('post4Title'), excerpt: t('post4Excerpt'), date: "2024-10-12", readTime: "6 min", category: t('post4Category') },
    { title: t('post5Title'), excerpt: t('post5Excerpt'), date: "2024-09-18", readTime: "7 min", category: t('post5Category') },
  ];

  let featured = fallbackFeatured;
  let posts = fallbackPosts;

  /* Try Sanity — gracefully fall back to hardcoded data */
  try {
    const sanityPosts = await sanityFetch<SanityPost[]>({
      query: queries.allPosts,
      params: { lang: "sv" },
      tags: ["posts"],
    });
    if (sanityPosts && sanityPosts.length > 0) {
      featured = normalizePost(sanityPosts[0]);
      posts = sanityPosts.slice(1).map(normalizePost);
    }
  } catch {
    /* Sanity unavailable — use fallback data */
  }

  return (
    <>
      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6"><div className="h-px w-12 bg-[#0F172A]/15" /><span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">{t('label')}</span></div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.08] tracking-tight">{t('title')}</h1>
              <p className="mt-8 font-body text-lg text-[#4B5563] max-w-2xl leading-relaxed">{t('desc')}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-28 lg:pb-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="border-t border-[#0F172A]/[0.06] pt-16 lg:pt-20">
              <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/30">{featured.category}</span>
              <h2 className="mt-4 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] leading-[1.12] tracking-tight max-w-3xl">{featured.title}</h2>
              <p className="mt-6 font-body text-lg text-[#4B5563] leading-relaxed max-w-2xl">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 font-body text-sm text-[#0F172A]/30"><time dateTime={featured.date}>{formatDate(featured.date)}</time><span className="w-1 h-1 rounded-full bg-[#0F172A]/15" /><span>{featured.readTime} {tc('reading')}</span></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.map((post, i) => (
            <AnimatedSection key={post.title} delay={i * 50}>
              <article className="py-10 lg:py-12 border-t border-[#0F172A]/[0.08] first:border-t-0 group cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-baseline">
                  <div className="lg:col-span-2"><time dateTime={post.date} className="font-body text-sm text-[#0F172A]/30">{formatDate(post.date)}</time><span className="block font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0F172A]/20 mt-1">{post.category}</span></div>
                  <div className="lg:col-span-7"><h3 className="font-display text-xl lg:text-2xl font-bold text-[#0F172A] leading-tight group-hover:text-[#0F172A]/60 transition-colors duration-300">{post.title}</h3><p className="mt-3 font-body text-[#4B5563] leading-relaxed max-w-lg">{post.excerpt}</p></div>
                  <div className="lg:col-span-3 flex items-center lg:justify-end"><span className="font-body text-sm text-[#0F172A]/30">{post.readTime} {tc('reading')}</span></div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-[#0F172A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">{t('ctaTitle')}</h2>
              <p className="mt-8 font-body text-lg text-white/45 leading-relaxed max-w-xl">{t('ctaDesc')}</p>
              <Link href="/kontakt" className="inline-flex items-center justify-center mt-12 px-10 py-5 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">{t('ctaCta')} <ArrowRight className="ml-3 w-4 h-4" /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
