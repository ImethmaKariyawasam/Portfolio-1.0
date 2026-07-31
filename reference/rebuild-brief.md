# Portfolio rebuild brief — Imethma Kariyawasam

Hand this file to Claude Code together with `imethma-portfolio-v48.html`.
The HTML is the **design reference and source of truth**. This document explains how to turn it
into a maintainable site without redesigning it.

---

## 1. What this is

A single-page personal portfolio for a final-year software engineering undergraduate applying for
graduate and junior engineering roles. It currently exists as one hand-written HTML file with
inline CSS and vanilla JS. It works. The goal of the rebuild is maintainability, not new features:
content should live in data files, the visual system should live in tokens, and adding a project
should be a one-line change rather than an HTML edit.

**Do not redesign it.** Every layout, colour and spacing decision in the reference file was made
deliberately and iterated on many times. Port them exactly. If something looks like a mistake,
raise it rather than silently fixing it.

---

## 2. Stack

**Use Astro + TypeScript + Tailwind CSS, deployed on Vercel or Netlify.**

Reasoning, since you may be asked to justify it:

- The page is 95% static content. Astro ships **zero JavaScript by default** and lets you opt in
  per component, which suits a site whose only interactivity is a theme toggle, a scroll reveal,
  a cursor and a drag-scroll strip.
- She wants to start writing on Medium. Astro's content collections make adding a local blog later
  a small change rather than a rewrite, with type-safe frontmatter.
- Lighthouse scores near 100 out of the box matter here: this page is a hiring artefact, and a
  recruiter who opens dev tools should find something clean.

**If she would rather have Next.js**, that is a defensible choice for a different reason: React and
Next are what job listings ask for, so the repo itself becomes a work sample. Use the App Router,
TypeScript, and `next/image`. Do not use Next purely out of habit — decide with her, and note that
the extra client-side runtime buys nothing this page needs.

Do not use a UI component library. The design is bespoke; Material or shadcn would fight it.

---

## 3. Design tokens — port these values exactly

Define once as CSS custom properties on `:root`, then expose to Tailwind via `theme.extend` so
utility classes and raw CSS agree. Do not convert to Tailwind's default scales — they do not match.

### Spacing (8px base)
```
--s1: 8px   --s2: 16px   --s3: 24px   --s4: 40px   --s5: 64px   --s6: 96px
```

### Type scale
```
--t-name: 40px   --t-head: 26px   --t-lead: 21px   --t-sub: 17px
--t-body: 16px   --t-small: 14px  --t-mono: 11px
```

### Layout
```
--gutter: 116px    (the label column that runs down the whole page)
--radius: 22px
max content width: 940px
```

### Colour — three themes

`paper` (default), `white`, `blueprint`. Selected by `data-theme` on `<html>`.
Copy all custom properties verbatim from the reference file's `:root`,
`[data-theme="white"]` and `[data-theme="blueprint"]` blocks. Key ones:

| Token | paper | white | blueprint |
|---|---|---|---|
| `--paper` | `#F7F7F2` | `#FFFFFF` | `#0A1420` |
| `--ink` | `#15181C` | `#101317` | `#E1EBF6` |
| `--muted` | `#767D84` | `#6E757C` | `#7B8FA6` |
| `--accent` | `#34558F` | `#2C4F8A` | `#86C4F0` |
| `--pink` | `#B0688F` | `#A85F87` | `#E3A6C9` |

**The two-colour rule is load-bearing.** `--accent` is used *only* on interactive things: links,
the cursor, arrows, tile hover. `--pink` is used *only* in four decorative places: section labels
in the gutter, project numbers, card borders on hover, and the status dot and paw prints. Do not
mix them. Do not introduce a third colour.

### Fonts
`Instrument Sans` (400, 500) for everything, `JetBrains Mono` (400, 500) for labels, dates and
tags. Self-host with `@fontsource` or Astro's font handling rather than a Google Fonts `<link>` —
it removes a third-party request and a layout shift.

### Breakpoints
`1120px` (narrow the margin rulers), `820px` (collapse the gutter, stack cards, hide rulers),
`430px` (phone refinements). Keep these exact numbers.

---

## 4. Content model

Put **all** copy in typed data files, e.g. `src/data/`. Nothing user-visible should be hard-coded
in a component. Suggested shape:

```ts
// src/data/site.ts
export const site = {
  name: "Imethma Kariyawasam",
  role: "Backend · Cloud · Applied AI",
  location: { label: "Sri Lanka", timezone: "Asia/Colombo" },
  status: "Open to work",
  photo: "/images/imethma.jpg",
  links: {
    email: "imethmak@gmail.com",
    github: "https://github.com/ImethmaKariyawasam",
    linkedin: "https://linkedin.com/in/ImethmaKariyawasam",
    art: "",      // to be filled in
    medium: "",   // to be filled in
    cv: "/imethma-kariyawasam-cv.pdf",
  },
};
```

```ts
// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  kind: string;          // shown under the title in mono
  dates: string;         // display string, e.g. "Jun 2025 – 2026"
  summary: string;       // one line
  body?: string;         // paragraph
  bullets?: string[];    // used by INTELLEA and Cambio
  tags: string[];
  href?: string;
  hrefLabel?: string;    // "Read the paper", "View details"
  logo?: string;         // image path; falls back to `monogram`
  monogram: string;      // "IN", "FF", "CB"
}
```

Same treatment for `experience`, `education`, `community`, `competitions`, `publication`,
`skills` (a flat string array) and `photos` (the volunteering strip).

Anything with a link that is not yet known should be an empty string, and the component should
**render nothing rather than a dead `#` link**. Several placeholders exist today; make them
disappear cleanly instead of shipping broken links.

---

## 5. Components

Keep this list small. The page deliberately reuses one card everywhere.

- `Layout.astro` — html shell, theme script, fonts, SEO, the fixed background layers
- `Background.astro` — glow, grid, left/right rulers, grain (all `position: fixed`, `aria-hidden`)
- `TopBar.astro` — status pill, social icons, theme toggle
- `Hero.astro` — name, role pill, live clock, paw trail, portrait
- `Section.astro` — the gutter label + heading + optional sub-line wrapper; every block uses it
- `Card.astro` — tile/logo, title, date, subtitle, body, bullets, tags, link.
  Variants via props: `plain` (no tile), `quiet` (transparent, no lift)
- `Panel.astro` — the outlined transparent container used by community and competitions
- `PhotoStrip.astro` — drag-scroll, counter, prev/next
- `ContactGrid.astro` — the 2×2 link cards
- `Paws.astro` — takes a `direction` prop: `"east"` for the hero, `"northeast"` for the footer

---

## 6. Behaviour to preserve

| Feature | Requirement |
|---|---|
| Theme toggle | Cycles paper → white → blueprint. **Add `localStorage` persistence and an inline no-flash script in `<head>`** — the current version forgets on reload, which is a real bug worth fixing. |
| Local clock | `Asia/Colombo`, `en-GB`, `HH:MM`, updates every 10s. Render a placeholder server-side to avoid hydration mismatch. |
| Scroll reveal | `IntersectionObserver`, `rootMargin: '0px 0px -12% 0px'`, unobserve after firing. |
| Custom cursor | Dot tracks exactly, ring lerps at `0.16`, swells over `a, button, .card, .cloud span, .shot`. Desktop only: `(hover: hover) and (pointer: fine)`. |
| Photo strip | Horizontal scroll, pointer-drag, prev/next buttons, live `01 / 10` counter derived from the actual item count. |
| Paws | Three prints, staggered `0.34s`, 3.4s loop, alternating tilt and vertical offset. |
| Reduced motion | `prefers-reduced-motion: reduce` disables all animation, restores the native cursor, and shows revealed content immediately. This already works — do not regress it. |

---

## 7. Requirements to meet

**Accessibility**
- Visible focus rings everywhere (`:focus-visible`, 2px accent, 3px offset)
- All decorative layers `aria-hidden="true"`
- Real `alt` text on the portrait and volunteering photos
- Strip arrows and icon links have `aria-label`s
- Colour contrast: check `--muted` on `--paper` in all three themes, and fix by darkening the token
  if any fall under 4.5:1

**Performance**
- Optimised, responsive images with width/height set (no layout shift)
- Volunteering photos lazy-loaded; portrait eager
- No client JS for anything that does not need it

**SEO and sharing**
- Title, description, canonical URL
- Open Graph and Twitter card with a generated OG image
- `JobTitle`/`Person` JSON-LD — worth it on a portfolio a recruiter may find via search
- `sitemap.xml`, `robots.txt`

---

## 8. Assets she still needs to supply

Track these as TODOs; do not invent substitutes.

- Portrait photo → `/images/imethma.jpg`
- Ten volunteering photos, cropped 4:3 → `/images/volunteering/`
- Real logos for the monogram tiles: SLIIT, IEEE, Cambio, and project screenshots
- CV as PDF
- Art channel URL and Medium profile URL
- Exact Cambio end month (currently "Jul 2024 – 2026")

---

## 9. How to work through this

Do it in order, commit at each step, and confirm the page still matches the reference before moving on.

1. Scaffold the project, install fonts, port the token system. Nothing else.
2. Build `Layout` and `Background`. Verify all three themes look identical to the reference.
3. Build `Section` and `Card`. Port one section only — Projects — and compare side by side.
4. Port the remaining sections, all reading from data files.
5. Add the interactive pieces one at a time: theme persistence, clock, reveal, strip, cursor, paws.
6. Accessibility and Lighthouse pass. Fix contrast, alt text, focus order.
7. SEO, OG image, deploy.

**Verify visually, not just structurally.** Open the reference HTML and the built site side by side
at 1440px, 820px and 390px. Differences in spacing or type size are bugs, not improvements.

---

## 10. Done when

- [ ] Renders identically to `imethma-portfolio-v48.html` at all three breakpoints
- [ ] All three themes work and persist across reloads with no flash
- [ ] Every piece of copy comes from a data file
- [ ] Adding a project means adding one object to an array
- [ ] No dead `#` links anywhere
- [ ] `prefers-reduced-motion` fully respected
- [ ] Lighthouse: 95+ across performance, accessibility, best practices, SEO
- [ ] Deploys clean, custom domain configured

---

## Opening prompt

> I'm rebuilding my portfolio. I've attached two files: `CLAUDE-CODE-BRIEF.md` and
> `imethma-portfolio-v48.html`.
>
> Read both fully before writing any code. The HTML is a working design I've iterated on a lot —
> treat it as the source of truth for every visual decision, and port it rather than reinterpreting
> it. The brief explains the stack, the token system, the content model and the order to work in.
>
> Start with step 1 only: scaffold the Astro project, self-host the two fonts, and port the token
> system into CSS custom properties wired to Tailwind. Do not build any components yet. When it's
> done, show me the token file and tell me what you'd do next.
>
> Two rules throughout: don't add libraries without asking, and if something in the reference looks
> wrong to you, tell me instead of fixing it silently.
