import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="font-serif text-gold text-7xl italic">404</span>
      <h1 className="font-serif text-3xl font-normal text-ink">
        Page introuvable
      </h1>
      <p className="max-w-md text-muted">
        La page que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="rounded-xs bg-gold px-8 py-4 text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold-dark"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
