import type { Metadata } from "next";
import { ExternalLinkIcon, GitHubIcon } from "@/components/Icons";
import { ScreenshotLightbox } from "@/components/ScreenshotLightbox";
import { ScreenshotSlot } from "@/components/ScreenshotSlot";
import { projects, type Project } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Jose Miguel Esperat",
  description:
    "Full-stack systems, AI pipelines, and web apps built end to end — from PHP/MySQL to Next.js on Vercel.",
};

function screenshotLabel(project: Project): string {
  if (project.liveUrl) {
    try {
      return new URL(project.liveUrl).hostname;
    } catch {
      // fall through
    }
  }
  if (project.repoUrl) {
    try {
      return `${new URL(project.repoUrl).hostname}/${project.slug}`;
    } catch {
      // fall through
    }
  }
  return `${project.slug}.local`;
}

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
            className="group grid gap-5 py-8 transition-colors duration-150 ease-out hover:bg-white/[0.03] md:grid-cols-[280px_1fr] md:gap-8"
          >
            {/* Screenshot slot */}
            <div className="md:pt-1">
              {project.screenshot ? (
                <ScreenshotLightbox src={project.screenshot} title={project.title} />
              ) : (
                <ScreenshotSlot title={project.title} label={screenshotLabel(project)} />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-muted/60">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-1 font-display text-2xl tracking-tight">
                    {project.title}
                    {project.featured && (
                      <span className="ml-3 align-middle font-mono text-xs text-accent">
                        ★ featured
                      </span>
                    )}
                  </h2>
                </div>
                <div className="flex items-center gap-4 pt-1">
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-muted transition-colors duration-150 ease-out hover:text-accent"
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
                      className="text-muted transition-colors duration-150 ease-out hover:text-accent"
                    >
                      <ExternalLinkIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="max-w-2xl leading-relaxed text-muted">{project.description}</p>
              <p className="mt-auto font-mono text-xs text-muted/80">
                {project.tech.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
