"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendContact } from "@/lib/api/contact";

const contactSchema = z.object({
  company: z.string(),
  name: z.string().min(1, "Merci d'indiquer votre nom."),
  email: z.email("Merci d'indiquer un email valide."),
  subject: z.string(),
  message: z.string().min(1, "Merci d'écrire votre message."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/** Classes communes des champs texte (style souligné de la maquette). */
const INPUT_CLASS =
  "border-b border-ink/25 bg-transparent px-0.5 py-2.5 text-base text-ink outline-none transition-colors focus:border-gold";

const LABEL_CLASS =
  "text-[13px] font-semibold uppercase tracking-[0.12em] text-muted";

const ERROR_CLASS = "text-[13px] font-medium text-[#9C2B2B]";

/**
 * Formulaire de contact (maquette Contact.dc.html). Mock : simule l'envoi
 * via sendContact() ; branchement futur : POST /contact (topsy-api).
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      company: "",
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    await sendContact(values);
    setSent(true);
  });

  return (
    <form className="flex flex-col gap-7" onSubmit={onSubmit} noValidate>
      <div className="grid grid-cols-1 gap-7 min-[900px]:grid-cols-2">
        <label className="flex flex-col gap-2.5">
          <span className={LABEL_CLASS}>Votre entreprise</span>
          <input type="text" className={INPUT_CLASS} {...register("company")} />
        </label>
        <label className="flex flex-col gap-2.5">
          <span className={LABEL_CLASS}>Votre nom</span>
          <input type="text" className={INPUT_CLASS} {...register("name")} />
          {errors.name && (
            <span className={ERROR_CLASS}>{errors.name.message}</span>
          )}
        </label>
      </div>
      <div className="grid grid-cols-1 gap-7 min-[900px]:grid-cols-2">
        <label className="flex flex-col gap-2.5">
          <span className={LABEL_CLASS}>Votre email</span>
          <input type="email" className={INPUT_CLASS} {...register("email")} />
          {errors.email && (
            <span className={ERROR_CLASS}>{errors.email.message}</span>
          )}
        </label>
        <label className="flex flex-col gap-2.5">
          <span className={LABEL_CLASS}>Objet</span>
          <input type="text" className={INPUT_CLASS} {...register("subject")} />
        </label>
      </div>
      <label className="flex flex-col gap-2.5">
        <span className={LABEL_CLASS}>Votre message</span>
        <textarea
          rows={6}
          className="resize-y border border-ink/20 bg-paper p-4 text-base leading-[1.6] text-ink outline-none transition-colors focus:border-gold"
          {...register("message")}
        />
        {errors.message && (
          <span className={ERROR_CLASS}>{errors.message.message}</span>
        )}
      </label>
      <button
        type="submit"
        disabled={sent || isSubmitting}
        className="cursor-pointer self-start rounded-xs border-none bg-gold px-[clamp(20px,5vw,40px)] py-[17px] font-sans text-[15px] font-semibold tracking-[0.03em] text-cream transition-colors hover:bg-gold-dark disabled:cursor-default"
      >
        {sent ? "Message envoyé ✓" : isSubmitting ? "Envoi…" : "Envoyer"}
      </button>
    </form>
  );
}
