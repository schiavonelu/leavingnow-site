// src/config/seasonalSeoConfig.js

/**
 * Config SEO stagionale condivisa tra:
 * - Home (stagionali)
 * - pagine Mete (mare Italia / mare estero / capitali / mete stagionali)
 *
 * L’idea è: sempre base “agenzia viaggi Aversa / nord Napoli – Caserta”
 * + una coda stagionale agganciata alle campagne attive.
 */

// 🔹 Coda da aggiungere al TITLE in base alla campagna
export const CAMPAIGN_SEO_TITLE_TAIL = {
  // MARE
  "mare-italia":
    "Offerte Mare Italia da Aversa e nord Napoli – Sardegna, Sicilia, Salento",
  "mare-europa-isole":
    "Offerte Mare Estero – Grecia, Spagna, Canarie e Mediterraneo da Aversa",
  "mare-inverno":
    "Mare d’inverno – Canarie, Mar Rosso e mete al caldo dall’area nord di Napoli",

  // CROCIERE / INTERCONTINENTALI
  crociere:
    "Crociere Mediterraneo, Nord Europa e Caraibi con partenze comode da Napoli",
  "viaggi-intercontinentali":
    "Viaggi intercontinentali e viaggi di nozze su misura da Aversa",

  // MERCATINI / EVENTI
  "mercatini-natale":
    "Mercatini di Natale in Trentino, Austria, Germania e Alsazia",
  capodanno:
    "Capodanno in capitali europee e viaggi al caldo da Aversa e dintorni",
  carnevale:
    "Carnevale a Venezia, Nizza e Costa Azzurra con partenze dal nord Napoli",
  "san-valentino":
    "Weekend romantici di San Valentino in Italia ed Europa",

  // FIORITURE / EVENTI SPECIALI
  "tulipani-amsterdam":
    "Fioritura dei tulipani ad Amsterdam e Keukenhof con partenza da Napoli",
  "ciliegi-giappone":
    "Fioritura dei ciliegi in Giappone (hanami) con itinerari su misura",
  pasqua:
    "Viaggi di Pasqua tra capitali europee e Mediterraneo",
  oktoberfest:
    "Oktoberfest a Monaco e Baviera con partenze dall’area nord di Napoli",

  // BENESSERE
  "benessere-spa":
    "Weekend benessere & spa in Italia ed Europa tutto l’anno",
};

// 🔹 Testo extra da APPENDERE alla META DESCRIPTION
export const CAMPAIGN_SEO_DESCRIPTION_EXTRA = {
  "mare-italia":
    " In questo periodo ha senso muoversi soprattutto sul Mare Italia: Sardegna, Sicilia, Salento, Calabria e altre coste facilmente raggiungibili dall’area nord di Napoli e Caserta.",
  "mare-europa-isole":
    " In questa fase ti aiutiamo a bloccare le migliori soluzioni per il mare estero: Grecia, Spagna, Canarie e isole del Mediterraneo.",
  "mare-inverno":
    " Ora è il momento giusto per prenotare il mare d’inverno tra Canarie, Egitto e altre mete al caldo, con partenze comode da Napoli.",
  crociere:
    " Le campagne crociere sono attive: possiamo selezionare navi, cabine e itinerari migliori in base alle tue date e al tuo budget.",
  "viaggi-intercontinentali":
    " È anche il momento ideale per lavorare su viaggi intercontinentali e viaggi di nozze, combinando città e mare tropicale.",
  "mercatini-natale":
    " In questo periodo sono in vendita soprattutto mercatini di Natale tra Trentino, Austria, Germania e Alsazia.",
  capodanno:
    " È attiva anche la programmazione Capodanno tra capitali europee e mete al caldo.",
  carnevale:
    " Possiamo lavorare su Carnevale tra Venezia, Nizza e Costa Azzurra, in abbinata o come weekend singolo.",
  "san-valentino":
    " Se cerchi qualcosa di romantico, possiamo proporre weekend di San Valentino in capitali europee e hotel di charme.",
  "tulipani-amsterdam":
    " Le partenze per la fioritura dei tulipani ad Amsterdam e Keukenhof sono molto richieste: è il momento giusto per bloccarle.",
  "ciliegi-giappone":
    " I viaggi in Giappone durante l’hanami richiedono anticipo: possiamo lavorare su itinerari su misura.",
  pasqua:
    " Le proposte di Pasqua tra capitali europee e Mediterraneo sono particolarmente richieste in questo momento.",
  oktoberfest:
    " In questo periodo si aprono anche le vendite per l’Oktoberfest a Monaco e i dintorni.",
  "benessere-spa":
    " Inoltre possiamo programmare weekend benessere & spa in Italia ed Europa, validi tutto l’anno.",
};

// 🔹 Keywords extra per la stagionalità (si agganciano alle baseKeywords della pagina)
const CAMPAIGN_SEO_KEYWORDS = {
  "mare-italia":
    "offerte mare Italia Aversa, vacanze Sardegna da Napoli, vacanze Sicilia da Napoli, vacanze Salento da Caserta",
  "mare-europa-isole":
    "offerte mare estero Aversa, viaggi Grecia da Napoli, viaggi Canarie da Napoli, vacanze Spagna mare",
  "mare-inverno":
    "mare inverno Canarie, mare inverno Mar Rosso, vacanze dicembre al caldo, partenze mare inverno Napoli",
  crociere:
    "crociere Mediterraneo da Napoli, crociere Caraibi, crociere fiordi nord Europa, agenzia viaggi crociere Aversa",
  "viaggi-intercontinentali":
    "viaggi intercontinentali Aversa, viaggi di nozze su misura, combinati città e mare, viaggi lungo raggio Napoli",
  "mercatini-natale":
    "mercatini di Natale Trentino, mercatini di Natale Austria, viaggi mercatini da Napoli",
  capodanno:
    "capodanno in Europa da Napoli, capodanno capitali europee, capodanno al caldo",
  carnevale:
    "carnevale Venezia da Napoli, carnevale Nizza, carnevale Costa Azzurra",
  "san-valentino":
    "weekend San Valentino Europa, viaggi romantici da Napoli",
  "tulipani-amsterdam":
    "tulipani Amsterdam, parco Keukenhof, viaggi fioritura tulipani",
  "ciliegi-giappone":
    "fioritura ciliegi Giappone, hanami, viaggi Giappone primavera",
  pasqua:
    "viaggi Pasqua Europa, ponti di primavera, offerte Pasqua da Napoli",
  oktoberfest:
    "oktoberfest Monaco, viaggi oktoberfest da Napoli",
  "benessere-spa":
    "weekend benessere spa, terme in Italia, terme in Slovenia e Ungheria",
};

// 🔹 helper per costruire la stringa keywords extra
export const buildSeoKeywordsFromCampaigns = (campaigns = []) => {
  const seen = new Set();
  const result = [];

  campaigns.forEach((c) => {
    const kw = CAMPAIGN_SEO_KEYWORDS[c.id];
    if (kw && !seen.has(kw)) {
      seen.add(kw);
      result.push(kw);
    }
  });

  return result.join(", ");
};
