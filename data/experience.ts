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
    company: "George Mason University",
    title: "Research Assistant, SPIRE Lab",
    timeframe: "August 2026 - Present",
    location: "Fairfax, Virginia",
    logo: "/logos/spire.png",
    defaultOpen: true,
    summary:
      "Recently joined the SPIRE Lab as a research assistant. Details on the work will go here once there's something worth writing up.",
    sections: [],
    stack: [],
  },
  {
    company: "Ngoit",
    title: "Full-Stack Developer",
    defaultOpen: true,
    timeframe: "May 2025 - July 2026",
    logo: "/logos/ngoit.png",
    summary:
      "Rebuilt a live e-commerce platform for more than 1,000 users, improving the customer experience and creating a reliable technical foundation for payments and future growth.",
    sections: [
      {
        heading: "Web Development & User Experience",
        bullets: [
          "Rebuilt the e-commerce platform end-to-end, modernizing the navigation, functionality, and user experience across all customer-facing pages.",
          "Developed a modular front end using React, Node.js, and JavaScript to improve maintainability and support future platform expansion.",
          "Streamlined the purchasing experience to reduce friction and improve reliability for first-time buyers.",
          "Created reusable interface components to ensure consistency throughout the platform.",
        ],
      },
      {
        heading: "Database & Application Infrastructure",
        bullets: [
          "Engineered the platform's Supabase and PostgreSQL data layer to support the complete customer purchase lifecycle.",
          "Maintained state consistency and data integrity across user interactions, transactions, and application workflows.",
          "Connected the front-end interface with backend services to create a cohesive and responsive e-commerce experience.",
        ],
      },
      {
        heading: "Payment Integration & Technical Handoff",
        bullets: [
          "Built the foundation for Stripe payment processing, enabling the platform to support secure customer transactions at scale.",
          "Developed and validated payment-related endpoints using Postman to ensure reliable communication between the platform and Stripe.",
          "Documented the integration process and production requirements to support a smooth technical handoff.",
          "Provided the team with clear guidance for maintaining and expanding the payment system after project completion.",
        ],
      },
    ],
    stack: ["React", "Node.js", "JavaScript", "Supabase", "PostgreSQL", "Stripe API", "Postman"],
  },
  {
    company: "Salam Consulting",
    type: "Internship",
    title: "AI/ML Intern",
    timeframe: "June 2025 - September 2025",
    location: "Remote",
    website: "https://www.salam-consulting.com/",
    logo: "/logos/salam.png",
    summary:
      "Built an ML prototype that gives people new to the workforce personalized career guidance, and helped run the events that put them in a room with professionals who could help.",
    sections: [
      {
        heading: "Machine learning R&D",
        bullets: [
          "Researched ML applications for people entering the workforce and presented findings to the team weekly.",
          "Built a prototype of a personalized model that produces an improved version of a person's resume, using Python, TensorFlow, PyTorch, and Hugging Face.",
          "Shipped the MVP of a resume-enhancement pipeline running 224+ deterministic checks.",
        ],
      },
      {
        heading: "Event management",
        bullets: [
          "Helped plan and run networking events for high school students, college students, and working professionals.",
        ],
      },
    ],
    stack: ["Python", "TensorFlow", "PyTorch", "Hugging Face"],
  },
  {
    company: "Oasis Hill",
    type: "Internship",
    title: "Technical Intern",
    timeframe: "June 2025 - August 2025",
    location: "Arlington, Virginia",
    website: "https://www.oasishill.com/",
    logo: "/logos/oasis.png",
    summary:
      "Rebuilt the company's website and payment-ready interface from scratch as the sole engineer, and weighed in on the technical side of deals and events.",
    sections: [
      {
        heading: "Web development",
        bullets: [
          "Redeveloped the site to improve functionality and user experience.",
          "Built a UI for future customer transactions using React, Node.js, and JavaScript.",
          "Prepared the platform for Stripe payment integration and wrote guidance for completing it after handoff.",
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
    stack: ["React", "Node.js", "JavaScript", "Stripe API"],
  },
];
