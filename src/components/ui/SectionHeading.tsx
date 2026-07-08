import Kicker from "./Kicker";

/** En-tête de section : kicker + titre serif, aligné à gauche ou centré. */
export default function SectionHeading({
  kicker,
  title,
  center = false,
  className = "",
}: {
  kicker: string;
  title: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${center ? "items-center text-center" : ""} ${className}`}
    >
      <Kicker line={!center}>{kicker}</Kicker>
      <h2 className="font-serif text-[clamp(30px,5.5vw,46px)] font-normal leading-[1.12] tracking-[-0.01em] text-inherit">
        {title}
      </h2>
    </div>
  );
}
