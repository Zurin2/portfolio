import type { Metadata } from "next";
import { education, profile } from "@/data/profile";
import { GitHubIcon, SocialIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Education — Jose Miguel Esperat",
  description: "Academic background and learning focus.",
};

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-24">
      <section className="pb-12">
        <h1 className="font-display text-4xl tracking-tight md:text-5xl">Education</h1>
      </section>

      <section className="border-l-2 border-accent/40 pl-6">
        <p className="font-mono text-xs tracking-wide text-muted uppercase">
          {education.subtitle}
        </p>
        <h2 className="mt-2 font-display text-2xl tracking-tight">{education.title}</h2>
        <p className="mt-1 font-mono text-xs text-muted">{education.location}</p>
        <div className="mt-4 flex flex-col gap-2">
          {education.descriptions.map((line) => (
            <p key={line.slice(0, 24)} className="max-w-2xl leading-relaxed text-muted">
              {line}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-white/[0.08] pt-10">
        <h2 className="font-display text-2xl tracking-tight">Elsewhere</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-white/[0.08] px-4 py-3 text-sm text-muted transition-colors duration-150 ease-out hover:border-accent hover:text-foreground"
          >
            <GitHubIcon className="h-5 w-5" />
            <span className="font-mono">@{profile.githubUsername}</span>
          </a>
          {profile.socials
            .filter((s) => s.icon !== "github")
            .map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-white/[0.08] px-4 py-3 text-sm text-muted transition-colors duration-150 ease-out hover:border-accent hover:text-foreground"
              >
                <SocialIcon icon={social.icon} className="h-5 w-5" />
                <span className="font-mono">{social.name}</span>
              </a>
            ))}
        </div>
      </section>
    </div>
  );
}
