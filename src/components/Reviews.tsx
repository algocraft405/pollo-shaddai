"use client";

import { useLanguage } from "../lib/i18n";

export function Reviews() {
  const { t } = useLanguage();

  return (
    <section className="bg-chili px-5 py-16 text-cream">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {t.reviews.kicker}
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {t.reviews.quotes.map((quote) => (
            <blockquote key={quote.author} className="border-t border-gold/40 pt-6">
              <p className="font-display text-2xl leading-snug">“{quote.text}”</p>
              <footer className="mt-4 text-xs uppercase tracking-[0.2em] text-gold">
                {quote.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
