# BOTOL - Premium Hydration Solutions

## Project Overview

BOTOL is a modern, responsive web application showcasing premium hydration products including vacuum bottles, fridge bottles & jugs, borosilicate bottles, and kettles. Built with Next.js 15 and React 19, featuring smooth GSAP animations and a beautiful, user-friendly interface.

## Features

### Design & User Experience

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: GSAP-powered bottle opening animations
- **Modern UI**: Clean, professional design with gradient backgrounds
- **Interactive Elements**: Hover effects and smooth transitions

### Pages & Sections

- **Hero Section**: Animated bottle opening sequence with call-to-action
- **Product Showcase**: Grid layout displaying premium bottles
- **About Us**: Company information with background imagery
- **FAQ Section**: Frequently asked questions
- **Contact Form**: Customer inquiry system
- **Footer**: Complete site navigation and social links

### Product Categories

- **Vacuum Bottles**: Premium insulated containers
- **Fridge Bottles & Jugs**: Refrigeration solutions
- **Borosilicate Bottles**: High-quality glass containers
- **Kettles**: Premium heating solutions

## Technology Stack

### Frontend

- **Next.js 15.4.5**: React framework with App Router
- **React 19.1.0**: Latest React version
- **TypeScript 5**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **GSAP 3.13.0**: Professional animations

### Development Tools

- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing
- **Node.js 22.17.0**: Runtime environment

## Installation & Setup

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager

### Quick Start

```bash
# Clone the repository
git clone [repository-url]
cd botol

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
botol/
├── public/                 # Static assets
│   ├── assets/            # Images and icons
│   └── *.jpg              # Product images
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── components/    # Page-specific components
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # Reusable components
│   │   ├── Product.tsx    # Product card component
│   │   ├── AboutUs.tsx    # About section
│   │   └── svg/           # SVG components
│   └── common/            # Shared components
└── package.json           # Dependencies and scripts
```

## Key Components

### Home Page (src/app/page.tsx)

- **Hero Animation**: GSAP-powered bottle opening sequence
- **Product Grid**: Responsive product showcase
- **Interactive Elements**: Smooth scroll and hover effects

### Product Component (src/components/Product.tsx)

- **Responsive Design**: Adapts to all screen sizes
- **Image Optimization**: Next.js Image component
- **Call-to-Action**: Learn More buttons with event handling

### SVG Components (src/components/svg/bottle/)

- **Bottle2.tsx**: Animated bottle graphics
- **Bottle3.tsx**: Premium bottle designs
- **BottleCap.tsx**: Cap animations
- **BottleDown.tsx**: Bottom section graphics

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repository for automatic deployments
```

### Environment Variables

- No environment variables required for basic functionality
- Configure in Vercel dashboard for production optimizations

## Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Bundle Size**: Optimized for fast loading times

## Development Guidelines

### Code Quality

- TypeScript for type safety
- ESLint for code consistency
- Responsive design principles
- Accessibility best practices

### Animation Guidelines

- GSAP for complex animations
- CSS transitions for simple effects
- Performance-optimized animations
- Mobile-friendly interactions

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For technical support or questions, please contact the development team.

---

**Last Updated**: August 2024  
**Version**: 1.0.0  
**Status**: Production Ready
