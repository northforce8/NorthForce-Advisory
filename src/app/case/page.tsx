import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { sanityFetch, queries } from "@/lib/sanity";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Case", description: "Se hur Blomsnes Development har hjälpt företag växa genom strategisk affärsutveckling och coaching." };

/* ── Sanity case type ── */

interface SanityCase {
  slug?: string;
  title: string;
  client?: string;
  industry?: string;
  excerpt?: string;
  tags?: string[];
  results?: string[];
}

/* ── Normalize Sanity case to display format ── */

function normalizeCase(c: SanityCase, index: number) {
  return {
    number: String(index + 1).padStart(2, "0"),
    category: c.industry || "",
    title: c.title,
    challenge: c.excerpt || "",
    approach: "",
    results: c.results || [],
  };
}

export default async function CasePage() {
  const t = await getTranslations('cases');

  /* ── Hardcoded fallback data (used when Sanity is not configured) ── */

  const fallbackCases = [
    { number: "01", category: t('c1Category'), title: t('c1Title'), challenge: t('c1Challenge'), approach: t('c1Approach'), results: [t('c1r1'), t('c1r2'), t('c1r3'), t('c1r4')] },
    { number: "02", category: t('c2Category'), title: t('c2Title'), challenge: t('c2Challenge'), approach: t('c2Approach'), results: [t('c2r1'), t('c2r2'), t('c2r3'), t('c2r4')] },
    { number: "03", category: t('c3Category'), title: t('c3Title'), challenge: t('c3Challenge'), approach: t('c3Approach'), results: [t('c3r1'), t('c3r2'), t('c3r3'), t('c3r4')] },
  ];

  let cases = fallbackCases;

  /* Try Sanity — gracefully fall back to hardcoded data */
  try {
    const sanityCases = await sanityFetch<SanityCase[]>({
      query: queries.allCases,
      params: { lang: "sv" },
      tags: ["cases"],
    });
    if (sanityCases && sanityCases.length > 0) {
      cases = sanityCases.map(normalizeCase);
    }
  } catch {
    /* Sanity unavailable — use fallback data */
  }

  return (
    <>
      <section className="py-28 lg:py-36 bg-[#0F172A] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6"><div className="h-px w-12 bg-white/20" /><span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40">{t('label')}</span></div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight">{t('title1')}<br />{t('title2')}</h1>
              <p className="mt-8 font-body text-lg text-white/50 max-w-2xl leading-relaxed">{t('desc')}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {cases.map((c, i) => (
            <AnimatedSection key={c.number} delay={i * 60}>
              <article className="py-20 lg:py-28 border-b border-[#0F172A]/[0.06] last:border-b-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                  <div className="lg:col-span-5">
                    <span className="font-display text-sm font-semibold text-[#0F172A]/15 tracking-wider">{c.number}</span>
                    <span className="ml-4 font-body text-[11px] font-semibold tracking-[0.25em] uppercase text-[#0F172A]/30">{c.category}</span>
                    <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold text-[#0F172A] leading-[1.12] tracking-tight">{c.title}</h2>
                  </div>
                  <div className="lg:col-span-7 space-y-10">
                    {c.challenge && (
                      <div><h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-3">{t('challenge')}</h3><p className="font-body text-[#4B5563] leading-relaxed">{c.challenge}</p></div>
                    )}
                    {c.approach && (
                      <div><h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-3">{t('approach')}</h3><p className="font-body text-[#4B5563] leading-relaxed">{c.approach}</p></div>
                    )}
                    {c.results.length > 0 && (
                      <div className="p-8 lg:p-10" style={{ backgroundColor: "#F5F0EB" }}>
                        <h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-6">{t('results')}</h3>
                        <ul className="space-y-4">{c.results.map((r) => (<li key={r} className="flex items-start gap-4 font-body text-[#4B5563]"><div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/20 mt-2.5 flex-shrink-0" /><span>{r}</span></li>))}</ul>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-[#0F172A] px-8 py-20 sm:px-16 sm:py-24 lg:px-24 lg:py-28 overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">{t('ctaTitle')}</h2>
                <p className="mt-8 font-body text-lg text-white/45 leading-relaxed max-w-xl">{t('ctaDesc')}</p>
                <Link href="/boka" className="inline-flex items-center justify-center mt-12 px-10 py-5 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">{t('ctaCta')} <ArrowRight className="ml-3 w-4 h-4" /></Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
