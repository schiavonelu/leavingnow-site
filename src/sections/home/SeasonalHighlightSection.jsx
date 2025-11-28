// src/sections/home/SeasonalHighlightSection.jsx
import { Link } from "react-router-dom";
import { Plane, Building2 } from "lucide-react";
import heroImg from "../../assets/destination/hero.webp";

// ⬇️ Importiamo la logica di vendita
import { getActiveSeasonForNow } from "../../config/seasonalSalesConfig";

const SeasonalHighlightSection = () => {
  const season = getActiveSeasonForNow(); // inverno / primavera / estate / autunno in base alla data

  return (
    <section className="py-6 md:py-8 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-900/95 to-[#0F172A] overflow-hidden shadow-lg flex flex-col md:flex-row md:items-stretch">
          {/* Testo */}
          <div className="w-full md:w-3/5 p-5 md:p-6 flex flex-col gap-3 md:justify-center">
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#EB2480] text-center md:text-left">
              {season.badge}
            </p>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-justify">
              {season.title}
            </h2>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed text-justify">
              {season.intro}
            </p>

            <ul className="mt-1 space-y-1.5 text-xs md:text-sm text-slate-200">
              {season.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA principali */}
            <div className="mt-3 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to={`/mete-stagionali#${season.id}`}
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold bg-[#0369A1] text-white border border-[#0369A1] hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
              >
                <Plane className="w-4 h-4 mr-2" />
                {season.ctaLabel}
              </Link>

              <Link
                to="/mete-capitali"
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold border border-slate-500 text-slate-100 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Preferisci una capitale europea?
              </Link>
            </div>

            {/* CTA secondaria */}
            <div className="mt-2">
              <Link
                to="/contatti"
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2 text-[11px] md:text-xs font-semibold border border-slate-600 text-slate-200 hover:border-[#EB2480] hover:text-[#EB2480] transition"
              >
                Sei indeciso? Parliamone insieme
              </Link>
            </div>
          </div>

          {/* Immagine */}
          <div className="w-full md:w-2/5">
            <div className="relative h-48 md:h-full">
              <img
                src={heroImg}
                alt={`Mete stagionali - ${season.label}`}
                className="h-full w-full object-cover md:rounded-l-none md:rounded-r-3xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent md:bg-gradient-to-l pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalHighlightSection;








