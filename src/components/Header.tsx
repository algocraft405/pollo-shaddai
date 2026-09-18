"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { useLanguage } from "../lib/i18n";

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/menu", label: t.nav.menu },
    { href: "/locations", label: t.nav.locations },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link href="/" aria-label="Pollo Shaddai home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors ${
                  active ? "text-gold" : "text-cream/80 hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded-full border border-cream/20 p-0.5 text-[0.7rem] font-semibold tracking-wider">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 ${
                lang === "en" ? "bg-gold text-ink" : "text-cream/70 hover:text-cream"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`rounded-full px-2.5 py-1 ${
                lang === "es" ? "bg-gold text-ink" : "text-cream/70 hover:text-cream"
              }`}
            >
              ES
            </button>
          </div>
          <Link
            href="/locations"
            className="hidden rounded-full bg-chili px-4 py-2 text-sm font-semibold text-cream shadow-lg shadow-chili/30 transition hover:bg-chili-hot sm:inline-flex"
          >
            {t.nav.order}
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-cream/10 bg-ink px-5 py-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 text-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/locations"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-chili px-4 py-2.5 text-center text-sm font-semibold text-cream"
            >
              {t.nav.order}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
