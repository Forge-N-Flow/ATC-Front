import { mockFetch } from "./client";

// ---------------------------------------------------------------------------
// Types — anticipent l'API réelle (GET /testimonials, GET /testimonials/:slug).
// ---------------------------------------------------------------------------

export type TestimonialType = "reprise" | "cession";

export interface Testimonial {
  id: string;
  slug: string;
  /** Citation principale (page détail + cartes). */
  quote: string;
  name: string;
  role: string;
  company: string;
  /** « Reprise de X » / « Cession de X », avec élision (des, d', de l'…). */
  operation: string;
  /** Nature de l'opération (badge + filtre de la page liste). */
  type: TestimonialType;
  /** Extrait affiché sur la carte de la page liste. Défaut : `quote`. */
  excerpt?: string;
  /** Rendu de l'extrait : citation à la première personne, ou récit. */
  excerptStyle: "citation" | "recit";
  /** Logo client (www.atc.paris). */
  logoUrl: string | null;
  /** Contenu long du témoignage (page détail), paragraphes. */
  body: string[];
  /** Mise en avant sur la page d'accueil. */
  featured: boolean;
  imageHint: string | null;
}

// ---------------------------------------------------------------------------
// Mock data — issu des maquettes ATC-Design (Témoignages.dc.html,
// Temoignage.dc.html). Ordre = ordre de la grille (utilisé pour préc./suiv.).
// ---------------------------------------------------------------------------

const LOGO_BASE = "https://www.atc.paris/wp-content/uploads/2024/05/";

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    slug: "marc-mezerette-comotech",
    quote:
      "J'ai été dirigeant de haut niveau dans de très grandes entreprises mais également de plus petites structures. Je souhaitais jouer un rôle plus proche du terrain et de mon équipe.",
    name: "Marc Mezerette",
    role: "Repreneur",
    company: "Comotech Industries",
    operation: "Reprise de Comotech Industries",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}Comotech-150x114.png`,
    body: [
      "Après un parcours de dirigeant dans de grands groupes comme dans des structures plus petites, Marc Mezerette cherchait une entreprise à sa mesure : industrielle, ancrée dans un territoire, avec une équipe à faire grandir. Son choix s'est porté sur Comotech Industries.",
      "ATC l'a accompagné sur l'ensemble du parcours de reprise : analyse stratégique de la cible, évaluation combinant son expertise métier et notre expertise financière, négociation avec le cédant, montage juridique et financier, puis recherche de financement jusqu'à l'accord des banques.",
    ],
    featured: true,
    imageHint: "portrait : Marc Mezerette",
  },
  {
    id: "t-4",
    slug: "sophie-willot-tites-chaussettes",
    quote:
      "J'ai créé et développé pendant huit ans une entreprise de vente par correspondance de produits pour chiens et chats. Je l'ai vendue en 2020 et je souhaitais continuer dans l'entrepreneuriat.",
    name: "Sophie Willot",
    role: "Repreneuse",
    company: "Tites Chaussettes",
    operation: "Reprise de Tites Chaussettes",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}Image1-150x150.png`,
    body: [
      "Entrepreneuse dans l'âme, Sophie Willot avait déjà créé, développé puis cédé sa première entreprise. Pour son second projet, elle a choisi la reprise : Tites Chaussettes, une marque à fort potentiel qu'elle connaissait en tant que cliente.",
      "Ayant vécu une cession de l'intérieur, elle attendait de son conseil rigueur et transparence. ATC a structuré l'évaluation, le montage et le financement de l'opération, en s'appuyant sur son expérience du commerce en ligne.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-2",
    slug: "herve-tanneur-rivoyre",
    quote:
      "J'ai été pendant plus de 20 ans directeur dans une PME familiale dans le domaine spatial. Je connais bien l'univers de la PME et la proximité que cela implique.",
    name: "Hervé Tanneur",
    role: "Repreneur",
    company: "Rivoyre Ingénierie",
    operation: "Reprise de Rivoyre Ingénierie",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}Image3-150x114.png`,
    body: [
      "Vingt ans de direction dans une PME familiale du secteur spatial ont donné à Hervé Tanneur une connaissance intime de l'univers PME : la proximité avec les équipes, la polyvalence, la responsabilité directe. La reprise de Rivoyre Ingénierie s'inscrivait dans cette continuité.",
      "Son double regard, métier et financier, construit avec ATC lors de l'évaluation, a été décisif dans la négociation. L'opération a été menée jusqu'au financement avec un plan validé par les banques.",
    ],
    featured: true,
    imageHint: "portrait : Hervé Tanneur",
  },
  {
    id: "t-5",
    slug: "fernando-navajas-papa-sierra",
    quote:
      "Alexandre Tellier a une approche très pédagogique, ce qui a été très utile dans les discussions avec les cédants. Il a été le négociateur entre les différentes parties : avocat, vendeur, acheteur.",
    name: "Fernando Navajas",
    role: "Repreneur",
    company: "Papa Sierra",
    operation: "Reprise de Papa Sierra",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}Image4-150x150.png`,
    body: [
      "Pour la reprise de Papa Sierra, Fernando Navajas cherchait plus qu'un conseiller technique : un négociateur capable de faire dialoguer toutes les parties, avocat, vendeur et acheteur, sans jamais braquer personne.",
      "L'approche pédagogique d'Alexandre Tellier a fluidifié les discussions avec les cédants et permis d'aboutir à un accord équilibré, sécurisé sur le plan juridique et financier.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-6",
    slug: "sophie-monteil-mstc",
    quote:
      "Après avoir effectué la totalité de ma carrière dans des grands groupes industriels internationaux, j'ai souhaité devenir cheffe d'entreprise pour pouvoir prendre moi-même les décisions que je juge bonnes.",
    name: "Sophie Monteil",
    role: "Repreneuse",
    company: "MSTC",
    operation: "Reprise de MSTC",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}MSTC-150x62.png`,
    body: [
      "Après une carrière complète dans de grands groupes industriels internationaux, Sophie Monteil voulait retrouver la liberté de décider. La reprise de MSTC lui a offert ce rôle de cheffe d'entreprise de plein exercice.",
      "ATC l'a accompagnée de l'analyse de la cible au montage financier, en construisant un business plan bancable qui a convaincu les financeurs.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-7",
    slug: "herve-brillant-jardins-dautises",
    quote:
      "Après avoir effectué la totalité de ma carrière dans des grands groupes internationaux, je souhaitais vivre une expérience entrepreneuriale et être au plus près de mon équipe.",
    name: "Hervé Brillant",
    role: "Repreneur",
    company: "Jardins d'Autises",
    operation: "Reprise des Jardins d'Autises",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}Jardins-autise-150x130.jpg`,
    body: [
      "Hervé Brillant a quitté les grands groupes internationaux pour se rapprocher du terrain. Avec les Jardins d'Autises, il a trouvé une entreprise à taille humaine où son expérience du management prend tout son sens.",
      "L'accompagnement d'ATC a couvert la stratégie de reprise, l'évaluation, la négociation et la recherche de financement, jusqu'à la signature.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-8",
    slug: "vincent-leduff-chaumaltrans",
    quote:
      "J'ai effectué toute ma carrière en tant que salarié, dans le domaine du transport de marchandises et de la location de matériels de transport, dans un environnement international.",
    name: "Vincent Leduff",
    role: "Repreneur",
    company: "Chaumaltrans",
    operation: "Reprise de Chaumaltrans",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}Chaumal-trans-150x150.png`,
    body: [
      "Spécialiste du transport de marchandises et de la location de matériels, Vincent Leduff a choisi de reprendre Chaumaltrans, une entreprise de son secteur, où son expertise métier constituait un atout immédiat.",
      "ATC a apporté le volet financier du binôme : évaluation de la cible, montage juridique et financier, et accompagnement dans la recherche de financement.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-9",
    slug: "jan-neraal-egrille",
    quote:
      "J'ai travaillé pendant 27 ans dans un environnement qui m'a apporté beaucoup de satisfaction. Je dirigeais une équipe commerciale, en France et à l'export, dans le secteur du packaging de luxe.",
    name: "Jan Neraal",
    role: "Repreneur",
    company: "Egrille",
    operation: "Reprise d'Egrille",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}Egrille-150x79.png`,
    body: [
      "Après 27 ans à diriger des équipes commerciales en France et à l'export dans le packaging de luxe, Jan Neraal a franchi le pas de l'entrepreneuriat avec la reprise d'Egrille.",
      "ATC l'a aidé à objectiver la valeur de la cible, à négocier avec méthode et à construire un plan de financement solide.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-10",
    slug: "rodolphe-dont-ovil-protection-maintenance",
    quote:
      "J'étais associé dans une entreprise familiale dont j'étais également le directeur général. Après plusieurs années passées à la gérer et la développer, j'ai souhaité me tourner vers un nouveau projet.",
    name: "Rodolphe Dont",
    role: "Repreneur",
    company: "Ovil Protection Maintenance",
    operation: "Reprise d'Ovil Protection Maintenance",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}OPM.png`,
    body: [
      "Associé et directeur général d'une entreprise familiale qu'il a gérée et développée pendant plusieurs années, Rodolphe Dont connaissait déjà la réalité du dirigeant de PME. Avec Ovil Protection Maintenance, il a choisi un nouveau terrain de jeu.",
      "L'accompagnement d'ATC a porté sur l'évaluation, le montage de l'opération et la recherche de financement.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-11",
    slug: "thibaud-clermont-poisson-hd-maintenance",
    quote:
      "Seize ans de génie civil industriel et de travaux spéciaux, entre conduite de projets et management : un profil taillé pour la reprise.",
    name: "Thibaud Clermont",
    role: "Repreneur",
    company: "Poisson et HD Maintenance",
    operation: "Reprise de Poisson et HD Maintenance",
    type: "reprise",
    excerpt:
      "Thibaud Clermont a travaillé pendant 16 ans dans le génie civil industriel et les travaux spéciaux, alternant la conduite de projets et le management. Accompagné par ATC, il a repris Poisson et HD Maintenance.",
    excerptStyle: "recit",
    logoUrl: `${LOGO_BASE}HD-150x138.jpg`,
    body: [
      "Thibaud Clermont a travaillé pendant 16 ans dans le génie civil industriel et les travaux spéciaux, alternant la conduite de projets et le management. Cette double compétence technique et humaine l'a préparé à la direction d'entreprise.",
      "Avec ATC, il a mené une opération singulière : la reprise conjointe de Poisson et de HD Maintenance, deux entreprises complémentaires, avec un montage adapté à cette configuration.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-12",
    slug: "jean-christophe-thomas-leaute-paysage",
    quote:
      "J'ai été directeur commercial et du développement pendant 25 ans dans l'automobile, les télécoms, la sécurité et le facility management, dans des environnements concurrentiels et variés.",
    name: "Jean-Christophe Thomas",
    role: "Repreneur",
    company: "Leauté Paysage",
    operation: "Reprise de Leauté Paysage",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}Leaute-150x112.jpg`,
    body: [
      "Vingt-cinq ans de direction commerciale et du développement dans des secteurs concurrentiels ont forgé chez Jean-Christophe Thomas une solide culture du terrain. La reprise de Leauté Paysage lui a permis de la mettre au service de sa propre entreprise.",
      "ATC a structuré l'évaluation et le financement de l'opération, en s'appuyant sur ses études de marché du secteur du paysage.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-13",
    slug: "thierry-dessolains-mayoud",
    quote:
      "Une longue expérience en management et gestion, dans les services et la location automobile longue durée, mise au service d'une reprise.",
    name: "Thierry Dessolains",
    role: "Repreneur",
    company: "Mayoud",
    operation: "Reprise de Mayoud",
    type: "reprise",
    excerpt:
      "Thierry Dessolains bénéficie d'une longue expérience en management et gestion, dans le domaine des services et de la location automobile longue durée. ATC l'a accompagné dans la reprise de Mayoud.",
    excerptStyle: "recit",
    logoUrl: `${LOGO_BASE}Mayoud-150x94.jpg`,
    body: [
      "Thierry Dessolains bénéficie d'une longue expérience en management et gestion, dans le domaine des services et de la location automobile longue durée. La reprise de Mayoud a marqué son passage du statut de manager à celui de propriétaire dirigeant.",
      "ATC l'a accompagné de l'analyse stratégique de la cible jusqu'à l'obtention du financement.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-14",
    slug: "stephane-boutier-atmosphere",
    quote:
      "Vingt ans dans des groupes internationaux, en Commerce et Marketing, jusqu'à un poste de directeur : puis l'envie d'entreprendre.",
    name: "Stéphane Boutier",
    role: "Repreneur",
    company: "Atmosphère",
    operation: "Reprise d'Atmosphère",
    type: "reprise",
    excerpt:
      "Stéphane Boutier a travaillé pendant 20 ans dans plusieurs groupes internationaux où il a occupé divers postes en Commerce et Marketing, dont le dernier en tant que directeur. Il a repris Atmosphère avec l'appui d'ATC.",
    excerptStyle: "recit",
    logoUrl: `${LOGO_BASE}Atmosphere-150x49.png`,
    body: [
      "Stéphane Boutier a travaillé pendant 20 ans dans plusieurs groupes internationaux où il a occupé divers postes en Commerce et Marketing, dont le dernier en tant que directeur. La reprise d'Atmosphère a concrétisé son projet entrepreneurial.",
      "Avec ATC, il a évalué la cible, négocié avec le cédant et construit un montage financier validé par les banques.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-3",
    slug: "yves-laurisse-deal-informatique",
    quote:
      "Après plus de 25 ans passés à arpenter les différentes fonctions de l'édition de logiciel (développement, services, commerce), dont les 5 dernières années chez SAP France, j'ai souhaité être chef d'entreprise.",
    name: "Yves Laurisse",
    role: "Repreneur",
    company: "Deal Informatique",
    operation: "Reprise de Deal Informatique",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}Deal.png`,
    body: [
      "Développement, services, commerce : Yves Laurisse a arpenté toutes les fonctions de l'édition de logiciel pendant plus de 25 ans, dont les 5 dernières années chez SAP France. La reprise de Deal Informatique l'a fait passer de cadre dirigeant à chef d'entreprise, dans un métier qu'il connaît parfaitement.",
      "ATC a apporté la méthode : analyse de la cible, évaluation, négociation et montage du financement.",
    ],
    featured: true,
    imageHint: "portrait : Yves Laurisse",
  },
  {
    id: "t-15",
    slug: "daniel-porte-monnet",
    quote:
      "Spécialiste du développement des marques haut de gamme, après 25 ans d'expérience dans les fonctions marketing, commerciale et de direction générale en France et à l'étranger, j'ai souhaité utiliser mes compétences pour mon propre projet.",
    name: "Daniel Porte",
    role: "Repreneur",
    company: "Monnet",
    operation: "Reprise de Monnet",
    type: "reprise",
    excerptStyle: "citation",
    logoUrl: `${LOGO_BASE}Monnet-150x75.png`,
    body: [
      "Spécialiste du développement des marques haut de gamme, Daniel Porte a mis 25 ans d'expérience en marketing, commerce et direction générale au service de son propre projet : la reprise de Monnet.",
      "ATC l'a accompagné sur l'évaluation de cette marque patrimoniale, la négociation et la structuration du financement.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-16",
    slug: "stephane-martin-atelier-de-beauce",
    quote:
      "Trente années dans l'industrie, dont seize à la direction de menuiseries industrielles : puis la décision de s'engager dans un nouveau challenge.",
    name: "Stéphane Martin",
    role: "Repreneur",
    company: "Atelier de Beauce",
    operation: "Reprise de l'Atelier de Beauce",
    type: "reprise",
    excerpt:
      "De formation ingénieur, avec une expérience de 30 années dans l'industrie dont 16 à la direction de plusieurs menuiseries industrielles, Stéphane Martin a décidé de s'engager dans un nouveau challenge, accompagné par ATC.",
    excerptStyle: "recit",
    logoUrl: `${LOGO_BASE}Ateliers-de-Beauce-150x150.jpg`,
    body: [
      "De formation ingénieur, avec une expérience de 30 années dans l'industrie dont 16 à la direction de plusieurs menuiseries industrielles, Stéphane Martin a décidé de s'engager dans un nouveau challenge avec la reprise de l'Atelier de Beauce.",
      "Son expertise métier, combinée à l'expertise financière d'ATC, a permis une évaluation juste et un financement obtenu sans difficulté.",
    ],
    featured: false,
    imageHint: null,
  },
  {
    id: "t-17",
    slug: "ghislain-poissonneau-cotheatre",
    quote:
      "Céder l'entreprise que l'on a co-fondée, c'est transmettre une aventure humaine autant qu'une société.",
    name: "Ghislain Poissonneau",
    role: "Cédant",
    company: "Co.théâtre",
    operation: "Cession de Co.théâtre",
    type: "cession",
    excerpt:
      "Ghislain Poissonneau, co-fondateur de Co.théâtre, organisme de formation et de sensibilisation en entreprise par le théâtre (CA entre 1 et 2 M€), a cédé Co.théâtre en décembre 2019, accompagné par ATC.",
    excerptStyle: "recit",
    logoUrl: `${LOGO_BASE}Cotheatre.jpg`,
    body: [
      "Ghislain Poissonneau, co-fondateur de Co.théâtre, organisme de formation et de sensibilisation en entreprise par le théâtre (CA entre 1 et 2 M€), a cédé Co.théâtre en décembre 2019.",
      "ATC a accompagné la cession de bout en bout : évaluation, dossier de présentation, recherche confidentielle de repreneurs capables de pérenniser le projet, puis négociation jusqu'à la signature.",
    ],
    featured: false,
    imageHint: null,
  },
];

// ---------------------------------------------------------------------------
// API functions — mock pour l'instant, apiFetch("/testimonials") plus tard.
// ---------------------------------------------------------------------------

export function getTestimonials(): Promise<Testimonial[]> {
  return mockFetch(MOCK_TESTIMONIALS, "/testimonials");
}

export function getFeaturedTestimonials(): Promise<Testimonial[]> {
  return mockFetch(
    MOCK_TESTIMONIALS.filter((t) => t.featured),
    "/testimonials?featured=true",
  );
}

export async function getTestimonial(slug: string): Promise<Testimonial | null> {
  const found = MOCK_TESTIMONIALS.find((t) => t.slug === slug) ?? null;
  return mockFetch(found, `/testimonials/${slug}`);
}
