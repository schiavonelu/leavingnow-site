// src/sections/shared/SeasonalTeaserCompact.jsx
import { Link } from "react-router-dom";
import { MapPinned, MessageCircle, ArrowRight } from "lucide-react";

const SeasonalTeaserCompact = () => {
  return (
    <section className="py-10 md:py-12 bg-[#F8FAFC] border-t border-[#E2E8F0] mt-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-5 md:p-6 flex flex-col md:flex-row gap-5 md:gap-6 items-start md:items-center">
          {/* Icona */}
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#E8F1FD] text-[#0863D6] shrink-0">
            <MapPinned className="w-5 h-5" />
          </div>

          {/* Testo */}
          <div className="flex-1 space-y-2 text-left">
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#EB2480]">
              Ancora indeciso?
            </p>
            <h3 className="text-base md:text-lg font-semibold text-[#132C50]">
              Altre idee su dove e quando andare
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed text-justify">
              Se ti piace questa destinazione ma stai ancora valutando il
              periodo migliore o alternative, puoi ispirarti nella sezione
              dedicata alle mete stagionali oppure parlarne direttamente con
              noi: il viaggio lo costruiamo insieme, senza offerte standard.
            </p>
          </div>

          {/* CTA */}
          <div className="w-full md:w-auto flex flex-col gap-2">
            <Link
              to="/mete-stagionali"
              className="inline-flex w-full justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold bg-[#0EA5E9] text-white border border-[#0EA5E9] hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              Guarda le mete stagionali
            </Link>

            <Link
              to="/contatti"
              className="inline-flex w-full justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold border border-slate-400 text-slate-700 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Parla con un consulente
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalTeaserCompact;
