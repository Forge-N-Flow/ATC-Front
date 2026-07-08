import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Kicker from "@/components/ui/Kicker";
import ImageSlot from "@/components/ui/ImageSlot";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";
import CessionGuideForm from "./CessionGuideForm";

export const metadata: Metadata = {
  title: "Céder son entreprise, ATC",
};

const QUESTIONS = [
  {
    piece: "♟",
    question: "Vous souhaitez connaître la valeur de votre entreprise ?",
    reponseTitre: "Nous évaluons votre entreprise",
    reponse:
      "Diagnostic qualitatif à 360 degrés, identification des zones de dépendance (client, produit, fournisseur, salarié) et détermination d'un intervalle de valeurs de marché.",
  },
  {
    piece: "♞",
    question: "Vous souhaitez anticiper les étapes de votre cession ?",
    reponseTitre: "Nous établissons une stratégie de cession",
    reponse:
      "Calendrier, préparation de l'entreprise, optimisation des points faibles et choix du bon moment : chaque étape est planifiée pour sécuriser l'opération.",
  },
  {
    piece: "♜",
    question:
      "Vous souhaitez trouver un repreneur qui saura pérenniser votre entreprise ?",
    reponseTitre: "Dossier de présentation et recherche confidentielle",
    reponse:
      "Nous construisons le mémorandum qui met en valeur votre entreprise, puis recherchons et qualifions des repreneurs adaptés, en toute confidentialité.",
  },
  {
    piece: "♛",
    question: "Vous souhaitez une sécurisation juridique ?",
    reponseTitre: "Un réseau d'avocats spécialisés",
    reponse:
      "Nous collaborons étroitement avec notre réseau d'avocats spécialisés pour sécuriser chaque acte, de la lettre d'intention aux garanties d'actif et de passif.",
  },
];

export default function CessionPage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <PageHero
        kicker="Cession d'entreprise"
        title="Votre entreprise est le fruit d'une vie de travail"
        description="La cession est un moment fort de votre vie d'entrepreneur et lourd de conséquences sur le plan financier. Nous vous accompagnons du début à la fin du processus pour sécuriser et optimiser la vente."
      >
        <div className="mt-1.5">
          <Link
            href="/contact"
            className="inline-block rounded-xs bg-gold px-8 py-4 text-[15px] font-semibold tracking-wide text-cream transition-colors hover:bg-gold-light"
          >
            Parler de mon projet de cession
          </Link>
        </div>
      </PageHero>

      {/* ============ 2. VOS QUESTIONS ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-[clamp(64px,10vw,120px)] sm:px-10">
          <div className="flex flex-col">
            {QUESTIONS.map((q) => (
              <div
                key={q.piece}
                className="grid grid-cols-1 items-start gap-[clamp(24px,5vw,80px)] border-b border-ink/10 py-[clamp(36px,6vw,56px)] min-[900px]:grid-cols-[1fr_1.3fr]"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-serif text-[34px] leading-none text-gold">
                    {q.piece}
                  </span>
                  <h2 className="m-0 font-serif text-[clamp(24px,3.2vw,32px)] font-normal leading-[1.2]">
                    {q.question}
                  </h2>
                </div>
                <div className="flex flex-col gap-2.5">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
                    {q.reponseTitre}
                  </span>
                  <p className="m-0 text-base leading-[1.7] text-muted">
                    {q.reponse}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. ENCART ÉVALUATION ============ */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="chess-pattern mask-fade-right absolute bottom-0 left-0 h-[60%] w-[30%] opacity-30"
        />
        <div className="relative mx-auto flex max-w-[1240px] flex-col items-center gap-[22px] px-5 py-[clamp(56px,9vw,100px)] text-center sm:px-10">
          <span className="font-serif text-[40px] leading-none text-gold">
            ♛
          </span>
          <p className="m-0 max-w-[780px] font-serif text-[clamp(22px,3.4vw,30px)] italic leading-[1.4] [text-wrap:balance]">
            « L&apos;évaluation ne sert que de base à la négociation qui fixera
            le prix. Un prix doit être finançable : évaluer trop haut,
            c&apos;est risquer que l&apos;entreprise ne se vende pas et perde
            en crédibilité. »
          </p>
          <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-cream/55">
            Notre conviction sur la valorisation
          </span>
        </div>
      </section>

      {/* ============ 4. TÉMOIGNAGE + GUIDE ============ */}
      <section>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-stretch gap-7 px-5 py-[clamp(64px,10vw,110px)] sm:px-10 min-[900px]:grid-cols-2">
          <figure className="m-0 flex flex-col gap-[22px] border border-ink/8 bg-paper px-10 py-11">
            <span className="self-start rounded-xs border border-gold/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Cession
            </span>
            <p className="m-0 text-base leading-[1.7] text-muted">
              Ghislain Poissonneau, co-fondateur de Co.théâtre, organisme de
              formation et de sensibilisation en entreprise par le théâtre (CA
              entre 1 et 2 M€), a cédé Co.théâtre en décembre 2019, accompagné
              par ATC.
            </p>
            <figcaption className="mt-auto flex flex-col gap-[3px]">
              <span className="text-[15px] font-semibold text-ink">
                Ghislain Poissonneau
              </span>
              <span className="text-[13px] text-muted">
                Cession de Co.théâtre
              </span>
            </figcaption>
            <Link
              href="/temoignages"
              className="text-sm font-semibold text-gold"
            >
              Lire son témoignage →
            </Link>
          </figure>
          <div className="flex flex-col gap-5 bg-ink px-10 py-11 text-cream">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
              Guide offert
            </span>
            <h2 className="m-0 font-serif text-[clamp(24px,3vw,30px)] font-normal leading-[1.2]">
              Les 5 erreurs à éviter avant de céder son entreprise
            </h2>
            <p className="m-0 text-[15px] leading-[1.65] text-cream/70">
              Recevez notre guide pratique par email, issu de 20 ans
              d&apos;opérations de cession de PME et TPE.
            </p>
            <CessionGuideForm />
          </div>
        </div>
      </section>

      {/* ============ 5. VOTRE INTERLOCUTEUR ============ */}
      <section className="border-t border-ink/6 bg-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(32px,6vw,90px)] px-5 py-[clamp(64px,10vw,110px)] sm:px-10 min-[900px]:grid-cols-[340px_1fr]">
          <div className="w-[min(340px,100%)] rounded-md border border-gold/50 bg-cream p-2">
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
              Il conduit personnellement chaque opération de cession, en toute
              confidentialité.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 6. CTA FINAL ============ */}
      <CtaFinal
        title="Et si nous parlions de la suite de votre histoire ?"
        description="Un premier échange confidentiel, sans engagement, pour évaluer votre projet de cession."
      />
    </>
  );
}
