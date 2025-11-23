import { Link } from "react-router-dom";
import { FaUsers, FaPhoneAlt } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";

const AgencyIntroStrip = ({ showHeading = true }) => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section className="bg-slate-50 py-10 md:py-14">
      <div
        ref={ref}
        className={[
          "max-w-6xl mx-auto px-4",
          "transform transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        {/* Intestazione opzionale */}
        {showHeading && (
          <div className="text-center mb-6 md:mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">
              La nostra agenzia
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Leaving Now, agenzia viaggi ad Aversa
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700
 max-w-2xl mx-auto">
              Un team di consulenti che progetta viaggi su misura: vacanze,
              crociere, viaggi di nozze e tour organizzati con partenza da
              Aversa e dintorni.
            </p>
          </div>
        )}

        {/* Card collegate a Chi Siamo / Contatti */}
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {/* Card CHI SIAMO */}
          <Link
            to="/chi-siamo"
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-3xl"
          >
            <article className="rounded-3xl bg-white border border-slate-200 shadow-sm p-5 md:p-7 flex flex-col h-full transition-all duration-200 group-hover:shadow-md group-hover:border-sky-400">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md transition-transform duration-200 group-hover:scale-105">
                  <FaUsers className="text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">
                    La nostra storia e il nostro metodo
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500">
                    Chi c&apos;è dietro Leaving Now.
                  </p>
                </div>
              </div>

              {/* Testo esteso solo da md in su */}
              <p className="hidden md:block text-sm md:text-base text-slate-700 leading-relaxed text-justify flex-1">
                Leaving Now è un&apos;<strong>agenzia viaggi ad Aversa</strong>{" "}
                nata dall&apos;ascolto delle persone: esigenze, tempi, budget e
                desideri. Costruiamo itinerari su misura, non pacchetti
                standard, grazie a una rete di partner selezionati in Italia e
                nel mondo.
              </p>

              <div className="mt-3 md:mt-5 flex items-center justify-between gap-2">
                {/* Micro copy mobile/desktop breve */}
                <p className="text-xs md:text-sm text-slate-500">
                  Scopri la nostra storia e il nostro metodo.
                </p>
                <span className="text-xs md:text-sm font-semibold text-sky-600 flex items-center gap-1">
                  Chi Siamo
                  <span className="text-base leading-none transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </article>
          </Link>

          {/* Card CONTATTI */}
          <Link
            to="/contatti"
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 rounded-3xl"
          >
            <article className="rounded-3xl bg-slate-950 text-slate-50 border border-slate-800 shadow-md p-5 md:p-7 flex flex-col h-full transition-all duration-200 group-hover:shadow-lg group-hover:border-sky-500">
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-md transition-transform duration-200 group-hover:scale-105">
                  <FaPhoneAlt className="text-xl" />
                </div>
                <div className="text-left">
                  <h3 className="text-base md:text-lg font-semibold text-white">
                    Vuoi parlare con noi?
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300">
                    Chiamaci, scrivici o vieni in agenzia.
                  </p>
                </div>
              </div>

              {/* Testo esteso solo da md in su */}
              <p className="hidden md:block text-sm md:text-base text-slate-200 leading-relaxed text-justify flex-1">
                Per preventivi, domande o idee di viaggio puoi contattarci
                quando vuoi: ti risponderemo con proposte chiare e la nostra
                assistenza prima, durante e dopo la partenza.
              </p>

              <div className="mt-3 md:mt-5 flex items-center justify-between gap-2">
                <p className="text-xs md:text-sm text-slate-300">
                  Richiedi un preventivo o fai una domanda in pochi clic.
                </p>
                <span className="text-xs md:text-sm font-semibold text-sky-400 flex items-center gap-1">
                  Contatti
                  <span className="text-base leading-none transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </article>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AgencyIntroStrip;





