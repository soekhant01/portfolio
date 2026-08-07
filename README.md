# Soe Khant — Portfolio

React + Tailwind CSS portfolio site, migrated from the original single-file HTML/CSS/JS version.

## Stack

- **React 19** with Vite
- **Tailwind CSS v4** with custom theme tokens matching the original design
- Component-based architecture for easy updates

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (output in `dist/`) |
| `npm run preview` | Preview production build locally |

## Project structure

```
src/
  components/   # Header, Hero, About, Skills, Projects, Contact, Footer
  data/         # Content (skills, projects, links)
  hooks/        # Shared hooks (smooth scroll)
public/         # Static assets (resume PDF)
```

## Project detail pages

Each project has its own page at `/projects/:id` (e.g. `/projects/fitpulse`).

Edit **`src/data/projects.js`** to update project content. When you have your real info, fill in:

| Field | Purpose |
|-------|---------|
| `summary` | Longer overview on the detail page |
| `highlights` | Bullet list of key accomplishments |
| `features` | Feature cards with title + description |
| `techStack` | Full technology list |
| `links.github` / `links.demo` / `links.store` | External links (set to `null` until ready) |
| `screenshots` | Array of image paths, e.g. `['/projects/fitpulse/screen-1.png']` |

Place screenshot images in `public/projects/<project-id>/`. Empty `screenshots` shows placeholder slots.

## Deploy

Run `npm run build` and deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, etc.).
For client-side routing, configure your host to serve `index.html` for all routes (SPA fallback).
The original HTML version is preserved as `index.legacy.html` for reference.
