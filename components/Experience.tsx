import { experience, type Role } from "@/data/experience";
import Section from "./Section";

// Native <details> keeps the accordion keyboard-accessible with no JS.
function RoleRow({ role }: { role: Role }) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-start gap-3 py-2.5 [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-title">{role.company}</p>
          <p className="mt-0.5 text-sm text-body">
            {role.title}
            {role.type && <span className="text-muted"> · {role.type}</span>}
          </p>
          <p className="mt-1 text-xs leading-5 text-muted sm:hidden">
            {role.timeframe}
            {role.location ? ` · ${role.location}` : ""}
          </p>
        </div>

        <div className="hidden shrink-0 text-right text-xs leading-5 text-muted sm:block">
          <p>{role.timeframe}</p>
          {role.location && <p>{role.location}</p>}
        </div>

        <svg
          aria-hidden="true"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-1 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>

      <div className="space-y-4 pb-6 pr-6 pt-2 text-sm leading-6 text-body">
        <p>{role.summary}</p>

        {role.sections.map((section) => (
          <div key={section.heading}>
            <p className="font-medium text-title">{section.heading}</p>
            <ul className="mt-1 list-disc space-y-1 pl-4 marker:text-muted">
              {section.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}

        {role.stack.length > 0 && (
          <p className="text-xs leading-5 text-muted" aria-label="Technologies">
            {role.stack.join(", ")}
          </p>
        )}

        {role.website && (
          <a
            href={role.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link inline-block text-xs"
          >
            {role.company} website
          </a>
        )}
      </div>
    </details>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="-my-2.5 space-y-2">
        {experience.map((role) => (
          <RoleRow key={role.company} role={role} />
        ))}
      </div>
    </Section>
  );
}
