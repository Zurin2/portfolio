import { cacheLife } from "next/cache";

export type GitHubStats = {
  publicRepos: number;
  followers: number;
};

export async function getGitHubStats(): Promise<GitHubStats | null> {
  "use cache";
  cacheLife("hours");

  try {
    const res = await fetch("https://api.github.com/users/Zurin2", {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as { public_repos?: number; followers?: number };
    return {
      publicRepos: json.public_repos ?? 0,
      followers: json.followers ?? 0,
    };
  } catch {
    return null;
  }
}
