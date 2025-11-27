// src/pages/MeteStagionali.jsx
import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";

// 📌 Immagine di default per hero + tutte le card (per ora)
import heroImg from "../assets/destination/hero.webp";

const SEASONS = [
  {
    id: "inverno",
    name: "Inverno",
    period: "Dicembre – Febbraio",
    intro:
      "L’inverno è il momento ideale per rallentare e scegliere viaggi che scaldano il cuore: luci soffuse, atmosfere intime, neve, città illuminate e luoghi da vivere con calma.",
    cards: [
      {
        title: "Mercatini di Natale in Austria e Germania",
        badge: "Inverno / Mercatini",
        period: "Dicembre – metà Gennaio",
        description:
          "Un viaggio tra luci, profumi e dettagli che scaldano l’anima. Vienna, Monaco, Salisburgo o Norimberga: ogni città diventa un piccolo mondo fatto di tradizioni, artigianato, musica e atmosfere che sanno di casa e di festa.",
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
        period: "Tutto l’inverno",
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
        period: "Gennaio – Marzo",
        description:
          "Firenze, Roma, Venezia, Napoli: più autentiche, più vivibili, più tue. Musei senza code interminabili, ristoranti migliori, vie meno affollate. L’inverno è il periodo perfetto per godersi queste città con calma, come meritano.",
      },
    ],
  },
  {
    id: "primavera",
    name: "Primavera",
    period: "Marzo – Maggio",
    intro:
      "Temperature miti, giornate che si allungano e colori che tornano a farsi vedere: la primavera è la stagione perfetta per città d’arte, fioriture, primi bagni di sole e itinerari soft.",
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
    ],
  },
  {
    id: "estate",
    name: "Estate",
    period: "Giugno – Agosto",
    intro:
      "Mare, isole, grandi itinerari e viaggi più lunghi: l’estate è il momento perfetto per trasformare il desiderio di partire in un’esperienza intensa, completa e su misura.",
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
        title: "Mari lontani: Oceano Indiano e Caraibi",
        badge: "Lontani",
        period: "Stagionalità variabile",
        description:
          "Acque turchesi, resort esclusivi, natura rigogliosa e tramonti spettacolari. Maldive, Seychelles, Mauritius, Caraibi e molto altro: perfetti per chi sogna relax totale, servizi curati e atmosfere tropicali.",
      },
    ],
  },
  {
    id: "autunno",
    name: "Autunno",
    period: "Settembre – Novembre",
    intro:
      "Colori caldi, ritmi più lenti e bassa stagione: l’autunno è perfetto per chi ama vivere i luoghi con calma, tra natura, sapori e città più autentiche.",
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
          "Deserti, città antiche, architetture moderne, cucina intensa e panorami unici. Giordania, Israele, Emirati e altre destinazioni: un viaggio ricco, vario e sorprendente, da calibrare con attenzione.",
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
    ],
  },
];

const MeteStagionali = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Mete stagionali"
        subtitle="Ispirazioni di viaggio pensate per il periodo dell’anno, sempre costruite su misura."
        image={heroImg}
      />

      <Breadcrumb />

      {/* INTRO */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
            Idee di viaggio by Leaving Now
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-5">
            Idee, non pacchetti: ogni viaggio nasce da te
          </h1>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            Le proposte che trovi in questa pagina non sono offerte a scaffale,
            né pacchetti preconfezionati: sono spunti da cui partire per
            immaginare il tuo prossimo viaggio. Possiamo adattare ogni idea al
            periodo in cui vuoi partire, al tempo che hai a disposizione e al
            modo in cui ami viaggiare, oppure creare qualcosa di completamente
            diverso solo per te.
          </p>
        </div>
      </section>

      {/* STAGIONI */}
      {SEASONS.map((season) => (
        <section
          key={season.id}
          id={season.id}
          className={`py-12 md:py-16 ${
            season.id === "primavera" || season.id === "autunno"
              ? "bg-[#F8FAFC]"
              : "bg-white"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-1">
                  {season.name}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-2">
                  Mete per l&apos;{season.name.toLowerCase()}
                </h2>
                <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-[0.16em]">
                  {season.period}
                </p>
              </div>
              <p className="text-sm md:text-base text-slate-700 md:max-w-xl leading-relaxed text-justify">
                {season.intro}
              </p>
            </div>

            <p className="text-[11px] md:text-xs text-slate-500">
              Le mete indicate sono solo alcune idee possibili per questa
              stagione: ogni itinerario viene progettato su misura in base alle
              tue esigenze e al modo in cui ami viaggiare.
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {season.cards.map((card, idx) => (
                <ContinentCard
                  key={`${season.id}-${idx}`}
                  image={heroImg}
                  title={card.title}
                  badge={card.badge}
                  period={card.period}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Consulenza personalizzata
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi partire da una di queste idee o crearne una tutta nuova?
          </h2>

          <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto mb-6">
            Le mete stagionali sono un punto di partenza: il viaggio vero nasce
            quando ci racconti chi sei, quando vuoi partire e che tipo di
            esperienza immagini. Da lì costruiamo insieme il tuo itinerario,
            senza soluzioni standard e con un confronto diretto in agenzia o da
            remoto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Scrivici per parlarne insieme
            </a>
            <a
              href="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              Preferisci una consulenza in agenzia?
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeteStagionali;

