/* eslint-disable @next/next/no-img-element */
import { Link } from "@/i18n/navigation";

/** Logos clients (fichiers rapatriés de l'ancien site, servis depuis /public). */
const CLIENT_LOGOS = [
  { name: "Comotech Industries", src: "/images/clients/Comotech-150x114.png" },
  { name: "MSTC", src: "/images/clients/MSTC-150x62.png" },
  { name: "Deal Informatique", src: "/images/clients/Deal.png" },
  { name: "Rivoyre Ingénierie", src: "/images/clients/Image3-150x114.png" },
  { name: "Tites Chaussettes", src: "/images/clients/Image1-150x150.png" },
  { name: "Egrille", src: "/images/clients/Egrille-150x79.png" },
  { name: "Monnet", src: "/images/clients/Monnet-150x75.png" },
  { name: "Atmosphère", src: "/images/clients/Atmosphere-150x49.png" },
];

function LogoRow() {
  return (
    <div className="flex items-center gap-[72px] pr-[72px]">
      {CLIENT_LOGOS.map((logo) => (
        <img
          key={logo.name}
          src={logo.src}
          alt={logo.name}
          loading="lazy"
          className="h-10 w-[150px] object-contain opacity-70 grayscale"
        />
      ))}
    </div>
  );
}

/** Bandeau logos clients défilant (lien vers les témoignages). */
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
          <LogoRow />
          <LogoRow />
        </div>
      </Link>
    </section>
  );
}
