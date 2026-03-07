import { Translation } from "@/types";
import { fr } from "./locales/fr";

export type SupportedLocale = "fr" | "en" | "ar";

export const defaultLocale: SupportedLocale = "fr";
export const defaultTranslation: Translation = fr;

export async function loadTranslation(locale: string): Promise<Translation> {
  if (locale === "en") {
    const module = await import("./locales/en");
    return module.en;
  }

  if (locale === "ar") {
    const module = await import("./locales/ar");
    return module.ar;
  }

  return fr;
}
