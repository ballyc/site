# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # eslint
```

No test suite.

## Architecture

Next.js 16 App Router site (React 19, TypeScript, Tailwind v4). Deployed on Vercel with `@vercel/analytics`.

**Routing:** Each page is a folder under `src/app/` with a `page.tsx`. Current routes:
- `/` — home (`src/app/page.tsx`)
- `/ITR-research-paper` — research abstract
- `/ai-game-theory` — essay page
- `/my-AI-engineering-stack` — stack writeup
- `/pomodoro` — embedded Claude artifact via iframe

**Styling:** All global styles live in `src/app/globals.css` — monospace (`Courier New`) font throughout, 720px max-width container, `#fffde7` html background with white body. The `h1`/`h2` tags render with literal `#`/`##` prefix text as a design choice. Class `.proj` bolds project names; `.note-date` mutes dates with `#888`.

Post/detail pages currently use inline styles (see `ITR-research-paper/page.tsx`) rather than CSS classes — the global CSS has a comment marking additions for post pages that can be extended instead.

**Adding a new page:** Create `src/app/<slug>/page.tsx`, link to it from `src/app/page.tsx`. Use `next/link` for internal navigation with a `← back` link.

## Process

after adding a new page, chloe will also need help updating the home page (`src/app/page.tsx`) accordingly, so that the audience can have a direct link to that page.

## additional

some existing pages are not linked to the main page: the essay page, the stack writeup, the pomodoro. leave as is.
