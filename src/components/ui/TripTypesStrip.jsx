// src/components/ui/TripTypesStrip.jsx
import { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";

// IMMAGINI LOCALI OTTIMIZZATE WEBP
import nozzeImg from "../../assets/triptypes/viaggiodinozze.webp";
import crociereImg from "../../assets/triptypes/crociere.webp";
import gruppoImg from "../../assets/triptypes/viaggiodigruppo.webp";
import familyImg from "../../assets/triptypes/family.webp";

const tripTypes = [
  {
    title: "Viaggi di nozze",
    subtitle: "Momenti per sempre",
    image: nozzeImg,
    query: "nozze",
    to: "/viaggi-di-nozze",
  },
  {
    title: "Crociere",
    subtitle: "Grandi navi, grandi emozioni",
    image: crociereImg,
    query: "crociere",
    to: "/crociere",
  },
  {
    title: "Individuali & di gruppo",
    subtitle: "Solo per te o condividere",
    image: gruppoImg,
    query: "gruppo",
    to: "/viaggi-individuali-gruppo",
  },
  {
    title: "Family",
    subtitle: "Viaggi pensati per grandi e piccoli",
    image: familyImg,
    query: "family",
    to: "/viaggi-family",
  },
];

const AUTO_SLIDE_MS_MOBILE = 8000;

// CARD MEMOIZZATA
const Card = memo(function Card({ trip }) {
  return (
    <Link
      to={trip.to}
      className="
        group relative flex items-end rounded-3xl overflow-hidden 
        shadow-md bg-slate-900/40
        w-full
        h-60 md:h-auto md:aspect-3/4
        transition-transform duration-150 hover:-translate-y-1
      "
    >
      <img
        src={trip.image}
        alt={trip.title}
        loading="lazy"
        className="
          h-full w-full object-cover 
          transform transition-transform duration-300 group-hover:scale-105
          absolute inset-0
        "
      />

      <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

      <div className="relative p-4 md:p-5 w-full">
        <h3
          className="
    text-white font-bold leading-tight drop-shadow-sm
    text-xl md:text-2xl
    max-w-[80%]
    md:max-w-none
    wrap-break-word
    text-balance
  "
          style={{
            fontSize: trip.title.length > 22 ? "1.25rem" : "1.5rem", // riduce automaticamente
          }}
        >
          {trip.title}
        </h3>
        <p
          className="
            mt-1 text-sm md:text-base text-slate-100/90
            opacity-0 group-hover:opacity-100
            transition-opacity duration-100
          "
        >
          {trip.subtitle}
        </p>
      </div>
    </Link>
  );
});

const TripTypesStrip = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = tripTypes.length;

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") return;
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || total <= 1) return;

    const id = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % total),
      AUTO_SLIDE_MS_MOBILE
    );

    return () => clearInterval(id);
  }, [isMobile, total]);

  const currentTrip = tripTypes[currentIndex];

  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
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
                    className="inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center"
                  >
                    <span
                      className={[
                        "h-3 w-3 rounded-full border transition-colors duration-150",
                        isActive
                          ? "bg-sky-500 border-sky-500"
                          : "border-slate-400 bg-transparent hover:border-sky-400 hover:bg-sky-100",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          // DESKTOP → 4 COLONNE
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












