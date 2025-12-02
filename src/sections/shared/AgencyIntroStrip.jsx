import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
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

        {/* UNA SOLA CARD: CONTATTI / PARLARE CON NOI */}
        <div className="max-w-xl mx-auto">
          <Link
            to="/contatti"
            className="group block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 rounded-3xl"
          >
            <article
              className="rounded-3xl bg-white text-slate-900 border border-slate-200 shadow-sm 
              p-6 md:p-7 flex flex-col h-full 
              transition-all duration-200 group-hover:shadow-md group-hover:border-sky-400"
            >
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md transition-transform duration-200 group-hover:scale-105">
                  <FaPhoneAlt className="text-2xl" />
                </div>

                <div className="text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                    Vuoi parlare con noi?
                  </h3>
                  <p className="text-sm md:text-base text-slate-500">
                    Scrivici o chiamaci per un confronto sul tuo prossimo
                    viaggio.
                  </p>
                </div>
              </div>

              <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify flex-1">
                Per preventivi, domande o idee di viaggio puoi contattarci in
                qualsiasi momento: ti risponderemo con{" "}
                <strong>proposte chiare</strong> e assistenza prima, durante e
                dopo la partenza, per <strong>viaggi di nozze</strong>,
                crociere e vacanze su misura.
              </p>

              <div className="mt-4 md:mt-6 flex items-center justify-end gap-2">
                <span className="text-sm md:text-sm font-semibold text-sky-600 flex items-center gap-1">
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