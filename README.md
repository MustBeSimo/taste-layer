# The Taste Layer

> Generation is commoditizing. Evaluation is scarce.

Two essays on quality infrastructure for AI, presented as a single site with three URLs.

| URL | What's there |
|---|---|
| `/` | Landing hero + both essays inline (deep-scroll, ~45 min) |
| `/taste-layer/` | Chapter I standalone — quality gates *inside* the enterprise |
| `/curation-stack/` | Chapter II standalone — quality infrastructure *across* a marketplace |

## Origin

This site merges and restyles two earlier essays:

- [`tasteinfra`](https://github.com/MustBeSimo/tasteinfra) — *The Taste Layer* (Jan 2026)
- [`curation-stack`](https://github.com/MustBeSimo/curation-stack) — *The Curation Stack* (Feb 2026)

Both essays are preserved in full — every section from the original sources — and re-typeset in a unified design language inherited from [AiVizWiz](https://github.com/MustBeSimo/AiVizWiz).

## Design

*Sumi on washi.* Japanese minimal foundation, refined for editorial reading.

- **Typography** — Instrument Serif (display) · Inter (sans) · Geist Mono (mono)
- **Palette** — pale terracotta `#c97b5a` · sage `#9caf9c` · light dirty blue `#6b8294` · warm washi `#f4efe6`
- **Motion** — `cubic-bezier(0.2, 0.7, 0.2, 1)` reveals, text-rise masks, staggered fades
- **Themes** — light / dark with no-flash injection, honors `prefers-color-scheme`
- **A11y** — `prefers-reduced-motion` respected, semantic landmarks, keyboard nav

## Local preview

No build step. The pages are static HTML.

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Structure

```
taste-layer/
├── index.html              ← landing (both essays inline)
├── taste-layer/index.html  ← essay I (Chapter I standalone)
├── curation-stack/index.html ← essay II (Chapter II standalone)
├── css/
│   ├── tokens.css          ← design tokens (color, type, motion, layout)
│   ├── layout.css          ← typography & layout components
│   └── motion.css          ← reveal-on-scroll vocabulary
├── js/
│   └── app.js              ← theme, reveals, progress, smooth scroll
├── .nojekyll               ← tell Pages to serve as-is
├── LICENSE
└── README.md
```

## Deploy to GitHub Pages

1. Push to `MustBeSimo/taste-layer` (`main` branch).
2. **Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`**.
3. Site lives at `https://mustbesimo.github.io/taste-layer/`.

## License

© 2026 Simone Leonelli · Studio W230. Code: MIT. Prose: CC BY 4.0.
