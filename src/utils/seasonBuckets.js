// src/utils/seasonBuckets.js

// Etichette standard usate nei filtri
export const SEASON_BUCKET_LABELS = {
  ALL_YEAR: "Tutto l’anno",
  SUMMER: "Estate",
  WINTER: "Inverno",
  SPRING: "Primavera",
  AUTUMN: "Autunno",
  MIX: "Mix / Da valutare",
};

// Comoda lista ordinata per i filtri
export const SEASON_BUCKET_LIST = [
  SEASON_BUCKET_LABELS.ALL_YEAR,
  SEASON_BUCKET_LABELS.SPRING,
  SEASON_BUCKET_LABELS.SUMMER,
  SEASON_BUCKET_LABELS.AUTUMN,
  SEASON_BUCKET_LABELS.WINTER,
  SEASON_BUCKET_LABELS.MIX,
];

// 🔎 Helper che, dato il testo del periodo, restituisce il "bucket" macro
export const getSeasonBucketLabel = (period) => {
  if (!period) return SEASON_BUCKET_LABELS.ALL_YEAR;

  const p = period.toLowerCase();

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

  // Periodi dichiarati come variabili / mix
  if (has("variabile") || has("mix") || has("stagionalità")) {
    return SEASON_BUCKET_LABELS.MIX;
  }

  // Token stagionali / mesi (italiano + abbreviazioni)
  const winterTokens = [
    "inverno",
    "dicembre",
    "dic",
    "gennaio",
    "gen",
    "febbraio",
    "feb",
  ];
  const summerTokens = [
    "estate",
    "giugno",
    "giu",
    "luglio",
    "lug",
    "agosto",
    "ago",
  ];
  const springTokens = [
    "primavera",
    "marzo",
    "mar",
    "aprile",
    "apr",
    "maggio",
    "mag",
  ];
  const autumnTokens = [
    "autunno",
    "settembre",
    "set",
    "ottobre",
    "ott",
    "novembre",
    "nov",
  ];

  const hasWinter = winterTokens.some((t) => p.includes(t));
  const hasSummer = summerTokens.some((t) => p.includes(t));
  const hasSpring = springTokens.some((t) => p.includes(t));
  const hasAutumn = autumnTokens.some((t) => p.includes(t));

  const trueCount = [hasSpring, hasSummer, hasAutumn, hasWinter].filter(
    Boolean
  ).length;

  // Solo una stagione → bucket diretto
  if (trueCount === 1) {
    if (hasSummer) return SEASON_BUCKET_LABELS.SUMMER;
    if (hasWinter) return SEASON_BUCKET_LABELS.WINTER;
    if (hasSpring) return SEASON_BUCKET_LABELS.SPRING;
    if (hasAutumn) return SEASON_BUCKET_LABELS.AUTUMN;
  }

  // Combinazioni tipiche "mezze stagioni":

  // Da maggio a ottobre → primavera/estate/autunno → lo leggiamo come Estate
  if (hasSummer && (hasSpring || hasAutumn) && !hasWinter) {
    return SEASON_BUCKET_LABELS.SUMMER;
  }

  // Da dicembre ad aprile → inverno/primavera → lo leggiamo come Inverno
  if (hasWinter && hasSpring && !hasSummer && !hasAutumn) {
    return SEASON_BUCKET_LABELS.WINTER;
  }

  // Autunno + inverno → lo leggiamo come Inverno
  if (hasWinter && hasAutumn && !hasSummer && !hasSpring) {
    return SEASON_BUCKET_LABELS.WINTER;
  }

  // Primavera + autunno senza estate/inverno → lo consideriamo "mezze stagioni"
  if (hasSpring && hasAutumn && !hasSummer && !hasWinter) {
    return SEASON_BUCKET_LABELS.MIX;
  }

  // Se ci sono più stagioni mescolate → Mix
  if (trueCount > 1) {
    return SEASON_BUCKET_LABELS.MIX;
  }

  // Fallback
  return SEASON_BUCKET_LABELS.ALL_YEAR;
};
