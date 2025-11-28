// src/pages/MareItalia.jsx
import { useEffect, useState, useMemo } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import heroImg from "../assets/destination/hero.webp";
import { MARE_ITALIA_DESTINATIONS } from "../data/mare-italia";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";

// Filtri periodo per l’utente
const PERIOD_FILTERS = [
  { id: "all", label: "Tutti i periodi" },
  { id: "primavera", label: "Primavera (Mag–Giu)" },
  { id: "estate", label: "Estate (Giu–Ago)" },
  { id: "fine-estate", label: "Fine estate / inizio autunno" },
];

const PAGE_SIZE = 9;

const MareItalia = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [periodFilter, setPeriodFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // Reset pagina quando cambiano filtri/ricerca
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, periodFilter]);

  const filteredDestinations = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return MARE_ITALIA_DESTINATIONS.filter((dest) => {
      const matchesPeriod =
        periodFilter === "all" ||
        dest.recommendedPeriods?.includes(periodFilter);

      const matchesSearch =
        !term ||
        dest.title.toLowerCase().includes(term) ||
        dest.area.toLowerCase().includes(term) ||
        dest.badge.toLowerCase().includes(term) ||
        dest.description.toLowerCase().includes(term);

      return matchesPeriod && matchesSearch;
    });
  }, [searchTerm, periodFilter]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredDestinations.length / PAGE_SIZE)
  );
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const paginatedDestinations = filteredDestinations.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const activePeriodLabel =
    PERIOD_FILTERS.find((p) => p.id === periodFilter)?.label ??
    "Tutti i periodi";

  return (
    <>
      <InnerHero
        title="Mare Italia"
        subtitle="Spiagge, isole e coste italiane pensate su misura per il tuo modo di viaggiare."
        image={heroImg}
      />

      <Breadcrumb />

      {/* INTRO + FILTRI */}
      <section className="py-10 md:py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Mare Italia by Leaving Now
            </p>
            <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-3">
              Dal Salento alla Sardegna, passando per isole e coste da scoprire
            </h1>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              Qui trovi una selezione di idee per il mare in Italia. Puoi
              esplorare tutte le proposte oppure filtrare in base al periodo
              dell’anno e cercare zone specifiche.
            </p>
          </div>

          {/* Barra ricerca + filtri periodo */}
          <div className="rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm p-4 md:p-5 flex flex-col gap-4">
            {/* Ricerca */}
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <label className="text-xs md:text-sm font-medium text-[#132C50]">
                Cerca tra le mete mare Italia
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Es. Sardegna, Salento, Sicilia, Cilento…"
                className="w-full md:flex-1 px-4 py-2.5 rounded-full border border-[#CBD5E1] text-sm focus:outline-none focus:ring-2 focus:ring-[#0863D6]"
              />
            </div>

            {/* Filtri periodo */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <p className="text-xs md:text-sm text-slate-600">
                Filtra per <span className="font-semibold">periodo consigliato</span>:
              </p>
              <div className="flex flex-wrap gap-2">
                {PERIOD_FILTERS.map((filter) => {
                  const isActive = periodFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setPeriodFilter(filter.id)}
                      className={`px-3 py-1.5 rounded-full text-[11px] md:text-xs font-semibold border transition ${
                        isActive
                          ? "bg-[#0369A1] text-white border-[#0369A1]"
                          : "bg-white text-slate-700 border-slate-300 hover:border-[#0369A1] hover:text-[#0369A1]"
                      }`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Info risultato */}
            <p className="text-[11px] md:text-xs text-slate-500">
              Stai visualizzando{" "}
              <span className="font-semibold">{filteredDestinations.length}</span>{" "}
              mete mare Italia – filtro attivo:{" "}
              <span className="font-semibold">{activePeriodLabel}</span>.
            </p>
          </div>
        </div>
      </section>

      {/* LISTA CARD */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          {filteredDestinations.length === 0 ? (
            <p className="text-sm md:text-base text-slate-600 text-center">
              Nessuna meta trovata con questi criteri. Prova a modificare la
              ricerca o il periodo consigliato.
            </p>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-3">
                {paginatedDestinations.map((dest) => (
                  <ContinentCard
                    key={dest.id}
                    image={heroImg} // in futuro potrai sostituire con immagini specifiche per area
                    title={dest.title}
                    badge={dest.badge}
                    period={dest.period}
                    description={dest.description}
                  />
                ))}
              </div>

              {/* PAGINAZIONE */}
              {totalPages > 1 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#E2E8F0]">
                  <p className="text-xs md:text-sm text-slate-600">
                    Pagina{" "}
                    <span className="font-semibold">{currentPage}</span> di{" "}
                    <span className="font-semibold">{totalPages}</span>
                  </p>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPage((p) => Math.max(1, p - 1))
                      }
                      disabled={currentPage === 1}
                      className="px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold border border-slate-300 text-slate-700 disabled:opacity-40 hover:border-[#0369A1] hover:text-[#0369A1] transition"
                    >
                      Precedente
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setCurrentPage((p) =>
                          Math.min(totalPages, p + 1)
                        )
                      }
                      disabled={currentPage === totalPages}
                      className="px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold border border-slate-300 text-slate-700 disabled:opacity-40 hover:border-[#0369A1] hover:text-[#0369A1] transition"
                    >
                      Successiva
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Consulenza personalizzata
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi partire da una di queste idee o crearne una tutta nuova?
          </h2>

          <p className="text-sm md:text-base text-slate-200 mb-5 max-w-2xl mx-auto">
            Possiamo partire da queste mete mare Italia e adattarle a periodo,
            budget e stile di viaggio. Oppure costruire qualcosa di completamente
            diverso partendo da zero.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg:white hover:text-[#0863D6] hover:border-[#0863D6] transition"
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

export default MareItalia;
