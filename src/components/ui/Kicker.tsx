/** Surtitre : trait doré + libellé uppercase (motif récurrent des maquettes). */
export default function Kicker({
  children,
  line = true,
}: {
  children: React.ReactNode;
  line?: boolean;
}) {
  return (
    <div className="flex items-center gap-3.5">
      {line && <span className="h-px w-9 bg-gold" aria-hidden />}
      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
        {children}
      </span>
    </div>
  );
}
