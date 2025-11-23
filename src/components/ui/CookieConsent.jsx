import { useState, useEffect } from "react";
import { FaCookieBite } from "react-icons/fa"; // icona cookie

const CookieConsent = () => {
  // open = pannellino aperto/chiuso
  const [open, setOpen] = useState(false);
  // hasChoice = l'utente ha già scelto in passato?
  const [hasChoice, setHasChoice] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");

    if (!consent) {
      // Nessuna scelta → prima visita: apri il pannellino
      setOpen(true);
      setHasChoice(false);
    } else {
      // Scelta già fatta → widget solo icona, pannellino chiuso
      setHasChoice(true);
      setOpen(false);
    }
  }, []);

  const updateGoogleConsent = (granted) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: granted ? "granted" : "denied",
        analytics_storage: granted ? "granted" : "denied",
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    updateGoogleConsent(true);
    setHasChoice(true);
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    updateGoogleConsent(false);
    setHasChoice(true);
    setOpen(false);
  };

  const togglePanel = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {/* ░░░ WIDGET FLOTTANTE IN BASSO A DESTRA ░░░ */}
      <button
        type="button"
        onClick={togglePanel}
        className="
          fixed bottom-4 right-4 z-[9998]
          flex items-center justify-center
          rounded-full
          bg-[#132C50]/95 backdrop-blur
          w-8 h-8
          border border-white/30
          text-white shadow-lg
          hover:bg-[#132C50]
          transition
        "
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="Impostazioni cookie e privacy"
      >
        <FaCookieBite className="text-sm" />
      </button>

      {/* ░░░ PANNELLO PICCOLO, POCO INVASIVO ░░░ */}
      {open && (
        <div
          className="
            fixed bottom-16 right-4 z-[9999]
            w-[min(320px,90vw)]
            rounded-xl
            bg-[#132C50]
            text-white
            p-4
            shadow-2xl
            border border-white/20
          "
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-title"
        >
          <h2
            id="cookie-title"
            className="text-sm font-semibold text-white mb-2"
          >
            Preferenze cookie
          </h2>

          <p className="text-xs text-slate-100 leading-relaxed">
            Usiamo cookie tecnici e, solo previo tuo consenso, cookie di
            analisi/profilazione per migliorare la tua esperienza di
            navigazione.
          </p>

          <p className="mt-2 text-[0.7rem] text-slate-200">
            Puoi saperne di più leggendo la{" "}
            <a
              href="/privacy-policy"
              className="underline underline-offset-2 hover:text-sky-300"
            >
              Privacy Policy
            </a>{" "}
            e le{" "}
            <a
              href="/termini-e-condizioni"
              className="underline underline-offset-2 hover:text-sky-300"
            >
              Condizioni d&apos;uso
            </a>.
          </p>

          <div className="mt-3 flex justify-end gap-2">
            <button
              type="button"
              onClick={handleDecline}
              className="
                px-3 py-1.5
                rounded-lg
                bg-slate-700/90
                hover:bg-slate-600
                text-[0.7rem]
                transition
              "
            >
              Solo necessari
            </button>

            <button
              type="button"
              onClick={handleAccept}
              className="
                px-3 py-1.5
                rounded-lg
                bg-sky-500
                hover:bg-sky-600
                text-[0.7rem] font-semibold
                transition
              "
            >
              Accetta tutti
            </button>
          </div>

          {/* Piccola nota se è la prima volta */}
          {!hasChoice && (
            <p className="mt-2 text-[0.65rem] text-slate-200/80">
              Se chiudi senza scegliere, considereremo attivi solo i cookie tecnici.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default CookieConsent;










