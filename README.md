# Met Maestro - Landing Page

A modern, responsive landing page for the Met Maestro ultimate metronome app, built with React, Vite, and Styled Components.

## Features

- **Modern Design**: Dark theme with purple accent colors (#BB86FC)
- **Responsive Layout**: Mobile-first design with breakpoints for tablet and desktop
- **Interactive Components**: Smooth animations with Framer Motion
- **Three Mode Showcase**: Interactive demonstrations of Met, Show, and Tuner modes
- **Performance Optimized**: Built with Vite for fast development and production builds

## Tech Stack

- **React 18+**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Styled Components**: CSS-in-JS for component styling
- **Framer Motion**: Smooth animations and transitions
- **Inter Font**: Clean, modern typography

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Hero/              # Hero section with animated metronome
│   ├── Modes/             # Mode selector and individual mode components
│   │   ├── MetMode/       # Metronome mode showcase
│   │   ├── ShowMode/      # Show builder mode showcase
│   │   └── TunerMode/     # Tuner mode showcase
│   ├── Features/          # Feature highlights grid
│   ├── Benefits/          # Key value propositions
│   ├── Testimonials/      # User testimonials and stats
│   └── CTA/              # Call-to-action section
├── layouts/
│   ├── Header/           # Navigation header
│   └── Footer/           # Footer with links
├── styles/
│   ├── theme.js         # Theme configuration
│   └── globalStyles.js  # Global styles
└── App.jsx              # Main app component
```

## Design System

### Colors
- **Background**: #121212 (Dark)
- **Surface**: #1E1E1E (Slightly lighter)
- **Accent**: #BB86FC (Purple)
- **Text Primary**: #FFFFFF
- **Text Secondary**: rgba(255, 255, 255, 0.7)

### Spacing
- **xs**: 0.5rem
- **sm**: 1rem
- **md**: 1.5rem
- **lg**: 2rem
- **xl**: 3rem
- **xxl**: 4rem

### Breakpoints
- **Mobile**: 320px+
- **Tablet**: 768px+
- **Desktop**: 1024px+

## Key Sections

1. **Hero Section**: Main value proposition with animated metronome
2. **Mode Selector**: Interactive showcase of the three app modes
3. **Features**: Grid of key features with hover effects
4. **Benefits**: Value propositions with visual elements
5. **Testimonials**: User reviews and app statistics
6. **CTA**: Download section with platform availability

## Development

- Uses ESLint for code linting
- Responsive design with mobile-first approach
- Optimized for accessibility (WCAG 2.1 AA)
- Performance optimized with code splitting
- SEO-friendly with proper meta tags

## Deployment

The project is ready for deployment to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

```bash
npm run build
```

The built files will be in the `dist/` directory. 