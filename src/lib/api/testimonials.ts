import { mockFetch } from "./client";

// ---------------------------------------------------------------------------
// Types — anticipent l'API réelle (GET /testimonials, GET /testimonials/:slug).
// ---------------------------------------------------------------------------

export interface Testimonial {
  id: string;
  slug: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Contenu long du témoignage (page détail), paragraphes. */
  body: string[];
  /** Mise en avant sur la page d'accueil. */
  featured: boolean;
  imageHint: string | null;
}

// ---------------------------------------------------------------------------
// Mock data — issu des maquettes ATC-Design.
// ---------------------------------------------------------------------------

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    slug: "marc-mezerette-comotech",
    quote:
      "ATC m'a accompagné de l'analyse de la cible jusqu'au financement. Une méthode rigoureuse qui m'a évité bien des pièges.",
    name: "Marc Mezerette",
    role: "Repreneur",
    company: "Comotech Industries",
    body: [
      "ATC m'a accompagné de l'analyse de la cible jusqu'au financement. Une méthode rigoureuse qui m'a évité bien des pièges.",
    ],
    featured: true,
    imageHint: "portrait : Marc Mezerette",
  },
  {
    id: "t-2",
    slug: "herve-tanneur-rivoyre",
    quote:
      "Leur double regard, métier et financier, a été décisif dans l'évaluation comme dans la négociation. Je savais où j'allais à chaque étape.",
    name: "Hervé Tanneur",
    role: "Repreneur",
    company: "Rivoyre Ingénierie",
    body: [
      "Leur double regard, métier et financier, a été décisif dans l'évaluation comme dans la négociation. Je savais où j'allais à chaque étape.",
    ],
    featured: true,
    imageHint: "portrait : Hervé Tanneur",
  },
  {
    id: "t-3",
    slug: "yves-laurisse-deal-informatique",
    quote:
      "Un accompagnement humain autant que technique. Le montage financier proposé a convaincu les banques du premier coup.",
    name: "Yves Laurisse",
    role: "Repreneur",
    company: "Deal Informatique (ancien SAP)",
    body: [
      "Un accompagnement humain autant que technique. Le montage financier proposé a convaincu les banques du premier coup.",
    ],
    featured: true,
    imageHint: "portrait : Yves Laurisse",
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
