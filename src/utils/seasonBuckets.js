// src/utils/seasonBuckets.js

export const SEASON_BUCKET_LABELS = {
  ALL_YEAR: "Tutto l’anno",
  SPRING: "Primavera",
  SUMMER: "Estate",
  AUTUMN: "Autunno",
  WINTER: "Inverno",
  MIX: "Stagionalità da valutare",
};

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

  let p = period
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[–—−]/g, "-")
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

  if (flags === 1) {
    if (hasSummer) return SEASON_BUCKET_LABELS.SUMMER;
    if (hasWinter) return SEASON_BUCKET_LABELS.WINTER;
    if (hasSpring) return SEASON_BUCKET_LABELS.SPRING;
    if (hasAutumn) return SEASON_BUCKET_LABELS.AUTUMN;
  }

  // Estate + (primavera / autunno) → estate
  if (hasSummer && (hasSpring || hasAutumn) && !hasWinter) {
    return SEASON_BUCKET_LABELS.SUMMER;
  }

  // Inverno + primavera/autunno → inverno
  if (hasWinter && hasSpring && !hasSummer) {
    return SEASON_BUCKET_LABELS.WINTER;
  }
  if (hasWinter && hasAutumn && !hasSummer) {
    return SEASON_BUCKET_LABELS.WINTER;
  }

  // Primavera + autunno senza estate/inverno → MIX
  if (hasSpring && hasAutumn && !hasSummer && !hasWinter) {
    return SEASON_BUCKET_LABELS.MIX;
  }

  if (flags > 1) {
    return SEASON_BUCKET_LABELS.MIX;
  }

  return SEASON_BUCKET_LABELS.ALL_YEAR;
};

/**
 * 🔹 NUOVO: versione basata su bestSeasons (["primavera","estate","autunno","inverno"])
 * Da usare per le pagine Mare Italia / Mare Estero dove hai bestSeasons.
 */
export const getSeasonBucketFromBestSeasons = (bestSeasons) => {
  if (!bestSeasons || bestSeasons.length === 0) {
    return SEASON_BUCKET_LABELS.ALL_YEAR;
  }

  const set = new Set(
    bestSeasons.map((s) => (s || "").toString().toLowerCase().trim())
  );

  const hasSpring = set.has("primavera");
  const hasSummer = set.has("estate");
  const hasAutumn = set.has("autunno");
  const hasWinter = set.has("inverno");

  const flags = [hasSpring, hasSummer, hasAutumn, hasWinter].filter(Boolean)
    .length;

  if (flags === 0) return SEASON_BUCKET_LABELS.ALL_YEAR;

  // Una stagione sola → quella
  if (flags === 1) {
    if (hasSummer) return SEASON_BUCKET_LABELS.SUMMER;
    if (hasWinter) return SEASON_BUCKET_LABELS.WINTER;
    if (hasSpring) return SEASON_BUCKET_LABELS.SPRING;
    if (hasAutumn) return SEASON_BUCKET_LABELS.AUTUMN;
  }

  // Estate + (primavera/autunno) senza inverno → estate
  if (hasSummer && (hasSpring || hasAutumn) && !hasWinter) {
    return SEASON_BUCKET_LABELS.SUMMER;
  }

  // Inverno + primavera/autunno senza estate → inverno (es. Mar Rosso)
  if (hasWinter && (hasSpring || hasAutumn) && !hasSummer) {
    return SEASON_BUCKET_LABELS.WINTER;
  }

  // Primavera + autunno senza estate/inverno → MIX
  if (hasSpring && hasAutumn && !hasSummer && !hasWinter) {
    return SEASON_BUCKET_LABELS.MIX;
  }

  // Tante stagioni tutte insieme → MIX
  if (flags > 1) return SEASON_BUCKET_LABELS.MIX;

  return SEASON_BUCKET_LABELS.ALL_YEAR;
};


