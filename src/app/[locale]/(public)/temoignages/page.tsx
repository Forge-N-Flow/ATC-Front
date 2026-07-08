import type { Metadata } from "next";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";
import { getTestimonials } from "@/lib/api/testimonials";
import TestimonialsGrid from "./TestimonialsGrid";

export const metadata: Metadata = {
  title: "Témoignages",
};

export default async function TemoignagesPage() {
  const testimonials = await getTestimonials();

  return (
    <>
      {/* ============ 1. HERO ============ */}
      <PageHero
        kicker="Témoignages"
        title="Ils nous ont fait confiance"
        description="La parole aux dirigeants accompagnés dans la reprise ou la cession de leur entreprise."
      />

      {/* ============ 2. FILTRE + GRILLE ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 pb-[clamp(64px,12vw,120px)] pt-[clamp(48px,8vw,80px)] sm:px-10">
          <TestimonialsGrid testimonials={testimonials} />
        </div>
      </section>

      {/* ============ 3. CTA FINAL ============ */}
      <CtaFinal />
    </>
  );
}
