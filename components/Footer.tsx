import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="pt-16 sm:pt-20">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs leading-5 text-muted">
        <p>
          © 2026 {site.name} · {site.location}
        </p>
        <Link href="/privacy" className="text-link">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
