import { useEffect } from "react";

const CAL_SCRIPT_SRC = "https://app.cal.com/embed/embed.js";
const CAL_NAMESPACE = "wajjih-alouini-eis3ub";
const CAL_LINK = `${CAL_NAMESPACE}/30min`;

type CalArguments = IArguments | [string, ...unknown[]];

interface CalApi {
  (...args: unknown[]): void;
  loaded?: boolean;
  ns?: Record<string, CalApi>;
  q?: CalArguments[];
}

interface CalWindow extends Window {
  Cal?: CalApi;
  __calBootstrapped?: boolean;
  __calInitialized?: boolean;
}

function bootstrapCal(windowRef: CalWindow) {
  if (windowRef.__calBootstrapped) return;

  (function (C: CalWindow, A: string, L: string) {
    const queueCall = (api: CalApi, args: CalArguments) => {
      api.q = api.q || [];
      api.q.push(args);
    };

    const documentRef = C.document;
    C.Cal =
      C.Cal ||
      ((...args: unknown[]) => {
        const cal = C.Cal as CalApi;
        const callArgs = args as [string, ...unknown[]];

        if (!cal.loaded) {
          cal.ns = cal.ns || {};
          cal.q = cal.q || [];

          const script = documentRef.createElement("script");
          script.src = A;
          script.async = true;
          documentRef.head.appendChild(script);
          cal.loaded = true;
        }

        if (callArgs[0] === L) {
          const namespace = callArgs[1];
          const scopedApi: CalApi = (...scopedArgs: unknown[]) => {
            queueCall(scopedApi, scopedArgs as [string, ...unknown[]]);
          };

          scopedApi.q = scopedApi.q || [];

          if (typeof namespace === "string") {
            cal.ns = cal.ns || {};
            cal.ns[namespace] = cal.ns[namespace] || scopedApi;
            queueCall(cal.ns[namespace], callArgs);
            return;
          }

          queueCall(cal, callArgs);
          return;
        }

        queueCall(cal, callArgs);
      });
  })(windowRef, CAL_SCRIPT_SRC, "init");

  windowRef.__calBootstrapped = true;
}

function initializeCal(windowRef: CalWindow) {
  bootstrapCal(windowRef);

  if (windowRef.__calInitialized) return;

  windowRef.Cal?.("init", CAL_NAMESPACE, {
    origin: "https://cal.com",
  });
  windowRef.Cal?.("ui", {
    styles: { branding: { brandColor: "#D4AF37" } },
    hideEventTypeDetails: false,
    layout: "month_view",
  });

  windowRef.__calInitialized = true;
}

function openCalModal(windowRef: CalWindow) {
  initializeCal(windowRef);

  const scopedCal = windowRef.Cal?.ns?.[CAL_NAMESPACE];
  if (scopedCal) {
    scopedCal("modal", { calLink: CAL_LINK });
    return;
  }

  windowRef.Cal?.("modal", { calLink: CAL_LINK });
}

export function CalComWidget() {
  useEffect(() => {
    const windowRef = window as CalWindow;
    bootstrapCal(windowRef);

    const handlePreload = () => initializeCal(windowRef);
    const handleOpen = () => openCalModal(windowRef);

    window.addEventListener("cal:preload", handlePreload);
    window.addEventListener("cal:open", handleOpen);

    return () => {
      window.removeEventListener("cal:preload", handlePreload);
      window.removeEventListener("cal:open", handleOpen);
    };
  }, []);

  return null;
}
