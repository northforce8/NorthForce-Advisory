import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations('meta');
  return { title: t('omTitle'), description: t('omDesc') };
}

export default async function OmPage() {
  const t = await getTranslations('about');

  const values = [
    { number: "01", title: t('val1Title'), description: t('val1Desc') },
    { number: "02", title: t('val2Title'), description: t('val2Desc') },
    { number: "03", title: t('val3Title'), description: t('val3Desc') },
    { number: "04", title: t('val4Title'), description: t('val4Desc') },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: t('label'), href: '/om' }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "NorthForce Advisory",
          description: t('personDesc'),
          url: "https://northforceadvisory.se/om",
          parentOrganization: {
            "@type": "Organization",
            name: "NorthForce Advisory",
            url: "https://northforceadvisory.se",
          },
          knowsAbout: [
            "Strategic Business Development",
            "Digital Transformation",
            "Leadership Coaching",
            "Change Management",
            "Organizational Development",
          ],
        }) }}
      />
      <section className="py-28 lg:py-36 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <AnimatedSection>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-[#0F172A]/15" />
                  <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">{t('label')}</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#0F172A] leading-[1.08] tracking-tight">{t('name')}</h1>
                <p className="mt-8 font-body text-lg text-[#4B5563] max-w-xl leading-relaxed">
                  {t('p1')}
                </p>
                <p className="mt-6 font-body text-lg text-[#4B5563] max-w-xl leading-relaxed">
                  {t('p2')}
                </p>
                <Link href="/boka" className="inline-flex items-center mt-10 font-body text-sm font-semibold tracking-wide text-[#0F172A] group">
                  <span className="border-b border-[#0F172A]/20 group-hover:border-[#0F172A] transition-colors duration-300">{t('bookLink')}</span>
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden -mx-4 sm:-mx-6 lg:ml-0 lg:-mr-[max(2rem,calc((100vw-80rem)/2+2rem))]">
                <Image src="/advisors.jpg" alt="NorthForce Advisory — Våra rådgivare på expedition" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" quality={85} />
                <div className="absolute inset-0 bg-[#0F172A]/25" />
                <div className="absolute inset-0 flex items-center justify-center px-10 lg:px-14">
                  <blockquote className="font-display text-2xl sm:text-3xl lg:text-[2rem] text-white font-bold leading-[1.2] tracking-tight text-center">
                    &ldquo;{t('advisorsQuote')}&rdquo;
                  </blockquote>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36" style={{ backgroundColor: "#F5F0EB" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <AnimatedSection>
                <div className="sticky top-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-10 bg-[#0F172A]/15" />
                    <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">{t('storyLabel')}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] leading-[1.12] tracking-tight">{t('storyTitle')}</h2>
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-8">
              <AnimatedSection delay={100}>
                <div className="space-y-8 font-body text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                  <p>{t('storyP1')}</p>
                  <p>{t('storyP2')}</p>
                  <p>{t('storyP3')}</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials section */}
      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-4">
              <AnimatedSection>
                <div className="sticky top-28">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-10 bg-[#0F172A]/15" />
                    <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">{t('credLabel')}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-[#0F172A] leading-[1.12] tracking-tight">{t('credTitle')}</h2>
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-8">
              <AnimatedSection delay={100}>
                <div className="space-y-10 max-w-2xl">
                  <div>
                    <h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-4">{t('credExpLabel')}</h3>
                    <ul className="space-y-3">
                      {[t('credExp1'), t('credExp2'), t('credExp3'), t('credExp4')].map((item) => (
                        <li key={item} className="flex items-start gap-4 font-body text-[#4B5563] leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/20 mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-4">{t('credSpecLabel')}</h3>
                    <ul className="space-y-3">
                      {[t('credSpec1'), t('credSpec2'), t('credSpec3'), t('credSpec4')].map((item) => (
                        <li key={item} className="flex items-start gap-4 font-body text-[#4B5563] leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#0F172A]/20 mt-2.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#0F172A]/15" />
                <span className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40">{t('valuesLabel')}</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#0F172A] leading-[1.12] tracking-tight">{t('valuesTitle')}</h2>
            </div>
          </AnimatedSection>
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0F172A]/[0.08]">
            {values.map((v, i) => (
              <AnimatedSection key={v.number} delay={i * 100}>
                <div className="bg-white p-10 lg:p-12 h-full">
                  <span className="font-display text-sm font-semibold text-[#0F172A]/15 tracking-wider">{v.number}</span>
                  <h3 className="mt-5 font-display text-xl lg:text-2xl font-bold text-[#0F172A] leading-tight">{v.title}</h3>
                  <p className="mt-4 font-body text-[#4B5563] leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
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
                <Link href="/boka" className="inline-flex items-center justify-center mt-12 px-10 py-5 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">
                  {t('ctaCta')} <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
