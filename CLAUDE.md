# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Status

This is a **professional portfolio website** built with Next.js, TypeScript, and Tailwind CSS. The project features a complete portfolio with sections for Hero, About, Skills, Experience, Projects, and Contact. All components are fully functional with responsive design, dark mode support, and modern animations.

## Technology Stack

- **Framework**: Next.js 15.3.5 with App Router
- **Runtime**: React 19.0.0
- **Language**: TypeScript 5 (strict mode)
- **Styling**: Tailwind CSS v4
- **Build Tool**: Turbopack (for development)
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Package Manager**: npm
- **Images**: Next.js Image optimization with external sources
- **State Management**: React hooks (useState, useEffect)

## Development Commands

- `npm run dev` - Start development server with Turbopack (http://localhost:3000)
- `npm run build` - Build production version
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
app/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── Button.tsx         # Button with variants (primary, secondary, outline)
│   │   ├── Card.tsx           # Card component with optional images
│   │   ├── Container.tsx      # Responsive container wrapper
│   │   └── ImageWithFallback.tsx # Image component with loading & error states
│   ├── layout/                # Layout components
│   │   ├── Header.tsx         # Fixed header with navigation
│   │   ├── Footer.tsx         # Footer with contact info & links
│   │   └── Navigation.tsx     # Responsive nav with active states
│   └── sections/              # Main page sections
│       ├── Hero.tsx           # Landing section with background image
│       ├── About.tsx          # About section with profile image
│       ├── Skills.tsx         # Skills with technology icons
│       ├── Experience.tsx     # Work experience timeline
│       ├── Projects.tsx       # Project showcase with images
│       └── Contact.tsx        # Contact form with state management
├── data/
│   └── portfolio.ts           # All static data (projects, skills, etc.)
├── types/
│   └── index.ts               # TypeScript interfaces & types
├── globals.css                # Global styles & CSS variables
├── layout.tsx                 # Root layout with SEO metadata
└── page.tsx                   # Main page combining all sections
```

## Architecture & Design Patterns

### **Component Organization**
- **UI Components**: Reusable, generic components (Button, Card, Container)
- **Layout Components**: Page structure components (Header, Footer, Navigation)
- **Section Components**: Page-specific sections (Hero, About, Skills, etc.)

### **Data Management**
- **Centralized Data**: All content in `data/portfolio.ts`
- **Type Safety**: Full TypeScript interfaces in `types/index.ts`
- **Separation of Concerns**: UI logic separate from content

### **Styling Approach**
- **Tailwind CSS**: Utility-first CSS framework
- **CSS Variables**: Custom properties for theming
- **Dark Mode**: Automatic theme switching based on system preferences
- **Responsive Design**: Mobile-first approach

### **Performance Optimizations**
- **Next.js Image**: Automatic image optimization
- **Font Optimization**: Font display swap for better loading
- **Component Lazy Loading**: Efficient rendering
- **External Image Caching**: Configured remote patterns

## Key Features

### **Navigation**
- Sticky header with backdrop blur effect
- Active section highlighting during scroll
- Responsive mobile menu with smooth animations
- Smooth scrolling between sections

### **Interactive Elements**
- Contact form with state management & validation
- Loading states for form submission
- Success/error feedback messages
- Image loading states with fallbacks

### **Visual Design**
- Professional color scheme with blue accent
- Consistent typography hierarchy
- Card-based layouts with hover effects
- Technology icons from DevIcons CDN
- High-quality stock photos from Unsplash

### **SEO & Accessibility**
- Complete metadata for social sharing
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- ARIA labels for interactive elements
- Focus states for keyboard navigation

## External Resources

### **Images**
- **Background**: Technology-themed from Unsplash
- **Projects**: Web development mockups from Unsplash
- **Profile**: Professional headshots from Unsplash
- **Icons**: Technology logos from DevIcons CDN

### **Configured Domains**
- `images.unsplash.com` - Stock photography
- `cdn.jsdelivr.net/gh/devicons/devicon` - Technology icons

## Development Guidelines

### **Code Style**
- Use TypeScript interfaces from `types/index.ts`
- Import data from `data/portfolio.ts`
- Follow existing component patterns
- Use Tailwind classes consistently
- Keep components focused and reusable

### **Content Updates**
- **Personal Info**: Update `personalInfo` in `data/portfolio.ts`
- **Projects**: Modify `projects` array with new project data
- **Skills**: Update `skillCategories` and `techIcons`
- **Experience**: Modify `experiences` array
- **Contact**: Update `contactInfo` object

### **Adding New Sections**
1. Create component in `app/components/sections/`
2. Add data to `data/portfolio.ts`
3. Import and add to `page.tsx`
4. Update navigation in `navigationItems`

### **Styling Conventions**
- Use `Container` component for consistent spacing
- Use `Card` component for content blocks
- Use `Button` component with appropriate variants
- Follow the established color scheme and spacing

## Image Management

### **Image Optimization**
- All images use Next.js Image component
- External images configured in `next.config.ts`
- Loading states and error handling implemented
- Responsive sizing with proper alt text

### **Fallback Strategy**
- `ImageWithFallback` component handles errors gracefully
- Loading spinners during image fetch
- Fallback indicators for failed images

## Performance Considerations

- **Bundle Size**: Optimized with Next.js automatic splitting
- **Image Loading**: Lazy loading for non-critical images
- **Font Loading**: Display swap for faster text rendering
- **CSS**: Utility-first approach minimizes unused styles

## Common Tasks

### **Update Portfolio Content**
1. Modify data in `data/portfolio.ts`
2. Update images in `personalInfo` object
3. Add new projects to `projects` array
4. Update skills in `skillCategories`

### **Change Color Scheme**
1. Update CSS variables in `globals.css`
2. Modify `colors` object in `data/portfolio.ts`
3. Update Tailwind classes in components

### **Add New Features**
1. Create types in `types/index.ts`
2. Add data to `data/portfolio.ts`
3. Create new components following existing patterns
4. Update layout if needed

This is a production-ready portfolio website with professional design and modern development practices.