"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import type { Testimonial, TestimonialType } from "@/lib/api/testimonials";

const FILTRES: { key: "tous" | TestimonialType; label: string }[] = [
  { key: "tous", label: "Tous" },
  { key: "reprise", label: "Reprises" },
  { key: "cession", label: "Cessions" },
];

/** Initiales de l'entreprise, fallback affiché si le logo ne charge pas. */
function initiales(company: string): string {
  return company
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

/**
 * Grille des témoignages avec filtre Tous / Reprises / Cessions
 * (page liste — maquette Témoignages.dc.html).
 */
export default function TestimonialsGrid({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [filtre, setFiltre] = useState<"tous" | TestimonialType>("tous");

  const visibles = testimonials.filter(
    (t) => filtre === "tous" || t.type === filtre,
  );

  return (
    <>
      <div className="mb-14 flex flex-wrap gap-3">
        {FILTRES.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFiltre(f.key)}
            className={`cursor-pointer rounded-xs border px-[26px] py-3 text-sm font-semibold tracking-[0.04em] transition-colors ${
              filtre === f.key
                ? "border-ink bg-ink text-cream"
                : "border-ink/25 bg-transparent text-muted hover:border-ink/50 hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7">
        {visibles.map((t) => (
          <figure
            key={t.id}
            className="m-0 flex flex-col gap-5 border border-ink/8 bg-paper px-[34px] py-[38px]"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-[52px] w-[130px] items-center">
                {/* Logos hébergés sur l'ancien atc.paris (hors ligne) : monogramme en attendant. */}
                <span className="whitespace-nowrap rounded-xs border border-gold/50 px-3 py-[5px] font-serif text-lg text-gold">
                  {initiales(t.company)}
                </span>
              </div>
              <span
                className={`whitespace-nowrap rounded-xs border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                  t.type === "cession"
                    ? "border-gold/50 text-gold"
                    : "border-muted/35 text-muted"
                }`}
              >
                {t.type === "cession" ? "Cession" : "Reprise"}
              </span>
            </div>

            <figcaption className="flex flex-col gap-[3px]">
              <span className="font-serif text-[23px] text-ink">{t.name}</span>
              <span className="text-[13px] text-muted">{t.operation}</span>
            </figcaption>

            {t.excerptStyle === "citation" ? (
              <blockquote className="m-0 border-l-2 border-gold/50 pl-[18px] font-serif text-lg italic leading-[1.55] text-ink">
                «&nbsp;{t.excerpt ?? t.quote}&nbsp;»
              </blockquote>
            ) : (
              <p className="m-0 text-[15px] leading-[1.65] text-muted">
                {t.excerpt ?? t.quote}
              </p>
            )}

            <Link
              href={`/temoignages/${t.slug}`}
              className="mt-auto self-start border-b border-gold/40 pb-[3px] text-sm font-semibold text-gold transition-colors hover:border-gold"
            >
              Lire le témoignage →
            </Link>
          </figure>
        ))}
      </div>
    </>
  );
}
