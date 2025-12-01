import { Link } from "react-router-dom";
import { FaUsers, FaPhoneAlt } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";

const AgencyIntroStrip = ({ showHeading = true }) => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      className="bg-slate-50 py-12 md:py-14"
      aria-labelledby={showHeading ? "agency-intro-heading" : undefined}
    >
      <div
        ref={ref}
        className={[
          "max-w-6xl mx-auto px-4",
          "transform transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        {/* 🔹 Heading di sezione SEO-friendly (opzionale) */}
        {showHeading && (
          <div className="mb-8 text-center md:text-left">
            <h2
              id="agency-intro-heading"
              className="text-xl md:text-2xl font-bold text-slate-900"
            >
              Agenzia viaggi ad Aversa per chi parte da nord Napoli e Caserta
            </h2>
            <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl">
              Leaving Now è l’agenzia viaggi di riferimento ad Aversa per
              <strong> viaggi su misura, viaggi di nozze, crociere</strong> e
              <strong> biglietteria aerea, treni e navi</strong>.
            </p>
          </div>
        )}

        <div className="grid gap-6 md:gap-6 md:grid-cols-2 text-center md:text-left">
          {/* CARD CHI SIAMO */}
          <Link
            to="/chi-siamo"
            className="group block mx-auto w-full max-w-md md:max-w-none focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-3xl"
          >
            <article
              className="rounded-3xl bg-white border border-slate-200 shadow-sm 
              p-6 md:p-7 flex flex-col h-full 
              transition-all duration-200 group-hover:shadow-md group-hover:border-sky-400"
            >
              <div className="flex items-center md:items-start justify-center md:justify-start gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md transition-transform duration-200 group-hover:scale-105">
                  <FaUsers className="text-2xl" />
                </div>

                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                    La nostra storia e il nostro metodo
                  </h3>
                  <p className="text-sm md:text-base text-slate-500">
                    Chi c’è dietro Leaving Now, agenzia viaggi ad Aversa.
                  </p>
                </div>
              </div>

              {/* Testo completo anche su mobile */}
              <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify flex-1">
                Leaving Now è un&apos;agenzia viaggi ad Aversa nata dall&apos;ascolto
                delle persone: esigenze, tempi, budget e desideri. Progettiamo
                <strong> viaggi su misura</strong>,{" "}
                <strong>viaggi di nozze personalizzati</strong>, crociere e
                itinerari per chi parte dall&apos;area nord di Napoli e Caserta,
                grazie a una rete di partner selezionati in Italia e nel mondo.
              </p>

              {/* LINK → ALLINEATO A DESTRA */}
              <div className="mt-4 md:mt-6 flex items-center justify-end gap-2">
                <span className="text-sm md:text-sm font-semibold text-sky-600 flex items-center gap-1">
                  Scopri chi siamo
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
            <article
              className="rounded-3xl bg-slate-950 text-slate-50 border border-slate-800 shadow-md 
              p-6 md:p-7 flex flex-col h-full 
              transition-all duration-200 group-hover:shadow-lg group-hover:border-sky-500"
            >
              <div className="flex items-center md:items-start justify-center md:justify-start gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-md transition-transform duration-200 group-hover:scale-105">
                  <FaPhoneAlt className="text-2xl" />
                </div>

                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    Vuoi parlare con noi?
                  </h3>
                  <p className="text-sm md:text-base text-slate-300">
                    Contatta la nostra agenzia viaggi ad Aversa.
                  </p>
                </div>
              </div>

              {/* Testo completo anche su mobile */}
              <p className="text-sm md:text-base text-slate-200 leading-relaxed text-justify flex-1">
                Per preventivi, domande o idee di viaggio puoi contattarci
                quando vuoi: ti risponderemo con{" "}
                <strong>proposte chiare</strong> e la nostra assistenza prima,
                durante e dopo la partenza. Siamo a disposizione per{" "}
                <strong>viaggi di nozze</strong>, crociere, vacanze su misura e
                per la <strong>biglietteria aerea, treni e navi</strong>.
              </p>

              {/* LINK → ALLINEATO A DESTRA */}
              <div className="mt-4 md:mt-6 flex items-center justify-end gap-2">
                <span className="text-sm md:text-sm font-semibold text-sky-400 flex items-center gap-1">
                  Vai alla pagina contatti
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







