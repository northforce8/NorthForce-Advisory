import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations('home');

  const capabilities = [
    {
      number: "01",
      title: t('cap1Title'),
      description: t('cap1Desc'),
      href: "/tjanster",
    },
    {
      number: "02",
      title: t('cap2Title'),
      description: t('cap2Desc'),
      href: "/tjanster",
    },
    {
      number: "03",
      title: t('cap3Title'),
      description: t('cap3Desc'),
      href: "/coaching",
    },
  ];

  const methodology = [
    { phase: t('meth1Phase'), text: t('meth1Text') },
    { phase: t('meth2Phase'), text: t('meth2Text') },
    { phase: t('meth3Phase'), text: t('meth3Text') },
    { phase: t('meth4Phase'), text: t('meth4Text') },
  ];

  return (
    <>
      {/* ═══ A. HERO ═══ */}
      <section className="relative -mt-20 h-[100svh] min-h-[720px] flex items-center overflow-hidden">
        <Image src="/hero.jpg" alt="Nordisk arkitektur — strategisk miljö" fill priority className="object-cover object-center" sizes="100vw" quality={90} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/35 to-[#0F172A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/30 to-transparent" />

        <div className="relative z-10 w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-white/30" />
                  <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-white/60">{t('heroLabel')}</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.04] tracking-tight">
                  {t('heroTitle1')}<br />{t('heroTitle2')}
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={300}>
                <p className="mt-8 font-body text-lg md:text-xl text-white/65 max-w-2xl leading-relaxed">
                  {t('heroDesc')}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={450}>
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Link href="/boka" className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">
                    {t('heroCta1')} <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                  <Link href="/case" className="inline-flex items-center justify-center px-8 py-4 border border-white/25 text-white font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/[0.06] transition-all duration-300">
                    {t('heroCta2')}
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white" />
      </section>

      {/* ═══ B. STRATEGIC POSITIONING ═══ */}
      <section className="py-28 lg:py-36 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#0F172A]/15" />
                  <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">{t('aboutLabel')}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0F172A] leading-[1.12] tracking-tight">
                  {t('aboutTitle1')}<br />{t('aboutTitle2')}
                </h2>
                <p className="mt-8 font-body text-lg text-[#4B5563] max-w-xl leading-relaxed">
                  {t('aboutP1')}
                </p>
                <p className="mt-6 font-body text-lg text-[#4B5563] max-w-xl leading-relaxed">
                  {t('aboutP2')}
                </p>
                <Link href="/om" className="inline-flex items-center mt-10 font-body text-sm font-semibold tracking-wide text-[#0F172A] group">
                  <span className="border-b border-[#0F172A]/20 group-hover:border-[#0F172A] transition-colors duration-300">{t('aboutLink')}</span>
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden -mx-4 sm:-mx-6 lg:ml-0 lg:-mr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
                <Image src="/strategy.jpg" alt="Betongvägg — nordisk industriell estetik" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" quality={85} />
                <div className="absolute inset-0 bg-[#0F172A]/20" />
                <div className="absolute inset-0 flex items-center justify-center px-10 lg:px-14">
                  <blockquote className="font-display text-2xl sm:text-3xl lg:text-[2rem] text-white font-bold leading-[1.2] tracking-tight text-center">
                    &ldquo;{t('aboutQuote')}&rdquo;
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══ C. CAPABILITIES ═══ */}
      <section className="py-28 lg:py-36" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0F172A]/15" />
                <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">{t('capLabel')}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0F172A] leading-[1.12] tracking-tight">
                {t('capTitle')}
              </h2>
            </div>
          </AnimatedSection>
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0F172A]/[0.08]">
            {capabilities.map((s, i) => (
              <AnimatedSection key={s.number} delay={i * 120}>
                <Link href={s.href} className="group block h-full p-10 lg:p-12 hover:bg-white transition-colors duration-500" style={{ backgroundColor: "#F5F0EB" }}>
                  <span className="font-display text-sm font-semibold text-[#0F172A]/15 tracking-wider">{s.number}</span>
                  <h3 className="mt-6 font-display text-xl lg:text-2xl font-bold text-[#0F172A] leading-tight">{s.title}</h3>
                  <p className="mt-4 font-body text-[#4B5563] leading-relaxed">{s.description}</p>
                  <div className="mt-8 flex items-center font-body text-sm font-semibold text-[#0F172A]/40 group-hover:text-[#0F172A] transition-colors duration-300">
                    <span className="border-b border-current/30 group-hover:border-current transition-colors duration-300">{t('capExplore')}</span>
                    <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ D. METHODOLOGY ═══ */}
      <section className="py-28 lg:py-36 bg-[#0F172A] text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-white/20" />
                  <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-white/40">{t('methLabel')}</span>
                </div>
                <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight">
                  {t('methTitle1')}<br />{t('methTitle2')}
                </h2>
                <p className="mt-8 font-body text-lg text-white/50 max-w-lg leading-relaxed">
                  {t('methDesc')}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className="mt-12 relative aspect-[4/3] overflow-hidden -mx-4 sm:-mx-6 lg:mr-0 lg:-ml-[max(2rem,calc((100vw-80rem)/2+2rem))]">
                  <Image src="/leadership.jpg" alt="Vatten under molnig himmel — transformation" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" quality={85} />
                  <div className="absolute inset-0 bg-[#0F172A]/30" />
                  <div className="absolute inset-0 flex items-center justify-center px-10 lg:px-14">
                    <blockquote className="font-display text-2xl sm:text-3xl lg:text-[2rem] text-white font-bold leading-[1.2] tracking-tight text-center">
                      &ldquo;{t('methQuote')}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:pt-4">
              {methodology.map((step, i) => (
                <AnimatedSection key={step.phase} delay={i * 100}>
                  <div className="py-8 border-t border-white/[0.08]">
                    <div className="flex items-baseline gap-6">
                      <span className="font-display text-sm font-bold text-white/15 tabular-nums w-8 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">{step.phase}</h3>
                        <p className="mt-3 font-body text-white/45 leading-relaxed max-w-md">{step.text}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
              <AnimatedSection delay={500}>
                <div className="mt-10 pl-14">
                  <Link href="/strategi-till-resultat" className="inline-flex items-center font-body text-sm font-semibold tracking-wide text-white group">
                    <span className="border-b border-white/25 group-hover:border-white transition-colors duration-300">{t('methLink')}</span>
                    <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ E. CTA ═══ */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative bg-[#0F172A] px-8 py-20 sm:px-16 sm:py-24 lg:px-24 lg:py-28 overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
              <div className="relative z-10 max-w-2xl">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.08] tracking-tight">
                  {t('ctaTitle')}
                </h2>
                <p className="mt-8 font-body text-lg text-white/45 leading-relaxed max-w-xl">
                  {t('ctaDesc')}
                </p>
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                  <Link href="/boka" className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">
                    {t('ctaCta1')} <ArrowRight className="ml-3 w-4 h-4" />
                  </Link>
                  <Link href="/kontakt" className="inline-flex items-center justify-center px-10 py-5 border border-white/20 text-white font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/[0.04] transition-all duration-300">
                    {t('ctaCta2')}
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
