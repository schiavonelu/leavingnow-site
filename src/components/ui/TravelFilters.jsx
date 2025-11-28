// src/components/ui/TravelFilters.jsx
import { useState } from "react";
import {
  Filter,
  X,
  CalendarDays,
  Sun,
  Snowflake,
  Flower2,
  Leaf,
  Shuffle,
} from "lucide-react";
import {
  SEASON_BUCKET_LABELS,
  SEASON_BUCKET_LIST,
} from "../../utils/seasonBuckets.js";

const SEASON_CONFIG = {
  [SEASON_BUCKET_LABELS.ALL_YEAR]: {
    icon: CalendarDays,
    tone: "sky",
    helper: "Va bene in gran parte dell’anno.",
  },
  [SEASON_BUCKET_LABELS.SPRING]: {
    icon: Flower2,
    tone: "emerald",
    helper: "Perfetto per la primavera.",
  },
  [SEASON_BUCKET_LABELS.SUMMER]: {
    icon: Sun,
    tone: "amber",
    helper: "Ideale per l’estate.",
  },
  [SEASON_BUCKET_LABELS.AUTUMN]: {
    icon: Leaf,
    tone: "orange",
    helper: "Pensato per l’autunno.",
  },
  [SEASON_BUCKET_LABELS.WINTER]: {
    icon: Snowflake,
    tone: "blue",
    helper: "Pensato per l’inverno.",
  },
  [SEASON_BUCKET_LABELS.MIX]: {
    icon: Shuffle,
    tone: "violet",
    helper: "Stagionalità variabile / da valutare insieme.",
  },
};

const TONE_CLASSES = {
  sky: {
    active: "bg-sky-50 border-sky-300 text-sky-900",
    idle: "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100",
    iconActive: "text-sky-500",
    iconIdle: "text-slate-400",
  },
  emerald: {
    active: "bg-emerald-50 border-emerald-300 text-emerald-900",
    idle:
      "bg-slate-50 border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-200",
    iconActive: "text-emerald-500",
    iconIdle: "text-slate-400",
  },
  amber: {
    active: "bg-amber-50 border-amber-300 text-amber-900",
    idle:
      "bg-slate-50 border-slate-200 text-slate-700 hover:bg-amber-50 hover:border-amber-200",
    iconActive: "text-amber-500",
    iconIdle: "text-slate-400",
  },
  orange: {
    active: "bg-orange-50 border-orange-300 text-orange-900",
    idle:
      "bg-slate-50 border-slate-200 text-slate-700 hover:bg-orange-50 hover:border-orange-200",
    iconActive: "text-orange-500",
    iconIdle: "text-slate-400",
  },
  blue: {
    active: "bg-sky-50 border-sky-300 text-sky-900",
    idle:
      "bg-slate-50 border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-200",
    iconActive: "text-sky-500",
    iconIdle: "text-slate-400",
  },
  violet: {
    active: "bg-violet-50 border-violet-300 text-violet-900",
    idle:
      "bg-slate-50 border-slate-200 text-slate-700 hover:bg-violet-50 hover:border-violet-200",
    iconActive: "text-violet-500",
    iconIdle: "text-slate-400",
  },
};

const TravelFilters = ({
  title = "Filtra le mete",
  selectedBuckets,
  onBucketsChange,
  onResetFilters,
}) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const hasActiveFilters = selectedBuckets && selectedBuckets.length > 0;

  const toggleBucket = (label) => {
    if (!selectedBuckets) return;
    if (selectedBuckets.includes(label)) {
      onBucketsChange(selectedBuckets.filter((b) => b !== label));
    } else {
      onBucketsChange([...selectedBuckets, label]);
    }
  };

  const handleReset = () => {
    onBucketsChange([]);
    if (onResetFilters) onResetFilters();
  };

  const renderFiltersBody = () => (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F1F5F9] text-[#EB2480]">
            <Filter className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#64748B]">
              Filtri
            </p>
            <p className="text-sm font-semibold text-[#0F172A]">
              {title}
            </p>
          </div>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1 rounded-full border border-[#CBD5E1] px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-100"
          >
            <X className="w-3 h-3" />
            <span>Rimuovi filtri</span>
          </button>
        )}
      </div>

      <div className="pt-1 space-y-2">
        <p className="text-[11px] text-slate-500">
          Puoi selezionare una o più stagioni per vedere le mete più in linea
          con il periodo in cui pensi di partire.
        </p>

        <div className="space-y-1.5">
          {SEASON_BUCKET_LIST.map((label) => {
            const config = SEASON_CONFIG[label] || {
              icon: CalendarDays,
              tone: "sky",
              helper: "",
            };
            const Icon = config.icon;
            const tone = TONE_CLASSES[config.tone] || TONE_CLASSES.sky;

            const isActive = selectedBuckets.includes(label);

            const buttonClasses = isActive
              ? `${tone.active} shadow-sm`
              : tone.idle;

            const iconClasses = isActive
              ? tone.iconActive
              : tone.iconIdle;

            return (
              <button
                key={label}
                type="button"
                onClick={() => toggleBucket(label)}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl border text-xs md:text-sm transition-colors ${buttonClasses}`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`flex h-7 w-7 items-center justify-center rounded-lg bg-white/70 ${iconClasses}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">{label}</p>
                    {config.helper && (
                      <p className="text-[10px] text-slate-500">
                        {config.helper}
                      </p>
                    )}
                  </div>
                </div>

                {isActive && (
                  <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#0F172A]">
                    Attivo
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile: pulsante per aprire i filtri */}
      <div className="mb-4 lg:hidden">
        <button
          type="button"
          onClick={() => setShowMobileFilters(true)}
          className="inline-flex items-center gap-2 rounded-full border border-[#CBD5E1] bg-white px-4 py-2 text-sm font-semibold text-[#0F172A] shadow-sm"
        >
          <Filter className="w-4 h-4 text-[#EB2480]" />
          <span>Filtri di ricerca</span>
          {hasActiveFilters && (
            <span className="ml-1 rounded-full bg-[#EB2480] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              {selectedBuckets.length}
            </span>
          )}
        </button>
      </div>

      {/* Desktop: card filtri fissa a sinistra */}
      <aside className="hidden lg:block w-full lg:w-72 shrink-0">
        <div className="rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm">
          {renderFiltersBody()}
        </div>
      </aside>

      {/* Mobile: modal a schermo intero */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/60 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-[#0F172A]">
                Filtri di ricerca
              </p>
              <div className="flex items-center gap-2">
                {hasActiveFilters && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 rounded-full border border-[#CBD5E1] px-2.5 py-1 text-[11px] font-medium text-slate-600 hover:bg-slate-100"
                  >
                    <X className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="max-h-[70vh] overflow-y-auto pr-1">
              {renderFiltersBody()}
            </div>

            <button
              type="button"
              onClick={() => setShowMobileFilters(false)}
              className="mt-3 w-full rounded-full bg-[#0863D6] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0658b8] transition"
            >
              Applica filtri
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TravelFilters;







