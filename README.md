# Smoodh Creative Website

A premium, Awwwards-worthy scrollytelling e-commerce website for Smoodh flavoured milk & lassi by Parlé Agro.

## Features

- **Scrollytelling Experience**: Interactive bottle rotation using HTML5 Canvas and scroll-based animations
- **Premium Animations**: Smooth transitions using Framer Motion
- **Responsive Design**: Built with Tailwind CSS for modern, responsive layouts
- **Product Showcase**: Three distinct flavors with unique themes and gradients
- **TypeScript**: Full type safety throughout the application
- **Static Export**: Optimized for Netlify Drop deployment

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Typography**: Outfit (Google Fonts)
- **Language**: TypeScript

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout with font configuration
│   └── page.tsx             # Main page with product orchestration
├── components/
│   ├── BuyNow.tsx           # E-commerce section with CTAs
│   ├── Footer.tsx           # Professional footer component
│   ├── Navbar.tsx           # Fixed navigation with glass morphism
│   ├── ProductBottleScroll.tsx # Canvas-based scroll animation
│   ├── ProductDetails.tsx   # Product information and features
│   └── ProductTextOverlays.tsx # Scroll-triggered text overlays
├── data/
│   └── products.ts          # Product data and marketing copy
├── public/
│   └── images/
│       ├── lassi/           # Lassi product images (1.webp - 120.webp)
│       ├── chocolate/       # Chocolate product images (1.webp - 120.webp)
│       └── chocolate-hazelnut/ # Chocolate Hazelnut images (1.webp - 120.webp)
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add product images:
   - Place 120 webp images (1.webp to 120.webp) for each product in:
   - `public/images/lassi/`
   - `public/images/chocolate/`
   - `public/images/chocolate-hazelnut/`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` directory, ready for deployment.

## Image Requirements

For the best scrollytelling experience, each product needs:

- **120 frames** of bottle rotation (named `1.webp` through `120.webp`)
- **Recommended size**: 800x1200px per frame
- **Format**: WebP for optimal performance
- **Content**: 360° bottle rotation on a transparent or consistent background

## Deployment

This project is configured for static export and works perfectly with:

- **Netlify Drop**: Simply drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `out` folder as the publishing source

## Customization

### Adding New Products

1. Update `data/products.ts` with new product data
2. Add corresponding image folder in `public/images/`
3. The navigation menu will automatically update

### Modifying Colors

Update the theme colors in `data/products.ts`:
- `themeColor`: Primary brand color
- `gradient`: Background gradient for each product

### Animation Timing

Adjust scroll trigger points in `ProductTextOverlays.tsx`:
```typescript
const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0])
```

## Performance Notes

- Images are loaded on-demand per product
- Canvas rendering uses `requestAnimationFrame` for smooth 60fps
- Framer Motion handles all animations efficiently
- Static export ensures optimal loading times

## License

© 2024 Smoodh by Parlé Agro. All rights reserved.

---

**Built with ❤️ for premium beverage experiences**
