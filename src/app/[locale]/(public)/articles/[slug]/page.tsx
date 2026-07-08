import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import ImageSlot from "@/components/ui/ImageSlot";
import CtaFinal from "@/components/atc/CtaFinal";
import {
  formatArticleDate,
  getArticle,
  getArticles,
  MOCK_ARTICLES,
} from "@/lib/api/articles";

export function generateStaticParams() {
  return MOCK_ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) {
    return { title: "Article introuvable" };
  }
  return {
    title: article.title,
    description: article.excerpt,
  };
}

/** Titre tronqué pour la navigation article précédent / suivant. */
function shortTitle(title: string): string {
  return title.length > 40 ? `${title.slice(0, 40)}…` : title;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, articles] = await Promise.all([
    getArticle(slug),
    getArticles(),
  ]);

  if (!article) {
    notFound();
  }

  const index = articles.findIndex((a) => a.slug === article.slug);
  const prev = articles[(index - 1 + articles.length) % articles.length];
  const next = articles[(index + 1) % articles.length];

  return (
    <>
      {/* ============ 1. EN-TÊTE ARTICLE ============ */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div
          aria-hidden
          className="chess-pattern mask-fade-left absolute right-0 top-0 h-full w-[42%] opacity-[0.32]"
        />
        <div className="relative mx-auto flex max-w-[900px] flex-col gap-6 px-5 pb-[clamp(56px,10vw,100px)] pt-[clamp(56px,10vw,90px)] sm:px-10">
          <Link
            href="/articles"
            className="text-sm font-semibold text-cream/65 transition-colors hover:text-gold"
          >
            ← Tous les articles
          </Link>
          <div className="flex items-center gap-4">
            <span className="rounded-xs border border-gold/50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              {article.category}
            </span>
            <span className="text-[13px] text-cream/60">
              {formatArticleDate(article.date)}
            </span>
          </div>
          <h1 className="m-0 font-serif text-[clamp(30px,5vw,48px)] font-normal leading-[1.12] tracking-[-0.01em] [text-wrap:balance]">
            {article.title}
          </h1>
          <span className="text-sm text-cream/60">
            Par Alexandre Tellier, expert-comptable, spécialiste de la
            transmission
          </span>
        </div>
      </section>

      {/* ============ 2. CORPS ============ */}
      <section>
        <div className="mx-auto max-w-[760px] px-5 py-[clamp(48px,8vw,80px)] sm:px-10">
          <ImageSlot
            hint={article.imageHint}
            dark
            className="mb-11 aspect-[16/8] w-full rounded-[4px]"
          />
          <div className="flex flex-col gap-[26px]">
            <p className="m-0 font-serif text-[clamp(19px,2.6vw,23px)] leading-[1.6] text-ink">
              {article.chapo}
            </p>
            {article.body.map((block, i) =>
              block.type === "heading" ? (
                <h2
                  key={i}
                  className="m-0 mt-3.5 font-serif text-[clamp(22px,3vw,27px)] font-medium leading-[1.25]"
                >
                  {block.text}
                </h2>
              ) : (
                <p
                  key={i}
                  className="m-0 text-[16.5px] leading-[1.8] text-muted"
                >
                  {block.text}
                </p>
              ),
            )}
            <div className="mt-6 flex flex-col gap-3 border border-ink/8 bg-paper px-[34px] py-8">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                À retenir
              </span>
              <p className="m-0 font-serif text-[19px] italic leading-[1.55]">
                {article.takeaway}
              </p>
            </div>
          </div>
          <div className="mt-14 flex flex-wrap justify-between gap-5 border-t border-ink/10 pt-7">
            <Link
              href={`/articles/${prev.slug}`}
              className="text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
            >
              ← {shortTitle(prev.title)}
            </Link>
            <Link
              href={`/articles/${next.slug}`}
              className="text-sm font-semibold text-gold transition-colors hover:text-gold-dark"
            >
              {shortTitle(next.title)} →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ 3. CTA FINAL ============ */}
      <CtaFinal
        title="Une question sur votre projet de transmission ?"
        description="Un premier échange confidentiel, sans engagement, pour approfondir ces sujets avec un expert."
      />
    </>
  );
}
