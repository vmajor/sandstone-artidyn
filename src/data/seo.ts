// Shared types for the SEO structured-data components. Kept in a .ts module
// because .astro files only export their component.

/** One step in a BreadcrumbList, root-first. */
export interface Crumb {
  name: string;
  href: string;
}

/** One Q&A pair. The answer must also be visible in the page body. */
export interface FaqItem {
  q: string;
  /** Plain text — strip markup before passing it in. */
  a: string;
}

/** One entry in a guide page's table of contents. */
export interface TocEntry {
  id: string;
  label: string;
}
