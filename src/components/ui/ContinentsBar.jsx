import { NavLink } from "react-router-dom";
import {
  FaGlobeEurope,
  FaGlobeAmericas,
  FaGlobeAfrica,
  FaGlobeAsia,
} from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";

const continents = [
  {
    to: "/destinazioni/europa",
    label: "Europa",
    icon: FaGlobeEurope,
  },
  {
    to: "/destinazioni/americhe-caraibi",
    label: "Americhe & Caraibi",
    icon: FaGlobeAmericas,
  },
  {
    to: "/destinazioni/africa",
    label: "Africa",
    icon: FaGlobeAfrica,
  },
  {
    to: "/destinazioni/asia",
    label: "Asia",
    icon: FaGlobeAsia,
  },
  {
    to: "/destinazioni/oceania",
    label: "Oceania",
    icon: GiPalmTree,
  },
];

const ContinentsBar = () => {
  return (
    <nav className="w-full sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-3">
        {/* Mobile: scroll orizzontale se non ci sta */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {continents.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "inline-flex items-center gap-2 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-[11px] md:text-xs font-semibold border whitespace-nowrap transition-all",
                  isActive
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-slate-50 text-navy-700 border-slate-200 hover:bg-primary/5 hover:border-primary/70 hover:text-primary",
                ].join(" ")
              }
            >
              <Icon className="text-xs md:text-sm" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ContinentsBar;

