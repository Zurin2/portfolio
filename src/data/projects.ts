// Canonical project list — the single source of truth for the Projects page.
export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  /** Path to a real screenshot (public/). Falls back to a browser-chrome placeholder. */
  screenshot?: string;
  featured: boolean;
  sortOrder: number;
};

export const projects: Project[] = [
  {
    slug: "budget-buddy",
    title: "Budget Buddy",
    description:
      "Personal finance tracker with per-category GCash/Cash wallets, budget-plan allocations with auto add/subtract, a one-click undo action log, and four page-scoped Gemini AI assistants.",
    tech: ["Next.js", "React", "Tailwind CSS", "Gemini"],
    repoUrl: "https://github.com/Zurin2/budget-buddy",
    liveUrl: "https://budget-buddy-ph.vercel.app",
    screenshot: "/screenshots/budget-buddy.jpg",
    featured: true,
    sortOrder: 1,
  },
  {
    slug: "riff",
    title: "riff",
    description:
      "Voice-first note app: talk or type a messy ramble and it becomes a clean note with prioritized to-dos, filed under Work / School / Personal / Other. Server-side Gemini organizing brain, Web Speech API transcription.",
    tech: ["Next.js", "React", "Gemini", "Web Speech API"],
    repoUrl: "https://github.com/Zurin2/riff-note-ai",
    liveUrl: "https://riff-note-ai.vercel.app",
    screenshot: "/screenshots/riff.jpg",
    featured: true,
    sortOrder: 2,
  },
  {
    slug: "cashiko",
    title: "CashIko",
    description:
      "MSME operating system: POS transaction engine, utang (credit) ledger, and multi-tenant business scopes on a VILT stack.",
    tech: ["Vue 3", "Inertia.js", "Laravel", "Tailwind CSS", "MySQL"],
    repoUrl: "https://github.com/Zurin2/CashIko",
    screenshot: "/screenshots/cashiko.jpg",
    featured: true,
    sortOrder: 3,
  },
  {
    slug: "pms-inventory",
    title: "PMS Inventory System",
    description:
      "Inventory tracking and delivery-monitoring system for a school & office supplies trading business: automated stock calculation, delivery receipts, and office balance monitoring.",
    tech: ["PHP", "MySQL 8", "Tailwind CSS"],
    repoUrl: "https://github.com/Zurin2/PMS",
    screenshot: "/screenshots/pms-inventory.jpg",
    featured: false,
    sortOrder: 4,
  },
  {
    slug: "cbc-cbba",
    title: "CBC & CBBA Website",
    description:
      "Fully static public website for Cornerstone Baptist Church & Academy: pre-rendered routes, Supabase public-read content, zero auth or CMS.",
    tech: ["Next.js", "Tailwind CSS"],
    screenshot: "/screenshots/cbc-cbba.jpg",
    featured: false,
    sortOrder: 5,
  },
  {
    slug: "wmsu-administration",
    title: "WMSU Administration Page",
    description:
      "Administration page built for Western Mindanao State University during our internship — developed and delivered, but unpublished on the official site. Possible deployment in the future.",
    tech: ["PHP", "MySQL"],
    repoUrl: "https://github.com/Zurin2/WMSU-ADMINISTRATION-PAGE",
    screenshot: "/screenshots/wmsu-administration.jpg",
    featured: false,
    sortOrder: 6,
  },
  {
    slug: "shopee-ai-video-pipeline",
    title: "Shopee AI Video Pipeline",
    description:
      "Turns one Shopee product photo and a pasted description into a 12–25s vertical marketing video with Taglish voiceover and burned-in captions — Gemini planning, FLUX.1/Wan2.2 generation on a free Colab T4, FFmpeg assembly, delivered via Telegram.",
    tech: ["Python", "Gemini", "FFmpeg", "Telegram API"],
    screenshot: "/screenshots/shopee-ai-video-pipeline.jpg",
    featured: false,
    sortOrder: 7,
  },
  {
    slug: "office-memo-distribution",
    title: "Office Memo Distribution System",
    description:
      "Audit-first memo management backend (MINDS) built with Django: memos move through a Draft → Published → Archived lifecycle, route to multiple departments, and track per-employee read acknowledgment — with controlled fields and history always preserved.",
    tech: ["Python", "Django", "SQLite"],
    repoUrl: "https://github.com/Zurin2/Office-Memo-Distribution-System",
    screenshot: "/screenshots/office-memo-distribution.jpg",
    featured: false,
    sortOrder: 8,
  },
  {
    slug: "mami-joan-birthday",
    title: "Mami Joan Birthday",
    description: "Birthday greeting website built for a family celebration.",
    tech: ["TypeScript", "Next.js"],
    screenshot: "/screenshots/mami-joan-birthday.jpg",
    repoUrl: "https://github.com/Zurin2/mami-joan-birthday",
    liveUrl: "https://happy-birthday-mami-joan.vercel.app",
    featured: false,
    sortOrder: 9,
  },
];
