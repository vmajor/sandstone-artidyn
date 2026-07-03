// ===========================================================================
// Tech Clarity redesign — robot display data
//
// Spec *values* live in src/content/products/*.md frontmatter (single source of
// truth). This module holds the display copy (short names, tiers, blurbs, hero
// prose, highlights, fit guidance) and the formatters that turn raw frontmatter
// into the calm, mono-numeral strings the design calls for.
// ===========================================================================

export type Tier = "High volume" | "Compact" | "Craft";
export type TagKey = "green" | "amber" | "purple";

export interface HeroStat {
  value: string;
  label: string;
}

export interface Highlight {
  title: string;
  body: string;
}

export interface RobotContent {
  name: string;
  tier: Tier;
  tag: TagKey;
  /** Card blurb ("use") */
  blurb: string;
  /** Detail hero one-line subtitle */
  subtitle: string;
  /** Detail hero paragraph */
  heroPara: string;
  /** Detail hero stats (3, mono) */
  heroStats: HeroStat[];
  builtForTitle: string;
  highlights: Highlight[];
  chooseTitle: string;
  choosePoints: string[];
  /** "Consider another model if" — HTML (contains cross-links) */
  considerPoints: string[];
  specFootnote: string;
  // Curated short forms for the comparison table / cards
  tableRecipes: string;
  tableLatteArt: string;
  tableEnclosure: string;
  tableEspresso: string;
  tablePayments: string;
}

/** Catalog order (Iris family first, then Argus craft line) */
export const ROBOT_ORDER = [
  "iris",
  "iris-pro",
  "iris-max",
  "argus-axis",
  "argus-art",
] as const;

export type RobotSlug = (typeof ROBOT_ORDER)[number];

export const TAG_STYLES: Record<TagKey, { color: string; bg: string }> = {
  green: { color: "#0b7a6a", bg: "#e9f4f1" },
  amber: { color: "#7a5a0b", bg: "#f6f0e2" },
  purple: { color: "#5b3d7a", bg: "#f0eaf6" },
};

const DEFAULT_FOOTNOTE =
  "Figures verified during Artidyn certification testing, March 2026.";
const CERTIFIED_FOOTNOTE =
  "Figures verified during Artidyn certification testing, March 2026. Certified CE · FCC · ISO 9001.";

const P = (slug: RobotSlug) => `/products/${slug}/`;
const link = (slug: RobotSlug, label: string) =>
  `<a href="${P(slug)}" class="text-brand font-semibold hover:text-brand-hover">${label}</a>`;
const catalogLink = (label: string) =>
  `<a href="/products/" class="text-brand font-semibold hover:text-brand-hover">${label}</a>`;

export const ROBOT_CONTENT: Record<RobotSlug, RobotContent> = {
  iris: {
    name: "Iris",
    tier: "High volume",
    tag: "green",
    blurb:
      "The workhorse for terminals and transit hubs. 32 recipes, fully enclosed.",
    subtitle: "High-speed cafe robot for airport terminals and transit hubs",
    heroPara:
      "A fully enclosed kiosk built for relentless throughput: a Dobot collaborative arm and a commercial Dr. Coffee M12 espresso unit, producing a finished beverage every 51 seconds.",
    heroStats: [
      { value: "70 cups/hr", label: "verified throughput" },
      { value: "51 s", label: "per beverage" },
      { value: "$27,000", label: "list price" },
    ],
    builtForTitle: "Built for high-stress environments",
    highlights: [
      {
        title: "Rush-hour throughput",
        body: "Rapid-movement Dobot arm and 32 recipe presets keep the line moving — 70 cups an hour at peak, without quality drift.",
      },
      {
        title: "Rugged enclosure",
        body: "Two meters tall, 750 kg, sheet-metal enclosed. Protects the machinery in public spaces and holds 150 cups of consumables.",
      },
      {
        title: "Runs itself",
        body: "Automated pipe cleaning, remote fleet management, and mobile/QR payments — designed for unattended 24/7 operation.",
      },
    ],
    chooseTitle: "Choose Iris if",
    choosePoints: [
      "Peak-hour demand is your constraint — terminals, campuses, transit hubs",
      "The machine will operate unattended in a public space",
      "You want the widest drink menu in the range (32 presets, 6 syrups)",
    ],
    considerPoints: [
      `Width is tight — ${link("iris-pro", "Iris Pro")} fits alcoves 20 cm narrower`,
      `Guests should watch the pour — the ${catalogLink("Argus")} open-bar line is the show`,
      `You need latte art or foam printing — see ${link("iris-max", "Iris Max")} or ${link("argus-art", "Argus Art")}`,
    ],
    specFootnote: DEFAULT_FOOTNOTE,
    tableRecipes: "32 presets",
    tableLatteArt: "No",
    tableEnclosure: "Enclosed kiosk",
    tableEspresso: "Dr. Coffee M12",
    tablePayments: "Mobile/QR",
  },
  "iris-pro": {
    name: "Iris Pro",
    tier: "Compact",
    tag: "amber",
    blurb:
      "Full-service coffee in a narrow footprint — offices, institutions, hospitals.",
    subtitle: "Compact robot barista for offices, institutions, and narrow alcoves",
    heroPara:
      "The narrowest machine in the range — 20 cm slimmer than Iris — without giving up speed. A Dobot collaborative arm and BTB-302 espresso unit deliver full-service coffee with superior milk foam every 51 seconds.",
    heroStats: [
      { value: "70 cups/hr", label: "verified throughput" },
      { value: "1.89 m²", label: "footprint" },
      { value: "$29,500", label: "list price" },
    ],
    builtForTitle: "Built for tight spaces",
    highlights: [
      {
        title: "Fits where others don't",
        body: "At 1300 mm wide, it slots into narrow architectural alcoves, institutional hallways, and hospital corridors other kiosks can't reach.",
      },
      {
        title: "No speed penalty",
        body: "Matches the full-size Iris at 70 cups per hour and 51 seconds per beverage, with 24 recipe presets and 4 syrup flavors.",
      },
      {
        title: "Better milk",
        body: "A large undercounter refrigerator and superior milk-foam system produce cafe-grade lattes and flat whites unattended.",
      },
    ],
    chooseTitle: "Choose Iris Pro if",
    choosePoints: [
      "Width is the constraint — alcoves, hallways, hospital corridors",
      "Milk-based drinks matter — it has the best foam system in the range",
      "You still need full-size speed: 70 cups/hr, 51 s per drink",
    ],
    considerPoints: [
      `Space isn't tight — ${link("iris", "Iris")} costs $2,500 less with 32 recipes`,
      `You want foam printing — see ${link("iris-max", "Iris Max")}`,
      `Guests should watch the pour — the ${link("argus-axis", "Argus")} open-bar line is the show`,
    ],
    specFootnote: DEFAULT_FOOTNOTE,
    tableRecipes: "24 presets",
    tableLatteArt: "No",
    tableEnclosure: "Enclosed kiosk",
    tableEspresso: "BTB-302",
    tablePayments: "Mobile/QR",
  },
  "iris-max": {
    name: "Iris Max",
    tier: "High volume",
    tag: "green",
    blurb:
      "Maximum internal capacity plus foam printing for 24/7 secure environments.",
    subtitle: "Robotic coffee station for 24/7 secure environments and smart retail",
    heroPara:
      "The Iris platform with maximum internal capacity plus interactive vending features — including custom foam printing on every cup — for high-traffic kiosks that run around the clock.",
    heroStats: [
      { value: "50 cups/hr", label: "verified throughput" },
      { value: "72 s", label: "per beverage" },
      { value: "$31,500", label: "list price" },
    ],
    builtForTitle: "Built to run unattended",
    highlights: [
      {
        title: "Foam printing",
        body: "Prints custom images onto the milk foam — logos, messages, promotions — turning every cup into a branded moment.",
      },
      {
        title: "Maximum capacity",
        body: "The largest consumable storage on the Iris platform, with a large undercounter refrigerator — fewer restocking visits per week.",
      },
      {
        title: "Secure by design",
        body: "Fully enclosed kiosk rated for 24/7 secure environments, with automated pipe cleaning and remote fleet management.",
      },
    ],
    chooseTitle: "Choose Iris Max if",
    choosePoints: [
      "The site runs 24/7 with infrequent restocking — capacity is king",
      "Branded foam printing adds value — retail, promotions, events",
      "Steady traffic matters more than peak bursts",
    ],
    considerPoints: [
      `Rush-hour speed is the constraint — ${link("iris", "Iris")} is 40% faster per cup`,
      `Width is tight — ${link("iris-pro", "Iris Pro")} is 20 cm narrower`,
      `You want real poured latte art — see ${link("argus-art", "Argus Art")}`,
    ],
    specFootnote: DEFAULT_FOOTNOTE,
    tableRecipes: "24 presets",
    tableLatteArt: "Image printing",
    tableEnclosure: "Enclosed kiosk",
    tableEspresso: "BTB-302",
    tablePayments: "Mobile/QR",
  },
  "argus-axis": {
    name: "Argus Axis",
    tier: "Craft",
    tag: "purple",
    blurb:
      "Open-bar barista for lobbies and concourses where the pour is the show.",
    subtitle: "Open-bar automated barista for lobbies, concourses, and corporate HQs",
    heroPara:
      "A low-profile open bar where a 6-axis arm works in full view — the pour is the show. Dr. Coffee F3 espresso unit, cocoa toppings, and the widest payment support in the range, including cash and coin.",
    heroStats: [
      { value: "40 cups/hr", label: "verified throughput" },
      { value: "90 s", label: "per beverage" },
      { value: "$27,000", label: "list price" },
    ],
    builtForTitle: "Built to be watched",
    highlights: [
      {
        title: "Open-bar theater",
        body: "A low-profile bar instead of a closed box: guests watch the 6-axis arm pull shots and pour. It draws a crowd in lobbies and concourses.",
      },
      {
        title: "Takes every payment",
        body: "Mobile/QR, credit card, cash, and coin — plus a 21.5-inch touchscreen, the largest display in the range.",
      },
      {
        title: "Richer menu",
        body: "Up to 20 recipe presets with syrup, caramel, and coconut milk flavors, plus cocoa toppings — a menu closer to a staffed cafe.",
      },
    ],
    chooseTitle: "Choose Argus Axis if",
    choosePoints: [
      "The machine is part of the guest experience — lobbies, malls, HQs",
      "You need cash and coin payments, not just mobile",
      "Menu breadth matters more than raw speed",
    ],
    considerPoints: [
      `Throughput is the constraint — ${link("iris", "Iris")} serves 75% more cups per hour`,
      `It runs unattended in public — the enclosed ${link("iris", "Iris line")} is protected`,
      `You want poured latte art — ${link("argus-art", "Argus Art")} adds it for $15,000 more`,
    ],
    specFootnote: CERTIFIED_FOOTNOTE,
    tableRecipes: "10–20 presets",
    tableLatteArt: "No",
    tableEnclosure: "Open bar",
    tableEspresso: "Dr. Coffee F3",
    tablePayments: "QR · Card · Cash",
  },
  "argus-art": {
    name: "Argus Art",
    tier: "Craft",
    tag: "purple",
    blurb:
      "Poured latte art and photo printing for flagship retail and events.",
    subtitle: "Latte art robot for flagship retail, specialty cafes, and upscale events",
    heroPara:
      "The flagship craft machine: a 6-axis cobot arm that pours real latte art — 4–6 physical pour patterns — and prints custom images on the foam. Built around a Dr. Coffee F3 with a self-cleaning arm.",
    heroStats: [
      { value: "40 cups/hr", label: "verified throughput" },
      { value: "90 s", label: "per beverage" },
      { value: "$42,000", label: "list price" },
    ],
    builtForTitle: "Built for the signature moment",
    highlights: [
      {
        title: "Real poured latte art",
        body: "The only machine in the range that physically pours latte art — 4–6 pour patterns — plus custom image printing for logos and events.",
      },
      {
        title: "Keeps itself clean",
        body: "A self-cleaning arm, automated cup-lifting module, and high-pressure cylinder rinsing keep the open bar presentable in premium settings.",
      },
      {
        title: "Takes every payment",
        body: "Mobile/QR, credit card, cash, and coin — certified CE, FCC, and ISO 9001 for public deployment.",
      },
    ],
    chooseTitle: "Choose Argus Art if",
    choosePoints: [
      "The cup itself is the marketing — flagship retail, specialty cafes, events",
      "You want real poured latte art and custom foam printing",
      "The setting is premium and the machine will be photographed",
    ],
    considerPoints: [
      `Throughput is the constraint — ${link("iris", "Iris")} serves 75% more cups per hour at $15,000 less`,
      `It runs unattended in public — the enclosed ${link("iris", "Iris line")} is protected`,
      `Latte art isn't worth $15,000 to you — ${link("argus-axis", "Argus Axis")} keeps the open-bar theater`,
    ],
    specFootnote: CERTIFIED_FOOTNOTE,
    tableRecipes: "5–10 presets",
    tableLatteArt: "Poured + printing",
    tableEnclosure: "Open bar",
    tableEspresso: "Dr. Coffee F3",
    tablePayments: "QR · Card · Cash",
  },
};

// ---------------------------------------------------------------------------
// Formatters — raw frontmatter → calm mono strings
// ---------------------------------------------------------------------------

export const fmtPrice = (price?: number): string =>
  typeof price === "number" ? `$${price.toLocaleString("en-US")}` : "—";

/** "51 seconds" → "51 s" */
export const fmtServeTime = (productionTime?: string): string => {
  if (!productionTime) return "—";
  const m = productionTime.match(/\d+/);
  return m ? `${m[0]} s` : productionTime;
};

/** "2.18 sqm" → "2.18 m²" */
export const fmtFootprint = (area?: string): string =>
  area ? area.replace(/\s*sq\s*m/i, " m²").replace(/\s*m2/i, " m²").trim() : "—";

/** "1500x1450x2020 mm" → "1500×1450×2020 mm" */
export const fmtDimensions = (dimensions?: string): string =>
  dimensions ? dimensions.replace(/\s*[x×]\s*/gi, "×") : "—";

/** "4000W" / "4000W (5500W Peak)" → "4000 W" */
export const fmtPower = (power?: string): string => {
  if (!power) return "—";
  const m = power.match(/(\d+)\s*W/i);
  return m ? `${m[1]} W` : power;
};

/** "500 Kg" → "500 kg" */
export const fmtWeight = (weight?: string): string =>
  weight ? weight.replace(/\bkg\b/i, "kg") : "—";

/** "150 - 200" → "150–200" */
export const fmtCupCapacity = (cupCapacity?: string): string =>
  cupCapacity ? cupCapacity.replace(/\s*-\s*/g, "–") : "—";
