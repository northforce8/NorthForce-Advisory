import type { Metadata } from "next";
import { AnimatedSection } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Integritetspolicy", description: `Integritetspolicy för ${SITE_CONFIG.name}.` };

export default async function IntegritetspolicyPage() {
  const t = await getTranslations('privacy');

  const sections = [
    { title: t('s1Title'), content: t('s1Content') },
    { title: t('s2Title'), content: t('s2Content') },
    { title: t('s3Title'), content: t('s3Content') },
    { title: t('s4Title'), content: t('s4Content') },
    { title: t('s5Title'), content: t('s5Content') },
    { title: t('s6Title'), content: t('s6Content') },
    { title: t('s7Title'), content: t('s7Content') },
    { title: t('s8Title'), content: t('s8Content') },
    { title: t('s9Title'), content: t('s9Content') },
  ];

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
          <div className="border-t border-[#0F172A]/[0.06]">
            {sections.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 30}>
                <div className="py-10 lg:py-12 border-b border-[#0F172A]/[0.06]">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20">
                    <div className="lg:col-span-4">
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-sm font-bold text-[#0F172A]/10 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                        <h2 className="font-display text-lg font-bold text-[#0F172A]">{s.title}</h2>
                      </div>
                    </div>
                    <div className="lg:col-span-8"><p className="font-body text-[#4B5563] leading-relaxed max-w-2xl">{s.content}</p></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
