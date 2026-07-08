import { Link } from "@/i18n/navigation";

/**
 * Bandeau CTA final navy, réutilisé en bas de chaque page (au-dessus du footer).
 */
export default function CtaFinal({
  title = "Et si nous parlions de la suite de votre histoire ?",
  description = "Un premier échange confidentiel, sans engagement, pour comprendre votre situation et vos ambitions.",
  primaryLabel = "Prendre rendez-vous",
  primaryHref = "/contact",
  secondaryLabel = "Nous écrire →",
  secondaryHref = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden
        className="chess-pattern absolute right-0 top-0 h-full w-[30%] opacity-30 [mask-image:linear-gradient(115deg,transparent_25%,black_80%)]"
      />
      <div className="relative mx-auto flex max-w-[1240px] flex-col items-center gap-8 px-5 py-[clamp(64px,12vw,130px)] text-center sm:px-10">
        <h2 className="max-w-[720px] font-serif text-[clamp(32px,6vw,54px)] font-normal leading-[1.1] tracking-[-0.01em] [text-wrap:balance]">
          {title}
        </h2>
        <p className="max-w-[520px] text-[17px] leading-[1.65] text-cream/70">
          {description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-[18px]">
          <Link
            href={primaryHref}
            className="rounded-xs bg-gold px-9 py-[17px] text-[15px] font-semibold tracking-wide text-cream transition-colors hover:bg-gold-light"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="border-b border-cream/35 pb-[3px] text-[15px] font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
