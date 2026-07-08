import type { Metadata } from "next";
import LegalArticle from "@/components/legal/LegalArticle";

export const metadata: Metadata = {
  title: "Mentions légales",
};

const SECTIONS = [
  {
    title: "Éditeur du site",
    paragraphs: [
      "Le présent site est édité par ATC Conseil & Expertise, cabinet d'expertise comptable et de conseil en transmission d'entreprise, dont le siège est situé 6 rue Papillon, 75009 Paris.",
      "[À compléter par le cabinet : forme juridique, capital social, RCS, SIRET, numéro de TVA intracommunautaire, directeur de la publication.]",
    ],
  },
  {
    title: "Activité réglementée",
    paragraphs: [
      "ATC est un cabinet d'expertise comptable inscrit au tableau de l'Ordre des experts-comptables. [À compléter : conseil régional de l'Ordre de rattachement.]",
    ],
  },
  {
    title: "Hébergement",
    paragraphs: [
      "[À compléter : hébergeur du site, adresse et coordonnées — par exemple Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.]",
    ],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "L'ensemble des contenus du site (textes, visuels, logo, structure) est la propriété exclusive d'ATC, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite.",
    ],
  },
  {
    title: "Responsabilité",
    paragraphs: [
      "Les informations publiées sur ce site le sont à titre informatif et ne constituent pas un conseil personnalisé. Chaque situation de transmission, de reprise ou de structuration mérite une analyse dédiée : contactez le cabinet pour un accompagnement adapté.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Pour toute question relative au site ou à ses contenus, vous pouvez écrire au cabinet via la page Contact ou par courrier au 6 rue Papillon, 75009 Paris.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <LegalArticle
      kicker="Informations légales"
      title="Mentions légales"
      updatedAt="juillet 2026"
      sections={SECTIONS}
    />
  );
}
