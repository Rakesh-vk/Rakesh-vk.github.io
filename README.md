# Rakesh Kuratti — Portfolio

A single-page portfolio site built with plain HTML, CSS, and JS (no build step, no framework) — ready to host on GitHub Pages.

## Structure

```
index.html              main page
css/style.css            all styling
js/script.js              small nav/footer script
assets/rakesh.jpg           headshot (used in the contact section)
assets/diagram-ecommerce.svg   architecture diagram for the featured project
```

## Deploy on GitHub Pages

**Option A — new repo dedicated to the site (recommended)**

1. Create a new repository named exactly `Rakesh-vk.github.io` (must match your GitHub username).
2. Push these files to the `main` branch, at the repo root:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/Rakesh-vk/Rakesh-vk.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, and under **Build and deployment → Source**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. Your site goes live at `https://rakesh-vk.github.io` within a minute or two.

**Option B — as a project page inside an existing repo**

1. Push these files to a repo, e.g. `portfolio`, on the `main` branch.
2. **Settings → Pages → Source**: branch `main`, folder `/ (root)`.
3. Site is live at `https://rakesh-vk.github.io/portfolio`.

Either way, no build step is required — GitHub Pages serves the static files as-is.

## Editing content later

- Text content (experience bullets, skills, contact links) all lives directly in `index.html` — search for the relevant section (`id="work"`, `id="project"`, `id="skills"`, `id="contact"`).
- The architecture diagram is a hand-built SVG at `assets/diagram-ecommerce.svg` — open it in any code editor or in a browser to inspect/edit the boxes and arrows directly (it's plain markup, no external tool needed).
- Colors, fonts, and spacing are all defined as CSS variables at the top of `css/style.css` under `:root`.

## Notes

- The design intentionally follows apple.com's visual language: a dark hero, a spec-sheet stat bar, generous whitespace, and a single system-font stack (`-apple-system`) so it renders as native San Francisco on Mac/iOS and a close equivalent elsewhere.
- Everything is static — there's no backend, analytics, or tracking wired in.
