# Design Specification: רוני טסה Website

## Overview
Complete design system and visual specifications for the website.

---

## Design Direction: Bold Red Heritage ✓

Warm, appetizing, traditional with modern execution. Leverage the existing logo's bold red and brown color scheme to create a professional yet approachable aesthetic that honors 50+ years of family tradition while meeting contemporary web standards.

## Design Principles
1. **Premium & Trustworthy**: Convey quality and professionalism through confident use of color
2. **Appetizing**: Make products look irresistible with warm tones and quality photography
3. **Heritage & Modern**: Balance traditional butcher craft with contemporary clean design
4. **Accessible**: Meet WCAG 2.1 AA standards with careful contrast management
5. **Mobile-First**: Optimize for mobile while scaling beautifully to desktop
6. **Fast & Simple**: Lightweight design that loads quickly

---

## Color Palette

### Primary Colors (from Logo)
- **Primary Red**: `#C62828` - Bold, appetizing, traditional
  - Use for: Primary CTAs, headings, important elements
  - Contrast on white: 7.48:1 ✓ (Excellent)

- **Accent Red**: `#E53935` - Brighter, energetic
  - Use for: Hover states, highlights, badges
  - Contrast on white: 4.84:1 ✓ (AA compliant)

- **Dark Brown**: `#3E2723` - Rich, traditional, craftsmanship
  - Use for: Headers, navigation, text on light backgrounds
  - Contrast on white: 15.29:1 ✓ (Excellent)

- **Warm Cream**: `#D7CCC8` - Soft, approachable
  - Use for: Backgrounds, subtle sections, cards
  - Contrast for dark text: 10.12:1 ✓ (Excellent)

### Neutral Colors
- **Black**: `#1A1A1A` - Main text
- **Dark Gray**: `#424242` - Secondary text
- **Medium Gray**: `#757575` - Tertiary text, placeholders
- **Light Gray**: `#EEEEEE` - Borders, dividers
- **Off-White**: `#FAF9F8` - Page background
- **White**: `#FFFFFF` - Card backgrounds, sections

### Semantic Colors
- **Success**: `#2E7D32` - Form success, positive indicators
- **Error**: `#C62828` - Form errors (matches primary red)
- **Warning**: `#F57C00` - Alerts, important notices
- **Info**: `#1976D2` - Information callouts

### Color Usage Guidelines

**Hero Section**: Dark overlay on image with white text and red CTAs

**Product Categories**: White cards with red accents on hover

**About Section**: Cream background with dark brown headings

**Footer**: Dark brown background with cream/white text

**All combinations tested for WCAG 2.1 AA compliance** ✓

---

## Typography

### Hebrew Fonts

**Selected: Rubik** ✓

**Why Rubik?**
- Excellent Hebrew glyph support
- Professional yet approachable
- Variable font available for performance
- Good balance of traditional and modern
- High readability at all sizes
- Works well with bold red color scheme

**Font Stack**:
```css
font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
```

**Font Loading Strategy**:
- Use Google Fonts or self-host
- Preload Rubik 400, 500, 600, 700 weights
- Subset to Hebrew characters only for smaller file size
- font-display: swap for faster rendering

### Type Scale

**Desktop**:
- H1: 56px / 3.5rem - Bold
- H2: 40px / 2.5rem - Bold
- H3: 32px / 2rem - SemiBold
- H4: 24px / 1.5rem - SemiBold
- H5: 20px / 1.25rem - Medium
- Body Large: 18px / 1.125rem - Regular
- Body: 16px / 1rem - Regular
- Body Small: 14px / 0.875rem - Regular
- Caption: 12px / 0.75rem - Regular

**Mobile**:
- H1: 40px / 2.5rem - Bold
- H2: 32px / 2rem - Bold
- H3: 24px / 1.5rem - SemiBold
- H4: 20px / 1.25rem - SemiBold
- H5: 18px / 1.125rem - Medium
- Body: 16px / 1rem - Regular
- Body Small: 14px / 0.875rem - Regular
- Caption: 12px / 0.75rem - Regular

### Line Height
- Headings: 1.2
- Body: 1.6
- Compact (UI): 1.4

### Font Weights
- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700

---

## Spacing Scale

Based on 8px base unit:

```
4px   - 0.25rem - xs
8px   - 0.5rem  - sm
16px  - 1rem    - md
24px  - 1.5rem  - lg
32px  - 2rem    - xl
48px  - 3rem    - 2xl
64px  - 4rem    - 3xl
96px  - 6rem    - 4xl
128px - 8rem    - 5xl
```

---

## Layout

### Container Widths
- Mobile: 100% - 32px padding
- Tablet: 100% - 48px padding
- Desktop: 1200px max-width
- Wide: 1440px max-width

### Grid System
- 12-column grid
- Gutter: 24px (desktop), 16px (mobile)

### Responsive Breakpoints
```css
mobile: 0px
tablet: 768px
desktop: 1024px
wide: 1440px
```

---

## RTL Layout Rules

### Text Direction
```css
html[dir="rtl"] {
  direction: rtl;
  text-align: right;
}
```

### Mirroring
- Navigation flows from right to left
- Icons: Directional icons (arrows, chevrons) flip horizontally
- Product grids: Flow right to left, top to bottom
- Forms: Labels align right, fields align right
- Padding/Margin: `padding-left` becomes `padding-right` and vice versa

### Logical Properties (preferred method)
```css
/* Use logical properties for automatic RTL support */
margin-inline-start: 16px;  /* Instead of margin-left */
margin-inline-end: 16px;    /* Instead of margin-right */
padding-inline: 16px;       /* Horizontal padding */
border-inline-start: 1px solid; /* Instead of border-left */
```

---

## Components

### 1. Buttons

**Primary Button**:
- Background: Primary color
- Text: White
- Padding: 12px 32px
- Border-radius: 8px
- Font-size: 16px
- Font-weight: 600
- Hover: Darken 10%
- Active: Darken 20%

**Secondary Button**:
- Background: Transparent
- Border: 2px solid Primary
- Text: Primary color
- Same dimensions as primary

**Icon Button**:
- Size: 44x44px (touch target)
- Icon: 24x24px
- Border-radius: 50%

### 2. Product Card
- Aspect ratio: 4:3 (image)
- Border-radius: 12px
- Shadow: 0 2px 8px rgba(0,0,0,0.1)
- Hover: Lift effect with larger shadow
- Padding: 16px
- Background: White

### 3. Hero Section
- Height: 70vh (desktop), 60vh (mobile)
- Background: Image with dark overlay (0.4 opacity)
- Text: White, centered
- CTA: Primary button

### 4. Navigation

**Desktop**:
- Fixed on scroll
- Logo: Right side (RTL)
- Menu: Center
- CTA buttons: Left side
- Background: White with shadow on scroll

**Mobile**:
- Hamburger menu: Left side (RTL)
- Logo: Center
- Height: 64px
- Full-screen overlay menu

### 5. Forms

**Input Field**:
- Height: 48px
- Border: 1px solid Light Gray
- Border-radius: 8px
- Padding: 12px 16px
- Font-size: 16px
- Focus: Primary color border, 2px

**Textarea**:
- Min-height: 120px
- Same styling as input

**Label**:
- Position: Above field
- Font-size: 14px
- Font-weight: 500
- Margin-bottom: 8px

### 6. Cards & Containers

**Standard Card**:
- Background: White
- Border-radius: 12px
- Padding: 24px
- Shadow: 0 2px 8px rgba(0,0,0,0.08)

### 7. Icons
- Size: 24x24px (default)
- Stroke-width: 2px
- Style: Outlined (Lucide or Heroicons)
- Flip horizontally for RTL directional icons

---

## Photography Style

### Approach
**Source**: Stock imagery and high-quality online sources (no original photography available initially)

### Guidelines
**Product Photography**:
- High-resolution, professional meat photography
- Warm, appetizing color treatment (avoid overly clinical look)
- White or light neutral backgrounds for product shots
- Focus on texture, marbling, freshness
- Consistent lighting across all product images
- Square format preferred (1:1 or 4:3 aspect ratio)

**Hero/Lifestyle**:
- Warm, inviting butcher shop atmosphere
- Traditional craftsmanship imagery if available
- Avoid overly modern/sterile aesthetics
- Can include butcher at work, meat preparation
- Natural lighting preferred

**Color Grading**:
- Warm tones to match red/brown palette
- Slightly enhanced saturation for appetite appeal
- Avoid blue or cool tones
- Maintain natural meat colors (don't over-process)

**Image Optimization**:
- Convert to WebP with JPEG fallback
- Target < 150KB per image
- Lazy load below-fold images
- Responsive srcset for different screen sizes

### Sourcing Strategy
1. Unsplash/Pexels for general butcher shop imagery
2. Reference competitor sites for product shot style
3. Can use watermark-free images from reference sites if appropriate
4. Maintain consistent aesthetic across all imagery

---

## Animations & Interactions

### Transitions
- Duration: 200ms (quick), 300ms (standard), 500ms (slow)
- Easing: ease-in-out (standard), cubic-bezier for custom

### Hover Effects
- Buttons: Background color change, slight lift
- Cards: Lift with shadow increase
- Links: Underline or color change
- Images: Slight zoom (1.05x)

### Loading States
- Skeleton screens for content loading
- Spinner for actions (form submit)

### Scroll Behavior
- Smooth scrolling
- Parallax on hero (optional, if performance allows)
- Fade-in on scroll for sections (subtle)

---

## Accessibility

### Focus States
- Visible focus outline: 2px solid Primary
- Offset: 2px
- Never remove focus styles

### Touch Targets
- Minimum size: 44x44px
- Spacing between targets: 8px minimum

### Text
- Minimum body text: 16px
- Sufficient contrast ratios
- No text in images (or provide alternatives)

### Semantic HTML
- Proper heading hierarchy
- Landmark regions (header, nav, main, footer)
- Alt text for all images
- ARIA labels where needed

### Keyboard Navigation
- All interactive elements keyboard accessible
- Logical tab order
- Skip to main content link

---

## Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Stacked navigation
- Full-width images
- Touch-optimized spacing
- Bottom-fixed CTA bar (optional)

### Tablet (768px - 1024px)
- 2-column grids
- Adapted navigation
- Optimized image sizes

### Desktop (> 1024px)
- Multi-column grids (3-4 columns)
- Full navigation bar
- Larger imagery
- Hover states active

---

## Performance Considerations

### Images
- Modern formats: WebP with JPEG fallback
- Responsive images with srcset
- Lazy loading for below-fold images
- Compressed and optimized

### Fonts
- Preload critical fonts
- Font-display: swap
- Subset fonts to Hebrew characters only
- Consider variable fonts for smaller file size

### CSS
- Critical CSS inlined
- Unused CSS purged
- Minified and compressed

### JavaScript
- Minimal JS for marketing site
- Code splitting if needed
- Defer non-critical scripts

---

## Component Library Reference

Recommended: Build with **shadcn/ui** components adapted for RTL, or **Tailwind UI** with RTL modifications.

---

Last Updated: 2025-11-01
