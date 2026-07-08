import { Link } from "@/i18n/navigation";

/**
 * Noms des clients accompagnés. Les logos hébergés sur l'ancien site
 * atc.paris étant hors ligne, on affiche les noms en serif (fallback prévu
 * par les maquettes) — remettre des <img> quand les fichiers seront fournis.
 */
const CLIENT_NAMES = [
  "Comotech Industries",
  "MSTC",
  "Deal Informatique",
  "Rivoyre Ingénierie",
  "Tites Chaussettes",
  "Egrille",
  "Monnet",
  "Atmosphère",
];

function NameRow() {
  return (
    <div className="flex items-center gap-[72px] pr-[72px]">
      {CLIENT_NAMES.map((name) => (
        <span
          key={name}
          className="whitespace-nowrap font-serif text-[17px] text-muted opacity-80"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

/** Bandeau clients défilant (lien vers les témoignages). */
export default function LogoMarquee() {
  return (
    <section className="overflow-hidden border-b border-ink/6 bg-paper">
      <div className="mx-auto max-w-[1240px] px-5 pb-2.5 pt-[26px] text-center sm:px-10">
        <Link
          href="/temoignages"
          className="text-xs font-semibold uppercase tracking-[0.22em] text-muted transition-colors hover:text-gold"
        >
          Ils nous ont fait confiance
        </Link>
      </div>
      <Link href="/temoignages" className="block pb-[30px] pt-[22px]">
        <div className="animate-marquee flex w-max">
          <NameRow />
          <NameRow />
        </div>
      </Link>
    </section>
  );
}
