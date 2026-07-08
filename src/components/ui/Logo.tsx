import Image from "next/image";

/** Logo ATC (PNG fond transparent, servi depuis /public). */
export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Image
      src="/images/cropped-logo-fond-blanc-e1599656553868.png"
      alt="ATC Conseil et Expertise"
      width={250}
      height={53}
      priority={!compact}
      className={`${compact ? "h-7" : "h-11"} w-auto`}
    />
  );
}
