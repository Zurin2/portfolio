// Backup of project entries removed from the live list.
// NOT imported anywhere — zero build/bundle cost.
// To restore: copy an entry back into projects.ts (its screenshot is kept in public/screenshots/).
import type { Project } from "./projects";

export const removedProjects: Project[] = [
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
];
