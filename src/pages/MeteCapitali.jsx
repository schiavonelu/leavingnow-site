// src/pages/MeteCapitali.jsx
import { useEffect, useState, useMemo } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import TravelFilters from "../components/ui/TravelFilters.jsx";

import heroImg from "../assets/destination/hero.webp";
import { CAPITAL_CITIES } from "../data/capitali.js";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const ITEMS_PER_PAGE = 9;

const MeteCapitali = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriods, setSelectedPeriods] = useState([]); // ← array

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // Periodi unici presenti nei dati (senza "all")
  const periodOptions = useMemo(() => {
    return Array.from(new Set(CAPITAL_CITIES.map((c) => c.period))).filter(
      Boolean
    );
  }, []);

  // Filtraggio (ricerca + periodi multipli)
  const filteredCities = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    const hasPeriodFilter = selectedPeriods.length > 0;

    return CAPITAL_CITIES.filter((city) => {
      const matchSearch =
        term === "" ||
        city.title.toLowerCase().includes(term) ||
        city.description.toLowerCase().includes(term);

      const matchPeriod = !hasPeriodFilter
        ? true
        : selectedPeriods.includes(city.period);

      return matchSearch && matchPeriod;
    });
  }, [searchTerm, selectedPeriods]);

  const totalPages = Math.ceil(filteredCities.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredCities.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // reset pagina quando cambiano filtri
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedPeriods]);

  return (
    <>
      <InnerHero
        title="Mete capitali europee"
        subtitle="Grandi città, quartieri da esplorare, musei, locali e panorami iconici: una selezione di capitali su cui costruire il tuo viaggio."
        image={heroImg}
      />

      <Breadcrumb />

      {/* INTRO */}
      <section className="py-8 md:py-10 bg:white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
            Idee di viaggio by Leaving Now
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-3">
            Capitali europee, senza pacchetti standard
          </h1>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Ogni capitale può essere vissuta in modi diversi: in coppia, tra
            amici, in famiglia o da soli. Puoi scorrere tutte le mete, cercare
            per nome o filtrare in base al periodo consigliato.
          </p>
        </div>
      </section>

      {/* FILTRI + GRID + PAGINAZIONE */}
      <section className="py-8 md:py-10 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="grid md:grid-cols-[260px,minmax(0,1fr)] gap-6 md:gap-8">
            {/* Sidebar filtri */}
            <TravelFilters
              title="Affina le capitali"
              searchLabel="Cerca una capitale"
              searchPlaceholder="Es. Parigi, Londra, Lisbona…"
              periodLabel="Periodo consigliato"
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              periods={periodOptions}
              selectedPeriods={selectedPeriods}
              onPeriodsChange={setSelectedPeriods}
            />

            {/* Grid risultati */}
            <div className="space-y-6">
              {filteredCities.length === 0 ? (
                <p className="text-sm md:text-base text-slate-600 text-center md:text-left">
                  Nessuna meta trovata con questi criteri. Prova a modificare la
                  ricerca o il periodo.
                </p>
              ) : (
                <div className="grid gap-8 md:grid-cols-3">
                  {currentItems.map((city, idx) => (
                    <ContinentCard
                      key={`${city.title}-${idx}`}
                      image={heroImg}
                      title={city.title}
                      badge={city.badge}
                      period={city.period}
                      description={city.description}
                    />
                  ))}
                </div>
              )}

              {/* Paginazione */}
              {filteredCities.length > 0 && (
                <div className="flex items-center justify-center gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() =>
                      currentPage > 1 && handlePageChange(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-slate-300 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#0863D6] hover:text-[#0863D6] transition"
                  >
                    ← Precedente
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1.5 text-xs md:text-sm rounded-full border ${
                          page === currentPage
                            ? "bg-[#0863D6] border-[#0863D6] text-white"
                            : "border-slate-300 text-slate-600 hover:border-[#0863D6] hover:text-[#0863D6]"
                        } transition`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    type="button"
                    onClick={() =>
                      currentPage < totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-slate-300 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#0863D6] hover:text-[#0863D6] transition"
                  >
                    Successiva →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Consulenza personalizzata
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi partire da una capitale o combinarne più di una?
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

export default MeteCapitali;



