import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const tripTypes = [
  {
    title: "Viaggi di nozze",
    subtitle: "Momenti per sempre",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg",
    query: "nozze",
  },
  {
    title: "Crociere",
    subtitle: "Grandi navi, grandi emozioni",
    image: "https://images.pexels.com/photos/799091/pexels-photo-799091.jpeg",
    query: "crociere",
  },
  {
    title: "Viaggi di gruppo",
    subtitle: "Esperienze da condividere",
    image: "https://images.pexels.com/photos/7083922/pexels-photo-7083922.jpeg",
    query: "gruppo",
  },
  {
    title: "Viaggi di lavoro",
    subtitle: "Business trip senza stress",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
    query: "lavoro",
  },
];

const AUTO_SLIDE_MS_MOBILE = 8000;

const TripTypesStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = tripTypes.length;

  // rileva mobile (<768px)
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // autoplay solo in mobile
  useEffect(() => {
    if (!isMobile || total <= 1) return;

    const id = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % total),
      AUTO_SLIDE_MS_MOBILE
    );

    return () => clearInterval(id);
  }, [isMobile, total]);

  const currentTrip = tripTypes[currentIndex];

  // Card riutilizzabile
  const Card = ({ trip }) => (
    <Link
      to={`/contatti?tipo=${encodeURIComponent(trip.query)}`}
      className="
        group relative flex items-end rounded-3xl overflow-hidden 
        shadow-md bg-slate-900/40
        w-full
        h-60 md:h-auto md:aspect-[3/4]
        transition-all duration-200 hover:-translate-y-1
      "
    >
      {/* Immagine */}
      <img
        src={trip.image}
        alt={trip.title}
        className="
          h-full w-full object-cover 
          transform transition-transform duration-700 group-hover:scale-105
          absolute inset-0
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

      {/* Testo */}
      <div className="relative p-4 md:p-5 w-full">
        <h3 className="text-white text-xl md:text-2xl font-bold leading-tight drop-shadow-sm">
          {trip.title}
        </h3>

        <p
          className="
            mt-1 text-sm md:text-base text-slate-100/90
            opacity-0 translate-y-1
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-150
          "
        >
          {trip.subtitle}
        </p>
      </div>
    </Link>
  );

  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        {/* MOBILE: 1 card per volta, full width, autoplay */}
        {isMobile ? (
          <>
            <div className="flex justify-center">
              <div className="w-full">
                <Card trip={currentTrip} />
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {tripTypes.map((_, index) => {
                const isActive = index === currentIndex;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Vai al tipo di viaggio ${index + 1}`}
                    className="inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center group"
                  >
                    <span
                      className={[
                        "h-2.5 w-2.5 rounded-full border transition-all duration-200",
                        isActive
                          ? "bg-sky-500 border-sky-500"
                          : "border-slate-400 bg-transparent group-hover:border-sky-400 group-hover:bg-sky-100",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          // DESKTOP/TABLET: tutte le card in griglia
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tripTypes.map((trip) => (
              <div key={trip.title} className="w-full">
                <Card trip={trip} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TripTypesStrip;







