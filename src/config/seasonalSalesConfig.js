// src/config/seasonalSalesConfig.js

// 🔐 Se vuoi forzare a mano la stagione, metti: "inverno" | "primavera" | "estate" | "autunno"
// Es: export const SEASON_OVERRIDE = "inverno";
export const SEASON_OVERRIDE = null;

// Dati "di marketing" per ciascuna stagione (usati in home)
export const MARKETING_SEASONS = {
  inverno: {
    id: "inverno",
    label: "Inverno",
    badge: "Mete consigliate per questo inverno",
    title:
      "L’inverno è perfetto per rallentare e scegliere un viaggio che scaldi davvero.",
    intro:
      "Dalle città illuminate ai mercatini, fino alla montagna e al Nord Europa: alcune idee per vivere al meglio la stagione, iniziando a pensarci già in autunno.",
    highlights: [
      "Atmosfere intime, luci soffuse, mercatini e cultura",
      "Montagna e benessere tra spa panoramiche e rifugi esclusivi",
      "City break in bassa stagione con musei, gastronomia e vita locale",
    ],
    ctaLabel: "Scopri le mete stagionali d’inverno",
  },

  primavera: {
    id: "primavera",
    label: "Primavera",
    badge: "Mete consigliate per questa primavera",
    title: "La primavera è il momento ideale per ripartire con leggerezza.",
    intro:
      "Città d’arte, fioriture, primi weekend al mare e itinerari soft: una stagione perfetta per viaggi equilibrati, da costruire già tra fine inverno e inizio primavera.",
    highlights: [
      "City break con clima piacevole e tanti nuovi stimoli",
      "Parchi, fioriture e borghi immersi nella natura",
      "Weekend al mare o tour soft tra arte, cultura e gastronomia",
    ],
    ctaLabel: "Scopri le mete stagionali di primavera",
  },

  estate: {
    id: "estate",
    label: "Estate",
    badge: "Mete consigliate per questa estate",
    title:
      "Estate è sinonimo di mare, libertà e grandi itinerari da vivere con calma.",
    intro:
      "Dalle isole mediterranee ai grandi viaggi lontani: è la stagione dei viaggi più lunghi, da programmare con anticipo dalla tarda primavera.",
    highlights: [
      "Isole mediterranee e panorami che abbracciano il mare",
      "Grandi itinerari tra natura, città iconiche e strade infinite",
      "Crociere, combinati mare + tour e viaggi più lunghi",
    ],
    ctaLabel: "Scopri le mete stagionali estive",
  },

  autunno: {
    id: "autunno",
    label: "Autunno",
    badge: "Mete consigliate per questo autunno",
    title:
      "L’autunno è fatto di colori caldi, ritmi lenti e luoghi da vivere con calma.",
    intro:
      "È il momento ideale per città meno affollate, foliage e viaggi di gusto e benessere, da immaginare già nei mesi estivi.",
    highlights: [
      "Foliage, laghi e colline dai colori caldi",
      "City break in bassa stagione, eleganti e vivibili",
      "Benessere, terme ed esperienze enogastronomiche",
    ],
    ctaLabel: "Scopri le mete stagionali d’autunno",
  },
};

/**
 * 🔍 Logica di marketing:
 *
 * Usiamo mese + giorno per decidere cosa mostrare in home.
 * L’idea è:
 *   - Inverno in vendita da metà settembre in poi
 *   - Primavera da febbraio a maggio
 *   - Estate da maggio/giugno a fine agosto
 *   - Autunno tra luglio e inizio settembre
 *
 * 0 = Gen, 1 = Feb, 2 = Mar, 3 = Apr, 4 = Mag, 5 = Giu,
 * 6 = Lug, 7 = Ago, 8 = Set, 9 = Ott, 10 = Nov, 11 = Dic
 */
export const getActiveSeasonForNow = (now = new Date()) => {
  // Override manuale (se impostato)
  if (SEASON_OVERRIDE && MARKETING_SEASONS[SEASON_OVERRIDE]) {
    return MARKETING_SEASONS[SEASON_OVERRIDE];
  }

  const month = now.getMonth();
  const day = now.getDate();

  // ❄️ INVERNO – venduto da metà settembre in poi fino a febbraio
  // - dal 15 settembre in avanti → inverno
  // - ottobre, novembre, dicembre, gennaio, febbraio → inverno
  if (
    (month === 8 && day >= 15) || // 15–30 settembre
    month === 9 || // ottobre
    month === 10 || // novembre
    month === 11 || // dicembre
    month === 0 || // gennaio
    month === 1 // febbraio
  ) {
    return MARKETING_SEASONS.inverno;
  }

  // 🌸 PRIMAVERA – venduta da febbraio a maggio
  if (month >= 1 && month <= 4) {
    // Feb (1), Mar (2), Apr (3), Mag (4)
    return MARKETING_SEASONS.primavera;
  }

  // ☀️ ESTATE – venduta da maggio/giugno a fine agosto
  if (month >= 4 && month <= 7) {
    // Mag (4), Giu (5), Lug (6), Ago (7)
    return MARKETING_SEASONS.estate;
  }

  // 🍂 AUTUNNO – venduto da luglio a metà settembre,
  // ma solo fino al 14 settembre (dal 15 parte l’inverno)
  if (month === 6 || month === 7 || (month === 8 && day < 15)) {
    // Lug (6), Ago (7), 1–14 Set (8, <15)
    return MARKETING_SEASONS.autunno;
  }

  // Fallback (non dovrebbe servire, ma per sicurezza)
  return MARKETING_SEASONS.inverno;
};

