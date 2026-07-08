"use client";

import { useState } from "react";

/**
 * Formulaire du guide gratuit, variante sombre pour la sidebar des articles.
 * Mock : simule l'envoi. Branchement futur : POST /leads/guide via apiFetch.
 */
export default function GuideSidebarForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="prenom@entreprise.fr"
        className="border border-cream/25 bg-cream/5 px-3.5 py-[13px] text-[15px] text-cream outline-none transition-colors placeholder:text-cream/40 focus:border-gold"
      />
      <button
        type="submit"
        disabled={sent}
        className="cursor-pointer rounded-xs border-none bg-gold px-6 py-3.5 font-sans text-sm font-semibold tracking-[0.03em] text-cream transition-colors hover:bg-gold-light disabled:cursor-default"
      >
        {sent ? "Guide envoyé ✓" : "Recevoir le guide"}
      </button>
    </form>
  );
}
