# Architecture Documentation

## Overview

This project follows **Clean Architecture** principles with a focus on maintainability, scalability, and testability.

## Directory Structure

### `/src/components`

#### `/components/common`

Shared utility components used across the application:

- `BookingModal` - Online booking interface
- `CalComWidget` - Calendar integration
- `CookieConsent` - GDPR compliance
- `ErrorBoundary` - Error handling wrapper
- `GoogleAnalytics` - Analytics tracking

#### `/components/layout`

Layout components that define the page structure:

- `Header` - Navigation and branding
- `Footer` - Footer with credits and links

#### `/components/sections`

Page sections that compose the main content:

- `Hero` - Landing section with CTA
- `About` - Firm introduction
- `PracticeAreas` - Legal services
- `Values` - Core principles
- `Approach` - Process methodology
- `Reviews` - Client testimonials
- `Impact` - Statistics showcase
- `FAQ` - Frequently asked questions
- `Contact` - Contact form and map
- `Gallery` - Office photos

#### `/components/ui`

Reusable UI components:

- `LoadingFallback` - Loading state indicator

### `/src/hooks`

Custom React hooks for reusable logic:

- `useGoogleReviews` - Fetches reviews from Google Places API
- `useScrollProgress` - Tracks scroll position
- `useMagneticButton` - Implements magnetic hover effect
- `useScrollAnimation` - Manages scroll-triggered animations

### `/src/services`

External service integrations:

- `googlePlaces.js` - Google Places API client

### `/src/data`

Static data and configuration:

- `translations.js` - Multi-language content
- `constants.js` - App-wide constants

### `/src/utils`

Utility functions:

- `analyticsHelpers.js` - Analytics event tracking
- `performance.js` - Performance monitoring

### `/src/layouts`

Page layout wrappers:

- `MainLayout` - Main application layout with header/footer

### `/src/pages`

Page-level components:

- `Home` - Main landing page

### `/src/types`

TypeScript type definitions for the entire application

## Design Patterns

### Component Composition

Components are composed hierarchically:

```
App
└── MainLayout
    └── Home
        ├── Hero
        ├── About
        ├── PracticeAreas
        └── ...
```

### CSS Modules

Each component has its own scoped CSS module:

```
Hero.jsx
Hero.module.css
```

### Custom Hooks Pattern

Business logic is extracted into hooks:

```javascript
// In component
const { reviews, isLoading } = useGoogleReviews(locale, languageCode);

// Hook handles all the complexity
export function useGoogleReviews(locale, languageCode) {
  // State management
  // API calls
  // Error handling
  return { reviews, isLoading };
}
```

### Service Layer

External APIs are abstracted:

```javascript
// Component uses service
import { fetchGoogleReviews } from "@/services/googlePlaces";

// Service handles API details
export const fetchGoogleReviews = async (placeId, apiKey) => {
  // API implementation
};
```

## Data Flow

1. **User Interaction** → Component
2. **Component** → Custom Hook
3. **Custom Hook** → Service
4. **Service** → External API
5. **External API** → Service
6. **Service** → Custom Hook
7. **Custom Hook** → Component
8. **Component** → UI Update

## State Management

- **Local State**: `useState` for component-specific state
- **Shared State**: Props drilling (simple app, no need for Context/Redux)
- **Server State**: Custom hooks manage API data

## Styling Strategy

- **CSS Modules**: Component-scoped styles
- **Global Styles**: `index.css` for resets and variables
- **Utility Classes**: `App.css` for shared utilities
- **No CSS-in-JS**: Keeping styles in CSS for performance

## Testing Strategy

- **Unit Tests**: Individual components and hooks
- **Integration Tests**: Component interactions
- **E2E Tests**: Critical user flows (future)

## Performance Optimizations

- **Code Splitting**: Lazy loading for routes
- **Image Optimization**: Lazy loading images
- **Bundle Optimization**: Vite's automatic chunking
- **Memoization**: React.memo for expensive components (when needed)

## Accessibility

- **Semantic HTML**: Proper element usage
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard support
- **Focus Management**: Proper focus indicators

## SEO

- **Meta Tags**: Proper title and description
- **Semantic Structure**: H1-H6 hierarchy
- **Performance**: Fast load times
- **Mobile-First**: Responsive design

## Future Improvements

1. **TypeScript Migration**: Full type safety (in progress)
2. **Testing Coverage**: Increase to 80%+
3. **Performance Monitoring**: Add real user monitoring
4. **A11y Audit**: WCAG 2.1 AA compliance
5. **Internationalization**: Better i18n solution
