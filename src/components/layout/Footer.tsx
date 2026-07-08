import { Link } from "@/i18n/navigation";
import { CABINET_ADDRESS } from "@/content/metiers";
import Logo from "@/components/ui/Logo";

const FOOTER_LINKS = [
  { href: "/expertises", label: "Expertises" },
  { href: "/expertises/transmission", label: "Transmission" },
  { href: "/le-cabinet", label: "Le cabinet" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 px-5 py-9 sm:px-10">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-cream px-4 py-[7px]"
        >
          <Logo compact />
        </Link>

        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] text-cream/60 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <span className="text-[13px] text-cream/45">
          {CABINET_ADDRESS}. Confidentialité absolue.
        </span>
      </div>
    </footer>
  );
}
