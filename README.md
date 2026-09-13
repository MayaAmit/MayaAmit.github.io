# mayaamit.github.io

Personal website — Vite + React.

Live: https://mayaamit.github.io

## Getting started

Install Node (18+) via [nodejs.org](https://nodejs.org) or Homebrew (`brew install node`), then:

```sh
npm install
npm run dev
```

Opens at http://localhost:5173.

## Build

```sh
npm run build      # outputs to dist/
npm run preview    # serve dist/ locally to sanity-check
```

## Structure

- `src/App.jsx` — top-level composition.
- `src/components/` — Hero, Experience, Publications, Contact sections.
- `src/data.js` — experience and publications content (edit here).
- `src/index.css` — all styling.
- `public/headshot.png` — hero portrait.
- `old-site/` — the previous plain-HTML version, preserved for reference.

## Deploying to GitHub Pages

Since this is a user site (`mayaamit.github.io`), Pages serves the root of `main`.
The built `dist/` output needs to end up there. Not wired up yet — options are
GitHub Actions (`actions/deploy-pages`) or the `gh-pages` npm package pushing to
a separate branch. Ping Claude when you're ready to set this up.
