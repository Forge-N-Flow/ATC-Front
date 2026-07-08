import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";
import { getEvents, getUpcomingEvents, type AtcEvent } from "@/lib/api/events";

export const metadata: Metadata = {
  title: "Agenda, ATC",
};

/** Regroupe les événements par année, de la plus récente à la plus ancienne. */
function groupByYear(events: AtcEvent[]): { year: string; items: AtcEvent[] }[] {
  const groups = new Map<string, AtcEvent[]>();
  for (const event of events) {
    const year = event.date.slice(0, 4);
    const items = groups.get(year) ?? [];
    items.push(event);
    groups.set(year, items);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, items]) => ({ year, items }));
}

export default async function AgendaPage() {
  const [events, upcoming] = await Promise.all([
    getEvents(),
    getUpcomingEvents(),
  ]);
  const next = upcoming[0] ?? null;
  const years = groupByYear(events);

  return (
    <>
      {/* ============ HERO ============ */}
      <PageHero
        kicker="Agenda"
        title="Agenda et interventions"
        description={
          <>
            Conférences, webinaires et formations animés par Alexandre Tellier
            sur la transmission d&apos;entreprise.
          </>
        }
      />

      {/* ============ PROCHAINE INTERVENTION ============ */}
      <section>
        <div className="mx-auto max-w-[900px] px-5 pt-[clamp(48px,8vw,80px)] sm:px-10">
          <div className="flex flex-wrap items-center justify-between gap-6 border border-gold bg-paper px-[clamp(24px,5vw,48px)] py-[clamp(28px,5vw,44px)]">
            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                Prochaine intervention
              </span>
              <span className="font-serif text-[clamp(23px,3.5vw,28px)] leading-[1.25] text-ink">
                {next ? next.title : "Date et titre à venir"}
              </span>
              <span className="text-sm text-muted">
                {next
                  ? `${next.dateLabel} — ${next.location}`
                  : "Les prochaines dates seront annoncées ici."}
              </span>
            </div>
            <Link
              href={next?.registrationUrl ?? "/contact"}
              className="whitespace-nowrap rounded-xs bg-gold px-7 py-3.5 text-sm font-semibold tracking-[0.03em] text-cream transition-colors hover:bg-gold-dark"
            >
              {next ? "S'inscrire" : "Être informé"}
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TIMELINE ============ */}
      <section>
        <div className="mx-auto max-w-[900px] px-5 pb-[clamp(64px,12vw,130px)] pt-[clamp(48px,8vw,80px)] sm:px-10">
          {years.map(({ year, items }) => (
            <div key={year} className="flex flex-col">
              <h2 className="mb-2 mt-12 font-serif text-[clamp(34px,5vw,48px)] font-normal tracking-[-0.01em] text-ink">
                {year}
              </h2>
              <div className="ml-[7px] flex flex-col border-l border-gold/50">
                {items.map((event) => (
                  <div key={event.id} className="relative py-[22px] pl-9">
                    <span
                      aria-hidden
                      className="absolute -left-[7px] top-[30px] h-[13px] w-[13px] border border-gold"
                      style={{
                        background:
                          "conic-gradient(#B38A3D 0 25%, #0D1B2A 0 50%, #B38A3D 0 75%, #0D1B2A 0)",
                      }}
                    />
                    <div className="flex flex-col gap-[7px]">
                      <div className="flex flex-wrap items-baseline gap-4">
                        <span className="whitespace-nowrap text-sm font-semibold tabular-nums text-gold">
                          {event.dateLabel}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                          {event.location}
                        </span>
                      </div>
                      <h3 className="m-0 font-serif text-[clamp(20px,3vw,24px)] font-medium leading-[1.3] text-ink">
                        {event.title}
                      </h3>
                      {event.videoUrl && (
                        <a
                          href={event.videoUrl}
                          className="self-start border-b border-gold/40 pb-0.5 text-[13px] font-semibold text-gold transition-colors hover:border-gold"
                        >
                          Voir la vidéo →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <CtaFinal
        title={
          "Vous souhaitez inviter Alexandre Tellier à intervenir ?"
        }
        description="Conférences, webinaires et formations sur l'évaluation, le financement et la transmission d'entreprise."
        primaryLabel="Nous contacter"
        primaryHref="/contact"
      />
    </>
  );
}
