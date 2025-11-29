import { useEffect } from "react";

export function CalComWidget() {
  useEffect(() => {
    // Only load if not already loaded
    if (
      document.querySelector('script[src="https://app.cal.com/embed/embed.js"]')
    ) {
      return;
    }

    // Load Cal.com embed script
    (function (C: any, A: any, L: any) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              C.Cal.ns[namespace] = C.Cal.ns[namespace] || api;
              p(C.Cal.ns[namespace], ar);
              return;
            }
            p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // Initialize Cal with your API key
    (window as any).Cal("init", "wajjih-alouini-eis3ub", {
      origin: "https://cal.com",
    });

    // Configure UI
    (window as any).Cal("ui", {
      styles: { branding: { brandColor: "#D4AF37" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return null;
}
