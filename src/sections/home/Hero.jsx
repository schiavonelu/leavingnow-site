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
            "flex flex-col items-end text-right max-w-full md:max-w-3xl ml-auto drop-shadow-2xl transition-all duration-700 ease-out",
            showTitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
        >
          <div className="relative inline-block rounded-3xl bg-[#1F3759]/95 border border-white/20 shadow-xl px-4 py-3 md:px-10 md:py-5">
            {/* BADGE CON NOI */}
            <div className="absolute -top-4 right-4">
              <div className="rounded-2xl bg-[#EB2480] px-4 py-1.5 text-[11px] md:text-xs lg:text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                CON NOI
              </div>
            </div>

            {/* TESTO PRINCIPALE */}
            <p className="text-white font-extrabold uppercase tracking-[0.18em] leading-snug">
              <span className="block text-base md:text-2xl lg:text-3xl">
                IN GIRO PER IL
              </span>
              <span className="block text-xl md:text-3xl lg:text-4xl">
                MONDO
              </span>
            </p>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="w-full flex justify-center mt-36 md:mt-40 lg:mt-44">
          <button
            onClick={handleScroll}
            className={[
              "inline-flex items-center gap-2 rounded-full bg-[#0863D6] px-12 md:px-20 py-4 text-sm md:text-base lg:text-lg font-semibold text-white shadow-2xl border border-white/40 backdrop-blur-sm transition-all duration-700 ease-out hover:bg-sky-500 hover:border-white hover:scale-[1.03]",
              showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            <FaSuitcaseRolling className="text-lg md:text-xl lg:text-2xl" />
            Prepara i bagagli!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;













