import { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WHATSAPP_NUMBER = "393401234567"; // <- INSERISCI SOLO NUMERI
const OPERATOR_NAME = "Assia";
const OPERATOR_ROLE = "Supporto Clienti";

// 👉 Foto operatore da PUBLIC
const OPERATOR_IMAGE = "/assiawhatsapp.webp";

const DEFAULT_MESSAGE =
  "Ciao! Vorrei ricevere maggiori informazioni sui vostri viaggi ✈️";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      {/* ---------------- CHAT BOX ---------------- */}
      {open && (
        <div className="mb-4 w-96 animate-fade-in-up rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.18)] border border-slate-200 overflow-hidden">
          
          {/* HEADER CHAT PROFESSIONAL */}
          <div className="relative bg-[#25D366] text-white px-5 py-4 flex items-center">
            <div className="flex items-center gap-4">
              <img
                src={OPERATOR_IMAGE}
                alt="Operatore"
                className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover"
              />
              <div>
                <p className="text-base font-semibold">{OPERATOR_NAME}</p>
                <p className="text-xs md:text-sm text-white/90">
                  {OPERATOR_ROLE}
                </p>
              </div>
            </div>

            {/* BOTTONE X CHIUSURA */}
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
                Scrivimi pure quando vuoi!
              </div>
            </div>

            {/* BOTTONE AVVIA CHAT */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] text-white py-3 text-sm md:text-base font-semibold shadow hover:bg-[#1ebe5d] transition"
            >
              <FaWhatsapp className="text-xl" />
              Avvia conversazione
            </a>
          </div>
        </div>
      )}

      {/* ---------------- BOTTONE FLOTANTE ---------------- */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Apri chat WhatsApp"
          className="
            flex items-center justify-center
            h-14 w-14 rounded-full bg-[#25D366]
            shadow-xl text-white
            hover:scale-110 active:scale-95
            transition-all duration-300
            animate-pulse-soft
          "
        >
          <FaWhatsapp className="text-3xl" />
        </button>
      )}
    </div>
  );
};

export default WhatsAppWidget;




