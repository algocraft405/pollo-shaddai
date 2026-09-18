"use client";

import Link from "next/link";
import { locations } from "../data/locations";
import { useLanguage } from "../lib/i18n";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            {t.footer.tagline}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t.nav.locations}
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            {locations.map((location) => (
              <li key={location.id}>
                <Link href={`/locations#${location.id}`} className="hover:text-gold">
                  {location.city}
                </Link>
                {location.phone && <p className="text-cream/55">{location.phone}</p>}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {t.nav.menu}
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link href="/menu" className="text-cream/80 hover:text-gold">
                {t.nav.menu}
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-cream/80 hover:text-gold">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-cream/80 hover:text-gold">
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-5 text-center text-xs text-cream/45">
        © {year} Pollo Shaddai. {t.footer.rights}
      </div>
    </footer>
  );
}
