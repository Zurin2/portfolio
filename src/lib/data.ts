import { cacheLife } from "next/cache";
import { getSupabasePublic } from "@/utils/supabase";
import { fallbackProjects, type Project } from "@/data/projects";

export type GitHubStats = {
  publicRepos: number;
  followers: number;
};

export async function getProjects(): Promise<Project[]> {
  "use cache";
  cacheLife("hours");

  try {
    const supabase = getSupabasePublic();
    if (!supabase) return fallbackProjects;

    const { data, error } = await supabase
      .from("projects")
      .select("slug,title,description,tech,repo_url,live_url,featured,sort_order")
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) return fallbackProjects;

    return data.map((row) => ({
      slug: row.slug,
      title: row.title,
      description: row.description,
      tech: row.tech ?? [],
      repoUrl: row.repo_url ?? undefined,
      liveUrl: row.live_url ?? undefined,
      featured: row.featured ?? false,
      sortOrder: row.sort_order ?? 0,
    }));
  } catch {
    return fallbackProjects;
  }
}

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
