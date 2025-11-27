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
} from "lucide-react";
import InnerHero from "../sections/shared/InnerHero.jsx";

// 📌 Immagini locali
import heroImg from "../assets/viaggi-nozze/hero.webp";
import mareImg from "../assets/viaggi-nozze/mare.webp";
import tourImg from "../assets/viaggi-nozze/tour.webp";
import cittaImg from "../assets/viaggi-nozze/citta.webp";

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

// Card idee di viaggio (immagine di sfondo)
const TravelIdeaCard = ({ title, caption, badge, image }) => (
  <article className="relative overflow-hidden rounded-3xl shadow-md border border-[#E2E8F0] bg-slate-900/80">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/60 to-slate-900/10" />

    <div className="relative p-5 md:p-6 flex flex-col h-full justify-end">
      <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white mb-3">
        {badge}
      </span>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-slate-100 leading-relaxed text-justify">
        {caption}
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

  return (
    <>
      <InnerHero
        title="Viaggi di nozze"
        subtitle="Un viaggio unico, costruito su misura per la vostra storia."
        image={heroImg}
      />

      {/* HONEYMOON + PERCHÉ SCEGLIERCI (UNICA SEZIONE) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          {/* Intro Honeymoon */}
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Honeymoon by Leaving Now
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-5">
              Il vostro primo grande viaggio insieme, pensato in ogni dettaglio
            </h1>

            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto leading-relaxed">
              Dalla prima idea al rientro, vi accompagniamo in ogni fase:
              consulenza, organizzazione, assistenza e dettagli che trasformano
              il viaggio di nozze in un ricordo che resta.
            </p>
          </div>

          {/* Perché scegliere Leaving Now + card */}
          <div>
            <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ValueCard
                icon={<Heart />}
                title="Ascolto e progetto su misura"
                text="Partiamo da voi: gusti, budget, periodo e stile di viaggio. Da qui costruiamo un itinerario unico, non un pacchetto standard."
              />
              <ValueCard
                icon={<Plane />}
                title="Operatività completa"
                text="Voli, hotel, trasferimenti, escursioni, assicurazioni e documentazione: tutto coordinato in un unico punto di riferimento."
              />
              <ValueCard
                icon={<Sparkles />}
                title="Dettagli pensati per coppie"
                text="Cene speciali, esperienze esclusive, servizi dedicati agli sposi: vi suggeriamo ciò che può rendere il viaggio ancora più vostro."
              />
              <ValueCard
                icon={<MapPinned />}
                title="Partner selezionati nel mondo"
                text="Collaboriamo con corrispondenti locali e strutture affidabili, per garantirvi qualità, sicurezza e assistenza anche in loco."
              />
              <ValueCard
                icon={<CalendarRange />}
                title="Timing e combinazioni ottimali"
                text="Vi aiutiamo a scegliere il periodo giusto e le migliori combinazioni di tappe, ottimizzando giorni, spostamenti e budget."
              />
              <ValueCard
                icon={<ShieldCheck />}
                title="Serenità prima, durante e dopo"
                text="Non siete mai soli: dal preventivo al rientro, restiamo al vostro fianco per gestire cambi, dubbi e qualsiasi imprevisto."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA: ISPIRAZIONE / PREVENTIVO */}
      <section className="py-8 md:py-10 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6]">
            Prossimo passo
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-[#132C50]">
            Ancora indecisi o avete già un’idea chiara?
          </h2>
          <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
            Potete partire dalle nostre idee di ispirazione oppure raccontarci
            già il viaggio che immaginate: in entrambi i casi costruiremo un
            itinerario su misura per voi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#idee-nozze"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-sm border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Vuoi farti ispirare?
            </a>
            <a
              href="#preventivo-nozze"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-400 text-slate-700 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              Richiedi un preventivo
            </a>
          </div>
        </div>
      </section>

      {/* LISTA VIAGGIO DI NOZZE – TESTO SNELLO, MOBILE-CENTERED */}
      <section className="py-10 md:py-12 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-5 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F1FD] text-[#EB2480] shrink-0">
              <Gift className="w-5 h-5" />
            </div>

            <div className="flex-1">
              <h3 className="text-base md:text-lg font-semibold text-[#132C50] mb-1">
                Lista Viaggio di Nozze
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-2">
                Vuoi che il viaggio di nozze sia anche il regalo dei tuoi
                invitati? Scrivici per scoprire come funziona la lista nozze
                Leaving Now.
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

      {/* IDEE DI VIAGGIO DI NOZZE */}
      <section id="idee-nozze" className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#EB2480] mb-2">
              Idee e ispirazioni
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Quale viaggio di nozze sognate?
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
              Qui trovi solo alcuni spunti: ogni itinerario verrà adattato a
              voi, alle vostre date e al vostro stile di viaggio. Possiamo
              partire da qui oppure creare qualcosa di completamente diverso.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TravelIdeaCard
              badge="Mare & Relax"
              title="Mare da sogno e resort esclusivi"
              caption="Maldive, Polinesia, Seychelles, Caraibi e molte altre destinazioni. Resort selezionati, overwater, spa, servizi dedicati alle coppie e combinazioni con city break o tour brevi."
              image={mareImg}
            />
            <TravelIdeaCard
              badge="Tour & Avventura"
              title="On the road e grandi itinerari"
              caption="Stati Uniti, Giappone, Thailandia, Africa, Sud America: tour guidati o fly & drive, tra città iconiche, natura, esperienze locali e tappe studiate con cura."
              image={tourImg}
            />
            <TravelIdeaCard
              badge="Città romantiche"
              title="Capitali, charme e design"
              caption="Parigi, New York, Dubai, grandi città europee e metropoli internazionali. Boutique hotel, rooftop, ristoranti particolari e attività pensate per due."
              image={cittaImg}
            />
          </div>
        </div>
      </section>

      {/* FORM DEDICATO VIAGGIO DI NOZZE – STILE CONTATTI, MOBILE FIRST */}
      <section id="preventivo-nozze" className="py-12 md:py-16 bg-[#E8F1FD]">
        <div className="max-w-5xl mx-auto px-4">
          {/* Intro form */}
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-2">
              Richiesta preventivo viaggio di nozze
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-3">
              Raccontateci il vostro viaggio ideale
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Compilate il form con le informazioni principali: useremo questi
              dettagli per prepararvi una proposta su misura e ricontattarvi il
              prima possibile.
            </p>
          </div>

          {/* CARD FORM CENTRATA */}
          <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-lg p-6 md:p-8 max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nomi sposi */}
              <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
                <div>
                  <label
                    htmlFor="sposo1"
                    className="block text-sm font-medium text-[#132C50] mb-1"
                  >
                    Nome sposa/sposo 1 *
                  </label>
                  <input
                    type="text"
                    id="sposo1"
                    name="sposo1"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                    placeholder="Nome"
                  />
                </div>

                {/* & sempre allineata al centro */}
                <div className="flex items-center justify-center text-xl font-semibold text-slate-500">
                  &
                </div>

                <div>
                  <label
                    htmlFor="sposo2"
                    className="block text-sm font-medium text-[#132C50] mb-1"
                  >
                    Nome sposa/sposo 2 *
                  </label>
                  <input
                    type="text"
                    id="sposo2"
                    name="sposo2"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
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

              {/* Meta */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="meta"
                    className="block text-sm font-medium text-[#132C50] mb-1"
                  >
                    Meta o tipologia di viaggio di nozze *
                  </label>
                  <select
                    id="meta"
                    name="meta"
                    required
                    value={meta}
                    onChange={(e) => setMeta(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm bg-white"
                  >
                    <option value="">Seleziona un’opzione</option>
                    <option value="crociera">
                      Crociera (Mediterraneo, fiordi, Caraibi…)
                    </option>
                    <option value="usa">Stati Uniti – tour on the road</option>
                    <option value="usa-mare">
                      Stati Uniti + mare (es. Caraibi)
                    </option>
                    <option value="mare-tropicale">
                      Mare tropicale (Maldive, Polinesia, Seychelles, Caraibi…)
                    </option>
                    <option value="giappone-asia">Giappone / Asia</option>
                    <option value="africa-safari-mare">
                      Africa con safari + mare
                    </option>
                    <option value="europa">
                      Europa (città, tour, on the road)
                    </option>
                    <option value="altro">Altro (specifica)</option>
                  </select>
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
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
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
                      Dal *
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
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="data_a"
                      className="block text-sm font-medium text-[#132C50] mb-1"
                    >
                      Al *
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
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
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

                {/* Luogo di partenza + Budget sulla stessa riga */}
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
    </>
  );
};

export default ViaggiDiNozze;








