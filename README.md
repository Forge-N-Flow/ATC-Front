# ATC-Front

Site vitrine de **ATC Conseil & Expertise** — cabinet parisien de conseil en
transmission d'entreprise, M&A et expertise comptable & financière
(6 rue Papillon, 75009 Paris).

Next.js 16 · React 19 · Tailwind CSS v4 · next-intl · TypeScript.
Même architecture que `topsy-front`.

## Lancer en local

```bash
npm install
npm run dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Page |
| --- | --- |
| `/` | Accueil |
| `/expertises` | Hub des métiers |
| `/expertises/transmission` · `/reprise` · `/cession` | Métiers transmission |
| `/expertises/expertise-comptable` · `/expertise-sociale` | Expertise comptable / sociale |
| `/expertises/entreprises-innovantes` · `/accompagnement-experts-comptables` | Autres métiers |
| `/temoignages` (+ `/temoignages/[slug]`) | Témoignages |
| `/articles` (+ `/articles/[slug]`) | Articles |
| `/agenda` | Agenda (conférences, événements) |
| `/le-cabinet` | Le cabinet |
| `/contact` | Contact / prise de rendez-vous |
| `/mentions-legales` · `/confidentialite` | Pages légales |

## Données

Le site tourne pour l'instant sur des **données mock** (`src/lib/api/*.ts`),
extraites des maquettes `ATC-Design`. Chaque module expose des types + des
fonctions `getX()` qui passent par `mockFetch()` : le jour où l'API (NestJS,
même convention que `topsy-api`) est prête, il suffira de remplacer
`mockFetch(data, path)` par `apiFetch(path)` dans ces fonctions.
`NEXT_PUBLIC_API_URL` pilote l'URL de base de l'API.

## Design

Maquettes sources : `../ATC-Design/*.dc.html`. Design system documenté dans
[CLAUDE.md](CLAUDE.md) (couleurs `ink`/`cream`/`gold`, typo Newsreader +
Hanken Grotesk, damier, kickers dorés).

Les photos définitives ne sont pas encore fournies : le composant `ImageSlot`
affiche des emplacements décrits (les remplacer en passant simplement `src`).
