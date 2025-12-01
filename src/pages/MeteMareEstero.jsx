// src/pages/MeteMareEstero.jsx

import { useEffect, useState, useMemo, useRef } from "react";
import { Search } from "lucide-react";

import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import SeaFiltersEstero from "../components/ui/SeaFiltersEstero.jsx";
import Pagination from "../components/ui/Pagination.jsx";

import heroImg from "../assets/mete-mare-estero/hero.webp";

import { MARE_ESTERO_DESTINATIONS } from "../data/mare-estero.js";
import { MARE_ESTERO_IMAGES } from "../data/mare-estero-images.js";

import { FaRegCalendarAlt, FaCity } from "react-icons/fa";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const ITEMS_PER_PAGE = 9;
const OFFSET_TOP = 270;

// 🔹 Estrae solo la nazione base (es. "Spagna" da "Spagna - Costa Brava")
const getTripNation = (trip) => {
  const raw = trip?.country || trip?.area || trip?.region || "";
  if (!raw) return "";
  const [base] = raw.split(/[-–]/); // separa su "-" o "–"
  return base.trim();
};

// 🔹 Genera uno slug coerente
const toSlug = (str) =>
  (str || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");


const MeteMareEstero = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNations, setSelectedNations] = useState([]);
  const [filtersCollapsed, setFiltersCollapsed] = useState(false);

  const cardsSectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // Opzioni filtro (nazioni uniche)
  const nationOptions = useMemo(() => {
    const set = new Set();
    (MARE_ESTERO_DESTINATIONS || []).forEach((trip) => {
      const n = getTripNation(trip);
      if (n) set.add(n);
    });
    return Array.from(set);
  }, []);

  // Filtraggio per ricerca + nazione
  const filteredTrips = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return (MARE_ESTERO_DESTINATIONS || []).filter((trip) => {
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

      const nationKey = getTripNation(trip);
      const matchNation =
        selectedNations.length === 0 ||
        (nationKey &&
          selectedNations.some(
            (n) => n.toLowerCase() === nationKey.toLowerCase()
          ));

      return matchSearch && matchNation;
    });
  }, [searchTerm, selectedNations]);


  // PAGINAZIONE
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
    if (page === currentPage) return;
    setCurrentPage(page);
    scrollToCards();
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedNations]);

  const hasResults = filteredTrips.length > 0;


  // Badge riassuntivo
  const getNationSummary = () => {
    if (selectedNations.length === 0) return "tutte le nazioni";
    if (selectedNations.length === 1) return selectedNations[0];
    return `${selectedNations.length} nazioni`;
  };

  const getBadgeColorClasses = () => {
    if (!hasResults) return "border-rose-200 bg-rose-50 text-rose-700";
    if (selectedNations.length === 0)
      return "border-sky-200 bg-sky-50 text-sky-700";
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  };

  const badgeColorClasses = getBadgeColorClasses();


  return (
    <>
      <InnerHero
        title="Mare estero"
        subtitle="Canarie, Grecia, Spagna, Mar Rosso e altre idee di mare fuori dall’Italia, sempre costruite su misura."
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
            Mare estero, tra isole e grandi coste
          </h1>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Dal mare d’inverno alle isole mediterranee estive, passando per
            oceano e grandi coste europee. Puoi cercare per zona o filtrare in
            base alla nazione o macro-area (Grecia, Canarie, Spagna, Mar Rosso…).
          </p>
        </div>
      </section>

      {/* FILTRI + GRID */}
      <section className="py-8 md:py-10 bg-[#F8FAFC]" id="mare-inverno">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            
            {/* 🔹 Filtri mare estero */}
            <SeaFiltersEstero
              title="Mare estero"
              options={nationOptions}
              selectedFilters={selectedNations}
              onFiltersChange={setSelectedNations}
              onResetFilters={() => {
                setSearchTerm("");
                setSelectedNations([]);
              }}
              isCollapsed={filtersCollapsed}
              onToggleCollapsed={() =>
                setFiltersCollapsed((prev) => !prev)
              }
            />

            {/* 🔹 Risultati */}
            <div
              className={`flex-1 space-y-6 transition-[width] duration-300 ${
                filtersCollapsed ? "lg:pl-2" : ""
              }`}
            >

              {/* Barra di ricerca */}
              <div className="lg:sticky lg:top-30 z-10">
                <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm p-4 md:p-5">
                  <div className="flex flex-col md:flex-row md:items-end gap-4">
                    
                    <div className="flex-1">
                      <label
                        htmlFor="search-mare-estero"
                        className="block text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B] mb-2"
                      >
                        Cerca una meta o una zona di mare estero
                      </label>
                      <div className="relative">
                        <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          id="search-mare-estero"
                          type="text"
                          placeholder="Cerca una meta..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm bg-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="flex items-center justify-between md:justify-end gap-2 text-xs md:text-sm text-slate-500">
                      <span
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] md:text-xs font-semibold ${badgeColorClasses}`}
                      >
                        {filteredTrips.length}{" "}
                        {filteredTrips.length === 1 ? "meta" : "mete"}
                      </span>
                      <span className="text-[11px] md:text-xs">
                        in {getNationSummary()}.
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
                    la ricerca o le nazioni selezionate.
                  </p>
                ) : (
                  <div className="grid gap-8 md:grid-cols-3">
                    {currentItems.map((trip, idx) => {
                      const imgKey = toSlug(trip.id || trip.title || "");
                      const cardImage =
                        MARE_ESTERO_IMAGES[imgKey] || heroImg;

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
                {filteredTrips.length > 0 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER ISPIRAZIONE */}
      <section className="py-10 md:py-14 bg-gradient-to-r from-[#0B1F3B] via-[#132C50] to-[#0B1F3B]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-sky-300">
            Ti ispiriamo, poi lo costruiamo insieme
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Hai trovato qualche idea di mare estero che ti ispira?
          </h2>

          <p className="text-sm md:text-base text-slate-200 leading-relaxed">
            Puoi continuare a prendere spunti tra mete stagionali e capitali
            europee, oppure parlarne direttamente con noi per costruire un
            viaggio su misura.
          </p>

          <div className="mt-4 space-y-6">

            <div className="space-y-3">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-slate-300">
                Lasciati ispirare ancora
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/mete-stagionali"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-sky-400 bg-sky-500 text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
                >
                  <FaRegCalendarAlt className="text-lg" />
                  <span>Mete stagionali</span>
                </a>

                <a
                  href="/mete-capitali"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-fuchsia-400 text-fuchsia-100 hover:border-[#EB2480] hover:text-[#EB2480] hover:bg-white/5 transition"
                >
                  <FaCity className="text-lg" />
                  <span>Città europee</span>
                </a>
              </div>
            </div>

            <p className="text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase text-slate-400">
              oppure
            </p>

            <div className="space-y-3">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-slate-300">
                Hai già deciso?
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/contatti"
                  className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
                >
                  Scrivici per parlarne
                </a>

                <a
                  href={RESERVIO_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
                >
                  Prenota una consulenza
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default MeteMareEstero;










