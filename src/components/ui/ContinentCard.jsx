import { FaSun } from "react-icons/fa";

const ContinentCard = ({ image, title, description, badge, period }) => {
  return (
    <div className="group rounded-3xl overflow-hidden bg-white shadow-lg border border-slate-100 flex flex-col h-full">
      {/* immagine + badge */}
      <div className="relative h-44 md:h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {badge && (
          <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-sky-500/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-md">
            {badge}
          </span>
        )}
      </div>

      {/* testo + periodo ideale */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-semibold text-slate-900 text-base md:text-lg mb-1">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed text-justify">
          {description}
        </p>

        {period && (
          <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-sky-700">
            <FaSun className="text-sky-500" />
            <span>Periodo ideale: {period}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContinentCard;
