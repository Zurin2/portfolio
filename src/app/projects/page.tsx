import type { Metadata } from "next";
import { ExternalLinkIcon, GitHubIcon } from "@/components/Icons";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Jose Miguel Esperat",
  description:
    "Full-stack systems, AI pipelines, and web apps built end to end — from PHP/MySQL to Next.js on Vercel.",
};

export default function ProjectsPage() {

  return (
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-24">
      <section className="pb-12">
        <h1 className="font-display text-4xl tracking-tight md:text-5xl">Projects</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Real systems built end to end — POS engines, inventory trackers, AI content
          pipelines, and voice-first apps.
        </p>
      </section>

      <section className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="group grid gap-3 py-8 transition-colors duration-150 ease-out hover:bg-white/[0.03] md:grid-cols-[64px_1fr_auto] md:gap-6"
          >
            <p className="font-mono text-sm text-muted/60 md:pt-1">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-2xl tracking-tight">
                {project.title}
                {project.featured && (
                  <span className="ml-3 align-middle font-mono text-xs text-accent">
                    ★ featured
                  </span>
                )}
              </h2>
              <p className="max-w-2xl leading-relaxed text-muted">{project.description}</p>
              <p className="font-mono text-xs text-muted/80">
                {project.tech.join(" · ")}
              </p>
            </div>
            <div className="flex items-start gap-4 md:pt-1">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} source code`}
                  className="text-muted transition-colors duration-150 ease-out group-hover:text-foreground hover:text-accent"
                >
                  <GitHubIcon className="h-5 w-5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live site`}
                  className="text-muted transition-colors duration-150 ease-out group-hover:text-foreground hover:text-accent"
                >
                  <ExternalLinkIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
