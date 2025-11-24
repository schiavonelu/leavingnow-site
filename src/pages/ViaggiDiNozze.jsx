import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Plane,
  Sparkles,
  MapPinned,
  CalendarRange,
  ShieldCheck,
  Gift,
} from "lucide-react";
import InnerHero from "../sections/shared/InnerHero.jsx";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";

const COLORS = {
  primary: "#0863D6",
  accent: "#EB2480",
  navy900: "#132C50",
};

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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Viaggi di nozze"
        subtitle="Un viaggio unico, costruito su misura per la vostra storia."
        image="https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg"
      />

      {/* INTRO */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
            Honeymoon by Leaving Now
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-6">
            Il vostro primo grande viaggio insieme, pensato in ogni dettaglio
          </h1>

          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            <p>
              Il viaggio di nozze non è una semplice vacanza: è il primo
              capitolo di una nuova storia da vivere insieme. Per questo al
              centro ci siete voi, la vostra personalità, il vostro modo di
              viaggiare e il ricordo che desiderate portare con voi per sempre.
            </p>
            <p>
              Insieme progettiamo un itinerario su misura, valutando mete,
              periodi, combinazioni di voli, strutture e attività, senza
              lasciare nulla al caso. Dalle grandi classiche da sogno alle
              rotte più particolari, ogni proposta è costruita ascoltandovi,
              consigliandovi e affiancandovi passo dopo passo.
            </p>
            <p>
              Che immaginiate un mare cristallino, un tour on the road, una
              città romantica o una combinazione di più esperienze, il nostro
              obiettivo è uno solo: farvi vivere un viaggio che vi somigli e
              che resti davvero indimenticabile.
            </p>
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className="py-12 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Perché scegliere Leaving Now
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-3">
              Viaggi di nozze curati come se fossero i nostri
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Dalla prima idea al rientro, vi accompagniamo in ogni fase:
              progettazione, organizzazione, assistenza e piccoli dettagli che
              fanno la differenza.
            </p>
          </div>

          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ValueCard
              icon={<Heart />}
              title="Ascolto e progetto su misura"
              text="Partiamo da voi: gusti, budget, periodo e stile di viaggio. Da qui costruiamo un itinerario unico, non un pacchetto standard."
            />
            <ValueCard
              icon={<Plane />}
              title="Operatività completa"
              text="Voli, hotel, trasferimenti, escursioni, assicurazioni e documentazione: in un unico punto di riferimento, con spiegazioni chiare."
            />
            <ValueCard
              icon={<Sparkles />}
              title="Esperienze speciali per coppie"
              text="Cene romantiche, esperienze esclusive, servizi dedicati agli sposi: vi suggeriamo ciò che può rendere il viaggio ancora più vostro."
            />
            <ValueCard
              icon={<MapPinned />}
              title="Partner selezionati nel mondo"
              text="Collaboriamo con corrispondenti locali e strutture affidabili, per garantirvi qualità, sicurezza e assistenza anche in loco."
            />
            <ValueCard
              icon={<CalendarRange />}
              title="Timing e combinazioni ottimali"
              text="Vi aiutiamo a scegliere il periodo giusto e le combinazioni di tappe migliori, ottimizzando giorni, spostamenti e budget."
            />
            <ValueCard
              icon={<ShieldCheck />}
              title="Serenità prima, durante e dopo"
              text="Non siete mai soli: dal preventivo al rientro, siamo al vostro fianco per gestire cambi, dubbi e qualsiasi imprevisto."
            />
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Come lavoriamo
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-3">
              Un percorso semplice, pensato per voi
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Dall’idea iniziale al rientro a casa: ogni fase è guidata e
              seguita, con tempi chiari e supporto concreto.
            </p>
          </div>

          <div className="space-y-5 md:space-y-6">
            {[
              {
                step: "1",
                title: "Confronto iniziale",
                text: "Ci raccontate chi siete, cosa vi piace, che tipo di viaggio immaginate e qual è il budget indicativo. In agenzia o da remoto, senza impegno.",
              },
              {
                step: "2",
                title: "Proposte su misura",
                text: "Prepariamo una o più soluzioni complete (voli, hotel, itinerari, esperienze) spiegate nel dettaglio, con alternative e consigli.",
              },
              {
                step: "3",
                title: "Definizione e conferma",
                text: "Affiniamo insieme il programma fino a quando tutto è come lo desiderate. Una volta confermato, ci occupiamo noi di tutte le pratiche.",
              },
              {
                step: "4",
                title: "Assistenza durante il viaggio",
                text: "Restiamo a disposizione anche mentre siete in viaggio, in collegamento con i nostri partner locali, per supportarvi in caso di necessità.",
              },
            ].map(({ step, title, text }) => (
              <div
                key={step}
                className="flex gap-4 md:gap-5 items-start rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 md:p-5"
              >
                <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#0863D6] text-white text-sm md:text-base font-semibold shrink-0 shadow-sm">
                  {step}
                </div>
                <div className="text-left">
                  <h3 className="text-sm md:text-base font-semibold text-[#132C50] mb-1">
                    {title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COLLEGAMENTO LISTA NOZZE / IDEE REGALO */}
      <section className="py-10 md:py-12 bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F1FD] text-[#EB2480] shrink-0">
              <Gift className="w-5 h-5" />
            </div>

            <div className="flex-1 text-left">
              <h3 className="text-base md:text-lg font-semibold text-[#132C50] mb-1">
                Lista nozze viaggio & idee regalo
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed text-justify mb-2">
                Vuoi che il tuo viaggio di nozze sia anche il regalo dei tuoi
                invitati? Possiamo creare per te una lista nozze viaggio e
                soluzioni regalo dedicate, come Travel Box e gift card
                personalizzate.
              </p>
              <p className="text-xs text-slate-500">
                Scopri come funziona la lista nozze Leaving Now e tutte le idee
                regalo viaggio nella pagina dedicata.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <Link
                to="/idee-regalo#lista-nozze"
                className="inline-flex w-full md:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold bg-[#0863D6] text-white border border-[#0863D6] hover:bg-white hover:text-[#0863D6] transition"
              >
                Vai alla Lista Nozze
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IDEE DI VIAGGIO DI NOZZE */}
      <section className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#EB2480] mb-2">
              Idee e ispirazioni
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Quale viaggio di nozze sognate?
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
              Qui trovi solo alcuni spunti: ogni itinerario sarà cucito su di
              voi, combinando mete, tempi e stile di viaggio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TravelIdeaCard
              badge="Mare & Relax"
              title="Mare da sogno e resort esclusivi"
              caption="Maldive, Polinesia, Seychelles, Caraibi e molte altre destinazioni. Resort selezionati, overwater, spa, servizi dedicati alle coppie e combinazioni con city break o tour brevi."
              image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
            />
            <TravelIdeaCard
              badge="Tour & Avventura"
              title="On the road e grandi itinerari"
              caption="Stati Uniti, Giappone, Thailandia, Africa, Sud America: tour guidati o fly & drive, tra città iconiche, natura, esperienze locali e tappe studiate con cura."
              image="https://images.pexels.com/photos/676654/pexels-photo-676654.jpeg"
            />
            <TravelIdeaCard
              badge="Città romantiche"
              title="Capitali, charme e design"
              caption="Parigi, New York, Dubai, grandi città europee e metropoli internazionali. Boutique hotel, rooftop, ristoranti particolari e attività pensate per due."
              image="https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg"
            />
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Consulenza dedicata sposi
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Pronti a parlare del vostro viaggio di nozze?
          </h2>

          <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto mb-6">
            Raccontateci le vostre idee, il periodo, il budget e il tipo di
            esperienza che immaginate. Possiamo incontrarci in agenzia o
            organizzare una consulenza da remoto.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Scrivici per un preventivo
            </Link>

            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              <CalendarRange className="w-4 h-4 mr-2" />
              Prenota una consulenza in agenzia
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViaggiDiNozze;

