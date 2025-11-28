// src/pages/MeteMareItalia.jsx
import { useEffect, useState, useMemo } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import TravelFilters from "../components/ui/TravelFilters.jsx";

import heroImg from "../assets/destination/hero.webp";
import { MARE_ITALIA_DESTINATIONS } from "../data/mare-italia.js";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const ITEMS_PER_PAGE = 9;

const MeteMareItalia = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriods, setSelectedPeriods] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const periodOptions = useMemo(
    () =>
      Array.from(
        new Set(MARE_ITALIA_DESTINATIONS.map((d) => d.period))
      ).filter(Boolean),
    []
  );

  const filteredDestinations = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    const hasPeriodFilter = selectedPeriods.length > 0;

    return ITALY_SEA_DESTINATIONS.filter((dest) => {
      const matchSearch =
        term === "" ||
        dest.title.toLowerCase().includes(term) ||
        dest.description.toLowerCase().includes(term);

      const matchPeriod = !hasPeriodFilter
        ? true
        : selectedPeriods.includes(dest.period);

      return matchSearch && matchPeriod;
    });
  }, [searchTerm, selectedPeriods]);

  const totalPages =
    Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredDestinations.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedPeriods]);

  return (
    <>
      <InnerHero
        title="Mare Italia"
        subtitle="Coste, isole, borghi di mare e panorami italiani da vivere con i tempi giusti."
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
            Mare Italia, oltre il “classico agosto”
          </h1>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Una selezione di mete di mare in Italia pensate per periodi diversi
            dell’anno: dall’inizio stagione alle settimane più piene
            dell’estate. Puoi filtrare per periodo consigliato o cercare una
            destinazione specifica.
          </p>
        </div>
      </section>

      {/* FILTRI + GRID + PAGINAZIONE */}
      <section className="py-8 md:py-10 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="grid md:grid-cols-[260px,minmax(0,1fr)] gap-6 md:gap-8">
            {/* Sidebar filtri */}
            <TravelFilters
              title="Affina il mare in Italia"
              searchLabel="Cerca una meta di mare"
              searchPlaceholder="Es. Sardegna, Salento, Sicilia…"
              periodLabel="Periodo consigliato"
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              periods={periodOptions}
              selectedPeriods={selectedPeriods}
              onPeriodsChange={setSelectedPeriods}
            />

            {/* Grid risultati */}
            <div className="space-y-6">
              {filteredDestinations.length === 0 ? (
                <p className="text-sm md:text-base text-slate-600 text-center md:text-left">
                  Nessuna meta trovata con questi criteri. Prova a modificare la
                  ricerca o il periodo.
                </p>
              ) : (
                <div className="grid gap-8 md:grid-cols-3">
                  {currentItems.map((dest, idx) => (
                    <ContinentCard
                      key={`${dest.title}-${idx}`}
                      image={heroImg}
                      title={dest.title}
                      badge={dest.badge}
                      period={dest.period}
                      description={dest.description}
                    />
                  ))}
                </div>
              )}

              {/* Paginazione */}
              {filteredDestinations.length > 0 && (
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
            Vuoi costruire il tuo mare su misura?
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

export default MeteMareItalia;



