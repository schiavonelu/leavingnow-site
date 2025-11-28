// src/pages/MeteStagionali.jsx
import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import heroImg from "../assets/destination/hero.webp";

// ✅ dati esterni
import { SEASONS } from "../data/mete-stagionali";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";

const MeteStagionali = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Mete stagionali"
        subtitle="Ispirazioni di viaggio pensate per il periodo dell’anno, sempre costruite su misura."
        image={heroImg}
      />

      <Breadcrumb />

      {/* INTRO */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
            Idee di viaggio by Leaving Now
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-5">
            Idee, non pacchetti: ogni viaggio nasce da te
          </h1>
        </div>
      </section>

      {/* STAGIONI */}
      {SEASONS.map((season) => (
        <section
          key={season.id}
          id={season.id}
          className={`py-12 md:py-16 ${
            season.id === "primavera" || season.id === "autunno"
              ? "bg-[#F8FAFC]"
              : "bg-white"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-1">
                  {season.name}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-2">
                  Mete per l&apos;{season.name.toLowerCase()}
                </h2>
                <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-[0.16em]">
                  {season.period}
                </p>
              </div>
              <p className="text-sm md:text-base text-slate-700 md:max-w-xl leading-relaxed text-justify">
                {season.intro}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {season.cards.map((card, idx) => (
                <ContinentCard
                  key={`${season.id}-${idx}`}
                  image={heroImg}
                  title={card.title}
                  badge={card.badge}
                  period={card.period}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Consulenza personalizzata
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi partire da una di queste idee o crearne una tutta nuova?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Scrivici per parlarne insieme
            </a>
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              Preferisci una consulenza?
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeteStagionali;



