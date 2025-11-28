// Translation types
export interface Translation {
  // Navigation
  nav: {
    about: string;
    practice: string;
    values: string;
    approach: string;
    reviews: string;
    consult: string;
  };

  // Brand
  brandTagline: string;
  languageLabel: string;
  flag: string;
  shortLabel: string;

  // Hero section
  heroEyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  heroStats: Array<{
    value: string;
    label: string;
  }>;

  // CTAs
  ctas: {
    book: string;
    contact: string;
  };

  // About section
  aboutEyebrow: string;
  aboutHeading: string;
  aboutBody: string;
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
  reviews: Array<{
    author: string;
    rating: string;
    text: string;
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
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
  };

  // Map
  mapLabel: string;
  mapLinkLabel: string;

  // Footer
  footerBlurb: string;

  // Impact
  impactEyebrow: string;
  impactHeading: string;
  impactStats: Array<{
    value: string;
    label: string;
  }>;
}

export interface Translations {
  [key: string]: Translation;
}

// Office photo type
export interface OfficePhoto {
  src: string;
  alt: string;
}

// Google Review type
export interface GoogleReview {
  author: string;
  rating: string;
  text: string;
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
  whatsappNumber: string;
}
