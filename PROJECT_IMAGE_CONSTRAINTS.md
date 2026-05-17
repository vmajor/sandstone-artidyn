# Project Image Constraint Suggestions

This document identifies the source files for the project detail view and provides specific suggestions to constrain low-quality product images to a maximum height of 800px (or 500px for cards), preventing them from being "blown up" by the browser.

## Root Cause of Upscaling
The project uses Tailwind CSS classes like `w-full`, `size-full`, and `aspect-*` on Astro `<Image>` components. These classes force the browser to stretch the generated image to fill its container, regardless of the `width` and `height` properties set on the component.

---

## 1. Project Detail Page (Hero/Cover Image)
**File:** `src/layouts/ProjectsLayout.astro`
**Location:** Around line 34

### Current Code:
```astro
<Image
  ...
  class="object-contain size-full absolute inset-0 object-center p-8 lg:p-16"
/>
```

### Suggested Change:
Replace `size-full absolute inset-0` with `max-h-[800px] w-auto mx-auto`.
```astro
<Image
  ...
  class="object-contain max-h-[800px] w-auto mx-auto object-center p-8 lg:p-16"
/>
```
*Optional: To make the hero container shrink to fit, change line 33 from `h-[calc(100vh-2rem)]` to `min-h-[500px] h-fit`.*

---

## 2. Product Gallery (Detail Page Bottom)
**File:** `src/layouts/ProjectsLayout.astro`
**Location:** Around line 118

### Current Code:
```astro
<Image
  ...
  class="w-full aspect-square rounded-2xl object-center object-contain bg-base-50 border border-base-100 p-4"
/>
```

### Suggested Change:
Replace `w-full aspect-square` with `max-h-[800px] w-auto mx-auto`.
```astro
<Image
  ...
  class="max-h-[800px] w-auto mx-auto rounded-2xl object-center object-contain bg-base-50 border border-base-100 p-4"
/>
```

---

## 3. Catalog & Preview Cards
**Files:**
- `src/components/projects/ProjectCard.astro` (around line 21)
- `src/components/projects/ProjectCardBig.astro` (around line 24)

### Current Code:
Uses classes like `w-full aspect-square lg:aspect-4/2 h-full` or `w-full aspect-square lg:aspect-16/9`.

### Suggested Change:
Replace those classes with:
- `max-h-[500px] w-auto mx-auto` (for small `ProjectCard`)
- `max-h-[800px] w-auto mx-auto` (for large `ProjectCardBig`)

---

## Summary of Changes
To stop images from blowing up, replace all instances of `w-full` or `size-full` on product images with `max-h-[800px]` and `w-auto`. This ensures they never grow taller than 800px and maintain their natural aspect ratio.
