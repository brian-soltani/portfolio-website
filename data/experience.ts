export type RoleSection = {
  heading: string;
  bullets: string[];
};

export type Role = {
  company: string;
  // Shown as a small badge next to the company. Omitted where the
  // arrangement isn't documented.
  type?: string;
  title: string;
  timeframe: string;
  location?: string;
  website?: string;
  // Square company mark in /public/logos. Falls back to a monogram tile.
  logo?: string;
  summary: string;
  sections: RoleSection[];
  stack: string[];
  // Which roles the accordion expands on load. The rows are independent
  // <details>, so any number of them can start open.
  defaultOpen?: boolean;
};

export const experience: Role[] = [
  {
    company: "MITRE",
    type: "Incoming Internship",
    title: "Modeling & Analysis Intern",
    timeframe: "Summer 2027",
    website: "https://www.mitre.org/",
    summary: "Incoming Modeling & Analysis Intern for Summer 2027.",
    sections: [],
    stack: [],
  },
  {
    company: "George Mason University",
    title: "Undergraduate Researcher, SPIRE Lab",
    timeframe: "2026",
    location: "Fairfax, VA",
    logo: "/logos/spire.png",
    defaultOpen: true,
    summary:
      "Speeding up cryptographic proof systems on constrained hardware, from 32-bit ARM boards up to H100 GPUs.",
    sections: [
      {
        heading: "Binius64 on 32-bit ARM",
        bullets: [
          "Profiled Binius64, a 64-bit Rust cryptographic prover, on a 32-bit ARM board and rewrote its hottest routine (~93% of instructions) in C/ARM NEON, cutting median non-ZK proving time 2.84x (41.3s to 14.6s) vs. portable code.",
          "Restructured batched field arithmetic to defer reconstruction out of the inner loop, cutting Ethereum-signature proving time 8.08% beyond the optimized NEON baseline; all 112 proofs verified across 3 reboots.",
        ],
      },
      {
        heading: "GPU proving",
        bullets: [
          "Built a small-field GPU proving method on H100s that raised complete-proof throughput 1.23x over a same-system baseline on synthetic non-ZK batches.",
          "Validated correctness with a CPU verifier that accepted 32/32 valid proofs and rejected 192/192 tampered ones.",
        ],
      },
    ],
    stack: ["Rust", "C", "ARM NEON", "CUDA", "Nsight Systems", "Linux"],
  },
  {
    company: "Salam Consulting",
    type: "Internship",
    title: "Machine Learning Engineer",
    timeframe: "2025",
    location: "Fairfax, VA",
    website: "https://www.salam-consulting.com/",
    logo: "/logos/salam.png",
    summary:
      "Built an LLM pipeline that gives students and job seekers personalized resume and career recommendations, and helped run the events that put them in a room with professionals who could help.",
    sections: [
      {
        heading: "Machine learning",
        bullets: [
          "Built a Python and LLM API pipeline that turns a user's background and goals into personalized resume and career recommendations for a 110-member community of students and job seekers.",
          "Benchmarked the pipeline on 9 user scenarios with 224+ deterministic checks and refined prompts and outputs, improving targeted resume/job-match scores by up to 30 points.",
          "Presented model results, failure modes, and tradeoffs in 20+ weekly briefings to product and engineering leads.",
        ],
      },
      {
        heading: "Event management",
        bullets: [
          "Helped plan and run networking events for high school students, college students, and working professionals.",
        ],
      },
    ],
    stack: ["Python", "LLM APIs", "Prompt engineering", "Evaluation & benchmarking"],
  },
  {
    company: "Oasis Hill",
    type: "Internship",
    title: "Full Stack Developer",
    timeframe: "2025",
    location: "Arlington, VA",
    website: "https://www.oasishill.com/",
    logo: "/logos/oasis.png",
    summary:
      "Rebuilt the company's website and payment-ready interface from scratch as the sole engineer, and weighed in on the technical side of deals and events.",
    sections: [
      {
        heading: "Web development",
        bullets: [
          "Redeveloped the site to improve functionality and user experience.",
          "Built online room booking to replace phone and email scheduling.",
          "Built the Stripe checkout UI and wrote guidance for completing it after handoff; the team now takes payments live and still runs the site.",
        ],
      },
      {
        heading: "Technical consulting",
        bullets: [
          "Advised stakeholders on the technical side of potential deals.",
          "Evaluated technical feasibility and fit with existing systems.",
        ],
      },
      {
        heading: "Events",
        bullets: [
          "Coordinated vendors, negotiated pricing, and aligned logistics with event hosts.",
        ],
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "Stripe API"],
  },
];
