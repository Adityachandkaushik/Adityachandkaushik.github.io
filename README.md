# Aditya Kaushik — DevOps Portfolio

A production-grade DevOps engineer portfolio built with Next.js 15, TypeScript, Tailwind CSS,
Framer Motion, GSAP, and Radix/shadcn-style UI primitives. Every piece of content — experience,
dates, links, skills — is sourced from `lib/resume-data.ts`, transcribed directly from the
uploaded resume PDF.

## Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS 3** with a custom dark "production console" design system
- **Framer Motion** for scroll reveals and micro-interactions
- **GSAP** for the floating hero badges and the animated CI/CD pipeline dot
- **Radix UI primitives** (Accordion, Tabs) styled shadcn-style in `components/ui`
- **react-icons** for brand marks (AWS, Docker, Jenkins, GitHub, LinkedIn, etc.) since
  `lucide-react` no longer ships brand icons
- **@fontsource** self-hosted fonts (Space Grotesk, Inter, JetBrains Mono) — no external
  Google Fonts network calls at build/runtime

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/                     # App Router pages, layout, sitemap, icon
components/
  sections/              # One file per landing-page section (hero, about, experience, ...)
  ui/                     # Reusable shadcn-style primitives (button, card, badge, tabs, accordion)
  section-heading.tsx     # Shared eyebrow + title + description heading
  pipeline-diagram.tsx    # Reusable animated vertical pipeline (used by the featured project)
lib/
  resume-data.ts          # SINGLE SOURCE OF TRUTH for all resume content
  brand-icons.tsx         # Icon mapping for tool/brand logos
  utils.ts                # cn() className helper
public/
  resume/                 # Downloadable resume PDF (linked from Hero + Resume sections)
  robots.txt
```

## Editing content

Everything text-based (experience bullets, challenge write-ups, skills, contact links,
project descriptions) lives in **`lib/resume-data.ts`**. Change it there and every section
that references it updates automatically — no need to touch component files for content edits.

## Notes on projects section

Only **The Brilliant Bihar** is a verified employer production deployment per the resume.
The other project cards (Self Healing Infrastructure, Docker Production Setup, Jenkins Shared
Library, GoPass Backend) are labeled "Self-directed lab build" and describe smaller builds that
apply the same skill set — they are not presented as additional employer deployments.

## Deploying

This is a standard Next.js app — deploy to Vercel, or any Node host that supports
`next build && next start`. Update `metadataBase` in `app/layout.tsx` and the sitemap URL in
`app/sitemap.ts` to your real domain before going live.
