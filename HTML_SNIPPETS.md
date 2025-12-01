# HTML Implementation Snippets

## Complete implementation examples for each page section with responsive images

---

## Home Page - Hero Section

```html
<!-- Hero Section with Picture Element for Format Support -->
<section class="hero-section relative">
  <picture>
    <!-- AVIF format for modern browsers -->
    <source
      type="image/avif"
      srcset="
        /img/home-hero-01-640.avif 640w,
        /img/home-hero-01-960.avif 960w,
        /img/home-hero-01-1280.avif 1280w,
        /img/home-hero-01-1920.avif 1920w,
        /img/home-hero-01-2400.avif 2400w
      "
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
    />

    <!-- WebP fallback -->
    <source
      type="image/webp"
      srcset="
        /img/home-hero-01-640.webp 640w,
        /img/home-hero-01-960.webp 960w,
        /img/home-hero-01-1280.webp 1280w,
        /img/home-hero-01-1920.webp 1920w,
        /img/home-hero-01-2400.webp 2400w
      "
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
    />

    <!-- JPG fallback for legacy browsers -->
    <img
      src="/img/home-hero-01-1280.jpg"
      srcset="
        /img/home-hero-01-640.jpg 640w,
        /img/home-hero-01-960.jpg 960w,
        /img/home-hero-01-1280.jpg 1280w,
        /img/home-hero-01-1920.jpg 1920w,
        /img/home-hero-01-2400.jpg 2400w
      "
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
      alt="Premium marbled ribeye steaks displayed on rustic wooden surface with natural lighting"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      width="2400"
      height="1350"
      style="width: 100%; height: auto; object-fit: cover;"
    />
  </picture>

  <!-- Overlay Content -->
  <div class="hero-content absolute inset-0 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-white">רוני טסה</h1>
      <p class="text-2xl text-white mt-4">קצביית בוטיק ברמת גן</p>
    </div>
  </div>
</section>
```

---

## Home Page - About Section

```html
<section class="about-section py-16 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-4xl font-bold mb-4">הסיפור שלנו - מדור לדור</h2>
        <p class="text-lg text-gray-700 leading-relaxed">
          מעל 50 שנה של מסורת משפחתית. רוני התחיל לעבוד עם אביו בשוק התקווה
          כשהיה רק ילד, ולמד את כל סודות המקצוע...
        </p>
      </div>

      <div class="about-image">
        <picture>
          <source
            type="image/webp"
            srcset="
              /img/home-about-01-800.webp 800w,
              /img/home-about-01-1200.webp 1200w,
              /img/home-about-01-1600.webp 1600w
            "
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <img
            src="/img/home-about-01-1200.jpg"
            srcset="
              /img/home-about-01-800.jpg 800w,
              /img/home-about-01-1200.jpg 1200w,
              /img/home-about-01-1600.jpg 1600w
            "
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Skilled butcher preparing fresh cuts at traditional butcher shop counter"
            loading="lazy"
            decoding="async"
            width="1600"
            height="1067"
            style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
          />
        </picture>
      </div>
    </div>
  </div>
</section>
```

---

## Beef Category Page - Hero

```html
<section class="category-hero relative overflow-hidden">
  <picture>
    <source
      type="image/avif"
      srcset="
        /img/beef-hero-01-640.avif 640w,
        /img/beef-hero-01-960.avif 960w,
        /img/beef-hero-01-1280.avif 1280w,
        /img/beef-hero-01-1920.avif 1920w,
        /img/beef-hero-01-2400.avif 2400w
      "
      sizes="100vw"
    />
    <source
      type="image/webp"
      srcset="
        /img/beef-hero-01-640.webp 640w,
        /img/beef-hero-01-960.webp 960w,
        /img/beef-hero-01-1280.webp 1280w,
        /img/beef-hero-01-1920.webp 1920w,
        /img/beef-hero-01-2400.webp 2400w
      "
      sizes="100vw"
    />
    <img
      src="/img/beef-hero-01-1280.jpg"
      srcset="
        /img/beef-hero-01-640.jpg 640w,
        /img/beef-hero-01-960.jpg 960w,
        /img/beef-hero-01-1280.jpg 1280w,
        /img/beef-hero-01-1920.jpg 1920w
      "
      sizes="100vw"
      alt="Premium aged beef cuts displayed on wooden board showing marbling and quality"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      width="2400"
      height="1350"
      style="width: 100%; height: auto; object-fit: cover; opacity: 0.4;"
    />
  </picture>

  <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>

  <div class="relative z-10 container mx-auto px-4 py-32 text-center">
    <h1 class="text-6xl md:text-7xl font-bold text-white mb-4">בשר בקר</h1>
    <p class="text-2xl text-white/90">מיושן במקום - טעם ורכות מושלמים</p>
  </div>
</section>
```

---

## Product Grid - Individual Product Card

```html
<article class="product-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
  <a href="/products/beef/ribeye" class="block">
    <div class="product-image aspect-[4/3] overflow-hidden">
      <picture>
        <source
          type="image/webp"
          srcset="
            /img/beef-ribeye-400.webp 400w,
            /img/beef-ribeye-600.webp 600w,
            /img/beef-ribeye-800.webp 800w
          "
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <img
          src="/img/beef-ribeye-600.jpg"
          srcset="
            /img/beef-ribeye-400.jpg 400w,
            /img/beef-ribeye-600.jpg 600w,
            /img/beef-ribeye-800.jpg 800w
          "
          sizes="(max-width: 768px) 50vw, 33vw"
          alt="Fresh ribeye steak with excellent marbling on clean white background"
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
          style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s;"
          onmouseover="this.style.transform='scale(1.05)'"
          onmouseout="this.style.transform='scale(1)'"
        />
      </picture>
    </div>

    <div class="product-info p-4">
      <h3 class="text-xl font-bold mb-2">אנטריקוט</h3>
      <p class="text-sm text-gray-600 mb-2">נתח פרימיום</p>
      <p class="text-gray-700">נתח עסיסי עם שיש שומן מושלם</p>

      <div class="mt-3 flex gap-2">
        <span class="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs rounded-full">מומלץ</span>
        <span class="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">גריל</span>
      </div>
    </div>
  </a>
</article>
```

---

## Astro Component Example (BaseLayout.astro)

```astro
---
// src/components/ResponsiveImage.astro
interface Props {
  id: string;
  alt: string;
  loading?: 'eager' | 'lazy';
  fetchpriority?: 'high' | 'low' | 'auto';
  class?: string;
}

const { id, alt, loading = 'lazy', fetchpriority, class: className } = Astro.props;

// Import manifest
import manifest from '../data/images.manifest.json';

const image = manifest.images.find(img => img.id === id);
if (!image) throw new Error(`Image ${id} not found in manifest`);

const { srcset, sizes, file_names, focal_point } = image;
---

<picture>
  {/* AVIF if available */}
  {file_names.avif && (
    <source
      type="image/avif"
      srcset={srcset.filter(s => s.path.endsWith('.avif')).map(s => `${s.path} ${s.w}w`).join(', ')}
      sizes={sizes}
    />
  )}

  {/* WebP fallback */}
  {file_names.webp && (
    <source
      type="image/webp"
      srcset={srcset.filter(s => s.path.endsWith('.webp')).map(s => `${s.path} ${s.w}w`).join(', ')}
      sizes={sizes}
    />
  )}

  {/* JPG fallback */}
  <img
    src={srcset.find(s => s.w === 1280)?.path || srcset[0].path}
    srcset={srcset.filter(s => s.path.endsWith('.jpg')).map(s => `${s.path} ${s.w}w`).join(', ')}
    sizes={sizes}
    alt={alt}
    loading={loading}
    fetchpriority={fetchpriority}
    decoding="async"
    class={className}
    style={`object-position: ${focal_point.x * 100}% ${focal_point.y * 100}%;`}
  />
</picture>
```

### Usage in Page:

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import ResponsiveImage from '../components/ResponsiveImage.astro';
---

<BaseLayout title="רוני טסה - קצביית בוטיק">
  <section class="hero relative">
    <ResponsiveImage
      id="home-hero-01"
      alt="Premium marbled ribeye steaks"
      loading="eager"
      fetchpriority="high"
      class="w-full h-screen object-cover"
    />

    <div class="absolute inset-0 flex items-center justify-center">
      <h1 class="text-6xl font-bold text-white">רוני טסה</h1>
    </div>
  </section>
</BaseLayout>
```

---

## Lazy Loading with Intersection Observer (Advanced)

```html
<!-- Add this script for progressive enhancement -->
<script>
  // Lazy load images below the fold with IntersectionObserver
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;

          // Load the image
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }

          // Stop observing this image
          observer.unobserve(img);

          // Add loaded class for fade-in effect
          img.classList.add('loaded');
        }
      });
    }, {
      rootMargin: '50px' // Start loading 50px before entering viewport
    });

    // Observe all images with data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
</script>

<style>
  img {
    opacity: 0;
    transition: opacity 0.3s ease-in;
  }

  img.loaded {
    opacity: 1;
  }
</style>
```

---

## CSS for Image Optimization

```css
/* Global image optimization */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Prevent layout shift with aspect ratio */
.aspect-16-9 {
  aspect-ratio: 16 / 9;
}

.aspect-4-3 {
  aspect-ratio: 4 / 3;
}

.aspect-square {
  aspect-ratio: 1 / 1;
}

/* Smooth image loading */
picture img {
  opacity: 0;
  animation: fadeIn 0.3s ease-in forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Hero image specific */
.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 45%; /* Focal point */
}

/* Product grid hover effect */
.product-card img {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-card:hover img {
  transform: scale(1.05);
}
```

---

## Performance Tips

### 1. Preload Critical Images
```html
<head>
  <!-- Preload hero image for LCP -->
  <link
    rel="preload"
    as="image"
    href="/img/home-hero-01-1920.avif"
    type="image/avif"
    imagesrcset="/img/home-hero-01-640.avif 640w, /img/home-hero-01-960.avif 960w, /img/home-hero-01-1280.avif 1280w, /img/home-hero-01-1920.avif 1920w"
    imagesizes="100vw"
  />
</head>
```

### 2. Use Native Lazy Loading
```html
<img loading="lazy" ... />
```

### 3. Implement Skeleton Loaders
```html
<div class="skeleton-loader bg-gray-200 animate-pulse aspect-16-9"></div>
```

### 4. Use CDN for Image Delivery
```html
<!-- Example with CDN -->
<img src="https://cdn.ronitassa.com/img/home-hero-01-1280.avif" />
```

---

## Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on iOS Safari, Android Chrome
- [ ] Verify image formats served correctly (AVIF → WebP → JPG)
- [ ] Check LCP score (should be < 2.5s)
- [ ] Verify lazy loading works below fold
- [ ] Test on slow 3G connection
- [ ] Check accessibility with screen reader
- [ ] Verify alt text is descriptive
- [ ] Test responsive breakpoints (320px, 768px, 1024px, 1440px)
- [ ] Check print stylesheet displays images correctly

---

**Document Version**: 1.0
**Date**: 2025-01-14
