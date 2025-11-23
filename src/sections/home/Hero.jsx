import { useEffect, useState } from "react";
import { FaSuitcaseRolling } from "react-icons/fa6";
import heroImage from "../../assets/pages/hero.webp";

const Hero = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 700);
    const t2 = setTimeout(() => setShowButton(true), 1300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // 🟦 Funzione per lo scroll morbido
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* SFONDO HERO */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-slate-900/40" />

      {/* CONTENUTO */}
      <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-center pt-16">
        <div className="max-w-2xl mx-auto">

          {/* TITOLO */}
          <h1
            className={[
              "text-3xl text-center md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-xl transform transition-all duration-700 ease-out",
              showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            "Le persone non fanno i viaggi, sono i viaggi che fanno le persone"
          </h1>

          {/* BOTTONE CTA */}
          <div className="w-full flex justify-center mt-6">
            <button
              onClick={handleScroll}   // ⬅️ SCROLL QUI
              className={[
                "inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-semibold text-white shadow-2xl border border-white/40 transition-all duration-700 ease-out hover:bg-sky-500 hover:border-white",
                showButton
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6",
              ].join(" ")}
            >
              <FaSuitcaseRolling className="text-xl" />
              Prepara i bagagli!
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;









