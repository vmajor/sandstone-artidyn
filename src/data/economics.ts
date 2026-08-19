// ===========================================================================
// Robot barista unit economics — one model, shared by every page that quotes a
// number. The guide pages state these assumptions openly; if you change one,
// every table on the site moves with it, which is the point.
//
// These are modelled illustrations built from list prices and ordinary operator
// costs. They are not measured results from a specific deployment.
// ===========================================================================

/** Beans, milk, cup, lid, sleeve and syrup for one drink. */
export const CONSUMABLE_PER_CUP = 0.55;
/** Card processing, as a share of gross. */
export const PROCESSING_RATE = 0.029;
/** Site rent or revenue share, as a share of gross. */
export const SITE_SHARE_RATE = 0.15;
/** 30 minutes a day of restock and wipe-down at $22/hr. */
export const ATTENDANT_PER_DAY = 11.0;
/** Power plus connectivity, per day. */
export const UTILITIES_PER_DAY = 6.0;
/** Annual parts and maintenance reserve, as a share of machine price. */
export const MAINTENANCE_RATE = 0.04;
/** Freight, duty, site prep, install and commissioning on a typical unit. */
export const LANDED_EXTRAS = 4500;
/** Reference machine price used for payback and TCO worked examples. */
export const REFERENCE_PRICE = 27000;

export interface DailyModel {
  cups: number;
  ticket: number;
  gross: number;
  consumables: number;
  processing: number;
  siteShare: number;
  fixed: number;
  net: number;
  monthly: number;
  /** Days to repay `price` out of net contribution. Infinity if never. */
  paybackDays: number;
}

export interface ModelOpts {
  price?: number;
  /**
   * Rent or revenue share as a share of gross. Set to 0 for in-house
   * deployments — a hotel or an employer operating its own machine on its own
   * floor pays no concession fee, and leaving the default in place understates
   * those sites badly.
   */
  siteShareRate?: number;
  /** Card processing share of gross. Set to 0 for free-vend office deployments. */
  processingRate?: number;
}

export function daily(cups: number, ticket: number, opts: ModelOpts = {}): DailyModel {
  const {
    price = REFERENCE_PRICE,
    siteShareRate = SITE_SHARE_RATE,
    processingRate = PROCESSING_RATE,
  } = opts;
  const gross = cups * ticket;
  const consumables = cups * CONSUMABLE_PER_CUP;
  const processing = gross * processingRate;
  const siteShare = gross * siteShareRate;
  const fixed = ATTENDANT_PER_DAY + UTILITIES_PER_DAY;
  const net = gross - consumables - processing - siteShare - fixed;
  return {
    cups,
    ticket,
    gross,
    consumables,
    processing,
    siteShare,
    fixed,
    net,
    monthly: net * 30,
    paybackDays: net > 0 ? price / net : Infinity,
  };
}

/** Gross margin left by one cup after the volume-linked costs. */
export function contributionPerCup(ticket: number, opts: ModelOpts = {}): number {
  const { siteShareRate = SITE_SHARE_RATE, processingRate = PROCESSING_RATE } = opts;
  return ticket - CONSUMABLE_PER_CUP - ticket * (processingRate + siteShareRate);
}

/**
 * Cups a day needed to cover the fixed daily cost *and* recover the machine
 * price over `years`. The number that decides whether a site is worth automating.
 */
export function breakEvenCups(ticket: number, opts: ModelOpts = {}, years = 3): number {
  const { price = REFERENCE_PRICE } = opts;
  const capexPerDay = price / (365 * years);
  return Math.ceil(
    (ATTENDANT_PER_DAY + UTILITIES_PER_DAY + capexPerDay) / contributionPerCup(ticket, opts)
  );
}

export interface Tco {
  years: number;
  cups: number;
  revenue: number;
  capex: number;
  landed: number;
  consumables: number;
  service: number;
  utilities: number;
  maintenance: number;
  processing: number;
  siteShare: number;
  total: number;
  net: number;
  costPerCup: number;
}

/** Total cost of ownership over `years` at a steady daily volume. */
export function tco(cups: number, ticket: number, opts: ModelOpts = {}, years = 5): Tco {
  const {
    price = REFERENCE_PRICE,
    siteShareRate = SITE_SHARE_RATE,
    processingRate = PROCESSING_RATE,
  } = opts;
  const days = 365 * years;
  const totalCups = cups * days;
  const revenue = totalCups * ticket;
  const consumables = totalCups * CONSUMABLE_PER_CUP;
  const service = ATTENDANT_PER_DAY * days;
  const utilities = UTILITIES_PER_DAY * days;
  const maintenance = price * MAINTENANCE_RATE * years;
  const processing = revenue * processingRate;
  const siteShare = revenue * siteShareRate;
  const total =
    price + LANDED_EXTRAS + consumables + service + utilities + maintenance + processing + siteShare;
  return {
    years,
    cups: totalCups,
    revenue,
    capex: price,
    landed: LANDED_EXTRAS,
    consumables,
    service,
    utilities,
    maintenance,
    processing,
    siteShare,
    total,
    net: revenue - total,
    costPerCup: total / totalCups,
  };
}

/** $1,234 */
export const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
/** $1.23 — use wherever cents change the reader's conclusion. */
export const usd2 = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
/** "4.1 months" / "56 months" */
export const monthsLabel = (days: number) =>
  days === Infinity ? "never" : `${(days / 30.4).toFixed(days / 30.4 < 10 ? 1 : 0)} months`;
