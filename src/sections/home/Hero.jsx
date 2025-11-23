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

  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* SFONDO HERO */}
      <picture>
        <img
          src={heroImage}
          alt="Coppia in viaggio al tramonto con valigia"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </picture>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-slate-900/40" />

      {/* CONTENUTO */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center pt-16">

        {/* SLOGAN posizionato a destra */}
        <div
          className={[
            "flex flex-col items-end text-right max-w-full md:max-w-lg ml-auto drop-shadow-2xl transition-all duration-700 ease-out",
            showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          {/* CON NOI */}
          <div className="bg-[#EB2480] px-5 py-2 text-sm md:text-base font-extrabold uppercase tracking-[0.18em] text-white rounded-t-md">
            CON NOI
          </div>

          {/* IN GIRO PER IL MONDO */}
          <div className="bg-[#0863D6] px-6 py-3 text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-[0.22em] text-white rounded-b-md">
            IN GIRO PER IL MONDO
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="w-full flex justify-center mt-48">
          <button
            onClick={handleScroll}
            className={[
              "inline-flex items-center gap-2 rounded-full bg-primary px-20 py-4 text-base font-semibold text-white shadow-2xl border border-white/40 transition-all duration-700 ease-out hover:bg-sky-500 hover:border-white",
              showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            <FaSuitcaseRolling className="text-xl" />
            Prepara i bagagli!
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;












