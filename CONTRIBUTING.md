# Contribution Guidelines

## Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Lawyer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Project Structure

See [STRUCTURE.md](./STRUCTURE.md) for detailed project organization.

## Code Style

- Use functional components with hooks
- Follow the existing component structure
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use meaningful variable and function names

## CSS Guidelines

- Use CSS custom properties (variables) for colors and spacing
- Follow BEM-like naming for classes
- Keep styles modular and scoped
- Use the styles/ directory for new styles

## Commit Messages

Follow conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Example: `feat: add contact form validation`

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Submit a pull request with a clear description

## Questions?

Open an issue or contact the maintainers.
