# SEO Optimization Plan & Progress

This document outlines the SEO improvements made to Artidyn.ai and recommendations for future stages.

## Stage 1: Structural Refactoring & Branding (Completed)
- **Collection Renaming**: Renamed 'projects' to 'products' and 'services' to 'solutions' to align with B2B robotics industry standards.
- **Legacy Cleanup**: Removed all references to 'Matterhaus' and 'Sandstone Architecture'. Updated company name to 'Artidyn Robotics LLC' across all legal and content files.
- **Location Update**: Updated contact and legal information from Finland to Sheridan, Wyoming, USA.
- **Terminology Shift**: Converted architectural terms (construction, drawings) to robotics/automation terms (deployment, engineering).

## Stage 2: Technical SEO & URL Standardization (Completed)
- **TLD Standard**: Set base URL to `https://www.artidyn.ai` to ensure proper CDN caching and indexing.
- **Trailing Slashes**: Enforced a consistent trailing slash policy (`trailingSlash: "always"`) to prevent duplicate content and unnecessary redirects.
- **Canonical Tags**: Fixed `Seo.astro` to ensure canonical tags always use the `www` prefix and include a trailing slash.
- **Sitemap & Robots**: Verified sitemap generation and added a standard `robots.txt` in the `public/` directory.
- **Broken Links**: Audited and fixed internal links to match the new 'products' and 'solutions' structure. Added trailing slashes to all internal menu and footer links.
- **Structured Data**: Implemented JSON-LD Structured Data for the `Organization` in the base layout to assist AI and search crawlers.

## Stage 3: On-Page Optimization (Completed)
- **H1 Hierarchy**: Ensured every page has exactly one `H1` tag.
  - Added visually hidden H1 to the Homepage.
  - Fixed multiple H1 issues in legal pages by restructuring Markdown headers.
  - Updated layouts (Product, Solution, Blog, Team) to use H1 for primary titles.
- **Metadata Overrides**: Updated all layouts to pass unique `title` and `description` properties to the SEO component, ensuring no pages share duplicate default metadata.
- **Accessibility**: Improved `alt` tags for images in the product and solution galleries.

## Stage 4: Image Optimization & Performance (Completed)
- **Astro Assets**: Implemented `astro:assets` toolkit across the entire site.
- **Automated Compression**: Images are now automatically converted to modern WebP format and resized at build-time.
- **Storage Shift**: Moved image assets from `public/` to `src/assets/images/` to enable optimization pipeline.
- **Gallery Refactoring**: Product galleries now use `import.meta.glob` for dynamic, optimized asset delivery.

## Stage 5: Recommendations (Future)
- **Content Strategy**: Regularly update the 'Industry Insights' (blog) with keywords like "beverage automation ROI", "robot barista deployment", and "contactless retail solutions".
- **Backlinks**: Focus on acquiring links from robotics industry publications and local Wyoming business directories.
- **Mobile Performance**: Monitor page load speeds on mobile, specifically for pages with large video backgrounds (Hero, Footer).


## TODO / Follow-up Items
- [x] **Large Image Compression**: Implemented via `astro:assets`.
- [ ] **Broken External Links**: Audit and fix/remove broken external links (e.g. template-specific placeholders).
- [ ] **Blog Content Refinement**: Ensure new blog posts are written with a focus on target keywords identified in Stage 5.
- [x] **Alt Text Audit**: Review and improve alt text convention for galleries.
