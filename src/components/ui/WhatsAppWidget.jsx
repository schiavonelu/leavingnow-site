import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WHATSAPP_NUMBER = "393317216534"; // <-- SOLO NUMERI, SENZA +
const OPERATOR_NAME = "Assia";
const OPERATOR_ROLE = "Supporto Clienti";
const OPERATOR_IMAGE = "/assiawhatsapp.webp";

// ORARI DI APERTURA
// JS: 0 = Domenica, 1 = Lunedì, ... 6 = Sabato
const OPENING_HOURS = {
  1: [
    // Lunedì
    { start: "16:30", end: "20:00" },
  ],
  2: [
    // Martedì
    { start: "09:30", end: "13:00" },
    { start: "16:30", end: "20:00" },
  ],
  3: [
    // Mercoledì
    { start: "09:30", end: "13:00" },
    { start: "16:30", end: "20:00" },
  ],
  4: [
    // Giovedì
    { start: "09:30", end: "13:00" },
    { start: "16:30", end: "20:00" },
  ],
  5: [
    // Venerdì
    { start: "09:30", end: "13:00" },
    { start: "16:30", end: "20:00" },
  ],
  6: [
    // Sabato
    { start: "09:30", end: "13:00" },
    { start: "16:30", end: "20:00" },
  ],
  0: [], // Domenica chiuso
};

// Converte "HH:MM" in minuti (es. "16:30" -> 16*60+30)
const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

// Ritorna true se in questo momento l'agenzia è aperta
const isAgencyOpen = () => {
  const now = new Date();
  const day = now.getDay(); // 0-6
  const minutesNow = now.getHours() * 60 + now.getMinutes();

  const slots = OPENING_HOURS[day] || [];
  return slots.some(({ start, end }) => {
    const startMin = toMinutes(start);
    const endMin = toMinutes(end);
    return minutesNow >= startMin && minutesNow <= endMin;
  });
};

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(isAgencyOpen);

  // Aggiorna lo stato (online/offline) ogni minuto
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpenNow(isAgencyOpen());
    }, 60_000);
    return () => clearInterval(interval);
  }, []);

  // Messaggio di default diverso se fuori orario
  const defaultMessage = isOpenNow
    ? "Ciao! Vorrei ricevere maggiori informazioni sui vostri viaggi ✈️"
    : "Ciao! Vi scrivo fuori orario di apertura. Vorrei ricevere maggiori informazioni sui vostri viaggi ✈️";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <>
      {/* ---------------- CHAT BOX (CARD) ---------------- */}
      {open && (
        <div
          className="
            fixed
            bottom-24
            left-1/2 -translate-x-1/2
            w-[90vw] max-w-sm
            md:left-6 md:translate-x-0
            animate-slide-up
            rounded-2xl bg-white
            shadow-[0_10px_40px_rgba(0,0,0,0.18)]
            border border-slate-200
            overflow-hidden
            z-9999
          "
        >
          {/* HEADER CHAT */}
          <div className="relative bg-[#25D366] text-white px-5 py-4 flex items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={OPERATOR_IMAGE}
                  alt="Operatore"
                  className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover"
                />

                {/* PALLINO STATO SOPRA AVATAR */}
                <span
                  className={`
                    absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-[#25D366]
                    ${isOpenNow ? "bg-emerald-300" : "bg-slate-300"}
                  `}
                />
              </div>

              <div className="space-y-0.5">
                <p className="text-base font-semibold">{OPERATOR_NAME}</p>
                <p className="text-xs md:text-sm text-white/90">
                  {OPERATOR_ROLE}
                </p>
                <p className="text-[11px] md:text-xs text-white/80 flex items-center gap-2">
                  <span
                    className={`
                      inline-block h-2 w-2 rounded-full
                      ${isOpenNow ? "bg-emerald-200" : "bg-slate-200"}
                    `}
                  />
                  {isOpenNow
                    ? "Online adesso"
                    : "Fuori orario - risponderemo al più presto"}
                </p>
              </div>
            </div>

            {/* BOTTONE CHIUDI */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1.5 hover:rotate-90 transition-transform"
              aria-label="Chiudi chat"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* CONTENUTO CHAT */}
          <div className="bg-gray-50 px-5 py-4">
            <div className="flex items-start gap-3">
              <img
                src={OPERATOR_IMAGE}
                alt="Avatar"
                className="w-10 h-10 rounded-full border object-cover"
              />
              <div className="bg-white px-4 py-3 rounded-2xl shadow text-sm md:text-base text-slate-700 max-w-[85%] leading-snug">
                👋 Ciao! Sono qui per aiutarti.
                <br />
                {isOpenNow ? (
                  <>Rispondiamo subito negli orari di apertura.</>
                ) : (
                  <>
                    Al momento siamo offline, ma ti risponderemo appena
                    possibile.
                  </>
                )}
              </div>
            </div>

            {/* BOTTONE AVVIA CHAT */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] text-white py-3 text-sm md:text-base font-semibold shadow hover:bg-[#1ebe5d] transition"
            >
              <FaWhatsapp className="text-xl" />
              {isOpenNow ? "Avvia conversazione" : "Scrivi su WhatsApp"}
            </a>
          </div>
        </div>
      )}

      {/* ---------------- BOTTONE FLOTANTE (IN BASSO A SINISTRA) ---------------- */}
      <div className="fixed bottom-6 left-6 z-9998">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            aria-label="Apri chat WhatsApp"
            className="
              relative
              flex items-center justify-center
              h-14 w-14 rounded-full bg-[#25D366]
              shadow-xl text-white
              hover:scale-110 active:scale-95
              transition-all duration-300
              animate-slide-up
            "
          >
            <FaWhatsapp className="text-3xl" />

            {/* PALLINO STATO SUL BOTTONE */}
            <span
              className={`
                absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white
                ${isOpenNow ? "bg-emerald-400" : "bg-slate-400"}
              `}
            />
          </button>
        )}
      </div>
    </>
  );
};

export default WhatsAppWidget;






