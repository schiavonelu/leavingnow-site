// src/sections/shared/AgencyIntroStrip.jsx
import { Link } from "react-router-dom";
import { FaCalendarCheck } from "react-icons/fa";
import { Mail } from "lucide-react";
import { useInView } from "../../hooks/useInView";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";

const AgencyIntroStrip = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      className="w-full py-12 md:py-16 bg-[#132C50]"
      aria-labelledby="cta-contatti-title"
      ref={ref}
    >
      <div
        className={[
          "w-full px-4 md:px-8 text-center transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
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
          costruire insieme il <strong>viaggio su misura</strong> più adatto a te:
          vacanza mare, tour, crociera o viaggio di nozze.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contatti"
            className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-8 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0863D6] bg-[#0863D6] text-white hover:bg-white hover:text-[#0863D6] transition"
          >
            <Mail className="text-lg mr-2" />
            Scrivici per informazioni
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

export default AgencyIntroStrip;

