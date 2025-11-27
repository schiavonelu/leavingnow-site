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
  const [status, setStatus] = useState(null);
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
    } catch {
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

      {/* 🔹 SEZIONE UNICA: HONEYMOON + PERCHÉ SCEGLIERCI + LISTA + FORM */}
      <section className="py-12 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          {/* Intro + perché sceglierci + lista nozze (testo snello) */}
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6]">
              Honeymoon by Leaving Now
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480]">
              Un viaggio di nozze che vi assomiglia davvero
            </h1>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Niente pacchetti standard: partiamo dalla vostra storia, dal modo
              in cui vi piace viaggiare e dal periodo in cui partirete. Da lì
              costruiamo un itinerario su misura, combinando mete, tappe e
              strutture con un unico obiettivo: farvi vivere un viaggio che sia
              davvero vostro.
            </p>

            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Lavoriamo con partner selezionati, curiamo ogni dettaglio
              operativo e restiamo al vostro fianco prima, durante e dopo il
              viaggio, così potete concentrarvi solo su una cosa: godervi il
              vostro primo grande “sì” lontano da casa.
            </p>

            <div className="text-xs md:text-sm text-slate-600">
              <span className="font-semibold text-[#132C50]">
                Lista nozze viaggio:
              </span>{" "}
              se desiderate, possiamo anche trasformare il vostro viaggio di
              nozze nel regalo dei vostri invitati, con una{" "}
              <Link
                to="/idee-regalo#lista-nozze"
                className="underline decoration-[#0863D6] underline-offset-2 hover:text-[#0863D6]"
              >
                lista nozze dedicata
              </Link>{" "}
              semplice da condividere.
            </div>
          </div>

          {/* Card perché sceglierci */}
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Heart />}
              title="Su misura, non a catalogo"
              text="Ascolto, confronto e proposta personalizzata: ogni viaggio di nozze è costruito partendo da voi, non da un listino."
            />
            <ValueCard
              icon={<Plane />}
              title="Tutto coordinato da un unico punto"
              text="Voli, hotel, trasferimenti, assicurazioni e documenti sempre sotto controllo, con una regia unica e chiara."
            />
            <ValueCard
              icon={<Sparkles />}
              title="Dettagli pensati per coppie"
              text="Esperienze speciali, cene, sorprese e piccoli plus che rendono il viaggio ancora più vostro e memorabile."
            />
            <ValueCard
              icon={<MapPinned />}
              title="Partner selezionati nel mondo"
              text="Corrispondenti locali e strutture di fiducia, scelti per affidabilità, cura del servizio e attenzione agli sposi."
            />
            <ValueCard
              icon={<CalendarRange />}
              title="Periodi e tappe ottimizzati"
              text="Vi aiutiamo a incastrare al meglio date, combinazioni di voli e ritmo del viaggio, in base ai giorni reali che avete."
            />
            <ValueCard
              icon={<ShieldCheck />}
              title="Serenità dall’inizio alla fine"
              text="Un riferimento chiaro prima, durante e dopo il viaggio, per gestire cambi, imprevisti o semplici dubbi."
            />
          </div>

          {/* CTA + FORM CENTRATO */}
          <div className="space-y-6">
            <div className="text-center space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-[#132C50]">
                Da dove vogliamo iniziare?
              </h2>
              <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
                Compilate il form con le informazioni essenziali: useremo questi
                dati per prepararvi una proposta su misura e ricontattarvi nel
                modo che preferite.
              </p>
              <p className="text-xs md:text-sm text-slate-500">
                Preferite parlarne di persona?{" "}
                <a
                  href={RESERVIO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[#0863D6] hover:text-[#0648a3] underline underline-offset-2"
                >
                  Prenotate una consulenza in agenzia
                </a>
                .
              </p>
            </div>

            {/* FORM DEDICATO – CENTRATO */}
            <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#E2E8F0] shadow-lg p-6 md:p-8">
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
                      placeholder="Es. Martina"
                    />
                  </div>

                  <div className="hidden md:flex items-center justify-center text-xl font-semibold text-slate-500">
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
                      placeholder="Es. Luca"
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
                      placeholder="Es. nome@email.it"
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
                      <option value="usa">
                        Stati Uniti – tour on the road
                      </option>
                      <option value="usa-mare">
                        Stati Uniti + mare (es. Caraibi)
                      </option>
                      <option value="mare-tropicale">
                        Mare tropicale (Maldive, Polinesia, Seychelles,
                        Caraibi…)
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
                        placeholder="Es. Australia, tour particolari..."
                      />
                    </div>
                  )}
                </div>

                {/* Periodo + partenza */}
                <div className="space-y-3">
                  <div className="grid gap-4 md:grid-cols-3">
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
                  </div>

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
                </div>

                {/* Budget */}
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

                {/* Note */}
                <div>
                  <label
                    htmlFor="note"
                    className="block text-sm font-medium text-[#132C50] mb-1"
                  >
                    Qualche dettaglio in più (opzionale)
                  </label>
                  <textarea
                    id="note"
                    name="note"
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                    placeholder="Es. durata ideale, tipo di strutture, esperienze che vi piacerebbe includere…"
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
                      className="underline decoration-[#0863D6] decoration-2 underline-offset-2 hover:text-[#0863D6]"
                    >
                      informativa privacy
                    </Link>{" "}
                    e acconsentiamo al trattamento dei dati personali per
                    essere ricontattati in merito alla presente richiesta.
                  </label>
                </div>

                {/* CTA + messaggi */}
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
                    Dopo l&apos;invio riceverete una conferma e vi
                    ricontatteremo il prima possibile. Se preferite, potete
                    scriverci anche via email o WhatsApp dai contatti del sito.
                  </p>
                </div>

                {status === "success" && (
                  <p className="mt-4 text-center text-emerald-600 text-sm font-medium">
                    Richiesta inviata correttamente! Vi risponderemo il prima
                    possibile per parlare del vostro viaggio di nozze.
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-center text-red-600 text-sm font-medium">
                    Si è verificato un problema durante l&apos;invio. Riprova
                    tra poco oppure contattaci direttamente dai nostri recapiti.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* IDEE & ISPIRAZIONI (SEZIONE SOTTO) */}
      <section id="idee-nozze" className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#EB2480] mb-2">
              Idee e ispirazioni
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Da dove potrebbe partire il vostro sogno?
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
              Queste sono solo alcune idee: ogni itinerario viene disegnato
              insieme a voi, adattando durata, tappe e livello di comfort al
              vostro modo di viaggiare.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TravelIdeaCard
              badge="Mare & Relax"
              title="Mare da sogno e resort esclusivi"
              caption="Maldive, Polinesia, Seychelles, Caraibi e altre destinazioni tropicali. Resort selezionati, servizi dedicati agli sposi, combinazioni con city break o brevi tour."
              image={mareImg}
            />
            <TravelIdeaCard
              badge="Tour & Avventura"
              title="On the road e grandi itinerari"
              caption="Stati Uniti, Giappone, Thailandia, Africa, Sud America: tour guidati o fly & drive, tra città iconiche, natura e esperienze locali indimenticabili."
              image={tourImg}
            />
            <TravelIdeaCard
              badge="Città romantiche"
              title="Capitali, charme e design"
              caption="Parigi, New York, Dubai, grandi città europee e metropoli internazionali. Boutique hotel, rooftop, ristoranti speciali e attività pensate per due."
              image={cittaImg}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ViaggiDiNozze;








