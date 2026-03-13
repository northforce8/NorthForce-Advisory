import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = { title: "Tjänster", description: "Strategisk affärsutveckling, digital transformation, coaching och ledarskap från Blomsnes Development." };

export default async function TjansterPage() {
  const t = await getTranslations('services');

  const services = [
    { number: "01", title: t('s1Title'), description: t('s1Desc'), features: [t('s1f1'), t('s1f2'), t('s1f3'), t('s1f4')] },
    { number: "02", title: t('s2Title'), description: t('s2Desc'), features: [t('s2f1'), t('s2f2'), t('s2f3'), t('s2f4')] },
    { number: "03", title: t('s3Title'), description: t('s3Desc'), features: [t('s3f1'), t('s3f2'), t('s3f3'), t('s3f4')] },
    { number: "04", title: t('s4Title'), description: t('s4Desc'), features: [t('s4f1'), t('s4f2'), t('s4f3'), t('s4f4')] },
    { number: "05", title: t('s5Title'), description: t('s5Desc'), features: [t('s5f1'), t('s5f2'), t('s5f3'), t('s5f4')] },
    { number: "06", title: t('s6Title'), description: t('s6Desc'), features: [t('s6f1'), t('s6f2'), t('s6f3'), t('s6f4')] },
  ];

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
          {services.map((s, i) => (
            <AnimatedSection key={s.number} delay={i * 40}>
              <div className="py-20 lg:py-24 border-b border-[#0F172A]/[0.06] last:border-b-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                  <div className="lg:col-span-7">
                    <span className="font-display text-sm font-semibold text-[#0F172A]/15 tracking-wider">{s.number}</span>
                    <h2 className="mt-4 font-display text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-[#0F172A] leading-[1.12] tracking-tight">{s.title}</h2>
                    <p className="mt-6 font-body text-lg text-[#4B5563] leading-relaxed max-w-xl">{s.description}</p>
                  </div>
                  <div className="lg:col-span-5">
                    <div className="p-8 lg:p-10" style={{ backgroundColor: "#F5F0EB" }}>
                      <h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-6">{t('includes')}</h3>
                      <ul className="space-y-4">{s.features.map((f) => (<li key={f} className="flex items-start gap-4 font-body text-[#4B5563]"><div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/20 mt-2.5 flex-shrink-0" /><span>{f}</span></li>))}</ul>
                    </div>
                  </div>
                </div>
              </div>
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
