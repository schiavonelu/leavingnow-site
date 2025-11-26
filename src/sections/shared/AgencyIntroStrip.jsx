import { Link } from "react-router-dom";
import { FaUsers, FaPhoneAlt } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";

const AgencyIntroStrip = ({ showHeading = true }) => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section className="bg-slate-50 py-12 md:py-14">
      <div
        ref={ref}
        className={[
          "max-w-6xl mx-auto px-4",
          "transform transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <div className="grid gap-6 md:gap-6 md:grid-cols-2 text-center md:text-left">
          
          {/* CARD CHI SIAMO */}
          <Link
            to="/chi-siamo"
            className="group block mx-auto w-full max-w-md md:max-w-none focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-3xl"
          >
            <article className="rounded-3xl bg-white border border-slate-200 shadow-sm 
              p-6 md:p-7 flex flex-col h-full 
              transition-all duration-200 group-hover:shadow-md group-hover:border-sky-400">
              
              <div className="flex items-center md:items-start justify-center md:justify-start gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md transition-transform duration-200 group-hover:scale-105">
                  <FaUsers className="text-2xl" />
                </div>

                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                    La nostra storia e il nostro metodo
                  </h3>
                  <p className="text-sm md:text-base text-slate-500">
                    Chi c’è dietro Leaving Now.
                  </p>
                </div>
              </div>

              {/* Testo completo anche su mobile */}
              <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify flex-1">
                Leaving Now è un'agenzia viaggi ad Aversa nata dall'ascolto delle persone: esigenze,
                tempi, budget e desideri. Costruiamo itinerari su misura, non pacchetti standard,
                grazie a una rete di partner selezionati in Italia e nel mondo.
              </p>

              {/* LINK → ALLINEATO A DESTRA */}
              <div className="mt-4 md:mt-6 flex items-center justify-end gap-2">
                <span className="text-sm md:text-sm font-semibold text-sky-600 flex items-center gap-1">
                  Chi Siamo
                  <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </div>
            </article>
          </Link>

          {/* CARD CONTATTI */}
          <Link
            to="/contatti"
            className="group block mx-auto w-full max-w-md md:max-w-none focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-3xl"
          >
            <article className="rounded-3xl bg-slate-950 text-slate-50 border border-slate-800 shadow-md 
              p-6 md:p-7 flex flex-col h-full 
              transition-all duration-200 group-hover:shadow-lg group-hover:border-sky-500">
              
              <div className="flex items-center md:items-start justify-center md:justify-start gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-md transition-transform duration-200 group-hover:scale-105">
                  <FaPhoneAlt className="text-2xl" />
                </div>

                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    Vuoi parlare con noi?
                  </h3>
                  <p className="text-sm md:text-base text-slate-300">
                    Chiamaci o scrivici quando vuoi.
                  </p>
                </div>
              </div>

              {/* Testo completo anche su mobile */}
              <p className="text-sm md:text-base text-slate-200 leading-relaxed text-justify flex-1">
                Per preventivi, domande o idee di viaggio puoi contattarci quando vuoi: ti risponderemo
                con proposte chiare e la nostra assistenza prima, durante e dopo la partenza.
              </p>

              {/* LINK → ALLINEATO A DESTRA */}
              <div className="mt-4 md:mt-6 flex items-center justify-end gap-2">
                <span className="text-sm md:text-sm font-semibold text-sky-400 flex items-center gap-1">
                  Contatti
                  <span className="text-lg leading-none transition-transform duration-200 group-hover:translate-x-0.5">
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






