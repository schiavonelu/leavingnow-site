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

  const showOtherMeta = meta === "altro";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

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

  // 🔹 Dati strutturati FAQ allineati alle FAQ in pagina
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto tempo prima conviene organizzare il viaggio di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per un viaggio di nozze intercontinentale o in alta stagione consigliamo di iniziare a pianificare tra gli 8 e i 12 mesi prima della partenza. In questo modo è più semplice trovare buone combinazioni di voli, hotel ed esperienze e gestire eventuali richieste particolari."
        }
      },
      {
        "@type": "Question",
        name: "Possiamo iniziare l'organizzazione del viaggio di nozze anche da casa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, l'iter iniziale può essere gestito comodamente da casa: ci raccontate le vostre idee, ricevete i preventivi e li valutiamo insieme via telefono, email o videochiamata. La fase di conferma finale e della documentazione viene però completata in agenzia, di persona, per garantirvi massima chiarezza e sicurezza."
        }
      },
      {
        "@type": "Question",
        name: "Da quali aeroporti organizzate principalmente le partenze per i viaggi di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per i viaggi di nozze internazionali coordiniamo soprattutto partenze dagli aeroporti di Napoli (Capodichino) e Roma (Fiumicino), che offrono collegamenti comodi verso molte destinazioni di lungo raggio. Quando utile, valutiamo anche altri aeroporti e collegamenti interni in base alle vostre esigenze."
        }
      },
      {
        "@type": "Question",
        name: "Vi occupate anche della biglietteria per voli, treni e traghetti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì. Gestiamo direttamente la biglietteria aerea per voli nazionali e internazionali e, quando serve, anche treni ad alta velocità e traghetti o collegamenti marittimi legati all'itinerario del viaggio di nozze. L'obiettivo è offrirvi un viaggio coordinato, senza dovervi preoccupare di incastri e orari."
        }
      },
      {
        "@type": "Question",
        name: "L'assicurazione sanitaria e bagaglio è obbligatoria per il viaggio di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'assicurazione sanitaria e bagaglio non è obbligatoria per legge, ma è fortemente consigliata, soprattutto per le lune di miele all'estero e nelle destinazioni extra UE. Può coprire spese mediche, smarrimento o danneggiamento del bagaglio, ritardi, cancellazioni e altri imprevisti. In agenzia proponiamo più soluzioni, così da scegliere la copertura più adatta a voi."
        }
      },
      {
        "@type": "Question",
        name: "È possibile attivare una lista viaggio di nozze presso Leaving Now?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, potete attivare una lista viaggio di nozze dedicata al vostro itinerario. Gli invitati potranno contribuire con una quota libera e voi potrete tenere sotto controllo le partecipazioni raccolte con il supporto dell'agenzia."
        }
      },
      {
        "@type": "Question",
        name: "Quali documenti servono per un viaggio di nozze all'estero?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I documenti dipendono dalla destinazione. Spesso, nei paesi extra UE, è richiesto il passaporto con una validità residua di almeno 6 mesi e, in alcuni casi, visti o autorizzazioni elettroniche come ESTA o eTA. In agenzia vi aiutiamo a verificare con anticipo i requisiti in base alla meta scelta."
        }
      },
      {
        "@type": "Question",
        name: "Cosa succede se ci sono imprevisti prima o durante il viaggio di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avrete sempre un referente in agenzia che vi segue prima, durante e dopo la partenza. In caso di imprevisti come ritardi, cancellazioni o cambi di programma, vi aiutiamo a trovare soluzioni alternative e a gestire gli aspetti operativi per ridurre al minimo lo stress."
        }
      }
    ]
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
        <link
          rel="canonical"
          href="https://leavingnow.it/viaggi-di-nozze"
        />
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

      {/* INTRO + PERCHÉ SCEGLIERCI */}
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

          {/* Card perché sceglierci */}
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
                text="Ci occupiamo di voli, hotel, trasferimenti, escursioni, assicurazioni e documentazione. Possiamo gestire anche biglietteria aerea, treni ad alta velocità e navi o traghetti collegati al vostro itinerario."
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
            <strong>idee di mete per viaggi di nozze</strong> oppure raccontarci
            da subito il viaggio che immaginate. In entrambi i casi
            costruiremo un itinerario su misura per voi.
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
              <p className="text-sm text-slate-700 leading-relaxed mb-2">
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
      {/* (qui il tuo form rimane identico, cambia solo il testo sopra che abbiamo già toccato) */}

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

            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Le risposte alle domande che riceviamo più spesso su{" "}
              <strong>viaggi di nozze, lista viaggio di nozze e assicurazioni</strong>.
              Se non trovi quello che cerchi, scrivici o chiamaci: saremo felici
              di aiutarti.
            </p>
          </div>

          <div className="space-y-4 text-sm md:text-base text-slate-700">
            {/* FAQ 1 */}
            <details className="group rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200">
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    Quanto tempo prima è consigliabile organizzare il viaggio di nozze?
                  </span>
                </div>

                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  Per un <strong>viaggio di nozze intercontinentale</strong> o
                  per periodi molto richiesti consigliamo di iniziare la
                  progettazione <strong>tra gli 8 e i 12 mesi prima</strong>.
                  In questo modo è più semplice trovare le migliori combinazioni
                  di <strong>voli, hotel ed esperienze</strong> e gestire
                  eventuali richieste particolari.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200">
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    Possiamo iniziare tutto online o dobbiamo venire subito in agenzia?
                  </span>
                </div>

                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  L&apos;iter iniziale può essere gestito{" "}
                  <strong>comodamente da casa</strong>: ci raccontate le vostre
                  idee, ricevete i preventivi e li valutiamo insieme{" "}
                  <strong>via telefono, email o videochiamata</strong>.
                </p>
                <p className="mt-2 leading-relaxed">
                  La fase di <strong>conferma e finalizzazione</strong> – quindi
                  contratti, documenti e scelta definitiva di assicurazioni e
                  servizi – viene però completata{" "}
                  <strong>in agenzia, di persona</strong>, per garantirvi
                  massima chiarezza e sicurezza.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200">
              <summary
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

                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  Per i viaggi di nozze internazionali coordiniamo soprattutto
                  partenze dagli aeroporti di{" "}
                  <strong>Napoli (Capodichino)</strong> e{" "}
                  <strong>Roma (Fiumicino)</strong>, che offrono collegamenti
                  comodi verso molte destinazioni di lungo raggio.
                </p>
                <p className="mt-2 leading-relaxed">
                  Quando utile, valutiamo anche <strong>altri aeroporti</strong>{" "}
                  e collegamenti interni, in base alle vostre esigenze e al
                  periodo di viaggio.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200">
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    Vi occupate anche della biglietteria per voli, treni e traghetti?
                  </span>
                </div>

                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
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
            <details className="group rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200">
              <summary
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

                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  L&apos;<strong>assicurazione sanitaria e bagaglio</strong> non
                  è obbligatoria, ma è{" "}
                  <strong>fortemente consigliata</strong>, soprattutto per le
                  lune di miele all&apos;estero e per le destinazioni extra UE.
                </p>
                <p className="mt-2 leading-relaxed">
                  Può coprire spese mediche impreviste, smarrimento o
                  danneggiamento del bagaglio, ritardi, cancellazioni e altri
                  imprevisti. In agenzia vi proponiamo{" "}
                  <strong>diverse soluzioni assicurative</strong>, così da
                  scegliere la copertura più adatta alle vostre esigenze.
                </p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200">
              <summary
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

                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  Sì, potete attivare una{" "}
                  <strong>lista viaggio di nozze</strong> dedicata al vostro
                  viaggio. Gli invitati potranno contribuire con una quota
                  libera e voi potrete tenere sotto controllo le{" "}
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
            <details className="group rounded-3xl border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-200">
              <summary
                className="flex items-center justify-between gap-4 cursor-pointer px-4 md:px-5 py-4 md:py-5 list-none"
                style={{ listStyle: "none" }}
              >
                <div className="flex items-center gap-3 text-left">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                    <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                  </span>
                  <span className="font-semibold text-sm md:text-base text-[#132C50]">
                    Cosa succede se ci sono imprevisti prima o durante il viaggio?
                  </span>
                </div>

                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>

              <div className="px-4 md:px-5 pb-4 md:pb-5 border-t border-slate-100">
                <p className="mt-3 leading-relaxed">
                  Avrete sempre un <strong>referente in agenzia</strong> che vi
                  segue prima, durante e dopo la partenza. In caso di imprevisti
                  (ritardi, cancellazioni, cambi di programma) vi aiutiamo a
                  trovare <strong>soluzioni alternative</strong> e a gestire
                  l&apos;aspetto operativo, così da ridurre al minimo lo stress.
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












