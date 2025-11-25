# Haifa Guedhami Alouini - Law Firm Website

A premium, professional website for a Tunisian law firm specializing in Business Law, Real Estate, and Family Law.

## 🎨 Design Features

- **Premium Gold & Navy Color Scheme** - Professional, trustworthy aesthetic
- **Responsive Design** - Mobile-first approach with hamburger menu
- **Smooth Animations** - Fade-in effects on scroll for enhanced UX
- **Custom Favicon** - Professional branding with HG monogram and scales of justice

## 🚀 Features

### 1. **Multi-language Support**
- French (default)
- English
- Arabic (RTL support)

### 2. **Mobile Responsive**
- Hamburger menu for mobile devices
- Optimized layouts for all screen sizes
- Touch-friendly navigation

### 3. **Smooth Scrolling**
- Anchor links with smooth scroll behavior
- Enhanced navigation experience

### 4. **Google Reviews Integration**
- Live reviews from Google Business Profile
- Loading states with spinner
- Fallback to static reviews

### 5. **Contact Forms**
- Email integration
- WhatsApp quick contact
- Floating WhatsApp button

### 6. **Scroll Animations**
- Intersection Observer API
- Fade-in effects on scroll
- Staggered animations for cards

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx      # Navigation with mobile menu
│   │   └── Footer.jsx      # Footer component
│   └── sections/
│       ├── Hero.jsx        # Hero section
│       ├── About.jsx       # About section
│       ├── PracticeAreas.jsx
│       ├── Values.jsx
│       ├── Approach.jsx
│       ├── Reviews.jsx     # Google Reviews with loading state
│       ├── Contact.jsx     # Contact form & map
│       └── Gallery.jsx     # Office photos
├── data/
│   ├── translations.js     # All translations (FR, EN, AR)
│   └── constants.js        # App constants
├── App.jsx                 # Main app component
├── App.css                 # Styles
└── index.css               # Global styles & variables

## 🛠️ Technologies

- **React** - UI framework
- **Vite** - Build tool
- **CSS3** - Styling with custom properties
- **Google Places API** - Reviews integration

## 🎯 SEO Optimized

- French meta tags (primary language)
- Semantic HTML structure
- Proper heading hierarchy
- Open Graph tags for social sharing
- Descriptive alt texts

## 📱 Mobile Features

- Hamburger menu
- Touch-optimized buttons
- Responsive images
- Mobile-first CSS

## 🌟 Premium UX

- Smooth scroll navigation
- Loading states
- Micro-animations
- Hover effects
- Professional typography (Playfair Display + Lato)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📝 Environment Variables

Create a `.env` file:

```
VITE_GOOGLE_PLACES_KEY=your_api_key_here
```

## 🎨 Color Palette

- **Primary (Gold)**: `#c5a059`
- **Background (Navy)**: `#05080f`
- **Text**: `#e2e8f0`
- **Muted**: `#94a3b8`
- **Border**: `rgba(197, 160, 89, 0.25)`

## 📧 Contact

- **Email**: counsel@hgalouini.com
- **WhatsApp**: +216 98 643 612
- **Office**: Kairouan Medina, Avenue des Martyrs

## ✨ Recent Improvements

1. ✅ Removed fake testimonials
2. ✅ Added mobile hamburger menu
3. ✅ Implemented smooth scrolling
4. ✅ Added loading states for reviews
5. ✅ Scroll-triggered fade-in animations
6. ✅ Improved mobile responsiveness
7. ✅ Custom favicon with scales of justice
8. ✅ French as default language
9. ✅ SEO optimization
10. ✅ Component-based architecture

---

**Built with ❤️ for professional legal services in Tunisia**
