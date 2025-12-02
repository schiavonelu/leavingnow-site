import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Gift, HeartHandshake, Users, Plane, Mail } from "lucide-react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

// 📌 Immagine locale hero idee regalo
import heroImg from "../assets/idee-regalo/hero.webp";

// Card generica
const InfoCard = ({ icon, title, text }) => (
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

// Card per Travel Box / Gift Card
const GiftBoxCard = ({ badge, title, text }) => (
  <article className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-5 md:p-6 flex flex-col h-full">
    <span className="inline-flex items-center rounded-full bg-[#E8F1FD] text-[#0863D6] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] mb-3">
      {badge}
    </span>
    <h3 className="text-lg font-semibold text-[#132C50] mb-2">{title}</h3>
    <p className="text-sm text-slate-700 leading-relaxed text-justify flex-1">
      {text}
    </p>
  </article>
);

const IdeeRegalo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Idee regalo viaggio"
        subtitle="Lista nozze e Travel Box: il regalo che vale un’esperienza."
        image={heroImg}
      />

      <Breadcrumb />
      {/* INTRO */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
            Regali che diventano ricordi
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-6">
            Un regalo di viaggio resta per sempre
          </h1>

          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-center">
            <p>
              Un viaggio non è un oggetto: è un ricordo che rimane. Per questo abbiamo
              creato soluzioni dedicate a chi vuole fare, o farsi, un regalo
              speciale, come le nostre liste nozze e le Travel Box personalizzate.
            </p>

            <p>
              Che sia un viaggio di nozze, un anniversario, un compleanno o un traguardo
              da festeggiare, trasformiamo il contributo di amici e familiari in un
              itinerario su misura, curato in ogni dettaglio.
            </p>
          </div>
        </div>
      </section>

      {/* LISTA NOZZE VIAGGIO */}
      <section
        id="lista-nozze"
        className="py-12 md:py-16 bg-[#F8FAFC] border-y border-[#E2E8F0]"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-start">
            {/* Testo principale */}
            <div>
              <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2 text-center">
                Lista nozze viaggio
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-4 text-center">
                Una lista nozze che diventa il vostro viaggio
              </h2>

              <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify mb-5">
                <p>
                  La lista nozze viaggio è il modo più semplice ed elegante per trasformare i regali in un’esperienza da vivere insieme: gli invitati contribuiscono liberamente e voi ricevete un viaggio su misura costruito con il nostro supporto. Ci occupiamo noi di tutto - gestione dei versamenti, aggiornamento degli importi e assistenza agli invitati - così potete concentrarvi solo sulla scelta del vostro viaggio.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 mb-6">
                <InfoCard
                  icon={<Users />}
                  title="Per gli sposi"
                  text="Nessun pensiero pratico: una sola lista, un solo referente, un itinerario creato su misura con il vostro Travel Designer."
                />
                <InfoCard
                  icon={<HeartHandshake />}
                  title="Per chi regala"
                  text="Contributi liberi, messaggi dedicati agli sposi e possibilità di passare in agenzia o effettuare bonifici secondo le modalità concordate."
                />
              </div>

              {/* CTA verso Contatti */}
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link
                  to="/contatti"
                  className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0863D6] bg-[#0863D6] text-white hover:bg-white hover:text-[#0863D6] transition"
                >
                  Contattaci
                </Link>

                <p className="text-[11px] md:text-xs text-slate-500 text-center sm:text-justify max-w-xs">
                  Ti spiegheremo nel dettaglio come funziona la lista nozze
                  Leaving Now e come personalizzarla in base al tuo viaggio.
                </p>
              </div>
            </div>

            {/* Schemini a destra */}
            <div className="space-y-4 md:space-y-5">
              <div className="rounded-3xl bg-white border border-[#E2E8F0] p-5 md:p-6 shadow-sm">
                <h3 className="text-sm md:text-base font-semibold text-[#0863D6] mb-3">
                  Come funziona in pratica
                </h3>
                <ol className="space-y-2 text-xs md:text-sm text-slate-700 leading-relaxed">
                  <li>
                    <span className="font-semibold text-[#132C50]">1.</span>{" "}
                    Scegliamo insieme il viaggio (anche indicativo).
                  </li>
                  <li>
                    <span className="font-semibold text-[#132C50]">2.</span>{" "}
                    Apriamo la lista nozze in agenzia a vostro nome.
                  </li>
                  <li>
                    <span className="font-semibold text-[#132C50]">3.</span>{" "}
                    Forniamo istruzioni chiare agli invitati per contribuire.
                  </li>
                  <li>
                    <span className="font-semibold text-[#132C50]">4.</span>{" "}
                    Vi aggiorniamo periodicamente sul totale raccolto.
                  </li>
                  <li>
                    <span className="font-semibold text-[#132C50]">5.</span>{" "}
                    Prima della partenza, definiamo insieme il viaggio finale.
                  </li>
                </ol>
              </div>

              <div className="rounded-3xl bg-[#0F172A] border border-slate-700 p-5 md:p-6 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-800 text-[#FACC15]">
                    <Gift className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-white">
                    Comunicazione agli invitati
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-slate-200 leading-relaxed text-justify">
                  Possiamo fornirti un testo dedicato per partecipazioni, sito
                  degli sposi o messaggi da inviare, così i tuoi invitati
                  sanno esattamente come contribuire alla tua lista nozze
                  viaggio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAVEL BOX & GIFT CARD */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Travel Box & Gift Card
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-3">
              Il regalo perfetto per chi ama viaggiare
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Un pensiero elegante, personalizzabile e davvero utile: una Travel
              Box o una gift card Leaving Now per trasformare un’occasione in
              un’esperienza di viaggio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <GiftBoxCard
              badge="Per ogni occasione"
              title="Travel Box regalo"
              text="Un cofanetto fisico o digitale che contiene il valore del regalo e, se vuoi, una proposta di viaggio o un’idea di itinerario. Perfetto per compleanni, anniversari, lauree o regali di gruppo."
            />
            <GiftBoxCard
              badge="Libertà totale"
              title="Gift card viaggio"
              text="Una carta regalo con importo libero, da utilizzare per prenotare qualsiasi tipo di viaggio, weekend o servizio Leaving Now, anche in combinazione con altri pagamenti."
            />
            <GiftBoxCard
              badge="Su misura"
              title="Personalizzazione e messaggio"
              text="Possiamo creare grafiche, messaggi dedicati e idee di utilizzo del regalo, così chi riceve la Travel Box sente che è stata pensata davvero per lui o per loro."
            />
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Idee regalo su misura
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi creare una lista nozze o una Travel Box personalizzata?
          </h2>

          <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto mb-6">
            Raccontaci l’occasione, il budget indicativo e la persona o la
            coppia a cui vuoi dedicare questo regalo: penseremo noi a
            costruire un’idea di viaggio o una soluzione su misura.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0863D6] bg-[#0863D6] text-white hover:bg-white hover:text-[#0863D6] transition"
            >
              <Mail className="w-4 h-4 mr-2"/>
              Scrivici per un’idea regalo
            </Link>

            <Link
              to="/viaggi-di-nozze"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              <Plane className="w-4 h-4 mr-2" />
              Scopri i viaggi di nozze
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default IdeeRegalo;

