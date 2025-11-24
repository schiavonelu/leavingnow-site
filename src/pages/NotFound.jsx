import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-[#1E293B] text-[#FACC15]">
            <AlertTriangle className="w-6 h-6" />
          </div>
        </div>

        <p className="text-xs tracking-[0.25em] uppercase text-[#0EA5E9] mb-2">
          Errore 404
        </p>

        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Pagina non trovata
        </h1>

        <p className="text-sm md:text-base text-slate-300 mb-6">
          La pagina che stai cercando potrebbe essere stata spostata o non esistere più.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold bg-[#0863D6] text-white hover:bg-white hover:text-[#0863D6] border border-[#0863D6] transition"
        >
          Torna alla home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
