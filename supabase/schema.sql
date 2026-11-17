-- Portfolio data layer. Run in the Supabase SQL Editor (or via psql).
-- Public-read only: anonymous visitors SELECT; writes happen from the
-- Supabase Studio Table Editor (owner-only, outside RLS reach of anon).

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  description text not null,
  tech text[] not null default '{}',
  repo_url text,
  live_url text,
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;

drop policy if exists "Public read access" on public.projects;
create policy "Public read access"
  on public.projects
  for select
  to anon, authenticated
  using (true);

-- No insert/update/delete policies: anon and authenticated app roles
-- cannot write. Row changes are made by the project owner in Supabase Studio.

insert into public.projects (slug, title, description, tech, repo_url, live_url, featured, sort_order)
values
  ('budget-buddy', 'Budget Buddy', 'Personal finance tracker with per-category GCash/Cash wallets, budget-plan allocations with auto add/subtract, a one-click undo action log, and four page-scoped Gemini AI assistants.', '{"Next.js","React","Supabase","Tailwind CSS","Gemini"}', 'https://github.com/Zurin2/budget-buddy', 'https://budget-buddy-ph.vercel.app', true, 1),
  ('riff', 'riff', 'Voice-first note app: talk or type a messy ramble and it becomes a clean note with prioritized to-dos, filed under Work / School / Personal / Other. Server-side Gemini organizing brain, Web Speech API transcription.', '{"Next.js","React","Supabase","Gemini","Web Speech API"}', 'https://github.com/Zurin2/riff-note-ai', null, true, 2),
  ('cashiko', 'CashIko', 'MSME operating system: POS transaction engine, utang (credit) ledger, and multi-tenant business scopes on a VILT stack.', '{"Vue 3","Inertia.js","Laravel","Tailwind CSS","MySQL"}', 'https://github.com/Zurin2/CashIko', null, true, 3),
  ('pms-inventory', 'PMS Inventory System', 'Inventory tracking and delivery-monitoring system for a school & office supplies trading business: automated stock calculation, delivery receipts, and office balance monitoring.', '{"PHP","MySQL 8","Tailwind CSS"}', 'https://github.com/Zurin2/PMS', null, false, 4),
  ('cbc-cbba', 'CBC & CBBA Website', 'Fully static public website for Cornerstone Baptist Church & Academy: pre-rendered routes, Supabase public-read content, zero auth or CMS.', '{"Next.js","Supabase","Tailwind CSS"}', null, null, false, 5),
  ('wmsu-administration', 'WMSU Administration Page', 'Administration section of the Western Mindanao State University official website.', '{"PHP","MySQL"}', 'https://github.com/Zurin2/WMSU-ADMINISTRATION-PAGE', null, false, 6),
  ('shopee-ai-video-pipeline', 'Shopee AI Video Pipeline', 'Turns one Shopee product photo and a pasted description into a 12-25s vertical marketing video with Taglish voiceover and burned-in captions - Gemini planning, FLUX.1/Wan2.2 generation on a free Colab T4, FFmpeg assembly, delivered via Telegram.', '{"Python","Gemini","FFmpeg","Telegram API"}', null, null, false, 7),
  ('office-memo-distribution', 'Office Memo Distribution System', 'Internal memo routing and distribution tracking system.', '{"Python"}', 'https://github.com/Zurin2/Office-Memo-Distribution-System', null, false, 8),
  ('mami-joan-birthday', 'Mami Joan Birthday', 'Birthday greeting website built for a family celebration.', '{"TypeScript","Next.js"}', 'https://github.com/Zurin2/mami-joan-birthday', null, false, 9)
on conflict (slug) do nothing;
