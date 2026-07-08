import type { Metadata } from "next";
import Kicker from "@/components/ui/Kicker";
import ImageSlot from "@/components/ui/ImageSlot";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";

export const metadata: Metadata = {
  title: "Expertise comptable et financière, ATC",
};

const QUESTIONS = [
  {
    piece: "♟",
    question: "Vous souhaitez prendre les bonnes décisions ?",
    answerTitle: "Un DAF externe à vos côtés",
    answer:
      "Nous vous accompagnons en tant que directeur financier externe et réalisons des outils de pilotage et d'aide à la décision adaptés à votre activité.",
  },
  {
    piece: "♞",
    question:
      "Vous souhaitez pérenniser votre entreprise et améliorer votre rentabilité ?",
    answerTitle: "Diagnostic de performance",
    answer:
      "Nous réalisons un diagnostic de performance et analysons les fonctions clés de l'entreprise pour identifier les leviers d'amélioration.",
  },
  {
    piece: "♜",
    question:
      "Vous souhaitez renforcer vos fonds propres et gérer votre croissance ?",
    answerTitle: "Recherche de financement",
    answer:
      "Nous définissons vos besoins et vous accompagnons dans la recherche de financement, auprès des banques comme des investisseurs.",
  },
  {
    piece: "♛",
    question:
      "Vous souhaitez optimiser votre fiscalité personnelle et celle de votre entreprise ?",
    answerTitle: "Montages fiscaux et financiers",
    answer:
      "Nous étudions des solutions adaptées et des montages optimisant les leviers fiscaux et financiers du dirigeant et de l'entreprise.",
  },
];

export default function ExpertiseComptablePage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <PageHero
        kicker="Expertise comptable et financière"
        title="Vos comptes, lus avec un regard de stratège"
        description="Une tenue rigoureuse et une lecture stratégique de vos comptes, au service de vos décisions de dirigeant de PME."
      />

      {/* ============ 2. QUESTIONS / RÉPONSES ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-[clamp(64px,10vw,120px)] sm:px-10">
          {QUESTIONS.map((q) => (
            <div
              key={q.piece}
              className="grid grid-cols-1 items-start gap-[clamp(24px,5vw,80px)] border-b border-ink/10 py-[clamp(36px,6vw,56px)] min-[900px]:grid-cols-[1fr_1.3fr]"
            >
              <div className="flex items-baseline gap-5">
                <span
                  aria-hidden
                  className="font-serif text-[34px] leading-none text-gold"
                >
                  {q.piece}
                </span>
                <h2 className="m-0 font-serif text-[clamp(24px,3.2vw,32px)] font-normal leading-[1.2]">
                  {q.question}
                </h2>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {q.answerTitle}
                </span>
                <p className="m-0 text-base leading-[1.7] text-muted">
                  {q.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 3. VOTRE INTERLOCUTEUR ============ */}
      <section className="border-t border-ink/6 bg-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(32px,6vw,90px)] px-5 py-[clamp(64px,10vw,110px)] sm:px-10 min-[900px]:grid-cols-[340px_1fr]">
          <div className="aspect-[3/4] w-full max-w-[340px] rounded-md border border-gold/50 bg-cream p-2">
            {/* Photo réelle : atc.paris/wp-content/uploads/2020/09/photo-AT.jpg (site hors ligne) */}
            <ImageSlot
              hint="portrait : Alexandre Tellier"
              className="h-full w-full rounded-[4px]"
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

      {/* ============ 4. CTA FINAL ============ */}
      <CtaFinal
        title="Donnez à vos chiffres un rôle stratégique"
        description="Un premier échange confidentiel, sans engagement, pour comprendre vos enjeux de pilotage."
      />
    </>
  );
}
