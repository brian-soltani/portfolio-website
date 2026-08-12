export const site = {
  name: "Brian Soltani",
  url: "https://briansoltani.com",
  title: "Brian Soltani | SPIRE Lab Research Assistant",
  description:
    "Portfolio of Brian Soltani: software engineering, machine learning, and quantitative research. Research assistant in the SPIRE Lab and B.S. Mathematics (Data Science) student at George Mason University.",
  location: "Fairfax, VA",
  email: "brian.i.soltani@gmail.com",
  links: {
    github: "https://github.com/brisolt",
    linkedin: "https://linkedin.com/in/brian-soltani",
    twitter: "https://x.com/brisolt_",
    twitterHandle: "@brisolt_",
  },
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
} as const;
