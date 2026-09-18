"use client";

import { FormEvent, useState } from "react";
import { locations } from "../../data/locations";
import { useLanguage } from "../../lib/i18n";

export default function ContactPage() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="bg-cream">
      <section className="bg-ink px-5 py-16 text-cream">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {t.contactPage.kicker}
          </p>
          <h1 className="font-display mt-3 text-5xl sm:text-6xl">{t.contactPage.title}</h1>
          <p className="mt-4 max-w-2xl text-cream/70">{t.contactPage.intro}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={onSubmit} className="rounded-[2rem] bg-white p-8 shadow-[0_24px_60px_-36px_rgba(26,15,12,0.4)]">
          {sent ? (
            <p className="font-display text-3xl text-ink">{t.contactPage.sent}</p>
          ) : (
            <div className="space-y-5">
              <label className="block text-sm">
                <span className="font-semibold text-ink">{t.contactPage.name}</span>
                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:border-chili"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold text-ink">{t.contactPage.email}</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:border-chili"
                />
              </label>
              <label className="block text-sm">
                <span className="font-semibold text-ink">{t.contactPage.location}</span>
                <select
                  name="location"
                  className="mt-2 w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:border-chili"
                >
                  <option>{t.contactPage.anyLocation}</option>
                  {locations.map((location) => (
                    <option key={location.id}>{location.city}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="font-semibold text-ink">{t.contactPage.message}</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3 outline-none focus:border-chili"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-chili px-6 py-3 text-sm font-semibold text-cream hover:bg-chili-hot"
              >
                {t.contactPage.send}
              </button>
            </div>
          )}
        </form>

        <aside className="space-y-5">
          {locations.map((location) => (
            <div key={location.id} className="rounded-3xl border border-ink/10 bg-white p-6">
              <h2 className="font-display text-2xl text-ink">{location.city}</h2>
              <p className="mt-2 text-sm text-ink/70">
                {location.address}
                <br />
                {location.cityState}
              </p>
              {location.phoneHref && location.phone ? (
                <a href={location.phoneHref} className="mt-3 inline-block text-sm font-semibold text-chili">
                  {location.phone}
                </a>
              ) : (
                <p className="mt-3 text-sm text-ink/50">
                  {location.badge}
                </p>
              )}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
}
