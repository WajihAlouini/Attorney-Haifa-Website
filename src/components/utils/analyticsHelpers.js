// src/utils/analyticsHelpers.js
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