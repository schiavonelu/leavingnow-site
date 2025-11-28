// src/data/mete-stagionali.js

// Qui i periodi sono già "commerciali", non solo meteo.
// L’idea è comunicare che si inizia a pensarci / venderli prima.

export const SEASONS = [
  {
    id: "inverno",
    name: "Inverno",
    period: "Novembre – Febbraio",
    intro:
      "L’inverno è il momento ideale per rallentare e scegliere viaggi che scaldano il cuore: luci soffuse, atmosfere intime, neve, città illuminate e luoghi da vivere con calma. Già da novembre iniziamo a immaginare insieme mercatini, montagne e città d’arte in bassa stagione.",
    cards: [
      {
        title: "Mercatini di Natale in Europa",
        badge: "Inverno / Mercatini",
        period: "Fine Novembre – inizio Gennaio",
        description:
          "Un viaggio tra luci, profumi e dettagli che scaldano l’anima. Vienna, Praga, Salisburgo o Budapest: ogni città diventa un piccolo mondo fatto di tradizioni, artigianato, musica e atmosfere che sanno di casa e di festa.",
      },
      {
        title: "Settimana bianca sulle Alpi",
        badge: "Neve & relax",
        period: "Gennaio – Marzo",
        description:
          "Montagne maestose, neve fresca, rifugi in legno e spa panoramiche. Che tu voglia sciare tutto il giorno o semplicemente respirare aria buona e leggere davanti al camino, l’inverno sulle Alpi è un abbraccio caldo fatto di ritmo lento e silenzi perfetti.",
      },
      {
        title: "City break invernale a Parigi o Londra",
        badge: "City break",
        period: "Da Novembre a Febbraio",
        description:
          "Vetrine illuminate, musei, quartieri iconici e locali dove rifugiarsi dal freddo. Un viaggio ricercato, ideale per chi ama le atmosfere eleganti e un po’ cinematografiche delle grandi capitali europee durante l’inverno.",
      },
      {
        title: "Nord Europa tra design e hygge",
        badge: "Nord Europa",
        period: "Dicembre – Marzo",
        description:
          "Copenaghen, Oslo, Stoccolma: città curate nei minimi dettagli, design scandinavo, caffetterie intime e una qualità della vita che si percepisce in ogni strada. Perfetto per chi cerca calma, stile e autenticità, anche nei mesi più freddi.",
      },
      {
        title: "Aurora boreale in Lapponia",
        badge: "Esperienze uniche",
        period: "Dicembre – Marzo",
        description:
          "Un viaggio che resta per sempre: lodge immersi nella neve, glass igloo sotto le stelle, motoslitte, slitte trainate da husky e – se il cielo collabora – l’aurora che danza sopra la tua testa. Ideale per chi sogna un’esperienza davvero diversa dal solito.",
      },
      {
        title: "Città d’arte italiane in bassa stagione",
        badge: "Italia",
        period: "Novembre – Marzo",
        description:
          "Firenze, Roma, Venezia, Torino: più autentiche, più vivibili, più tue. Musei senza code interminabili, ristoranti migliori, vie meno affollate. L’inverno è il periodo perfetto per godersi queste città con calma, come meritano.",
      },
      {
        title: "Capitali europee d’inverno",
        badge: "City break",
        period: "Novembre – Febbraio",
        description:
          "Berlino, Vienna, Praga, Bruxelles: grandi capitali europee con luci, musei, mercatini e quartieri da vivere a piedi. Perfette per chi cerca un mix di cultura, cibo e atmosfera invernale.",
      },
      {
        title: "Weekend benessere e terme d’inverno",
        badge: "Relax",
        period: "Novembre – Marzo",
        description:
          "Spa, rituali di benessere, acqua calda, natura e silenzio. Un inverno più morbido, fatto di weekend brevi ma rigeneranti in boutique hotel, terme e resort benessere.",
      },
      {
        title: "Mare d’inverno: Sharm e Mar Rosso",
        badge: "Mare d’inverno",
        period: "Novembre – Marzo",
        description:
          "Quando qui fa freddo, sul Mar Rosso trovi sole, mare e temperature piacevoli. Sharm el Sheikh e altre località del Mar Rosso sono perfette per chi d’inverno sogna luce, snorkeling e relax.",
      },
    ],
  },
  {
    id: "primavera",
    name: "Primavera",
    period: "Febbraio – Maggio",
    intro:
      "Temperature miti, giornate che si allungano e colori che tornano a farsi vedere: la primavera è la stagione perfetta per città d’arte, fioriture, primi bagni di sole e itinerari soft. Si inizia a pensarla già tra fine inverno e inizio primavera, per cogliere il momento giusto.",
    cards: [
      {
        title: "Olanda e grandi parchi fioriti",
        badge: "Fioriture",
        period: "Marzo – Aprile",
        description:
          "Tulipani, parchi in fiore, canali e piccoli villaggi. Una primavera delicata, fatta di colori pastello, biciclette, mercati locali e musei che raccontano secoli di arte. Ideale per chi ama viaggi leggeri ma pieni di bellezza.",
      },
      {
        title: "Andalusia on the road",
        badge: "Tour su misura",
        period: "Marzo – Maggio",
        description:
          "Patios colorati, tapas, città dal fascino moresco e strade che profumano di Mediterraneo. Un itinerario caldo e accogliente tra Siviglia, Cordoba, Granada, Malaga e piccoli paesi, perfetto per chi ama guidare tra città e paesini scenografici.",
      },
      {
        title: "Capitali europee in fiore",
        badge: "City break",
        period: "Primavera",
        description:
          "Vienna, Praga, Budapest, Lisbona e molte altre: città eleganti, luminose, piacevoli da vivere a piedi. Ideali per un break di qualche giorno tra cultura, cucina locale, punti panoramici e una vita cittadina vivace ma non frenetica.",
      },
      {
        title: "Islanda tra cascate e paesaggi lunari",
        badge: "Nature & adventure",
        period: "Aprile – Maggio",
        description:
          "Paesaggi che sembrano un altro pianeta: geyser, cascate, vulcani e scogliere scolpite dal vento. La primavera è uno dei periodi più belli per vivere l’Islanda con ritmi morbidi, giornate che si allungano e scenari che cambiano a ogni curva.",
      },
      {
        title: "Costiera Amalfitana e Sud Italia",
        badge: "Italia",
        period: "Aprile – Giugno",
        description:
          "Strade panoramiche, terrazze vista mare, limoni, profumi, colori e sapori intensi. La Costiera e il Sud Italia sono perfetti in primavera, quando l’aria è dolce e i luoghi sono ancora vivibili prima dei grandi flussi estivi.",
      },
      {
        title: "Giappone in primavera",
        badge: "Lontani",
        period: "Marzo – Aprile",
        description:
          "Templi, giardini, tradizioni, quartieri ultramoderni e – quando la stagione lo permette – la magia dei ciliegi in fiore. Un viaggio di grande equilibrio, tra spiritualità, architetture e nuove scoperte in ogni quartiere.",
      },
      {
        title: "Sharm e Mar Rosso di primavera",
        badge: "Mare & relax",
        period: "Marzo – Maggio",
        description:
          "Clima piacevole, mare già godibile, meno caldo rispetto all’estate piena. La primavera sul Mar Rosso è perfetta per chi cerca snorkeling, relax e servizi curati senza troppa folla.",
      },
      {
        title: "Weekend benessere e terme di primavera",
        badge: "Relax",
        period: "Febbraio – Maggio",
        description:
          "Quando le giornate si allungano ma il clima è ancora morbido, un weekend alle terme o in un boutique hotel con spa è l’ideale per ricaricare le energie tra un impegno e l’altro.",
      },
      {
        title: "City break di Pasqua in Europa",
        badge: "City break",
        period: "Marzo – Aprile",
        description:
          "Un ponte di pochi giorni per scoprire una capitale europea o una città d’arte: musei, quartieri creativi, mercati locali e cucina tipica. Perfetto per chi vuole sfruttare al meglio le festività.",
      },
    ],
  },
  {
    id: "estate",
    name: "Estate",
    period: "Maggio – Settembre",
    intro:
      "Mare, isole, grandi itinerari e viaggi più lunghi: l’estate è il momento perfetto per trasformare il desiderio di partire in un’esperienza intensa, completa e su misura. Si costruisce con anticipo, già dalla tarda primavera, per trovare i posti giusti al momento giusto.",
    cards: [
      {
        title: "Isole della Grecia",
        badge: "Mare & relax",
        period: "Giugno – Settembre",
        description:
          "Tramonti rossi, baie azzurre, vicoli bianchi e taverne che sanno di mare. Dalle isole più conosciute a quelle più intime, la Grecia è perfetta per chi cerca relax, autenticità e panorami che restano impressi a lungo.",
      },
      {
        title: "Baleari e Canarie",
        badge: "Spagna",
        period: "Giugno – Settembre",
        description:
          "Dal mare cristallino di Formentera ai paesaggi vulcanici di Lanzarote. Due arcipelaghi diversi, accomunati da atmosfera, sapori e lifestyle mediterraneo. Adatti a coppie, famiglie o gruppi di amici.",
      },
      {
        title: "Stati Uniti on the road",
        badge: "Grandi itinerari",
        period: "Estate",
        description:
          "Strade infinite, natura immensa, città iconiche e una sensazione continua di libertà. Dalla West Coast ai parchi dell’Ovest, fino alla East Coast: un viaggio che si costruisce curva dopo curva e che diventa un ricordo indelebile.",
      },
      {
        title: "Mare Italia tra isole e coste",
        badge: "Italia",
        period: "Giugno – Settembre",
        description:
          "Sardegna, Sicilia, Puglia, Calabria e tante altre coste: spiagge, borghi, profumi e ospitalità italiana. Un viaggio semplice solo in apparenza, che diventa speciale quando viene costruito esattamente sui tuoi ritmi.",
      },
      {
        title: "Fiordi e Nord Europa in crociera",
        badge: "Crociera",
        period: "Giugno – Agosto",
        description:
          "Ghiacciai, montagne, baie silenziose e città nordiche eleganti. Una crociera panoramica e confortevole, ideale per chi vuole unire comodità a bordo ed escursioni pensate per valorizzare ogni scalo.",
      },
      {
        title: "Mari lontani: Oceano Indiano",
        badge: "Lontani",
        period: "Stagionalità variabile",
        description:
          "Acque turchesi, resort esclusivi, natura rigogliosa e tramonti spettacolari. Maldive, Seychelles, Mauritius, Zanzibar e molto altro: perfetti per chi sogna relax totale, servizi curati e atmosfere tropicali.",
      },
      {
        title: "Isole greche più intime",
        badge: "Mare & relax",
        period: "Giugno – Settembre",
        description:
          "Al di là delle isole più famose, esistono piccole isole greche più tranquille, con porticcioli, taverne di famiglia e poche camere vista mare. Perfette per chi cerca autenticità e silenzio.",
      },
      {
        title: "Nord Europa e capitali d’estate",
        badge: "Nord Europa",
        period: "Giugno – Agosto",
        description:
          "Copenaghen, Stoccolma, Oslo, Helsinki: città luminose, vivibili, circondate da natura. L’estate è il momento perfetto per viverle all’aperto tra parchi, waterfront e quartieri di design.",
      },
      {
        title: "Nord America tra città e parchi",
        badge: "Lontani",
        period: "Giugno – Settembre",
        description:
          "New York, Toronto, Montréal, ma anche i grandi parchi del Nord America: un viaggio che combina skyline, natura, laghi e panorami sconfinati. Perfetto per un’estate ricca e dinamica.",
      },
    ],
  },
  {
    id: "autunno",
    name: "Autunno",
    period: "Settembre – Novembre",
    intro:
      "Colori caldi, ritmi più lenti e bassa stagione: l’autunno è perfetto per chi ama vivere i luoghi con calma, tra natura, sapori e città più autentiche. È una stagione che si presta sia a brevi fughe che a viaggi di gusto e benessere.",
    cards: [
      {
        title: "Foliage in Italia e in Europa",
        badge: "Natura",
        period: "Ottobre – Novembre",
        description:
          "Colori caldi, boschi silenziosi, laghi, colline e aria fresca. Un viaggio ideale per chi ama osservare il paesaggio che cambia ogni giorno e cerca luoghi dove ritrovare spazio e respiro.",
      },
      {
        title: "City break d’autunno",
        badge: "City break",
        period: "Settembre – Novembre",
        description:
          "Lisbona, Barcellona, Berlino, Copenaghen e molte altre: città più tranquille, più vivibili, perfette per cultura, gastronomia, quartieri creativi e vita locale autentica, senza la folla dei mesi estivi.",
      },
      {
        title: "Weekend benessere e terme",
        badge: "Relax",
        period: "Autunno",
        description:
          "Spa, rituali di benessere, acqua calda, natura e silenzio. Un viaggio intimo e rigenerante, ideale per staccare davvero e rientrare con energia nuova.",
      },
      {
        title: "Tour in Medio Oriente",
        badge: "Cultura & storia",
        period: "Autunno",
        description:
          "Deserti, città antiche, architetture moderne, cucina intensa e panorami unici. Giordania, Emirati e altre destinazioni: un viaggio ricco, vario e sorprendente, da calibrare con attenzione.",
      },
      {
        title: "Esperienze enogastronomiche in Italia",
        badge: "Food & wine",
        period: "Settembre – Novembre",
        description:
          "Langhe, Toscana, Umbria, Sicilia: vino, prodotti locali, borghi e agriturismi. L’autunno è la stagione migliore per un viaggio dedicato ai sapori, alle tradizioni e all’ospitalità italiana.",
      },
      {
        title: "Viaggi long haul in bassa stagione",
        badge: "Lontani",
        period: "Autunno",
        description:
          "Sud-est asiatico, Sud America, Africa australe e molte altre mete lontane: clima ideale in molte destinazioni, meno affollamento, ritmi più piacevoli. Una scelta elegante per chi vuole scoprire il mondo fuori dai periodi canonici.",
      },
      {
        title: "Capitali europee d’autunno",
        badge: "City break",
        period: "Settembre – Novembre",
        description:
          "Parigi, Vienna, Budapest, Bruxelles: in autunno le capitali europee si accendono di colori caldi e ritmi più lenti. Perfette per chi ama musei, bistrot e lunghe passeggiate.",
      },
      {
        title: "Sharm e Mar Rosso in autunno",
        badge: "Mare & relax",
        period: "Ottobre – Novembre",
        description:
          "Quando qui l’aria si rinfresca, sul Mar Rosso l’autunno è ancora una stagione di sole pieno. Ideale per chi vuole un ultimo tuffo nel caldo, tra snorkeling, barriere coralline e relax.",
      },
      {
        title: "East Coast USA in versione foliage",
        badge: "Lontani",
        period: "Settembre – Ottobre",
        description:
          "Boston, New York, il New England e le strade immerse nei colori del foliage: un viaggio scenografico, tra città iconiche e piccoli centri immersi nella natura.",
      },
    ],
  },
];
