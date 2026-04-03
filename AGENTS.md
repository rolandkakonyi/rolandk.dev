# AGENTS.md

## Purpose

This repository contains the source for `rolandk.dev`, Roland Kákonyi's personal website built with Astro.

The site is small and content-driven. Prefer focused edits that preserve the current voice, structure, and lightweight architecture.

## Stack

- Astro 5
- TypeScript
- Markdown/MDX content collections
- RSS and sitemap generation
- `@4hse/astro-llms-txt` for AI-readable exports

## Package Manager And Commands

Use `npm`. Do not switch package managers or rewrite commands to `pnpm` or `yarn` unless explicitly requested.

Common commands:

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run astro -- check`

Note: `npm run build` runs both the Astro production build and `scripts/sanitize-llms.mjs`, which cleans up generated `llms*.txt` files in `dist/`.

## Project Structure

- `src/pages/`: route entry points
- `src/pages/index.astro`: homepage
- `src/pages/about.astro`: about page
- `src/pages/experience.astro`: work history and education
- `src/pages/blog/`: blog index and post route
- `src/content/blog/`: Markdown and MDX blog posts
- `src/content.config.ts`: blog frontmatter schema
- `src/data/`: structured profile data such as bio and experience
- `src/components/`: shared page chrome and utilities
- `src/layouts/BlogPost.astro`: shared layout for blog posts and long-form pages
- `src/styles/global.css`: global tokens and base styles
- `public/`: static assets, fonts, robots, favicon, headers
- `scripts/sanitize-llms.mjs`: post-build cleanup for AI-facing text exports

## Editing Guidelines

- Keep the site personal and project-specific. Avoid generic portfolio copy.
- Preserve Roland's existing tone: direct, practical, senior-level, and specific to media tech, Apple platforms, SDK engineering, and AI workflows.
- Prefer updating structured data in `src/data/` when content belongs there instead of duplicating it across pages.
- Reuse existing components and layouts before introducing new ones.
- Keep routes simple. Do not add framework complexity or client-side JavaScript unless there is a clear need.
- Do not add compatibility layers, fallback code paths, or abstractions for hypothetical future use.
- Keep external links safe and consistent with the existing `rehype-external-links` setup.

## Content Conventions

Blog posts belong in `src/content/blog/` and should follow the schema in `src/content.config.ts`.

Expected frontmatter:

- `title`
- `description`
- `pubDate`
- `updatedDate` optional
- `heroImage` optional

When adding or editing content:

- Use accurate dates.
- Keep descriptions concise because they surface in listings and metadata.
- Prefer content that reads well both in the rendered page and in generated `llms.txt` outputs.

## Design And UI Notes

- Preserve the existing visual language unless a task explicitly asks for a redesign.
- The global styling uses a Seattle-inspired green/navy palette and Atkinson fonts from `public/fonts/`.
- Dark mode already exists through the theme components. New UI should work in both light and dark themes.
- Favor simple Astro-first pages over interactive widgets.

## Metadata And SEO

- Canonical metadata, RSS, Open Graph, Twitter metadata, and JSON-LD are centralized in `src/components/BaseHead.astro`.
- The production site URL is `https://rolandk.dev`; do not change this casually.
- Keep metadata aligned with the actual page content.

## Verification

For most changes, use this verification ladder:

1. Run `npm run astro -- check` for schema/type/content issues.
2. Run `npm run build` for production validation and `llms.txt` generation.
3. Use `npm run dev` only when a visual/manual check is needed.

If you change blog content, metadata, routing, or shared layout behavior, `npm run build` is the minimum meaningful check.

## Avoid

- Replacing Astro patterns with a heavier client-side approach
- Adding new dependencies without a clear need
- Inventing pages, routes, environment variables, or deployment details not present in the repo
- Leaving the README or AGENTS instructions inconsistent with the codebase
