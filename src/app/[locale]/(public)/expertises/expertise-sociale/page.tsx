import type { Metadata } from "next";
import Kicker from "@/components/ui/Kicker";
import ImageSlot from "@/components/ui/ImageSlot";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";

export const metadata: Metadata = {
  title: "Expertise sociale, ATC",
};

const SERVICES = [
  {
    piece: "♟",
    title: "Gestion de la paie",
    description:
      "Bulletins, déclarations sociales et charges : une paie fiable, livrée dans les délais, chaque mois.",
  },
  {
    piece: "♞",
    title: "Contrats de travail et conseil RH",
    description:
      "Rédaction et sécurisation des contrats, accompagnement RH au quotidien : embauche, évolution, départ.",
  },
  {
    piece: "♜",
    title: "Suivi des obligations légales",
    description:
      "Veille et mise en conformité : affichages, registres, entretiens obligatoires, conventions collectives.",
  },
  {
    piece: "♛",
    title: "Accompagnement en droit social",
    description:
      "Conseil en droit du travail et appui dans vos relations sociales, en lien avec des avocats spécialisés si nécessaire.",
  },
];

export default function ExpertiseSocialePage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <PageHero
        kicker="Expertise sociale"
        title="Sécuriser la dimension humaine de votre entreprise"
        description="Paie, contrats et conformité sociale : un pôle dédié qui veille sur vos obligations d'employeur, avec fiabilité et proximité."
      />

      {/* ============ 2. SERVICES ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-[clamp(64px,10vw,110px)] sm:px-10">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
            {SERVICES.map((service) => (
              <div
                key={service.piece}
                className="flex min-h-[190px] flex-col gap-4 border border-ink/8 bg-paper px-9 py-10"
              >
                <span
                  aria-hidden
                  className="font-serif text-[38px] leading-none text-gold"
                >
                  {service.piece}
                </span>
                <h2 className="m-0 font-serif text-[23px] font-medium leading-[1.25]">
                  {service.title}
                </h2>
                <p className="m-0 text-[15px] leading-[1.6] text-muted">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. VOTRE INTERLOCUTRICE ============ */}
      <section className="border-t border-ink/6 bg-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(32px,6vw,90px)] px-5 py-[clamp(64px,10vw,110px)] sm:px-10 min-[900px]:grid-cols-[340px_1fr]">
          <div className="aspect-[3/4] w-full max-w-[340px] rounded-md border border-gold/50 bg-cream p-2">
            {/* Photo réelle : atc.paris/wp-content/uploads/2020/09/PHOTO-HB-768x1024.jpeg (site hors ligne) */}
            <ImageSlot
              hint="portrait : Hélène Bensaid"
              className="h-full w-full rounded-[4px]"
            />
          </div>
          <div className="flex max-w-[580px] flex-col gap-[22px]">
            <Kicker>Votre interlocutrice</Kicker>
            <h2 className="m-0 font-serif text-[clamp(28px,4.5vw,40px)] font-normal tracking-[-0.01em]">
              Hélène Bensaid
            </h2>
            <p className="m-0 text-base leading-[1.7] text-muted">
              Responsable du pôle social, juriste spécialisée en paie et
              ressources humaines, Hélène Bensaid accompagne les clients du
              cabinet en matière sociale depuis 2009. Elle supervise la gestion
              de la paie et le suivi des obligations légales, avec une exigence
              constante de fiabilité et de proximité.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 4. CTA FINAL ============ */}
      <CtaFinal
        title="Confiez-nous votre gestion sociale"
        description="Un premier échange sans engagement pour faire le point sur vos obligations d'employeur."
      />
    </>
  );
}
