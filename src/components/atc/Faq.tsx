"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

/** Accordéon FAQ (un seul item ouvert à la fois, style maquette). */
export default function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  return (
    <div className="flex flex-col">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.question} className="border-b border-ink/10">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-6 py-[26px] text-left"
            >
              <span className="font-serif text-[22px] leading-[1.3] text-ink">
                {item.question}
              </span>
              <span
                aria-hidden
                className="shrink-0 font-serif text-[26px] text-gold"
              >
                {open ? "−" : "+"}
              </span>
            </button>
            {open && (
              <p className="m-0 pb-[26px] pr-5 text-[15px] leading-[1.7] text-muted sm:pr-10">
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
