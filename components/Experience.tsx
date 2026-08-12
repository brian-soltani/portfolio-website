import Image from "next/image";
import { experience, type Role } from "@/data/experience";
import Section from "./Section";

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Native <details> keeps the accordion keyboard-accessible with no JS.
// The role flagged `defaultOpen` in the data opens on load.
function RoleRow({ role }: { role: Role }) {
  return (
    <details open={role.defaultOpen} className="group border-b border-line-soft last:border-b-0">
      <summary className="flex cursor-pointer list-none items-start gap-3 py-3.5 [&::-webkit-details-marker]:hidden">
        {role.logo ? (
          <Image
            src={role.logo}
            alt={`${role.company} logo`}
            width={160}
            height={160}
            className="h-10 w-10 shrink-0 rounded-lg border border-line bg-bg object-contain p-1"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-panel text-xs font-semibold text-title"
          >
            {initials(role.company)}
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[0.9375rem] font-semibold text-title">{role.company}</span>
            {role.type && (
              <span className="rounded border border-line bg-chip px-1.5 py-px text-[11px] text-muted">
                {role.type}
              </span>
            )}
          </div>
          <p className="text-sm text-body">{role.title}</p>
          {/* Narrow screens: dates sit under the title instead of competing
              with it for the same row. */}
          <p className="text-[0.8125rem] text-muted sm:hidden">
            {role.timeframe}
            {role.location ? ` · ${role.location}` : ""}
          </p>
        </div>

        <div className="hidden shrink-0 text-right sm:block">
          <p className="text-[0.8125rem] font-semibold text-title">{role.timeframe}</p>
          {role.location && <p className="text-[0.8125rem] text-muted">{role.location}</p>}
        </div>

        <svg
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="chev mt-1 shrink-0 text-muted"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>

      <div className="pb-4 sm:pl-13">
        <p className="text-sm leading-relaxed text-body">{role.summary}</p>

        {role.sections.map((section) => (
          <div key={section.heading} className="mt-3">
            <p className="text-[0.8125rem] font-semibold text-title">{section.heading}</p>
            <ul className="mt-1 space-y-1">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-body">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-muted"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {role.stack.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
            {role.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-chip px-2 py-0.5 text-[0.8125rem] text-body"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {role.website && (
          <a
            href={role.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-title underline decoration-line underline-offset-4 transition-colors hover:decoration-muted"
          >
            {role.company} website
            <svg
              aria-hidden="true"
              width="10"
              height="10"
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
        )}
      </div>
    </details>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="My experience.">
      <div>
        {experience.map((role) => (
          <RoleRow key={role.company} role={role} />
        ))}
      </div>
    </Section>
  );
}
