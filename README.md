# Spoke & Weal — Website Revamp

A static, send-ready proposed redesign of spokeandweal.com. Built to demonstrate the redesign vision identified in the audit deliverable.

## Quick Start

Open in any browser — no build step required:

```
open index.html
```

The site loads in under one second on a normal connection.

## What's Inside

```
spoke-weal-revamp/                                      27 MB · 16 files
├── README.md                                           This file
├── index.html                                          Landing page (the showpiece)
├── pages/
│   ├── about.html                                      Founder story · timeline · press
│   ├── services.html                                   Real Spoke & Weal menu with pricing
│   ├── stylists.html                                   28 real stylists, filterable directory
│   ├── portfolio.html                                  Editorial dark-theme gallery
│   ├── book.html                                       Multi-step inline booking flow
│   └── contact.html                                    Contact form + inquiry routing
├── locations/
│   ├── soho.html                                       NYC Soho · LocalBusiness JSON-LD
│   ├── flatiron.html                                   NYC Flatiron · LocalBusiness JSON-LD
│   └── san-francisco.html                              SF · LocalBusiness + GeoCoordinates
└── assets/
    ├── css/style.css                                   Single-file design system
    ├── js/main.js                                      Theme toggle, mobile drawer, reveal
    ├── images/logo.png                                 Real Spoke & Weal logo
    └── video/hero.mov                                  27 MB hero video (from spokeandweal.com)
```

## Features

- **Hero video** — autoplay, muted, loop, playsinline (works on iOS)
- **The 10 Rules** — dark cinematic editorial section with the brand's actual ten rules
- **Real content** — copy, pricing, and the 10 Rules are pulled directly from spokeandweal.com
- **Real stylists** — 28 actual artists with their real photographs (loaded from spokeandweal.com CDN)
- **Real salon photography** — interiors and editorial work served from spokeandweal.com
- **Light / dark mode toggle** — sun/moon icon next to Schedule, persists across visits via localStorage
- **Mobile hamburger menu** — full-screen drawer with social links, animates in/out
- **Inline booking flow** — multi-step shell at `/pages/book.html` (replaces the current third-party redirect)
- **Per-location SEO** — LocalBusiness JSON-LD schema on every location page
- **Footer** — brand logo, full sitemap, Instagram / Facebook / X social icons (linked to real accounts)

## Design System

- **Typography**: Fraunces (display serif) + Inter (sans-serif body), via Google Fonts CDN
- **Palette**: warm cream paper `#FAF7F2`, warm charcoal ink `#1A1815`, copper accent `#A8835A`
- **Dark mode**: paper inverts to warm charcoal `#1C1815`, ink inverts to cream
- **Layout**: mobile-first responsive, CSS Grid + Flexbox, fluid type via `clamp()`
- **Buttons**: fully rounded pills throughout
- **Interactivity**: native scroll behavior, IntersectionObserver reveal animations, sticky nav
- **Zero frameworks**: vanilla HTML / CSS / JS, no build step, no npm

## What This Solves From The Audit

| Audit issue | Solved here |
| --- | --- |
| 5–11s page load | Vanilla static site, native lazy-loading, single-file CSS, defer-loaded JS |
| 11 H1 tags on home | One H1 per page; strict heading hierarchy throughout |
| No meta descriptions | Per-page meta + Open Graph tags |
| No LocalBusiness schema | JSON-LD on every location page |
| No stylist profiles | Filterable directory with 28 real stylists |
| No portfolio | Dedicated dark-theme gallery section |
| Services collapsed into one menu | Per-service teasers, full menu with real prices |
| Booking is a button to elsewhere | Inline multi-step booking shell |
| No Open Graph tags | OG + Twitter Card on home and location pages |
| No editorial brand voice | Real Spoke & Weal copy + the 10 Rules featured prominently |

## Image Strategy

- **Local**: logo (`assets/images/logo.png`) and hero video (`assets/video/hero.mov`) ship in the folder
- **Live CDN**: all stylist portraits, salon interiors, and Instagram thumbnails load from `spokeandweal.com/wp-content/uploads/` — no copies, always current
- **Dependency**: the page needs internet on first load to fetch CDN images and Google Fonts. After that, the browser caches them.

When the brand provides their own asset library, swap by find-and-replace on the `https://www.spokeandweal.com/wp-content/uploads/` prefix.

## Sharing & Deploying

- **Email / cloud share**: zip the `spoke-weal-revamp` folder (~27 MB) and send.
- **Vercel / Netlify / Cloudflare Pages**: drag the folder into the deploy zone — live in 30 seconds with a shareable URL.
- **Any static host**: upload to web root.

No build step. No environment variables. No package manager.

## Browser Support

Chrome / Edge / Safari · last 3 versions; Firefox · last 3 versions; iOS Safari 14+; Chrome Android · last 3 versions.

Uses CSS Grid, custom properties, IntersectionObserver, modern font loading. Older browsers degrade gracefully — content remains readable.
