# Development Guide

## Local Development

### Starting the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Hot Module Replacement (HMR)

Vite provides instant HMR. Changes to your code will be reflected immediately without a full page reload.

## Environment Setup

### Required Environment Variables

Create a `.env` file in the root directory:

```env
# Google Places API for reviews
VITE_GOOGLE_PLACES_KEY=your_google_places_api_key

# Web3Forms for contact form
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

### Optional Environment Variables

```env
# Google Analytics (if using)
VITE_GA_TRACKING_ID=your_ga_tracking_id
```

## Project Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint errors
npm test                 # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Generate coverage report

# Type Checking (if using TypeScript)
npm run type-check       # Check TypeScript types
```

## Debugging

### Browser DevTools

1. Open Chrome/Firefox DevTools
2. Use React DevTools extension for component inspection
3. Network tab for API calls
4. Console for errors and logs

### VS Code Debugging

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

## Common Development Tasks

### Adding a New Feature

1. Create a new branch

   ```bash
   git checkout -b feature/new-feature
   ```

2. Develop the feature

   - Create components in appropriate directories
   - Add tests
   - Update documentation

3. Test locally

   ```bash
   npm test
   npm run build
   ```

4. Commit and push
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/new-feature
   ```

### Fixing a Bug

1. Reproduce the bug locally
2. Write a failing test
3. Fix the bug
4. Ensure the test passes
5. Commit with descriptive message

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update specific package
npm update package-name

# Update all packages (carefully!)
npm update

# Check for security vulnerabilities
npm audit
npm audit fix
```

## Performance Optimization

### Analyzing Bundle Size

```bash
npm run build
```

Check the `dist` folder for bundle sizes. Vite automatically:

- Code splits by route
- Tree-shakes unused code
- Minifies JavaScript and CSS

### Performance Monitoring

Use Chrome DevTools:

1. Lighthouse for overall performance
2. Performance tab for runtime analysis
3. Coverage tab to find unused code

### Optimization Checklist

- [ ] Images are optimized (WebP format)
- [ ] Lazy load images below the fold
- [ ] Code split large components
- [ ] Minimize third-party scripts
- [ ] Use CSS Modules (already done)
- [ ] Avoid unnecessary re-renders

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Kill process on port 5173
npx kill-port 5173

# Or use a different port
npm run dev -- --port 3000
```

#### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors

```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

#### ESLint Errors

```bash
# Auto-fix what can be fixed
npm run lint:fix

# Disable specific rules (use sparingly)
// eslint-disable-next-line rule-name
```

## Best Practices

### Component Development

1. **Keep components small** - Single responsibility
2. **Use CSS Modules** - Scoped styles
3. **Extract logic to hooks** - Reusable logic
4. **Props validation** - Use TypeScript or PropTypes
5. **Accessibility** - ARIA labels, semantic HTML

### State Management

1. **Local state first** - useState for component state
2. **Lift state up** - Share state via props
3. **Custom hooks** - Complex state logic
4. **Context** - Truly global state (avoid overuse)

### Performance

1. **Lazy load routes** - React.lazy + Suspense
2. **Memoize expensive computations** - useMemo
3. **Prevent unnecessary renders** - React.memo
4. **Optimize images** - WebP, lazy loading
5. **Code split** - Dynamic imports

### Testing

1. **Test user behavior** - Not implementation
2. **Test edge cases** - Error states, empty states
3. **Mock external dependencies** - APIs, services
4. **Keep tests simple** - Easy to understand
5. **Test accessibility** - Screen reader support

## Git Workflow

### Branch Naming

```
feature/feature-name
fix/bug-description
refactor/what-changed
docs/documentation-update
chore/maintenance-task
```

### Commit Messages

```
feat: add user authentication
fix: resolve mobile menu bug
docs: update README
style: format code
refactor: extract form validation
test: add Hero component tests
chore: update dependencies
```

### Before Pushing

```bash
# 1. Run linter
npm run lint

# 2. Run tests
npm test

# 3. Build
npm run build

# 4. Check git status
git status

# 5. Push
git push origin branch-name
```

## Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Vitest Documentation](https://vitest.dev)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [Testing Library](https://testing-library.com)
