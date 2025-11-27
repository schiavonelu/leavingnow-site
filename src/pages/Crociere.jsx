import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Ship,
  Waves,
  MapPinned,
  CalendarRange,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

// Per ora uso l'hero generico destinazioni
import heroImg from "../assets/triptypes/crociere.webp";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";

// Card “perché scegliere noi per le crociere”
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

// Card idee di crociera
const CruiseIdeaCard = ({ title, caption, badge }) => (
  <article className="rounded-3xl bg-[#0F172A] border border-[#1E293B] shadow-md p-5 md:p-6 flex flex-col justify-between">
    <div>
      <span className="inline-flex items-center rounded-full bg-sky-500/10 border border-sky-500/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200 mb-3">
        {badge}
      </span>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-slate-200 leading-relaxed text-justify">
        {caption}
      </p>
    </div>
  </article>
);

const Crociere = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Crociere"
        subtitle="Dal Mediterraneo ai mari lontani, crociere pensate intorno a te."
        image={heroImg}
      />

      <Breadcrumb />

      {/* INTRO */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
            Crociere by Leaving Now
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-6">
            Non una crociera qualsiasi, ma la tua crociera
          </h1>

          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            <p>
              La crociera è un modo di viaggiare che unisce comfort, servizio e
              la possibilità di cambiare panorama ogni giorno. Per questo è
              importante scegliere non solo la compagnia e la nave, ma anche
              l&apos;itinerario più adatto a te, al periodo dell&apos;anno e al
              tipo di esperienza che immagini.
            </p>
            <p>
              Possiamo aiutarti a orientarti tra Mediterraneo, Nord Europa,
              Caraibi, Emirati e tante altre rotte, valutando insieme durata,
              scali, stile di bordo e servizi, che tu parta in coppia, in
              famiglia o con un gruppo di amici.
            </p>
            <p>
              A te restano il piacere di scegliere e di goderti il viaggio; a
              noi la parte operativa: combinazioni voli + crociera, trasferimenti,
              assicurazioni e tutta l&apos;assistenza prima, durante e dopo.
            </p>
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI PER LE CROCIERE (più minimal) */}
      <section className="py-12 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Perché affidarti a noi
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-3">
              Una crociera scelta, non solo prenotata
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Ti aiutiamo a selezionare la rotta e la nave giusta per te, con un
              occhio attento a stagionalità, scali, tempi di viaggio e servizi
              di bordo.
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Ship />}
              title="Scelta della compagnia e della nave"
              text="Ogni compagnia e ogni nave hanno un loro stile: ti guidiamo nella scelta più adatta a età, gusti, esigenze e modo di vivere il tempo a bordo."
            />
            <ValueCard
              icon={<Waves />}
              title="Itinerari e stagionalità"
              text="Mediterraneo, Nord Europa, Caraibi, Emirati e oltre: valutiamo insieme periodo, scali, clima e ritmo del viaggio, per evitare sorprese."
            />
            <ValueCard
              icon={<MapPinned />}
              title="Voli, trasferimenti e pre/post tour"
              text="Possiamo combinare la crociera con notti pre o post, visite guidate, trasferimenti privati o aggiungere estensioni su misura a terra."
            />
            <ValueCard
              icon={<CalendarRange />}
              title="Durata su misura"
              text="Mini crociere, settimane classiche o itinerari più lunghi: troviamo il giusto equilibrio tra giorni di navigazione, scali e tempo a disposizione."
            />
            <ValueCard
              icon={<ShieldCheck />}
              title="Assistenza dedicata"
              text="Dalla scelta della cabina alle formalità di viaggio, restiamo al tuo fianco prima della partenza e durante la crociera, in collegamento con i partner."
            />
            <ValueCard
              icon={<Sparkles />}
              title="Momenti speciali a bordo"
              text="Feste, ricorrenze, viaggi di nozze, compleanni: ti suggeriamo come rendere ancora più speciale il tuo viaggio in nave, con servizi e attenzioni dedicate."
            />
          </div>
        </div>
      </section>

      {/* IDEE DI CROCIERA (SEZIONE ISPIRAZIONI) */}
      <section className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#EB2480] mb-2">
              Idee e ispirazioni
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Da dove potresti iniziare
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
              Qui trovi solo alcuni spunti: ogni crociera viene costruita e
              adattata intorno a te, al tuo periodo di partenza e al modo in cui
              ami viaggiare.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <CruiseIdeaCard
              badge="Mediterraneo"
              title="Mediterraneo tra città e isole"
              caption="Rotte che uniscono città d’arte, isole, borghi sul mare e giornate di navigazione rilassata. Ideale per una prima crociera o per chi ama cambiare spesso scenario senza allontanarsi troppo."
            />
            <CruiseIdeaCard
              badge="Nord Europa"
              title="Fiordi, paesaggi e luce del Nord"
              caption="Una crociera tra fiordi, coste verdi e piccoli porti nordici, con escursioni panoramiche e un ritmo che invita a rallentare. Perfetta per chi ama natura e grande respiro."
            />
            <CruiseIdeaCard
              badge="Mari lontani"
              title="Caraibi, Emirati e oceani tropicali"
              caption="Acque turchesi, isole, città moderne, deserti e porti esotici: itinerari pensati per chi desidera unire comfort di bordo, clima mite e scali dal sapore lontano."
            />
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Consulenza crociere
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi iniziare a progettare la tua prossima crociera?
          </h2>

          <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto mb-6">
            Raccontaci da dove parti, in che periodo vorresti viaggiare e che
            tipo di esperienza immagini a bordo. Possiamo incontrarci in agenzia
            oppure organizzare una consulenza da remoto, con calma.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Scrivici per una proposta
            </Link>

            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              <CalendarRange className="w-4 h-4 mr-2" />
              Prenota una consulenza
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Crociere;
