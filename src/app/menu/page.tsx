"use client";

import { menuCategories } from "../../data/menu";
import { useLanguage } from "../../lib/i18n";

export default function MenuPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="bg-cream">
      <section className="border-b border-ink/10 bg-ink px-5 py-16 text-cream">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            {t.menuPage.kicker}
          </p>
          <h1 className="font-display mt-3 text-5xl sm:text-6xl">{t.menuPage.title}</h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-cream/70">
            {t.menuPage.intro}
          </p>
        </div>
      </section>

      <div className="sticky top-[4.25rem] z-30 border-b border-ink/10 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-5 py-3">
          {menuCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="shrink-0 rounded-full border border-ink/15 px-3 py-1.5 text-xs font-semibold text-ink hover:border-chili hover:text-chili"
            >
              {lang === "es" ? category.nameEs : category.name}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-5 py-14">
        {menuCategories.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-36">
            <h2 className="font-display border-b border-gold/60 pb-3 text-3xl text-ink">
              {lang === "es" ? category.nameEs : category.name}
            </h2>
            <ul className="mt-6 divide-y divide-ink/10">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-start"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-ink">
                        {lang === "es" ? item.nameEs : item.name}
                      </h3>
                      {item.popular && (
                        <span className="rounded-full bg-gold/30 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-chili-hot">
                          {t.menuPage.popular}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink/65">
                      {lang === "es" ? item.descriptionEs : item.description}
                    </p>
                  </div>
                  <p className="text-sm font-semibold text-chili">
                    {item.price === "Market" ? item.price : `$${item.price}`}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
