import type { Metadata } from "next";
import Kicker from "@/components/ui/Kicker";
import ContactForm from "@/components/atc/ContactForm";
import { CABINET_ADDRESS, CLIENT_PORTAL_URL } from "@/content/metiers";

export const metadata: Metadata = {
  title: "Contact, ATC",
};

const [ADDRESS_STREET, ADDRESS_CITY] = CABINET_ADDRESS.split(", ");

export default function ContactPage() {
  return (
    <>
      {/* ============ CONTACT ============ */}
      <section>
        <div className="mx-auto max-w-[1240px] px-5 pb-[clamp(64px,12vw,120px)] pt-[clamp(64px,12vw,100px)] sm:px-10">
          <div className="mb-20 flex max-w-[640px] flex-col gap-[22px]">
            <Kicker>Contact</Kicker>
            <h1 className="m-0 font-serif text-[clamp(34px,6.5vw,58px)] font-normal leading-[1.08] tracking-[-0.015em] text-ink">
              Écrivez-nous, en toute confidentialité
            </h1>
            <p className="m-0 text-lg leading-[1.65] text-muted">
              Chaque message est lu par un associé. Réponse sous 48 heures
              ouvrées.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-[clamp(48px,7vw,90px)] min-[900px]:grid-cols-[1.1fr_1fr]">
            {/* Formulaire */}
            <ContactForm />

            {/* Coordonnées */}
            <div className="flex flex-col gap-9">
              <div className="flex flex-col gap-[22px] border border-ink/8 bg-paper px-[38px] py-10">
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Adresse
                  </span>
                  <span className="font-serif text-[22px] leading-[1.4] text-ink">
                    {ADDRESS_STREET}
                    <br />
                    {ADDRESS_CITY}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Email
                  </span>
                  <span className="font-mono text-base text-muted">
                    contact@… (à compléter)
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Téléphone
                  </span>
                  <span className="font-mono text-base text-muted">
                    01 .. .. .. .. (à compléter)
                  </span>
                </div>
                <a
                  href={CLIENT_PORTAL_URL}
                  target="_blank"
                  rel="noopener"
                  className="mt-1.5 self-start rounded-xs border border-ink/25 px-[26px] py-[13px] text-sm font-semibold tracking-[0.03em] text-ink transition-colors hover:border-gold hover:text-gold"
                >
                  Accès client : espace comptable en ligne
                </a>
              </div>
              <iframe
                src="https://maps.google.com/maps?q=6+rue+Papillon+75009+Paris&z=15&output=embed"
                className="block h-80 w-full border border-ink/8 [filter:grayscale(1)_sepia(0.18)_contrast(0.95)]"
                loading="lazy"
                title="Plan : 6 rue Papillon, 75009 Paris"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ BANDEAU RDV ============ */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="chess-pattern absolute right-0 top-0 h-full w-[26%] opacity-[0.28] [mask-image:linear-gradient(115deg,transparent_30%,black_85%)]"
        />
        <div className="relative mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-10 px-5 py-16 sm:px-10">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 font-serif text-[clamp(25px,4vw,32px)] font-normal tracking-[-0.01em]">
              Prendre rendez-vous
            </h2>
            <p className="m-0 text-[15px] text-cream/65">
              Réservez directement un créneau d&apos;échange confidentiel de 30
              minutes.
            </p>
          </div>
          <a
            href="#"
            className="whitespace-nowrap rounded-xs bg-gold px-[34px] py-4 text-[15px] font-semibold tracking-[0.03em] text-cream transition-colors hover:bg-gold-light"
          >
            Réserver en ligne →
          </a>
        </div>
      </section>
    </>
  );
}
