import type { Metadata } from "next";
import Kicker from "@/components/ui/Kicker";
import ImageSlot from "@/components/ui/ImageSlot";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";

export const metadata: Metadata = {
  title: "Entreprises innovantes, ATC",
};

const SERVICES = [
  {
    piece: "♟",
    title: "Business plan et financements",
    description:
      "Construction du business plan et recherche de financements publics et privés adaptés à votre stade de développement.",
  },
  {
    piece: "♞",
    title: "Levées de fonds",
    description:
      "Préparation et conduite de vos levées de fonds : valorisation, dossier investisseurs, négociation.",
  },
  {
    piece: "♜",
    title: "Pilotage financier et RH",
    description:
      "Tableaux de bord, gestion de trésorerie et structuration RH pour piloter la croissance sans perdre le cap.",
  },
  {
    piece: "♛",
    title: "Accompagnement de la croissance",
    description:
      "Croissance organique et croissance externe : nous structurons vos opérations, en France et à l'étranger.",
  },
];

export default function EntreprisesInnovantesPage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <PageHero
        kicker="Entreprises innovantes"
        title="Structurer la finance de votre start-up"
        description={
          <>
            Business plan, levées de fonds, pilotage financier&nbsp;: des bases
            solides pour franchir chaque cap de croissance.
          </>
        }
      />

      {/* ============ 2. ACCOMPAGNEMENT ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-[clamp(64px,10vw,120px)] sm:px-10">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="flex min-h-[190px] flex-col gap-4 border border-ink/8 bg-paper px-9 py-10"
              >
                <span className="font-serif text-[38px] leading-none text-gold">
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

      {/* ============ 3. EXPÉRIENCE VÉCUE ============ */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="chess-pattern mask-fade-right absolute bottom-0 left-0 h-[60%] w-[30%] opacity-30"
        />
        <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(32px,6vw,90px)] px-5 py-[clamp(64px,10vw,110px)] sm:px-10 min-[900px]:grid-cols-[340px_1fr]">
          <div className="w-full max-w-[340px] rounded-md border border-gold/50 bg-cream/8 p-2">
            {/* Photo réelle : atc.paris/wp-content/uploads/2020/09/photo-AT.jpg (site hors ligne) */}
            <ImageSlot
              hint="portrait : Alexandre Tellier"
              className="aspect-[3/4] w-full rounded-[4px]"
            />
          </div>
          <div className="flex max-w-[600px] flex-col gap-[22px]">
            <Kicker>Une expérience vécue de l&apos;intérieur</Kicker>
            <h2 className="m-0 font-serif text-[clamp(28px,4.5vw,40px)] font-normal leading-[1.12] tracking-[-0.01em] [text-wrap:balance]">
              Un ancien DAF de start-up, pas un conseiller hors sol
            </h2>
            <p className="m-0 text-base leading-[1.7] text-cream/70">
              Avant de fonder ATC, Alexandre Tellier a été pendant 10 ans
              directeur financier de start-up innovantes, qu&apos;il a
              accompagnées dans leur croissance externe, en France et à
              l&apos;étranger, et dans leur recherche de financement, du
              capital risque à l&apos;introduction en bourse. Il connaît vos
              enjeux pour les avoir vécus.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 4. CTA FINAL ============ */}
      <CtaFinal
        title="Préparez votre prochain cap de croissance"
        description="Un premier échange confidentiel, sans engagement, pour structurer votre projet."
      />
    </>
  );
}
