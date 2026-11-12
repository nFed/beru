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
- Brand: **Leeu Productions** (title case in the logo and in text). The silhouette mark sits to the
  right of the name.
- Keep the existing copy; only light adaptations unless the owner asks otherwise.
- The site lives at the repository root: `index.html`, `assets/css/style.css`,
  `assets/js/main.js`, `assets/img/`. Images are WebP in two widths with `srcset`; keep that when
  adding images. `404.html` forwards old links (`/site/`, `/sketches/…`). The previous site is in
  `archive/old-site/` and the earlier sketches in `archive/sketches/`; both are `noindex`.
