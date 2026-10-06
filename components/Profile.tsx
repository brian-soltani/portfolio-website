import { site } from "@/lib/site";

const socials = [
  { label: "GitHub", href: site.links.github },
  { label: "LinkedIn", href: site.links.linkedin },
  { label: "X", href: site.links.twitter },
];

export default function Profile() {
  return (
    <header className="profile">
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <div>
          <h1 className="text-lg font-medium tracking-[-0.025em] text-title">{site.name}</h1>
          <p className="mt-0.5 text-sm text-muted">Mathematics, cryptography, research</p>
        </div>
        <p className="pt-1 text-sm text-muted">{site.location}</p>
      </div>

      <div className="mt-10 space-y-4 leading-[1.8]">
        <p>
          I&apos;m Brian, a mathematics student at George Mason University and an undergraduate
          researcher in the SPIRE Lab. I&apos;m interested in cryptography, the math behind secure
          systems, and turning those ideas into working software.
        </p>
        <p>
          I want to pursue research in cryptography and cybersecurity, particularly how mathematical
          guarantees hold up in software implementations. My goal is to contribute to research
          projects while developing the knowledge and judgment to investigate questions of my own.
        </p>
      </div>

      <nav aria-label="Social profiles" className="mt-6">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {socials.map((social) => (
            <li key={social.label}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-link">
                {social.label}
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
