// src/data/mete-stagionali.js

export const SEASONS = [
  {
    id: "inverno",
    name: "Inverno",
    period: "Dicembre – Marzo",
    intro:
      "L’inverno è il momento giusto per vivere mercatini di Natale, città illuminate, montagne innevate e mare lontano dove ritrovare il caldo.",
    cards: [
      {
        slug: "inverno-mercatini-trentino-austria",
        title: "Mercatini di Natale tra Trentino e Austria",
        badge: "Mercatini di Natale",
        period: "Fine novembre – dicembre",
        description:
          "Bolzano, Merano, Bressanone e le città austriache come Innsbruck e Salisburgo: casette di legno, vin brulé, luci e atmosfera perfetta per partire in coppia, in famiglia o con amici.",
      },
      {
        slug: "inverno-alsazia-germania-romantica",
        title: "Alsazia e Germania romantica",
        badge: "Mercatini di Natale",
        period: "Fine novembre – dicembre",
        description:
          "Colmar, Strasburgo e i villaggi alsaziani sembrano usciti da un libro di fiabe. Ideale per chi vuole un viaggio breve ma molto scenografico, tra luci, mercatini e case a graticcio.",
      },
      {
        slug: "inverno-canarie-mare-inverno",
        title: "Canarie e mare d’inverno",
        badge: "Mare d’inverno",
        period: "Dicembre – Marzo",
        description:
          "Tenerife, Gran Canaria, Lanzarote o Fuerteventura: clima mite tutto l’anno, passeggiate, spiagge e piccole escursioni. Perfetto per chi vuole staccare dal freddo senza volare troppo lontano.",
      },
    ],
  },
  {
    id: "primavera",
    name: "Primavera",
    period: "Marzo – Maggio",
    intro:
      "La primavera è la stagione delle fioriture, dei ponti e dei primi viaggi al mare. Le città europee si riempiono di vita e le temperature sono perfette per girare.",
    cards: [
      {
        slug: "primavera-amsterdam-tulipani",
        title: "Amsterdam e fioritura dei tulipani",
        badge: "Fioriture & city break",
        period: "Metà aprile – inizio maggio",
        description:
          "Amsterdam, i canali, le case strette affacciate sull’acqua e il parco di Keukenhof. Ideale per chi vuole unire una città vivace alla magia dei campi di tulipani in fiore.",
      },
      {
        slug: "primavera-giappone-hanami",
        title: "Giappone durante l’hanami",
        badge: "Ciliegi in fiore",
        period: "Fine marzo – aprile",
        description:
          "Tokyo, Kyoto, Osaka e i parchi in fiore: l’hanami è uno dei momenti più suggestivi per visitare il Giappone. Un’idea forte anche per un viaggio di nozze culturale.",
      },
      {
        slug: "primavera-pasqua-capitali-mediterraneo",
        title: "Pasqua tra capitali e Mediterraneo",
        badge: "Pasqua & ponti",
        period: "Marzo – Aprile",
        description:
          "City break a Barcellona, Siviglia, Valencia, Nizza o Malta, oppure primi assaggi di mare in Italia e Grecia. Perfetto per sfruttare i ponti con viaggi brevi ma intensi.",
      },

      // 🔹 Nuove mete primaverili

      {
        slug: "primavera-barcellona-ramblas-mare",
        title: "Barcellona tra Ramblas e mare",
        badge: "City break & mare",
        period: "Marzo – Maggio",
        description:
          "Una città vivace affacciata sul Mediterraneo: Ramblas, Barrio Gótico, Sagrada Familia e il lungomare. Perfetta in primavera, quando si può già passeggiare in riva al mare senza il caldo estivo.",
      },
      {
        slug: "primavera-siviglia-andalusa",
        title: "Siviglia e la primavera andalusa",
        badge: "Andalusia & tradizioni",
        period: "Marzo – Maggio",
        description:
          "Patios fioriti, piazze luminose, l’Alcázar e la Cattedrale. La primavera è il momento migliore per vivere Siviglia, tra Semana Santa, Feria de Abril e temperature ideali per girare a piedi.",
      },
      {
        slug: "primavera-valencia-arti-mare",
        title: "Valencia tra Città delle Arti e mare",
        badge: "Design & spiagge",
        period: "Marzo – Maggio",
        description:
          "La Città delle Arti e delle Scienze, il centro storico, il Turia trasformato in parco e le spiagge urbane. Valencia è perfetta per unire architettura moderna, vita all’aperto e cucina mediterranea.",
      },
      {
        slug: "primavera-malta-storia-mare",
        title: "Malta tra storia e prime giornate di mare",
        badge: "Storia & mare",
        period: "Marzo – Maggio",
        description:
          "La Valletta, Mdina, i villaggi dei pescatori e le baie rocciose. In primavera Malta offre temperature miti, meno folla e già le prime giornate da passare in riva al mare.",
      },
      {
        slug: "primavera-nizza-costa-azzurra",
        title: "Nizza e Costa Azzurra di primavera",
        badge: "Riviera & relax",
        period: "Marzo – Maggio",
        description:
          "Lungomare elegante, vicoli della città vecchia, mercati colorati e la possibilità di esplorare la Costa Azzurra tra Cannes, Antibes e Monaco. Ideale per un weekend chic ma rilassato.",
      },
    ],
  },
  
  {
    id: "autunno",
    name: "Autunno",
    period: "Settembre – Novembre",
    intro:
      "L’autunno è la stagione perfetta per grandi viaggi, città europee meno affollate, eventi sportivi e prime idee per Natale e Capodanno.",
    cards: [
      {
        slug: "autunno-capitali-europee",
        title: "Capitali europee fuori stagione",
        badge: "Capitali & city break",
        period: "Settembre – Novembre",
        description:
          "Parigi, Londra, Madrid, Lisbona, Amsterdam, Porto e molte altre. Temperature piacevoli, meno folla e prezzi spesso più interessanti. Ideale per weekend lunghi e fughe improvvisate.",
      },
      {
        slug: "autunno-torino-atp-finals",
        title: "Torino ATP Finals",
        badge: "Eventi sportivi",
        period: "Novembre (ATP Finals)",
        description:
          "Torino ospita le ATP Finals: un’ottima occasione per abbinare grande tennis, musei, luci d’artista e una città ricca di locali, caffè storici e cultura.",
      },
      {
        slug: "autunno-milano-cortina-montagna",
        title: "Milano Cortina e montagna",
        badge: "Montagna & grandi eventi",
        period: "Autunno – inverno 2026",
        description:
          "In vista dell’appuntamento olimpico 2026, l’area tra Milano e Cortina diventa sempre più interessante per chi ama montagna, sport invernali e weekend tra città e natura.",
      },

      // 🔹 Nuove mete autunnali / city break

      {
        slug: "autunno-porto-douro",
        title: "Porto tra azulejos e vino sul Douro",
        badge: "City break & degustazioni",
        period: "Settembre – Novembre",
        description:
          "Una città in salita fatta di vicoli, azulejos e locali affacciati sul fiume Douro. Ideale in autunno per unire visite, degustazioni di vino e atmosfera romantica.",
      },
      {
        slug: "autunno-cracovia",
        title: "Cracovia tra castelli e piazze",
        badge: "Storia & suggestione",
        period: "Settembre – Novembre",
        description:
          "La Piazza del Mercato, il Castello di Wawel, il quartiere ebraico e le escursioni nei dintorni. Cracovia è perfetta fuori stagione, con atmosfere intense e ancora prezzi accessibili.",
      },
      {
        slug: "autunno-danzica-baltico",
        title: "Danzica e il Baltico",
        badge: "Città sul mare",
        period: "Settembre – Ottobre",
        description:
          "Case colorate, porto storico, vicoli medievali e il mare del Baltico a pochi passi. Danzica è ideale per un city break diverso dal solito, tra mare del nord e storia.",
      },
      {
        slug: "autunno-lione-gastronomia-luci",
        title: "Lione tra gastronomia e luci",
        badge: "Cibo & città",
        period: "Ottobre – Novembre",
        description:
          "Capitale gastronomica di Francia, con bouchon tradizionali, quartieri storici e la celebre Festa delle Luci. Perfetta per chi ama abbinare cucina, cultura e atmosfera francese.",
      },
      {
        slug: "autunno-marsiglia-mediterraneo",
        title: "Marsiglia e il Mediterraneo d’autunno",
        badge: "Mare & calanchi",
        period: "Settembre – Ottobre",
        description:
          "Porto vecchio, quartieri vivaci e la possibilità di esplorare i Calanchi tra Marsiglia e Cassis. In autunno il clima è ancora mite e le folle estive sono ormai finite.",
      },
    ],
  },
  {
    id: "benessere",
    name: "Benessere & spa",
    period: "Tutto l’anno",
    intro:
      "Weekend benessere, spa panoramiche e piccoli hotel con area relax: perfetti da regalarsi o da regalare in ogni momento dell’anno.",
    cards: [
      {
        slug: "benessere-trentino-terme-montagne",
        title: "Trentino Alto Adige tra terme e montagne",
        badge: "Benessere & natura",
        period: "Tutto l’anno",
        description:
          "Strutture con spa panoramiche, piscine vista montagna e ottima cucina locale. Ideale per chi cerca un weekend rigenerante in coppia o con amici.",
      },
      {
        slug: "benessere-slovenia-ungheria-termale",
        title: "Slovenia e Ungheria termale",
        badge: "Spa & città d’arte",
        period: "Tutto l’anno",
        description:
          "Località termali in Slovenia e le grandi terme di Budapest: perfette per abbinare benessere, visite culturali e un po’ di vita cittadina.",
      },
      {
        slug: "benessere-italia-laghi-borghi",
        title: "Italia tra laghi e borghi",
        badge: "Weekend benessere",
        period: "Tutto l’anno",
        description:
          "Lago di Garda, Lago di Como e piccoli borghi con hotel dotati di spa. Un’idea semplice ma molto efficace per staccare senza allontanarsi troppo.",
      },
    ],
  },
  {
    id: "eventi-speciali",
    name: "Eventi speciali",
    period: "Date selezionate",
    intro:
      "Oltre alle stagioni classiche, alcuni viaggi ruotano attorno a eventi ben precisi: Carnevale, Capodanno, Oktoberfest e molto altro.",
    cards: [
      {
        slug: "eventi-carnevale-venezia-nizza",
        title: "Carnevale tra Venezia e Nizza",
        badge: "Carnevale",
        period: "Gennaio – Febbraio",
        description:
          "Il Carnevale di Venezia con le sue maschere e calli, oppure Nizza con la sua atmosfera più solare sul mare. Perfetti per un weekend diverso dal solito, tra sfilate, carri e feste in piazza.",
      },
      {
        slug: "eventi-oktoberfest-monaco",
        title: "Oktoberfest a Monaco",
        badge: "Oktoberfest",
        period: "Settembre – Ottobre",
        description:
          "Monaco di Baviera durante l’Oktoberfest: tende, musica, birrerie storiche e possibilità di abbinare anche castelli e paesini bavaresi. Ideale per gruppi di amici e appassionati di eventi.",
      },
      {
        slug: "eventi-capodanno-capitale-europea",
        title: "Capodanno in capitale europea",
        badge: "Capodanno",
        period: "Fine dicembre – inizio gennaio",
        description:
          "Parigi (anche con Disneyland), Londra, Madrid, Lisbona, Amsterdam, Barcellona, Porto, Cracovia e molte altre. Un mix di feste, fuochi d’artificio, piazze illuminate e locali aperti fino a tardi per salutare l’anno in viaggio.",
      },
    ],
  },
];



