# rolandk.dev

Source for [rolandk.dev](https://rolandk.dev), Roland Kákonyi's personal website built with Astro.

The site combines a short personal profile, work experience, and a blog focused on media technology, Apple platforms, SDK engineering, and AI-driven video workflows.

## Stack

- Astro 5
- TypeScript
- MDX content collections
- RSS and sitemap generation
- `@4hse/astro-llms-txt` for AI-readable site indexes

## What Is In This Repo

- `src/pages/index.astro`: homepage with profile summary, key focus areas, and latest posts
- `src/pages/about.astro`: personal and professional background
- `src/pages/experience.astro`: career timeline and education
- `src/pages/blog/index.astro`: blog listing page
- `src/pages/blog/[...slug].astro`: blog post route
- `src/content/blog/`: Markdown and MDX blog content
- `src/data/`: structured site content such as bio and experience entries
- `src/components/`: shared layout and UI components
- `scripts/sanitize-llms.mjs`: post-build cleanup for generated `llms.txt` files

## Development

Install dependencies:

```sh
npm install
```

Start the local dev server:

```sh
npm run dev
```

The site runs at `http://localhost:4321`.

## Build

Create a production build:

```sh
npm run build
```

This does two things:

1. Runs `astro build`
2. Sanitizes generated `llms.txt`, `llms-small.txt`, and `llms-full.txt` files in `dist/`

Preview the production build locally:

```sh
npm run preview
```

## Content Model

Blog posts live in `src/content/blog/` and are validated through Astro content collections in `src/content.config.ts`.

Each post supports:

- `title`
- `description`
- `pubDate`
- `updatedDate` (optional)
- `heroImage` (optional)

## Site Features

- Canonical site URL set to `https://rolandk.dev`
- RSS feed at `/rss.xml`
- Sitemap generation
- External links automatically open in a new tab with safe `rel` attributes
- AI-friendly content indexes generated as `llms.txt`, `llms-small.txt`, and `llms-full.txt`

## Notes

- `public/_headers` is included for deployment header configuration
- `public/fonts/` contains the local font assets used by the site
