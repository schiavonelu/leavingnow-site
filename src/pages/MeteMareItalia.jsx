// src/pages/MeteMareItalia.jsx
import { useEffect, useState, useMemo, useRef } from "react";
import { Search } from "lucide-react";

import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import SeaFiltersItaly from "../components/ui/SeaFiltersItaly.jsx";

import heroImg from "../assets/destination/hero.webp";

import { MARE_ITALIA_DESTINATIONS } from "../data/mare-italia.js";
import { MARE_ITALIA_IMAGES } from "../data/mare-italia-images.js";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const ITEMS_PER_PAGE = 9;
const OFFSET_TOP = 270;

// mapping semplificato: adatta ai tuoi dati
const getItalyZoneTag = (trip) => {
  const text = `${trip.area || ""} ${trip.title || ""} ${trip.region || ""}`
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

  if (
    text.includes("liguria") ||
    text.includes("friuli") ||
    text.includes("veneto") ||
    text.includes("emilia") ||
    text.includes("romagna") ||
    text.includes("lago") ||
    text.includes("garda") ||
    text.includes("como") ||
    text.includes("maggiore")
  ) {
    return "NORD";
  }

  if (
    text.includes("toscana") ||
    text.includes("lazio") ||
    text.includes("marche") ||
    text.includes("abruzzo") ||
    text.includes("umbria")
  ) {
    return "CENTRO";
  }

  if (
    text.includes("campania") ||
    text.includes("puglia") ||
    text.includes("basilicata") ||
    text.includes("calabria")
  ) {
    return "SUD";
  }

  if (
    text.includes("sardegna") ||
    text.includes("sicilia") ||
    text.includes("isola") ||
    text.includes("egadi") ||
    text.includes("eolie")
  ) {
    return "ISOLE";
  }

  return "UNKNOWN";
};

const MeteMareItalia = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedZones, setSelectedZones] = useState([]);
  const [filtersCollapsed, setFiltersCollapsed] = useState(false);

  const cardsSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const filteredTrips = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return (MARE_ITALIA_DESTINATIONS || []).filter((trip) => {
      const title = trip.title || "";
      const description = trip.description || "";
      const area = trip.area || "";
      const region = trip.region || "";

      const matchSearch =
        term === "" ||
        title.toLowerCase().includes(term) ||
        description.toLowerCase().includes(term) ||
        area.toLowerCase().includes(term) ||
        region.toLowerCase().includes(term);

      const zone = getItalyZoneTag(trip);
      const matchZone =
        selectedZones.length === 0 ||
        zone === "UNKNOWN" ||
        selectedZones.includes(zone);

      return matchSearch && matchZone;
    });
  }, [searchTerm, selectedZones]);

  const totalPages = Math.ceil(filteredTrips.length / ITEMS_PER_PAGE) || 1;
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
    setCurrentPage(page);
    scrollToCards();
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedZones]);

  const hasResults = filteredTrips.length > 0;

  const getZoneSummary = () => {
    if (selectedZones.length === 0) return "tutta Italia";
    if (selectedZones.length === 1) {
      switch (selectedZones[0]) {
        case "NORD":
          return "Nord Italia";
        case "CENTRO":
          return "Centro Italia";
        case "SUD":
          return "Sud Italia";
        case "ISOLE":
          return "Isole";
        default:
          return "tutta Italia";
      }
    }
    return `${selectedZones.length} zone`;
  };

  const getBadgeColorClasses = () => {
    if (!hasResults) return "border-rose-200 bg-rose-50 text-rose-700";
    if (selectedZones.length === 0)
      return "border-sky-200 bg-sky-50 text-sky-700";
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  };

  const badgeColorClasses = getBadgeColorClasses();

  return (
    <>
      <InnerHero
        title="Mare Italia"
        subtitle="Coste, isole e borghi sul mare pensati su misura per te, senza pacchetti standard."
        image={heroImg}
      />

      <Breadcrumb />

      {/* INTRO */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6]">
            Idee di viaggio by Leaving Now
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480]">
            Mare Italia, oltre le solite mete
          </h1>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Una selezione di idee tra isole, coste e borghi di mare in Italia.
            Puoi scorrere tutte le proposte, cercare per zona o filtrare per
            macro-area (Nord, Centro, Sud, Isole).
          </p>
        </div>
      </section>

      {/* FILTRI + GRID */}
      <section className="py-8 md:py-10 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filtri per zona */}
            <SeaFiltersItaly
              title="Mare Italia"
              selectedFilters={selectedZones}
              onFiltersChange={setSelectedZones}
              onResetFilters={() => {
                setSearchTerm("");
                setSelectedZones([]);
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
                        htmlFor="search-mare"
                        className="block text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B] mb-2"
                      >
                        Cerca una località o una zona di mare
                      </label>
                      <div className="relative">
                        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          id="search-mare"
                          type="text"
                          placeholder="Cerca una località… es. Sardegna, Salento, Costiera Amalfitana"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm bg-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Badge mete + zone */}
                    <div className="flex items-center justify-between md:justify-end gap-2 text-xs md:text-sm text-slate-500">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] md:text-xs font-semibold ${badgeColorClasses}`}
                      >
                        {filteredTrips.length}{" "}
                        {filteredTrips.length === 1 ? "meta" : "mete"}
                      </span>
                      <span className="text-[11px] md:text-xs">
                        in {getZoneSummary()}.
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
                    la ricerca o le macro-zone selezionate.
                  </p>
                ) : (
                  <div className="grid gap-8 md:grid-cols-3">
                    {currentItems.map((trip, idx) => {
                      const cardImage =
                        (trip.id && MARE_ITALIA_IMAGES?.[trip.id]) ||
                        heroImg;

                      return (
                        <ContinentCard
                          key={`${trip.id}-${idx}`}
                          image={cardImage}
                          title={trip.title}
                          badge={trip.badge}
                          period={trip.period}
                          description={trip.description}
                          region={trip.region}
                        />
                      );
                    })}
                  </div>
                )}

                {/* PAGINAZIONE */}
                {filteredTrips.length > 0 && totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-4">
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
                        className={`px-3 py-1.5 text-xs md:text-sm rounded-full border transition ${
                          page === currentPage
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

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Consulenza personalizzata
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi partire da una di queste idee o creare il tuo mare Italia su misura?
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












