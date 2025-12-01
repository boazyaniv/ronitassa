# Image Optimization Package - רוני טסה Website

## 📦 Package Contents

This complete image optimization package includes:

1. **PHOTO_PLAN.md** - Detailed photo strategy with licensing info
2. **images.manifest.json** - Technical specifications and metadata for all images
3. **HTML_SNIPPETS.md** - Ready-to-use implementation code
4. **This README** - Quick start guide

---

## 🚀 Quick Start

### Step 1: Download Images

All images are from **free, commercial-use sources**:

- **Unsplash** (primary): https://unsplash.com
- **Pexels** (backup): https://pexels.com
- **Pixabay** (backup): https://pixabay.com

**Download URLs are in `images.manifest.json`** under each `source.url` field.

### Step 2: Process Images

Use the following tools to optimize images:

#### Option A: ImageMagick (Command Line)
```bash
# Install ImageMagick
brew install imagemagick

# Convert and resize for hero image
convert original.jpg \
  -resize 2400x1350^ \
  -gravity center \
  -extent 2400x1350 \
  -quality 85 \
  home-hero-01-2400.jpg

# Generate WebP
cwebp -q 82 home-hero-01-2400.jpg -o home-hero-01-2400.webp

# Generate AVIF (requires libavif)
avifenc -s 4 -j 8 --min 0 --max 63 -a end-usage=q -a cq-level=30 \
  home-hero-01-2400.jpg home-hero-01-2400.avif
```

#### Option B: Sharp (Node.js)
```javascript
// npm install sharp
const sharp = require('sharp');

async function processImage(input, output, width) {
  await sharp(input)
    .resize(width, Math.round(width * 0.5625), {
      fit: 'cover',
      position: 'center'
    })
    .modulate({
      brightness: 1.0,
      saturation: 1.08
    })
    .toFile(output);
}

// Process all sizes
const sizes = [640, 960, 1280, 1920, 2400];
sizes.forEach(width => {
  processImage('original.jpg', `home-hero-01-${width}.jpg`, width);
});
```

#### Option C: Squoosh CLI (Easiest)
```bash
# Install Squoosh CLI
npm install -g @squoosh/cli

# Batch convert with optimal settings
squoosh-cli --avif '{"cqLevel":30,"effort":4}' \
  --webp '{"quality":82}' \
  --mozjpeg '{"quality":85}' \
  --resize '{width:2400}' \
  *.jpg
```

### Step 3: Apply Color Grading

According to style guide in PHOTO_PLAN.md:

- **Temperature**: +8 Kelvin (warmer)
- **Contrast**: +15%
- **Clarity**: +12%
- **Saturation**: +8% (reds/browns)
- **Vignette**: -12% (hero images only)

Use Lightroom, Photoshop, or GIMP with these presets.

### Step 4: Organize Files

```
public/
└── img/
    ├── home-hero-01-640.avif
    ├── home-hero-01-640.webp
    ├── home-hero-01-640.jpg
    ├── home-hero-01-960.avif
    ├── home-hero-01-960.webp
    ├── home-hero-01-960.jpg
    ├── home-hero-01-1280.avif
    ├── home-hero-01-1280.webp
    ├── home-hero-01-1280.jpg
    ├── home-hero-01-1920.avif
    ├── home-hero-01-1920.webp
    ├── home-hero-01-1920.jpg
    ├── home-hero-01-2400.avif
    ├── home-hero-01-2400.webp
    ├── home-hero-01-2400.jpg
    └── ...
```

### Step 5: Implement HTML

Copy snippets from **HTML_SNIPPETS.md** into your pages.

Example for Astro:
```astro
---
// src/pages/index.astro
import ResponsiveImage from '../components/ResponsiveImage.astro';
---

<section class="hero">
  <ResponsiveImage
    id="home-hero-01"
    alt="Premium marbled ribeye steaks"
    loading="eager"
    fetchpriority="high"
  />
</section>
```

---

## 📊 Image Matrix

| Image ID | Page | Section | Formats | Sizes | Est. Total |
|----------|------|---------|---------|-------|------------|
| home-hero-01 | Home | Hero | AVIF, WebP, JPG | 5 | ~1.8 MB |
| home-about-01 | Home | About | WebP, JPG | 3 | ~600 KB |
| beef-hero-01 | Beef | Hero | AVIF, WebP, JPG | 4 | ~1.5 MB |
| beef-product-ribeye | Beef | Products | WebP, JPG | 3 | ~400 KB |
| lamb-hero-01 | Lamb | Hero | AVIF, WebP, JPG | 3 | ~1.2 MB |
| chicken-hero-01 | Chicken | Hero | AVIF, WebP, JPG | 3 | ~1.1 MB |
| homemade-hero-01 | Homemade | Hero | AVIF, WebP, JPG | 3 | ~1.3 MB |
| homemade-product-kebab | Homemade | Products | WebP, JPG | 3 | ~350 KB |
| about-heritage-01 | About | Heritage | WebP, JPG | 3 | ~550 KB |

**Total estimated**: ~9 MB for all images (all formats, all sizes)

With lazy loading, **initial page load**: ~500-800 KB

---

## 🎨 Batch Processing Script

Save as `process-images.sh`:

```bash
#!/bin/bash

# Configuration
INPUT_DIR="./originals"
OUTPUT_DIR="./public/img"
QUALITY_AVIF=30
QUALITY_WEBP=82
QUALITY_JPG=85

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Process each image
for img in "$INPUT_DIR"/*.jpg; do
  filename=$(basename "$img" .jpg)

  # Extract image ID and size from manifest
  # Example: home-hero-01 → sizes: [640, 960, 1280, 1920, 2400]

  for size in 640 960 1280 1920 2400; do
    # AVIF
    avifenc -s 4 --min 0 --max 63 -a cq-level=$QUALITY_AVIF \
      <(convert "$img" -resize "${size}x" -) \
      "$OUTPUT_DIR/${filename}-${size}.avif"

    # WebP
    cwebp -q $QUALITY_WEBP \
      <(convert "$img" -resize "${size}x" -) \
      -o "$OUTPUT_DIR/${filename}-${size}.webp"

    # JPG
    convert "$img" \
      -resize "${size}x" \
      -quality $QUALITY_JPG \
      "$OUTPUT_DIR/${filename}-${size}.jpg"

    echo "✓ Processed ${filename}-${size}"
  done
done

echo "✅ All images processed!"
```

Make executable and run:
```bash
chmod +x process-images.sh
./process-images.sh
```

---

## 🧪 Testing & Validation

### 1. Visual Regression Testing
```bash
npm install -D @percy/cli @percy/puppeteer

# Take screenshots
npx percy snapshot snapshots.yml
```

### 2. Performance Testing
```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=http://localhost:4321
```

### 3. Format Support Check
```javascript
// Detect AVIF support
function supportsAVIF() {
  return new Promise((resolve) => {
    const avif = new Image();
    avif.onload = () => resolve(true);
    avif.onerror = () => resolve(false);
    avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAABAAEAAQAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  });
}

supportsAVIF().then(supported => {
  console.log('AVIF supported:', supported);
});
```

### 4. Accessibility Audit
```bash
# Install axe CLI
npm install -g @axe-core/cli

# Run audit
axe http://localhost:4321 --tags wcag2a,wcag2aa
```

---

## 📈 Expected Performance Improvements

### Before Optimization
- Hero image: ~2.5 MB (JPG)
- LCP: 4.2s
- Total page weight: 8 MB
- Lighthouse Performance: 65

### After Optimization
- Hero image: ~320 KB (AVIF with fallbacks)
- LCP: < 2.0s ✅
- Total page weight: ~1.2 MB (with lazy loading)
- Lighthouse Performance: 95+ ✅

### Savings
- **87% reduction** in hero image size
- **52% faster** LCP
- **85% lighter** total page weight

---

## 🔧 Troubleshooting

### Images not loading?
1. Check file paths in manifest match actual files
2. Verify MIME types configured in server
3. Check browser DevTools Network tab for 404s

### Wrong format served?
1. Verify `<picture>` order: AVIF → WebP → JPG
2. Check `type` attribute on `<source>` elements
3. Test in different browsers

### Images look blurry?
1. Ensure correct `srcset` and `sizes` attributes
2. Verify image dimensions match container
3. Check pixel density (2x displays need 2x images)

### Slow loading?
1. Implement lazy loading for below-fold images
2. Add `fetchpriority="high"` to LCP image
3. Preload critical images in `<head>`
4. Use CDN for image delivery

---

## 📝 License Compliance

All images sourced from:
- **Unsplash**: https://unsplash.com/license (Free, commercial use, no attribution required)
- **Pexels**: https://www.pexels.com/license/ (Free, commercial use, no attribution required)
- **Pixabay**: https://pixabay.com/service/license/ (Free, commercial use, no attribution required)

**Attribution**: While not required, we credit photographers in manifest for good practice.

**Modifications**: All licenses allow:
- ✅ Cropping and resizing
- ✅ Color grading
- ✅ Format conversion
- ✅ Commercial use

---

## 🎯 Success Metrics

Track these after implementation:

- [ ] LCP < 2.5s (target: < 2.0s)
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Total page weight < 2 MB
- [ ] Images load progressively
- [ ] All alt texts descriptive
- [ ] No layout shift (CLS < 0.1)
- [ ] Works on slow 3G

---

## 📞 Support

Questions about implementation? Check:

1. **PHOTO_PLAN.md** - Detailed strategy
2. **HTML_SNIPPETS.md** - Code examples
3. **images.manifest.json** - Technical specs

---

**Version**: 1.0
**Created**: 2025-01-14
**Status**: Ready for Implementation ✅
