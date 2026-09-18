"use client";

import { useLanguage } from "../lib/i18n";

export function Marquee() {
  const { t } = useLanguage();
  const text = `${t.marquee}${t.marquee}`;

  return (
    <div className="overflow-hidden border-y border-gold/30 bg-chili py-3">
      <p className="animate-marquee whitespace-nowrap text-xs font-semibold uppercase tracking-[0.35em] text-cream">
        {text}
      </p>
    </div>
  );
}
