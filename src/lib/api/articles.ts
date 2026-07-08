import { mockFetch } from "./client";

// ---------------------------------------------------------------------------
// Types — anticipent l'API réelle (GET /articles, GET /articles/:slug).
// ---------------------------------------------------------------------------

/** Bloc du corps d'article : intertitre ou paragraphe. */
export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string };

export interface Article {
  id: string;
  slug: string;
  title: string;
  /** Extrait affiché sur la page liste. */
  excerpt: string;
  /** Catégorie éditoriale (une seule pour l'instant : « Article »). */
  category: string;
  /** Date de publication, ISO (YYYY-MM-DD). */
  date: string;
  /** Temps de lecture estimé, ex. "5 min". */
  readingTime: string;
  /** Description de la photo attendue (composant ImageSlot). */
  imageHint: string;
  /** Chapô (introduction en serif sur la page détail). */
  chapo: string;
  /** Corps structuré : alternance d'intertitres et de paragraphes. */
  body: ArticleBlock[];
  /** Encadré « À retenir » en fin d'article. */
  takeaway: string;
}

/** Formate une date ISO en français long, ex. "15 juin 2020". */
export function formatArticleDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00Z`));
}

// ---------------------------------------------------------------------------
// Mock data — issu des maquettes ATC-Design (Articles.dc.html, Article.dc.html).
// ---------------------------------------------------------------------------

export const MOCK_ARTICLES: Article[] = [
  {
    id: "a-1",
    slug: "evaluation-cession-entreprise",
    title: "Évaluer un projet de cession d'entreprise de façon optimale",
    excerpt:
      "Retour d'expérience sur les méthodes que nous utilisons et qui sont pratiquées par les intermédiaires dans le cadre de cessions de PME.",
    category: "Article",
    date: "2020-06-15",
    readingTime: "6 min",
    imageHint: "photo : jeu d'échecs, pièces en bois",
    chapo:
      "Retour d'expérience sur les méthodes que nous utilisons et qui sont pratiquées par les intermédiaires dans le cadre de cessions de PME.",
    body: [
      { type: "heading", text: "L'évaluation n'est pas le prix" },
      {
        type: "paragraph",
        text: "Première conviction, essentielle : l'évaluation ne sert que de base à la négociation qui fixera le prix. Deux entreprises identiques sur le papier peuvent se vendre à des prix très différents selon le contexte, le repreneur et la qualité de la préparation. L'évaluation fournit un intervalle de valeurs de marché, pas un verdict.",
      },
      { type: "heading", text: "Le diagnostic avant les chiffres" },
      {
        type: "paragraph",
        text: "Avant toute formule, nous menons un diagnostic qualitatif à 360 degrés : positionnement, marché, organisation, et surtout zones de dépendance, envers un client, un produit, un fournisseur ou un salarié clé, à commencer par le dirigeant lui-même. Ces dépendances pèsent directement sur la valeur et sur la capacité de l'entreprise à changer de mains.",
      },
      { type: "heading", text: "Croiser les méthodes" },
      {
        type: "paragraph",
        text: "Méthodes patrimoniales, comparables de transactions, multiples de rentabilité, actualisation des flux : aucune méthode n'est suffisante seule. Nous croisons plusieurs approches, pondérées selon le profil de l'entreprise, et nous les confrontons aux bases de données de transactions réelles du marché des PME.",
      },
      { type: "heading", text: "Un prix doit être finançable" },
      {
        type: "paragraph",
        text: "Le test décisif est celui du financement : un repreneur devra rembourser sa dette d'acquisition avec les résultats de l'entreprise. Évaluer trop haut, c'est risquer que l'entreprise ne se vende pas et perde en crédibilité sur son marché. Le bon prix est celui qu'une banque acceptera de financer.",
      },
    ],
    takeaway:
      "Une évaluation sérieuse combine diagnostic qualitatif, croisement de méthodes et test de finançabilité. Elle éclaire la négociation, elle ne la remplace pas.",
  },
  {
    id: "a-2",
    slug: "memorandum-dossier-de-presentation",
    title:
      "Un élément clé d'une transmission réussie : le mémorandum ou dossier de présentation",
    excerpt:
      "Le dossier de présentation est le premier document formalisé du processus de transmission dont disposeront les acquéreurs.",
    category: "Article",
    date: "2020-05-15",
    readingTime: "5 min",
    imageHint: "photo : réunion de travail, dossier de présentation",
    chapo:
      "Le dossier de présentation est le premier document formalisé du processus de transmission dont disposeront les acquéreurs.",
    body: [
      { type: "heading", text: "La première impression du repreneur" },
      {
        type: "paragraph",
        text: "C'est sur la base du mémorandum qu'un candidat décidera de poursuivre ou d'abandonner. Un dossier incomplet ou mal construit fait fuir les bons repreneurs et attire les curieux. Un dossier rigoureux installe d'emblée un climat de sérieux et de confiance.",
      },
      { type: "heading", text: "Ce qu'il doit contenir" },
      {
        type: "paragraph",
        text: "L'histoire et le positionnement de l'entreprise, son marché et sa concurrence, son organisation et ses hommes clés, ses chiffres retraités et commentés, ses perspectives. Le tout doit être factuel et vérifiable : chaque affirmation du mémorandum sera auditée pendant les due diligences.",
      },
      { type: "heading", text: "Valoriser sans travestir" },
      {
        type: "paragraph",
        text: "Le mémorandum met en valeur l'entreprise, il ne la maquille pas. Les points faibles identifiés doivent être présentés avec leurs pistes d'amélioration : un repreneur les découvrira de toute façon, et mieux vaut qu'il les découvre accompagnés d'une réponse.",
      },
      { type: "heading", text: "Un outil de confidentialité" },
      {
        type: "paragraph",
        text: "Le dossier circule en deux temps : un profil anonyme d'abord, le mémorandum complet ensuite, uniquement après signature d'un engagement de confidentialité par des candidats qualifiés. C'est ce protocole qui protège salariés, clients et fournisseurs pendant la démarche.",
      },
    ],
    takeaway:
      "Le mémorandum est la vitrine et la colonne vertébrale de la cession : factuel, complet et confidentiel, il qualifie les repreneurs autant qu'il présente l'entreprise.",
  },
  {
    id: "a-3",
    slug: "etapes-cession-entreprise",
    title: "Les différentes étapes d'une cession d'entreprise",
    excerpt:
      "Mise en parallèle simplifiée de la démarche d'un cédant et de celle d'un repreneur.",
    category: "Article",
    date: "2020-04-15",
    readingTime: "5 min",
    imageHint: "photo : poignée de main, signature d'accord",
    chapo:
      "Mise en parallèle simplifiée de la démarche d'un cédant et de celle d'un repreneur.",
    body: [
      { type: "heading", text: "Deux démarches en miroir" },
      {
        type: "paragraph",
        text: "Pendant que le cédant prépare son entreprise et son dossier, le repreneur définit sa stratégie de reprise et ses critères de cible. Les deux parcours convergent au moment de la mise en relation : comprendre la démarche de l'autre, c'est négocier mieux.",
      },
      { type: "heading", text: "Côté cédant : préparer, présenter, choisir" },
      {
        type: "paragraph",
        text: "Évaluation et diagnostic, stratégie de cession, rédaction du mémorandum, recherche confidentielle de repreneurs, puis sélection des candidats sérieux : chaque étape sécurise la suivante. Une cession bien préparée se joue deux à trois ans avant la signature.",
      },
      { type: "heading", text: "Côté repreneur : cibler, évaluer, financer" },
      {
        type: "paragraph",
        text: "Stratégie de reprise, analyse et évaluation de la cible, lettre d'intention, négociation, montage juridique et financier, recherche de financement : le repreneur avance par jalons, chacun conditionnant son engagement pour la suite.",
      },
      { type: "heading", text: "Le temps commun : de la LOI au closing" },
      {
        type: "paragraph",
        text: "À partir de la lettre d'intention, les deux parties avancent ensemble : due diligences, protocole d'accord, garanties d'actif et de passif, closing. Puis vient l'accompagnement du cédant, souvent décisif pour réussir la passation auprès des équipes et des clients.",
      },
    ],
    takeaway:
      "Cédant et repreneur suivent des parcours en miroir qui convergent à la lettre d'intention : anticiper les étapes de l'autre partie, c'est fluidifier toute l'opération.",
  },
];

// ---------------------------------------------------------------------------
// API functions — mock pour l'instant, apiFetch("/articles") plus tard.
// ---------------------------------------------------------------------------

export function getArticles(): Promise<Article[]> {
  return mockFetch(MOCK_ARTICLES, "/articles");
}

export async function getArticle(slug: string): Promise<Article | null> {
  const found = MOCK_ARTICLES.find((a) => a.slug === slug) ?? null;
  return mockFetch(found, `/articles/${slug}`);
}
