// src/utils/analyticsHelpers.ts
// Analytics event tracking helpers

export const trackEvent = (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  if (window.gtag) {
    window.gtag("event", eventName, eventParams);
  }
};

export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submission", {
    form_name: formName,
  });
};

export const trackButtonClick = (
  buttonName: string,
  buttonLocation: string
) => {
  trackEvent("button_click", {
    button_name: buttonName,
    button_location: buttonLocation,
  });
};

export const trackLanguageChange = (newLanguage: string) => {
  trackEvent("language_change", {
    language: newLanguage,
  });
};

export const trackPhoneClick = () => {
  trackEvent("phone_click", {
    contact_method: "phone",
  });
};

export const trackEmailClick = () => {
  trackEvent("email_click", {
    contact_method: "email",
  });
};

export const trackWhatsAppClick = () => {
  trackEvent("whatsapp_click", {
    contact_method: "whatsapp",
  });
};

export const trackBookingOpen = () => {
  trackEvent("booking_open", {
    booking_method: "online",
  });
};
