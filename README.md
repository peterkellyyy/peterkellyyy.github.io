# Peter Kelly — Robotics Mechanical Engineering Portfolio

Static GitHub Pages site. No build step: serve the repo root over HTTP (e.g.
`python -m http.server`) or publish with GitHub Pages. Opening `index.html` via
`file://` mostly works, but the experience timeline needs the HTTP server.

## Structure

| Path | Purpose |
| --- | --- |
| `index.html` | Homepage: hero, portfolio grid, experience timeline, about, contact |
| `projects/*.html` | One thin shell page per project; content is rendered by JS from `data-project="<key>"` on `<body>` |
| `scripts/project-data.js` | **All project content** — case-study copy (`projectCatalog`), "More projects" cards, site-wide ordering (`projectOrder`), hidden-card set |
| `scripts/project-page.js` | Renderer that builds a project page from its `projectCatalog` entry |
| `scripts/portfolio-order.js` | Orders/hides homepage portfolio cards to match `projectOrder` |
| `scripts/timeline.js` | Renders the experience timeline from `data/timeline.csv` (fetched at runtime, so the timeline needs an HTTP server — it won't render from `file://`) |
| `scripts/page-transition.js` | Page fade transitions and smooth hash scrolling |
| `data/timeline.csv` | Timeline entries: jobs, patents, publications, degrees |
| `styles.css` | Single stylesheet; editorial-redesign layers are appended after the base styles |
| `assets/`, `icons/`, `logos/`, `videos/` | Images, icon set, company logos, hero video |

## Adding a project

1. Copy an existing page in `projects/`, update `<title>`, `<meta name="description">`, and `data-project="<key>"` on `<body>`.
2. Add a `projectCatalog` entry and a `moreProjectCards` entry for the key in `scripts/project-data.js`, and add the key to `projectOrder`.
3. Add a card for it in the `index.html` portfolio grid (`data-project-card="<key>"`).
4. Put its images under `assets/projects/<key>/`.

Cache note: GitHub Pages caches files for ~10 minutes. If a change to
`project-page.js` or `portfolio-order.js` must land together with HTML changes,
bump the `?v=` query on their `<script>` tags.
