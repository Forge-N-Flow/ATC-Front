import type { Testimonial } from "@/lib/api/testimonials";

/** Carte témoignage blanche avec guillemet doré (style maquette). */
export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Pick<Testimonial, "quote" | "name" | "role" | "company">;
}) {
  return (
    <figure className="m-0 flex flex-col gap-[26px] border border-ink/6 bg-paper px-[38px] py-11">
      <span
        aria-hidden
        className="mt-3.5 font-serif text-[clamp(32px,6vw,54px)] leading-[0.5] text-gold"
      >
        “
      </span>
      <blockquote className="m-0 font-serif text-xl italic leading-[1.5] text-ink">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-auto flex flex-col gap-[3px]">
        <span className="text-[15px] font-semibold text-ink">
          {testimonial.name}
        </span>
        <span className="text-[13px] text-muted">
          {testimonial.role}
          {testimonial.company ? ` de ${testimonial.company}` : ""}
        </span>
      </figcaption>
    </figure>
  );
}
