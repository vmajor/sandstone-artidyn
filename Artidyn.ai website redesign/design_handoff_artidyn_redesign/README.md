# Handoff: Artidyn.ai Website Redesign ("Tech Clarity")

## Overview
Complete redesign of www.artidyn.ai for Artidyn Robotics — a reseller/certifier of robotic beverage machines (robot baristas). The redesign replaces the current Lexington Themes "Sandstone" template with a clean, spec-driven "Tech Clarity" system: single sans typeface + mono for numbers, visible top navigation, restrained brand-green accent, calm factual copy, and real product data surfaced everywhere.

Design goals it solves (vs. the current site): too many fonts → 2 typefaces; shouty copy ("uncapping your growth", "wild west") → calm, verifiable claims; hamburger-only nav → visible top nav with one persistent CTA; blog-like feel → product/equipment-company feel.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, not production code to copy directly. The task is to **recreate these designs in the target codebase** — an Astro 5 + Tailwind CSS 4 site (the existing repo is `sandstone-artidyn`, using `.astro` components, content collections in `src/content/`, and `@/styles/global.css` with Tailwind `@theme` tokens). Reuse the existing content collections (products, solutions, posts, team) as the data source; the designs were built from that exact data.

The `.dc.html` files use a small runtime (`support.js`) and open in a browser from this folder. Treat them as living specs: view them for exact layout, then implement with Astro/Tailwind idioms.

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final. Recreate pixel-perfectly using Tailwind utilities mapped to the tokens below.

## Site map / Files
| Page | File | Notes |
|---|---|---|
| Home | `Home B - Tech Clarity.dc.html` | Chosen direction (option B) |
| Robot catalog | `Robots.dc.html` | Filters + comparison table |
| Robot detail ×5 | `Robot - Iris.dc.html`, `Robot - Iris Pro.dc.html`, `Robot - Iris Max.dc.html`, `Robot - Argus Axis.dc.html`, `Robot - Argus Art.dc.html` | Same template, per-product data |
| Solutions | `Solutions.dc.html` | 4 environments, alternating layout |
| About / team | `About.dc.html` | |
| Contact | `Contact.dc.html` | Form with success state |
| Old home (reference) | `Current Home (as-is).dc.html` | Faithful recreation of the current live site, for before/after comparison only |
| Rejected direction (reference) | `Home A - Quiet Luxury.dc.html` | Not chosen; ignore for implementation |

Not covered by this redesign: individual blog article pages and legal pages — restyle those with the same tokens (white background, Inter, tokens below). "Insights" is a 3-card section on the home page, not a separate listing page.

## Design Tokens

### Colors
| Token | Value | Use |
|---|---|---|
| Ink | `#17201d` | Headings, body emphasis, dark section bg, primary dark button |
| Body text | `#3d4a45` | Paragraphs, nav links |
| Muted | `#6b7a74` | Secondary text, captions |
| Faint | `#8fa39b` | Footer meta, labels, breadcrumbs |
| Brand green | `#0b7a6a` | Accent ONLY: links, kickers, primary CTA bg, active nav, tags. Hover: `#096355` |
| Green tint | `#e9f4f1` | Tag/badge backgrounds |
| Green light (on dark) | `#5fbdaa` | Accent text on `#17201d` sections |
| Page bg | `#ffffff` | Default |
| Section bg alt | `#fafbfa` | Alternating sections, card image wells |
| Border | `#e6e9e7` | All 1px borders |
| Border faint | `#eef1ef` | Table row separators |
| Input border | `#ccd4d0` | Form fields, secondary button borders |
| Tag amber | text `#7a5a0b` / bg `#f6f0e2` | "Compact" category |
| Tag purple | text `#5b3d7a` / bg `#f0eaf6` | "Craft" category |
| Success tint | border `#d9e8e4` / bg `#f2f9f7` | "Choose this if" cards |

### Typography
- **Inter** (Google Fonts, 400/500/600/700) — everything.
- **JetBrains Mono** (400/500) — numbers, specs, prices, dates, step numerals ("01"), certification chips.
- H1: clamp(34–48px)/700/-0.03em (home hero: clamp(38–56px), line-height 1.08)
- H2 section: clamp(24–40px)/700/-0.02 to -0.025em
- H3 card: 16.5–19px/700
- Body: 14.5–17px/400, line-height 1.6–1.65
- Kicker: 13px/600, uppercase, letter-spacing 0.1em, brand green
- Small/meta: 12.5–13.5px

### Spacing & layout
- Max content width: 1240px, side padding 32px
- Section vertical padding: 96px (80px for secondary), page headers 72px top
- Card grid: 3 columns, gap 20px; two-column feature grids gap 48–64px
- Header: sticky, 68px tall, `rgba(255,255,255,0.94)` + backdrop-blur, bottom border

### Radii & shadows
- Buttons/inputs/chips: 8px · Cards: 12px · Large CTA panels: 16px · Tags: 5px · Avatars: full
- Shadows: essentially none; borders carry hierarchy. One exception: home hero video card `0 24px 48px -24px rgba(23,32,29,0.25)`

## Screens (key specifics)

### Home (`Home B - Tech Clarity.dc.html`)
- **Nav**: logo mark (green SVG) + "Artidyn Robotics" wordmark; links Robots / Solutions / Process (#process anchor) / About; green pill CTA "Get a recommendation".
- **Hero**: 2-col. Left: green badge "Certified beverage automation", H1 "Robotic baristas that earn their keep.", subcopy, dark button + outline button, stat strip (`< 12 mo` break-even, `70 cups/hr` peak, `24/7`) with mono numerals. Right: looping `hero.mp4` in 12px-radius card, floating status chip "● Argus Art — pouring, 61s elapsed" (mono, white glass background).
- **Certification bar**: thin row, mono chips CE / FCC / ISO 9001 / Artidyn Certified (last one green-bordered).
- **Robots**: 3 cards (Iris, Iris Pro, Iris Max default; tweakable to 6) — image well `#fafbfa`, category tag, name + mono price, 3-row mini spec table (Throughput / Serve time / Enclosure). Card border→green on hover. Links to detail pages.
- **Solutions tabs**: 4 pill tabs (Operators / Hotels / Airports & transit / Offices); active = dark fill. Panel: title, desc, 3 green-arrow bullets, image right. State: `envIndex`.
- **Process**: 3 bordered cards with mono step numbers 01–03.
- **Operator results**: dark `#17201d` section, 2 testimonial cards (border `rgba(255,255,255,0.12)`), each with avatar, name, and a green mono result chip ("2× revenue, Q1" / "70 cups/hr peak").
- **Insights**: 3 article cards (16:9 image, mono date, title).
- **CTA panel**: bordered 16px-radius panel "Get a recommendation for your site — even if it's 'wait.'"
- **Footer**: 4 columns (brand + Product / Company / Contact), bottom legal row.

### Robot catalog (`Robots.dc.html`)
- Header band on `#fafbfa` with filter pills (All / High volume / Compact / Craft) — state-driven filtering.
- 5 product cards (same card anatomy as home, plus Footprint row and "View details →").
- **Comparison table**: sticky-header-style table, 13 rows (Price, Throughput, Serve time, Recipes, Latte art, Enclosure, Espresso unit, Footprint, Dimensions, Weight, Power, Cup capacity, Payments) × 5 machines; labels sans, values mono; horizontal scroll under 900px.

### Robot detail (5 files, shared template)
- Breadcrumb "Robot catalog / {name}".
- Hero 2-col: product image in white bordered card; right: category tag, H1, one-line subtitle, paragraph, 3 hero stats (mono), buttons "Ask about {name}" (green) + "Compare models" (outline).
- "Built for…" — 3 highlight cards, per-product prose.
- Full specifications: two bordered cards, 8 label/value rows each (values mono, right-aligned). Footnote: "Figures verified during Artidyn certification testing, March 2026."
- Fit section: green-tinted "Choose {name} if" card + neutral "Consider another model if" card with cross-links to sibling models.
- CTA panel + footer.
- All spec values come from `src/content/products/*.md` frontmatter — keep them as the single source of truth.

### Solutions (`Solutions.dc.html`)
- 4 alternating image/text rows (01 Vending & kiosk operators, 02 Hotels & resorts, 03 Airports & transit, 04 Corporate offices), each: mono number, H2, paragraph, 3 green-arrow bullets, and a "Recommended: {robot}" chip (bordered pill with mono spec) linking to the detail page.

### About (`About.dc.html`)
- Header: "We test the machines so you don't have to." + honest two-person-firm positioning.
- "We vet / We test / We stay" — 3 numbered cards.
- Team: 2 cards (Sylvia Wu — Founder, Head of Strategy & Supply Chain; Viktor Major — Co-founder, Lead Applied Scientist) with 96px rounded-square photos, bios from `src/content/team/`, LinkedIn links.
- Locations row: Sheridan WY / Taipei / hi@artidyn.ai.

### Contact (`Contact.dc.html`)
- 2-col: left = pitch ("Tell us about your site."), 3 numbered expectations (reply in 1 business day, call with a founder, free recommendation), direct email; right = bordered form card: Name, Work email, environment `<select>` (5 options), "About the site" textarea, green submit "Request the call", microcopy "No newsletter, no drip campaign…".
- On submit: swap form for success state (✓, "Thanks — we've got it."). Wire to a real form backend in implementation.

## Interactions & Behavior
- Hovers: links → green; card borders → green; green buttons → `#096355`; dark buttons → black; outline buttons → dark border.
- Home solutions tabs and catalog filters: simple client-side state, instant swap (no animation).
- Product slider/marquee patterns from the OLD site are intentionally dropped.
- Videos: autoplay, muted, loop, playsInline.
- Anchors: `#process`, `#journal` (home), `#team` (about).
- Responsive: designed at desktop (~1240px). Collapse 3-col grids → 1 col, hero 2-col → stacked, nav → standard mobile menu (keep the CTA visible); comparison table scrolls horizontally.

## State Management
- Home: `envIndex` (0–3) for solutions tabs.
- Catalog: `filter` ("all" | "high-volume" | "compact" | "craft").
- Contact: `submitted` boolean.
- No other client state; everything else is static content from collections.

## Assets (in `assets/`)
- `mark-green.svg` — logo mark recolored to `#1c4632` (derived from the repo's BigLogo); nav uses it at 26px height
- `artidyn_corporate_green_logo.svg` — full wordmark (footer)
- `hero.mp4` — hero video (from repo `public/`)
- `products/*.png` — 5 product cover images (from repo)
- `solutions/1-3.png`, `blog/*.{png,jpeg}`, `team/1-2.png`, `testimonials/*.png` — all from the repo `src/assets/images/`
- All assets already exist in the `sandstone-artidyn` repo; reference them from there.

## Copy
All copy in the designs is final and intentional (calm, factual, no hype). Notable rewrites: hero H1 "Robotic baristas that earn their keep."; positioning "Automation should be a business decision, not a science experiment."; CTA "…even if that recommendation is to wait." Typo fix from old content: "producted" → "predicted" (testimonial), "ROI productions" → "ROI projections" (process).
