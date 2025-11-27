// src/pages/ViaggiFamily.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Baby,
  Sun,
  MapPinned,
  Plane,
  CalendarRange,
  Sparkles,
} from "lucide-react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

import heroImg from "../assets/triptypes/family.webp";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";

// Card “focus” family
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

const ViaggiFamily = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Family"
        subtitle="Viaggi pensati per grandi e piccoli, con ritmi e servizi adatti alla tua famiglia."
        image={heroImg}
      />

      <Breadcrumb />

      {/* INTRO */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
            Viaggi in famiglia
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-6">
            Vacanze serene per genitori, divertenti per i bambini
          </h1>

          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            <p>
              Viaggiare con i bambini richiede un&apos;attenzione diversa: orari,
              tappe, strutture e servizi devono adattarsi ai loro ritmi, senza
              rinunciare al comfort e al piacere del viaggio anche per gli adulti.
            </p>
            <p>
              In Leaving Now progettiamo viaggi family in Italia, Europa e nel
              mondo scegliendo destinazioni, hotel, appartamenti, villaggi e
              attività adatte all&apos;età dei bambini, al numero di persone e al
              tipo di esperienza che avete in mente.
            </p>
          </div>
        </div>
      </section>

      {/* FOCUS FAMILY */}
      <section className="py-12 md:py-16 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Cosa consideriamo nei viaggi family
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-3">
              Ritmi, spazi e servizi a misura di famiglia
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Ogni famiglia è diversa: numero di bambini, età, abitudini,
              esigenze pratiche. Partiamo da lì per costruire il viaggio giusto
              per voi.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FocusCard
              icon={<Users className="w-5 h-5" />}
              title="Età dei bambini e composizione"
              text="Proponiamo destinazioni e soluzioni adatte all'età dei bambini, valutando tempi di volo, spostamenti, servizi in struttura e attività gestibili per tutti."
            />
            <FocusCard
              icon={<Baby className="w-5 h-5" />}
              title="Strutture family-friendly"
              text="Hotel, appartamenti, villaggi e resort con camere familiari, spazi comuni vivibili, aree gioco, menù dedicati, baby club o servizi utili per i genitori."
            />
            <FocusCard
              icon={<Sun className="w-5 h-5" />}
              title="Ritmi morbidi e tappe intelligenti"
              text="Programmi con giornate equilibrate, spostamenti ragionati e attività non troppo dense. Più qualità, meno corse, più tempo per stare bene insieme."
            />
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Come ti accompagniamo
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-3">
              Dal primo racconto al rientro a casa
            </h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Pochi passaggi chiari, con una consulenza reale sui bisogni della
              tua famiglia prima di strutturare il viaggio.
            </p>
          </div>

          <div className="space-y-5 md:space-y-6">
            {[
              {
                step: "1",
                title: "Ci racconti la tua famiglia",
                text: "Numero di persone, età dei bambini, periodo, abitudini e cosa vi fa stare bene in vacanza. Più dettagli condividiamo, più il viaggio sarà centrato.",
              },
              {
                step: "2",
                title: "Selezione di mete e strutture adatte",
                text: "Proponiamo destinazioni, soluzioni di soggiorno e modalità di viaggio adatte alla vostra situazione, con pro e contro spiegati in modo trasparente.",
              },
              {
                step: "3",
                title: "Programma e assistenza",
                text: "Definiamo insieme il programma finale, ci occupiamo delle prenotazioni e restiamo a disposizione prima e durante il viaggio per eventuali dubbi o aggiustamenti.",
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

      {/* IDEE DI VIAGGIO FAMILY */}
      <section className="py-12 md:py-16 bg-[#0F172A]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#EB2480] mb-2">
              Idee e ispirazioni
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Alcuni modi di pensare un viaggio in famiglia
            </h2>
            <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
              Sono solo esempi: ogni proposta può essere adattata in base a età
              dei bambini, periodo, budget e stile della vostra famiglia.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <TravelIdeaCard
              badge="Mare & relax"
              title="Villaggi e resort family"
              text="Strutture con servizi per bambini, spazi ampi, animazione dedicata e ritmi morbidi. Ideali per chi vuole staccare senza pensieri e avere tutto a portata di mano."
            />
            <TravelIdeaCard
              badge="On the road soft"
              title="Itinerari in auto o treno"
              text="Tour pensati con tappe brevi, pernottamenti comodi e attività sostenibili per i più piccoli: città, natura, parchi divertimento e soste studiate ad hoc."
            />
            <TravelIdeaCard
              badge="Esperienze"
              title="Natura, parchi e scoperte"
              text="Montagna, laghi, parchi tematici, fattorie didattiche, parchi naturali: viaggi che uniscono gioco, movimento e piccoli momenti di scoperta per tutta la famiglia."
            />
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Consulenza viaggi in famiglia
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi progettare il prossimo viaggio con i bambini?
          </h2>

          <p className="text-sm md:text-base text-slate-200 max-w-2xl mx-auto mb-6">
            Possiamo partire da un&apos;idea di massima o da una meta che avete
            già in mente e trasformarla in un programma concreto, adatto ai
            vostri ritmi e alle vostre esigenze pratiche.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Scrivici e raccontaci la tua famiglia
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

export default ViaggiFamily;
