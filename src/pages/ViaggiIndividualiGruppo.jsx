import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  User,
  MapPinned,
  Plane,
  CalendarRange,
  Sparkles,
} from "lucide-react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

import heroImg from "../assets/triptypes/viaggiodigruppohero.webp";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";

// Card “focus” individuali / gruppi
const FocusCard = ({ icon, title, text }) => (
  <article className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-5 md:p-6 flex gap-3 md:gap-4 items-start">
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F1FD] text-[#0863D6] shadow-sm shrink-0">
      {icon}
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

// Card idee di viaggio
const TravelIdeaCard = ({ badge, title, text }) => (
  <article className="rounded-3xl bg-[#0F172A] border border-[#1E293B] shadow-md p-5 md:p-6 flex flex-col justify-between">
    <div>
      <span className="inline-flex items-center rounded-full bg-sky-500/10 border border-sky-500/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-sky-200 mb-3">
        {badge}
      </span>
      <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-slate-200 leading-relaxed text-justify">
        {text}
      </p>
    </div>
  </article>
);

const ViaggiIndividualiGruppo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Viaggi individuali & di gruppo"
        subtitle="Itinerari su misura per chi parte da solo, in coppia, in famiglia o con un gruppo organizzato."
        image={heroImg}
      />

      <Breadcrumb />

      {/* INTRO */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
            Viaggi su misura
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-6">
            Dall&apos;individuale al gruppo, sempre con un progetto pensato su di
            te
          </h1>

          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            <p>
              C&apos;è chi ama partire in due o in famiglia, con ritmi propri e
              massima libertà, e chi invece preferisce la sicurezza e la
              convivialità di un viaggio di gruppo, accompagnato e già
              strutturato. Il nostro lavoro è ascoltarti e proporti la formula
              giusta, senza forzare una soluzione che non ti assomiglia.
            </p>
            <p>
              Possiamo costruire viaggi individuali su misura in Italia, Europa
              e nel resto del mondo, oppure orientarti tra tour di gruppo,
              partenze speciali e itinerari con accompagnatore, sempre con un
              occhio attento alla qualità dell&apos;esperienza.
            </p>
          </div>
        </div>
      </section>

      {/* INDIVIDUALI VS GRUPPO */}
      <section className="py-12 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Due modi diversi di viaggiare
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-3">
              Individuali e gruppi, con la stessa cura
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Che tu preferisca la libertà del viaggio individuale o la serenità
              di un gruppo organizzato, il punto di partenza è sempre lo stesso:
              capire cosa ti fa stare bene in viaggio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <FocusCard
              icon={<User className="w-5 h-5" />}
              title="Viaggi individuali su misura"
              text="Itinerari costruiti sulle tue esigenze: durata, tappe, stile di strutture, attività, tempi di visita. Perfetti per coppie, famiglie, amici o anche per chi parte da solo e vuole un progetto cucito addosso."
            />
            <FocusCard
              icon={<Users className="w-5 h-5" />}
              title="Viaggi di gruppo organizzati"
              text="Tour con programma definito, assistenza di un accompagnatore o guida, trasferimenti e visite già strutturate. Ideali per chi cerca condivisione, sicurezza e un ritmo di viaggio guidato."
            />
          </div>
        </div>
      </section>

      {/* COME FUNZIONA (MINIMAL) */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Come ti accompagniamo
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-3">
              Dal confronto iniziale al rientro
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Pochi passaggi chiari, con una consulenza reale prima di
              strutturare il viaggio.
            </p>
          </div>

          <div className="space-y-5 md:space-y-6">
            {[
              {
                step: "1",
                title: "Ascolto e briefing",
                text: "Partiamo da chi sei, con chi viaggi, da dove parti e cosa ti aspetti dal viaggio. Più ci racconti, più il progetto sarà vicino a te.",
              },
              {
                step: "2",
                title: "Proposta individuale o di gruppo",
                text: "Ti presentiamo una o più soluzioni: viaggio individuale su misura, tour di gruppo, o un mix tra momenti liberi e parti organizzate.",
              },
              {
                step: "3",
                title: "Definizione dettagli e assistenza",
                text: "Affiniamo insieme il programma, ci occupiamo delle prenotazioni e restiamo a disposizione per eventuali aggiustamenti e domande.",
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

      {/* IDEE DI VIAGGIO */}
      <section className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#EB2480] mb-2">
              Idee e ispirazioni
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Alcuni modi di pensare il tuo prossimo viaggio
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
              Qui trovi solo esempi: ogni proposta, individuale o di gruppo, può
              essere adattata e rimodulata in base a periodo, budget e stile di
              viaggio.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TravelIdeaCard
              badge="Individuale"
              title="Weekend o brevi fughe su misura"
              text="Città europee, città italiane o piccole capitali da scoprire in pochi giorni, con hotel selezionati, transfer e attività mirate, senza rinunciare alla libertà di muoverti come vuoi."
            />
            <TravelIdeaCard
              badge="Gruppo"
              title="Tour con accompagnatore"
              text="Itinerari di più giorni con programma definito, visite guidate, trasferimenti organizzati e la tranquillità di avere una figura di riferimento per tutto il viaggio."
            />
            <TravelIdeaCard
              badge="Esperienze"
              title="Viaggi tematici ed esperienziali"
              text="Percorsi legati al gusto, alla natura, alla cultura o agli eventi: da festival specifici a itinerari enogastronomici, fino a viaggi dedicati a passioni particolari."
            />
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Consulenza viaggi
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi capire se è meglio un viaggio individuale o di gruppo?
          </h2>

          <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto mb-6">
            Possiamo analizzare insieme periodo, destinazione, aspettative e
            budget e consigliarti la formula più adatta a te, senza forzare
            l’una o l’altra strada. Il viaggio deve somigliare a chi lo vive.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg:white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Scrivici e raccontaci cosa immagini
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

export default ViaggiIndividualiGruppo;
