import es from "./es";
import en from "./en";

// `es` es el diccionario canónico: su forma define el tipo `Dictionary`.
export type Dictionary = typeof es;

export const dictionaries = { es, en };

export type Locale = keyof typeof dictionaries; // "es" | "en"

// Tipo reutilizable para campos traducibles dentro de los arrays de datos.
export type Localized = Record<Locale, string>;
