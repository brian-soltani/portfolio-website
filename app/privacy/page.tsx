import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy · ${site.name}`,
  description: `Privacy policy for ${site.url}: what the site collects, which is nothing.`,
};

// Last reviewed against the actual behavior of the site. If you add anything
// that talks to a third party — a contact form, analytics, an embed, a hosted
// font — update this page in the same commit.
const UPDATED = "August 14, 2026";

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[0.9375rem] leading-relaxed text-body">{children}</p>;
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rule">
      <div className="rule px-3 py-3.5">
        <h2 className="text-[1.0625rem] font-semibold tracking-tight text-title">{title}</h2>
      </div>
      <div className="space-y-3 px-3 py-4">{children}</div>
    </section>
  );
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-bg">
      <div className="frame relative mx-2 max-w-[690px] sm:mx-8 md:mx-auto">
        <div aria-hidden="true" className="dotfield h-16 w-full" />

        <section className="rule">
          <div className="space-y-2 px-3 py-5">
            <h1 className="text-[1.375rem] font-semibold tracking-tight text-title">Privacy</h1>
            <p className="text-[0.8125rem] text-muted">Last updated {UPDATED}</p>
          </div>
        </section>

        <Block title="The short version.">
          <P>
            This site collects nothing about you. There are no accounts, no cookies, no
            analytics, no trackers, and no server that logs what you do here.
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
            The only way to reach me from this site is the email link, which opens your own mail
            client. If you email me, I have your message and your email address — the same as any
            email — and I keep it in my inbox. I don&rsquo;t add it to a mailing list, sell it, or
            share it.
          </P>
          {/*
            When NEXT_PUBLIC_FORMSPREE_ID is set and the contact form ships, uncomment this
            paragraph in the same commit, and add https://formspree.io to `connect-src` and
            `form-action` in vercel.json and public/_headers.

            <P>
              If you use the contact form, your name, email address, and message are sent to
              Formspree, a third-party form service, which forwards them to my inbox and stores a
              copy in my Formspree account. See Formspree&rsquo;s privacy policy for how they
              handle it. Nothing you submit is stored by this site. Email me and I&rsquo;ll delete
              a submission from that account on request.
            </P>
          */}
        </Block>

        <Block title="Children.">
          <P>
            This site is a professional portfolio intended for a general adult audience — it is not
            directed at children. Because it collects no personal information from anyone, it
            collects none from children either.
          </P>
        </Block>

        <Block title="Your rights.">
          <P>
            Rights to access, correct, or delete personal data only bite when there is data to act
            on. Since nothing is collected, there is nothing held about you to hand over or erase.
            The exception is email you have sent me — write to{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-title underline decoration-line underline-offset-4 transition-colors hover:decoration-muted"
            >
              {site.email}
            </a>{" "}
            and I&rsquo;ll delete it.
          </P>
        </Block>

        <Block title="Changes.">
          <P>
            If the site ever starts collecting something, this page changes first and the date at
            the top updates with it.
          </P>
        </Block>

        <section className="rule">
          <div className="px-3 py-4">
            <Link
              href="/"
              className="text-[0.9375rem] text-title underline decoration-line underline-offset-4 transition-colors hover:decoration-muted"
            >
              ← Back to portfolio
            </Link>
          </div>
        </section>

        <Footer />
        <div aria-hidden="true" className="dotfield h-16 w-full" />
      </div>
    </main>
  );
}
