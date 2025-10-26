# Order Flow Trading System™

## Overview
This is a React-based landing page for the Order Flow Trading System™, a comprehensive trading education product. The site is designed to convert visitors into customers by showcasing the value of institutional-level trading education.

**Purpose:** Sales landing page for trading education system  
**Current State:** Fully functional, running in Replit environment  
**Technology Stack:** React 18, Vite 5, TypeScript, Tailwind CSS, shadcn/ui components

## Recent Changes (October 26, 2025)
- ✅ Imported from GitHub repository
- ✅ Configured for Replit environment
- ✅ Updated Vite configuration to use port 5000 with 0.0.0.0 host
- ✅ Configured HMR (Hot Module Replacement) for Replit's proxy environment using REPLIT_DEV_DOMAIN
- ✅ Fixed HMR WebSocket to connect via WSS on port 443 to Replit domain
- ✅ Configured preview server to respect PORT environment variable for deployment
- ✅ Installed all npm dependencies (384 packages)
- ✅ Set up development workflow (Server)
- ✅ Added .gitignore for Node.js projects
- ✅ Configured deployment for autoscale with proper build and preview commands

## Project Architecture

### Frontend Structure
- **Framework:** React 18.3 with TypeScript
- **Build Tool:** Vite 5.4
- **Styling:** Tailwind CSS with custom theme
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router v6
- **State Management:** TanStack Query (React Query)
- **Animations:** Framer Motion

### Key Directories
```
/src
  /components - Reusable UI components
    /ui - shadcn/ui component library
  /pages - Page components (Index, NotFound)
  /hooks - Custom React hooks
  /lib - Utility functions
  /assets - Images and static assets
/public - Public assets (favicon, robots.txt)
```

### Development Configuration
- **Dev Server:** Runs on port 5000 (0.0.0.0)
- **HMR:** WebSocket Secure (WSS) on port 443
- **Hot Reload:** Enabled via Vite
- **Component Tagger:** Lovable development tool (dev mode only)

## Running the Project

### Development
The project automatically runs via the "Server" workflow when you open it in Replit.

To manually start:
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Key Features
1. **Hero Section** - Eye-catching headline with CTA
2. **Social Proof** - Ratings, testimonials, verified reviews
3. **Problem/Solution Framework** - Addresses trader pain points
4. **Testimonials** - Real user success stories
5. **FAQ Section** - Addresses common objections
6. **Guarantee** - Risk reversal strategy
7. **Sticky Bottom CTA** - Persistent call-to-action

## Dependencies
- **React & React DOM:** Core framework
- **Radix UI:** Accessible component primitives
- **Tailwind CSS:** Utility-first styling
- **Framer Motion:** Animation library
- **React Router:** Client-side routing
- **Zod & React Hook Form:** Form validation
- **Lucide React:** Icon library

## Deployment
This site is configured for deployment on Replit. Use the deployment configuration to publish to production.

**Deployment Type:** Autoscale (static website)
**Build Command:** `npm run build`
**Start Command:** `npm run preview` (or static file serving)

## Notes
- The site uses custom fonts from Google Fonts (Montserrat, Inter, Lato)
- SEO metadata is included in index.html
- Structured data (Schema.org) for product rating
- All images should be optimized for web
- The site is fully responsive (mobile-first design)
