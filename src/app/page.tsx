import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/Icons";
import { profile, skills } from "@/data/profile";
import { getGitHubStats } from "@/lib/data";

export const metadata: Metadata = {
  title: `${profile.name} — Portfolio`,
  description: profile.bio,
};

export default async function HomePage() {
  const stats = await getGitHubStats();

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="flex flex-col gap-5 pt-20 pb-16 md:pt-28">
        <p className="font-mono text-xs tracking-wide text-muted uppercase">
          {profile.location}
        </p>
        <h1 className="font-display text-5xl tracking-tight text-foreground md:text-7xl">
          {profile.name.split(" ")[0]}{" "}
          <span className="text-accent">{profile.name.split(" ").slice(1).join(" ")}</span>
        </h1>
        <p className="font-display text-xl text-muted md:text-2xl">{profile.role}</p>
        <p className="max-w-2xl text-base leading-relaxed text-muted">{profile.bio}</p>
        <div className="mt-2 flex flex-wrap items-center gap-5">
          {profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-muted transition-colors duration-150 ease-out hover:text-accent"
            >
              <SocialIcon icon={social.icon} className="h-5 w-5" />
            </a>
          ))}
          {stats && (
            <p className="ml-auto font-mono text-xs text-muted">
              {stats.publicRepos} repos · {stats.followers} followers ·{" "}
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent transition-colors duration-150 ease-out hover:text-foreground"
              >
                @{profile.githubUsername}
              </a>
            </p>
          )}
        </div>
      </section>

      {/* About */}
      <section className="grid gap-10 border-t border-white/[0.08] py-16 md:grid-cols-[auto_1fr] md:gap-14">
        <div className="relative aspect-[4/5] w-full max-w-64 overflow-hidden rounded-lg border border-white/[0.08]">
          <Image
            src={profile.portrait}
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 256px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 self-center">
          <h2 className="font-display text-3xl tracking-tight">About me</h2>
          <p className="leading-relaxed text-muted">
            Hi, I am {profile.nickname} — a {profile.role.toLowerCase()} based in{" "}
            {profile.location}. I build full-stack web systems end to end: schema design,
            backend logic, and fast, responsive interfaces.
          </p>
          <p className="leading-relaxed text-muted">
            Recent work spans POS and inventory systems for local businesses, AI-assisted
            content pipelines, and voice-first productivity tools — all shipped from a
            single developer workflow on{" "}
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors duration-150 ease-out hover:text-foreground"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-white/[0.08] py-16">
        <h2 className="font-display text-3xl tracking-tight">What I do</h2>
        <div className="mt-8 divide-y divide-white/[0.08]">
          {skills.map((group) => (
            <div
              key={group.label}
              className="grid gap-3 py-5 md:grid-cols-[200px_1fr] md:gap-8"
            >
              <p className="font-mono text-xs tracking-wide text-accent uppercase">
                {group.label}
              </p>
              <p className="leading-relaxed text-muted">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-md border border-white/[0.08] px-4 py-2 font-mono text-sm text-foreground transition-colors duration-150 ease-out hover:border-accent hover:text-accent active:scale-[0.98]"
          >
            View projects →
          </Link>
        </div>
      </section>
    </div>
  );
}
