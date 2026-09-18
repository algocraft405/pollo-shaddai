"use client";

import Link from "next/link";
import { locations } from "../data/locations";
import { useLanguage } from "../lib/i18n";

export function LocationsPreview() {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-cream px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-chili">
          {t.locations.kicker}
        </p>
        <h2 className="font-display mt-2 text-4xl text-ink sm:text-5xl">{t.locations.title}</h2>
        <p className="mt-3 text-sm text-ink/60">{t.locations.dineIn}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location) => (
            <article
              key={location.id}
              className="rounded-3xl border border-ink/10 bg-white p-6 shadow-[0_18px_40px_-30px_rgba(26,15,12,0.5)]"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xs uppercase tracking-[0.22em] text-gold-deep">
                  {location.neighborhood}
                </p>
                {location.badge && (
                  <span className="rounded-full bg-gold px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-ink">
                    {lang === "es" ? location.badgeEs : location.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display mt-2 text-3xl text-ink">{location.city}</h3>
              <p className="mt-3 text-sm text-ink/70">
                {location.address}
                <br />
                {location.cityState}
              </p>
              {location.phoneHref && location.phone && (
                <a href={location.phoneHref} className="mt-3 block text-sm font-semibold text-chili">
                  {location.phone}
                </a>
              )}
              <ul className="mt-4 space-y-1 text-sm text-ink/65">
                {location.hours.map((row) => (
                  <li key={`${row.days}-${row.time}`}>
                    {lang === "es" ? row.daysEs : row.days} ·{" "}
                    {lang === "es" && row.timeEs ? row.timeEs : row.time}
                  </li>
                ))}
              </ul>
              {location.note && (
                <p className="mt-4 text-sm leading-relaxed text-ink/60">
                  {lang === "es" ? location.noteEs : location.note}
                </p>
              )}
              <div className="mt-6 flex flex-wrap gap-2">
                {location.orderUrl && (
                  <a
                    href={location.orderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-chili px-4 py-2 text-xs font-semibold text-cream hover:bg-chili-hot"
                  >
                    {t.locations.order}
                  </a>
                )}
                <Link
                  href={`/locations#${location.id}`}
                  className="rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold text-ink hover:border-chili hover:text-chili"
                >
                  {t.locations.directions}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
