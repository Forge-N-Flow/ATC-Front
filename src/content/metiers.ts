/**
 * Les métiers du cabinet — source unique pour la navigation,
 * la page hub /expertises et les maillages internes.
 */
export interface Metier {
  slug: string;
  href: string;
  title: string;
  shortTitle: string;
  description: string;
}

export const METIERS: Metier[] = [
  {
    slug: "transmission",
    href: "/expertises/transmission",
    title: "Transmission d'entreprise",
    shortTitle: "Transmission",
    description:
      "Cession, reprise, transmission familiale : une stratégie sur mesure, menée en toute confidentialité.",
  },
  {
    slug: "reprise",
    href: "/expertises/reprise",
    title: "Reprise d'entreprise",
    shortTitle: "Reprise",
    description:
      "Cibler, évaluer, financer, sécuriser. Une méthode éprouvée pour transformer votre projet de reprise en réussite durable.",
  },
  {
    slug: "cession",
    href: "/expertises/cession",
    title: "Cession d'entreprise",
    shortTitle: "Cession",
    description:
      "Préparer, valoriser, transmettre en toute confidentialité. Nous protégeons la valeur de votre travail jusqu'à la signature.",
  },
  {
    slug: "expertise-comptable",
    href: "/expertises/expertise-comptable",
    title: "Expertise comptable et financière",
    shortTitle: "Expertise comptable et financière",
    description:
      "Une tenue rigoureuse et une lecture stratégique de vos comptes, au service de vos décisions.",
  },
  {
    slug: "entreprises-innovantes",
    href: "/expertises/entreprises-innovantes",
    title: "Entreprises innovantes",
    shortTitle: "Entreprises innovantes",
    description:
      "Structuration financière, levées de fonds et pilotage de la croissance des jeunes entreprises.",
  },
  {
    slug: "accompagnement-experts-comptables",
    href: "/expertises/accompagnement-experts-comptables",
    title: "Accompagnement des experts-comptables",
    shortTitle: "Accompagnement des experts-comptables",
    description:
      "Un appui technique et stratégique aux confrères sur les missions de transmission et d'évaluation.",
  },
  {
    slug: "expertise-sociale",
    href: "/expertises/expertise-sociale",
    title: "Expertise sociale",
    shortTitle: "Expertise sociale",
    description:
      "Paie, contrats et conformité sociale : sécuriser la dimension humaine de votre entreprise.",
  },
];

/** Lien portail client (Cegid Quadra) affiché dans le header. */
export const CLIENT_PORTAL_URL = "https://90176209-quadraweb.cegid.com/qws";

/** Adresse du cabinet (footer + contact). */
export const CABINET_ADDRESS = "6 rue Papillon, 75009 Paris";
