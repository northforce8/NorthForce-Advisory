"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { SITE_CONFIG } from "@/lib/constants";
import { useTranslations } from "next-intl";

export default function KontaktPage() {
  const t = useTranslations('contact');
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/kontakt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, consent: true }) });
      if (res.ok) { setSent(true); } else { const data = await res.json().catch(() => ({})); setError(data.error || t('error')); }
    } catch { setSent(true); }
  };
  const input = "w-full px-0 py-4 border-0 border-b border-[#0F172A]/[0.1] font-body text-[#0F172A] placeholder:text-[#0F172A]/25 focus:outline-none focus:border-[#0F172A]/30 transition-colors duration-300 bg-transparent";

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
          <div className="border-t border-[#0F172A]/[0.06] pt-16 lg:pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              <div className="lg:col-span-7">
                <AnimatedSection>
                  {sent ? (
                    <div className="py-20 text-center">
                      <h2 className="font-display text-3xl font-bold text-[#0F172A] tracking-tight">{t('thankYouTitle')}</h2>
                      <p className="mt-6 font-body text-lg text-[#4B5563] max-w-md mx-auto leading-relaxed">{t('thankYouDesc')}</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                        <input type="text" name="name" required value={form.name} onChange={handleChange} className={input} placeholder={t('name')} />
                        <input type="email" name="email" required value={form.email} onChange={handleChange} className={input} placeholder={t('email')} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={input} placeholder={t('phone')} />
                        <input type="text" name="company" value={form.company} onChange={handleChange} className={input} placeholder={t('company')} />
                      </div>
                      <textarea name="message" required rows={4} value={form.message} onChange={handleChange} className={`${input} resize-none`} placeholder={t('message')} />
                      <div className="pt-8">
                        <button type="submit" className="inline-flex items-center px-10 py-5 bg-[#0F172A] text-white font-body text-sm font-semibold tracking-wide rounded-none hover:bg-[#0F172A]/90 transition-all duration-300">
                          {t('submit')} <ArrowRight className="ml-3 w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </AnimatedSection>
              </div>

              <div className="lg:col-span-5">
                <AnimatedSection delay={200}>
                  <div className="space-y-12">
                    <div>
                      <h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-6">{t('infoLabel')}</h3>
                      <ul className="space-y-6">
                        <li className="flex items-start gap-4">
                          <Mail className="w-5 h-5 text-[#0F172A]/20 mt-0.5" />
                          <div>
                            <span className="block font-body text-sm text-[#0F172A]/30 mb-1">{t('emailLabel')}</span>
                            <a href={`mailto:${SITE_CONFIG.email}`} className="font-body text-[#0F172A] hover:text-[#0F172A]/60 transition-colors duration-200">{SITE_CONFIG.email}</a>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <MapPin className="w-5 h-5 text-[#0F172A]/20 mt-0.5" />
                          <div>
                            <span className="block font-body text-sm text-[#0F172A]/30 mb-1">{t('locationLabel')}</span>
                            <span className="font-body text-[#0F172A]">{SITE_CONFIG.location}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="p-8 lg:p-10 bg-[#0F172A] text-white">
                      <h3 className="font-display text-xl font-bold mb-4">{t('preferCallTitle')}</h3>
                      <p className="font-body text-white/45 text-sm leading-relaxed mb-8">{t('preferCallDesc')}</p>
                      <Link href="/boka" className="inline-flex items-center px-8 py-4 bg-white text-[#0F172A] font-body text-sm font-semibold tracking-wide rounded-none hover:bg-white/90 transition-all duration-300">
                        {t('preferCallCta')} <ArrowRight className="ml-3 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
