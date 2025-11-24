import { useEffect, useState } from "react";
import { FaSuitcaseRolling } from "react-icons/fa6";
import heroImage from "../../assets/home/hero.webp";

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
          alt="Mare cristallino senza eguali"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </picture>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-slate-900/40" />

      {/* CONTENUTO */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pt-10">
        {/* SLOGAN posizionato a destra */}
        <div
          className={[
            "ml-auto flex max-w-full flex-col items-end text-right drop-shadow-2xl transition-all duration-700 ease-out md:max-w-lg",
            showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          {/* CON NOI – COLORE ACCESSIBILE */}
          <div className="bg-[#D91672] px-5 py-2 text-sm font-extrabold uppercase tracking-[0.18em] text-white rounded-t-md md:text-base">
            CON NOI
          </div>

          {/* IN GIRO PER IL MONDO */}
          <div className="bg-[#1F3759] px-4 py-2 text-2xl font-extrabold uppercase tracking-[0.22em] text-white rounded-b-md md:text-4xl lg:text-5xl">
            IN GIRO PER IL MONDO
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-48 flex w-full justify-center">
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













