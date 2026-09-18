"use client";

import Link from "next/link";
import { locations } from "../data/locations";
import { useLanguage } from "../lib/i18n";

export function ClosingCta() {
  const { t } = useLanguage();
  const cincinnati = locations[0];

  return (
    <section className="bg-ink px-5 py-20 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-4xl text-cream sm:text-5xl">{t.cta.title}</h2>
        <p className="mt-4 text-cream/70">{t.cta.body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={cincinnati.phoneHref}
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-gold-deep"
          >
            {t.cta.call}
          </a>
          <Link
            href="/locations"
            className="rounded-full border border-cream/25 px-6 py-3 text-sm font-semibold text-cream hover:border-gold hover:text-gold"
          >
            {t.nav.locations}
          </Link>
        </div>
      </div>
    </section>
  );
}
