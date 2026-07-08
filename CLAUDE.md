# atc-front

Site vitrine de **ATC Conseil & Expertise** (cabinet parisien : transmission d'entreprise,
M&A, expertise comptable et financière — 6 rue Papillon, 75009 Paris).
Next.js 16 + React 19 + Tailwind v4 + next-intl (FR uniquement pour l'instant).
Même architecture que **topsy-front** (repo de référence : `Organizations/Topsy/topsy-front`).

Maquettes sources : `../ATC-Design/*.dc.html` (une maquette HTML par page).

## Conventions
- Routes publiques sous `src/app/[locale]/(public)/` ; locale unique `fr`,
  `localePrefix: "as-needed"` → URLs propres (`/expertises`, `/contact`…).
- **Données mock** dans `src/lib/api/<domaine>.ts` : types + `MOCK_*` + fonctions
  `getX()` qui passent par `mockFetch()` (`src/lib/api/client.ts`). Le jour où
  l'API (NestJS, convention topsy-api) existe, remplacer `mockFetch(data, path)`
  par `apiFetch(path)` dans ces fonctions — rien d'autre à changer.
- Contenu éditorial statique (métiers, adresses…) dans `src/content/`.
- Composants : `layout/` (Navbar, Footer), `ui/` (Kicker, SectionHeading, ImageSlot),
  `atc/` (PageHero, CtaFinal, Faq, TestimonialCard…). Server components par défaut,
  `"use client"` seulement si état/interaction.

## Design system (issu des maquettes)
- Couleurs Tailwind : `ink` #0D1B2A (navy), `cream` #F7F5F2 (fond), `gold` #B38A3D
  (+ `gold-dark`, `gold-light`), `muted` #5A6770, `paper` #FFFFFF.
- Typo : `font-serif` = Newsreader (titres, chiffres, citations) ; corps = Hanken Grotesk
  (via next/font, appliqué au body).
- Motifs : sections alternées cream/blanc/navy ; kicker (trait doré + uppercase) ;
  damier `.chess-pattern` sur fonds navy ; boutons or à `rounded-xs` ; cartes blanches
  bordure `border-ink/8`.
- Photos : pas encore fournies → composant `ImageSlot` (placeholder avec description).
- Chaque page se termine par `<CtaFinal />` avant le footer.

## Lancement
```bash
npm install
npm run dev   # http://localhost:3000
```
