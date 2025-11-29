// src/pages/MeteViaggiNozze.jsx
import { useEffect, useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import TravelFilters from "../components/ui/TravelFilters.jsx";

import { HONEYMOON_DESTINATIONS } from "../data/viaggi-nozze.js";
import { HONEYMOON_IMAGES } from "../data/viaggi-nozze-images.js";

import { getSeasonBucketLabel } from "../utils/seasonBuckets.js";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const ITEMS_PER_PAGE = 9;
const OFFSET_TOP = 270;
const HERO_SLUG = "dubai-maldive";

const MeteViaggiNozze = () => {
  // Hero: locandina Dubai–Maldive (se manca, niente immagine)
  const heroImg = HONEYMOON_IMAGES[HERO_SLUG] ?? null;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBuckets, setSelectedBuckets] = useState([]);
  const [filtersCollapsed, setFiltersCollapsed] = useState(false);

  const cardsSectionRef = useRef(null);

  // Scroll in alto al primo caricamento
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // -----------------------
  // FILTRI (ricerca + stagione)
  // -----------------------
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

  // -----------------------
  // PAGINAZIONE
  // -----------------------
  const totalPages = Math.max(
    1,
    Math.ceil(filteredTrips.length / ITEMS_PER_PAGE)
  );
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentItems = filteredTrips.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const scrollToCards = () => {
    if (!cardsSectionRef.current) return;

    const rect = cardsSectionRef.current.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - OFFSET_TOP;

    window.scrollTo({
      top: targetY >= 0 ? targetY : 0,
      behavior: "smooth",
    });
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    scrollToCards();
  };

  // Quando cambiano filtri/ricerca, torna alla pagina 1
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedBuckets]);

  // -----------------------
  // UI helper
  // -----------------------
  const getSeasonSummary = () => {
    if (selectedBuckets.length === 0) return "tutte le stagioni";
    if (selectedBuckets.length === 1) return selectedBuckets[0].toLowerCase();
    return `${selectedBuckets.length} stagioni`;
  };

  const hasResults = filteredTrips.length > 0;

  const getBadgeColorClasses = () => {
    if (!hasResults) {
      return "border-rose-200 bg-rose-50 text-rose-700";
    }
    if (selectedBuckets.length === 0) {
      return "border-sky-200 bg-sky-50 text-sky-700";
    }
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  };

  const badgeColorClasses = getBadgeColorClasses();

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
            mare tropicale, safari, grandi città, itinerari combinati. Puoi
            cercare per nome o filtrare in base alla stagione consigliata.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/viaggi-di-nozze#preventivo-nozze"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold bg-[#0863D6] text-white border border-[#0863D6] hover:bg-white hover:text-[#0863D6] transition"
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
                setSelectedBuckets([]);
              }}
              isCollapsed={filtersCollapsed}
              onToggleCollapsed={() =>
                setFiltersCollapsed((prev) => !prev)
              }
            />

            {/* Risultati a destra */}
            <div
              className={`flex-1 space-y-6 transition-[width] duration-300 ${
                filtersCollapsed ? "lg:pl-2" : ""
              }`}
            >
              {/* Barra di ricerca sticky */}
              <div className="lg:sticky lg:top-30 z-10">
                <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-4 md:p-5">
                  <div className="flex flex-col md:flex-row md:items-end gap-4">
                    <div className="flex-1">
                      <label
                        htmlFor="search-honeymoon"
                        className="block text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B] mb-2"
                      >
                        Cerca una meta di viaggio di nozze
                      </label>
                      <div className="relative">
                        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          id="search-honeymoon"
                          type="text"
                          placeholder="es. Maldive, Stati Uniti, Giappone"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm bg-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Badge pill numero mete + stagione */}
                    <div className="flex items-center justify-between md:justify-end gap-2 text-xs md:text-sm text-slate-500">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] md:text-xs font-semibold ${badgeColorClasses}`}
                      >
                        {filteredTrips.length}{" "}
                        {filteredTrips.length === 1 ? "meta" : "mete"}
                      </span>

                      <span className="text-[11px] md:text-xs">
                        in {getSeasonSummary()}.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GRID */}
              <div ref={cardsSectionRef}>
                {filteredTrips.length === 0 ? (
                  <p className="text-sm md:text-base text-slate-600 text-center py-6">
                    Nessuna meta trovata con questi criteri. Prova a modificare
                    la ricerca o i filtri stagionali.
                  </p>
                ) : (
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {currentItems.map((trip) => {
                      // Se esiste una locandina dedicata per questo slug → usala
                      const poster =
                        trip.slug && HONEYMOON_IMAGES[trip.slug]
                          ? HONEYMOON_IMAGES[trip.slug]
                          : null;

                      // Altrimenti prova ad usare un'immagine generica della trip (se l’hai prevista nei dati)
                      // Come fallback estremo puoi rimettere heroImg, ma qui lo evitiamo per non avere
                      // la stessa immagine ovunque.
                      const cardImage = poster || trip.image || heroImg || null;

                      return (
                        <ContinentCard
                          key={trip.slug}
                          image={cardImage}
                          title={trip.title}
                          badge={trip.badge}
                          period={trip.period}
                          description={trip.description}
                        />
                      );
                    })}
                  </div>
                )}

                {/* PAGINAZIONE */}
                {filteredTrips.length > 0 && totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <button
                      type="button"
                      onClick={() =>
                        currentPage > 1 &&
                        handlePageChange(currentPage - 1)
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
                          className={`px-3 py-1.5 text-xs md:text-sm rounded-full border transition ${
                            page === currentPage
                              ? "bg-[#0863D6] border-[#0863D6] text-white"
                              : "border-slate-300 text-slate-600 hover:border-[#0863D6] hover:text-[#0863D6]"
                          }`}
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
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg:white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Vai al form viaggio di nozze
            </Link>
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
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













