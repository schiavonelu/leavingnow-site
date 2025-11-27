// src/sections/home/SeasonalHighlightSection.jsx
import { Link } from "react-router-dom";
import { Plane } from "lucide-react"; // ⬅️ cambiato CalendarRange -> Plane
import heroImg from "../../assets/destination/hero.webp";

const getSeasonContent = () => {
  const month = new Date().getMonth(); // 0-11

  // ❄️ INVERNO: Dic–Gen–Feb
  if (month === 11 || month === 0 || month === 1) {
    return {
      id: "inverno",
      label: "Inverno",
      badge: "Mete consigliate per questo inverno",
      title:
        "L’inverno è perfetto per rallentare e scegliere un viaggio che scaldi davvero.",
      intro:
        "Dalle città illuminate alla neve, fino al Nord Europa: alcune idee per vivere al meglio la stagione.",
      highlights: [
        "Atmosfere intime, luci soffuse, mercatini e cultura",
        "Montagna e benessere tra spa panoramiche e rifugi esclusivi",
        "City break in bassa stagione con musei, gastronomia e vita locale",
      ],
      ctaLabel: "Scopri le mete stagionali d’inverno",
    };
  }

  // 🌸 PRIMAVERA: Mar–Apr–Mag
  if (month >= 2 && month <= 4) {
    return {
      id: "primavera",
      label: "Primavera",
      badge: "Mete consigliate per questa primavera",
      title: "La primavera è il momento ideale per ripartire con leggerezza.",
      intro:
        "Città vive, fioriture, primi weekend al mare: qui trovi alcuni spunti per questo periodo.",
      highlights: [
        "City break con clima piacevole e tanti nuovi stimoli",
        "Parchi, fioriture e borghi immersi nella natura",
        "Weekend al mare o tour soft tra arte, cultura e gastronomia",
      ],
      ctaLabel: "Scopri le mete stagionali di primavera",
    };
  }

  // ☀️ ESTATE: Giu–Lug–Ago
  if (month >= 5 && month <= 7) {
    return {
      id: "estate",
      label: "Estate",
      badge: "Mete consigliate per questa estate",
      title:
        "Estate è sinonimo di mare, libertà e grandi itinerari da vivere con calma.",
      intro:
        "Dalle isole mediterranee ai grandi viaggi lontani: qualche idea da cui partire.",
      highlights: [
        "Isole mediterranee e panorami che abbracciano il mare",
        "Grandi itinerari tra natura, città iconiche e strade infinite",
        "Crociere, combinati mare + tour e viaggi più lunghi",
      ],
      ctaLabel: "Scopri le mete stagionali estive",
    };
  }

  // 🍂 AUTUNNO: Set–Ott–Nov
  return {
    id: "autunno",
    label: "Autunno",
    badge: "Mete consigliate per questo autunno",
    title:
      "L’autunno è fatto di colori caldi, ritmi lenti e luoghi da vivere con calma.",
    intro:
      "È il momento ideale per città meno affollate, foliage e viaggi di gusto e benessere.",
    highlights: [
      "Foliage, laghi e colline dai colori caldi",
      "City break in bassa stagione, eleganti e vivibili",
      "Benessere, terme ed esperienze enogastronomiche",
    ],
    ctaLabel: "Scopri le mete stagionali d’autunno",
  };
};

const SeasonalHighlightSection = () => {
  const season = getSeasonContent();

  return (
    <section className="py-12 md:py-16 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900 via-slate-900/95 to-[#0F172A] overflow-hidden shadow-lg flex flex-col md:flex-row">
          {/* Testo */}
          <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col gap-4">
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#EB2480] text-center">
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
                  <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <Link
                to={`/mete-stagionali#${season.id}`}
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold bg-[#0369A1] text-white border border-[#0369A1] hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
              >
                <Plane className="w-4 h-4 mr-2" /> {/* ⬅️ icona aereo */}
                {season.ctaLabel}
              </Link>

              <Link
                to="/contatti"
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
              >
                Sei indeciso? Parliamone insieme
              </Link>
            </div>
          </div>

          {/* Immagine */}
          <div className="w-full md:w-2/5 relative h-52 md:h-auto">
            <img
              src={heroImg}
              alt={`Mete stagionali - ${season.label}`}
              className="h-full w-full object-cover md:rounded-l-none md:rounded-r-3xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent md:bg-gradient-to-l" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalHighlightSection;

