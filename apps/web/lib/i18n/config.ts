export const LOCALES = ["en", "es"] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  es: "Español",
}

export function isLocale(v: string): v is Locale {
  return (LOCALES as readonly string[]).includes(v)
}

export function altLocale(l: Locale): Locale {
  return l === "en" ? "es" : "en"
}
