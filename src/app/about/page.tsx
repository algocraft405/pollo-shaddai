"use client";

import Image from "next/image";
import { TextilePattern } from "../../components/TextilePattern";
import { useLanguage } from "../../lib/i18n";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-cream">
      <section className="relative overflow-hidden bg-ink px-5 py-20 text-cream">
        <TextilePattern className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 opacity-50 lg:block" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {t.aboutPage.kicker}
          </p>
          <h1 className="font-display mt-3 text-5xl sm:text-6xl">{t.aboutPage.title}</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image
            src="/about-chicken.jpg"
            alt="Fried chicken close-up"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-ink/75">
          <p>{t.aboutPage.p1}</p>
          <p>{t.aboutPage.p2}</p>
          <p>{t.aboutPage.p3}</p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl text-ink">{t.aboutPage.specialtiesTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {t.aboutPage.specialties.map((item) => (
              <article key={item.title} className="border-t-2 border-gold pt-5">
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
