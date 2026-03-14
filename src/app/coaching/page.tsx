import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations('meta');
  return { title: t('coachingTitle'), description: t('coachingDesc') };
}

export default async function CoachingPage() {
  const t = await getTranslations('coaching');

  const areas = [
    { number: "01", title: t('a1Title'), description: t('a1Desc') },
    { number: "02", title: t('a2Title'), description: t('a2Desc') },
    { number: "03", title: t('a3Title'), description: t('a3Desc') },
    { number: "04", title: t('a4Title'), description: t('a4Desc') },
  ];

  const forWhom = [t('fw1'), t('fw2'), t('fw3'), t('fw4'), t('fw5')];

  const process = [
    { step: "01", title: t('p1Title'), desc: t('p1Desc') },
    { step: "02", title: t('p2Title'), desc: t('p2Desc') },
    { step: "03", title: t('p3Title'), desc: t('p3Desc') },
    { step: "04", title: t('p4Title'), desc: t('p4Desc') },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: t('label'), href: '/coaching' }]} />
      <section className="py-28 lg:py-36 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6"><div className="h-px w-10 bg-[#0F172A]/15" /><span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">{t('label')}</span></div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.08] tracking-tight">{t('title1')}<br />{t('title2')}</h1>
                <p className="mt-8 font-body text-lg text-[#4B5563] max-w-xl leading-relaxed">{t('desc')}</p>
                <Link href="/boka" className="inline-flex items-center mt-10 font-body text-sm font-semibold tracking-wide text-[#0F172A] group">
                  <span className="border-b border-[#0F172A]/20 group-hover:border-[#0F172A] transition-colors duration-300">{t('bookLink')}</span>
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden -mx-4 sm:-mx-6 lg:ml-0 lg:-mr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
                <Image src="/leadership.jpg" alt="Ledarskapscoaching" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" quality={85} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/10 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection><div className="max-w-2xl"><div className="flex items-center gap-3 mb-6"><div className="h-px w-10 bg-[#0F172A]/15" /><span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">{t('areasLabel')}</span></div><h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0F172A] leading-[1.12] tracking-tight">{t('areasTitle')}</h2></div></AnimatedSection>
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0F172A]/[0.08]">
            {areas.map((a, i) => (
              <AnimatedSection key={a.number} delay={i * 100}>
                <div className="p-10 lg:p-12 h-full" style={{ backgroundColor: "#F5F0EB" }}>
                  <span className="font-display text-sm font-semibold text-[#0F172A]/15 tracking-wider">{a.number}</span>
                  <h3 className="mt-5 font-display text-xl lg:text-2xl font-bold text-[#0F172A] leading-tight">{a.title}</h3>
                  <p className="mt-4 font-body text-[#4B5563] leading-relaxed">{a.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6"><div className="h-px w-10 bg-[#0F172A]/15" /><span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">{t('forWhomLabel')}</span></div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] leading-[1.12] tracking-tight">{t('forWhomTitle1')}<br />{t('forWhomTitle2')}</h2>
                <ul className="mt-8 space-y-4">{forWhom.map((item) => (<li key={item} className="flex items-start gap-4"><div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/20 mt-2.5 flex-shrink-0" /><span className="font-body text-[#4B5563]">{item}</span></li>))}</ul>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="p-8 lg:p-10" style={{ backgroundColor: "#F5F0EB" }}>
                <h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-8">{t('processTitle')}</h3>
                {process.map((p) => (
                  <div key={p.step} className="py-6 border-t border-[#0F172A]/[0.08] first:border-t-0">
                    <div className="flex items-baseline gap-5">
                      <span className="font-display text-sm font-bold text-[#0F172A]/15 tabular-nums w-6 flex-shrink-0">{p.step}</span>
                      <div><h4 className="font-display text-base font-semibold text-[#0F172A]">{p.title}</h4><p className="mt-2 font-body text-sm text-[#4B5563] leading-relaxed">{p.desc}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="relative py-28 lg:py-36 min-h-[90vh] overflow-hidden flex items-end">
        <Image src="/track.jpg" alt="Löparbana — ta det första steget" fill className="object-cover object-[30%_60%]" sizes="100vw" quality={85} />
        <div className="absolute inset-0 bg-[#0F172A]/65" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">{t('ctaTitle1')}<br />{t('ctaTitle2')}</h2>
              <p className="mt-8 font-body text-lg text-white/50 leading-relaxed max-w-xl">{t('ctaDesc')}</p>
              <Link href="/boka" className="inline-flex items-center justify-center mt-12 px-10 py-5 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">{t('ctaCta')} <ArrowRight className="ml-3 w-4 h-4" /></Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
