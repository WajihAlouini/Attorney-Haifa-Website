# Performance Optimization Guide

## Overview

This document outlines the performance optimizations implemented in the project and provides guidelines for maintaining optimal performance.

## Completed Optimizations ✅

### 1. Code Splitting

**Implementation**: Enhanced Vite configuration with intelligent code splitting.

```typescript
manualChunks: (id) => {
  // Vendor chunks
  if (id.includes("node_modules")) {
    if (id.includes("react") || id.includes("react-dom")) {
      return "react-vendor";
    }
    return "vendor";
  }
  // Feature-based chunks
  if (id.includes("/features/")) {
    const feature = id.split("/features/")[1]?.split("/")[0];
    if (feature) {
      return `feature-${feature}`;
    }
  }
};
```

**Benefits**:

- React vendor bundle: ~189 KB (59 KB gzipped)
- Better browser caching
- Faster initial page load
- Parallel chunk loading

### 2. Lazy Loading

**Components**: All below-the-fold sections are lazy-loaded.

```typescript
const Reviews = lazy(() =>
  import("@/features/reviews").then((module) => ({ default: module.Reviews }))
);
const Contact = lazy(() =>
  import("@/features/contact").then((module) => ({ default: module.Contact }))
);
const Gallery = lazy(() =>
  import("@/features/gallery").then((module) => ({ default: module.Gallery }))
);
const FAQ = lazy(() =>
  import("@/features/faq").then((module) => ({ default: module.FAQ }))
);
```

**Images**: Native lazy loading for gallery images.

```tsx
<img src={photo.src} alt={photo.alt} loading="lazy" />
```

### 3. Asset Optimization

**File Organization**:

- Images: `assets/images/[name]-[hash][extname]`
- Fonts: `assets/fonts/[name]-[hash][extname]`
- JS: `assets/js/[name]-[hash].js`

**Benefits**:

- Better cache invalidation
- Organized dist structure
- CDN-friendly naming

### 4. Build Optimization

**Minification**: esbuild for fast, efficient minification.

```typescript
minify: "esbuild";
```

**Source Maps**: Disabled in production for smaller bundle size.

```typescript
sourcemap: false;
```

### 5. Resource Hints

**Preconnect**: Critical external domains.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="preconnect" href="https://www.google-analytics.com" />
```

**DNS Prefetch**: API endpoints.

```html
<link rel="dns-prefetch" href="https://api.web3forms.com" />
```

### 6. Intersection Observer

**Scroll Animations**: Native IntersectionObserver for efficient scroll-based animations.

```typescript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  },
  { threshold: 0.1 }
);
```

## Pending Optimizations 🚧

### 1. Image Optimization

**Current State**: PNG images in `public/office/` (460KB - 670KB each).

**Recommended Actions**:

1. Convert to WebP format (60-80% size reduction)
2. Generate multiple sizes for responsive images
3. Implement `<picture>` element with fallbacks

**Script** (requires `sharp` package):

```bash
npm install -D sharp
```

```javascript
// scripts/optimize-images.js
import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

const inputDir = "./public/office";
const outputDir = "./public/office-optimized";

const files = await readdir(inputDir);

for (const file of files) {
  if (file.endsWith(".png")) {
    await sharp(join(inputDir, file))
      .webp({ quality: 85 })
      .toFile(join(outputDir, file.replace(".png", ".webp")));
  }
}
```

### 2. Font Optimization

**Current**: Google Fonts via CDN.

**Recommendations**:

1. Self-host fonts for better control
2. Use `font-display: swap` (already implemented)
3. Subset fonts to include only needed characters

### 3. Critical CSS

**Goal**: Inline critical CSS for above-the-fold content.

**Tools**: `vite-plugin-critical` or manual extraction.

## Performance Metrics

### Current Build Stats

```
dist/index.html                    5.61 kB │ gzip: 1.54 kB
dist/assets/index-[hash].css       0.93 kB │ gzip: 0.44 kB
dist/assets/react-vendor-[hash].js 188.74 kB │ gzip: 58.97 kB
```

### Target Metrics

- **Lighthouse Performance**: > 95
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Time to Interactive (TTI)**: < 3.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Total Bundle Size**: < 250 KB (gzipped)

## Monitoring

### Tools

1. **Lighthouse**: Built into Chrome DevTools
2. **WebPageTest**: https://www.webpagetest.org/
3. **Bundle Analyzer**: `npm install -D rollup-plugin-visualizer`

### Commands

```bash
# Build with analysis
npm run build

# Preview production build
npm run preview

# Run Lighthouse (Chrome DevTools)
# 1. Open DevTools
# 2. Go to Lighthouse tab
# 3. Generate report
```

## Best Practices

### 1. Component Design

- Keep components small and focused
- Use React.memo() for expensive renders
- Avoid inline function definitions in JSX

### 2. State Management

- Lift state only when necessary
- Use local state for UI-only concerns
- Minimize re-renders with proper dependencies

### 3. Assets

- Compress images before adding to project
- Use SVG for icons and simple graphics
- Lazy load images below the fold

### 4. Third-Party Scripts

- Load analytics asynchronously
- Defer non-critical scripts
- Use preconnect for external domains

## Troubleshooting

### Large Bundle Size

1. Run bundle analyzer
2. Identify large dependencies
3. Consider alternatives or lazy loading
4. Check for duplicate dependencies

### Slow Initial Load

1. Check network waterfall
2. Optimize critical path
3. Reduce blocking resources
4. Enable compression (gzip/brotli)

### Poor LCP

1. Optimize hero image
2. Preload critical resources
3. Reduce render-blocking resources
4. Use CDN for static assets

## Resources

- [Web Vitals](https://web.dev/vitals/)
- [Vite Performance](https://vitejs.dev/guide/performance.html)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Image Optimization](https://web.dev/fast/#optimize-your-images)

## Changelog

### 2025-11-30

- ✅ Enhanced code splitting with feature-based chunks
- ✅ Optimized asset file naming
- ✅ Disabled source maps in production
- ✅ Documented current optimizations
- 📋 Identified image optimization opportunities
