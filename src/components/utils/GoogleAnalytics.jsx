import { useEffect } from 'react';

export const GoogleAnalytics = () => {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      return;
    }

    // Load gtag.js
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
    });

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

// Analytics event tracking helpers
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackFormSubmission = (formName) => {
  trackEvent('form_submission', {
    form_name: formName,
  });
};

export const trackButtonClick = (buttonName, buttonLocation) => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

export const trackLanguageChange = (newLanguage) => {
  trackEvent('language_change', {
    language: newLanguage,
  });
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    contact_method: 'phone',
  });
};

export const trackEmailClick = () => {
  trackEvent('email_click', {
    contact_method: 'email',
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    contact_method: 'whatsapp',
  });
};

export const trackCalendlyOpen = () => {
  trackEvent('calendly_open', {
    booking_method: 'online',
  });
};
