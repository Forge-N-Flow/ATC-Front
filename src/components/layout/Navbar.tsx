"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { METIERS, CLIENT_PORTAL_URL } from "@/content/metiers";

const NAV_LINKS = [
  { href: "/temoignages", label: "Témoignages" },
  { href: "/articles", label: "Articles" },
  { href: "/agenda", label: "Agenda" },
  { href: "/le-cabinet", label: "Le cabinet" },
  { href: "/contact", label: "Contact" },
];

function navLinkClass(active: boolean) {
  return active
    ? "whitespace-nowrap border-b-2 border-gold pb-[3px] text-sm font-semibold text-ink"
    : "whitespace-nowrap border-b-2 border-transparent pb-[3px] text-sm font-medium text-muted transition-colors hover:text-ink";
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMetiersOpen, setMobileMetiersOpen] = useState(false);

  const isMetierActive = pathname.startsWith("/expertises");

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[84px] max-w-[1280px] items-center justify-between gap-5 px-5 sm:px-9">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="https://www.atc.paris/wp-content/uploads/2020/09/cropped-logo-fond-blanc-e1599656553868.jpg"
            alt="ATC Conseil et Expertise"
            width={215}
            height={48}
            priority
            className="h-12 w-auto mix-blend-multiply"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden h-full items-center gap-[22px] min-[1140px]:flex">
          <Link href="/" className={navLinkClass(pathname === "/")}>
            Accueil
          </Link>

          {/* Dropdown Nos métiers */}
          <div className="group relative flex h-full items-center">
            <Link
              href="/expertises"
              className={`${navLinkClass(isMetierActive)} inline-flex items-center gap-1`}
            >
              Nos métiers
              <ChevronDown size={14} strokeWidth={2.5} className="text-gold" />
            </Link>
            <div className="invisible absolute -left-4 top-full z-60 min-w-[300px] flex-col border border-ink/10 bg-paper py-2.5 opacity-0 shadow-[0_16px_40px_rgba(13,27,42,0.14)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 flex">
              {METIERS.map((m) => (
                <Link
                  key={m.slug}
                  href={m.href}
                  className="block whitespace-nowrap px-[22px] py-[11px] text-sm font-medium text-muted transition-colors hover:bg-gold/10 hover:text-ink"
                >
                  {m.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClass(pathname.startsWith(link.href))}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-[18px] min-[1140px]:flex">
          <a
            href={CLIENT_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap border-b border-muted/35 pb-0.5 text-[13px] font-semibold text-muted transition-colors hover:border-gold hover:text-ink"
          >
            Accès client
          </a>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-xs bg-gold px-[26px] py-[13px] text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold-dark"
          >
            Prendre rendez-vous
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          className="flex h-11 w-11 items-center justify-center text-ink min-[1140px]:hidden"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="max-h-[calc(100vh-84px)] overflow-y-auto border-t border-ink/10 bg-cream px-5 pb-8 pt-4 min-[1140px]:hidden">
          <div className="flex flex-col">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="border-b border-ink/8 py-4 text-base font-medium text-ink"
            >
              Accueil
            </Link>

            <button
              type="button"
              onClick={() => setMobileMetiersOpen((o) => !o)}
              aria-expanded={mobileMetiersOpen}
              className="flex items-center justify-between border-b border-ink/8 py-4 text-base font-medium text-ink"
            >
              Nos métiers
              <ChevronDown
                size={18}
                className={`text-gold transition-transform ${mobileMetiersOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileMetiersOpen && (
              <div className="flex flex-col border-b border-ink/8 pb-2">
                {METIERS.map((m) => (
                  <Link
                    key={m.slug}
                    href={m.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-3 pl-4 text-[15px] text-muted"
                  >
                    {m.shortTitle}
                  </Link>
                ))}
              </div>
            )}

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-ink/8 py-4 text-base font-medium text-ink"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={CLIENT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-ink/8 py-4 text-base font-medium text-muted"
            >
              Accès client
            </a>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 rounded-xs bg-gold px-7 py-4 text-center text-sm font-semibold tracking-wide text-cream"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
