import type { Metadata } from "next";
import { MailIcon, MapPinIcon, SocialIcon } from "@/components/Icons";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact — Jose Miguel Esperat",
  description: `Get in touch with ${profile.name} — ${profile.role}.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-20 pb-24">
      <section className="pb-12">
        <h1 className="font-display text-4xl tracking-tight md:text-5xl">Contact</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Open to internships, freelance builds, and collaborations. The fastest way to
          reach me is email — I usually reply within a day.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <a
          href={`mailto:${profile.email}`}
          className="font-display text-2xl tracking-tight break-all text-accent transition-colors duration-150 ease-out hover:text-foreground md:text-4xl"
        >
          {profile.email}
        </a>

        <p className="flex items-center gap-2 font-mono text-sm text-muted">
          <MapPinIcon className="h-4 w-4" />
          {profile.location}
        </p>

        <div className="mt-4 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {profile.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-4 text-sm text-muted transition-colors duration-150 ease-out hover:text-foreground"
            >
              <SocialIcon icon={social.icon} className="h-5 w-5" />
              <span className="font-mono">{social.name}</span>
              <MailIcon className="ml-auto h-4 w-4 opacity-0" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
