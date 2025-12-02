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

import heroImg from "../assets/viaggi-nozze/hero.webp";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_KEY = "59cd3a4d-3c21-4152-8f8d-95c3c2590684";

// Card generica
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
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const showOtherMeta = meta === "altro";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Invio form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.target;
    const data = new FormData(form);

    data.append("access_key", WEB3FORMS_KEY);
    data.append("subject", "Richiesta viaggio di nozze dal sito Leaving Now");
    data.append("from_page", "Viaggi di nozze (/viaggi-di-nozze)");

    try {
      const res = await fetch(WEB3FORMS_URL, { method: "POST", body: data });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        setMeta("");
        setOtherMeta("");
      } else setStatus("error");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  // JSON-LD FAQ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Quanto tempo prima conviene organizzare il viaggio di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Per un viaggio di nozze intercontinentale consigliamo di iniziare tra 8 e 12 mesi prima per ottenere disponibilità migliori e tariffe più convenienti.",
        },
      },
      {
        "@type": "Question",
        name: "Possiamo iniziare tutto online o dobbiamo venire in agenzia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La progettazione iniziale può avvenire da remoto via email, telefono o videochiamata. La conferma finale viene sempre completata in agenzia per massima chiarezza e sicurezza.",
        },
      },
      {
        "@type": "Question",
        name: "Che aeroporti usate per le partenze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Organizziamo principalmente partenze da Napoli e Roma, con possibilità di valutare aeroporti alternativi quando utile.",
        },
      },
      {
        "@type": "Question",
        name: "Vi occupate di voli, treni e traghetti?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, gestiamo tutta la biglietteria: voli nazionali e internazionali, treni ad alta velocità e collegamenti marittimi utili all'itinerario.",
        },
      },
      {
        "@type": "Question",
        name: "È obbligatoria l’assicurazione sanitaria e bagaglio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Non sempre è obbligatoria, ma per un viaggio di nozze all’estero è fortemente consigliata: copre imprevisti medici, bagagli, ritardi e cancellazioni.",
        },
      },
      {
        "@type": "Question",
        name: "Possiamo attivare una lista viaggio di nozze?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sì, la lista viaggio di nozze è disponibile: amici e parenti possono contribuire direttamente al vostro viaggio.",
        },
      },
    ],
  };

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Viaggi di nozze Aversa | Viaggio di nozze su misura - Leaving Now</title>
        <meta
          name="description"
          content="Viaggi di nozze su misura ad Aversa: consulenza dedicata, itinerari personalizzati, lista viaggio di nozze, servizi voli/hotel e assistenza continua."
        />
        <link rel="canonical" href="https://leavingnow.it/viaggi-di-nozze" />
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

      {/* INTRO */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#0863D6]">
            Honeymoon by Leaving Now
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#EB2480]">
            Viaggio di nozze su misura per la vostra prima grande avventura insieme
          </h2>

          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-700">
            Lasciate a noi la parte complessa: voi pensate solo all’amore. Disegniamo
            itinerari personalizzati, selezioniamo strutture di qualità, gestiamo
            la biglietteria di voli, treni e navi e vi accompagniamo fino al rientro.
          </p>
        </div>

        {/* PERCHÉ SCEGLIERCI */}
        <div className="max-w-6xl mx-auto px-4 mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ValueCard icon={<Heart />} title="Progetto su misura" text="Partiamo dai vostri desideri, dai gusti e dal periodo: costruiremo un itinerario unico." />
          <ValueCard icon={<Plane />} title="Best flight & hotel" text="Ci occupiamo di voli, hotel, trasferimenti, escursioni e documentazione." />
          <ValueCard icon={<Sparkles />} title="Plus per gli sposi" text="Esperienze speciali, camere selezionate e dettagli dedicati alla luna di miele." />
          <ValueCard icon={<MapPinned />} title="Partner selezionati" text="Collaboriamo con corrispondenti locali affidabili nel mondo." />
          <ValueCard icon={<CalendarRange />} title="Timing perfetto" text="Vi aiutiamo a scegliere date ideali e combinazioni ottimali." />
          <ValueCard icon={<ShieldCheck />} title="Assistenza continua" text="Siamo con voi prima, durante e dopo il viaggio." />
        </div>
      </section>

      {/* CTA ISPIRAZIONE */}
      <section className="py-10 bg-[#F8FAFC] text-center border-y border-[#E2E8F0]">
        <h2 className="text-xl md:text-2xl font-bold text-[#132C50] mb-3">
          Ancora indecisi? Oppure avete già un’idea?
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-base text-slate-700">
          Potete partire dalle nostre idee o raccontarci da zero il vostro viaggio.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <Link
            to="/mete-viaggi-di-nozze"
            className="px-6 py-3 bg-[#0369A1] text-white rounded-full font-semibold hover:bg-white hover:text-[#0863D6] border border-[#0369A1] transition"
          >
            Vuoi farti ispirare?
          </Link>

          <a
            href="#preventivo-nozze"
            className="px-6 py-3 border border-slate-400 text-slate-700 rounded-full font-semibold hover:border-[#EB2480] hover:text-[#EB2480] transition"
          >
            Richiedi un preventivo
          </a>
        </div>
      </section>

      {/* LISTA NOZZE */}
      <section className="py-10 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl bg-white border border-[#E2E8F0] p-6 shadow-sm flex flex-col md:flex-row gap-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F1FD] text-[#EB2480]">
              <Gift className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-semibold text-[#132C50] mb-1">
                Lista viaggio di nozze
              </h2>
              <p className="text-sm text-slate-700">
                Permette agli invitati di contribuire con una quota libera al vostro viaggio.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <Link
                to="/idee-regalo#lista-nozze"
                className="px-5 py-2.5 bg-[#0863D6] text-white rounded-full text-sm font-semibold border border-[#0863D6] hover:bg-white hover:text-[#0863D6] transition"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FORM COMPLETO (INTEGRO) */}
      <section
        id="preventivo-nozze"
        className="py-12 md:py-16 bg-[#E8F1FD]"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-3">
              Raccontateci il vostro viaggio ideale
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-700">
              Compilate i campi: prepareremo una proposta personalizzata.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="hidden" name="from_name" value="Leaving Now - Sito web" />
              <input type="hidden" name="email_format" value="html" />

              {/* Nomi */}
              <div className="grid gap-4 md:grid-cols-[1fr_auto1fr] md:items-center">
                <div>
                  <label className="block text-sm mb-1 font-medium text-[#132C50]">
                    Sposo/Sposa *
                  </label>
                  <input type="text" name="sposoA" required className="input" placeholder="Nome" />
                </div>
                <div className="text-center text-xl">&</div>
                <div>
                  <label className="block text-sm mb-1 font-medium text-[#132C50]">
                    Sposa/Sposo *
                  </label>
                  <input type="text" name="sposoB" required className="input" placeholder="Nome" />
                </div>
              </div>

              {/* Contatti */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 font-medium text-[#132C50]">
                    Email *
                  </label>
                  <input type="email" name="email" required className="input" />
                </div>
                <div>
                  <label className="block text-sm mb-1 font-medium text-[#132C50]">
                    Telefono (opzionale)
                  </label>
                  <input type="tel" name="telefono" className="input" />
                </div>
              </div>

              {/* Meta */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 font-medium text-[#132C50]">
                    Meta / tipologia *
                  </label>
                  <select
                    name="meta"
                    value={meta}
                    onChange={(e) => setMeta(e.target.value)}
                    required
                    className="input bg-white"
                  >
                    <option value="">Seleziona</option>
                    <option value="crociera">Crociera</option>
                    <option value="usa">USA</option>
                    <option value="mare-tropicale">Mare tropicale</option>
                    <option value="giappone-asia">Giappone / Asia</option>
                    <option value="europa">Europa</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>

                {showOtherMeta && (
                  <div>
                    <label className="block text-sm mb-1 font-medium text-[#132C50]">
                      Altra destinazione
                    </label>
                    <input
                      type="text"
                      name="meta_altro"
                      className="input"
                      value={otherMeta}
                      onChange={(e) => setOtherMeta(e.target.value)}
                      placeholder="Scrivi la meta"
                    />
                  </div>
                )}
              </div>

              {/* Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 font-medium text-[#132C50]">
                    dal *
                  </label>
                  <input type="date" name="data_da" required className="input" />
                </div>
                <div>
                  <label className="block text-sm mb-1 font-medium text-[#132C50]">
                    al *
                  </label>
                  <input type="date" name="data_a" required className="input" />
                </div>
              </div>

              {/* Flessibilità */}
              <div className="flex items-center gap-2">
                <input type="checkbox" name="date_flessibili" className="h-4 w-4" />
                <span className="text-xs text-slate-600">Date flessibili</span>
              </div>

              {/* Partenza + Budget */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1 font-medium text-[#132C50]">
                    Luogo di partenza *
                  </label>
                  <input type="text" name="partenza" required className="input" placeholder="Es. Napoli, Roma" />
                </div>
                <div>
                  <label className="block text-sm mb-1 font-medium text-[#132C50]">
                    Budget indicativo *
                  </label>
                  <select name="budget" required className="input bg-white">
                    <option value="">Seleziona</option>
                    <option value="3000-5000">3.000 – 5.000 €</option>
                    <option value="5000-7000">5.000 – 7.000 €</option>
                    <option value="7000+">Oltre 7.000 €</option>
                  </select>
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-sm mb-1 font-medium text-[#132C50]">
                  Note aggiuntive
                </label>
                <textarea name="note" rows="4" className="input" placeholder="Preferenze, durata, esigenze particolari…" />
              </div>

              {/* Privacy */}
              <div className="flex items-start gap-2">
                <input type="checkbox" name="privacy" required className="h-4 w-4" />
                <span className="text-[11px] text-slate-600">
                  Ho letto e accetto l'informativa privacy.
                </span>
              </div>

              {/* CTA FORM */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-[#0863D6] text-white rounded-full font-semibold hover:bg-white hover:text-[#0863D6] border border-[#0863D6] transition disabled:opacity-60"
                >
                  {loading ? "Invio in corso..." : "Invia richiesta viaggio di nozze"}
                </button>

                {status === "success" && (
                  <p className="mt-3 text-emerald-600 text-sm">
                    Richiesta inviata correttamente!
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-3 text-red-600 text-sm">
                    Errore durante l'invio, riprova più tardi.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center text-xl md:text-2xl font-bold text-[#132C50] mb-8">
            Domande frequenti sui viaggi di nozze
          </h2>

          <div className="space-y-4 text-sm md:text-base text-slate-700">
            {/* FAQ ITEM */}
            {[
              {
                q: "Quanto tempo prima è consigliabile organizzare il viaggio di nozze?",
                a: "Per i viaggi intercontinentali consigliamo di iniziare circa 8–12 mesi prima per trovare migliori combinazioni di voli e hotel.",
              },
              {
                q: "Possiamo iniziare tutto online o dobbiamo venire subito in agenzia?",
                a: "La progettazione può avvenire online, ma la conferma viene sempre finalizzata in agenzia per sicurezza e chiarezza.",
              },
              {
                q: "Da quali aeroporti organizzate principalmente le partenze?",
                a: "Gestiamo soprattutto partenze da Napoli e Roma, valutando anche altre soluzioni quando utile.",
              },
              {
                q: "Vi occupate anche della biglietteria voli, treni e traghetti?",
                a: "Sì, gestiamo biglietteria aerea, treni e navi per un itinerario coordinato e senza stress.",
              },
              {
                q: "L’assicurazione sanitaria e bagaglio è obbligatoria?",
                a: "Non sempre, ma è fortemente consigliata per viaggi all’estero. Copre imprevisti sanitari, bagagli e ritardi.",
              },
              {
                q: "Possiamo attivare una lista viaggio di nozze?",
                a: "Sì, gli invitati possono contribuire con una quota libera direttamente al vostro viaggio.",
              },
            ].map(({ q, a }, i) => (
              <details
                key={i}
                className="group rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-md"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-5 py-5 list-none">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-2xl bg-[#E8F1FD]">
                      <HelpCircle className="w-4 h-4 text-[#0863D6]" />
                    </span>
                    <span className="font-semibold text-[#132C50]">{q}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition group-open:rotate-180" />
                </summary>

                <div className="px-5 pb-5 border-t border-slate-100">
                  <p className="mt-3 leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ViaggiDiNozze;