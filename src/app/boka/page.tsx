"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { useTranslations } from "next-intl";

export default function BokaPage() {
  const t = useTranslations('booking');
  const serviceOptions = [t('so1'), t('so2'), t('so3'), t('so4'), t('so5'), t('so6')];
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", preferredDate: "", message: "" });
  const [sent, setSent] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/boka", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setSent(true); } else { const data = await res.json().catch(() => ({})); setError(data.error || t('error')); }
    } catch { setSent(true); }
  };
  const input = "w-full px-0 py-4 border-0 border-b border-[#0F172A]/[0.1] font-body text-[#0F172A] placeholder:text-[#0F172A]/25 focus:outline-none focus:border-[#0F172A]/30 transition-colors duration-300 bg-transparent";

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

      <section className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                      <input type="tel" name="phone" required value={form.phone} onChange={handleChange} className={input} placeholder={t('phone')} />
                      <input type="text" name="company" value={form.company} onChange={handleChange} className={input} placeholder={t('company')} />
                    </div>
                    <select name="service" required value={form.service} onChange={handleChange} className={`${input} ${form.service === "" ? "text-[#0F172A]/25" : ""}`}>
                      <option value="" disabled>{t('service')}</option>
                      {serviceOptions.map((o) => (<option key={o} value={o}>{o}</option>))}
                    </select>
                    <input type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} className={`${input} ${form.preferredDate === "" ? "text-[#0F172A]/25" : ""}`} />
                    <textarea name="message" rows={3} value={form.message} onChange={handleChange} className={`${input} resize-none`} placeholder={t('message')} />
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
                <div className="p-8 lg:p-10" style={{ backgroundColor: "#F5F0EB" }}>
                  <h3 className="font-body text-[11px] font-semibold tracking-[0.3em] uppercase text-[#0F172A]/40 mb-8">{t('howItWorks')}</h3>
                  {[
                    { step: "01", title: t('step1Title'), desc: t('step1Desc') },
                    { step: "02", title: t('step2Title'), desc: t('step2Desc') },
                    { step: "03", title: t('step3Title'), desc: t('step3Desc') },
                  ].map((item) => (
                    <div key={item.step} className="py-6 border-t border-[#0F172A]/[0.08] first:border-t-0">
                      <div className="flex items-baseline gap-5">
                        <span className="font-display text-sm font-bold text-[#0F172A]/15 tabular-nums w-6 flex-shrink-0">{item.step}</span>
                        <div>
                          <h4 className="font-display text-base font-semibold text-[#0F172A]">{item.title}</h4>
                          <p className="mt-2 font-body text-sm text-[#4B5563] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
