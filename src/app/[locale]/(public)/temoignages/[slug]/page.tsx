import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import CtaFinal from "@/components/atc/CtaFinal";
import {
  getTestimonial,
  getTestimonials,
  MOCK_TESTIMONIALS,
  type Testimonial,
} from "@/lib/api/testimonials";

/** « Marc Mezerette reprend Comotech Industries » / « … cède … ». */
function titre(t: Testimonial): string {
  return `${t.name} ${t.type === "cession" ? "cède" : "reprend"} ${t.company}`;
}

export function generateStaticParams() {
  return MOCK_TESTIMONIALS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const testimonial = await getTestimonial(slug);
  if (!testimonial) {
    return { title: "Témoignage" };
  }
  return {
    title: titre(testimonial),
    description: testimonial.quote,
  };
}

export default async function TemoignagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const testimonial = await getTestimonial(slug);
  if (!testimonial) {
    notFound();
  }

  const all = await getTestimonials();
  const idx = all.findIndex((t) => t.slug === testimonial.slug);
  const prev = all[(idx - 1 + all.length) % all.length];
  const next = all[(idx + 1) % all.length];

  return (
    <>
      {/* ============ 1. EN-TÊTE TÉMOIGNAGE ============ */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="chess-pattern mask-fade-left absolute right-0 top-0 h-full w-[42%] opacity-30"
        />
        <div className="relative mx-auto flex max-w-[900px] flex-col gap-6 px-5 pb-[clamp(56px,10vw,100px)] pt-[clamp(56px,10vw,90px)] sm:px-10">
          <Link
            href="/temoignages"
            className="self-start text-sm font-semibold text-cream/65 transition-colors hover:text-gold"
          >
            ← Tous les témoignages
          </Link>
          <span className="self-start rounded-xs border border-gold/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            {testimonial.type === "cession" ? "Cession" : "Reprise"}
          </span>
          <h1 className="m-0 font-serif text-[clamp(32px,5.5vw,52px)] font-normal leading-[1.1] tracking-[-0.01em] [text-wrap:balance]">
            {titre(testimonial)}
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center rounded-[4px] bg-paper px-3.5 py-2">
              {testimonial.logoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={testimonial.logoUrl}
                  alt={testimonial.company}
                  className="max-h-9 max-w-[140px] object-contain"
                />
              ) : (
                <span className="whitespace-nowrap font-serif text-base text-ink">
                  {testimonial.company}
                </span>
              )}
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-[15px] font-semibold">
                {testimonial.name}
              </span>
              <span className="text-[13px] text-cream/60">
                {testimonial.operation}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. RÉCIT ============ */}
      <section>
        <div className="mx-auto max-w-[760px] px-5 py-[clamp(48px,8vw,90px)] sm:px-10">
          <div className="flex flex-col gap-7">
            <blockquote className="m-0 border-l-2 border-gold pl-6 font-serif text-[clamp(21px,3vw,26px)] italic leading-[1.5] text-ink">
              «&nbsp;{testimonial.quote}&nbsp;»
            </blockquote>
            {testimonial.body.map((paragraphe) => (
              <p
                key={paragraphe}
                className="m-0 text-[17px] leading-[1.8] text-muted"
              >
                {paragraphe}
              </p>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap justify-between gap-5 border-t border-ink/10 pt-7">
            <Link
              href={`/temoignages/${prev.slug}`}
              className="text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
            >
              ← {prev.name}
            </Link>
            <Link
              href={`/temoignages/${next.slug}`}
              className="text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
            >
              {next.name} →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 3. CTA FINAL ============ */}
      <CtaFinal title="Vous aussi, écrivez la suite de votre histoire" />
    </>
  );
}
