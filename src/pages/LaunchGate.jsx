// src/pages/LaunchGate.jsx
import { useEffect, useState } from "react";
import { getTimeDiffMs, ONE_HOUR_MS } from "../config/launchConfig";
import ComingSoon from "./ComingSoon";
import Maintenance from "./Maintenance";
import logo from "../assets/logo/leavingnow-logo.webp";

// Schermata finale con solo barra di caricamento prima di aprire il sito
const LaunchBarScreen = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F8FAFC] text-[#132C50]">
      {/* SFONDI COLORATI */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0863D6]/15 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-[-3rem] h-64 w-64 rounded-full bg-[#EB2480]/12 blur-3xl" />
        <div className="absolute bottom-[-5rem] right-[-3rem] h-72 w-72 rounded-full bg-[#1F3759]/12 blur-3xl" />
      </div>

      <div className="relative mx-auto flex h-full max-w-5xl flex-col px-4 py-4">
        {/* HEADER */}
        <header className="flex flex-col items-center justify-start pt-2">
          <div className="mb-3">
            <img
              src={logo}
              alt="Leaving Now logo"
              className="h-16 w-auto md:h-20 drop-shadow-md"
            />
          </div>

          <div className="flex flex-col items-end text-right drop-shadow">
            <div className="bg-[#EB2480] px-4 py-1.5 text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.18em] text-white rounded-t-md">
              LANCIO IN CORSO
            </div>
            <div className="bg-[#1F3759] px-4 py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.16em] text-white rounded-b-md whitespace-nowrap">
              STIAMO APRENDO IL NUOVO SITO
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] sm:text-xs md:text-sm text-slate-600">
              Un attimo di pazienza: stiamo caricando la nuova esperienza Leaving Now.
            </p>

            {/* Barra di caricamento */}
            <div className="mt-4 w-full">
              <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full w-full origin-left bg-gradient-to-r from-[#0863D6] via-[#EB2480] to-amber-300 launch-bar-fill" />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Keyframes per la barra (5 secondi) */}
      <style>
        {`
          @keyframes launchBar {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
          .launch-bar-fill {
            transform-origin: left;
            animation: launchBar 5s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
};

const LaunchGate = () => {
  const [diffMs, setDiffMs] = useState(getTimeDiffMs());

  // Stato dell'overlay
  const [showOverlay, setShowOverlay] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [phase, setPhase] = useState(null); // "maintenance" | "comingSoon" | "launching" | null

  // Aggiorna la differenza di tempo ogni 1 secondo
  useEffect(() => {
    const interval = setInterval(() => {
      setDiffMs(getTimeDiffMs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Blocca lo scroll quando l'overlay è visibile
  useEffect(() => {
    if (typeof document === "undefined") return;

    const prevOverflow = document.body.style.overflow;

    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prevOverflow || "";
    }

    return () => {
      document.body.style.overflow = prevOverflow || "";
    };
  }, [showOverlay]);

  // Gestione fasi: maintenance → comingSoon → launching → dissolve → sito
  useEffect(() => {
    const hours = diffMs / ONE_HOUR_MS;

    // Lancio non ancora arrivato
    if (diffMs > 0) {
      let newPhase: "maintenance" | "comingSoon" | null = null;

      if (hours <= 36 && hours > 24) {
        newPhase = "maintenance";
      } else if (hours <= 24) {
        newPhase = "comingSoon";
      }

      if (newPhase) {
        if (phase !== newPhase) {
          setPhase(newPhase);
        }
        if (!showOverlay) {
          setShowOverlay(true);
        }
        if (isFadingOut) {
          setIsFadingOut(false);
        }
      } else {
        // Fuori dalla finestra delle 36 ore
        if (showOverlay && !isFadingOut && phase !== "launching") {
          setIsFadingOut(true);
          const timeout = setTimeout(() => {
            setShowOverlay(false);
            setIsFadingOut(false);
            setPhase(null);
          }, 500);
          return () => clearTimeout(timeout);
        }
      }

      return;
    }

    // diffMs <= 0 → il lancio è arrivato, passiamo alla fase "launching"
    if (diffMs <= 0 && phase !== "launching") {
      setPhase("launching");
      setShowOverlay(true);
      setIsFadingOut(false);

      // 5s di barra, poi dissolve e rimozione overlay
      const launchTimeout = setTimeout(() => {
        setIsFadingOut(true);
        const removeTimeout = setTimeout(() => {
          setShowOverlay(false);
          setIsFadingOut(false);
          setPhase(null);
        }, 500); // tempo del fade-out

        return () => clearTimeout(removeTimeout);
      }, 5000); // durata barra

      return () => clearTimeout(launchTimeout);
    }
  }, [diffMs, showOverlay, isFadingOut, phase]);

  // Se non dobbiamo mostrare nulla
  if (!showOverlay || !phase) {
    return null;
  }

  let OverlayContent;
  if (phase === "maintenance") OverlayContent = Maintenance;
  else if (phase === "comingSoon") OverlayContent = ComingSoon;
  else OverlayContent = LaunchBarScreen; // phase === "launching"

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <OverlayContent />
    </div>
  );
};

export default LaunchGate;






