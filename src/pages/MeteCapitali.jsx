// src/pages/MeteCapitali.jsx
import { useEffect, useState, useMemo } from "react";
import { Search } from "lucide-react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import heroImg from "../assets/destination/hero.webp";
import { CAPITAL_CITIES } from "../data/capitali.js";
import TravelFilters from "../components/ui/TravelFilters.jsx";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const ITEMS_PER_PAGE = 9;

const MeteCapitali = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeriods, setSelectedPeriods] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const periodOptions = useMemo(() => {
    return Array.from(new Set(CAPITAL_CITIES.map((c) => c.period)));
  }, []);

  const filteredCities = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return CAPITAL_CITIES.filter((city) => {
      const matchSearch =
        term === "" ||
        city.title.toLowerCase().includes(term) ||
        city.description.toLowerCase().includes(term);

      const matchPeriod =
        selectedPeriods.length === 0 ||
        selectedPeriods.includes(city.period);

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
      <section className="py-8 md:py-10 bg-white">
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

      {/* FILTRI + GRID */}
      <section className="py-8 md:py-10 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-start gap-6 lg:gap-8">
            {/* COLONNA SINISTRA – FILTRI */}
            <aside className="md:w-64 lg:w-72 flex-shrink-0 mb-2 md:mb-0">
              <TravelFilters
                title="Mete capitali"
                periodLabel="Periodo consigliato"
                periods={periodOptions}
                selectedPeriods={selectedPeriods}
                onPeriodsChange={setSelectedPeriods}
                onResetFilters={() => setSearchTerm("")}
              />
            </aside>

            {/* COLONNA DESTRA – RICERCA + CARDS */}
            <div className="flex-1 space-y-5">
              {/* Barra ricerca */}
              <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-3 md:p-4">
                <label
                  htmlFor="search-capitali"
                  className="block text-xs md:text-sm font-medium text-[#132C50] mb-1"
                >
                  Cerca una capitale
                </label>
                <div className="relative mt-1">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                    <Search className="w-4 h-4 text-slate-400" />
                  </span>
                  <input
                    id="search-capitali"
                    type="text"
                    placeholder="Es. Parigi, Londra, Lisbona…"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm bg-white"
                  />
                </div>
              </div>

              {/* Grid cards */}
              {filteredCities.length === 0 ? (
                <p className="text-sm md:text-base text-slate-600 text-center">
                  Nessuna meta trovata con questi criteri. Prova a modificare la
                  ricerca o i filtri.
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
                <div className="flex items-center justify-center gap-2 mt-4">
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




