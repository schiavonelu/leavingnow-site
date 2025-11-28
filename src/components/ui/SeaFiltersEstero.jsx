// src/components/ui/SeaFiltersEstero.jsx
import { useState } from "react";
import { Filter, X, ChevronLeft, ChevronRight } from "lucide-react";

const SeaFiltersEstero = ({
  title = "Mare estero",
  options = [],              // array di stringhe: ["Grecia", "Spagna", "Canarie", ...]
  selectedFilters = [],      // array di stringhe
  onFiltersChange,
  onResetFilters,
  isCollapsed = false,
  onToggleCollapsed,
}) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const hasActiveFilters = selectedFilters && selectedFilters.length > 0;

  const toggleFilter = (id) => {
    if (!onFiltersChange) return;

    if (selectedFilters.includes(id)) {
      onFiltersChange(selectedFilters.filter((f) => f !== id));
    } else {
      onFiltersChange([...selectedFilters, id]);
    }
  };

  const handleReset = () => {
    if (onFiltersChange) onFiltersChange([]);
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
            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold bg-rose-500 text-white shadow-sm hover:bg-rose-600 transition"
          >
            <X className="w-3 h-3" />
            <span>Rimuovi</span>
          </button>
        )}
      </div>

      <div className="pt-1 space-y-2">
        <p className="text-[11px] text-slate-500">
          Puoi selezionare una o più nazioni o macro-zone (es. Grecia, Canarie,
          Mar Rosso). Se non selezioni nulla, vedrai tutte le mete.
        </p>

        <div className="space-y-1.5">
          {options.map((id) => {
            const isActive = selectedFilters.includes(id);
            const base =
              "w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl border text-xs md:text-sm transition-colors";
            const active =
              "bg-sky-50 border-sky-300 text-sky-900 shadow-sm";
            const idle =
              "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100";

            return (
              <button
                key={id}
                type="button"
                onClick={() => toggleFilter(id)}
                className={`${base} ${isActive ? active : idle}`}
              >
                <div className="text-left">
                  <p className="font-semibold">{id}</p>
                </div>
              </button>
            );
          })}

          {options.length === 0 && (
            <p className="text-[11px] text-slate-400">
              Non ci sono nazioni configurate nei dati delle mete mare estero.
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderCollapsedSidebar = () => (
    <div className="flex flex-col items-center gap-3 py-2">
      <button
        type="button"
        onClick={onToggleCollapsed}
        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 shadow-sm"
        title="Espandi filtri mare estero"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      <div className="flex flex-col items-center gap-2">
        {options.map((id) => {
          const isActive = selectedFilters.includes(id);
          const abbrev =
            id.length > 3 ? id.slice(0, 3).toUpperCase() : id.toUpperCase();

          return (
            <button
              key={id}
              type="button"
              onClick={() => toggleFilter(id)}
              title={id}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-[9px] font-semibold shadow-sm transition ${
                isActive
                  ? "bg-sky-600 text-white"
                  : "bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {abbrev}
            </button>
          );
        })}
      </div>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={handleReset}
          className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white shadow-sm hover:bg-rose-600"
          title="Rimuovi filtri"
        >
          <X className="w-4 h-4" />
        </button>
      )}
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
          <span>Filtra per nazione</span>
          {hasActiveFilters && (
            <span className="ml-1 rounded-full bg-[#EB2480] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
              {selectedFilters.length}
            </span>
          )}
        </button>
      </div>

      {/* Desktop: sidebar fissa a sinistra */}
      <aside
        className={`hidden lg:block shrink-0 transition-[width] duration-300 ${
          isCollapsed ? "w-16" : "w-72"
        }`}
      >
        <div className="lg:sticky lg:top-30 rounded-2xl border border-[#E2E8F0] bg-white p-2 shadow-sm">
          {isCollapsed ? (
            renderCollapsedSidebar()
          ) : (
            <div className="relative p-2">
              {onToggleCollapsed && (
                <button
                  type="button"
                  onClick={onToggleCollapsed}
                  className="absolute -right-3 top-2 hidden lg:inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700 shadow-sm"
                  title="Riduci filtri"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
              )}
              {renderFiltersBody()}
            </div>
          )}
        </div>
      </aside>

      {/* Mobile: modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/60 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-[#0F172A]">
                Filtri mare estero
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

export default SeaFiltersEstero;

