// src/components/ui/TravelFilters.jsx
import { useState } from "react";
import {
  Filter,
  X,
  CalendarRange,
  Snowflake,
  SunMedium,
  Flower2,
  Leaf,
} from "lucide-react";

// 🔹 Mappa mesi IT → abbreviazione compatta
const MONTH_MAP = {
  Gennaio: "gen",
  Febbraio: "feb",
  Marzo: "mar",
  Aprile: "apr",
  Maggio: "mag",
  Giugno: "giu",
  Luglio: "lug",
  Agosto: "ago",
  Settembre: "set",
  Ottobre: "ott",
  Novembre: "nov",
  Dicembre: "dic",
};

// Mostra i mesi in versione corta nel chip
const shortenPeriodLabel = (period) => {
  if (!period) return "";
  let label = period;
  Object.entries(MONTH_MAP).forEach(([full, short]) => {
    const regex = new RegExp(full, "gi");
    label = label.replace(regex, short);
  });
  return label;
};

// 🔹 Decidi icona / colore in base al testo del periodo
const getSeasonInfo = (period) => {
  if (!period) {
    return { Icon: CalendarRange, iconClass: "text-slate-400" };
  }

  const p = period.toLowerCase();

  const has = (substr) => p.includes(substr);

  // “tutto l’anno” / “quasi tutto l’anno” → calendario
  if (
    has("tutto l'anno") ||
    has("tutto l’anno") ||
    has("quasi tutto l'anno") ||
    has("quasi tutto l’anno") ||
    has("all year")
  ) {
    return { Icon: CalendarRange, iconClass: "text-slate-500" };
  }

  const winterTokens = ["inverno", "dicembre", "dic", "gennaio", "gen", "febbraio", "feb"];
  const summerTokens = ["estate", "giugno", "giu", "luglio", "lug", "agosto", "ago"];
  const springTokens = ["primavera", "marzo", "mar", "aprile", "apr", "maggio", "mag"];
  const autumnTokens = ["autunno", "settembre", "set", "ottobre", "ott", "novembre", "nov"];

  const hasWinter = winterTokens.some((t) => has(t));
  const hasSummer = summerTokens.some((t) => has(t));
  const hasSpring = springTokens.some((t) => has(t));
  const hasAutumn = autumnTokens.some((t) => has(t));

  // Logica "furba"
  if (hasSummer && !hasWinter) {
    return { Icon: SunMedium, iconClass: "text-amber-400" };
  }

  if (hasWinter && !hasSummer) {
    return { Icon: Snowflake, iconClass: "text-sky-400" };
  }

  if (hasSpring && !hasSummer && !hasWinter) {
    return { Icon: Flower2, iconClass: "text-[#EB2480]" };
  }

  if (hasAutumn && !hasSummer && !hasWinter) {
    return { Icon: Leaf, iconClass: "text-orange-500" };
  }

  // se siamo qui → stagionalità mista / difficile da catalogare → calendario
  return { Icon: CalendarRange, iconClass: "text-slate-400" };
};

/**
 * props:
 * - title (string)
 * - periodLabel (string)
 * - periods: array di stringhe (solo le voci reali, senza "Tutti i periodi")
 * - selectedPeriods: array di stringhe
 * - onPeriodsChange(newArray)
 * - onResetFilters(): callback per azzerare anche la ricerca nelle pagine
 */
const TravelFilters = ({
  title,
  periodLabel,
  periods = [],
  selectedPeriods = [],
  onPeriodsChange,
  onResetFilters,
}) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [openPeriods, setOpenPeriods] = useState(true);

  const hasPeriods = periods.length > 0;
  const isAllPeriods = !selectedPeriods || selectedPeriods.length === 0;

  const handleResetFilters = () => {
    onPeriodsChange?.([]);
    onResetFilters?.();
  };

  const handleTogglePeriod = (p) => {
    if (!onPeriodsChange) return;
    if (selectedPeriods.includes(p)) {
      onPeriodsChange(selectedPeriods.filter((val) => val !== p));
    } else {
      onPeriodsChange([...selectedPeriods, p]);
    }
  };

  // 🔸 Contenuto dei filtri (riusato in desktop + mobile)
  const filtersContent = (
    <div className="space-y-4">
      {hasPeriods && (
        <div className="rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
          <button
            type="button"
            className="w-full flex items-center justify-between px-4 py-3"
            onClick={() => setOpenPeriods((prev) => !prev)}
          >
            <div className="flex items-center gap-2">
              <CalendarRange className="w-4 h-4 text-[#EB2480]" />
              <div className="flex flex-col items-start">
                <span className="text-xs font-semibold text-[#132C50]">
                  {periodLabel || "Periodo consigliato"}
                </span>
                <span className="text-[11px] text-slate-500">
                  Puoi selezionare più periodi
                </span>
              </div>
            </div>
            <span className="text-xs text-slate-400">
              {openPeriods ? "–" : "+"}
            </span>
          </button>

          {openPeriods && (
            <div className="px-4 pb-4 space-y-2">
              {/* Chip “Tutti i periodi” */}
              <button
                type="button"
                onClick={() => onPeriodsChange?.([])}
                className={`w-full flex items-center justify-between rounded-xl border px-3 py-2.5 text-xs md:text-sm transition ${
                  isAllPeriods
                    ? "border-[#0863D6] bg-[#E0ECFF] text-[#0F172A]"
                    : "border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0863D6]/60"
                }`}
              >
                <div className="flex items-center gap-2">
                  <CalendarRange className="w-4 h-4 text-slate-500" />
                  <span>Tutti i periodi</span>
                </div>
                {isAllPeriods && (
                  <span className="text-[10px] uppercase tracking-[0.12em] text-[#0863D6] font-semibold">
                    Attivo
                  </span>
                )}
              </button>

              {/* Singoli periodi */}
              {periods.map((p) => {
                const { Icon, iconClass } = getSeasonInfo(p);
                const label = shortenPeriodLabel(p);
                const selected = selectedPeriods.includes(p);

                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => handleTogglePeriod(p)}
                    className={`w-full flex items-center justify-between rounded-xl border px-3 py-2.5 text-xs md:text-sm transition ${
                      selected
                        ? "border-[#0863D6] bg-[#E0ECFF] text-[#0F172A]"
                        : "border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0863D6]/60"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${iconClass}`} />
                      <span className="capitalize">{label}</span>
                    </div>
                    {selected && (
                      <span className="text-[10px] uppercase tracking-[0.12em] text-[#0863D6] font-semibold">
                        Attivo
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {(onPeriodsChange || onResetFilters) && (
        <button
          type="button"
          onClick={handleResetFilters}
          className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-medium text-slate-500 hover:text-[#EB2480] transition"
        >
          <X className="w-3 h-3" />
          <span>Rimuovi tutti i filtri</span>
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* MOBILE: pulsante per aprire pannello filtri */}
      <div className="mb-4 md:hidden">
        <button
          type="button"
          onClick={() => setShowMobileFilters(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-xs font-semibold text-[#132C50]"
        >
          <Filter className="w-4 h-4 text-[#EB2480]" />
          <span>Filtri</span>
        </button>
      </div>

      {/* DESKTOP: sidebar a sinistra */}
      <div className="hidden md:block">
        {title && (
          <div className="mb-3 flex items-center justify-between gap-2">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-[#0F172A] mb-1">
                Filtri
              </p>
              <h3 className="text-sm font-semibold text-[#132C50]">
                {title}
              </h3>
            </div>

            {(onPeriodsChange || onResetFilters) && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-1.5 text-[11px] font-medium text-slate-600 hover:border-[#EB2480] hover:text-[#EB2480] transition"
              >
                <X className="w-3 h-3" />
                <span>Rimuovi filtri</span>
              </button>
            )}
          </div>
        )}

        {filtersContent}
      </div>

      {/* MOBILE: bottom sheet filtri */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40">
          <div className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-lg p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#EB2480]" />
                <h2 className="text-sm font-semibold text-[#132C50]">
                  Filtri di ricerca
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setShowMobileFilters(false)}
                className="p-1 rounded-full hover:bg-slate-100"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {filtersContent}

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  handleResetFilters();
                  setShowMobileFilters(false);
                }}
                className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700"
              >
                Rimuovi filtri
              </button>
              <button
                type="button"
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 rounded-full bg-[#0863D6] border border-[#0863D6] px-4 py-2 text-xs font-semibold text-white"
              >
                Applica
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TravelFilters;






