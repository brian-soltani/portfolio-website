import { awards, education } from "@/data/education";
import Section from "./Section";

export default function Education() {
  return (
    <>
      <Section id="education" title="Education">
        <ul className="space-y-6">
          {education.map((entry) => (
            <li
              key={entry.school}
              className="flex flex-col items-start gap-1 sm:flex-row sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-title">{entry.school}</p>
                {entry.credential && (
                  <p className="mt-0.5 text-sm leading-6 text-body">{entry.credential}</p>
                )}
                {entry.detail && <p className="text-xs leading-5 text-muted">{entry.detail}</p>}
              </div>
              <p className="shrink-0 text-xs leading-5 text-muted sm:text-right">
                {entry.timeframe}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="awards" title="Recognition">
        <ul className="space-y-6">
          {awards.map((award) => (
            <li
              key={award.event}
              className="flex flex-col items-start gap-1 sm:flex-row sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <p className="text-sm font-medium text-title">
                  {award.href ? (
                    <a
                      href={award.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link"
                    >
                      {award.event}
                    </a>
                  ) : (
                    award.event
                  )}
                </p>
                <ul className="mt-0.5 text-sm leading-6 text-body">
                  {award.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
              {(award.timeframe || award.location) && (
                <div className="shrink-0 text-xs leading-5 text-muted sm:text-right">
                  {award.timeframe && <p>{award.timeframe}</p>}
                  {award.location && <p>{award.location}</p>}
                </div>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
