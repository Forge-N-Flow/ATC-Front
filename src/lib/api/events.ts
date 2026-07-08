import { mockFetch } from "./client";

// ---------------------------------------------------------------------------
// Types — anticipent l'API réelle (GET /events, GET /events?upcoming=true).
// ---------------------------------------------------------------------------

export type AtcEventType =
  | "conférence"
  | "webinaire"
  | "webconférence"
  | "formation"
  | "masterclass"
  | "co-animation"
  | "interview"
  | "intervention"
  | "salon";

export interface AtcEvent {
  id: string;
  slug: string;
  /** Intitulé complet, tel qu'affiché sur la maquette Agenda. */
  title: string;
  type: AtcEventType;
  /** Date ISO : `YYYY-MM-DD`, ou `YYYY-MM` quand seul le mois est connu. */
  date: string;
  endDate?: string;
  /** Libellé de date tel qu'affiché sur la maquette (ex. "20/11/2023", "02/2021"). */
  dateLabel: string;
  /** Organisme / lieu de l'intervention. */
  location: string;
  description: string | null;
  registrationUrl?: string;
  /** Lien vers le replay vidéo, si disponible. */
  videoUrl?: string;
}

/** Un événement est "passé" dès que sa date est antérieure à maintenant. */
export function isPastEvent(event: AtcEvent, now: Date = new Date()): boolean {
  return new Date(event.endDate ?? event.date) < now;
}

// ---------------------------------------------------------------------------
// Mock data — issu de la maquette ATC-Design/Agenda.dc.html.
// ---------------------------------------------------------------------------

export const MOCK_EVENTS: AtcEvent[] = [
  // ---- 2023 ----
  {
    id: "ev-2023-1",
    slug: "2023-transfair-combien-vaut-mon-entreprise",
    title: "Conférence : « Combien vaut mon entreprise ? »",
    type: "conférence",
    date: "2023-11-20",
    dateLabel: "20/11/2023",
    location: "Transfair, rendez-vous annuel de la transmission d'entreprise",
    description: null,
  },
  {
    id: "ev-2023-2",
    slug: "2023-tlf-preparer-et-reussir-la-transmission",
    title: "Webinaire : « Préparer et réussir la transmission de son entreprise »",
    type: "webinaire",
    date: "2023-11-15",
    dateLabel: "15/11/2023",
    location: "TLF, Union des Entreprises Transport et Logistique de France",
    description: null,
  },
  {
    id: "ev-2023-3",
    slug: "2023-tour-de-france-valorisation-fenetre-de-tir",
    title:
      "Conférence : « Valorisation des entreprises : à quelle fenêtre de tir s'attendre en 2023 ? »",
    type: "conférence",
    date: "2023-10-16",
    dateLabel: "16/10/2023",
    location: "Tour de France de la Transmission d'entreprise",
    description: null,
  },
  {
    id: "ev-2023-4",
    slug: "2023-universite-ete-panorama-missions-expert-comptable",
    title:
      "Conférence : « Panorama des missions de l'expert-comptable dans l'accompagnement de la cession d'entreprise »",
    type: "conférence",
    date: "2023-09-06",
    dateLabel: "06/09/2023",
    location: "Université d'été des Experts-comptables",
    description: null,
  },
  {
    id: "ev-2023-5",
    slug: "2023-tour-de-france-25-bonnes-questions",
    title:
      "Co-animation : « 25 bonnes questions à poser à son cédant ou à son repreneur dans le contexte encore inflationniste de 2023 »",
    type: "co-animation",
    date: "2023-06-26",
    dateLabel: "26/06/2023",
    location: "Tour de France de la transmission d'entreprise",
    description: null,
  },
  {
    id: "ev-2023-6",
    slug: "2023-oec-paris-idf-achat-entreprise-financement",
    title:
      "Webinaire : « Achat d'entreprise : comment accompagner la recherche de financement »",
    type: "webinaire",
    date: "2023-04-18",
    dateLabel: "18/04/2023",
    location: "Ordre des Experts-comptables de Paris IDF",
    description: null,
  },
  // ---- 2022 ----
  {
    id: "ev-2022-1",
    slug: "2022-transfair-combien-vaut-mon-entreprise",
    title: "Conférence : « Combien vaut mon entreprise ? »",
    type: "conférence",
    date: "2022-12-01",
    dateLabel: "01/12/2022",
    location: "Transfair",
    description: null,
  },
  {
    id: "ev-2022-2",
    slug: "2022-universite-ete-accompagner-le-cedant",
    title:
      "Conférence : « Accompagner le cédant dans la phase opérationnelle de la transmission de son entreprise »",
    type: "conférence",
    date: "2022-09-07",
    dateLabel: "07/09/2022",
    location: "Université d'été des Experts-comptables",
    description: null,
  },
  // ---- 2021 ----
  {
    id: "ev-2021-1",
    slug: "2021-medef-val-doise-apres-covid-19",
    title:
      "Co-animation de webinaire : « L'après-Covid-19 : ce qui va changer en 2021 pour les cédants et repreneurs »",
    type: "webinaire",
    date: "2021-02",
    dateLabel: "02/2021",
    location: "MEDEF Val d'Oise",
    description: null,
  },
  // ---- 2020 ----
  {
    id: "ev-2020-1",
    slug: "2020-comite-transmission-developpez-le-chiffre-daffaires",
    title:
      "Webconférence : « Experts-comptables, développez le chiffre d'affaires de votre cabinet avec des missions de transmission d'entreprise »",
    type: "webconférence",
    date: "2020-12",
    dateLabel: "12/2020",
    location: "Comité transmission de l'Ordre des experts-comptables",
    description: null,
    videoUrl: "#",
  },
  {
    id: "ev-2020-2",
    slug: "2020-transfair-plan-de-financement-post-covid",
    title:
      "Masterclass : « Comment construire et mettre en place un plan de financement de reprise post-Covid »",
    type: "masterclass",
    date: "2020-11",
    dateLabel: "11/2020",
    location: "Transfair",
    description: null,
  },
  {
    id: "ev-2020-3",
    slug: "2020-comite-transmission-role-expert-comptable",
    title:
      "Webinaire : « Recommandations sur le rôle de l'expert-comptable lors de la transmission d'entreprise »",
    type: "webinaire",
    date: "2020-10-12",
    dateLabel: "12/10/2020",
    location: "Comité transmission de l'Ordre des experts-comptables Paris IDF",
    description: null,
    videoUrl: "#",
  },
  {
    id: "ev-2020-4",
    slug: "2020-medef-idf-covid-19-cedants-repreneurs",
    title:
      "Co-animation de webinaire : « Ce que la Covid-19 va changer pour les cédants et repreneurs »",
    type: "webinaire",
    date: "2020-10-01",
    dateLabel: "01/10/2020",
    location: "MEDEF Île-de-France",
    description: null,
    videoUrl: "#",
  },
  {
    id: "ev-2020-5",
    slug: "2020-cra-ccip-formations-evaluation-business-plan",
    title: "Formations sur l'évaluation et le business plan",
    type: "formation",
    date: "2020-09",
    dateLabel: "09/2020",
    location: "CRA et CCIP",
    description: null,
  },
  {
    id: "ev-2020-6",
    slug: "2020-reprendre-et-transmettre-rebondir-covid-19",
    title: "Interview : « Rebondir suite au Covid-19 »",
    type: "interview",
    date: "2020-07",
    dateLabel: "07/2020",
    location: "Magazine Reprendre et Transmettre",
    description: null,
  },
  {
    id: "ev-2020-7",
    slug: "2020-ccip-bien-evaluer-pour-faire-la-bonne-proposition",
    title:
      "Webinaire : « Reprise d'entreprise, bien évaluer pour faire la bonne proposition »",
    type: "webinaire",
    date: "2020-04-24",
    dateLabel: "24/04/2020",
    location: "CCIP",
    description: null,
  },
  // ---- 2019 ----
  {
    id: "ev-2019-1",
    slug: "2019-transfair-ccip-quest-ce-quun-cedant-attend",
    title: "Conférence : « Qu'est-ce qu'un cédant attend d'un repreneur ? »",
    type: "conférence",
    date: "2019-11-21",
    dateLabel: "21/11/2019",
    location: "Transfair, avec la CCIP",
    description: null,
  },
  {
    id: "ev-2019-2",
    slug: "2019-tour-de-france-controle-technique-entreprise",
    title: "Intervention : « Contrôle technique de l'entreprise à céder »",
    type: "intervention",
    date: "2019-09-18",
    dateLabel: "18/09/2019",
    location:
      "Tour de France de la transmission d'entreprise, étape de Nanterre",
    description: null,
  },
];

// ---------------------------------------------------------------------------
// API functions — mock pour l'instant, apiFetch("/events") plus tard.
// ---------------------------------------------------------------------------

/** Tous les événements, du plus récent au plus ancien. */
export function getEvents(): Promise<AtcEvent[]> {
  const sorted = [...MOCK_EVENTS].sort((a, b) => b.date.localeCompare(a.date));
  return mockFetch(sorted, "/events");
}

/** Événements à venir uniquement, du plus proche au plus lointain. */
export function getUpcomingEvents(): Promise<AtcEvent[]> {
  const upcoming = MOCK_EVENTS.filter((event) => !isPastEvent(event)).sort(
    (a, b) => a.date.localeCompare(b.date),
  );
  return mockFetch(upcoming, "/events?upcoming=true");
}
