// src/components/.../SeasonalHighlightSection.jsx
import { Link } from "react-router-dom";
import { Plane, Building2, Waves, Globe2 } from "lucide-react";
import heroImg from "../../assets/destination/hero.webp";

import { getActiveSeasonForNow } from "../../config/seasonalSalesConfig";
import { SEASONS } from "../../data/mete-stagionali";
import { getSeasonImageBySlug } from "../../data/mete-stagionali-images";

// 🔹 dati estratti in JSON
import CARD_CAMPAIGN_MAP from "../../data/seasonalCardCampaignMap.json";
import CAMPAIGN_HIGHLIGHTS from "../../data/campaignHighlights.json";

// etichetta CTA stagionali (tenuta come funzione se vuoi personalizzarla in futuro)
const getSeasonalCtaLabel = () => "Scopri le mete stagionali";

const buildTitleFromCampaigns = (campaigns) => {
  if (!campaigns || campaigns.length === 0) {
    return "Prossime partenze da programmare";
  }

  const labels = campaigns.slice(0, 3).map((c) => c.label);

  if (labels.length === 1) return `${labels[0]}`;
  if (labels.length === 2) return `${labels[0]} e ${labels[1]}`;
  return `${labels[0]}, ${labels[1]} e ${labels[2]}`;
};

// 🔹 tutte le card stagionali in un array unico
const buildAllSeasonalCards = () => {
  const cards = [];
  SEASONS.forEach((season) => {
    (season.cards || []).forEach((card) => {
      cards.push({
        ...card,
        seasonId: season.id,
      });
    });
  });
  return cards;
};

// 🔹 immagine hero random SOLO tra le card vendibili oggi
const getHeroImageForToday = (seasonId, campaigns) => {
  const allCards = buildAllSeasonalCards();

  const activeCampaignIds = new Set(campaigns.map((c) => c.id));
  const primaryCampaign = campaigns[0] || null;

  const cardHasActiveCampaign = (card) => {
    const ids = CARD_CAMPAIGN_MAP[card.title];
    if (!ids || ids.length === 0) return false;
    return ids.some((id) => activeCampaignIds.has(id));
  };

  const activeCards = allCards.filter(cardHasActiveCampaign);

  let candidateCards = activeCards;

  if (primaryCampaign) {
    const primaryCards = activeCards.filter((card) => {
      const ids = CARD_CAMPAIGN_MAP[card.title] || [];
      return ids.includes(primaryCampaign.id);
    });
    if (primaryCards.length > 0) {
      candidateCards = primaryCards;
    }
  }

  const slugPool = candidateCards
    .map((c) => c.slug)
    .filter(Boolean);

  const imagePool = slugPool
    .map((slug) => getSeasonImageBySlug(slug))
    .filter(Boolean);

  if (imagePool.length === 0) {
    return heroImg;
  }

  const index = Math.floor(Math.random() * imagePool.length);
  return imagePool[index];
};

// 🔹 stile del banner in base alla stagione
const getSeasonGradientClasses = (seasonId) => {
  switch (seasonId) {
    case "inverno":
      return "from-slate-900 via-slate-900/95 to-[#0F172A]";
    case "primavera":
      return "from-emerald-900 via-sky-900/90 to-slate-900";
    case "estate":
      return "from-sky-900 via-cyan-900/90 to-slate-900";
    case "autunno":
      return "from-amber-900 via-orange-900/90 to-slate-900";
    default:
      return "from-slate-900 via-slate-900/95 to-[#0F172A]";
  }
};

const SeasonalHighlightSection = () => {
  const { seasonId, campaigns } = getActiveSeasonForNow();

  const heroImage = getHeroImageForToday(seasonId, campaigns);
  const gradientClasses = getSeasonGradientClasses(seasonId);

  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  // Helper semplici su mese/giorno
  const isBefore = (m, d) => {
    if (month < m) return true;
    if (month > m) return false;
    return day < d;
  };

  const isAfter = (m, d) => {
    if (month > m) return true;
    if (month < m) return false;
    return day > d;
  };

  // 🔹 FASI:
  // A) prima del 7 gennaio → stagionali + capitali
  const phaseA_before7Jan = isBefore(1, 7);

  // B) 7 gennaio – 14 febbraio → mete stagionali, capitali, mare (in coda)
  const phaseB_7Jan_14Feb =
    !phaseA_before7Jan && isBefore(2, 15); // fino al 14/2 incluso

  // C) 15 febbraio – 20 agosto → mare in PRIMO piano
  const phaseC_15Feb_20Aug =
    !phaseA_before7Jan && !phaseB_7Jan_14Feb && !isAfter(8, 20);

  // D) dal 21 agosto → niente mare, focus stagionali (mercatini, Capodanno, ecc.)
  const phaseD_post20Aug = isAfter(8, 20);

  const showMareButtons = phaseB_7Jan_14Feb || phaseC_15Feb_20Aug;
  const showMeteStagionali = true;
  const showCapitali = true;

  const dynamicHighlights = campaigns
    .map((c) => CAMPAIGN_HIGHLIGHTS[c.id])
    .filter(Boolean)
    .slice(0, 3);

  const title = buildTitleFromCampaigns(campaigns);

  // 🔹 CTA in ordine diverso a seconda della fase
  const renderCtas = () => {
    const buttons = [];

    if (phaseC_15Feb_20Aug && showMareButtons) {
      // 👉 15 febbraio – 20 agosto: MARE IN PRIMO PIANO
      buttons.push(
        <Link
          key="mare-italia"
          to="/mare-italia"
          className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition"
        >
          <Waves className="w-4 h-4 mr-2" />
          Mare Italia: isole & coste
        </Link>
      );
      buttons.push(
        <Link
          key="mare-estero"
          to="/mare-estero"
          className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
        >
          <Globe2 className="w-4 h-4 mr-2" />
          Mare estero tra isole & oceano
        </Link>
      );

      if (showMeteStagionali) {
        buttons.push(
          <Link
            key="mete-stagionali"
            to={`/mete-stagionali#${seasonId}`}
            className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold bg-[#0369A1] text-white border border-[#0369A1] hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
          >
            <Plane className="w-4 h-4 mr-2" />
            {getSeasonalCtaLabel()}
          </Link>
        );
      }

      if (showCapitali) {
        buttons.push(
          <Link
            key="capitali"
            to="/citta-europee"
            className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
          >
            <Building2 className="w-4 h-4 mr-2" />
            Capitali e città europee
          </Link>
        );
      }
    } else {
      // 👉 Fasi A (prima del 7/1), B (7/1–14/2), D (post 20/8)
      // Ordine base: mete stagionali, capitali
      if (showMeteStagionali) {
        buttons.push(
          <Link
            key="mete-stagionali"
            to={`/mete-stagionali#${seasonId}`}
            className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold bg-[#0369A1] text-white border border-[#0369A1] hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
          >
            <Plane className="w-4 h-4 mr-2" />
            {getSeasonalCtaLabel()}
          </Link>
        );
      }

      if (showCapitali) {
        buttons.push(
          <Link
            key="capitali"
            to="/citta-europee"
            className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
          >
            <Building2 className="w-4 h-4 mr-2" />
            Capitali e città europee
          </Link>
        );
      }

      // NELLA FASE B (7 gennaio – 14 febbraio) aggiungiamo il mare in coda
      if (phaseB_7Jan_14Feb && showMareButtons) {
        buttons.push(
          <Link
            key="mare-italia"
            to="/mare-italia"
            className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition"
          >
            <Waves className="w-4 h-4 mr-2" />
            Mare Italia: isole & coste
          </Link>
        );
        buttons.push(
          <Link
            key="mare-estero"
            to="/mare-estero"
            className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition"
          >
            <Globe2 className="w-4 h-4 mr-2" />
            Mare estero tra isole & oceano
          </Link>
        );
      }
    }

    return buttons;
  };

  return (
    <section className="py-6 md:py-8 bg-[#0F172A]">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`rounded-3xl border border-slate-700/70 bg-linear-to-br ${gradientClasses} overflow-hidden shadow-lg flex flex-col md:flex-row md:items-stretch`}
        >
          {/* Testo */}
          <div className="w-full md:w-3/5 p-5 md:p-6 flex flex-col gap-3 md:justify-center">
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#EB2480] text-center md:text-left">
              Prossime partenze da programmare
            </p>

            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-justify">
              {title}
            </h2>

            <p className="text-sm md:text-base text-slate-200 leading-relaxed text-justify">
              Ti mostriamo i tipi di viaggio su cui ha senso muoversi ora, così
              puoi bloccare le soluzioni migliori e programmare con calma. Le
              campagne più urgenti (più vicine alla fine del periodo di vendita)
              sono quelle che vedi più in evidenza.
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
              <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-slate-200 text-justify">
                {dynamicHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0EA5E9]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA ROW */}
            <div className="mt-3 flex flex-col sm:flex-row flex-wrap gap-3">
              {renderCtas()}
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




















