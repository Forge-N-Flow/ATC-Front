import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Kicker from "@/components/ui/Kicker";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageSlot from "@/components/ui/ImageSlot";
import PageHero from "@/components/atc/PageHero";
import Faq from "@/components/atc/Faq";
import CtaFinal from "@/components/atc/CtaFinal";

export const metadata: Metadata = {
  title: "Transmission d'entreprise, ATC",
};

const PARCOURS = [
  {
    piece: "♞",
    title: "Je reprends une entreprise",
    description:
      "Cibler, évaluer, négocier, financer : nous sécurisons chaque étape de votre projet de reprise, de la stratégie initiale à l'accord des banques.",
    cta: "Découvrir l'accompagnement reprise →",
    href: "/expertises/reprise",
    hint: "photo : repreneur, poignée de main",
  },
  {
    piece: "♚",
    title: "Je cède mon entreprise",
    description:
      "Préparer, valoriser, transmettre en toute confidentialité : nous protégeons le fruit d'une vie de travail jusqu'à la signature.",
    cta: "Découvrir l'accompagnement cession →",
    href: "/expertises/cession",
    hint: "photo : cédant, transmission de clés",
  },
];

const ATOUTS = [
  {
    num: "I",
    titre: "Spécialiste depuis 2004",
    desc: "Vingt ans d'opérations de transmission de PME et TPE, côté cédants comme repreneurs.",
  },
  {
    num: "II",
    titre: "Des conseils fondés sur la prudence",
    desc: "Nous préférons vous dissuader d'une mauvaise opération que de conclure à tout prix.",
  },
  {
    num: "III",
    titre: "Une rémunération indépendante",
    desc: "Notre mode de rémunération garantit l'indépendance totale de nos conseils.",
  },
  {
    num: "IV",
    titre: "Des outils maison",
    desc: "Outils propres d'évaluation et de business plan, bases de données et études de marché.",
  },
  {
    num: "V",
    titre: "Un écosystème complet",
    desc: "Collaboration étroite avec intermédiaires, banques et avocats tout au long de l'opération.",
  },
];

const TRANSMISSION_FAQ = [
  {
    question: "Quand faut-il commencer à préparer une cession ?",
    answer:
      "Idéalement deux à trois ans avant la vente. Ce délai permet d'optimiser la structure de l'entreprise, de fiabiliser les comptes, de réduire les zones de dépendance et de choisir le bon moment de marché.",
  },
  {
    question: "Combien de temps dure une opération de transmission ?",
    answer:
      "Comptez en général de 9 à 18 mois entre le lancement de la démarche et la signature, selon la préparation de l'entreprise, le profil des repreneurs et les négociations.",
  },
  {
    question: "Comment la confidentialité est-elle garantie ?",
    answer:
      "L'identité de l'entreprise n'est révélée qu'après signature d'un engagement de confidentialité, à des candidats préalablement qualifiés. Les salariés, clients et fournisseurs ne sont jamais exposés pendant la démarche.",
  },
  {
    question: "La valorisation détermine-t-elle le prix de vente ?",
    answer:
      "Non. L'évaluation ne sert que de base à la négociation qui fixera le prix. Un prix doit surtout être finançable : évaluer trop haut, c'est risquer que l'entreprise ne se vende pas et perde en crédibilité.",
  },
];

export default function TransmissionPage() {
  return (
    <>
      {/* ============ 1. HERO ============ */}
      <PageHero
        kicker="Transmission d'entreprise"
        title="Céder, reprendre : chaque coup se prépare."
        description="La reprise comme la cession sont des opérations complexes qui doivent être anticipées et planifiées pour être sécurisées et optimisées."
      />

      {/* ============ 2. REPRISE OU CESSION ============ */}
      <section>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-7 px-5 py-[clamp(48px,8vw,100px)] sm:px-10 min-[900px]:grid-cols-2">
          {PARCOURS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="flex flex-col border border-ink/8 bg-paper text-ink transition-colors hover:border-gold/60"
            >
              <ImageSlot hint={p.hint} className="h-[260px] w-full" />
              <div className="flex flex-col gap-4 px-9 pb-10 pt-[38px]">
                <span className="font-serif text-xl italic text-gold">
                  {p.piece}
                </span>
                <h2 className="m-0 font-serif text-[clamp(26px,3.4vw,34px)] font-normal leading-[1.15]">
                  {p.title}
                </h2>
                <p className="m-0 text-base leading-[1.65] text-muted">
                  {p.description}
                </p>
                <span className="mt-2 text-[15px] font-semibold text-gold">
                  {p.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ============ 3. POURQUOI ATC ============ */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="chess-pattern mask-fade-right absolute bottom-0 left-0 h-[60%] w-[32%] opacity-30"
        />
        <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[clamp(40px,7vw,90px)] px-5 py-[clamp(64px,10vw,120px)] sm:px-10 min-[900px]:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <Kicker>Pourquoi ATC</Kicker>
            <h2 className="m-0 font-serif text-[clamp(30px,5.5vw,46px)] font-normal leading-[1.12] tracking-[-0.01em] [text-wrap:balance]">
              Un partenaire, pas un intermédiaire
            </h2>
            <p className="m-0 text-[17px] leading-[1.7] text-cream/70">
              Spécialiste de la transmission de PME et TPE depuis 2004, nous
              savons qu&apos;une opération engage bien plus que des chiffres :
              des enjeux financiers, familiaux, et des choix de vie.
            </p>
          </div>
          <div className="flex flex-col">
            {ATOUTS.map((a) => (
              <div
                key={a.num}
                className="flex items-baseline gap-6 border-b border-cream/12 py-6"
              >
                <span className="min-w-8 font-serif text-lg italic text-gold">
                  {a.num}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="m-0 font-serif text-[22px] font-medium">
                    {a.titre}
                  </h3>
                  <p className="m-0 text-[15px] leading-[1.6] text-cream/65">
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 4. FAQ ============ */}
      <section>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[clamp(40px,7vw,90px)] px-5 py-[clamp(64px,10vw,120px)] sm:px-10 min-[900px]:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            kicker="Questions fréquentes"
            title="Avant de vous lancer"
            className="text-ink"
          />
          <Faq items={TRANSMISSION_FAQ} />
        </div>
      </section>

      {/* ============ 5. CTA FINAL ============ */}
      <CtaFinal
        title="Votre projet mérite d'être bien joué"
        description="Un premier échange confidentiel, sans engagement, pour évaluer votre projet de cession ou de reprise."
      />
    </>
  );
}
