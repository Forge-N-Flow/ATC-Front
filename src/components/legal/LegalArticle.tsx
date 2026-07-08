import Kicker from "@/components/ui/Kicker";

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

/** Gabarit des pages légales : héros sobre + sections numérotées. */
export default function LegalArticle({
  kicker,
  title,
  updatedAt,
  sections,
}: {
  kicker: string;
  title: string;
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="chess-pattern mask-fade-left absolute right-0 top-0 h-full w-[46%] opacity-35"
        />
        <div className="relative mx-auto max-w-[1240px] px-5 py-[clamp(48px,8vw,90px)] sm:px-10">
          <div className="flex max-w-[780px] flex-col gap-7">
            <Kicker>{kicker}</Kicker>
            <h1 className="m-0 font-serif text-[clamp(32px,6vw,54px)] font-normal leading-[1.1] tracking-[-0.015em]">
              {title}
            </h1>
            <p className="m-0 text-sm text-cream/60">
              Dernière mise à jour&nbsp;: {updatedAt}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-[820px] flex-col gap-12 px-5 py-[clamp(48px,8vw,90px)] sm:px-10">
          {sections.map((section, i) => (
            <article key={section.title} className="flex flex-col gap-4">
              <h2 className="m-0 flex items-baseline gap-3.5 font-serif text-[26px] font-medium leading-[1.25] text-ink">
                <span className="font-serif text-lg italic text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="m-0 text-base leading-[1.75] text-muted">
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
