# Roni Tassa Butcher Shop Website

A modern, premium website for Roni Tassa's butcher shop, featuring a dark aesthetic and showcasing quality meat products.

## 🥩 About

Roni Tassa is a family-owned butcher shop with over 50 years of tradition, specializing in:
- Premium aged beef
- Fresh lamb and sheep
- Quality chicken
- Homemade products (sausages, burgers, meatballs)

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: Vanilla CSS with custom design system
- **Deployment**: Ready for static hosting (Netlify, Vercel, etc.)

## 📁 Project Structure

```
ronitassa/
├── website/                 # Main Astro application
│   ├── public/             # Static assets
│   │   └── images/         # Product and category images
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── data/           # Product data and site info
│   │   ├── layouts/        # Page layouts
│   │   ├── pages/          # Route pages
│   │   └── styles/         # Global styles
│   └── astro.config.mjs    # Astro configuration
└── Documentation files (.md)
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
cd website
pnpm install
```
(pnpm is the project standard; npm still works if needed.)

### Running Locally

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

### Building for Production

```bash
pnpm build
```

The built site will be in the `dist/` directory.

## 📝 Features

- **Product Categories**: Beef, Lamb, Chicken, Homemade
- **Dark Premium Design**: Moody, cinematic aesthetic
- **Responsive Layout**: Mobile-first design
- **WhatsApp Integration**: Direct ordering via WhatsApp
- **Kosher Certification**: Displayed prominently in header
- **Contact Page**: Location, hours, and Google Maps integration
