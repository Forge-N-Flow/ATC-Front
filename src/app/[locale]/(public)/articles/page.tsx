import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import ImageSlot from "@/components/ui/ImageSlot";
import PageHero from "@/components/atc/PageHero";
import CtaFinal from "@/components/atc/CtaFinal";
import { formatArticleDate, getArticles } from "@/lib/api/articles";
import GuideSidebarForm from "./GuideSidebarForm";

export const metadata: Metadata = {
  title: "Articles, ATC",
};

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <>
      {/* ============ 1. HERO ============ */}
      <PageHero
        kicker="Ressources"
        title="Articles et ressources"
        description="Nos retours d'expérience sur la transmission d'entreprise."
      />

      {/* ============ 2. ARTICLES + SIDEBAR ============ */}
      <section>
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-[60px] px-5 pb-[clamp(64px,12vw,120px)] pt-[clamp(48px,8vw,90px)] sm:px-10 min-[900px]:grid-cols-[2.2fr_1fr]">
          {/* Liste des articles */}
          <div className="flex flex-col gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="grid grid-cols-1 border border-ink/8 bg-paper min-[900px]:grid-cols-[280px_1fr]"
              >
                <Link
                  href={`/articles/${article.slug}`}
                  className="block h-full min-h-[220px] w-full"
                >
                  <ImageSlot
                    hint={article.imageHint}
                    dark
                    className="h-full min-h-[220px] w-full"
                  />
                </Link>
                <div className="flex flex-col gap-3.5 px-[34px] py-9">
                  <div className="flex items-center gap-3.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                      {article.category}
                    </span>
                    <span className="text-[13px] text-muted">
                      {formatArticleDate(article.date)}
                    </span>
                  </div>
                  <h2 className="m-0 font-serif text-[clamp(23px,3vw,27px)] font-medium leading-[1.25]">
                    {article.title}
                  </h2>
                  <p className="m-0 text-[15px] leading-[1.65] text-muted">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="mt-1 self-start border-b border-gold/40 pb-[3px] text-sm font-semibold text-gold transition-colors hover:border-gold"
                  >
                    Lire la suite →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-7 min-[900px]:sticky min-[900px]:top-[110px]">
            <div className="flex flex-col gap-4 border border-ink/8 bg-paper px-[30px] py-8">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Catégories
              </span>
              <div className="flex items-center justify-between gap-3 border-b border-ink/8 py-2.5">
                <span className="text-[15px] font-medium text-ink">
                  Article
                </span>
                <span className="text-[13px] text-muted">
                  {articles.length}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 border border-gold/50 bg-ink px-[30px] py-[34px] text-cream">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Guide gratuit
              </span>
              <h3 className="m-0 font-serif text-2xl font-normal leading-[1.25]">
                Les 5 erreurs à éviter avant de céder
              </h3>
              <GuideSidebarForm />
              <span className="text-xs text-cream/55">
                Aucune prospection. Votre adresse ne sert qu&apos;à l&apos;envoi
                du guide.
              </span>
            </div>
          </aside>
        </div>
      </section>

      {/* ============ 3. CTA FINAL ============ */}
      <CtaFinal
        title="Une question sur votre projet ?"
        description="Un premier échange confidentiel, sans engagement, pour approfondir ces sujets avec un expert."
      />
    </>
  );
}
