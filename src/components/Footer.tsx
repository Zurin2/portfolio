import { cacheLife } from "next/cache";
import { profile } from "@/data/profile";

async function getCopyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCopyrightYear();
  return (
    <footer className="border-t border-white/[0.08]">
      <div className="mx-auto flex max-w-5xl flex-col gap-1 px-6 py-8 font-mono text-xs text-muted">
        <p>
          © {year} {profile.name}
        </p>
        <p className="text-muted/60">Next.js · React · Vercel</p>
      </div>
    </footer>
  );
}
