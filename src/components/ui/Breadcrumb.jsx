// src/components/ui/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaMapMarkedAlt } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";

const Breadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const pathParts = currentPath.split("/").filter(Boolean);

  const labelMap = {
    destinazioni: "Destinazioni",
    europa: "Europa",
    "americhe-caraibi": "Americhe & Caraibi",
    africa: "Africa",
    asia: "Asia",
    oceania: "Oceania",

    "mete-stagionali": "Mete stagionali",
    "mete-capitali": "Mete capitali",
    "mete-viaggi-di-nozze": "Mete viaggi di nozze",
    "mete-mare-italia": "Mare Italia",

    crociere: "Crociere",
    "viaggi-individuali-gruppo": "Viaggi individuali & di gruppo",
    "viaggi-family": "Viaggi Family",
    "viaggi-di-nozze": "Viaggi di nozze",
    "idee-regalo": "Idee regalo",

    "chi-siamo": "Chi Siamo",
    contatti: "Contatti",

    "privacy-policy": "Privacy Policy",
    "termini-e-condizioni": "Termini & Condizioni",
    "condizioni-di-vendita": "Condizioni di Vendita",
  };

  // 🔙 Target della "Home" in breadcrumb, verso la sezione giusta
  let homeTarget = "/";

  if (currentPath.includes("mete-stagionali")) {
    homeTarget = "/#mete-stagionali";
  } else if (
    currentPath.includes("mete-mare-italia") ||
    currentPath.includes("mete-capitali")
  ) {
    // Mare Italia e Capitali → sezione tipologie in home
    homeTarget = "/#tipologie";
  } else if (currentPath.includes("mete-viaggi-di-nozze")) {
    // Da mete viaggi di nozze → direttamente al form viaggi di nozze
    homeTarget = "/viaggi-di-nozze#preventivo-nozze";
  } else if (
    currentPath.includes("crociere") ||
    currentPath.includes("viaggi-individuali") ||
    currentPath.includes("viaggi-family") ||
    currentPath.includes("idee-regalo") ||
    currentPath.includes("viaggi-di-nozze")
  ) {
    homeTarget = "/#tipologie";
  } else if (currentPath.startsWith("/destinazioni")) {
    homeTarget = "/#destinazioni";
  } else if (currentPath.includes("recensioni")) {
    homeTarget = "/#recensioni";
  } else if (currentPath.includes("chi-siamo")) {
    homeTarget = "/#agenzia";
  }

  // 🧩 Crumbs standard ricavati dal path
  let crumbs = pathParts.map((part, idx) => {
    const path = "/" + pathParts.slice(0, idx + 1).join("/");
    const isLast = idx === pathParts.length - 1;

    const label =
      labelMap[part] ||
      part
        .split("-")
        .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ");

    return { label, path, isLast };
  });

  // ✨ Caso speciale: METE VIAGGI DI NOZZE
  // Home porta già al form (homeTarget),
  // qui mostriamo: Home > Viaggi di nozze > Mete viaggi di nozze
  // e "Viaggi di nozze" punta direttamente al form.
  if (currentPath.startsWith("/mete-viaggi-di-nozze")) {
    crumbs = [
      {
        label: "Viaggi di nozze",
        path: "/viaggi-di-nozze#preventivo-nozze",
        isLast: false,
      },
      {
        label: "Mete viaggi di nozze",
        path: "/mete-viaggi-di-nozze",
        isLast: true,
      },
    ];
  }

  if (crumbs.length === 0) return null;

  return (
    <nav className="w-full sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-[#E2E8F0]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm">
        {/* HOME */}
        <Link
          to={homeTarget}
          className="flex items-center gap-1 text-[#132C50] hover:text-[#0863D6] transition font-medium"
        >
          <FaHome className="text-[15px]" />
          <span className="hidden sm:inline">Home</span>
        </Link>

        {/* ALTRI CRUMBS */}
        {crumbs.map((crumb, index) => {
          const isDestinazioni = crumb.label === "Destinazioni";

          const targetPath = isDestinazioni
            ? "/destinazioni#map"
            : crumb.path;

          return (
            <div key={index} className="flex items-center gap-2">
              <IoChevronForward className="text-[#94A3B8] text-xs" />

              {crumb.isLast ? (
                <span className="text-slate-700 font-semibold">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={targetPath}
                  className="flex items-center gap-1 text-[#132C50] hover:text-[#0863D6] transition font-medium"
                >
                  {isDestinazioni && (
                    <FaMapMarkedAlt className="text-[14px] hidden md:inline" />
                  )}
                  <span>{crumb.label}</span>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumb;
















