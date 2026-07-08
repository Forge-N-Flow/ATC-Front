import type { Metadata } from "next";
import Kicker from "@/components/ui/Kicker";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageSlot from "@/components/ui/ImageSlot";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";

export const metadata: Metadata = {
  title: "Le cabinet, ATC",
};

const PHILOSOPHIE = [
  {
    num: "I",
    title: "Des enjeux de vie",
    description:
      "Un projet d'entreprise engage des enjeux financiers, familiaux et des choix de vie. Nous ne l'oublions jamais.",
  },
  {
    num: "II",
    title: "Un contact direct",
    description:
      "Un contact direct et régulier avec vos interlocuteurs, sans intermédiaire ni jargon inutile.",
  },
  {
    num: "III",
    title: "Écoute et exigence",
    description:
      "Une ambiance d'écoute, de respect et d'exigence, sans renoncer à une certaine décontraction.",
  },
];

const INTERVENTIONS = [
  {
    contexte: "Transfair",
    title: "Salon de la transmission d'entreprise",
    description:
      "Conférences sur l'évaluation et la préparation de la cession pour les dirigeants de PME.",
  },
  {
    contexte: "MEDEF",
    title: "Cycles dédiés aux dirigeants",
    description:
      "Interventions sur l'anticipation de la transmission et le choix du repreneur.",
  },
  {
    contexte: "OEC",
    title: "Université d'été des experts-comptables",
    description:
      "Ateliers méthodologiques : évaluation, business plan et mémorandum de présentation.",
  },
  {
    contexte: "CRA · CCIP",
    title: "Formations cédants & repreneurs",
    description:
      "Formateur régulier sur le Tour de France de la transmission et les parcours repreneurs.",
  },
];

export default function LeCabinetPage() {
  return (
    <>
      {/* ============ 1. INTRO ============ */}
      <PageHero
        kicker="Le cabinet"
        title="Des experts, une équipe, une philosophie"
        description="Derrière chaque opération réussie, il y a des personnes. Voici celles qui vous accompagneront."
      />

      {/* ============ 2. LES EXPERTS ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 pb-[clamp(64px,12vw,110px)] pt-[clamp(64px,12vw,130px)] sm:px-10">
          <SectionHeading
            kicker="Les experts"
            title="Deux expertises complémentaires"
            className="mb-20 max-w-[620px] text-ink"
          />

          <div className="mb-[clamp(64px,9vw,110px)] grid grid-cols-1 items-center gap-[clamp(40px,7vw,90px)] min-[900px]:grid-cols-[380px_1fr]">
            <div className="w-full max-w-[380px] rounded-md border border-gold/50 bg-paper p-2">
              {/* Photo réelle : atc.paris/wp-content/uploads/2020/09/photo-AT.jpg (site hors ligne) */}
              <ImageSlot
                hint="portrait : Alexandre Tellier"
                className="aspect-[3/4] w-full rounded-[4px]"
              />
            </div>
            <div className="flex max-w-[580px] flex-col gap-[22px]">
              <h3 className="m-0 font-serif text-[clamp(27px,4.5vw,38px)] font-normal tracking-[-0.01em]">
                Alexandre Tellier
              </h3>
              <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
                Fondateur&nbsp;: Transmission &amp; stratégie financière
              </span>
              <p className="m-0 text-base leading-[1.7] text-muted">
                Expert-comptable, titulaire d&apos;un 3ᵉ cycle de stratégie
                financière, Alexandre Tellier a été pendant dix ans directeur
                financier de start-up innovantes, qu&apos;il a accompagnées
                dans leur croissance externe, en France et à l&apos;étranger,
                et dans leur recherche de financement — du capital-risque à
                l&apos;introduction en bourse.
              </p>
              <p className="m-0 text-base leading-[1.7] text-muted">
                Formateur au CRA et à la CCIP, il enseigne l&apos;évaluation,
                le business plan et le dossier de présentation, auprès des
                cédants comme des repreneurs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-[clamp(40px,7vw,90px)] min-[900px]:grid-cols-[1fr_380px]">
            <div className="flex max-w-[580px] flex-col gap-[22px] min-[900px]:justify-self-end">
              <h3 className="m-0 font-serif text-[clamp(27px,4.5vw,38px)] font-normal tracking-[-0.01em]">
                Hélène Bensaid
              </h3>
              <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">
                Responsable du pôle social
              </span>
              <p className="m-0 text-base leading-[1.7] text-muted">
                Juriste spécialisée en paie et ressources humaines, Hélène
                Bensaid accompagne les clients du cabinet en matière sociale
                depuis 2009. Elle supervise la gestion de la paie et le suivi
                des obligations légales, avec une exigence constante de
                fiabilité et de proximité.
              </p>
            </div>
            <div className="w-full max-w-[380px] rounded-md border border-gold/50 bg-paper p-2">
              {/* Photo réelle : atc.paris/wp-content/uploads/2020/09/PHOTO-HB-768x1024.jpeg (site hors ligne) */}
              <ImageSlot
                hint="portrait : Hélène Bensaid"
                className="aspect-[3/4] w-full rounded-[4px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3. L'ÉQUIPE ============ */}
      <section className="border-y border-ink/6 bg-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(40px,7vw,90px)] px-5 py-[clamp(64px,12vw,110px)] sm:px-10 min-[900px]:grid-cols-2">
          <div className="flex flex-col gap-[22px]">
            <Kicker>L&apos;équipe</Kicker>
            <h2 className="m-0 font-serif text-[clamp(29px,5vw,42px)] font-normal leading-[1.12] tracking-[-0.01em]">
              Des collaborateurs de haut niveau, spécialisés par métier
            </h2>
            <p className="m-0 text-base leading-[1.7] text-muted">
              Nos collaborateurs combinent expérience en entreprise et en
              cabinet. Chacun est spécialisé par métier (transmission,
              entrepreneurs, start-up), avec une même exigence&nbsp;: forte
              implication et réactivité auprès de chaque client.
            </p>
          </div>
          <ImageSlot
            hint="photo : l'équipe du cabinet"
            className="h-[400px] w-full"
          />
        </div>
      </section>

      {/* ============ 4. NOTRE PHILOSOPHIE ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-[clamp(64px,12vw,130px)] sm:px-10">
          <SectionHeading
            center
            kicker="Notre philosophie"
            title={
              <>Une entreprise, c&apos;est plus que des chiffres</>
            }
            className="mb-[70px] text-ink"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
            {PHILOSOPHIE.map((item) => (
              <div
                key={item.num}
                className="flex flex-col gap-4 border border-ink/8 bg-paper px-[38px] py-11"
              >
                <span className="font-serif text-xl italic text-gold">
                  {item.num}
                </span>
                <h3 className="m-0 font-serif text-2xl font-medium leading-[1.25]">
                  {item.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.65] text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. INTERVENTIONS & CONFÉRENCES ============ */}
      <section className="border-t border-ink/6 bg-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[clamp(40px,7vw,90px)] px-5 py-[clamp(64px,12vw,120px)] sm:px-10 min-[900px]:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-[22px]">
            <Kicker>Interventions &amp; conférences</Kicker>
            <h2 className="m-0 font-serif text-[clamp(29px,5vw,42px)] font-normal leading-[1.12] tracking-[-0.01em]">
              Partager, c&apos;est aussi transmettre
            </h2>
            <p className="m-0 text-base leading-[1.7] text-muted">
              Alexandre Tellier intervient régulièrement sur la transmission
              d&apos;entreprise&nbsp;: Transfair, MEDEF, Ordre des
              experts-comptables, Tour de France de la transmission, Université
              d&apos;été des experts-comptables, CRA, CCIP.
            </p>
          </div>
          <div className="flex flex-col">
            {INTERVENTIONS.map((item) => (
              <div
                key={item.contexte}
                className="flex items-baseline gap-7 border-b border-ink/8 py-[26px]"
              >
                <span className="min-w-[90px] font-serif text-xl italic text-gold">
                  {item.contexte}
                </span>
                <div className="flex flex-col gap-[5px]">
                  <h3 className="m-0 font-serif text-[21px] font-medium">
                    {item.title}
                  </h3>
                  <p className="m-0 text-sm leading-[1.6] text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. CTA FINAL ============ */}
      <CtaFinal
        title="Faisons connaissance"
        description="Un premier échange confidentiel, sans engagement, dans nos bureaux ou à distance."
      />
    </>
  );
}
