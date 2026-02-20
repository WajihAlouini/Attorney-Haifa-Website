/// <reference types="vite/client" />

declare module "*&as=picture" {
  const image: {
    img: {
      src: string;
      w: number;
      h: number;
    };
    sources: Record<string, string>;
  };
  export default image;
}

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
  interface Navigator {
    mozConnection?: any;
    webkitConnection?: any;
  }
}
