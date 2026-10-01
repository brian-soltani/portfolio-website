import Image from "next/image";
import { site } from "@/lib/site";
import Reveal from "./Reveal";

const socials = [
  {
    label: "GitHub",
    href: site.links.github,
    icon: (
      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    icon: (
      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: site.links.twitter,
    icon: (
      <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z" />
      </svg>
    ),
  },
];

export default function Profile() {
  return (
    <header className="rule">
      <Reveal>
        <div className="px-3 pb-4 pt-3">
          <div className="flex items-end gap-3">
            <Image
              src="/avatar.png"
              alt={site.name}
              width={400}
              height={400}
              priority
              className="h-[76px] w-[76px] shrink-0 rounded-xl border border-line object-cover"
            />
            <div className="flex h-full flex-col justify-end py-1">
              <h1 className="text-[1.55rem] font-bold leading-[1.08] tracking-tight text-title">
                {site.name}
              </h1>
              <p className="mt-1 text-sm text-muted">
                Research Assistant @ SPIRE Lab | Math Undergraduate, &rsquo;29
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3 text-[0.9375rem] leading-relaxed">
            <p>
              Hey! I&apos;m Brian, a Fairfax-based math student at George Mason and a new research
              assistant in the SPIRE Lab, focused on the intersection of quantitative methods and
              working software. I like problems that look messy until you find the structure
              underneath: a proof, a broken build, a process that needs redesigning.
            </p>
            <p>
              So far that&apos;s meant rebuilding an e-commerce platform for 1,000+ users, shipping
              an ML resume pipeline built on deterministic checks, and winning two tracks at HackFax
              x PatriotHacks with a privacy-preserving age verification system.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[9px] border border-line bg-chip px-3 py-2 text-sm font-medium text-title transition-colors hover:border-muted/40"
            >
              View my code
              <svg
                aria-hidden="true"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>

          <p className="mt-6 text-sm text-body">
            Here are my <span className="font-semibold text-title">socials</span>
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[9px] border border-line bg-chip px-3 py-1.5 text-sm text-title transition-colors hover:border-muted/40"
                >
                  {s.icon}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </header>
  );
}
