// Identity, socials, skills, education — sourced from the Esperat Portfolio CMS
// archives (site_profile defaults, sample_data.sql) and the GitHub profile (Zurin2).

export type Social = {
  name: string;
  url: string;
  icon: "github" | "gmail" | "facebook" | "instagram";
};

export const profile = {
  name: "Jose Miguel Esperat",
  nickname: "Jm",
  role: "Computer Science Student & Full Stack Web Developer",
  bio: "Passionate about building intuitive web applications, crafting clean code, and creating modern visual designs. Experienced in PHP, MySQL, JavaScript, and responsive modern web interfaces.",
  email: "esperatjosemiguel@gmail.com",
  location: "Zamboanga City, Philippines",
  githubUsername: "Zurin2",
  githubUrl: "https://github.com/Zurin2",
  portrait: "/img/jm-portrait.jpg",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/Zurin2",
      icon: "github",
    },
    {
      name: "Email",
      url: "mailto:esperatjosemiguel@gmail.com",
      icon: "gmail",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/jm.esperatii/",
      icon: "facebook",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/zurinj_",
      icon: "instagram",
    },
  ] as Social[],
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    items: ["PHP", "Node.js", "Laravel", "Inertia.js", "REST APIs"],
  },
  {
    label: "Data & BaaS",
    items: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    label: "Tooling & Other",
    items: ["Python", "Git", "Vercel", "FFmpeg", "Gemini API"],
  },
];

export const education = {
  title: "Bachelor of Science in Computer Science",
  subtitle: "3rd Year Student",
  location: "Zamboanga City, Philippines",
  descriptions: [
    "Building full-stack web systems end to end — from MySQL schemas and PHP/Node backends to Next.js frontends deployed on Vercel.",
    "Coursework and self-driven projects span inventory systems, POS engines, AI content pipelines, and offline-first web apps.",
  ],
};
