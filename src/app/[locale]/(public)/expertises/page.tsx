import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import ImageSlot from "@/components/ui/ImageSlot";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";

export const metadata: Metadata = {
  title: "Expertises, ATC",
};

const EXPERTISES = [
  {
    num: "I",
    reversed: false,
    imgHint: "photo : poignée de main, dirigeants",
    title: "Transmission d'entreprise",
    description:
      "Nous accompagnons cédants et repreneurs à chaque étape de l'opération : évaluation de l'entreprise, négociation, montage juridique et financier, recherche de financement. Une méthode éprouvée depuis 2004, menée en toute confidentialité.",
    href: "/expertises/transmission",
    linkLabel: "Découvrir la transmission →",
  },
  {
    num: "II",
    reversed: true,
    imgHint: "photo : bureau, documents financiers",
    title: "Expertise comptable & financière",
    description:
      "Tenue, révision, établissement des comptes annuels, tableaux de bord et pilotage : nous donnons aux dirigeants de PME une lecture stratégique de leurs chiffres, jusqu'à la direction financière externalisée.",
    href: "/expertises/expertise-comptable",
    linkLabel: "En savoir plus →",
  },
  {
    num: "III",
    reversed: false,
    imgHint: "photo : équipe start-up en réunion",
    title: "Accompagnement d'entreprises innovantes",
    description:
      "Structuration financière, préparation et conduite de levées de fonds, opérations de croissance externe : nous aidons les start-up à franchir leurs caps de croissance sur des bases financières solides.",
    href: "/expertises/entreprises-innovantes",
    linkLabel: "En savoir plus →",
  },
  {
    num: "IV",
    reversed: true,
    imgHint: "photo : confrères experts-comptables",
    title: "Accompagnement corporate des experts-comptables",
    description:
      "Nous appuyons les cabinets d'expertise comptable qui souhaitent développer des missions de transmission pour leurs clients : méthodologie, outils d'évaluation, co-traitement des dossiers.",
    href: "/expertises/accompagnement-experts-comptables",
    linkLabel: "En savoir plus →",
  },
  {
    num: "V",
    reversed: false,
    imgHint: "photo : Hélène Bensaid, pôle social",
    title: "Expertise sociale",
    description:
      "Gestion de la paie, conseil RH et droit social, suivi des obligations légales : un pôle dédié, dirigé par Hélène Bensaid, pour sécuriser la dimension humaine de votre entreprise.",
    href: "/expertises/expertise-sociale",
    linkLabel: "En savoir plus →",
  },
];

export default function ExpertisesPage() {
  return (
    <>
      {/* ============ 1. INTRO ============ */}
      <PageHero
        kicker="Nos expertises"
        title="Cinq expertises, une même exigence"
        description={
          <>
            ATC est un cabinet d&apos;expertise comptable, financière et
            corporate au service des entrepreneurs de croissance. Spécialiste
            de la transmission d&apos;entreprises PME et TPE depuis 2004.
          </>
        }
      />

      {/* ============ 2. EXPERTISES ALTERNÉES ============ */}
      <section>
        {EXPERTISES.map((exp) => (
          <div key={exp.num} className="border-b border-ink/8">
            <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(48px,7vw,90px)] px-5 py-[clamp(64px,12vw,110px)] sm:px-10 min-[900px]:grid-cols-2">
              <div
                className={`w-full max-w-[460px] justify-self-center ${
                  exp.reversed ? "min-[900px]:order-2" : ""
                }`}
              >
                <ImageSlot
                  hint={exp.imgHint}
                  className="h-[min(400px,110vw)] w-full"
                />
              </div>
              <div
                className={`flex max-w-[520px] flex-col gap-6 ${
                  exp.reversed ? "min-[900px]:order-1" : ""
                }`}
              >
                <span className="font-serif text-xl italic text-gold">
                  {exp.num}
                </span>
                <h2 className="m-0 font-serif text-[clamp(28px,5vw,40px)] font-normal leading-[1.15] tracking-[-0.01em]">
                  {exp.title}
                </h2>
                <p className="m-0 text-base leading-[1.7] text-muted">
                  {exp.description}
                </p>
                <Link
                  href={exp.href}
                  className="self-start border-b border-gold/40 pb-1 text-[15px] font-semibold text-gold transition-colors hover:border-gold"
                >
                  {exp.linkLabel}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ============ 3. CTA FINAL ============ */}
      <CtaFinal
        title="Quelle que soit l'étape, parlons-en"
        description="Un premier échange confidentiel, sans engagement, pour identifier l'expertise adaptée à votre situation."
      />
    </>
  );
}
