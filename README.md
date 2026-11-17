# Portfolio — Jose Miguel Esperat

Personal portfolio built with **Next.js 16 + React 19**, deployed on **Vercel**.
Replaces the retired PHP `Esperat_portfolio_cms`; sections ported from the
[masterPortfolio](https://github.com/ashutosh1919/masterPortfolio) template.

- **Live:** https://jose-miguel-esperat.vercel.app
- **Repo:** https://github.com/Zurin2/portfolio

## Stack

- Next.js 16 (App Router, TypeScript, Cache Components) — all 5 routes prerender static
- Tailwind CSS v4 — dark neutral base, violet accent (60-30-10)
- GitHub public API — live repo/follower stats, fetched server-side, cached 1h
- Zero auth, zero middleware, zero client components, zero backend services

## Setup

```bash
npm install
npm run dev
```

## Editing content

- Identity, socials, skills, education: `src/data/profile.ts`
- Projects: `src/data/projects.ts` — one entry per project, ordered by `sortOrder`
- Changes ship on the next push + deploy

## Verify

```bash
npm run lint     # ESLint 9, zero warnings expected
npm run build    # all routes must prerender static
node "node_modules\next\dist\bin\next" start -p 3200
```

Smoke: `/`, `/projects`, `/education`, `/contact` → 200; `/projects` renders one `<article>` row per project.
Note: ports 3000/3100 are commonly occupied by other dev servers on this machine — use 3200+.

## Deploy

```bash
git push          # if Git integration is connected in the Vercel dashboard
vercel --prod --yes   # manual production deploy (currently the reliable path)
```
