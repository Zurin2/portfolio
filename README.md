# Portfolio — Jose Miguel Esperat

Personal portfolio built with **Next.js 16 + React 19 + Supabase**, deployed on **Vercel**.
Replaces the retired PHP `Esperat_portfolio_cms`; sections ported from the
[masterPortfolio](https://github.com/ashutosh1919/masterPortfolio) template.

## Stack

- Next.js 16 (App Router, TypeScript, Cache Components) — all 5 routes prerender static
- Supabase — `public.projects` table, public-read RLS, optional at build time
- Tailwind CSS v4 — dark neutral base, violet accent (60-30-10)
- Zero auth, zero middleware, zero client components

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + publishable key (optional)
npm run dev
```

Without env vars the site runs on the static project list in `src/data/projects.ts`.

## Database

Run `supabase/schema.sql` in the Supabase SQL Editor. It creates the `projects` table,
enables public-read RLS, and seeds 9 projects. Keep `src/data/projects.ts` in sync with it.

## Verify

```bash
npm run lint     # ESLint 9, zero warnings expected
npm run build    # all routes must prerender static
node "node_modules\next\dist\bin\next" start -p 3200
```

Smoke: `/`, `/projects`, `/education`, `/contact` → 200; `/projects` renders one `<article>` row per project.
Note: ports 3000/3100 are commonly occupied by other dev servers on this machine — use 3200+.

## Deploy

- **Live:** https://jose-miguel-esperat.vercel.app (project `jose-miguel-esperat-s-projects/jose-miguel-esperat`)
- **Repo:** https://github.com/Zurin2/portfolio (public, `master` branch)
- Redeploy: `vercel --prod --yes` from the repo root
- Push-to-deploy (GitHub → Vercel Git integration) is NOT yet connected — the Vercel GitHub
  App lacks repo access. Enable via Vercel dashboard → Project → Settings → Git, or
  `vercel git connect` once permissions are granted. Until then, deploy manually with the CLI.

## Supabase (not yet wired)

The site currently renders the static project list fallback. To go database-driven:
create a Supabase project → run `supabase/schema.sql` in the SQL Editor →
`vercel env add NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` → redeploy.
