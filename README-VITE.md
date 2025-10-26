# Luminix - Vite Single Page Application

This project has been successfully converted from Next.js to Vite, featuring the **home-2** layout as the main homepage.

## What Changed

### Migration from Next.js to Vite
- Removed all Next.js specific code and dependencies
- Converted to a standard React + Vite application
- All unnecessary pages and components have been removed
- Only the home-2 page is kept as the main single-page application

### Removed Components
- home-1 and home-3 variants
- All extra pages (about, blog, career, contact, faq, portfolio, pricing, service, team, testimonial, etc.)
- Next.js routing system
- Next.js Image component (replaced with standard `<img>` tags)
- Next.js Link component (replaced with custom Link component that scrolls to top)

### Project Structure
```
/Users/khalidbaba/Downloads/luminix-business-consulting-react-next-js-templa-2025-10-23-14-03-34-utc/luminix-nextjs-update
├── src/
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   ├── components/
│   │   └── homes/
│   │       └── home-2/         # Home page components
│   ├── layouts/
│   │   ├── headers/HeaderTwo.tsx
│   │   ├── footers/FooterTwo.tsx
│   │   └── Wrapper.tsx
│   ├── common/                 # Shared components
│   ├── data/                   # Data files
│   └── styles/                 # Global styles
├── public/                     # Static assets
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
└── package.json

```

## Getting Started

### Install Dependencies
```bash
npm install --legacy-peer-deps
```

### Development Server
```bash
npm run dev
```
The app will run on [http://localhost:5173](http://localhost:5173) (Vite's default port)

### Production Build
```bash
npm run build
```
The built files will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## Important Notes

- **TypeScript has been removed**: This project uses pure JavaScript with JSX
- No `tsconfig.json` files are needed
- All `.tsx` and `.ts` files remain but are processed as JSX/JS by Vite
- **CSS Files**: All stylesheets are loaded via the `index.html` file from `/public/assets/css/`
- **Port**: The development server runs on `http://localhost:5173` (Vite's default port)
- **Animations**: AOS (Animate On Scroll) is initialized automatically in App.tsx
- **Custom Styles**: Additional fixes in `src/styles/globals.css` for:
  - Removed text underlines from all links
  - Fixed slider text colors (white text on hero slider)

## Key Features

- Single-page application using home-2 as the homepage
- Fast development with Vite HMR (Hot Module Replacement)
- Optimized production builds
- All original home-2 sections:
  - Hero slider
  - About section
  - Why Choose Us
  - Services
  - Portfolio
  - Testimonials
  - Blog
  - CTA section
  - Footer

## Notes

- All Next.js dependencies have been removed
- TypeScript has been completely removed for a simpler setup
- Images are served from the `/public/assets` directory
- Links no longer navigate to different pages; they scroll to the top of the page
- File extensions remain as `.tsx` and `.ts` but are processed as JavaScript by Vite

## Technologies Used

- React 19
- Vite 6
- Bootstrap 5.3
- React Slick (for carousels)
- AOS (Animate On Scroll)
- React Toastify
- React Hook Form

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)
