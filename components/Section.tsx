export default function Section({
  id,
  title,
  action,
  children,
}: {
  id: string;
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="portfolio-section scroll-mt-12">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 id={`${id}-heading`} className="text-sm font-medium text-muted">
          {title}
        </h2>
        {action}
      </div>
      {children}
    </section>
  );
}
