// src/pages/MeteCapitali.jsx
import { useEffect, useState, useMemo, useRef } from "react";
import { Search } from "lucide-react";

import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import TravelFilters from "../components/ui/TravelFilters.jsx";

import heroImg from "../assets/destination/hero.webp";

import { CAPITAL_CITIES } from "../data/mete-capitali.js";
import { CAPITAL_CITIES_IMAGES } from "../data/mete-capitali-images.js";
import { getSeasonBucketLabel } from "../utils/seasonBuckets.js";

import {
  FaCity,
  FaUmbrellaBeach,
  FaGlobeEurope,
  FaRegCalendarAlt,
} from "react-icons/fa";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const ITEMS_PER_PAGE = 9;
const OFFSET_TOP = 270;

const MeteCapitali = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBuckets, setSelectedBuckets] = useState([]);
  const [filtersCollapsed, setFiltersCollapsed] = useState(false);

  const cardsSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const filteredCities = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return CAPITAL_CITIES.filter((city) => {
      const matchSearch =
        term === "" ||
        city.title.toLowerCase().includes(term) ||
        city.description.toLowerCase().includes(term);

      const bucket = getSeasonBucketLabel(city.period);
      const matchSeason =
        selectedBuckets.length === 0 || selectedBuckets.includes(bucket);

      return matchSearch && matchSeason;
    });
  }, [searchTerm, selectedBuckets]);

  const totalPages = Math.ceil(filteredCities.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredCities.slice(
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
    setCurrentPage(page);
    scrollToCards();
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedBuckets]);

  const getSeasonSummary = () => {
    if (selectedBuckets.length === 0) return "tutte le stagioni";
    if (selectedBuckets.length === 1) return selectedBuckets[0].toLowerCase();
    return `${selectedBuckets.length} stagioni`;
  };

  const hasResults = filteredCities.length > 0;

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
            Capitali e città europee, senza pacchetti standard
          </h1>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Le capitali possono essere vissute in tanti modi: weekend veloci,
            ponti lunghi, combinati con altre città o con il mare. Qui trovi una
            selezione di idee filtrabili per stagione e per testo.
          </p>
        </div>
      </section>

      {/* FILTRI + GRID + PAGINAZIONE */}
      <section className="py-8 md:py-10 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Colonna filtri */}
            <TravelFilters
              title="Capitali europee"
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

            {/* Colonna risultati */}
            <div
              className={`flex-1 space-y-6 transition-[width] duration-300 ${filtersCollapsed ? "lg:pl-2" : ""
                }`}
            >
              {/* Barra di ricerca sticky */}
              <div className="lg:sticky lg:top-30 z-10">
                <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-4 md:p-5">
                  <div className="flex flex-col md:flex-row md:items-end gap-4">
                    <div className="flex-1">
                      <label
                        htmlFor="search-capitals"
                        className="block text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B] mb-2"
                      >
                        Cerca una capitale
                      </label>
                      <div className="relative">
                        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          id="search-capitals"
                          type="text"
                          placeholder="es. Parigi, Londra, Lisbona"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm bg-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Badge pill */}
                    <div className="flex items-center justify-between md:justify-end gap-2 text-xs md:text-sm text-slate-500">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] md:text-xs font-semibold ${badgeColorClasses}`}
                      >
                        {filteredCities.length}{" "}
                        {filteredCities.length === 1 ? "meta" : "mete"}
                      </span>

                      <span className="text-[11px] md:text-xs">
                        in {getSeasonSummary()}.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GRID + PAGINAZIONE */}
              <div ref={cardsSectionRef}>
                {filteredCities.length === 0 ? (
                  <p className="text-sm md:text-base text-slate-600 text-center py-6">
                    Nessuna meta in questa combinazione. Prova a modificare la
                    ricerca o i filtri stagionali.
                  </p>
                ) : (
                  <div className="grid gap-8 md:grid-cols-3">
                    {currentItems.map((city, idx) => {
                      const cardImage =
                        (city.id && CAPITAL_CITIES_IMAGES?.[city.id]) ||
                        heroImg;

                      return (
                        <ContinentCard
                          key={`${city.title}-${idx}`}
                          image={cardImage}
                          title={city.title}
                          badge={city.badge}
                          period={city.period}
                          description={city.description}
                        />
                      );
                    })}
                  </div>
                )}

                {/* PAGINAZIONE */}
                {filteredCities.length > 0 && totalPages > 1 && (
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

                    {Array.from(
                      { length: totalPages },
                      (_, i) => i + 1
                    ).map((page) => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-1.5 text-xs md:text-sm rounded-full border transition ${page === currentPage
                          ? "bg-[#0863D6] border-[#0863D6] text-white"
                          : "border-slate-300 text-slate-600 hover:border-[#0863D6] hover:text-[#0863D6]"
                          }`}
                      >
                        {page}
                      </button>
                    ))}

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
      {/* 🔹 BANNER UNICO: ISPIRAZIONE + ALTRE METE + CONTATTI (Capitali) */}
      <section className="py-10 md:py-14 bg-gradient-to-r from-[#0B1F3B] via-[#132C50] to-[#0B1F3B]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-sky-300">
            Ti ispiriamo, poi lo costruiamo insieme
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ti ispira una capitale europea per il tuo prossimo viaggio?
          </h2>

          <p className="text-sm md:text-base text-slate-200 leading-relaxed">
            Possiamo costruire un weekend lungo, un combinato tra più città o una
            vacanza che unisce capitali e mare. Guarda anche le altre sezioni per
            lasciarti ispirare.
          </p>

          <div className="mt-4 space-y-6">

            {/* BLOCCO 1 – LASCIATI ISPIRARE */}
            <div className="space-y-3">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-slate-300">
                Lasciati ispirare ancora
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                <a
                  href="/mete-stagionali"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base
              font-semibold border border-sky-400 bg-sky-500 text-white hover:bg-white hover:text-[#0863D6]
              hover:border-[#0863D6] transition"
                >
                  <FaRegCalendarAlt className="text-lg" />
                  <span>Mete stagionali</span>
                </a>

                <a
                  href="/mete-mare-italia"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base
              font-semibold border border-fuchsia-400 text-fuchsia-100 hover:border-[#EB2480]
              hover:text-[#EB2480] hover:bg-white/5 transition"
                >
                  <FaUmbrellaBeach className="text-lg" />
                  <span>Mare Italia</span>
                </a>

                <a
                  href="/mete-mare-estero"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base
              font-semibold border border-emerald-400 text-emerald-100 hover:border-emerald-500
              hover:text-emerald-500 hover:bg-white/5 transition"
                >
                  <FaGlobeEurope className="text-lg" />
                  <span>Mare estero</span>
                </a>

              </div>
            </div>

            {/* DIVISORE */}
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-slate-400">
              oppure
            </p>

            {/* BLOCCO 2 – CONTATTI */}
            <div className="space-y-3">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-slate-300">
                Hai già in mente la tua capitale?
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                <a
                  href="/contatti"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base
              font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white
              hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
                >
                  <FaRegCalendarAlt className="text-lg" />
                  <span>Scrivici per parlarne</span>
                </a>

                <a
                  href={RESERVIO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base
              font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480]
              hover:text-[#EB2480] transition"
                >
                  <FaRegCalendarAlt className="text-lg" />
                  <span>Prenota una consulenza</span>
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
};

export default MeteCapitali;











