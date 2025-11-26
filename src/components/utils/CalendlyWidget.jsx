import { useEffect } from 'react';

export const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly widget CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (script.parentNode) script.parentNode.removeChild(script);
      if (link.parentNode) link.parentNode.removeChild(link);
    };
  }, []);

  return null;
};


