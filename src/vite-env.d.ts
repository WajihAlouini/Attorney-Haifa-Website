/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_PLACES_KEY: string;
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
  readonly VITE_GOOGLE_PLACE_ID: string;
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_CALENDLY_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
