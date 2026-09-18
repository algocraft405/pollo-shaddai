"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/i18n";

const dishes = [
  {
    name: "Pollo Shaddai",
    nameEs: "Pollo Shaddai",
    price: "13.24",
    image: "/dish-pollo.jpg",
  },
  {
    name: "Shaddai Loco",
    nameEs: "Shaddai Loco",
    price: "15.74",
    image: "/dish-loco.jpg",
  },
  {
    name: "Pepían",
    nameEs: "Pepían",
    price: "15.74",
    image: "/dish-pepian.jpg",
  },
  {
    name: "Caldo de Marisco",
    nameEs: "Caldo de Marisco",
    price: "26.74",
    image: "/dish-caldo.jpg",
  },
];

export function FeaturedMenu() {
  const { t, lang } = useLanguage();

  return (
    <section className="bg-cream px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-chili">
              {t.featured.kicker}
            </p>
            <h2 className="font-display mt-2 text-4xl text-ink sm:text-5xl">
              {t.featured.title}
            </h2>
          </div>
          <Link href="/menu" className="text-sm font-semibold text-chili hover:text-chili-hot">
            {t.featured.viewAll} →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish) => (
            <article
              key={dish.name}
              className="group overflow-hidden rounded-3xl bg-white shadow-[0_20px_50px_-28px_rgba(26,15,12,0.45)]"
            >
              <div className="relative h-52">
                <Image
                  src={dish.image}
                  alt={lang === "es" ? dish.nameEs : dish.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
              </div>
              <div className="flex items-baseline justify-between px-5 py-4">
                <h3 className="font-display text-xl text-ink">
                  {lang === "es" ? dish.nameEs : dish.name}
                </h3>
                <p className="text-sm font-semibold text-chili">${dish.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
