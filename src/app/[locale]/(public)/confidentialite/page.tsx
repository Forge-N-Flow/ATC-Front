import type { Metadata } from "next";
import LegalArticle from "@/components/legal/LegalArticle";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

const SECTIONS = [
  {
    title: "Notre engagement",
    paragraphs: [
      "La confidentialité est au cœur du métier d'ATC : elle s'applique à vos projets de transmission comme à vos données personnelles. Cette page décrit les données collectées via le site et l'usage qui en est fait, conformément au Règlement général sur la protection des données (RGPD).",
    ],
  },
  {
    title: "Données collectées",
    paragraphs: [
      "Formulaire de contact : identité, coordonnées (email, téléphone) et contenu de votre message, utilisés exclusivement pour répondre à votre demande.",
      "Téléchargement du guide : adresse email professionnelle, utilisée uniquement pour l'envoi du guide demandé. Aucune prospection n'est réalisée sans votre consentement.",
    ],
  },
  {
    title: "Base légale et durée de conservation",
    paragraphs: [
      "Les données sont traitées sur la base de votre consentement et de l'intérêt légitime du cabinet à répondre aux sollicitations. Elles sont conservées le temps nécessaire au traitement de votre demande, puis archivées ou supprimées selon les obligations légales applicables.",
    ],
  },
  {
    title: "Partage des données",
    paragraphs: [
      "Vos données ne sont ni vendues, ni louées, ni partagées avec des tiers à des fins commerciales. Elles ne sont accessibles qu'à l'équipe du cabinet et à ses sous-traitants techniques (hébergement, messagerie), dans le strict cadre décrit ci-dessus.",
    ],
  },
  {
    title: "Vos droits",
    paragraphs: [
      "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition sur vos données personnelles. Pour l'exercer, contactez le cabinet via la page Contact ou par courrier au 6 rue Papillon, 75009 Paris. Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).",
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "Le site n'utilise pas de cookies publicitaires. Seuls des cookies techniques strictement nécessaires au fonctionnement (préférence de langue) peuvent être déposés. [À compléter si un outil de mesure d'audience est ajouté.]",
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <LegalArticle
      kicker="Vie privée"
      title="Politique de confidentialité"
      updatedAt="juillet 2026"
      sections={SECTIONS}
    />
  );
}
