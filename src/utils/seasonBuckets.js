// src/utils/seasonBuckets.js

// Etichette standard dei "bucket" stagionali usati nei filtri
export const SEASON_BUCKET_LABELS = {
  ALL_YEAR: "Tutto l’anno",
  SPRING: "Primavera",
  SUMMER: "Estate",
  AUTUMN: "Autunno",
  WINTER: "Inverno",
  MIX: "Stagionalità da valutare",
};

// Lista ordinata per la UI dei filtri
export const SEASON_BUCKET_LIST = [
  SEASON_BUCKET_LABELS.ALL_YEAR,
  SEASON_BUCKET_LABELS.SPRING,
  SEASON_BUCKET_LABELS.SUMMER,
  SEASON_BUCKET_LABELS.AUTUMN,
  SEASON_BUCKET_LABELS.WINTER,
  SEASON_BUCKET_LABELS.MIX,
];

/**
 * Dato il testo "period" (es. "Novembre – Aprile", "Tutto l’anno",
 * "Stagionalità variabile", ecc.), restituisce uno dei label
 * presenti in SEASON_BUCKET_LIST, così che i filtri funzionino.
 */
export const getSeasonBucketLabel = (period) => {
  if (!period) return SEASON_BUCKET_LABELS.ALL_YEAR;

  // NORMALIZZAZIONE COMPLETA
  let p = period
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[–—−]/g, "-") // converte tutti i tipi di trattino in "-"
    .replace(/\s+/g, " ")
    .trim();

  const has = (str) => p.includes(str);

  // Tutto l'anno / quasi tutto l'anno
  if (
    has("tutto l'anno") ||
    has("tutto l’anno") ||
    has("quasi tutto l'anno") ||
    has("quasi tutto l’anno")
  ) {
    return SEASON_BUCKET_LABELS.ALL_YEAR;
  }

  // Stagionalità "strana" / mix
  if (has("variabile") || has("mix") || has("stagionalità")) {
    return SEASON_BUCKET_LABELS.MIX;
  }

  // Token mensili / stagionali
  const winterTokens = ["inverno", "dic", "gen", "feb"];
  const summerTokens = ["estate", "giu", "lug", "ago"];
  const springTokens = ["primavera", "mar", "apr", "mag"];
  const autumnTokens = ["autunno", "set", "ott", "nov"];

  const hasWinter = winterTokens.some((t) => p.includes(t));
  const hasSummer = summerTokens.some((t) => p.includes(t));
  const hasSpring = springTokens.some((t) => p.includes(t));
  const hasAutumn = autumnTokens.some((t) => p.includes(t));

  const flags = [hasSpring, hasSummer, hasAutumn, hasWinter].filter(Boolean)
    .length;

  // Un'unica stagione prevalente
  if (flags === 1) {
    if (hasSummer) return SEASON_BUCKET_LABELS.SUMMER;
    if (hasWinter) return SEASON_BUCKET_LABELS.WINTER;
    if (hasSpring) return SEASON_BUCKET_LABELS.SPRING;
    if (hasAutumn) return SEASON_BUCKET_LABELS.AUTUMN;
  }

  // Alcuni casi pratici per non mandare tutto in MIX
  // Estate + (primavera/o autunno) → consideriamo estate
  if (hasSummer && (hasSpring || hasAutumn) && !hasWinter) {
    return SEASON_BUCKET_LABELS.SUMMER;
  }

  // Inverno + primavera/autunno → consideriamo inverno
  if (hasWinter && hasSpring && !hasSummer) {
    return SEASON_BUCKET_LABELS.WINTER;
  }
  if (hasWinter && hasAutumn && !hasSummer) {
    return SEASON_BUCKET_LABELS.WINTER;
  }

  // Primavera + autunno senza estate/inverno → veramente mix
  if (hasSpring && hasAutumn && !hasSummer && !hasWinter) {
    return SEASON_BUCKET_LABELS.MIX;
  }

  // Più stagioni miste → MIX
  if (flags > 1) {
    return SEASON_BUCKET_LABELS.MIX;
  }

  // Fallback di sicurezza
  return SEASON_BUCKET_LABELS.ALL_YEAR;
};

