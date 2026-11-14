# Working rules for this repository

- **Every change gets a screenshot review on mobile and desktop before it is reported.**
  Take screenshots of the changed area at phone width (390×844, also 360×640 when layout is
  involved) and at desktop width (1440×900, plus a wide screen such as 2000×960 when layout is
  involved), look at them, and fix what the review finds before reporting. Also check there is no
  horizontal page scroll. Tell the owner what was checked.
- **Always merge directly**: commit on the working branch, push it, and fast-forward `main`
  (GitHub Pages serves `main`). No need to ask first.
- The site is Hebrew and right-to-left: galleries, sliders, progress bars and arrows follow
  Hebrew reading direction (start on the right, advance to the left).
- Brand: **Leeu Productions** (title case in text). The logo is **ליו הפקות** on the Hebrew site and
  **Leeu Productions** on the English site; the silhouette mark (sunset gradient, never black) sits to
  the right of the name in both.
- Two languages: Hebrew is the default at the root (`index.html`, RTL); English is `en/index.html`
  (LTR, mirrored directions). Every content or layout change goes into both, and the screenshot
  review covers both. The nav has an EN / עב switch.
- Type: Karantina for headings (poster style), Heebo for text, IBM Plex Mono for small labels.
- Hero: the silhouette with a film countdown (3-2-1) that plays once; the sweep then fills the mark in warm
  brown (rings, cross, centre dot stay) and a quiet film loop flows inside it: tone-on-tone 35mm strips
  drifting, a soft passing light, fine grain. No photo in the hero; smooth motion only, no jumps.
- Keep the existing copy; only light adaptations unless the owner asks otherwise.
- The site lives at the repository root: `index.html` (+ `en/index.html`), `assets/css/style.css`,
  `assets/js/main.js`, `assets/img/`. Images are WebP in two widths with `srcset`; keep that when
  adding images. `404.html` forwards old links (`/site/`, `/sketches/…`) and is bilingual. The earlier sketches
  are in `archive/sketches/`; they are `noindex`.
- `archive/logo-sketches/` holds the logo / hero / font sketches (noindex) with a frozen copy of the
  stylesheet (`archive/logo-sketches/style.css`), so changes to the main site do not alter them.
- Section order: hero, work, services, process, about, testimonial, clients, ticker, contact.
