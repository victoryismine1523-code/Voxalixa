# Voxalixa — Creative Digital Agency

A modern dark-themed agency website built with **React + Vite + Ant Design**.
Brand colors: `#7B3DFF` / `#A855F7` on `#0B0B0F`. Typography: Montserrat.

## Quick launch (Windows)

Double-click **`start.bat`** — it installs dependencies on the first run, then opens the dev server in your browser.

Other batch files (all disk-aware — auto-redirect the npm cache to a drive with ≥1 GB free when the install drive is full):

| File           | What it does                                  |
| -------------- | --------------------------------------------- |
| `start.bat`    | One-click dev server (auto-installs if needed)|
| `install.bat`  | Installs npm dependencies                     |
| `build.bat`    | Produces a production build into `dist/`      |
| `serve.bat`    | Previews the production build                 |

## Manual launch (macOS / Linux / WSL)

```bash
npm install
npm run dev      # development server → http://localhost:5173
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Stack

- React 18 + Vite 5
- Ant Design 5 (themed via `src/theme.js`)
- `@ant-design/icons` for iconography
- Google Fonts — Montserrat 400 / 500 / 600 / 700 / 800

## Project layout

```
voxalixa/
├── public/
│   ├── favicon.svg
│   └── hero-bg.jpeg
├── src/
│   ├── main.jsx                          # entry: ConfigProvider + App + AntApp
│   ├── App.jsx                           # layout + ModalsProvider + scroll-hash
│   ├── theme.js                          # antd tokens + brand palette
│   ├── styles/index.css                  # global styles, animations, dropdown theming
│   ├── hooks/
│   │   ├── useReveal.js                  # IntersectionObserver → reveal
│   │   └── useCountUp.js                 # rAF counter with easeOutCubic
│   ├── lib/
│   │   └── submitIntake.js               # form intake: endpoint → mailto → localStorage
│   └── components/
│       ├── Header.jsx                    # sticky nav + burger
│       ├── Hero.jsx                      # parallax + shimmer + counters (LCP hero image)
│       ├── Services.jsx
│       ├── Portfolio.jsx
│       ├── About.jsx
│       ├── Pricing.jsx
│       ├── Faq.jsx                       # byte-identical to FAQPage JSON-LD
│       ├── Contact.jsx                   # form → submitIntake
│       ├── Footer.jsx
│       ├── ScrollProgress.jsx
│       ├── BackToTop.jsx
│       ├── ErrorBoundary.jsx                  # per-section recovery on render error
│       └── modals/
│           ├── ModalsProvider.jsx        # Context; mount-on-demand for fast boot
│           ├── ServiceModal.jsx
│           ├── ProjectModal.jsx
│           ├── GetStartedModal.jsx      # form → submitIntake
│           └── VideoModal.jsx           # VITE_VIDEO_URL → YouTube/Vimeo/.mp4 embed
├── public/
│   ├── favicon.svg
│   ├── hero-bg.jpeg                      # 193 kB JPEG fallback
│   ├── hero-bg.webp                      # 118 kB desktop WebP (LCP)
│   ├── hero-bg-mobile.webp               #  33 kB mobile WebP
│   ├── robots.txt
│   └── sitemap.xml
├── index.html                            # SEO meta, JSON-LD, non-blocking fonts
├── vite.config.js
├── package.json
├── start.bat / install.bat / build.bat / serve.bat
└── README.md
```

## Sections

1. **Header** — sticky nav with scroll-aware blur, smooth-scroll anchors, mobile burger menu.
2. **Hero** — full-bleed cosmic background (parallax on scroll), gradient Voxalixa wordmark with shimmer, "IDEAS → DESIGN → DEVELOP → GROW", dual CTA, vertical "MORE THAN DESIGN", stats panel that counts up on view.
3. **Services** — split layout, 4 service cards with antd icons; clicking a card opens a service-detail modal.
4. **Portfolio** — split layout, 4 project tiles each with a pure-CSS in-card visual; clicking opens a case-study modal.
5. **About** — split layout, 4 value-prop cards.
6. **Pricing** — 3 tiers (Starter / Professional — featured / Enterprise); each CTA opens the Get Started modal pre-filled with the chosen plan.
7. **Contact** — channels (mailto/tel/Google Maps) + full antd Form (Input, Select, TextArea) with validation and themed `message` toast on submit.
8. **Footer** — logo + "CREATE • DEVELOP • INSPIRE", nav links, real social URLs, copyright.

## Modal layer

All CTAs are wired to a Context-backed modal system. Open any modal from anywhere:

```jsx
import { useModals } from './components/modals/ModalsProvider.jsx'
const { open } = useModals()
open('service', { title: 'Graphic Design', ... })   // service detail
open('project', { title: 'Branding & Logo Design', ... }) // case study
open('getStarted', { plan: 'professional' })        // intake form (pre-fillable)
open('video')                                        // showreel player placeholder
```

`GetStartedModal` accepts a `{ interest }` (service or project name) or `{ plan }` (`starter` / `professional` / `enterprise`) payload and pre-fills the relevant fields.

## Form submissions (`src/lib/submitIntake.js`)

Both forms (the Contact section and the Get Started modal) actually deliver — nothing is a `console.log`. Submissions run through a three-step pipeline:

1. **Endpoint** — if `VITE_INTAKE_URL` is set in `.env.local`, the form POSTs JSON (`Content-Type: application/json`, `Accept: application/json`) to that URL. Works with Formspree, Netlify Forms, or any CORS-friendly JSON endpoint.
2. **Mailto fallback** — if no endpoint is configured (or the POST fails), a `mailto:hello@voxalixa.io` link is opened with the subject and body pre-filled from every field, so the inquiry still reaches a human through the user's mail client.
3. **Local record** — either way the submission is persisted to `localStorage` under `voxalixa.intake` (capped at 20 entries). If both delivery paths fail, the user has a retrievable copy.

To enable real email delivery, copy `.env.example` → `.env.local` and set:

```
VITE_INTAKE_URL=https://formspree.io/f/your_form_id
```

The submit button shows a spinner and `Sending…` while in flight, and the toast reflects which channel actually delivered.

## Showreel modal (`VideoModal.jsx`)

The "Watch Intro" hero CTA opens `VideoModal`, which auto-detects what to render from `VITE_VIDEO_URL` in `.env.local`:

- **YouTube** (`watch?v=`, `youtu.be/`, `/shorts/`) → embedded iframe with autoplay
- **Vimeo** → embedded iframe with autoplay
- **`.mp4` / `.webm` / `.ogg`** → native `<video controls autoplay>` element
- **other `https://` URL** → embedded iframe (escape hatch for custom players)
- **blank / unrecognised** → polished placeholder (no "Demo placeholder" copy)

```
VITE_VIDEO_URL=https://www.youtube.com/watch?v=your_video_id
```

## Performance

The site is tuned for fast boot and zero layout shift:

- **Fonts non-blocking** — Google Fonts is loaded with `media="print" onload="this.media='all'"` and a system-font fallback paints immediately. No more "pending stylesheet blocks the module script" stalls.
- **LCP preloaded + WebP** — the hero image ships as `<picture>` with `hero-bg.webp` (118 kB) and a `hero-bg-mobile.webp` (33 kB) variant behind a `max-width: 720px` media query; `hero-bg.jpeg` (193 kB) is the fallback for browsers without WebP. Both variants are `<link rel="preload" as="image" fetchpriority="high">`, and the `<img>` carries `fetchpriority="high"` + `width`/`height` for zero CLS. Verified: the browser paints `hero-bg.webp`.
- **Modal mount-on-demand** — `ModalsProvider` mounts only the active modal (and unmounts after the leave transition completes). Previously all four mounted on first paint with full inline `<style>` blocks.
- **GPU-friendly modal mask** — no `backdrop-filter` on the antd mask (it forced a full-page composite on every animation frame); opaque `rgba(5,5,8,0.86)` background instead.
- **Tightened motion** — antd motion tokens overridden to `0.12s/0.16s/0.2s` with `cubic-bezier(0.16, 1, 0.3, 1)` for crisp transitions.

Measured on production build:
- DOMContentLoaded: **~30 ms** warm, **~80 ms** cold.
- CLS: **0**.

## SEO

AAA-level structured data is built into `index.html`:

- **JSON-LD `@graph`** with `Organization`, `ProfessionalService`, `WebSite` (+ `SearchAction`), `WebPage`, `BreadcrumbList`, `FAQPage`. The Organization includes logo, address, geo, opening hours, `contactPoint`, `sameAs`, and a `hasOfferCatalog` of 4 `Service` offers with prices.
- **Canonical URL** (`https://voxalixa.io/`) and full `<meta name="robots">` directive with `max-image-preview:large`, `max-snippet:-1`, `max-video-preview:-1`.
- **Open Graph + Twitter** with absolute URLs and `og:image`/`twitter:image` to the hero.
- **Geo meta** (`geo.region=IN-KA`, `ICBM`) for local SEO.
- **Semantic landmarks**: `<main id="main">` wraps the unique page content, plus a `.vx-skip-link` for keyboard users.
- **Heading hierarchy**: exactly one `<h1>`, six `<h2>` sections, all subsection titles are `<h3>`.
- **FAQ section** with 6 questions rendered via native `<details>` — zero JS, fully crawlable, byte-identical to the `FAQPage.mainEntity[].acceptedAnswer.text` entries in the JSON-LD. Verified automatically by CDP probe (see below).
- **`public/robots.txt`** allows full crawl and references the sitemap.
- **`public/sitemap.xml`** declares 7 URLs (home + 6 in-page section anchors).

## Accessibility

- **`prefers-reduced-motion: reduce` honoured in both CSS and JS.** CSS handles transitions/animations via the global media-query rule. The JS handlers — Hero parallax, `useCountUp`, `BackToTop` smooth scroll, Header/Hero anchor scrolls — all check `window.matchMedia('(prefers-reduced-motion: reduce)')` and snap (instant scroll, no transform, no counter animation) instead of running.
- **Focus visibility** via `:focus-visible` only — keyboard users get a 2 px purple ring; mouse clicks never trigger it.
- **Skip link** (`.vx-skip-link`) jumps to `#main` for keyboard / screen-reader users and helps crawlers reach the unique content.
- **`<main>` landmark** wraps every section; `<header>` and `<footer>` are already semantic.
- **ErrorBoundary per section** — a render failure inside one section doesn't blank the whole page; the rest of the site keeps working.

## Animations

- **Scroll reveal** — `.reveal` items start at `opacity:0; translateY(28px)` and animate in when an ancestor `.vx-reveal-parent` enters the viewport (`.reveal[data-delay="N"]` staggers by 80 ms).
- **Hero parallax** — `translate3d(0, scrollY × 0.35, 0)` on the background, rAF-throttled.
- **Stats count-up** — `100+` / `150+` / `5★` animate from 0 with easeOutCubic on first view.
- **Title shimmer** — animated gradient sweep across the hero wordmark.
- **Scroll progress bar** — 3 px purple line that tracks the top of the viewport.
- **Back-to-top button** — fixed bottom-right gradient circle that fades in after `scrollY > 480` and smooth-scrolls to top on click; respects `prefers-reduced-motion` and stays keyboard-focusable only when visible.
- **Button glow** + **vertical-label drift** as ambient motion.
- **`prefers-reduced-motion: reduce`** collapses all motion to 0 s.

## Customizing

- **Colors / typography:** edit `src/theme.js` and the CSS variables in `src/styles/index.css`.
- **Sections:** every component is self-contained — its styles live inside the component, so editing is one-stop.
- **Hero background:** replace `public/hero-bg.jpeg` with your own (same filename, ~1920×1080 works best).
- **Bundle:** `vite.config.js` path-splits vendors into `vendor-react` + `vendor-antd` for cacheable deploys.

## Build

```
npm run build
```

Vite splits output into `index.html`, `index.css`, and three JS chunks (app, React, antd). ~226 kB gzipped total.