// ===========================================================================
// Tech Clarity redesign — solutions by environment
//
// The redesign frames solutions around *where the machine lives* (4 environments),
// shared between the home "Solutions" tabs and the /solutions/ page. Copy is final.
// `imgKey` maps to src/assets/images/solutions/{1,2,3}.png (imported in the page).
// ===========================================================================

export type SolutionImgKey = 1 | 2 | 3;

/** Home page — "Start from where the machine will live" tabbed panel */
export interface HomeEnvironment {
  label: string;
  title: string;
  desc: string;
  points: string[];
  cta: string;
  ctaHref: string;
  imgKey: SolutionImgKey;
}

export const HOME_ENVIRONMENTS: HomeEnvironment[] = [
  {
    label: "Operators",
    title: "Vending & kiosk operators",
    desc: "Replace aging vending banks with a single robotic kiosk that serves specialty coffee at margin, around the clock.",
    points: [
      "Case studies show 2× quarterly revenue vs. aging vending machines",
      "Remote fleet telemetry: stock, sales, and faults from one app",
      "ROI projection provided before you sign",
    ],
    cta: "See the high-volume range",
    ctaHref: "/products/",
    imgKey: 2,
  },
  {
    label: "Hotels",
    title: "Hotels & resorts",
    desc: "Premium coffee for guests at any hour — including the overnight window no cafe can staff profitably.",
    points: [
      "24/7 service without overnight staffing cost",
      "Craft machines with latte art for lobby and events",
      "Fits service alcoves from 1.9 m² footprint",
    ],
    cta: "See the craft range",
    ctaHref: "/products/",
    imgKey: 3,
  },
  {
    label: "Airports & transit",
    title: "Airports & transit hubs",
    desc: "Verified 70 cups/hour peak throughput for morning rushes, with consistency that doesn't drift between batches.",
    points: [
      "51-second serve time, certified in our testing",
      "Fully enclosed units rated for continuous public operation",
      "Handles peak-hour demand without extra staff",
    ],
    cta: "See the high-volume range",
    ctaHref: "/products/",
    imgKey: 2,
  },
  {
    label: "Offices",
    title: "Corporate offices",
    desc: "A compact bar that fits a pantry corner, cuts catering cost, and gives people a reason to come in.",
    points: [
      "Compact footprint fits standard vending spaces",
      "24 recipe presets with app-based management",
      "Turns pantry spend into a visible perk",
    ],
    cta: "See the compact range",
    ctaHref: "/products/",
    imgKey: 1,
  },
];

/** /solutions/ page — alternating image/text rows */
export interface SolutionRow {
  num: string;
  title: string;
  desc: string;
  points: string[];
  robot: string;
  robotSpec: string;
  robotHref: string;
  imgKey: SolutionImgKey;
}

export const SOLUTIONS: SolutionRow[] = [
  {
    num: "01",
    title: "Vending & kiosk operators",
    desc: "Replace aging vending banks with a robotic kiosk that serves specialty coffee at margin, around the clock. Operators in our case studies doubled quarterly revenue against legacy machines.",
    points: [
      "2× quarterly revenue vs. aging vending machines in case studies",
      "Remote telemetry for stock, sales, and faults across a fleet",
      "Typical break-even under 12 months",
    ],
    robot: "Iris",
    robotSpec: "70 cups/hr · $27,000",
    robotHref: "/products/iris/",
    imgKey: 2,
  },
  {
    num: "02",
    title: "Hotels & resorts",
    desc: "Premium coffee for guests at any hour — including the overnight window no cafe can staff profitably. Craft machines with visible pours turn the lobby corner into an amenity.",
    points: [
      "24/7 service without overnight staffing cost",
      "Latte art and image printing for a signature guest moment",
      "Open-bar design suits lobby and event settings",
    ],
    robot: "Argus Art",
    robotSpec: "latte art · $42,000",
    robotHref: "/products/argus-art/",
    imgKey: 3,
  },
  {
    num: "03",
    title: "Airports & transit hubs",
    desc: "Verified 70 cups per hour through the morning rush, with consistency that doesn't drift between batches. Fully enclosed units rated for continuous public operation.",
    points: [
      "51-second serve time, certified in our testing",
      "Rugged 750 kg enclosed kiosk built for public spaces",
      "150-cup capacity with automated cleaning between serves",
    ],
    robot: "Iris",
    robotSpec: "70 cups/hr · $27,000",
    robotHref: "/products/iris/",
    imgKey: 2,
  },
  {
    num: "04",
    title: "Corporate offices",
    desc: "A compact bar that fits a pantry corner, cuts catering spend, and gives people a reason to come in. The narrowest machine in the range fits alcoves other kiosks can't.",
    points: [
      "1.89 m² footprint fits standard vending spaces",
      "24 recipe presets with app-based management",
      "Turns pantry cost into a visible, used perk",
    ],
    robot: "Iris Pro",
    robotSpec: "compact · $29,500",
    robotHref: "/products/iris-pro/",
    imgKey: 1,
  },
];
