// src/pages/ViaggiDiNozze.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Plane,
  Sparkles,
  MapPinned,
  CalendarRange,
  ShieldCheck,
  Gift,
  Calendar,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

// 📌 Immagine hero principale
import heroImg from "../assets/viaggi-nozze/hero.webp";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "59cd3a4d-3c21-4152-8f8d-95c3c2590684";

// Opzioni meta viaggio di nozze (solo etichette, ordine alfabetico, Altro alla fine)
const META_OPTIONS = [
  "Africa con safari + mare",
  "Bali + Singapore + Maldive",
  "Bangkok + Koh Samui",
  "Crociera (Mediterraneo, fiordi, Caraibi…)",
  "Dubai + Koh Samui",
  "Dubai + Maldive",
  "Dubai + Mauritius",
  "Dubai + Singapore + Maldive",
  "Europa (città, tour, on the road)",
  "Giappone / Asia",
  "Istanbul + Cappadocia + Bodrum",
  "Mare tropicale (Maldive, Polinesia, Seychelles, Caraibi…)",
  "New York + Bahamas",
  "New York + Bayahibe",
  "New York + Crociera Bahamas",
  "New York + Crociera dei Caraibi",
  "New York + Messico",
  "San Francisco + Hawaii",
  "San Francisco + Los Angeles + Riviera Maya",
  "San Francisco + Polinesia Francese",
  "Tokyo + Kyoto + Osaka + Maldive",
  "Tour Thailandia del Nord + Koh Samui",
  "Stati Uniti – tour on the road",
  "Altro (specifica)",
];

// Card “perché sceglierci”
const ValueCard = ({ icon, title, text }) => (
  <article className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-5 md:p-6 flex gap-3 md:gap-4 items-start">
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F1FD] text-[#0863D6] shadow-sm shrink-0">
      <span className="text-xl">{icon}</span>
    </div>
    <div className="text-left">
      <h3 className="text-base md:text-lg font-semibold text-[#132C50] mb-1">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
        {text}
      </p>
    </div>
  </article>
);

const ViaggiDiNozze = () => {
  const [meta, setMeta] = useState("");
  const [otherMeta, setOtherMeta] = useState("");
  const [status, setStatus] = useState(null); // success | error | null
  const [loading, setLoading] = useState(false);
  const [openFaqId, setOpenFaqId] = useState(null);

  const showOtherMeta = meta === "Altro (specifica)";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // blocco invio se meta è vuoto (caso limite se l’utente cancella tutto)
    if (!meta) {
      setStatus("error");
      setLoading(false);
      return;
    }

    const form = e.target;
    const data = new FormData(form);

    data.append("access_key", WEB3FORMS_KEY);
    data.append(
      "subject",
      "Richiesta viaggio di nozze dal sito Leaving Now"
    );
    data.append("from_page", "Viaggi di nozze (/viaggi-di-nozze)");

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: data,
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        setMeta("");
        setOtherMeta("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Dati strutturati FAQ (rich snippet) – allineati alla sezione FAQ in pagina
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto tempo prima conviene organizzare il viaggio di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per un viaggio di nozze intercontinentale o in alta stagione consigliamo di iniziare a pianificare tra gli 8 e i 12 mesi prima della partenza. In questo modo è più facile trovare buone combinazioni di voli, hotel ed esperienze e gestire con calma eventuali richieste particolari.",
        },
      },
      {
        "@type": "Question",
        name: "Possiamo iniziare tutto online o dobbiamo venire subito in agenzia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L’intero percorso può essere gestito completamente da remoto: potete raccontarci le vostre idee, ricevere preventivi e valutare le proposte tramite telefono, email o videochiamate dedicate. L’incontro in agenzia non è obbligatorio, ma è sempre possibile se preferite definire alcuni dettagli di persona.",
        },
      },
      {
        "@type": "Question",
        name: "Da quali aeroporti organizzate principalmente le partenze per i viaggi di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per i viaggi di nozze internazionali coordiniamo soprattutto partenze dagli aeroporti di Napoli (Capodichino) e Roma (Fiumicino), che offrono collegamenti comodi verso molte destinazioni. Se necessario, possiamo valutare anche altri aeroporti e collegamenti interni.",
        },
      },
      {
        "@type": "Question",
        name: "Vi occupate anche della biglietteria per voli, treni e navi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, gestiamo direttamente la biglietteria aerea per voli nazionali e internazionali, oltre a treni ad alta velocità e traghetti o collegamenti marittimi collegati all’itinerario di viaggio di nozze, così da coordinare al meglio tutti gli spostamenti.",
        },
      },
      {
        "@type": "Question",
        name: "L’assicurazione sanitaria e bagaglio è obbligatoria per il viaggio di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L’assicurazione sanitaria e bagaglio non è obbligatoria, ma è fortemente consigliata, soprattutto per le lune di miele all’estero e nelle destinazioni extra UE. Può coprire spese mediche, smarrimento o danneggiamento del bagaglio, ritardi, cancellazioni e altri imprevisti che potrebbero incidere sul viaggio.",
        },
      },
      {
        "@type": "Question",
        name: "Possiamo attivare una lista viaggio di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, presso Leaving Now puoi attivare una lista viaggio di nozze dedicata alla vostra luna di miele. Gli invitati potranno contribuire con una quota libera e voi potrete monitorare facilmente le partecipazioni con il supporto dell’agenzia.",
        },
      },
      {
        "@type": "Question",
        name: "Cosa succede se ci sono imprevisti prima o durante il viaggio di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avrete sempre un referente in agenzia che vi segue prima, durante e dopo la partenza. In caso di imprevisti, come ritardi, cancellazioni o cambi di programma, vi aiutiamo a trovare soluzioni alternative e a gestire la parte operativa, così da ridurre al minimo lo stress.",
        },
      },
    ],
  };

  // handler per FAQ accordion
  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* 🟣 SEO PAGE LEVEL */}
      <Helmet>
        <title>
          Viaggi di nozze Aversa | Viaggio di nozze su misura - Leaving Now
        </title>
        <meta
          name="description"
          content="Viaggi di nozze su misura ad Aversa con Leaving Now: consulenza dedicata, itinerari personalizzati, lista viaggio di nozze e assistenza per voli, hotel, treni e navi."
        />
        <meta
          name="keywords"
          content="viaggi di nozze Aversa, viaggio di nozze su misura Aversa, viaggio di nozze personalizzato, luna di miele, lista viaggio di nozze Aversa, lista viaggio di nozze, viaggi di nozze intercontinentali, viaggi di nozze mare tropicale, viaggi di nozze Stati Uniti, viaggi di nozze Giappone, agenzia viaggi Aversa viaggi di nozze"
        />
        <link rel="canonical" href="https://leavingnow.it/viaggi-di-nozze" />
        {/* Open Graph specifico della pagina */}
        <meta
          property="og:title"
          content="Viaggi di nozze su misura ad Aversa - Leaving Now"
        />
        <meta
          property="og:description"
          content="Progettiamo il vostro viaggio di nozze su misura: itinerari personalizzati, lista viaggio di nozze, supporto per voli, treni e navi. Leaving Now, agenzia viaggi ad Aversa."
        />
        <meta
          property="og:url"
          content="https://leavingnow.it/viaggi-di-nozze"
        />
        <meta
          property="og:image"
          content="https://leavingnow.it/images/og-leaving-now.jpg"
        />
        <meta property="og:type" content="website" />
        {/* FAQ Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(faqJsonLd)}
        </script>
      </Helmet>

      <InnerHero
        title="Viaggi di nozze"
        subtitle="Un viaggio unico, costruito su misura per la vostra storia."
        image={heroImg}
      />

      <Breadcrumb />

      {/* HONEYMOON + PERCHÉ SCEGLIERCI (UNICA SEZIONE) */}
      <section
        className="py-12 md:py-16 bg-white"
        aria-labelledby="honeymoon-intro"
      >
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          {/* Intro Honeymoon */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Honeymoon by Leaving Now
            </p>

            <h2
              id="honeymoon-intro"
              className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-5"
            >
              Viaggio di nozze su misura ad Aversa per la vostra prima grande
              avventura insieme
            </h2>

            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Leaving Now è l&apos;agenzia viaggi di Aversa specializzata in{" "}
              <strong>viaggi di nozze su misura</strong>. Dalla prima idea al
              rientro, vi accompagniamo in ogni fase: consulenza dedicata,
              progettazione dell&apos;itinerario,{" "}
              <strong>biglietteria aerea, treni e navi</strong>, strutture
              selezionate, assicurazioni e assistenza continua, per trasformare
              la luna di miele in un ricordo che resta.
            </p>
          </div>

          {/* Perché scegliere Leaving Now + card */}
          <div>
            <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ValueCard
                icon={<Heart />}
                title="Ascolto e progetto su misura"
                text="Partiamo da voi: gusti, budget, periodo e stile di viaggio. Da qui costruiamo un itinerario unico, non un pacchetto standard, per un viaggio di nozze davvero vostro."
              />
              <ValueCard
                icon={<Plane />}
                title="Operatività completa, biglietteria inclusa"
                text="Ci occupiamo di voli, hotel, trasferimenti, escursioni, assicurazioni e documentazione, gestendo anche biglietteria aerea, treni ad alta velocità e navi/traghetti collegati al vostro itinerario."
              />
              <ValueCard
                icon={<Sparkles />}
                title="Dettagli pensati per coppie"
                text="Cene romantiche, esperienze esclusive, camere selezionate e piccoli plus per gli sposi: vi suggeriamo ciò che può rendere il viaggio di nozze ancora più speciale."
              />
              <ValueCard
                icon={<MapPinned />}
                title="Partner selezionati nel mondo"
                text="Collaboriamo con corrispondenti locali e strutture affidabili, per garantirvi qualità, sicurezza e assistenza in loco durante l’intero viaggio di nozze."
              />
              <ValueCard
                icon={<CalendarRange />}
                title="Timing e combinazioni ottimali"
                text="Vi aiutiamo a scegliere il periodo giusto e la migliore combinazione di tappe, ottimizzando giorni, spostamenti e budget, soprattutto per lunghi viaggi intercontinentali."
              />
              <ValueCard
                icon={<ShieldCheck />}
                title="Serenità prima, durante e dopo"
                text="Non siete mai soli: dal preventivo al rientro, restiamo al vostro fianco per gestire cambi, dubbi o imprevisti, con un referente chiaro in agenzia."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA: ISPIRAZIONE / PREVENTIVO */}
      <section
        className="py-8 md:py-10 bg-[#F8FAFC] border-y border-[#E2E8F0]"
        aria-labelledby="cta-honeymoon"
      >
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6]">
            Prossimo passo
          </p>
          <h2
            id="cta-honeymoon"
            className="text-xl md:text-2xl font-bold text-[#132C50]"
          >
            Ancora indecisi o avete già un’idea chiara per il viaggio di nozze?
          </h2>
          <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
            Potete partire dalle nostre{" "}
            <strong>idee di mete per viaggi di nozze</strong> oppure
            raccontarci già il viaggio che immaginate. In entrambi i casi
            costruiremo un itinerario su misura per voi, passo dopo passo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/mete-viaggi-di-nozze"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-sm border border-[#0369A1] bg-[#0369A1] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Vuoi farti ispirare?
            </Link>

            <a
              href="#preventivo-nozze"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-400 text-slate-700 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              Richiedi un preventivo
            </a>
          </div>
        </div>
      </section>

      {/* LISTA VIAGGIO DI NOZZE */}
      <section className="py-10 md:py-12 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F1FD] text-[#EB2480] shrink-0">
              <Gift className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <h2 className="text-base md:text-lg font-semibold text-[#132C50] mb-1">
                Lista viaggio di nozze presso l’agenzia viaggi di Aversa
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed mb-2 text-justify">
                Vuoi che il <strong>viaggio di nozze</strong> sia anche il
                regalo dei tuoi invitati? Con la{" "}
                <strong>lista viaggio di nozze Leaving Now</strong> puoi
                permettere ad amici e parenti di contribuire alla vostra luna di
                miele, con un sistema semplice e assistito in agenzia.
              </p>
            </div>

            <div className="w-full md:w-auto flex justify-center md:justify-end">
              <Link
                to="/idee-regalo#lista-nozze"
                className="inline-flex w-full md:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold bg-[#0863D6] text-white border border-[#0863D6] hover:bg-white hover:text-[#0863D6] transition"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FORM DEDICATO VIAGGIO DI NOZZE */}
      <section
        id="preventivo-nozze"
        className="scroll-mt-28 py-12 md:py-16 bg-[#E8F1FD]"
        aria-labelledby="preventivo-nozze-title"
      >
        <div className="max-w-5xl mx-auto px-4">
          {/* Intro form */}
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-2">
              Richiesta preventivo viaggio di nozze
            </p>
            <h2
              id="preventivo-nozze-title"
              className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-3"
            >
              Raccontateci il vostro viaggio ideale
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Compilate il form con le informazioni principali: useremo questi
              dettagli per prepararvi una{" "}
              <strong>proposta di viaggio di nozze personalizzata</strong> e
              ricontattarvi il prima possibile, in agenzia o online.
            </p>
          </div>

          {/* CARD FORM CENTRATA */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 🔹 Campi nascosti per Web3Forms (HTML email) */}
              <input
                type="hidden"
                name="from_name"
                value="Leaving Now - Sito web"
              />
              <input type="hidden" name="email_format" value="html" />
              <input
                type="hidden"
                name="email_template"
                value={`
                  <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 16px; background-color: #f3f4f6;">
                    <div style="max-width: 720px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; padding: 20px; border: 1px solid #e5e7eb;">
                      <h2 style="margin: 0 0 12px; font-size: 20px; color: #111827;">
                        Richiesta <span style="color:#EB2480;">Viaggio di nozze</span>
                      </h2>
                      <p style="margin: 0 0 16px; font-size: 14px; color: #4b5563;">
                        Hai ricevuto una nuova richiesta di preventivo dal sito <strong>Leaving Now</strong>.
                      </p>

                      <h3 style="margin: 16px 0 8px; font-size: 14px; color:#111827; text-transform: uppercase; letter-spacing: .08em;">
                        Coppia
                      </h3>
                      <table style="width:100%; border-collapse: collapse; margin-bottom: 12px; font-size: 14px;">
                        <tr>
                          <td style="padding: 6px 8px; font-weight: 600; color:#111827; width: 180px;">Sposo/Sposa</td>
                          <td style="padding: 6px 8px; color:#374151;">{{sposoA}}</td>
                        </tr>
                        <tr style="background-color:#f9fafb;">
                          <td style="padding: 6px 8px; font-weight: 600; color:#111827;">Sposa/Sposo</td>
                          <td style="padding: 6px 8px; color:#374151;">{{sposoB}}</td>
                        </tr>
                      </table>

                      <h3 style="margin: 16px 0 8px; font-size: 14px; color:#111827; text-transform: uppercase; letter-spacing: .08em;">
                        Contatti
                      </h3>
                      <table style="width:100%; border-collapse: collapse; margin-bottom: 12px; font-size: 14px;">
                        <tr>
                          <td style="padding: 6px 8px; font-weight: 600; color:#111827; width: 180px;">Email</td>
                          <td style="padding: 6px 8px; color:#374151;">{{email}}</td>
                        </tr>
                        <tr style="background-color:#f9fafb;">
                          <td style="padding: 6px 8px; font-weight: 600; color:#111827;">Telefono</td>
                          <td style="padding: 6px 8px; color:#374151;">{{telefono}}</td>
                        </tr>
                      </table>

                      <h3 style="margin: 16px 0 8px; font-size: 14px; color:#111827; text-transform: uppercase; letter-spacing: .08em;">
                        Viaggio di nozze
                      </h3>
                      <table style="width:100%; border-collapse: collapse; margin-bottom: 12px; font-size: 14px;">
                        <tr>
                          <td style="padding: 6px 8px; font-weight: 600; color:#111827; width: 180px;">Meta / tipologia</td>
                          <td style="padding: 6px 8px; color:#374151;">{{meta}}</td>
                        </tr>
                        <tr style="background-color:#f9fafb;">
                          <td style="padding: 6px 8px; font-weight: 600; color:#111827;">Altra idea</td>
                          <td style="padding: 6px 8px; color:#374151;">{{meta_altro}}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 8px; font-weight: 600; color:#111827;">Periodo</td>
                          <td style="padding: 6px 8px; color:#374151;">dal {{data_da}} al {{data_a}}</td>
                        </tr>
                        <tr style="background-color:#f9fafb;">
                          <td style="padding: 6px 8px; font-weight: 600; color:#111827;">Date flessibili</td>
                          <td style="padding: 6px 8px; color:#374151;">{{date_flessibili}}</td>
                        </tr>
                        <tr>
                          <td style="padding: 6px 8px; font-weight: 600; color:#111827;">Luogo di partenza</td>
                          <td style="padding: 6px 8px; color:#374151;">{{partenza}}</td>
                        </tr>
                        <tr style="background-color:#f9fafb;">
                          <td style="padding: 6px 8px; font-weight: 600; color:#111827;">Budget indicativo</td>
                          <td style="padding: 6px 8px; color:#374151;">{{budget}}</td>
                        </tr>
                      </table>

                      <h3 style="margin: 16px 0 8px; font-size: 14px; color:#111827; text-transform: uppercase; letter-spacing: .08em;">
                        Note aggiuntive
                      </h3>
                      <div style="padding: 10px 12px; border-radius: 8px; background-color:#f9fafb; border:1px solid #e5e7eb; color:#374151; font-size: 14px; white-space: pre-line; min-height: 40px;">
                        {{note}}
                      </div>

                      <p style="margin-top: 16px; font-size: 12px; color:#9ca3af;">
                        Fonte: {{from_page}}
                      </p>

                      <p style="margin-top: 6px; font-size: 11px; color:#9ca3af;">
                        Email generata automaticamente dal sito Leaving Now - Non rispondere a questo indirizzo.
                      </p>
                    </div>
                  </div>
                `}
              />

              {/* Nomi sposi – sempre sulla stessa riga */}
              <div className="grid gap-4 grid-cols-[1fr_auto1fr] items-center">
                <div>
                  <label
                    htmlFor="sposoA"
                    className="block text-sm font-medium text-[#132C50] mb-1"
                  >
                    Sposo/Sposa *
                  </label>
                  <input
                    type="text"
                    id="sposoA"
                    name="sposoA"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                    placeholder="Nome"
                  />
                </div>

                <div className="flex items-center justify-center text-lg md:text-xl font-semibold text-slate-500">
                  &
                </div>

                <div>
                  <label
                    htmlFor="sposoB"
                    className="block text-sm font-medium text-[#132C50] mb-1"
                  >
                    Sposa/Sposo *
                  </label>
                  <input
                    type="text"
                    id="sposoB"
                    name="sposoB"
                    required
                    className="w-full px-3 py-2 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                    placeholder="Nome"
                  />
                </div>
              </div>

              {/* Contatti */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#132C50] mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-[#132C50] mb-1"
                  >
                    Telefono (opzionale)
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                    placeholder="Per un contatto più rapido"
                  />
                </div>
              </div>

              {/* Meta con datalist (ricerca mentre digiti) */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="meta"
                    className="block text-sm font-medium text-[#132C50] mb-1"
                  >
                    Meta o tipologia di viaggio di nozze *
                  </label>
                  <input
                    id="meta"
                    name="meta"
                    list="meta-options"
                    required
                    value={meta}
                    onChange={(e) => setMeta(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                    placeholder="Inizia a digitare (es. New York, Maldive...)"
                  />
                  <datalist id="meta-options">
                    {META_OPTIONS.map((label) => (
                      <option key={label} value={label} />
                    ))}
                  </datalist>
                </div>

                {showOtherMeta && (
                  <div>
                    <label
                      htmlFor="meta_altro"
                      className="block text-sm font-medium text-[#132C50] mb-1"
                    >
                      Altra destinazione o idea
                    </label>
                    <input
                      type="text"
                      id="meta_altro"
                      name="meta_altro"
                      value={otherMeta}
                      onChange={(e) => setOtherMeta(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                      placeholder="Scrivi qui la destinazione o l’idea"
                    />
                  </div>
                )}
              </div>

              {/* Periodo + date flessibili + partenza + budget */}
              <div className="space-y-4">
                {/* Date */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="data_da"
                      className="block text-sm font-medium text-[#132C50] mb-1"
                    >
                      dal *
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                        <Calendar className="w-4 h-4 text-slate-400" />
                      </span>
                      <input
                        type="date"
                        id="data_da"
                        name="data_da"
                        required
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="data_a"
                      className="block text-sm font-medium text-[#132C50] mb-1"
                    >
                      al *
                    </label>
                    <div className="relative">
                      <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                        <Calendar className="w-4 h-4 text-slate-400" />
                      </span>
                      <input
                        type="date"
                        id="data_a"
                        name="data_a"
                        required
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* Date flessibili */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="date_flessibili"
                    name="date_flessibili"
                    className="h-4 w-4 rounded border-slate-300 text-[#0863D6] focus:ring-[#0863D6]"
                  />
                  <label
                    htmlFor="date_flessibili"
                    className="text-xs md:text-sm text-slate-600"
                  >
                    Le date sono flessibili
                  </label>
                </div>

                {/* Luogo di partenza + Budget */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="partenza"
                      className="block text-sm font-medium text-[#132C50] mb-1"
                    >
                      Luogo di partenza *
                    </label>
                    <input
                      type="text"
                      id="partenza"
                      name="partenza"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                      placeholder="Es. Napoli, Roma…"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-[#132C50] mb-1"
                    >
                      Budget indicativo per la coppia *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm bg-white"
                    >
                      <option value="">Seleziona una fascia</option>
                      <option value="0-2000">0 – 2.000 €</option>
                      <option value="2000-3000">2.000 – 3.000 €</option>
                      <option value="3000-4000">3.000 – 4.000 €</option>
                      <option value="4000-5000">4.000 – 5.000 €</option>
                      <option value="5000-6000">5.000 – 6.000 €</option>
                      <option value="6000-7000">6.000 – 7.000 €</option>
                      <option value="7000+">Oltre 7.000 €</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Note aggiuntive */}
              <div>
                <label
                  htmlFor="note"
                  className="block text-sm font-medium text-[#132C50] mb-1"
                >
                  Raccontateci qualcosa in più (opzionale)
                </label>
                <textarea
                  id="note"
                  name="note"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                  placeholder="Durata ideale, tipo di strutture, esperienze che vi piacerebbe includere…"
                />
              </div>

              {/* Consenso privacy */}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0863D6] focus:ring-[#0863D6]"
                />
                <label
                  htmlFor="privacy"
                  className="text-[11px] md:text-xs text-slate-600 text-justify"
                >
                  Dichiariamo di aver letto e compreso l&apos;{" "}
                  <Link
                    to="/privacy-policy"
                    className="underline underline-offset-2 hover:text-[#0863D6]"
                  >
                    informativa privacy
                  </Link>{" "}
                  e acconsentiamo al trattamento dei dati personali per poter
                  essere ricontattati in merito alla presente richiesta di
                  preventivo.
                </label>
              </div>

              {/* CTA + info campi */}
              <div className="pt-2">
                <div className="flex justify-center mb-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex justify-center items-center rounded-full px-8 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0863D6] bg-[#0863D6] text-white hover:bg-white hover:text-[#0863D6] transition disabled:opacity-60"
                  >
                    {loading
                      ? "Invio in corso..."
                      : "Invia richiesta viaggio di nozze"}
                  </button>
                </div>
                <p className="text-[11px] md:text-xs text-slate-500 text-center">
                  I campi contrassegnati con * sono obbligatori. Dopo l&apos;invio
                  riceverete una conferma e vi ricontatteremo il prima possibile.
                </p>
              </div>

              {status === "success" && (
                <p className="mt-4 text-center text-emerald-600 text-sm font-medium">
                  Richiesta inviata correttamente! Ti risponderemo il prima
                  possibile per parlare del vostro viaggio di nozze.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-center text-red-600 text-sm font-medium">
                  Si è verificato un problema durante l&apos;invio. Riprova tra poco
                  oppure contattaci direttamente dai nostri recapiti.
                </p>
              )}
            </form>

            <p className="mt-5 text-xs md:text-sm text-slate-600 text-center">
              Preferite parlarne di persona?{" "}
              <a
                href={RESERVIO_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#0863D6] hover:text-[#0648a3] underline underline-offset-2"
              >
                Prenotate una consulenza
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 SEZIONE FAQ – LOOK PREMIUM + CONTENUTI OTTIMIZZATI */}
      <section
        id="faq-viaggi-di-nozze"
        className="py-12 md:py-16 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F1F5F9] border-t border-[#E2E8F0]"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E8F1FD]">
                <HelpCircle className="w-3.5 h-3.5 text-[#0863D6]" />
              </span>
              FAQ VIAGGI DI NOZZE
            </p>

            <h2 className="text-xl md:text-2xl font-bold text-[#132C50] mb-3">
              Domande frequenti sui viaggi di nozze Leaving Now
            </h2>
          </div>

          <div className="space-y-4 text-sm md:text-base text-slate-700 text-justify">
            {/* FAQ 1 */}
            <details
              open={openFaqId === "faq1"}
              className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq("faq1");
                }}
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    Quanto tempo prima è consigliabile organizzare il viaggio di
                    nozze?
                  </span>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openFaqId === "faq1" ? "rotate-180" : ""
                  }`}
                />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  Per un <strong>viaggio di nozze intercontinentale</strong> o
                  per periodi molto richiesti consigliamo di iniziare la
                  progettazione <strong>tra gli 8 e i 12 mesi prima</strong>. In
                  questo modo è più semplice trovare buone combinazioni di{" "}
                  <strong>voli, hotel ed esperienze</strong> e gestire eventuali
                  richieste particolari con più margine.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details
              open={openFaqId === "faq2"}
              className="rounded-3xl border border-slate-200 bg:white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq("faq2");
                }}
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    Possiamo iniziare tutto online o dobbiamo venire subito in
                    agenzia?
                  </span>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openFaqId === "faq2" ? "rotate-180" : ""
                  }`}
                />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  L’intero percorso può essere gestito anche{" "}
                  <strong>completamente da remoto</strong>: potete raccontarci
                  le vostre idee, ricevere preventivi e valutare ogni proposta
                  tramite <strong>telefono, email o videochiamate dedicate</strong>.
                </p>
                <p className="mt-2 leading-relaxed">
                  Se lo preferite, possiamo vederci anche in agenzia, ma{" "}
                  <strong>non è obbligatorio</strong>: la conferma e la
                  finalizzazione del viaggio possono essere svolte{" "}
                  <strong>online in totale sicurezza</strong>.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details
              open={openFaqId === "faq3"}
              className="rounded-3xl border border-slate-200 bg:white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq("faq3");
                }}
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    Da quali aeroporti organizzate principalmente le partenze?
                  </span>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openFaqId === "faq3" ? "rotate-180" : ""
                  }`}
                />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  Per i viaggi di nozze internazionali coordiniamo soprattutto
                  partenze dagli aeroporti di{" "}
                  <strong>Napoli (Capodichino)</strong> e{" "}
                  <strong>Roma (Fiumicino)</strong>, che offrono le combinazioni
                  più comode e frequenti verso molte destinazioni di lungo
                  raggio.
                </p>
                <p className="mt-2 leading-relaxed">
                  Se necessario, valutiamo anche <strong>altri aeroporti</strong>{" "}
                  e collegamenti interni, in base alle vostre esigenze e al
                  periodo di viaggio.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details
              open={openFaqId === "faq4"}
              className="rounded-3xl border border-slate-200 bg:white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq("faq4");
                }}
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    Vi occupate anche della biglietteria per voli, treni e
                    traghetti?
                  </span>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openFaqId === "faq4" ? "rotate-180" : ""
                  }`}
                />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  Sì. Gestiamo direttamente la{" "}
                  <strong>biglietteria aerea</strong> (voli nazionali e
                  internazionali) e, quando serve, anche{" "}
                  <strong>treni ad alta velocità</strong> e{" "}
                  <strong>traghetti o collegamenti marittimi</strong> collegati
                  all&apos;itinerario.
                </p>
                <p className="mt-2 leading-relaxed">
                  L&apos;obiettivo è offrirvi un{" "}
                  <strong>viaggio di nozze coordinato</strong>, senza dovervi
                  preoccupare di incastri, orari o cambi complessi da gestire in
                  autonomia.
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details
              open={openFaqId === "faq5"}
              className="rounded-3xl border border-slate-200 bg:white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq("faq5");
                }}
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    L’assicurazione sanitaria e bagaglio è obbligatoria?
                  </span>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openFaqId === "faq5" ? "rotate-180" : ""
                  }`}
                />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  L&apos;<strong>assicurazione sanitaria e bagaglio</strong> non è
                  obbligatoria, ma è{" "}
                  <strong>fortemente consigliata</strong>, soprattutto per le
                  lune di miele all&apos;estero e per le destinazioni extra UE.
                </p>
                <p className="mt-2 leading-relaxed">
                  Copre spese mediche impreviste, smarrimento o danneggiamento
                  del bagaglio, ritardi, cancellazioni e altri imprevisti che
                  possono incidere sul vostro viaggio. In agenzia vi proponiamo{" "}
                  <strong>più soluzioni assicurative</strong>, così da scegliere
                  la copertura più adatta alle vostre esigenze.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details
              open={openFaqId === "faq6"}
              className="rounded-3xl border border-slate-200 bg:white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq("faq6");
                }}
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    Possiamo attivare una lista viaggio di nozze?
                  </span>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openFaqId === "faq6" ? "rotate-180" : ""
                  }`}
                />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  Sì, potete attivare una{" "}
                  <strong>lista viaggio di nozze</strong> dedicata al vostro
                  viaggio di nozze. Gli invitati potranno contribuire con una
                  quota libera e voi potrete tenere sotto controllo le{" "}
                  <strong>partecipazioni raccolte</strong> con il supporto
                  dell&apos;agenzia.
                </p>
                <p className="mt-2 leading-relaxed">
                  È una soluzione elegante e molto apprezzata, perché trasforma
                  il regalo in un&apos;esperienza da ricordare per sempre.
                </p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details
              open={openFaqId === "faq7"}
              className="rounded-3xl border border-slate-200 bg:white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200"
            >
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  toggleFaq("faq7");
                }}
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    Cosa succede se ci sono imprevisti prima o durante il
                    viaggio?
                  </span>
                </div>

                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openFaqId === "faq7" ? "rotate-180" : ""
                  }`}
                />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  Avrete sempre un <strong>referente in agenzia</strong> che vi
                  segue prima, durante e dopo la partenza. In caso di imprevisti
                  (ritardi, cancellazioni, cambi di programma) vi aiutiamo a
                  trovare <strong>soluzioni alternative</strong> e a gestire
                  l&apos;aspetto operativo, così da ridurre al minimo lo
                  stress.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViaggiDiNozze;

