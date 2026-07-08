import Kicker from "@/components/ui/Kicker";

/**
 * Héros navy des pages intérieures : damier en fond, kicker, titre serif,
 * chapo optionnel et zone d'actions libre.
 */
export default function PageHero({
  kicker,
  title,
  description,
  children,
}: {
  kicker: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div
        aria-hidden
        className="chess-pattern mask-fade-left absolute right-0 top-0 h-full w-[46%] opacity-35"
      />
      <div className="relative mx-auto max-w-[1240px] px-5 py-[clamp(56px,10vw,110px)] sm:px-10">
        <div className="flex max-w-[780px] flex-col gap-8">
          <Kicker>{kicker}</Kicker>
          <h1 className="font-serif text-[clamp(36px,6.5vw,62px)] font-normal leading-[1.08] tracking-[-0.015em] [text-wrap:balance]">
            {title}
          </h1>
          {description && (
            <p className="max-w-[560px] text-lg leading-[1.65] text-cream/70">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
