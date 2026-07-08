import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Kicker from "@/components/ui/Kicker";
import ImageSlot from "@/components/ui/ImageSlot";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";

export const metadata: Metadata = {
  title: "Accompagnement des experts-comptables, ATC",
};

const GAINS = [
  {
    piece: "♞",
    title: "Ce que vos clients y gagnent",
    items: [
      "Un accompagnement dans un moment crucial de leur vie d'entrepreneur.",
      "Un accompagnement sur mesure pour tirer le meilleur de la transmission.",
      "L'efficacité d'un binôme cohérent aux compétences complémentaires : vous, le partenaire historique de confiance, et nous, le spécialiste de la transmission.",
    ],
  },
  {
    piece: "♜",
    title: "Ce que vous y gagnez",
    items: [
      "Une compétence additionnelle différenciatrice à proposer à vos clients.",
      "Un partenariat de confiance avec un autre expert-comptable qui partage la même déontologie.",
      "Un développement de missions de conseil à forte valeur ajoutée, génératrices de revenus.",
    ],
  },
];

const ROMANS = ["I", "II", "III", "IV", "V", "VI"];

const ENGAGEMENTS = [
  "Spécialistes de la transmission de PME et TPE depuis 2004.",
  "Cabinet à taille humaine, alternative aux cabinets d'intermédiation, privilégiant l'écoute et la proximité.",
  "Process et organisation adaptés à la transmission.",
  "Pour ne pas concurrencer vos missions, nous ne faisons pas d'optimisation fiscale et patrimoniale.",
  "Engagement de confiance signé garantissant le respect de votre clientèle et de notre déontologie.",
  "Rendez-vous conjoints avec votre client et échanges réguliers sur le dossier.",
];

export default function AccompagnementExpertsComptablesPage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <PageHero
        kicker="Accompagnement des experts-comptables"
        title="Experts-comptables, développez des missions de transmission à forte valeur ajoutée avec un partenaire de confiance"
        description={
          <>
            Un binôme cohérent au service de vos clients&nbsp;: vous, le
            partenaire historique de confiance, et nous, le spécialiste de la
            transmission.
          </>
        }
      />

      {/* ============ 2. CE QUE CHACUN Y GAGNE ============ */}
      <section>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-stretch gap-7 px-5 py-[clamp(64px,10vw,110px)] sm:px-10 min-[900px]:grid-cols-2">
          {GAINS.map((gain) => (
            <div
              key={gain.title}
              className="flex flex-col gap-6 border border-ink/8 bg-paper px-10 py-11"
            >
              <span className="font-serif text-[38px] leading-none text-gold">
                {gain.piece}
              </span>
              <h2 className="m-0 font-serif text-[clamp(24px,3vw,32px)] font-normal">
                {gain.title}
              </h2>
              <div className="flex flex-col gap-4">
                {gain.items.map((item, i) => (
                  <div key={item} className="flex items-baseline gap-3.5">
                    <span className="font-serif text-gold">{ROMANS[i]}</span>
                    <span className="text-[15px] leading-[1.6] text-muted">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 3. NOS ENGAGEMENTS ============ */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="chess-pattern mask-fade-right absolute bottom-0 left-0 h-[60%] w-[32%] opacity-30"
        />
        <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[clamp(40px,7vw,90px)] px-5 py-[clamp(64px,10vw,110px)] sm:px-10 min-[900px]:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-[22px]">
            <Kicker>Nos engagements</Kicker>
            <h2 className="m-0 font-serif text-[clamp(30px,5vw,44px)] font-normal leading-[1.12] [text-wrap:balance]">
              Le respect de votre clientèle, par écrit
            </h2>
            <p className="m-0 text-base leading-[1.7] text-cream/70">
              Alexandre Tellier est intervenu pour l&apos;Ordre des
              experts-comptables sur ce sujet&nbsp;: «&nbsp;Experts-comptables,
              développez le chiffre d&apos;affaires de votre cabinet avec des
              missions de transmission d&apos;entreprise&nbsp;».
            </p>
            <Link
              href="/agenda"
              className="self-start text-sm font-semibold text-gold"
            >
              Voir nos interventions →
            </Link>
          </div>
          <div className="flex flex-col">
            {ENGAGEMENTS.map((texte, i) => (
              <div
                key={texte}
                className="flex items-baseline gap-[22px] border-b border-cream/12 py-5"
              >
                <span className="min-w-[32px] font-serif text-lg italic text-gold">
                  {ROMANS[i]}
                </span>
                <p className="m-0 text-[15px] leading-[1.65] text-cream/80">
                  {texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. VOTRE INTERLOCUTEUR ============ */}
      <section className="border-t border-ink/6 bg-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(32px,6vw,90px)] px-5 py-[clamp(64px,10vw,100px)] sm:px-10 min-[900px]:grid-cols-[340px_1fr]">
          <div className="w-full max-w-[340px] rounded-md border border-gold/50 bg-cream p-2">
            {/* Photo réelle : atc.paris/wp-content/uploads/2020/09/photo-AT.jpg (site hors ligne) */}
            <ImageSlot
              hint="portrait : Alexandre Tellier"
              className="aspect-[3/4] w-full rounded-[4px]"
            />
          </div>
          <div className="flex max-w-[580px] flex-col gap-[22px]">
            <Kicker>Votre interlocuteur</Kicker>
            <h2 className="m-0 font-serif text-[clamp(28px,4.5vw,40px)] font-normal tracking-[-0.01em]">
              Alexandre Tellier
            </h2>
            <p className="m-0 text-base leading-[1.7] text-muted">
              Expert-comptable, titulaire d&apos;un 3ᵉ cycle en stratégie
              financière et expert en Évaluation Transmission Financement,
              Alexandre Tellier a été pendant 10 ans directeur financier
              d&apos;entreprises accompagnées dans leur croissance externe, en
              France et à l&apos;étranger, et dans leur recherche de
              financement, du capital risque à l&apos;introduction en bourse.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 5. CTA FINAL ============ */}
      <CtaFinal
        title="Construisons ce partenariat"
        description="Un premier échange entre confrères, pour étudier comment développer ensemble des missions de transmission."
      />
    </>
  );
}
