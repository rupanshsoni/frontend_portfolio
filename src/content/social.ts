export const social = [
  { url: "mailto:soni.rupansh@gmail.com", name: "mail" },
  { url: "https://github.com/rupanshsoni", name: "github" },
  { url: "https://www.linkedin.com/in/rupansh-soni/", name: "linkedin" },
  { url: "https://x.com/rupanshbuilds", name: "x" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
