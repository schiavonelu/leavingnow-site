import { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";
import reviewsData from "../../data/reviews.json";

const AUTO_SLIDE_MS_MOBILE = 15000;
const AUTO_SLIDE_MS_DESKTOP = 25000;
const MAX_DESKTOP_PAGES = 3;

const ReviewsSection = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const [carouselReviews, setCarouselReviews] = useState([]);

  // Shuffle iniziale delle recensioni prese dal JSON
  useEffect(() => {
    const shuffled = [...reviewsData].sort(() => Math.random() - 0.5);
    setCarouselReviews(shuffled);
  }, []);

  useEffect(() => {
    const updatePerPage = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerPage(3);
      else if (w >= 768) setPerPage(2);
      else setPerPage(1);
      setCurrentPage(0);
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  // ★★★ LIMITAZIONE MOBILE: massimo 6 recensioni se perPage === 1
  const getEffectiveReviews = () => {
    if (perPage === 3) {
      const maxVisible = MAX_DESKTOP_PAGES * perPage;
      return carouselReviews.slice(0, maxVisible);
    }

    if (perPage === 1) {
      return carouselReviews.slice(0, 6); // SOLO 6 RECENSIONI SU MOBILE
    }

    return carouselReviews; // tablet → tutte
  };

  const effectiveReviews = getEffectiveReviews();
  const total = effectiveReviews.length || 1;
  const pageCount = Math.max(1, Math.ceil(total / perPage));

  const intervalMs =
    perPage === 1 ? AUTO_SLIDE_MS_MOBILE : AUTO_SLIDE_MS_DESKTOP;

  // Auto-slide solo quando la sezione è visibile e ci sono più pagine
  useEffect(() => {
    if (pageCount <= 1 || !isVisible) return;

    const id = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pageCount);
    }, intervalMs);

    return () => clearInterval(id);
  }, [pageCount, intervalMs, isVisible]);

  const startIndex = currentPage * perPage;
  const visibleReviews = effectiveReviews.slice(
    startIndex,
    startIndex + perPage
  );

  const getInitials = (name) =>
    name
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={ref}
          className={[
            "relative max-w-5xl mx-auto",
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review, index) => (
              <article
                key={`${review.name}-${startIndex + index}`}
                className="relative overflow-hidden rounded-3xl bg-linear-to-br from-sky-50 via-white to-amber-50 border border-slate-200 px-5 py-6 md:px-6 md:py-7 shadow-[0_10px_35px_rgba(15,23,42,0.18)] transform transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
              >
                <FaQuoteLeft className="pointer-events-none absolute -right-1 -bottom-2 text-6xl text-sky-100/70" />

                <div className="mb-3">
                  <div className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 shadow-sm">
                    <FaCheckCircle className="text-[11px]" />
                    Recensione verificata
                  </div>
                </div>

                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white font-semibold text-sm shadow-md">
                      {getInitials(review.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm md:text-[15px]">
                        {review.name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {review.tripType}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-0.5 mb-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < review.rating
                              ? "text-amber-400 text-xs"
                              : "text-slate-300 text-xs"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500">
                      {review.rating}.0 / 5
                    </span>
                  </div>
                </div>

                <p className="mt-1 text-sm md:text-[15px] text-slate-700 leading-relaxed text-justify">
                  {review.text}
                </p>
              </article>
            ))}
          </div>

          {/* PAGINATION DOTS stile Maintenance (pillole) ma con i TUOI colori */}
          <div className="flex flex-col items-center gap-1.5 mt-6">
            <div className="flex justify-center items-center gap-2">
              {Array.from({ length: pageCount }).map((_, index) => {
                const isActive = index === currentPage;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentPage(index)}
                    className="inline-flex h-4 items-center justify-center"
                    aria-label={`Vai alla pagina ${index + 1}`}
                  >
                    <span
                      className={[
                        "h-2.5 rounded-full transition-all duration-200",
                        isActive
                          ? "w-6 bg-sky-500"
                          : "w-2 bg-slate-400",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;










