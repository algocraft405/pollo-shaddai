"use client";

import Image from "next/image";
import Link from "next/link";
import { TextilePattern } from "./TextilePattern";
import { useLanguage } from "../lib/i18n";

export function StoryBand() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-ink">
      <TextilePattern className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/3 opacity-70 lg:block" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
          <Image
            src="/story-chicken.jpg"
            alt="Grilled and fried chicken platter"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="relative max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {t.story.kicker}
          </p>
          <h2 className="font-display mt-3 text-4xl text-cream sm:text-5xl">
            {t.story.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-cream/75">{t.story.body}</p>
          <p className="mt-4 text-base leading-relaxed text-cream/75">{t.story.body2}</p>
          <Link
            href="/about"
            className="mt-8 inline-flex rounded-full border border-gold/60 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold hover:text-ink"
          >
            {t.story.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
