import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import Kicker from "@/components/ui/Kicker";
import SectionHeading from "@/components/ui/SectionHeading";
import ImageSlot from "@/components/ui/ImageSlot";
import LogoMarquee from "@/components/atc/LogoMarquee";
import GuideForm from "@/components/atc/GuideForm";
import Faq from "@/components/atc/Faq";
import CtaFinal from "@/components/atc/CtaFinal";
import TestimonialCard from "@/components/atc/TestimonialCard";
import { getFeaturedTestimonials } from "@/lib/api/testimonials";

export const metadata: Metadata = {
  title: "ATC, Transmission & Stratégie",
};

const STATS = [
  { value: "120+", label: "transmissions accompagnées" },
  { value: "25 ans", label: "d'expérience en direction financière" },
  { value: "380 M€", label: "de valeur d'entreprise conseillée" },
  { value: "1 seul", label: "interlocuteur, du premier échange à la signature" },
];

const HOME_EXPERTISES = [
  {
    num: "I",
    title: "Transmission d'entreprise",
    description:
      "Cession, reprise, transmission familiale : une stratégie sur mesure, menée en toute confidentialité.",
    href: "/expertises/transmission",
  },
  {
    num: "II",
    title: "Expertise comptable & financière",
    description:
      "Une tenue rigoureuse et une lecture stratégique de vos comptes, au service de vos décisions.",
    href: "/expertises/expertise-comptable",
  },
  {
    num: "III",
    title: "Start-up & innovation",
    description:
      "Structuration financière, levées de fonds et pilotage de la croissance des jeunes entreprises.",
    href: "/expertises/entreprises-innovantes",
  },
  {
    num: "IV",
    title: "Direction financière externalisée",
    description:
      "Un DAF expérimenté à temps partagé, pour piloter votre performance sans alourdir vos coûts.",
    href: "/expertises/expertise-comptable",
  },
  {
    num: "V",
    title: "Expertise sociale",
    description:
      "Paie, contrats et conformité sociale : sécuriser la dimension humaine de votre entreprise.",
    href: "/expertises/expertise-sociale",
  },
];

const HOME_FAQ = [
  {
    question: "Combien de temps faut-il pour céder une entreprise ?",
    answer:
      "Comptez en général de 12 à 24 mois entre la décision et la signature, et idéalement 2 à 3 ans de préparation en amont pour optimiser la valorisation et la fiscalité. Chaque situation est différente : le premier diagnostic permet d'établir un calendrier réaliste.",
  },
  {
    question: "Comment est valorisée mon entreprise ?",
    answer:
      "Nous croisons plusieurs approches (rentabilité, actifs, comparables de marché) à l'aide de nos outils d'évaluation et de nos bases de données sectorielles. La valeur retenue est celle qui résiste à la négociation et au financement, pas un chiffre théorique.",
  },
  {
    question: "La confidentialité est-elle garantie ?",
    answer:
      "Oui, c'est une condition absolue. Les repreneurs potentiels sont qualifiés avant tout échange, signent un engagement de confidentialité, et l'identité de votre entreprise n'est révélée qu'au moment opportun.",
  },
  {
    question: "Comment le cabinet est-il rémunéré ?",
    answer:
      "Notre mode de rémunération est conçu pour garantir l'indépendance de nos conseils : nous n'avons aucun intérêt à conclure une opération qui ne serait pas la bonne pour vous. Il est présenté en toute transparence dès le premier rendez-vous.",
  },
];

export default async function HomePage() {
  const testimonials = await getFeaturedTestimonials();

  return (
    <>
      {/* ============ 1. HERO ============ */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="chess-pattern mask-fade-left absolute right-0 top-0 h-full w-[46%] opacity-35"
        />
        <div className="relative mx-auto max-w-[1240px] px-5 pb-[clamp(64px,12vw,150px)] pt-[clamp(64px,12vw,140px)] sm:px-10">
          <div className="flex max-w-[780px] flex-col gap-9">
            <Kicker>Conseil en transmission, M&A & direction financière</Kicker>
            <h1 className="m-0 font-serif text-[clamp(40px,8vw,74px)] font-normal leading-[1.06] tracking-[-0.015em] [text-wrap:balance]">
              L&apos;art de transmettre,
              <br />
              la stratégie d&apos;avancer.
            </h1>
            <p className="m-0 max-w-[560px] text-[19px] leading-[1.65] text-cream/70">
              Nous accompagnons les dirigeants de PME et d&apos;ETI aux moments
              décisifs&nbsp;: céder, reprendre, structurer. Avec la rigueur
              d&apos;un cabinet et l&apos;écoute d&apos;un partenaire.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-[18px]">
              <Link
                href="/contact"
                className="rounded-xs bg-gold px-[34px] py-[17px] text-[15px] font-semibold tracking-wide text-cream transition-colors hover:bg-gold-light"
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="/expertises/transmission"
                className="border-b border-cream/35 pb-[3px] text-[15px] font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Découvrir la transmission →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. LOGOS CLIENTS ============ */}
      <LogoMarquee />

      {/* ============ 3. CHIFFRES CLÉS ============ */}
      <section className="border-b border-ink/8">
        <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-10 px-5 pb-5 pt-16 sm:px-10">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="flex flex-col gap-2 border-l border-gold/45 pl-7"
            >
              <span className="font-serif text-[clamp(30px,5vw,44px)] font-normal text-ink">
                {stat.value}
              </span>
              <span className="text-sm leading-normal text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-[1240px] px-5 pb-7 sm:px-10">
          <span className="text-xs italic text-muted/70">
            * Chiffres illustratifs, à ajuster avec le cabinet.
          </span>
        </div>
      </section>

      {/* ============ 4. CÉDANT / REPRENEUR ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 pb-[clamp(64px,12vw,110px)] pt-[clamp(64px,12vw,120px)] sm:px-10">
          <SectionHeading
            kicker="Votre projet"
            title="Deux parcours, un même niveau d'exigence"
            className="mb-16 max-w-[640px] text-ink"
          />
          <div className="grid grid-cols-1 gap-7 min-[900px]:grid-cols-2">
            <div className="flex flex-col border border-ink/8 bg-paper">
              <ImageSlot
                hint="photo : dirigeant cédant, atelier ou bureau"
                className="h-[280px] w-full"
              />
              <div className="flex flex-col gap-4 px-[38px] pb-[38px] pt-10">
                <h3 className="m-0 font-serif text-[clamp(24px,3.8vw,30px)] font-medium leading-[1.15]">
                  Vous cédez votre entreprise
                </h3>
                <p className="m-0 text-base leading-[1.65] text-muted">
                  Préparer, valoriser, transmettre en toute confidentialité.
                  Nous protégeons la valeur de votre travail et l&apos;avenir de
                  vos équipes, jusqu&apos;à la signature.
                </p>
                <Link
                  href="/expertises/cession"
                  className="mt-2 self-start rounded-xs bg-gold px-[30px] py-[15px] text-[15px] font-semibold tracking-wide text-cream transition-colors hover:bg-gold-light"
                >
                  Préparer ma cession
                </Link>
              </div>
            </div>
            <div className="flex flex-col border border-ink/8 bg-paper">
              <ImageSlot
                hint="photo : repreneur en visite de site"
                className="h-[280px] w-full"
              />
              <div className="flex flex-col gap-4 px-[38px] pb-[38px] pt-10">
                <h3 className="m-0 font-serif text-[clamp(24px,3.8vw,30px)] font-medium leading-[1.15]">
                  Vous reprenez une entreprise
                </h3>
                <p className="m-0 text-base leading-[1.65] text-muted">
                  Cibler, évaluer, financer, sécuriser. Une méthode éprouvée et
                  des outils d&apos;analyse maison pour transformer votre projet
                  de reprise en réussite durable.
                </p>
                <Link
                  href="/expertises/reprise"
                  className="mt-2 self-start rounded-xs border border-ink/30 px-[30px] py-[14px] text-[15px] font-semibold tracking-wide text-ink transition-colors hover:border-gold hover:text-gold"
                >
                  Structurer ma reprise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. EXPERTISES ============ */}
      <section className="border-y border-ink/6 bg-paper">
        <div className="mx-auto max-w-[1240px] px-5 pb-[clamp(64px,12vw,110px)] pt-[clamp(64px,12vw,120px)] sm:px-10">
          <div className="mb-[72px] flex flex-wrap items-end justify-between gap-[60px]">
            <SectionHeading
              kicker="Nos expertises"
              title="Un accompagnement complet, pensé pour les dirigeants"
              className="max-w-[620px] text-ink"
            />
            <Link
              href="/expertises"
              className="whitespace-nowrap border-b border-gold/40 pb-1 text-[15px] font-semibold text-gold transition-colors hover:border-gold"
            >
              Toutes nos expertises →
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
            {HOME_EXPERTISES.map((exp) => (
              <Link
                key={exp.num}
                href={exp.href}
                className="flex min-h-[210px] flex-col gap-[18px] border border-ink/8 bg-cream px-9 pb-9 pt-10 text-ink transition-colors hover:border-gold/60"
              >
                <span className="font-serif text-xl italic text-gold">
                  {exp.num}
                </span>
                <h3 className="m-0 font-serif text-[25px] font-medium leading-[1.2]">
                  {exp.title}
                </h3>
                <p className="m-0 text-[15px] leading-[1.6] text-muted">
                  {exp.description}
                </p>
              </Link>
            ))}
            <div className="flex flex-col justify-end gap-3 bg-ink px-9 pb-9 pt-10 text-cream">
              <p className="m-0 font-serif text-2xl italic leading-[1.35]">
                «&nbsp;Chaque entreprise mérite une stratégie à sa
                mesure.&nbsp;»
              </p>
              <Link
                href="/contact"
                className="mt-2 text-sm font-semibold text-gold"
              >
                Parlons de la vôtre →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 6. FOCUS TRANSMISSION ============ */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="chess-pattern mask-fade-right absolute bottom-0 left-0 h-[55%] w-[34%] opacity-30"
        />
        <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(48px,7vw,90px)] px-5 py-[clamp(64px,12vw,130px)] sm:px-10 min-[900px]:grid-cols-2">
          <div className="flex flex-col gap-7">
            <Kicker>Transmission d&apos;entreprise</Kicker>
            <h2 className="m-0 font-serif text-[clamp(30px,5.5vw,46px)] font-normal leading-[1.12] tracking-[-0.01em] [text-wrap:balance]">
              Transmettre est un coup de maître.
              <br />
              Il se prépare.
            </h2>
            <p className="m-0 max-w-[480px] text-[17px] leading-[1.7] text-cream/70">
              Une cession réussie se joue des années avant la signature.
              Valorisation, anticipation fiscale, choix du repreneur,
              accompagnement humain&nbsp;: nous orchestrons chaque étape, à vos
              côtés, en toute confidentialité.
            </p>
            <div className="mt-2 flex flex-col gap-3.5">
              {[
                "Diagnostic et valorisation de votre entreprise",
                "Recherche et sélection confidentielle des repreneurs",
                "Négociation, structuration et signature",
              ].map((step, i) => (
                <div key={step} className="flex items-baseline gap-3.5">
                  <span className="font-serif text-lg text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-cream">{step}</span>
                </div>
              ))}
            </div>
            <Link
              href="/expertises/transmission"
              className="mt-4 self-start rounded-xs bg-gold px-8 py-4 text-[15px] font-semibold tracking-wide text-cream transition-colors hover:bg-gold-light"
            >
              Découvrir notre approche
            </Link>
          </div>
          <div className="w-full min-[900px]:justify-self-end min-[900px]:max-w-[480px]">
            <ImageSlot
              hint="photo : échiquier, lumière chaude"
              dark
              className="h-[min(560px,110vw)] w-full"
            />
          </div>
        </div>
      </section>

      {/* ============ 7. LE FONDATEUR ============ */}
      <section>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(48px,8vw,100px)] px-5 py-[clamp(64px,12vw,130px)] sm:px-10 min-[900px]:grid-cols-[420px_1fr]">
          <ImageSlot
            hint="portrait : Alexandre Tellier, lumière naturelle"
            className="h-[min(520px,110vw)] w-full min-[900px]:w-[420px]"
          />
          <div className="flex max-w-[560px] flex-col gap-[26px]">
            <Kicker>Le cabinet</Kicker>
            <h2 className="m-0 font-serif text-[clamp(30px,5.5vw,46px)] font-normal leading-[1.12] tracking-[-0.01em]">
              Une conviction&nbsp;: la finance au service de l&apos;humain
            </h2>
            <p className="m-0 text-[17px] leading-[1.7] text-muted">
              Expert-comptable et ancien directeur financier, conférencier sur
              la transmission d&apos;entreprise, Alexandre Tellier a bâti le
              cabinet sur une idée simple&nbsp;: derrière chaque bilan, il y a
              une histoire, une équipe, une vie de travail. C&apos;est cette
              histoire que nous protégeons, avec méthode, discrétion et
              exigence.
            </p>
            <div className="mt-1 flex flex-wrap gap-10">
              {[
                { title: "Ex-DAF", sub: "de start-up innovantes" },
                { title: "Conférencier", sub: "transmission & évaluation" },
                { title: "Expert-comptable", sub: "diplômé" },
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-1">
                  <span className="font-serif text-[22px] text-ink">
                    {item.title}
                  </span>
                  <span className="text-[13px] text-muted">{item.sub}</span>
                </div>
              ))}
            </div>
            <Link
              href="/le-cabinet"
              className="mt-2 self-start border-b border-gold/40 pb-1 text-[15px] font-semibold text-gold transition-colors hover:border-gold"
            >
              Rencontrer le cabinet →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 8. GUIDE / AIMANT À LEADS ============ */}
      <section className="border-y border-ink/6 bg-paper">
        <div className="mx-auto max-w-[1240px] px-5 py-[clamp(64px,12vw,100px)] sm:px-10">
          <div className="grid grid-cols-1 items-center gap-[clamp(40px,6vw,80px)] border border-gold/40 bg-cream p-[clamp(28px,6vw,80px)] min-[900px]:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-col gap-[18px]">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Guide gratuit
              </span>
              <h2 className="m-0 font-serif text-[clamp(28px,5vw,40px)] font-normal leading-[1.15] tracking-[-0.01em] [text-wrap:balance]">
                Les 5 erreurs à éviter avant de céder son entreprise
              </h2>
              <p className="m-0 max-w-[480px] text-base leading-[1.65] text-muted">
                Le fruit de vingt ans d&apos;opérations de transmission,
                condensé en un guide pratique pour préparer votre cession
                sereinement.
              </p>
            </div>
            <GuideForm />
          </div>
        </div>
      </section>

      {/* ============ 9. TÉMOIGNAGES ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 py-[clamp(64px,12vw,120px)] sm:px-10">
          <SectionHeading
            center
            kicker="Ils nous ont fait confiance"
            title="La parole aux repreneurs"
            className="mb-[70px] text-ink"
          />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ 10. FAQ ============ */}
      <section className="border-t border-ink/6 bg-paper">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[clamp(40px,7vw,90px)] px-5 py-[clamp(64px,12vw,110px)] sm:px-10 min-[900px]:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            kicker="Questions fréquentes"
            title="Vos questions sur la transmission"
            className="text-ink"
          />
          <Faq items={HOME_FAQ} />
        </div>
      </section>

      {/* ============ 11. CTA FINAL ============ */}
      <CtaFinal />
    </>
  );
}
