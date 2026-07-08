import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Kicker from "@/components/ui/Kicker";
import ImageSlot from "@/components/ui/ImageSlot";
import SectionHeading from "@/components/ui/SectionHeading";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";

export const metadata: Metadata = {
  title: "Reprendre une entreprise, ATC",
};

const ETAPES = [
  {
    num: "I",
    piece: "♟",
    titre: "Une stratégie de reprise",
    desc: "Élaborer votre stratégie de reprise et anticiper les étapes clés de l'opération.",
  },
  {
    num: "II",
    piece: "♞",
    titre: "Analyser la cible",
    desc: "Analyser l'entreprise cible avec un outil d'analyse stratégique éprouvé.",
  },
  {
    num: "III",
    piece: "♝",
    titre: "Évaluer la cible",
    desc: "Évaluer la cible en combinant votre expertise métier et notre expertise financière.",
  },
  {
    num: "IV",
    piece: "♜",
    titre: "Négocier avec le cédant",
    desc: "Vous accompagner dans la négociation, avec méthode et sang-froid.",
  },
  {
    num: "V",
    piece: "♛",
    titre: "Construire le montage",
    desc: "Construire le montage juridique et financier le plus adapté à votre projet.",
  },
  {
    num: "VI",
    piece: "♚",
    titre: "Trouver le financement",
    desc: "Vous accompagner dans la recherche de financement jusqu'à l'accord des banques.",
  },
];

const REASSURANCE = [
  {
    title: "Bases de données et études de marché",
    desc: "Pour objectiver la valeur de la cible et situer son marché.",
  },
  {
    title: "Un prix finançable",
    desc: "L'évaluation sert la négociation : le bon prix est celui que les banques suivront.",
  },
  {
    title: "Un business plan bancable",
    desc: "Construit avec nos outils maison, éprouvé auprès des financeurs depuis 2004.",
  },
];

const TEMOIGNAGES = [
  {
    nom: "Marc Mezerette",
    operation: "Reprise de Comotech Industries",
    citation:
      "J'ai été dirigeant de haut niveau dans de très grandes entreprises mais également de plus petites structures. Je souhaitais jouer un rôle plus proche du terrain et de mon équipe.",
  },
  {
    nom: "Sophie Monteil",
    operation: "Reprise de MSTC",
    citation:
      "Après avoir effectué la totalité de ma carrière dans des grands groupes industriels internationaux, j'ai souhaité devenir cheffe d'entreprise pour pouvoir prendre moi-même les décisions que je juge bonnes.",
  },
  {
    nom: "Yves Laurisse",
    operation: "Reprise de Deal Informatique",
    citation:
      "Après plus de 25 ans passés à arpenter les différentes fonctions de l'édition de logiciel, dont les 5 dernières années chez SAP France, j'ai souhaité être chef d'entreprise.",
  },
];

export default function ReprisePage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <PageHero
        kicker="Reprise d'entreprise"
        title="Reprendre une entreprise, en six coups"
        description="Nous accompagnons les repreneurs de PME à chaque étape, de la stratégie initiale à l'accord des banques."
      >
        <div className="mt-1.5">
          <Link
            href="/contact"
            className="inline-block rounded-xs bg-gold px-8 py-4 text-[15px] font-semibold tracking-wide text-cream transition-colors hover:bg-gold-light"
          >
            Parler de mon projet de reprise
          </Link>
        </div>
      </PageHero>

      {/* ============ 2. SIX ÉTAPES ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 pb-[clamp(48px,8vw,100px)] pt-[clamp(64px,10vw,120px)] sm:px-10">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7">
            {ETAPES.map((e) => (
              <div
                key={e.num}
                className="flex min-h-[200px] flex-col gap-[18px] border border-ink/8 bg-paper px-9 pb-9 pt-10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-[40px] leading-none text-gold">
                    {e.piece}
                  </span>
                  <span className="font-serif text-lg italic text-muted">
                    {e.num}
                  </span>
                </div>
                <h2 className="m-0 font-serif text-[23px] font-medium leading-[1.25]">
                  {e.titre}
                </h2>
                <p className="m-0 text-[15px] leading-[1.6] text-muted">
                  {e.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. RÉASSURANCE ============ */}
      <section className="border-y border-ink/6 bg-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-5 py-[clamp(48px,8vw,90px)] sm:px-10 min-[900px]:grid-cols-3">
          {REASSURANCE.map((r) => (
            <div
              key={r.title}
              className="flex flex-col gap-2.5 border-l border-gold/45 pl-7"
            >
              <span className="font-serif text-2xl text-ink">{r.title}</span>
              <span className="text-sm leading-[1.6] text-muted">{r.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 4. VOTRE INTERLOCUTEUR ============ */}
      <section>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(32px,6vw,90px)] px-5 py-[clamp(64px,10vw,110px)] sm:px-10 min-[900px]:grid-cols-[340px_1fr]">
          <div className="w-[min(340px,100%)] rounded-md border border-gold/50 bg-paper p-2">
            <ImageSlot
              hint="portrait : Alexandre Tellier"
              src="/images/photo-AT.jpg"
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

      {/* ============ 5. TÉMOIGNAGES REPRENEURS ============ */}
      <section className="border-t border-ink/6 bg-paper">
        <div className="mx-auto max-w-[1240px] px-5 py-[clamp(64px,10vw,110px)] sm:px-10">
          <SectionHeading
            center
            kicker="Ils ont repris avec ATC"
            title="La parole aux repreneurs"
            className="mb-[60px] text-ink"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7">
            {TEMOIGNAGES.map((t) => (
              <figure
                key={t.nom}
                className="m-0 flex flex-col gap-[22px] border border-ink/6 bg-cream px-9 py-10"
              >
                <blockquote className="m-0 border-l-2 border-gold/50 pl-[18px] font-serif text-lg italic leading-[1.55] text-ink">
                  « {t.citation} »
                </blockquote>
                <figcaption className="mt-auto flex flex-col gap-[3px]">
                  <span className="text-[15px] font-semibold text-ink">
                    {t.nom}
                  </span>
                  <span className="text-[13px] text-muted">{t.operation}</span>
                </figcaption>
                <Link
                  href="/temoignages"
                  className="text-sm font-semibold text-gold"
                >
                  Lire son témoignage →
                </Link>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. CTA FINAL ============ */}
      <CtaFinal
        title="Prêt à jouer votre premier coup ?"
        description="Un premier échange confidentiel, sans engagement, pour évaluer votre projet de reprise."
      />
    </>
  );
}
