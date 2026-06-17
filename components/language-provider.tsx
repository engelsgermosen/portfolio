"use client";

import * as React from "react";
import {
  dictionaries,
  type Dictionary,
  type Locale,
} from "@/i18n/dictionaries";

const STORAGE_KEY = "locale";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = React.createContext<LanguageContextValue | undefined>(
  undefined
);

function isLocale(value: string | null): value is Locale {
  return value === "es" || value === "en";
}

/** Idioma del navegador/SO: español si empieza por "es", inglés en cualquier otro caso. */
function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  return navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Estado inicial determinista para el SSR/primer render (evita desajuste de hidratación).
  // La preferencia real se aplica en el efecto de montaje.
  const [locale, setLocaleState] = React.useState<Locale>("en");

  // Al montar: usar la preferencia guardada o, si no existe, detectar el idioma del navegador.
  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocaleState(stored);
    } else {
      const detected = detectBrowserLocale();
      setLocaleState(detected);
      window.localStorage.setItem(STORAGE_KEY, detected);
    }
  }, []);

  // Mantener <html lang> sincronizado con el idioma activo.
  React.useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = React.useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = React.useMemo(
    () => ({ locale, setLocale }),
    [locale, setLocale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

function useLanguageContext(): LanguageContextValue {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
}

/** Acceso al idioma activo y al setter (para el selector de idioma). */
export function useLanguage(): LanguageContextValue {
  return useLanguageContext();
}

/** Traducciones del idioma activo: `t` es el diccionario tipado, p. ej. `t.hero.greeting`. */
export function useTranslation(): { t: Dictionary; locale: Locale } {
  const { locale } = useLanguageContext();
  return { t: dictionaries[locale], locale };
}
