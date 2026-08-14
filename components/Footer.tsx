import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="rule">
      <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-5 text-[0.8125rem] text-muted">
        <p>
          © 2026 {site.name} · {site.location}
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="/privacy"
            className="text-title underline decoration-line underline-offset-4 transition-colors hover:decoration-muted"
          >
            Privacy
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="text-title underline decoration-line underline-offset-4 transition-colors hover:decoration-muted"
          >
            {site.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
