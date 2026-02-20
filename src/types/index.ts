// Translation types
export interface Translation {
  // Navigation
  nav: {
    about: string;
    practice: string;
    values: string;
    approach: string;
    reviews: string;
    testimonials?: string;
    consult: string;
    actualites?: string;
  };

  // Brand
  brandName: string;
  brandTagline: string;
  languageLabel: string;
  flag?: string;
  shortLabel: string;

  // Hero section
  heroEyebrow: string;
  heroTitle?: string;
  heroHeading?: string;
  heroLede?: string;
  heroSubheading?: string;
  heroStats?: Array<{
    value: string;
    label: string;
  }>;
  heroMetrics?: Array<{
    value: string;
    label: string;
  }>;

  // CTAs
  ctas: {
    book?: string;
    contact?: string;
    primary?: string;
    bookOnline?: string;
    secondary?: string;
    whatsapp?: string;
  };

  // About section
  aboutEyebrow: string;
  aboutHeading: string;
  aboutBody: string;
  pillarsEyebrow: string;
  pillars: Array<{
    title: string;
    detail: string;
  }>;

  // Practice areas
  practiceEyebrow: string;
  practiceHeading: string;
  practiceAreas: Array<{
    title: string;
    summary: string;
  }>;

  // Values
  valuesEyebrow: string;
  valuesHeading: string;
  values: Array<{
    title: string;
    detail: string;
  }>;

  // Approach
  approachEyebrow: string;
  approachHeading: string;
  approach: Array<{
    phase: string;
    detail: string;
  }>;

  // Reviews
  reviewsEyebrow: string;
  reviewsHeading: string;
  reviewsNote?: string;
  reviews: GoogleReview[];

  // Testimonials
  testimonialsEyebrow?: string;
  testimonialsHeading?: string;
  testimonials?: Array<{
    quote: string;
    author: string;
  }>;

  // FAQ
  faqEyebrow: string;
  faqHeading: string;
  faq: Array<{
    question: string;
    answer: string;
  }>;

  // Gallery
  galleryEyebrow: string;
  galleryHeading: string;

  // Contact
  consultEyebrow: string;
  consultHeading: string;
  contact: {
    whatsapp: string;
    email: string;
    office: string;
  };
  contactOffice: string;

  // Form
  form: {
    nameLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    orgLabel?: string;
    orgPlaceholder?: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    defaultName?: string;
    defaultOrg?: string;
  };

  // Map
  mapLabel: string;
  mapLinkLabel: string;

  // Footer
  footerBlurb: string;
  developedBy: string;

  // Impact
  impactEyebrow: string;
  impactHeading: string;
  impactStats: Array<{
    value: string;
    label: string;
  }>;

  // Cookies
  cookieTitle?: string;
  cookieCompact?: string;
  cookieText?: string;
  cookieAccept?: string;
  cookieAcceptAll?: string;
  cookieDecline?: string;
  cookieReject?: string;
  cookieRejectAll?: string;
  cookieSave?: string;
  cookieSettingsTitle?: string;
  cookieSettingsDesc?: string;
  cookieEssential?: string;
  cookieEssentialDesc?: string;
  cookieRequired?: string;
  cookieAnalytics?: string;
  cookieAnalyticsDesc?: string;
  cookieMarketing?: string;
  cookieMarketingDesc?: string;

  // UI Text
  seeMoreReviews: string;
  emailLabel: string;
  loading: string;
  submitting: string;
  successTitle: string;
  successMessage: string;
  errorTitle: string;
  errorMessage: string;
  scrollToTop: string;
  copy: string;

  // Trust badges
  trustBadgeMember?: string;
  trustBadgeRating?: string;
  trustBadgeCourt?: string;

  // Blog
  blog?: {
    eyebrow: string;
    heading: string;
    lede: string;
    readMore: string;
    backToList: string;
    by: string;
  };
}

export interface Translations {
  [key: string]: Translation;
}

// Office photo type
export interface OfficePhoto {
  img: {
    src: string;
    w: number;
    h: number;
  };
  sources: Record<string, string>;
  alt: string;
}

// Google Review type
export interface GoogleReview {
  author: string;
  image?: string;
  rating: string;
  text: string;
  link?: string;
  reviewImage?: string;
  // Reviewer metadata
  reviewsCount?: number | null;
  isLocalGuide?: boolean;
  date?: string | null;
  isoDate?: string | null;
}

// Component prop types
export interface LocaleProps {
  locale: string;
  setLocale: (locale: string) => void;
}

export interface TranslationProps {
  t: Translation;
}

export interface WhatsAppProps {
  whatsappLink: string;
  whatsappNumber?: string;
}
