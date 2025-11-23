import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaGlobeEurope,
  FaGlobeAmericas,
  FaGlobeAfrica,
  FaGlobeAsia,
  FaInfoCircle,
} from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import InnerHero from "../sections/shared/InnerHero.jsx";
import worldMap from "../assets/mondo.jpg";
import destinazioniHero from "../assets/pages/destinazioni.webp";

const Destinazioni = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [showCredits, setShowCredits] = useState(false);

  return (
    <>
      <InnerHero
        title="Destinazioni"
        subtitle="Europa, Americhe, Asia, Oceania: scegli il tuo orizzonte."
        image={destinazioniHero}
      />

      {/* SFONDO SEZIONE CON PALETTE */}
      <section className="py-12 md:py-16 bg-[#E8F1FD]">
        <div className="max-w-6xl mx-auto px-4">
          {/* Intro testo */}
          <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Esplora il mondo
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-[#132C50] mb-3">
              Scegli il continente direttamente dalla mappa
            </h2>
            <p className="text-sm md:text-base text-slate-700

">
              Clicca sull’area del mondo che ti ispira di più: verrai portato
              alle idee di viaggio dedicate a quel continente, per iniziare a
              progettare il tuo prossimo itinerario su misura.
            </p>
          </div>

          {/* MAPPA INTERATTIVA */}
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-[#132C50] bg-[#020617]">
              {/* Immagine della mappa */}
              <img
                src={worldMap}
                alt="Mappa del mondo"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />

              {/* Etichetta */}
              <div className="absolute top-3 left-4 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-amber-100 drop-shadow">
                World map
              </div>

              {/* Pulsante info crediti */}
              <div className="absolute top-3 right-4 z-10">
                <button
                  type="button"
                  onClick={() => setShowCredits((prev) => !prev)}
                  className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#132C50]/80 border border-[#718093] text-[#F9FAFB] hover:bg-[#132C50] hover:border-[#0863D6] transition shadow-md"
                  aria-label="Informazioni copyright immagine"
                >
                  <FaInfoCircle className="text-sm" />
                </button>

                {showCredits && (
                  <div className="mt-2 w-56 rounded-lg bg-[#020617]/95 border border-[#475569] text-[10px] md:text-xs text-[#E5E7EB] shadow-xl p-3 absolute right-0">
                    <p className="font-semibold mb-1 text-[11px]">
                      Crediti immagine
                    </p>
                    <p className="leading-snug">
                      Foto di{" "}
                      <a
                        href="https://www.pexels.com/it-it/%40aaditya-arora-188236/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-[#0863D6]"
                      >
                        Aaditya Arora
                      </a>{" "}
                      su{" "}
                      <a
                        href="https://www.pexels.com/it-it/foto/illustrazione-della-mappa-del-mondo-592753/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline hover:text-[#0863D6]"
                      >
                        Pexels
                      </a>
                      .
                    </p>
                    <button
                      type="button"
                      onClick={() => setShowCredits(false)}
                      className="mt-2 text-[10px] text-[#CBD5E1] hover:text-[#0863D6] underline"
                    >
                      Chiudi
                    </button>
                  </div>
                )}
              </div>

              {/* AMERICHE */}
              <Link
                to="/destinazioni/americhe-caraibi"
                className="group absolute left-[10%] top-[34%] w-[24%] h-[40%] flex items-center justify-center"
              >
                <div className="inline-flex flex-col items-center gap-1 rounded-full bg-[#132C50]/80 px-3 py-2 border border-[#E8F1FD]/80 shadow-lg backdrop-blur-sm group-hover:scale-105 group-hover:bg-[#0863D6]/90 transition-transform duration-200">
                  <FaGlobeAmericas className="text-[#E8F1FD] text-base md:text-lg" />
                  <span className="text-[11px] md:text-xs font-semibold text-[#F9FAFB] whitespace-nowrap">
                    Americhe & Caraibi
                  </span>
                </div>
              </Link>

              {/* EUROPA */}
              <Link
                to="/destinazioni/europa"
                className="group absolute left-[43%] top-[27%] w-[14%] h-[22%] flex items-center justify-center"
              >
                <div className="inline-flex flex-col items-center gap-1 rounded-full bg-[#0863D6]/85 px-3 py-2 border border-[#E8F1FD]/80 shadow-lg backdrop-blur-sm group-hover:scale-105 group-hover:bg-[#0648a3]/95 transition-transform duration-200">
                  <FaGlobeEurope className="text-[#F9FAFB] text-base md:text-lg" />
                  <span className="text-[11px] md:text-xs font-semibold text-[#F9FAFB] whitespace-nowrap">
                    Europa
                  </span>
                </div>
              </Link>

              {/* AFRICA – lascio il mood caldo amber, che stacca bene */}
              <Link
                to="/destinazioni/africa"
                className="group absolute left-[46%] top-[52%] w-[18%] h-[30%] flex items-center justify-center"
              >
                <div className="inline-flex flex-col items-center gap-1 rounded-full bg-amber-900/85 px-3 py-2 border border-amber-200/80 shadow-lg backdrop-blur-sm group-hover:scale-105 group-hover:bg-amber-800/95 transition-transform duration-200">
                  <FaGlobeAfrica className="text-amber-50 text-base md:text-lg" />
                  <span className="text-[11px] md:text-xs font-semibold text-[#F9FAFB] whitespace-nowrap">
                    Africa
                  </span>
                </div>
              </Link>

              {/* ASIA – uso il tuo accent rosa */}
              <Link
                to="/destinazioni/asia"
                className="group absolute right-[11%] top-[30%] w-[26%] h-[34%] flex items-center justify-center"
              >
                <div className="inline-flex flex-col items-center gap-1 rounded-full bg-[#EB2480]/85 px-3 py-2 border border-[#F9A9C9]/80 shadow-lg backdrop-blur-sm group-hover:scale-105 group-hover:bg-[#C01C64]/95 transition-transform duration-200">
                  <FaGlobeAsia className="text-[#FDF2F8] text-base md:text-lg" />
                  <span className="text-[11px] md:text-xs font-semibold text-[#F9FAFB] whitespace-nowrap">
                    Asia
                  </span>
                </div>
              </Link>

              {/* OCEANIA – di nuovo su blu/teal ma armonizzato */}
              <Link
                to="/destinazioni/oceania"
                className="group absolute right-[14%] top-[67%] w-[18%] h-[24%] flex items-center justify-center"
              >
                <div className="inline-flex flex-col items-center gap-1 rounded-full bg-[#0f766e]/85 px-3 py-2 border border-[#A5F3FC]/80 shadow-lg backdrop-blur-sm group-hover:scale-105 group-hover:bg-[#0e4f4a]/95 transition-transform duration-200">
                  <GiPalmTree className="text-[#ECFEFF] text-base md:text-lg" />
                  <span className="text-[11px] md:text-xs font-semibold text-[#F9FAFB] whitespace-nowrap">
                    Oceania
                  </span>
                </div>
              </Link>
            </div>

            <p className="mt-4 text-[11px] md:text-xs text-slate-700

 text-center">
              La mappa è indicativa: clicca sull’area che ti interessa per
              scoprire le destinazioni e le idee di viaggio dedicate a quel
              continente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinazioni;







