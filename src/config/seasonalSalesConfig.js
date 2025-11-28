// src/config/seasonalSalesConfig.js

// Utility per confrontare solo mese/giorno in modo "commerciale"
const makeDate = (month, day) => ({ month, day });

const isInRange = (today, start, end) => {
  const t = today.month * 100 + today.day;
  const s = start.month * 100 + start.day;
  const e = end.month * 100 + end.day;

  // Range che NON passa per fine anno
  if (s <= e) {
    return t >= s && t <= e;
  }

  // Range che passa per fine anno (es. 15/9 – 15/1)
  return t >= s || t <= e;
};

// 🔹 PIANO VENDITE COMMERCIALE – CRONOPROGRAMMA
export const SALES_CAMPAIGNS = [
  {
    id: "mare-italia",
    label: "Mare Italia",
    from: makeDate(1, 7),  // 7 gennaio
    to: makeDate(8, 20),   // 20 agosto
    primaryCta: {
      to: "/mete-mare-italia",
      label: "Scopri le coste e le isole italiane",
      type: "mare",
    },
  },
  {
    id: "crociere",
    label: "Crociere",
    from: makeDate(9, 1),  // 1 settembre
    to: makeDate(3, 30),   // 30 marzo (passa l’anno)
    primaryCta: {
      to: "/crociere",
      label: "Guarda le idee di crociera",
      type: "crociere",
    },
  },
  {
    id: "viaggi-intercontinentali",
    label: "Viaggi intercontinentali",
    from: makeDate(9, 1),  // 1 settembre
    to: makeDate(3, 30),   // 30 marzo
    primaryCta: {
      to: "/mete-viaggi-di-nozze",
      label: "Idee per itinerari lontani e combinati",
      type: "lontani",
    },
  },
  {
    id: "mare-europa-isole",
    label: "Mare Europa & isole",
    from: makeDate(10, 1), // 1 ottobre
    to: makeDate(7, 30),   // 30 luglio (passa l’anno)
    primaryCta: {
      to: "/mete-mare-estero",
      label: "Mare estero tra isole e coste",
      type: "mare-estero",
    },
  },
  {
    id: "mare-inverno",
    label: "Mare d’inverno",
    from: makeDate(3, 1),  // 1 marzo
    to: makeDate(9, 30),   // 30 settembre
    primaryCta: {
      to: "/mete-mare-estero#mare-inverno",
      label: "Idee di mare d’inverno",
      type: "mare-inverno",
    },
  },
  {
    id: "mercatini-natale",
    label: "Mercatini di Natale",
    from: makeDate(6, 1),  // 1 giugno
    to: makeDate(10, 30),  // 30 ottobre
    primaryCta: {
      to: "/mete-stagionali#inverno",
      label: "Mercatini tra Trentino, Austria e Alsazia",
      type: "eventi",
    },
  },
  {
    id: "capodanno",
    label: "Capodanno",
    from: makeDate(6, 1),  // 1 giugno
    to: makeDate(11, 15),  // 15 novembre
    primaryCta: {
      to: "/mete-stagionali#eventi-speciali",
      label: "Capitali ed eventi di Capodanno",
      type: "eventi",
    },
  },
  {
    id: "carnevale",
    label: "Carnevale",
    from: makeDate(9, 1),  // 1 settembre
    to: makeDate(1, 31),   // 31 gennaio
    primaryCta: {
      to: "/mete-stagionali#eventi-speciali",
      label: "Venezia, Nizza e altre idee di Carnevale",
      type: "eventi",
    },
  },
  {
    id: "san-valentino",
    label: "San Valentino",
    from: makeDate(9, 1),  // 1 settembre
    to: makeDate(12, 31),  // 31 dicembre
    primaryCta: {
      to: "/mete-stagionali#eventi-speciali",
      label: "Weekend romantici di San Valentino",
      type: "eventi",
    },
  },
  {
    id: "tulipani-amsterdam",
    label: "Fioritura tulipani Amsterdam",
    from: makeDate(9, 15), // 15 settembre
    to: makeDate(1, 15),   // 15 gennaio
    primaryCta: {
      to: "/mete-stagionali#primavera",
      label: "Amsterdam e Keukenhof in fiore",
      type: "eventi",
    },
  },
  {
    id: "ciliegi-giappone",
    label: "Fioritura ciliegi in Giappone",
    from: makeDate(9, 1),  // 1 settembre
    to: makeDate(12, 31),  // 31 dicembre
    primaryCta: {
      to: "/mete-viaggi-di-nozze#giappone",
      label: "Giappone tra hanami e tradizioni",
      type: "eventi",
    },
  },
  {
    id: "pasqua",
    label: "Pasqua",
    from: makeDate(9, 1),  // 1 settembre
    to: makeDate(2, 20),   // 20 febbraio
    primaryCta: {
      to: "/mete-stagionali#primavera",
      label: "City break e mare per Pasqua",
      type: "eventi",
    },
  },
  {
    id: "oktoberfest",
    label: "Oktoberfest",
    from: makeDate(4, 1),  // 1 aprile
    to: makeDate(6, 30),   // 30 giugno
    primaryCta: {
      to: "/mete-stagionali#eventi-speciali",
      label: "Monaco e Baviera per l’Oktoberfest",
      type: "eventi",
    },
  },
  {
    id: "benessere-spa",
    label: "Benessere & spa",
    from: makeDate(1, 1),
    to: makeDate(12, 31),
    primaryCta: {
      to: "/mete-stagionali#benessere",
      label: "Weekend benessere tutto l’anno",
      type: "benessere",
    },
  },
];

// 🔹 Calcolo stagione “meteo” – serve solo per l’anchor / immagine
const getSeasonByMonth = (month) => {
  if (month === 12 || month <= 2) return "inverno";
  if (month >= 3 && month <= 5) return "primavera";
  if (month >= 6 && month <= 8) return "estate";
  return "autunno";
};

// 🔸 Funzione principale: cosa sto vendendo OGGI?
export const getActiveSeasonForNow = (date = new Date()) => {
  const today = {
    month: date.getMonth() + 1,
    day: date.getDate(),
  };

  const seasonId = getSeasonByMonth(today.month);

  const activeCampaigns = SALES_CAMPAIGNS.filter((c) =>
    isInRange(today, c.from, c.to)
  );

  // Ordine di priorità per il titolo
  const PRIORITY_ORDER = [
    "mare-italia",
    "mare-europa-isole",
    "mare-inverno",
    "crociere",
    "viaggi-intercontinentali",
    "pasqua",
    "mercatini-natale",
    "capodanno",
    "carnevale",
    "san-valentino",
    "tulipani-amsterdam",
    "ciliegi-giappone",
    "oktoberfest",
    "benessere-spa",
  ];

  const sortedCampaigns = [...activeCampaigns].sort((a, b) => {
    const ai = PRIORITY_ORDER.indexOf(a.id);
    const bi = PRIORITY_ORDER.indexOf(b.id);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

  const primaryCampaign = sortedCampaigns[0] || null;

  return {
    seasonId,          // per immagine + anchor stagionale
    campaigns: sortedCampaigns,
    primaryCta: primaryCampaign?.primaryCta || null,
  };
};




