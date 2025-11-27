import { Link, useLocation } from "react-router-dom";
import { FaHome, FaMapMarkedAlt } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

const Breadcrumb = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  // Mappa etichette personalizzate
  const labelMap = {
    destinazioni: "Destinazioni",
    europa: "Europa",
    "americhe-caraibi": "Americhe & Caraibi",
    africa: "Africa",
    asia: "Asia",
    oceania: "Oceania",
    "chi-siamo": "Chi Siamo",
    contatti: "Contatti",
    "privacy-policy": "Privacy Policy",
    "termini-e-condizioni": "Termini & Condizioni",
    "condizioni-di-vendita": "Condizioni di Vendita",
  };

  // Costruzione breadcrumb
  const crumbs = pathParts.map((part, idx) => {
    const path = "/" + pathParts.slice(0, idx + 1).join("/");
    const isLast = idx === pathParts.length - 1;

    // Etichetta — preferisce labelMap, altrimenti format automatico
    const label =
      labelMap[part] ||
      part
        .split("-")
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ");

    return { label, path, isLast };
  });

  // Nessun breadcrumb in home
  if (crumbs.length === 0) return null;

  return (
    <nav className="w-full sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm">
        
        {/* HOME */}
        <Link
          to="/"
          className="flex items-center gap-1 text-[#132C50] hover:text-[#0863D6] transition font-medium"
        >
          <FaHome className="text-[15px]" />
          <span className="hidden sm:inline">Home</span>
        </Link>

        {/* ALTRI CRUMBS */}
        {crumbs.map((crumb, index) => (
          <div key={index} className="flex items-center gap-2">
            <IoChevronForward className="text-[#94A3B8] text-xs" />

            {crumb.isLast ? (
              // Ultimo → non cliccabile
              <span className="text-slate-700 font-semibold">
                {crumb.label}
              </span>
            ) : (
              // Link intermedi
              <Link
                to={crumb.path}
                className="flex items-center gap-1 text-[#132C50] hover:text-[#0863D6] transition font-medium"
              >
                {/* Icona destinazioni (solo su md+) */}
                {crumb.label === "Destinazioni" && (
                  <FaMapMarkedAlt className="text-[14px] hidden md:inline" />
                )}
                <span>{crumb.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumb;







