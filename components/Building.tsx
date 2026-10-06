import { projects, type Project } from "@/data/projects";
import Section from "./Section";

function ProjectEntry({ project }: { project: Project }) {
  const source = project.links.find((link) => link.label === "Source");
  const otherLinks = project.links.filter((link) => link !== source);

  return (
    <article id={project.slug} className="min-w-0 scroll-mt-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium text-title">
          {source ? (
            <a href={source.href} target="_blank" rel="noopener noreferrer" className="text-link">
              {project.name}
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
              <span className="sr-only"> source (opens in a new tab)</span>
            </a>
          ) : (
            project.name
          )}
        </h3>
        <span className="shrink-0 text-xs text-muted">{project.status}</span>
      </div>

      <p className="mt-2 leading-[1.75]">{project.blurb}</p>

      {otherLinks.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {otherLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              {link.label}
              <span className="project-arrow" aria-hidden="true">
                ↗
              </span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      )}

      <details className="project-details mt-3">
        <summary className="detail-toggle w-fit cursor-pointer text-sm text-muted">
          Details{" "}
          <span className="detail-plus" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="mt-3 space-y-3 text-sm leading-[1.8]">
          <p>{project.detail}</p>
          <p className="text-muted">
            <span className="sr-only">Technologies: </span>
            {project.stack.join(" · ")}
          </p>
        </div>
      </details>
    </article>
  );
}

export default function Building() {
  return (
    <Section id="projects" title="Selected projects">
      <div className="grid items-start gap-x-12 gap-y-10 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectEntry key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
