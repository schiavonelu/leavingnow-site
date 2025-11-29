// src/sections/home/SeasonalHighlightSection.jsx
import { Link } from "react-router-dom";
import { Plane, Building2, Waves, Globe2 } from "lucide-react";
import heroImg from "../../assets/destination/hero.webp";

import { getActiveSeasonForNow } from "../../config/seasonalSalesConfig";
import { CAPITAL_CITIES } from "../../data/mete-capitali";

// Qui poi potrai sostituire heroImg con immagini dedicate per stagione
const SEASON_IMAGES = {
  inverno: [heroImg],
  primavera: [heroImg],
  estate: [heroImg],
  autunno: [heroImg],
};

const getRandomImageForSeason = (seasonId) => {
  const images = SEASON_IMAGES[seasonId] || [heroImg];
  const index = Math.floor(Math.random() * images.length);
  return images[index];
};

const getSeasonalCtaLabel = () => "Scopri le mete stagionali";

const CAMPAIGN_HIGHLIGHTS = {
  "mare-italia":
    "Mare Italia: Sardegna, Sicilia, Puglia, Calabria e grandi classici estivi.",
  "mare-europa-isole":
    "Mare Europa e isole: Grecia, Spagna, Canarie, Baleari, Croazia e altri mari vicini.",
  "mare-inverno":
    "Mare d’inverno: Canarie, Egitto, Dubai e altre mete al caldo.",
  crociere:
    "Crociere nel Mediterraneo, Nord Europa o Caraibi con itinerari su misura.",
  "viaggi-intercontinentali":
    "Viaggi intercontinentali e combinati città+mare, anche per viaggi di nozze.",
  "mercatini-natale":
    "Mercatini di Natale tra Trentino, Austria, Germania e Alsazia.",
  capodanno:
    "Capodanno in città europee o al caldo, tra piazze illuminate e feste.",
  carnevale:
    "Carnevale tra Venezia, Nizza, Costa Azzurra e altre città in festa.",
  "san-valentino":
    "Weekend romantici per San Valentino, tra capitali europee e hotel di charme.",
  "tulipani-amsterdam":
    "Fioritura dei tulipani: Amsterdam, Keukenhof e dintorni.",
  "ciliegi-giappone":
    "Fioritura dei ciliegi in Giappone (hanami) con itinerari su misura.",
  pasqua:
    "City break e mare per Pasqua e i ponti di primavera, in Italia ed Europa.",
  oktoberfest:
    "Oktoberfest a Monaco e in Baviera, abbinabile a castelli e città vicine.",
  "benessere-spa":
    "Weekend benessere & spa in Italia ed Europa, tutto l’anno.",
};

const getSuggestedCapitalsForCampaigns = (campaigns, count = 2) => {
  if (!CAPITAL_CITIES || CAPITAL_CITIES.length === 0) return [];
  return CAPITAL_CITIES.slice(0, count);
};

const buildTitleFromCampaigns = (campaigns) => {
  if (!campaigns || campaigns.length === 0) {
    return "Prossime partenze da programmare";
  }

  const labels = campaigns.slice(0, 3).map((c) => c.label);
  if (labels.length === 1) return `Prossime partenze: ${labels[0]}`;
  if (labels.length === 2)
    return `Prossime partenze: ${labels[0]} e ${labels[1]}`;
  return `Prossime partenze: ${labels[0]}, ${labels[1]} e ${labels[2]}`;
};

const SeasonalHighlightSection = () => {
  const { seasonId, campaigns } = getActiveSeasonForNow();
  const heroImage = getRandomImageForSeason(seasonId);

  const today = new Date();
  const month = today.getMonth() + 1;
  const isMareSeason = month >= 3 && month <= 9;

  const hasMareCampaign = isMareSeason
    ? campaigns.some((c) =>
        ["mare-italia", "mare-europa-isole", "mare-inverno"].includes(c.id)
      )
    : false;

  const dynamicHighlights = campaigns
    .map((c) => CAMPAIGN_HIGHLIGHTS[c.id])
    .filter(Boolean)
    .slice(0, 3);

  const title = buildTitleFromCampaigns(campaigns);
  const mainCtaLabel = getSeasonalCtaLabel();

  return (
    <section className="py-6 md:py-8 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-3xl border border-slate-700/70 bg-linear-to-br from-slate-900 via-slate-900/95 to-[#0F172A] overflow-hidden shadow-lg flex flex-col md:flex-row md:items-stretch">
          {/* Testo */}
          <div className="w-full md:w-3/5 p-5 md:p-6 flex flex-col gap-3 md:justify-center">
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#EB2480] text-center md:text-left">
              Prossime partenze da programmare
            </p>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              {title}
            </h2>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Ti mostriamo i tipi di viaggio su cui ha senso muoversi ora, così
              puoi bloccare le soluzioni migliori e programmare con calma.
            </p>

            {campaigns.length > 0 && (
              <div className="mt-1 flex flex-wrap gap-1.5">
                {campaigns.map((c) => (
                  <span
                    key={c.id}
                    className="inline-flex items-center rounded-full bg-slate-800/70 border border-slate-600 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-100"
                  >
                    {c.label}
                  </span>
                ))}
              </div>
            )}

            {dynamicHighlights.length > 0 && (
              <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-slate-200">
                {dynamicHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-3 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to={`/mete-stagionali#${seasonId}`}
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold bg-[#0369A1] text-white border border-[#0369A1] hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
              >
                <Plane className="w-4 h-4 mr-2" />
                {mainCtaLabel}
              </Link>

              <Link
                to="/mete-capitali"
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
              >
                <Building2 className="w-4 h-4 mr-2" />
                Capitali e città europee
              </Link>

              {hasMareCampaign && (
                <>
                  <Link
                    to="/mete-mare-italia"
                    className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold border border-slate-500 text-slate-100 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition"
                  >
                    <Waves className="w-4 h-4 mr-2" />
                    Mare Italia: isole & coste
                  </Link>

                  <Link
                    to="/mete-mare-estero"
                    className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-5 py-2.5 text-xs md:text-sm font-semibold border border-slate-500 text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
                  >
                    <Globe2 className="w-4 h-4 mr-2" />
                    Mare estero tra isole & oceano
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Immagine stagionale */}
          <div className="w-full md:w-2/5">
            <div className="relative h-48 md:h-full">
              <img
                src={heroImage}
                alt="Mete stagionali e prossime partenze"
                className="h-full w-full object-cover md:rounded-l-none md:rounded-r-3xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 via-slate-900/10 to-transparent md:bg-linear-to-l pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalHighlightSection;
















