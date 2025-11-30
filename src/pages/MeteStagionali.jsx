// src/pages/MeteStagionali.jsx
import { useEffect, useState } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import Pagination from "../components/ui/Pagination.jsx";
import heroImg from "../assets/mete-stagionali/hero.webp";

import { SEASONS } from "../data/mete-stagionali";
import { SALES_CAMPAIGNS } from "../config/seasonalSalesConfig";
import {
  getSeasonImageBySlug,
  getRandomSeasonImageForSeason,
} from "../data/mete-stagionali-images";

import {
  FaCity,
  FaUmbrellaBeach,
  FaGlobeEurope,
  FaRegCalendarAlt,
} from "react-icons/fa";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const PAGE_SIZE = 6;
const MAX_CARDS_PER_SEASON = 24;

// 🔹 stesso criterio di confronto che usi in seasonalSalesConfig
const isInRange = (today, start, end) => {
  const t = today.month * 100 + today.day;
  const s = start.month * 100 + start.day;
  const e = end.month * 100 + end.day;

  if (s <= e) {
    return t >= s && t <= e;
  }

  return t >= s || t <= e;
};

// stagione “commerciale” per titolo/pagina
const getCommercialSeasonId = (date) => {
  const month = date.getMonth() + 1;

  // Ott–Feb = inverno commerciale per mercatini/Capodanno/crociere
  if (month === 10 || month === 11 || month === 12 || month === 1 || month === 2) {
    return "inverno";
  }
  if (month >= 3 && month <= 5) {
    return "primavera";
  }
  if (month >= 6 && month <= 8) {
    return "estate";
  }
  return "autunno";
};

const getHeroYearLabel = (today) => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  if (month >= 9) {
    return `${year}/${year + 1}`;
  }
  return `${year}`;
};

const getSeasonDisplayYear = (seasonId, today) => {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const id = seasonId.toLowerCase();

  switch (id) {
    case "inverno":
      return month >= 9 ? year + 1 : year;
    case "primavera":
      return month >= 9 ? year + 1 : year;
    case "estate":
      return month >= 10 ? year + 1 : year;
    case "autunno":
      return month >= 12 ? year + 1 : year;
    default:
      return year;
  }
};

// Scroll con offset (breadcrumb)
const scrollToSeasonAnchor = (seasonId) => {
  if (typeof document === "undefined") return;
  const el = document.getElementById(seasonId);
  if (!el) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const rect = el.getBoundingClientRect();
  const headerOffset = 110;
  const offsetTop = window.scrollY + rect.top - headerOffset;

  window.scrollTo({
    top: offsetTop > 0 ? offsetTop : 0,
    behavior: "smooth",
  });
};

// helper per scegliere l'immagine della card
const getCardImage = (card) => {
  // 1) se la card ha uno slug → prova l'immagine dedicata
  if (card.slug) {
    const img = getSeasonImageBySlug(card.slug);
    if (img) return img;
  }

  // 2) altrimenti prova a pescare random tra le immagini della stagione
  if (card.seasonId) {
    const img = getRandomSeasonImageForSeason(card.seasonId);
    if (img) return img;
  }

  // 3) fallback finale: hero classico
  return heroImg;
};

// 🔹 Mappa card → campagne (in base al titolo della card)
const CARD_CAMPAIGN_MAP = {
  // INVERNO
  "Mercatini di Natale tra Trentino e Austria": ["mercatini-natale"],
  "Alsazia e Germania romantica": ["mercatini-natale"],
  "Canarie e mare d’inverno": ["mare-inverno"],

  // PRIMAVERA
  "Amsterdam e fioritura dei tulipani": ["tulipani-amsterdam"],
  "Giappone durante l’hanami": ["ciliegi-giappone"],
  "Pasqua tra capitali e Mediterraneo": ["pasqua"],
  "Barcellona tra Ramblas e mare": ["mare-europa-isole"],
  "Siviglia e la primavera andalusa": ["pasqua"],
  "Valencia tra Città delle Arti e mare": ["mare-europa-isole"],
  "Malta tra storia e prime giornate di mare": ["mare-europa-isole"],
  "Nizza e Costa Azzurra di primavera": ["mare-europa-isole", "carnevale"],

  // ESTATE
  "Mare Italia tra Sardegna, Sicilia e Salento": ["mare-italia"],
  "Mare estero tra Grecia e Spagna": ["mare-europa-isole"],
  "Viaggi di nozze estivi": ["viaggi-intercontinentali"],

  // BENESSERE
  "Trentino Alto Adige tra terme e montagne": ["benessere-spa"],
  "Slovenia e Ungheria termale": ["benessere-spa"],
  "Italia tra laghi e borghi": ["benessere-spa"],

  // EVENTI SPECIALI
  "Carnevale tra Venezia e Nizza": ["carnevale"],
  "Oktoberfest a Monaco": ["oktoberfest"],
  "Capodanno in capitale europea": ["capodanno"],
};

const MeteStagionali = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const today = new Date();
  const heroYearLabel = getHeroYearLabel(today);
  const focusSeasonId = getCommercialSeasonId(today);

  const todayMD = {
    month: today.getMonth() + 1,
    day: today.getDate(),
  };

  // 🔹 campagne attive OGGI in base al tuo calendario vendite
  const activeCampaignIds = new Set(
    SALES_CAMPAIGNS.filter((c) => isInRange(todayMD, c.from, c.to)).map(
      (c) => c.id
    )
  );

  // 🔹 tutte le card definite in SEASONS con info sulla stagione
  const seasonalCards = [];
  SEASONS.forEach((season) => {
    (season.cards || []).forEach((card) => {
      seasonalCards.push({
        ...card,
        seasonId: season.id,
      });
    });
  });

  // 🔹 Filtro: MOSTRIAMO SOLO LE CARDS CHE HANNO ALMENO UNA CAMPAGNA ATTIVA
  const filteredSeasonalCards = seasonalCards.filter((card) => {
    const campaigns = CARD_CAMPAIGN_MAP[card.title];
    if (!campaigns || campaigns.length === 0) return false;
    return campaigns.some((id) => activeCampaignIds.has(id));
  });

  // 🔹 se per qualche motivo non ci sono card filtrate,
  // fallback: mostra le card della stagione di focus (senza filtro vendite)
  const effectiveCards =
    filteredSeasonalCards.length > 0
      ? filteredSeasonalCards
      : seasonalCards.filter((card) => card.seasonId === focusSeasonId);

  // 🔹 Ordiniamo: prima stagione di focus, poi eventi speciali, poi benessere, poi il resto
  const orderedSeasonalCards = [...effectiveCards].sort((a, b) => {
    const score = (card) => {
      if (card.seasonId === focusSeasonId) return 1;
      if (card.seasonId === "eventi-speciali") return 2;
      if (card.seasonId === "benessere") return 3;
      return 4;
    };
    return score(a) - score(b);
  });

  const focusSeason = SEASONS.find((s) => s.id === focusSeasonId);
  const [pageBySeason, setPageBySeason] = useState({});

  const handleChangePage = (seasonId, nextPage) => {
    setPageBySeason((prev) => ({
      ...prev,
      [seasonId]: nextPage,
    }));
    scrollToSeasonAnchor(seasonId);
  };

  return (
    <>
      <InnerHero
        title={`Mete stagionali ${heroYearLabel}`}
        subtitle="Solo le mete stagionali che ha senso programmare adesso, in base al calendario di vendita e al periodo dell’anno."
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
            Idee, non pacchetti: si parte sempre da quando vuoi viaggiare
          </h1>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify md:text-center">
            Qui trovi solo le mete stagionali che hanno senso in questo periodo,
            in base al calendario di vendita: mercatini, Capodanno, Carnevale,
            mare, viaggi di nozze e weekend benessere.
          </p>
        </div>
      </section>

      {focusSeason &&
        (() => {
          const season = focusSeason;

          // ✅ QUI: usiamo TUTTE le card oggi in vendita (di tutte le stagioni/eventi),
          // ma il titolo della sezione segue la stagione commerciale di focus
          const baseCards = orderedSeasonalCards.slice(0, MAX_CARDS_PER_SEASON);

          const totalPages = Math.max(
            1,
            Math.ceil(baseCards.length / PAGE_SIZE)
          );

          const currentPage =
            pageBySeason[season.id] && pageBySeason[season.id] <= totalPages
              ? pageBySeason[season.id]
              : 1;

          const startIndex = (currentPage - 1) * PAGE_SIZE;
          const visibleCards = baseCards.slice(
            startIndex,
            startIndex + PAGE_SIZE
          );

          const sectionBg =
            season.id === "primavera" || season.id === "autunno"
              ? "bg-[#F8FAFC]"
              : "bg-white";

          const displayYear = getSeasonDisplayYear(season.id, today);

          return (
            <section
              key={season.id}
              id={season.id}
              className={`py-12 md:py-16 ${sectionBg}`}
            >
              <div className="max-w-6xl mx-auto px-4 space-y-8">
                {/* HEADER SEZIONE */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-1">
                      {season.name}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-2">
                      {`Mete Stagionali - ${season.name} ${displayYear}`}
                    </h2>
                    <p className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-[0.16em]">
                      {season.period}
                    </p>
                  </div>
                  <p className="text-sm md:text-base text-slate-700 md:max-w-xl leading-relaxed text-justify">
                    In questa griglia trovi solo le mete che sono veramente “in
                    vendita” adesso, in linea con il calendario commerciale:
                    eventi stagionali, mare, viaggi intercontinentali e
                    benessere.
                  </p>
                </div>

                {/* GRID CARDS */}
                <div className="grid gap-8 md:grid-cols-3">
                  {visibleCards.map((card, idx) => (
                    <ContinentCard
                      key={`${season.id}-${card.title}-${idx}`}
                      image={getCardImage(card)}
                      title={card.title}
                      badge={card.badge}
                      period={card.period}
                      description={card.description}
                    />
                  ))}
                </div>

                {/* PAGINAZIONE con componente riusabile */}
                {totalPages > 1 && (
                  <div className="mt-6 flex justify-center">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={(page) =>
                        handleChangePage(season.id, page)
                      }
                    />
                  </div>
                )}
              </div>
            </section>
          );
        })()}

      {/* 🔹 BANNER UNICO: ISPIRAZIONE + ALTRE METE + CONTATTI (Stagionali) */}
      <section className="py-10 md:py-14 bg-gradient-to-r from-[#0B1F3B] via-[#132C50] to-[#0B1F3B]">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-sky-300">
            Ti ispiriamo, poi lo costruiamo insieme
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Hai trovato qualche meta stagionale che ti ispira?
          </h2>

          <p className="text-sm md:text-base text-slate-200 leading-relaxed">
            Possiamo partire da queste mete ordinate per stagione e calendario
            di vendita per creare il tuo viaggio ideale. Poi possiamo incrociare
            anche capitali, mare Italia o mare estero.
          </p>

          <div className="mt-4 space-y-6">
            {/* BLOCCO 1 – LASCIATI ISPIRARE */}
            <div className="space-y-3">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-slate-300">
                Lasciati ispirare ancora
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/mete-capitali"
                  className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full px-6 py-3 text-sm md:text-base
                    font-semibold border border-sky-400 bg-sky-500 text-white hover:bg-white hover:text-[#0863D6]
                    hover:border-[#0863D6] transition"
                >
                  <FaCity className="text-lg" />
                  <span>Capitali europee</span>
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
                Hai già deciso la meta?
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

export default MeteStagionali;



















