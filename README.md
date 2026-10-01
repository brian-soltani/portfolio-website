# Brian Soltani — Portfolio

Personal portfolio site: software engineering, ML, and quantitative research work.

Built with [Next.js](https://nextjs.org) (App Router, static export), TypeScript, and
Tailwind CSS v4. No analytics, no tracking, no backend — fonts are self-hosted at build
time via `next/font`, and contact links point to social profiles.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

`next.config.ts` sets `output: "export"`, so the build writes a fully static site to
`out/` — deployable to any static host.

## Lint & format

```bash
npm run lint
npm run format
```

## Contact

The site links to GitHub, LinkedIn, and X. No email address or contact form is published.

## Deploy

Any of these work:

- **Vercel** — import the repo at [vercel.com/new](https://vercel.com/new); zero config.
- **Netlify** — build command `npm run build`, publish directory `out`.
- **GitHub Pages** — publish the `out/` directory (e.g., with a GitHub Actions workflow
  running `npm run build` and deploying `out/`).

After deploying, update `url` in [lib/site.ts](lib/site.ts) to the real domain so Open
Graph / Twitter card URLs resolve correctly.

## Editing content

All content lives in data files — no layout code needs to change:

- [data/projects.ts](data/projects.ts) — projects (fill in `TODO` stack tags and links)
- [data/skills.ts](data/skills.ts) — skill groups
- [data/education.ts](data/education.ts) — education and awards
- [lib/site.ts](lib/site.ts) — name, social links, site URL, meta description
