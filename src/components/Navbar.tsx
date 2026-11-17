import Link from "next/link";
import { GitHubIcon } from "./Icons";
import { Logo } from "./Logo";
import { profile } from "@/data/profile";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-white/[0.08] bg-[#090a0f]/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2.5 transition-opacity duration-150 ease-out hover:opacity-80"
        >
          <Logo className="h-8 w-8" />
          <span className="hidden font-mono text-sm text-muted sm:block">
            jm<span className="text-accent">.</span>esperat
          </span>
        </Link>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-150 ease-out hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors duration-150 ease-out hover:text-foreground"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
