import { mockFetch } from "./client";

// ---------------------------------------------------------------------------
// Types — anticipent l'API réelle (POST /contact, convention topsy-api).
// Champs issus du formulaire de la maquette ATC-Design/Contact.dc.html.
// ---------------------------------------------------------------------------

export interface ContactPayload {
  /** "Votre entreprise" */
  company: string;
  /** "Votre nom" */
  name: string;
  /** "Votre email" */
  email: string;
  /** "Objet" */
  subject: string;
  /** "Votre message" */
  message: string;
}

export interface ContactResult {
  ok: boolean;
}

// ---------------------------------------------------------------------------
// API functions — mock pour l'instant. Branchement futur (topsy-api) :
//
//   return apiFetch<ContactResult>("/contact", {
//     method: "POST",
//     body: JSON.stringify(payload),
//   });
// ---------------------------------------------------------------------------

export async function sendContact(payload: ContactPayload): Promise<ContactResult> {
  if (process.env.NODE_ENV !== "production") {
    console.log("[API mock] POST /contact", payload);
  }
  return mockFetch({ ok: true }, "/contact");
}
