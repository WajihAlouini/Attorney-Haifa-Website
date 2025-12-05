# Maître Haifa Guedhami Alouini - Official Website

A premium, high-performance legal portfolio website for Maître Haifa Guedhami Alouini, an Attorney at Law based in Tunisia. This application is built with modern web technologies to maximize SEO, accessibility, and user experience.

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) (Fast HMR & Build)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict typing for reliability)
- **CSS**: Modern Modular CSS with CSS Variables (No external UI libraries)
- **SEO**: `react-helmet-async` for dynamic metadata management
- **Accessibility**: A11y-first design with proper ARIA attributes and keyboard navigation
- **Performance**: Code splitting (lazy loading), image optimization, and Web Vitals monitoring

## 📂 Project Structure

```bash
src/
├── components/     # Reusable UI components (Button, Modal, Toast, etc.)
├── data/           # Static content & Translations (locales/)
├── features/       # Feature-specific components (Contact, Hero, Review)
├── hooks/          # Custom React Hooks
├── layouts/        # Layout wrappers (MainLayout)
├── pages/          # Route views (Home, NotFound)
├── styles/         # Modular CSS system
│   ├── index.css   # Main entry point
│   ├── base.css    # Resets & Typography
│   └── ...         # Animations, Layout, Components
└── utils/          # Helper functions (Performance metrics, etc.)
```

## 🛠️ Scripts

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start local development server http://localhost:5173 |
| `npm run build`   | Build production-ready bundle to `/dist`             |
| `npm run preview` | Preview production build locally                     |
| `npm run lint`    | Run ESLint to check code quality                     |
| `npm run format`  | Format codebase with Prettier                        |
| `npm run test`    | Run unit tests with Vitest                           |

## ⚡ Performance Optimizations

This project employs several advanced techniques to ensure a fast, "Senior Developer" grade experience:

1.  **Lazy Loading**: Below-the-fold sections (Gallery, Reviews, Map) and the 404 page are code-split and loaded only when needed.
2.  **Modular CSS**: Styles are scoped or modularized to prevent unused CSS bloat.
3.  **Core Web Vitals**: Built-in Web Vitals reporting (LCP, FID, CLS) to Google Analytics.
4.  **Static Asset Preloading**: Critical fonts and assets are preloaded (where applicable).

## 🌍 Localization

The site is fully multilingual (English, French, Arabic):

- **Architecture**: Locale-based routing/state.
- **Data**: Content lives in `src/data/locales/*.ts`.
- **RTL Support**: Built-in support for Arabic layouts.

## 🤝 Contributing

1.  Ensure you have Node.js (v18+) installed.
2.  Clone the repository.
3.  Run `npm install`.
4.  Run `npm run dev` to start coding.
5.  **Strict Rule**: Always run `npm run format` before committing.

## 📄 License

© 2025 Maître Haifa Guedhami Alouini. All Rights Reserved.
