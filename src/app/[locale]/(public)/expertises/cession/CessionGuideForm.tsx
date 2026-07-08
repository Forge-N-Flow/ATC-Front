"use client";

import { useState } from "react";

/**
 * Formulaire guide (variante navy de l'encart cession).
 * Mock : simule l'envoi. Branchement futur : POST /leads/guide via apiFetch.
 */
export default function CessionGuideForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-auto flex flex-wrap gap-2.5"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Votre email professionnel"
        className="min-w-[200px] flex-1 rounded-xs border border-cream/30 bg-transparent px-4 py-3.5 text-[15px] text-cream outline-none transition-colors placeholder:text-cream/50 focus:border-gold"
      />
      <button
        type="submit"
        disabled={sent}
        className="cursor-pointer rounded-xs border-none bg-gold px-[26px] py-3.5 font-sans text-sm font-semibold tracking-wide text-cream transition-colors hover:bg-gold-light disabled:cursor-default"
      >
        {sent ? "Guide envoyé ✓" : "Recevoir le guide"}
      </button>
    </form>
  );
}
