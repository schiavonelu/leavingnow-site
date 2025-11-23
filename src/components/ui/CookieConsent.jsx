import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie_consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-slate-900 text-white p-5 shadow-lg z-50">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-3">
        <p className="text-sm text-slate-200">
          Questo sito utilizza cookie tecnici e, previo tuo consenso, cookie di
          profilazione per offrirti un'esperienza migliore. Puoi accettare o
          rifiutare liberamente.
        </p>

        <div className="flex gap-3">
          <button
            onClick={declineCookies}
            className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-sm"
          >
            Rifiuta
          </button>

          <button
            onClick={acceptCookies}
            className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-sm font-semibold"
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
