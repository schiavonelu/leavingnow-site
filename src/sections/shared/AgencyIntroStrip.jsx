// src/sections/shared/AgencyIntroStrip.jsx
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { FaPhoneAlt } from "react-icons/fa";
=======
import { FaCalendarCheck } from "react-icons/fa";
import { Mail } from "lucide-react";
>>>>>>> 10d6796 (Dev)
import { useInView } from "../../hooks/useInView";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";

const AgencyIntroStrip = ({ showHeading = true }) => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      className="bg-slate-50 py-12 md:py-16"
      aria-labelledby={showHeading ? "cta-contatti-title" : undefined}
      ref={ref}
    >
      {/* BANNER FULL-BLEED A TUTTO SCHERMO */}
      <div
        className={[
          // full bleed rispetto al viewport
          "relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen",
          // stile banner
          "bg-[#132C50] py-10 md:py-14 px-4 md:px-8",
          "text-center transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
<<<<<<< HEAD

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
=======
        <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 text-[#0863D6]">
          Consulenza gratuita
        </p>

        <h2
          id="cta-contatti-title"
          className="text-2xl md:text-3xl font-bold text-white mb-3"
        >
          Vuoi parlare del tuo prossimo viaggio con noi?
        </h2>

        <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-8">
          Raccontaci chi sei, con chi viaggi e che tipo di esperienza stai
          cercando. Possiamo sentirci in agenzia ad Aversa o da remoto e
          costruire insieme il <strong>viaggio su misura</strong> più adatto a
          te: vacanza mare, tour, crociera o viaggio di nozze.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contatti"
            className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-8 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0863D6] bg-[#0863D6] text-white hover:bg-white hover:text-[#0863D6] transition"
          >
            <Mail className="text-lg mr-2" />
            Scrivici per informazioni
>>>>>>> 10d6796 (Dev)
          </Link>

          <a
            href={RESERVIO_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-8 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
          >
            <FaCalendarCheck className="mr-2" />
            Prenota una consulenza
          </a>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default AgencyIntroStrip;
=======
export default AgencyIntroStrip;












>>>>>>> 10d6796 (Dev)
