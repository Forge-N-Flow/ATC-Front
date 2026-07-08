/**
 * Marque ATC en texte stylé (reprend le fallback des maquettes).
 * L'ancien site atc.paris étant hors ligne, on n'hotlinke pas son logo ;
 * remplacer par le fichier définitif dans /public quand il sera fourni.
 */
export default function Logo({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <span className="font-serif text-xl font-medium leading-none text-ink">
        ATC
      </span>
    );
  }

  return (
    <span className="flex items-baseline gap-2 whitespace-nowrap">
      <span className="font-serif text-[26px] font-medium leading-none text-ink">
        ATC
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
        Conseil &amp; Expertise
      </span>
    </span>
  );
}
