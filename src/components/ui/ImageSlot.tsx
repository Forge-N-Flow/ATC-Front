import Image from "next/image";

/**
 * Emplacement photo. Tant que les vraies photos du cabinet ne sont pas
 * fournies, affiche un placeholder élégant avec la description de la photo
 * attendue (reprend les hints des maquettes ATC-Design). Passer `src` pour
 * afficher une vraie image.
 */
export default function ImageSlot({
  hint,
  src,
  alt,
  className = "",
  dark = false,
}: {
  /** Description de la photo attendue, ex. "portrait : Alexandre Tellier". */
  hint: string;
  src?: string;
  alt?: string;
  className?: string;
  /** Variante pour fonds navy. */
  dark?: boolean;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt ?? hint}
          fill
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt ?? hint}
      className={`relative flex items-center justify-center overflow-hidden border p-6 ${
        dark
          ? "border-cream/15 bg-[#122236]"
          : "border-ink/10 bg-[#E9E4DC]"
      } ${className}`}
    >
      {/* Trame diagonale discrète */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${
            dark ? "rgba(247,245,242,0.05)" : "rgba(13,27,42,0.05)"
          } 0 1px, transparent 1px 14px)`,
        }}
      />
      <span
        className={`relative max-w-[80%] text-center font-serif text-sm italic leading-relaxed ${
          dark ? "text-cream/50" : "text-muted/80"
        }`}
      >
        {hint}
      </span>
    </div>
  );
}
