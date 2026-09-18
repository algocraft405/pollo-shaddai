"use client";

import { locations } from "../../data/locations";
import { useLanguage } from "../../lib/i18n";

export default function LocationsPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="bg-cream">
      <section className="bg-ink px-5 py-16 text-cream">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {t.locations.kicker}
          </p>
          <h1 className="font-display mt-3 text-5xl sm:text-6xl">{t.locations.title}</h1>
          <p className="mt-4 text-cream/70">{t.locations.dineIn}</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-12 px-5 py-14">
        {locations.map((location) => (
          <article
            key={location.id}
            id={location.id}
            className="grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_24px_60px_-36px_rgba(26,15,12,0.45)] lg:grid-cols-2"
          >
            <div className="min-h-[260px]">
              <iframe
                title={`${location.city} map`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&z=15&output=embed`}
                className="h-full min-h-[260px] w-full border-0"
                loading="lazy"
              />
            </div>
            <div className="p-8">
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
              <h2 className="font-display mt-2 text-4xl text-ink">{location.city}</h2>
              <p className="mt-4 text-ink/70">
                {location.address}
                <br />
                {location.cityState}
              </p>
              {location.note && (
                <p className="mt-4 text-sm leading-relaxed text-ink/65">
                  {lang === "es" ? location.noteEs : location.note}
                </p>
              )}
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-chili">
                {t.locations.hours}
              </p>
              <ul className="mt-2 space-y-1 text-sm text-ink/70">
                {location.hours.map((row) => (
                  <li key={`${row.days}-${row.time}`}>
                    {lang === "es" ? row.daysEs : row.days} ·{" "}
                    {lang === "es" && row.timeEs ? row.timeEs : row.time}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {location.phoneHref && location.phone && (
                  <a
                    href={location.phoneHref}
                    className="rounded-full bg-chili px-5 py-2.5 text-sm font-semibold text-cream hover:bg-chili-hot"
                  >
                    {t.locations.call} · {location.phone}
                  </a>
                )}
                {location.orderUrl && (
                  <a
                    href={location.orderUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink hover:border-chili"
                  >
                    {t.locations.order}
                  </a>
                )}
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.mapQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink hover:border-chili"
                >
                  {t.locations.directions}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
