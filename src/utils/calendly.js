import { trackCalendlyOpen } from '../components/utils/GoogleAnalytics';

export const openCalendly = (calendlyUrl) => {
  const url = calendlyUrl || 'https://calendly.com/jomovlr03/30min'; // Fallback
  
  // Track the event
  trackCalendlyOpen();
  
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url });
  } else {
    // Fallback: open in new tab if script hasn't loaded yet
    window.open(url, '_blank');
  }
  return false;
};
