# Lawyer Website - Haifa Guedhami Alouini

A modern, professional website for a law firm built with React, featuring a clean architecture and best practices.

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── common/         # Shared utility components (Analytics, Cookies, etc.)
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections (Hero, About, Contact, etc.)
│   └── ui/             # Reusable UI components
├── data/               # Static data and constants
├── hooks/              # Custom React hooks
├── layouts/            # Page layout wrappers
├── pages/              # Page components
├── services/           # API and external service integrations
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── styles/             # Legacy global styles (being phased out)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GOOGLE_PLACES_KEY=your_google_places_api_key
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key
```

## 🎨 Architecture Decisions

### CSS Modules

All components use CSS Modules for scoped styling, preventing global style conflicts and improving maintainability.

### Custom Hooks

Business logic is extracted into reusable hooks:

- `useGoogleReviews` - Fetches and manages Google reviews
- `useScrollProgress` - Manages scroll position and scroll-to-top
- `useMagneticButton` - Implements magnetic button effects
- `useScrollAnimation` - Handles scroll-based animations

### Clean Architecture

- **Separation of Concerns**: Components, logic, and data are clearly separated
- **Service Layer**: External API calls are isolated in the `services` directory
- **Type Safety**: TypeScript types ensure data consistency
- **Path Aliases**: `@/` prefix for cleaner imports

## 🧪 Testing

Tests are written using Vitest and React Testing Library:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📦 Build & Deployment

The project uses Vite for building and is optimized for production:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### CI/CD

GitHub Actions automatically:

- Runs linting on every push
- Runs tests on pull requests
- Builds and deploys to production on merge to main

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Type Safety**: TypeScript
- **Testing**: Vitest + React Testing Library
- **Linting**: ESLint
- **CI/CD**: GitHub Actions

## 📝 Code Style

- **Component Structure**: Functional components with hooks
- **Naming**: PascalCase for components, camelCase for functions
- **File Organization**: Co-located styles with components
- **Imports**: Absolute imports using `@/` alias

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Ensure tests pass and linting is clean
4. Submit a pull request

## 📄 License

All rights reserved © 2025 Haifa Guedhami Alouini

## 👨‍💻 Developer

Developed by [Wajih Mokhtar Alouini](https://www.linkedin.com/in/wajih-mokhtar-alouini-8a7259231/)
