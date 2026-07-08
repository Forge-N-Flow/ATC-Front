"use client";

import { useState } from "react";

/**
 * Formulaire "aimant à leads" du guide gratuit. Mock : simule l'envoi.
 * Branchement futur : POST /leads/guide via apiFetch.
 */
export default function GuideForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex flex-col gap-[18px]"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="flex flex-col gap-2.5">
        <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-muted">
          Votre email professionnel
        </span>
        <input
          type="email"
          required
          placeholder="prenom@entreprise.fr"
          className="border border-ink/20 bg-paper px-4 py-[15px] text-base text-ink outline-none transition-colors focus:border-gold"
        />
      </label>
      <button
        type="submit"
        disabled={sent}
        className="cursor-pointer rounded-xs border-none bg-gold px-8 py-4 font-sans text-[15px] font-semibold tracking-wide text-cream transition-colors hover:bg-gold-dark disabled:cursor-default"
      >
        {sent ? "Guide envoyé ✓" : "Recevoir le guide"}
      </button>
      <span className="text-xs text-muted/80">
        Aucune prospection. Votre adresse ne sert qu&apos;à l&apos;envoi du guide.
      </span>
    </form>
  );
}
