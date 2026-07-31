# Imethma Kariyawasam — Portfolio

Personal portfolio site. Built with Astro, TypeScript, and Tailwind v4.

## Structure

```
src/
├── data/         # All copy and content — projects, experience, education, etc.
├── components/   # Background, Card, Panel, Section, PhotoStrip, ContactGrid, Paws, TopBar, Hero
├── layouts/      # Layout.astro — page shell, theme script, SEO
└── pages/        # index.astro — assembles everything
```

Adding a project, a role, or an award means editing the relevant file in `src/data/` —
no HTML changes needed.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the production build locally          |

## Still outstanding

- [x] Portrait photo → `public/images/imethma.jpg`
- [x] Volunteering photos (4:3) → `public/images/volunteering/`
- [ ] CV as PDF, linked from `src/data/site.ts`
- [ ] Art channel and Medium profile URLs, in `src/data/site.ts`
- [ ] Confirm exact Cambio end month in `src/data/experience.ts`
- [ ] Deploy to Vercel and update the `site` URL in `astro.config.mjs`

## Theme system

Two themes — `paper` (default) and `blueprint` — toggled by the button in the top
bar, persisted to `localStorage`, and applied before first paint via an inline
script in `Layout.astro` (no flash of the wrong theme on reload). (The reference
design also had a `white` theme; dropped from the toggle cycle by request — its
tokens are still defined in `global.css` if it's ever wanted back.)
