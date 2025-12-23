# רוני טסה - Butcher Shop Website

A modern, Hebrew RTL website for Roni Tassa's boutique butcher shop in Ramat Gan, Israel.

## 🚀 Tech Stack

- **Astro 5.15.3** - Fast, content-focused static site generator
- **Tailwind CSS v4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **HTML/CSS** - Semantic, accessible markup

## 📋 Features

- ✅ Fully Hebrew, RTL layout
- ✅ Responsive design (mobile-first)
- ✅ SEO optimized with meta tags
- ✅ Accessible (WCAG 2.1 AA)
- ✅ 7 pages: Home, About, 4 Product Categories, Contact
- ✅ Product cards with images and cooking methods
- ✅ Google Maps integration
- ✅ Click-to-call and WhatsApp integration
- ✅ Fast loading with optimized images

## 🏗️ Project Structure

```
/
├── public/
│   └── images/
│       ├── logo.png
│       ├── categories/   # Category hero images
│       └── products/     # Product images
├── src/
│   ├── components/
│   │   └── ProductCard.astro
│   ├── data/
│   │   ├── products.json      # All products and categories
│   │   └── site-info.json     # Business info and contact
│   ├── layouts/
│   │   └── BaseLayout.astro   # Main layout with header/footer
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── contact.astro      # Contact page
│   │   └── products/
│   │       ├── beef.astro
│   │       ├── lamb.astro
│   │       ├── chicken.astro
│   │       └── homemade.astro
│   └── styles/
│       └── global.css          # Global styles and design tokens
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Dev Server

The site runs on `http://localhost:4321` by default.

## 📦 Deployment to tiny.host

### Option 1: Build and Upload

```bash
# Build the site
npm run build

# The dist/ folder contains your static site
# Upload the contents of dist/ to tiny.host via FTP/SFTP
```

### Option 2: Using Git (if supported)

```bash
# Build first
npm run build

# Commit the dist folder
git add dist/
git commit -m "Production build"
git push
```

## 📝 Content Management

### Updating Products

Edit `src/data/products.json` to add/modify products:

```json
{
  "id": "new-product",
  "name": "שם המוצר",
  "cutType": "סוג החיתוך",
  "description": "תיאור המוצר",
  "suggestedUse": "שימושים מומלצים",
  "cookingMethods": ["grill", "oven"],
  "image": "/images/products/product.jpg",
  "badge": "recommended"
}
```

### Updating Site Info

Edit `src/data/site-info.json` for:
- Contact information
- Address and hours
- SEO metadata

### Adding Images

1. Add images to `public/images/` folder
2. Reference them in JSON files with path starting with `/images/`

## 🎨 Design System

### Colors

- **Primary Red**: `#C62828`
- **Accent Red**: `#E53935`
- **Brown**: `#3E2723`
- **Cream**: `#D7CCC8`
- **Off-White**: `#F5F5F5`

### Typography

- **Font**: Rubik (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)

## 🔍 SEO

Each page includes:
- Descriptive titles with keywords
- Meta descriptions (150-160 characters)
- Open Graph tags for social sharing
- Semantic HTML structure
- Hebrew-specific keywords

## ♿ Accessibility

- Skip-to-content link
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Alt text for images

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## 📞 Contact Information

**Roni Tassa Butcher Shop**
- Address: Shalem 12, Ramat Gan
- Phone: 03-631-1099
- WhatsApp: 052-871-8138
- Hours: Sun-Thu 7:30-18:30, Fri 7:30-13:30, Sat Closed

## 📄 License

© 2025 Roni Tassa. All rights reserved.

## 🤝 Support

For technical issues or updates, contact the development team or refer to the project documentation.

---

Built with ❤️ for quality meat and great service
