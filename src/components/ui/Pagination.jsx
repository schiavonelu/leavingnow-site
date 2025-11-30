// src/components/ui/Pagination.jsx
const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}) => {
  if (!totalPages || totalPages <= 1) return null;

  const handleGoToPage = (page) => {
    if (page === currentPage) return;
    if (page < 1 || page > totalPages) return;
    onPageChange(page);
  };

  return (
    <div
      className={`flex items-center justify-center gap-1.5 mt-6 ${className}`}
    >
      {/* FRECCIA SINISTRA */}
      <button
        type="button"
        onClick={() => handleGoToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center text-xs md:text-sm rounded-full border border-slate-300 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#0863D6] hover:text-[#0863D6] transition"
        aria-label="Pagina precedente"
      >
        <span aria-hidden="true">&lt;</span>
      </button>

      {/* NUMERI PAGINE */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => handleGoToPage(page)}
          className={`min-w-8 px-2.5 h-8 text-xs md:text-sm rounded-full border transition ${
            page === currentPage
              ? "bg-[#0863D6] border-[#0863D6] text-white"
              : "border-slate-300 text-slate-600 hover:border-[#0863D6] hover:text-[#0863D6]"
          }`}
        >
          {page}
        </button>
      ))}

      {/* FRECCIA DESTRA */}
      <button
        type="button"
        onClick={() => handleGoToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center text-xs md:text-sm rounded-full border border-slate-300 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#0863D6] hover:text-[#0863D6] transition"
        aria-label="Pagina successiva"
      >
        <span aria-hidden="true">&gt;</span>
      </button>
    </div>
  );
};

export default Pagination;
