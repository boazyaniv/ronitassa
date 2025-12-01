# Implementation Plan: רוני טסה Website

## Tech Stack Decision ✓

### Selected Stack: Astro + Tailwind CSS

**Approved by user for simplicity, performance, and tiny.host compatibility**

## Implementation Stack

### Core Technologies
- **Framework**: Astro 4.x (Static Site Generator)
- **Styling**: Tailwind CSS 3.x
- **Language**: TypeScript (optional, can use JavaScript)
- **RTL Support**: Tailwind CSS with RTL plugin
- **Forms**: Native HTML forms with lightweight JS validation
- **Icons**: Lucide Icons or Heroicons
- **Images**: Astro built-in image optimization
- **Deployment**: tiny.host (static files) or Netlify/Vercel
- **Analytics**: None initially (per user request)

### Why This Stack?

**Astro Advantages**:
✅ Generates pure static HTML (no server needed)
✅ Near-zero JavaScript by default (fastest possible)
✅ Perfect for marketing/content sites
✅ Built-in image optimization (`<Image />` component)
✅ Component-based architecture (maintainable)
✅ Works with any host (just upload HTML/CSS/JS files)
✅ Excellent performance out of the box
✅ Simple deployment to tiny.host
✅ No complex build dependencies
✅ Easy RTL support with Tailwind

**Tailwind CSS Advantages**:
✅ Utility-first CSS (fast development)
✅ Built-in RTL support with plugin
✅ Automatic purging (tiny CSS bundles)
✅ Responsive design utilities
✅ Customizable design system
✅ No runtime cost (pure CSS)

**Static Deployment Advantages**:
✅ Extremely fast page loads
✅ No server costs
✅ Simple hosting (any static host)
✅ Maximum security (no backend to hack)
✅ Easy backups (just files)
✅ CDN-friendly

---

## Folder Structure (Astro)

```
ronitassa/
├── public/
│   ├── images/
│   │   ├── logo.png              # Existing logo
│   │   ├── hero/
│   │   ├── products/
│   │   │   ├── beef/
│   │   │   ├── lamb/
│   │   │   ├── chicken/
│   │   │   └── homemade/
│   │   └── about/
│   ├── icons/
│   │   ├── grill.svg
│   │   ├── oven.svg
│   │   ├── pan.svg
│   │   └── smoker.svg
│   └── favicon.ico
├── src/
│   ├── pages/
│   │   ├── index.astro           # Home page
│   │   ├── about.astro           # About page
│   │   ├── contact.astro         # Contact page
│   │   └── products/
│   │       ├── beef.astro
│   │       ├── lamb.astro
│   │       ├── chicken.astro
│   │       └── homemade.astro
│   ├── layouts/
│   │   └── BaseLayout.astro      # Main layout wrapper
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── CategoryCard.astro
│   │   ├── ProductCard.astro
│   │   ├── TrustBadges.astro
│   │   ├── ContactCTA.astro
│   │   └── ContactForm.astro
│   ├── data/
│   │   ├── products.json         # All product data
│   │   ├── site-info.json        # Business info, hours
│   │   └── content.json          # Site copy
│   ├── styles/
│   │   └── global.css            # Global styles + Tailwind
│   └── lib/
│       └── utils.ts              # Helper functions
├── astro.config.mjs              # Astro configuration
├── tailwind.config.cjs           # Tailwind + RTL config
├── tsconfig.json                 # TypeScript config
└── package.json
```

### Key Files

**`astro.config.mjs`**:
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://ronitassa.co.il', // Update with actual domain
  build: {
    inlineStylesheets: 'auto',
  },
});
```

**`tailwind.config.cjs`**:
```javascript
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#C62828',
        accent: '#E53935',
        brown: '#3E2723',
        cream: '#D7CCC8',
      },
      fontFamily: {
        sans: ['Rubik', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};
```

---

## Content Model

### Product Category
```typescript
interface ProductCategory {
  id: string;
  name: string;              // Hebrew
  slug: string;
  description: string;       // Hebrew
  image: string;
  order: number;
  products: Product[];
}
```

### Product Item
```typescript
interface Product {
  id: string;
  name: string;              // Hebrew
  slug: string;
  category: string;
  cutType?: string;          // Hebrew
  description: string;       // Hebrew
  suggestedUse?: string;     // Hebrew
  image: string;
  images?: string[];         // Additional images
  badge?: 'recommended' | 'popular' | 'new' | 'special';
  priceRange?: string;       // Optional: "₪50-80"
}
```

### Recipe (Optional)
```typescript
interface Recipe {
  id: string;
  title: string;             // Hebrew
  slug: string;
  description: string;       // Hebrew
  image: string;
  prepTime: number;          // minutes
  cookTime: number;
  difficulty: 'easy' | 'medium' | 'hard';
  recommendedCuts: string[]; // Product IDs
  ingredients: string[];     // Hebrew
  instructions: string[];    // Hebrew
}
```

---

## SEO Implementation

### Metadata (Next.js)
```typescript
export const metadata: Metadata = {
  title: 'רוני טסה - קצביית בוטיק',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};
```

### Structured Data (JSON-LD)

**LocalBusiness**:
```json
{
  "@context": "https://schema.org",
  "@type": "ButcherShop",
  "name": "רוני טסה",
  "image": "...",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "...",
    "addressLocality": "...",
    "addressCountry": "IL"
  },
  "telephone": "...",
  "openingHoursSpecification": [...],
  "priceRange": "$$"
}
```

### Sitemap & Robots
- Generate sitemap.xml automatically
- robots.txt to allow all crawling

---

## Analytics Setup

### Google Analytics 4
```typescript
// lib/analytics.ts
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
```

### Event Tracking
- Phone click
- WhatsApp click
- Category view
- Contact form submission
- Recipe view

---

## Performance Budget

### Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Total page size: < 1MB (initial load)
- Image optimization: WebP, < 200KB per image

### Lighthouse Scores
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: > 95

---

## RTL Configuration

### Tailwind Config
```javascript
// tailwind.config.ts
module.exports = {
  plugins: [
    require('tailwindcss-rtl'),
  ],
  // or use built-in RTL with dir modifier
}
```

### HTML Setup
```html
<html dir="rtl" lang="he">
```

### CSS Logical Properties
Prefer logical properties that automatically handle RTL:
```css
.element {
  margin-inline-start: 1rem;  /* Auto RTL */
  padding-inline: 1rem;
}
```

---

## Build & Deployment

### Build Commands (Astro)
```bash
# Install dependencies
npm install

# Development server
npm run dev
# Runs on http://localhost:4321

# Build for production
npm run build
# Outputs to ./dist folder

# Preview production build locally
npm run preview

# Type check (if using TypeScript)
npm run check
```

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "dependencies": {
    "astro": "^4.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "tailwindcss-rtl": "^0.9.0"
  }
}
```

### No Environment Variables Needed
Since this is a static site with no analytics initially, no environment variables required. All configuration is in code.

### Deployment Options

**Option 1: tiny.host (User Preference)**:
1. Run `npm run build` locally
2. Upload contents of `./dist` folder to tiny.host
3. Point domain to tiny.host
4. Static files served directly
5. **Pros**: Simple, user's preferred host
6. **Cons**: Manual updates (no auto-deploy)

**Option 2: Netlify (Recommended Alternative)**:
1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Auto-deploy on every push to main
5. Free tier available
6. **Pros**: Free, automatic deploys, preview branches, HTTPS included
7. **Cons**: None really

**Option 3: Vercel**:
- Similar to Netlify
- Automatic Astro detection
- Free tier available
- Excellent performance

**Recommendation**:
Start with Netlify for development (free, auto-deploy), then migrate to tiny.host once site is final if preferred.

---

## CI/CD Pipeline

### GitHub Actions (Example)
```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm run build
      - run: npm run test (if tests exist)
```

---

## Security

### Headers
```javascript
// next.config.js
module.exports = {
  headers: async () => [{
    source: '/(.*)',
    headers: [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-XSS-Protection', value: '1; mode=block' },
    ],
  }],
};
```

### Contact Form
- Server-side validation
- Rate limiting
- CAPTCHA (if spam becomes an issue)
- Sanitize inputs

---

## Content Management Strategy

### Phase 1: Code-based
- Content in JSON/TypeScript files
- Updates via code changes and deployment
- Simple for initial launch

### Phase 2: CMS (Optional Future)
- Integrate headless CMS (Sanity, Contentful, or Strapi)
- Admin panel for content updates
- API-based content delivery

---

## Testing Checklist

### Browser Testing
- Chrome (desktop & mobile)
- Firefox
- Safari (desktop & mobile)
- Edge

### Device Testing
- iPhone (Safari)
- Android (Chrome)
- iPad
- Various screen sizes

### RTL Testing
- Text alignment
- Navigation flow
- Form layouts
- Icon directions
- Reading order

### Performance Testing
- Lighthouse audits
- WebPageTest
- Mobile network throttling

---

Last Updated: 2025-11-01
