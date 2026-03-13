# Global MREA Platform

A modern, institutional-grade web platform for the Muslim Real Estate Association, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Multi-Tenant Chapter Architecture**: Dynamic chapter pages with localized content
- **Event Management**: Global and local event filtering with ticketing integration
- **Membership Portal**: Tiered membership options for professionals, corporates, and investors
- **Institutional Design**: Professional color scheme (Deep Navy, Gold, Charcoal)
- **Responsive Design**: Mobile-first approach for professionals on the move
- **Search Functionality**: Find chapters by city, region, or country

## Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/           # API routes
│   ├── chapters/      # Chapter pages
│   ├── events/        # Events page
│   ├── membership/    # Membership page
│   └── page.tsx       # Home page
├── components/        # Reusable components
│   ├── Navbar.tsx
│   └── Footer.tsx
└── app/
    ├── globals.css
    └── layout.tsx
```

## Key Components

- **Navbar**: Global navigation with mobile menu
- **Footer**: Site footer with links and contact info
- **HomeView**: Landing page with hero, stats, and pillars
- **ChaptersView**: Chapter directory with search
- **ChapterDetailView**: Individual chapter pages
- **EventsView**: Event listing with filters

## Design System

- **Colors**:
  - Navy: #0B1A30
  - Gold: #D4AF37
  - Charcoal: #333333
  - Light Gray: #F5F7FA
- **Typography**: Serif for headings, sans-serif for body
- **Layout**: Max-width containers with responsive grids

## Future Enhancements

- Integration with headless CMS (Strapi/Sanity)
- CRM integration (HubSpot/Salesforce)
- Payment processing (Stripe)
- Member authentication
- Admin dashboard
- API for mobile apps

## Contributing

This platform is designed to be scalable and maintainable. Follow the existing patterns for components and pages.