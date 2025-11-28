// src/data/mare-italia.js

// Periodi consigliati gestiti come "stagioni commerciali"
// bestSeasons usa valori tecnici:
// - "primavera"
// - "estate"
// - "autunno"

export const MARE_ITALIA_DESTINATIONS = [
  {
    id: "mare-italia-riviera-romagnola",
    title: "Riviera Romagnola",
    region: "Emilia-Romagna",
    badge: "Spiagge attrezzate",
    period: "Giugno – Settembre",
    bestSeasons: ["estate"],
    description:
      "Una lunga distesa di spiagge dorate, stabilimenti super attrezzati, hotel family-friendly e una tradizione di ospitalità unica in Italia. La Riviera Romagnola è perfetta per chi cerca comfort, servizi e una vita serale vivace tra passeggiate lungomare, bar, eventi e locali sulla spiaggia.",
  },
  {
    id: "mare-italia-versilia-elba",
    title: "Versilia e Isola d’Elba",
    region: "Toscana",
    badge: "Mare & eleganza",
    period: "Maggio – Settembre",
    bestSeasons: ["primavera", "estate"],
    description:
      "Un mix affascinante tra la mondanità della Versilia e le acque limpide dell’Isola d’Elba. Da Forte dei Marmi alle spiagge elbane nascoste tra scogliere e macchia mediterranea: qui si uniscono mare, eleganza, natura, cucina toscana e località perfette per ogni tipo di viaggiatore.",
  },
  {
    id: "mare-italia-sardegna-nord-esteso",
    title: "Nord Sardegna",
    region: "Sardegna",
    badge: "Mare da cartolina",
    period: "Giugno – Settembre",
    bestSeasons: ["estate"],
    description:
      "Un tratto di costa iconico: calette di sabbia finissima, mare turchese dai fondali bassi, rocce scolpite dal vento e panorami da cartolina. Il Nord Sardegna è ideale per chi desidera un mare straordinario e strutture di alto livello, con la possibilità di esplorare arcipelaghi come La Maddalena.",
  },
  {
    id: "mare-italia-sardegna-sud",
    title: "Sud Sardegna",
    region: "Sardegna",
    badge: "Dune & acque turchesi",
    period: "Giugno – Settembre",
    bestSeasons: ["estate"],
    description:
      "Chia, Costa Rei, Teulada e Villasimius regalano spiagge di sabbia chiara, acque trasparenti e paesaggi naturali incontaminati. Il Sud Sardegna è perfetto per chi cerca tranquillità, lunghe spiagge poco affollate e scenari selvaggi con colori che ricordano i tropici.",
  },
  {
    id: "mare-italia-salento-esteso",
    title: "Salento",
    region: "Puglia",
    badge: "Mare cristallino",
    period: "Giugno – Settembre",
    bestSeasons: ["primavera", "estate"],
    description:
      "Un alternarsi di spiagge caraibiche, scogliere panoramiche e borghi bianchi ricchi di tradizioni. Dall’Adriatico allo Ionio, il Salento unisce mare spettacolare, ottima cucina, masserie immerse negli ulivi, feste in piazza e un’identità genuina che conquista ogni viaggiatore.",
  },
  {
    id: "mare-italia-gargano-esteso",
    title: "Gargano",
    region: "Puglia",
    badge: "Natura & falesie",
    period: "Giugno – Settembre",
    bestSeasons: ["estate"],
    description:
      "Scenari intensi: falesie bianche, baie nascoste, grotte marine e foreste interne come la Foresta Umbra. Il Gargano è ideale per chi ama il mare cristallino unito a panorami spettacolari, trekking, borghi antichi e la possibilità di raggiungere facilmente le Isole Tremiti.",
  },
  {
    id: "mare-italia-calabria-ionica",
    title: "Calabria ionica",
    region: "Calabria",
    badge: "Spiagge tranquille",
    period: "Giugno – Settembre",
    bestSeasons: ["estate"],
    description:
      "Un litorale lungo e tranquillo, con spiagge ampie, acque trasparenti e borghi ricchi di storia come Gerace e Rocca Imperiale. La Calabria ionica è perfetta per chi desidera relax, ritmi lenti, mare pulito e un’ottima tradizione gastronomica mediterranea.",
  },
  {
    id: "mare-italia-calabria-tirrenica",
    title: "Calabria tirrenica",
    region: "Calabria",
    badge: "Tramonti spettacolari",
    period: "Giugno – Settembre",
    bestSeasons: ["estate"],
    description:
      "Un tratto costiero scenografico che alterna scogliere, calette, borghi affacciati sul mare e panorami iconici sullo Stromboli. La Calabria tirrenica è ideale per chi cerca mare cristallino, attività all’aperto ed emozioni al tramonto, specialmente lungo la Costa Viola.",
  },
  {
    id: "mare-italia-sicilia-orientale-estesa",
    title: "Sicilia orientale",
    region: "Sicilia",
    badge: "Mare & città d’arte",
    period: "Maggio – Ottobre",
    bestSeasons: ["primavera", "estate", "autunno"],
    description:
      "Tra Catania, Siracusa, Noto e Ragusa si incontrano spiagge dorate, riserve naturali, città barocche e siti archeologici millenari. Qui il mare si unisce a cultura, paesaggi vulcanici e una cucina ricchissima, ideale per un viaggio vario e completo.",
  },
  {
    id: "mare-italia-sicilia-occidentale-estesa",
    title: "Sicilia occidentale",
    region: "Sicilia",
    badge: "Isole & saline",
    period: "Maggio – Settembre",
    bestSeasons: ["primavera", "estate"],
    description:
      "Un territorio che alterna saline, tonnare, borghi sul mare e isole meravigliose come Favignana e Levanzo. La Sicilia occidentale è perfetta per chi ama mare trasparente, piccole isole da esplorare in barca, storia e tradizioni legate alla pesca.",
  },
  {
    id: "mare-italia-riviera-ligure",
    title: "Riviera Ligure di Levante",
    region: "Liguria",
    badge: "Borghi & scogliere",
    period: "Maggio – Settembre",
    bestSeasons: ["primavera", "estate"],
    description:
      "Le Cinque Terre, Portovenere, Lerici e le baie racchiuse tra falesie e macchia mediterranea offrono uno dei tratti costieri più iconici d’Italia. Perfetto per chi ama camminare lungo sentieri panoramici, scoprire borghi colorati e tuffarsi in un mare limpido dalle mille sfumature.",
  },
  {
    id: "mare-italia-litorale-veneto",
    title: "Venezia & Litorale Veneto",
    region: "Veneto",
    badge: "Lunghe spiagge dorate",
    period: "Giugno – Settembre",
    bestSeasons: ["estate"],
    description:
      "Dalle spiagge amplissime di Jesolo, Bibione e Caorle alle atmosfere eleganti e romantiche di Venezia. Perfetto per famiglie e viaggiatori in cerca di servizi, piste ciclabili, mercatini, borghi costieri e la possibilità di alternare mare, lagune e città d’arte.",
  },
  {
    id: "mare-italia-maremma-argentario",
    title: "Maremma e Argentario",
    region: "Toscana",
    badge: "Natura & calette",
    period: "Maggio – Settembre",
    bestSeasons: ["primavera", "estate"],
    description:
      "Un tratto di costa selvaggia e incontaminata, con calette raggiungibili tramite sentieri, borghi affacciati sul mare e panorami verdi che scendono verso l’acqua. L’Argentario e la Maremma combinano mare cristallino, natura, trekking e cucina autentica toscana, perfette per un viaggio rilassante ma ricco di esperienze.",
  },
];

