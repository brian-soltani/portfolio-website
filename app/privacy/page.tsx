import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy · ${site.name}`,
  description: `Privacy policy for ${site.url}: what the site collects, which is nothing.`,
};

// Last reviewed against the actual behavior of the site. If you add anything
// that talks to a third party — a contact form, analytics, an embed, a hosted
// font — update this page in the same commit.
const UPDATED = "September 30, 2026";

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-7 text-body">{children}</p>;
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Section id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")} title={title}>
      <div className="space-y-3">{children}</div>
    </Section>
  );
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="portfolio-shell">
        <header className="mb-14 space-y-2 sm:mb-16">
          <h1 className="text-xl font-medium tracking-tight text-title">Privacy</h1>
          <p className="text-xs text-muted">Last updated {UPDATED}</p>
        </header>

        <div className="space-y-12">
          <Block title="The short version.">
            <P>
              This site collects nothing about you. There are no accounts, no cookies, no analytics,
              no trackers, and no server that logs what you do here.
            </P>
          </Block>

          <Block title="How the site is built.">
            <P>
              {site.url} is a static website. Every page is a file that was generated ahead of time
              and handed to your browser as-is. There is no database, no login, and no code running
              on a server that processes anything you send.
            </P>
            <P>
              Fonts and images are served from this site&rsquo;s own domain. Nothing on the page
              loads from Google Fonts, a CDN, an ad network, or an embedded widget, so no third
              party sees your visit as a side effect of the page rendering.
            </P>
          </Block>

          <Block title="Cookies and local storage.">
            <P>
              None are set. The site stores nothing in your browser and reads nothing from it, which
              is why you were never shown a cookie banner — there is nothing to consent to.
            </P>
          </Block>

          <Block title="Analytics.">
            <P>
              There are none. No page views, no session recording, no heatmaps, no fingerprinting.
            </P>
          </Block>

          <Block title="Server logs.">
            <P>
              The site is served by a static host, and hosts generally keep short-lived request logs
              (IP address, timestamp, requested file) for operational and security reasons. Those
              logs belong to the host and are governed by its own privacy policy. They are not read,
              exported, or combined with anything else.
            </P>
          </Block>

          <Block title="Contacting me.">
            <P>
              You can reach me through LinkedIn using the link on my profile. Social links take you
              to external platforms, where the platform&rsquo;s own privacy policy applies. This
              site does not collect or store messages.
            </P>
          </Block>

          <Block title="Children.">
            <P>
              This site is a professional portfolio intended for a general adult audience — it is
              not directed at children. Because it collects no personal information from anyone, it
              collects none from children either.
            </P>
          </Block>

          <Block title="Your rights.">
            <P>
              Rights to access, correct, or delete personal data only bite when there is data to act
              on. Since nothing is collected, there is nothing held about you to hand over or erase.
              For questions, you can contact me on{" "}
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                LinkedIn
              </a>
              .
            </P>
          </Block>

          <Block title="Changes.">
            <P>
              If the site ever starts collecting something, this page changes first and the date at
              the top updates with it.
            </P>
          </Block>
        </div>

        <p className="mt-12 text-sm">
          <Link href="/" className="text-link">
            ← Back to portfolio
          </Link>
        </p>

        <Footer />
      </div>
    </main>
  );
}
