// src/pages/MeteViaggiNozze.jsx
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import TravelFilters from "../components/ui/TravelFilters.jsx";
import heroImg from "../assets/destination/hero.webp";
import { HONEYMOON_DESTINATIONS } from "../data/viaggi-nozze.js";
import { getSeasonBucketLabel } from "../utils/seasonBuckets.js";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const ITEMS_PER_PAGE = 9;

const MeteViaggiNozze = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBuckets, setSelectedBuckets] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const filteredTrips = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return HONEYMOON_DESTINATIONS.filter((trip) => {
      const matchSearch =
        term === "" ||
        trip.title.toLowerCase().includes(term) ||
        trip.description.toLowerCase().includes(term);

      const bucket = getSeasonBucketLabel(trip.period);
      const matchSeason =
        selectedBuckets.length === 0 || selectedBuckets.includes(bucket);

      return matchSearch && matchSeason;
    });
  }, [searchTerm, selectedBuckets]);

  const totalPages = Math.ceil(filteredTrips.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredTrips.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedBuckets]);

  return (
    <>
      <InnerHero
        title="Mete per viaggi di nozze"
        subtitle="Mare lontano, grandi itinerari o combinati su misura: idee per trasformare il vostro viaggio di nozze in qualcosa che vi somigli davvero."
        image={heroImg}
      />

      <Breadcrumb />

      {/* INTRO + LINK RITORNO FORM */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6]">
            Idee di viaggio by Leaving Now
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480]">
            Viaggi di nozze, idee da cui partire
          </h1>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Qui trovi una selezione di mete pensate per il viaggio di nozze:
            puoi scorrerle tutte, cercare per nome o filtrare in base alla
            stagione consigliata. Da qui possiamo poi costruire il vostro
            itinerario su misura.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/viaggi-di-nozze#preventivo-nozze"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold bg-[#0863D6] text-white border border-[#0863D6] hover:bg.white hover:text-[#0863D6] transition"
            >
              Torna al form viaggio di nozze
            </Link>
          </div>
        </div>
      </section>

      {/* FILTRI + GRID */}
      <section className="py-8 md:py-10 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filtri a sinistra */}
            <TravelFilters
              title="Mete per viaggi di nozze"
              selectedBuckets={selectedBuckets}
              onBucketsChange={setSelectedBuckets}
              onResetFilters={() => {
                setSearchTerm("");
              }}
            />

            {/* Risultati a destra */}
            <div className="flex-1 space-y-6">
              {/* Barra di ricerca */}
              <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-end gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="search-honeymoon"
                      className="block text-xs md:text-sm font-medium text-[#132C50] mb-1"
                    >
                      Cerca una meta di viaggio di nozze
                    </label>
                    <input
                      id="search-honeymoon"
                      type="text"
                      placeholder="Es. Maldive, Stati Uniti, Giappone…"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm bg-white"
                    />
                  </div>

                  <div className="text-xs md:text-sm text-slate-500 md:text-right">
                    <p className="font-medium text-[#0F172A]">
                      {filteredTrips.length}{" "}
                      {filteredTrips.length === 1 ? "meta trovata" : "mete trovate"}
                    </p>
                    <p>
                      Filtrate per{" "}
                      {selectedBuckets.length === 0
                        ? "tutte le stagioni"
                        : selectedBuckets.join(", ")}
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* GRID */}
              {filteredTrips.length === 0 ? (
                <p className="text-sm md:text-base text-slate-600 text-center py-6">
                  Nessuna meta trovata con questi criteri. Prova a modificare la
                  ricerca o i filtri stagionali.
                </p>
              ) : (
                <div className="grid gap-8 md:grid-cols-3">
                  {currentItems.map((trip, idx) => (
                    <ContinentCard
                      key={`${trip.title}-${idx}`}
                      image={heroImg}
                      title={trip.title}
                      badge={trip.badge}
                      period={trip.period}
                      description={trip.description}
                    />
                  ))}
                </div>
              )}

              {/* PAGINAZIONE */}
              {filteredTrips.length > 0 && totalPages > 1 && (
                <div className="flex items-center justify.center gap-2 mt-4">
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
            Avete trovato l’idea giusta o volete combinarne più di una?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/viaggi-di-nozze#preventivo-nozze"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg.white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Vai al form viaggio di nozze
            </Link>
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto justify.center items.center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              Preferite una consulenza dedicata?
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeteViaggiNozze;




