// src/components/ui/ContinentCard.jsx
import {
  FaUmbrellaBeach,
  FaGlobeEurope,
  FaPlaneDeparture,
  FaRoute,
  FaMapMarkedAlt,
  FaCity,
  FaLandmark,
  FaSnowflake,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";
import { GiLion } from "react-icons/gi";

// 🎨 Mappa categorie → colori + icona
const BADGE_STYLES = {
  // --- VIAGGI DI NOZZE / MARE ---
  mare: {
    icon: FaUmbrellaBeach,
    classes: "bg-sky-500/95 border-sky-400 text-white",
  },
  safari: {
    icon: GiLion,
    classes: "bg-amber-500/95 border-amber-400 text-white",
  },
  combinato: {
    icon: FaRoute,
    classes: "bg-emerald-500/95 border-emerald-400 text-white",
  },
  lontani: {
    icon: FaPlaneDeparture,
    classes: "bg-fuchsia-500/95 border-fuchsia-400 text-white",
  },
  iconico: {
    icon: FaStar,
    classes: "bg-yellow-300/95 border-yellow-200 text-slate-900",
  },
  italia: {
    icon: FaMapMarkedAlt,
    classes: "bg-indigo-500/95 border-indigo-400 text-white",
  },
  europa: {
    icon: FaGlobeEurope,
    classes: "bg-blue-600/95 border-blue-400 text-white",
  },

  // --- CAPITALI ---
  capitale: {
    icon: FaCity,
    classes: "bg-slate-900/90 border-slate-700 text-white",
  },
  capitali: {
    icon: FaCity,
    classes: "bg-slate-900/90 border-slate-700 text-white",
  },
  nordica: {
    icon: FaSnowflake,
    classes: "bg-sky-600/95 border-sky-400 text-white",
  },
  est: {
    icon: FaLandmark,
    classes: "bg-rose-500/95 border-rose-400 text-white",
  },
  centro: {
    icon: FaLandmark,
    classes: "bg-violet-500/95 border-violet-400 text-white",
  },
  mediterranea: {
    icon: FaUmbrellaBeach,
    classes: "bg-orange-500/95 border-orange-400 text-white",
  },

  // fallback
  default: {
    icon: FaGlobeEurope,
    classes: "bg-slate-800/85 border-slate-600 text-white",
  },
};

// 🔍 Trova configurazione badge
const getBadgeConfig = (badge) => {
  if (!badge) return BADGE_STYLES.default;

  const key = badge.toLowerCase().trim();
  const firstWord = key.split(" ")[0]; // es: "Mare Italia" → "mare"
  const found =
    BADGE_STYLES[key] ||
    BADGE_STYLES[firstWord] ||
    BADGE_STYLES.default;

  return found;
};

const ContinentCard = ({
  image,
  title,
  description,
  badge,
  period,
  region,
}) => {
  const { icon: Icon, classes } = getBadgeConfig(badge);
  const hasImage = Boolean(image);

  return (
    <div className="group rounded-3xl overflow-hidden bg-white shadow-lg border border-slate-100 flex flex-col h-full">
      {/* IMG + BADGE */}
      <div className="relative h-60 sm:h-64 md:h-56 overflow-hidden bg-slate-200">
        {hasImage ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-linear-to-br from-slate-200 via-slate-300 to-slate-400" />
        )}

        {badge && (
          <span
            className={`absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wide shadow-md ${classes}`}
          >
            <Icon className="w-3.5 h-3.5" />
            {badge}
          </span>
        )}
      </div>

      {/* TEXT */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-slate-900 text-base md:text-lg">
          {title}
        </h3>

        {region && (
          <p className="text-xs font-medium text-slate-500 mb-1">
            {region}
          </p>
        )}

        <p className="mt-1 text-sm text-slate-700 leading-relaxed text-justify flex-1">
          {description}
        </p>

        {period && (
          <div className="mt-3 inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold text-sky-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1">
            <FaCalendarAlt className="w-3.5 h-3.5 text-[#0863D6]" />
            <span>{period}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContinentCard;







