"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-ink">
      <Image
        src="/hero-chicken.jpg"
        alt="Golden fried chicken"
        fill
        priority
        className="object-cover object-center opacity-55"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/25" />
      <div className="pointer-events-none absolute bottom-0 left-[54%] z-[1] hidden h-[90%] w-[min(38vw,460px)] md:block">
        <Image
          src="/hero-chef.png"
          alt="Chef holding a box of fried chicken"
          fill
          priority
          unoptimized
          className="object-contain object-bottom drop-shadow-[0_18px_28px_rgba(0,0,0,0.35)]"
          sizes="460px"
        />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-28 md:justify-center md:pb-24">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold">
          {t.hero.kicker}
        </p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[0.95] text-cream sm:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          {t.hero.subtitle}
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link
            href="/menu"
            className="rounded-full bg-chili px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-chili/40 transition hover:bg-chili-hot"
          >
            {t.hero.menuCta}
          </Link>
          <Link
            href="/locations"
            className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold"
          >
            {t.hero.orderCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
