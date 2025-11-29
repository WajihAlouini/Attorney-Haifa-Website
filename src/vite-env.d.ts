/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_PLACES_KEY: string;
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
  readonly VITE_GOOGLE_PLACE_ID: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  gtag: (...args: any[]) => void;
  dataLayer: any[];
  Cal: any;
}

interface Navigator {
  connection?: {
    effectiveType?: string;
    downlink?: number;
    rtt?: number;
    saveData?: boolean;
    addEventListener?: (type: string, listener: EventListener) => void;
    removeEventListener?: (type: string, listener: EventListener) => void;
  };
  mozConnection?: any;
  webkitConnection?: any;
}
