# Contributing Guide

## Getting Started

1. **Fork the repository**
2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Attorney-Haifa-Website.git
   cd Attorney-Haifa-Website
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### 1. Code Style

- Follow the existing code style
- Use ESLint for linting: `npm run lint`
- Use Prettier for formatting (if configured)
- Write meaningful commit messages

### 2. Component Guidelines

#### Creating a New Component

```javascript
// src/components/sections/NewSection.jsx
import styles from "./NewSection.module.css";

export function NewSection({ t }) {
  return (
    <section className={styles.section}>
      <div className="section-header">
        <p className="section-eyebrow">{t.eyebrow}</p>
        <h2>{t.heading}</h2>
      </div>
      {/* Component content */}
    </section>
  );
}
```

```css
/* src/components/sections/NewSection.module.css */
.section {
  /* Scoped styles */
}
```

#### Component Checklist

- [ ] Uses CSS Modules for styling
- [ ] Accepts `t` (translations) as prop
- [ ] Has proper TypeScript types (if using TS)
- [ ] Includes accessibility attributes
- [ ] Is responsive (mobile-first)
- [ ] Has a test file

### 3. Custom Hooks

When creating a custom hook:

```javascript
// src/hooks/useCustomHook.js
import { useState, useEffect } from "react";

export function useCustomHook(dependency) {
  const [state, setState] = useState(null);

  useEffect(() => {
    // Hook logic
  }, [dependency]);

  return { state };
}
```

### 4. Testing

Write tests for new components:

```javascript
// Component.test.jsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Component } from "./Component";

describe("Component", () => {
  it("renders correctly", () => {
    render(<Component />);
    expect(screen.getByText(/expected text/i)).toBeInTheDocument();
  });
});
```

Run tests:

```bash
npm test
```

### 5. Commit Messages

Follow conventional commits:

```
feat: add new contact form validation
fix: resolve mobile menu overflow issue
docs: update README with setup instructions
style: format code with prettier
refactor: extract form logic into custom hook
test: add tests for Hero component
chore: update dependencies
```

## Pull Request Process

1. **Update your branch**

   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Run checks**

   ```bash
   npm run lint
   npm test
   npm run build
   ```

3. **Push your changes**

   ```bash
   git push origin feature/your-feature-name
   ```

4. **Create Pull Request**

   - Use a clear title
   - Describe what changed and why
   - Reference any related issues
   - Add screenshots for UI changes

5. **Code Review**
   - Address reviewer feedback
   - Keep commits clean and organized

## Project Standards

### File Naming

- Components: `PascalCase.jsx`
- Hooks: `useCamelCase.js`
- Utils: `camelCase.js`
- Styles: `PascalCase.module.css`
- Tests: `PascalCase.test.jsx`

### Import Order

```javascript
// 1. External dependencies
import { useState } from "react";

// 2. Internal dependencies (with @/ alias)
import { useCustomHook } from "@/hooks/useCustomHook";
import { Component } from "@/components/Component";

// 3. Styles
import styles from "./Component.module.css";
```

### CSS Guidelines

- Use CSS Modules for component styles
- Use CSS variables for theming
- Mobile-first responsive design
- BEM-like naming within modules

```css
.container {
  /* Container styles */
}

.containerTitle {
  /* Title styles */
}

.containerTitleHighlight {
  /* Highlight styles */
}
```

## Common Tasks

### Adding a New Section

1. Create component file: `src/components/sections/NewSection.jsx`
2. Create CSS module: `src/components/sections/NewSection.module.css`
3. Add translations to `src/data/translations.js`
4. Import in `src/pages/Home.jsx`
5. Add to the page layout

### Adding a Translation

Edit `src/data/translations.js`:

```javascript
export const translations = {
  fr: {
    // ... existing translations
    newKey: "Nouvelle valeur",
  },
  ar: {
    // ... existing translations
    newKey: "قيمة جديدة",
  },
  en: {
    // ... existing translations
    newKey: "New value",
  },
};
```

### Updating Styles

1. Locate the component's CSS module
2. Make changes using scoped class names
3. Test on different screen sizes
4. Ensure dark mode compatibility (if applicable)

## Questions?

- Check the [Architecture Documentation](./docs/ARCHITECTURE.md)
- Review existing components for examples
- Open an issue for clarification

## Code of Conduct

- Be respectful and constructive
- Help others learn and grow
- Focus on the code, not the person
- Celebrate diversity and inclusion
