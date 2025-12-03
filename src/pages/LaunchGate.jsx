// src/pages/LaunchGate.jsx
import { useEffect, useState } from "react";
import {
  LAUNCH_DATE,
  MAINTENANCE_START_DATE,
  ONE_DAY_MS,
} from "../config/launchConfig";
import ComingSoon from "./ComingSoon";
import Maintenance from "./Maintenance";
import logo from "../assets/logo/leavingnow-logo.webp";

/* -------------------------------
   Schermata finale: barra 7s
-------------------------------- */
const LaunchBarScreen = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F8FAFC] text-[#132C50]">
      {/* SFONDI */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 left-1/2 h-72 w-72 
        -translate-x-1/2 rounded-full bg-[#0863D6]/15 blur-3xl"
        />
        <div
          className="absolute -bottom-16 -left-12
        h-64 w-64 rounded-full bg-[#EB2480]/12 blur-3xl"
        />
        <div
          className="absolute -bottom-20 -right-12
        h-72 w-72 rounded-full bg-[#1F3759]/12 blur-3xl"
        />
      </div>

      <div className="relative mx-auto flex h-full max-w-5xl flex-col px-4 py-4">
        {/* LOGO + TITOLO */}
        <header className="flex flex-col items-center justify-start pt-2">
          <img
            src={logo}
            alt="Leaving Now logo"
            className="h-16 w-auto md:h-20 drop-shadow-md mb-3"
          />

          <div className="flex flex-col items-end text-right drop-shadow">
            <div
              className="bg-[#EB2480] px-4 py-1.5 
            text-[10px] sm:text-xs md:text-sm font-extrabold uppercase 
            tracking-[0.18em] text-white rounded-t-md"
            >
              LANCIO IN CORSO
            </div>
            <div
              className="bg-[#1F3759] px-4 py-2 
            text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold 
            uppercase tracking-[0.16em] text-white rounded-b-md whitespace-nowrap"
            >
              APERTURA DEL SITO
            </div>
          </div>
        </header>

        {/* BARRA */}
        <main className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="h-2 w-full max-w-md rounded-full bg-slate-200 overflow-hidden">
            <div
              className="h-full w-full origin-left bg-linear-to-r 
            from-[#0863D6] via-[#EB2480] to-amber-300 launch-bar-fill"
            />
          </div>
        </main>
      </div>

      {/* Animazione barra (7s) */}
      <style>
        {`
          @keyframes launchBar {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
          .launch-bar-fill {
            transform-origin: left;
            animation: launchBar 7s ease-in-out forwards;
          }
        `}
      </style>
    </section>
  );
};

/* -------------------------------
   LaunchGate
-------------------------------- */
const LaunchGate = () => {
  const [hasLaunched, setHasLaunched] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("launchCompleted") === "true";
  });

  const [phase, setPhase] = useState("idle"); // "idle" | "maintenance" | "comingSoon" | "launching" | "done"
  const [showOverlay, setShowOverlay] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // ⏱ Controlla la fase ogni secondo (finché non abbiamo lanciato)
  useEffect(() => {
    if (hasLaunched) {
      setPhase("done");
      setShowOverlay(false);
      return;
    }

    const launchTime = LAUNCH_DATE.getTime();
    const maintenanceStart = MAINTENANCE_START_DATE.getTime();
    const comingSoonStart = launchTime - ONE_DAY_MS;

    const updatePhase = () => {
      const now = Date.now();

      let nextPhase = "idle";
      let overlay = false;

      if (now < maintenanceStart) {
        nextPhase = "idle";
        overlay = false;
      } else if (now >= maintenanceStart && now < comingSoonStart) {
        // 🛠 Manutenzione dal 6/12 fino a 24h prima
        nextPhase = "maintenance";
        overlay = true;
      } else if (now >= comingSoonStart && now < launchTime) {
        // ⏳ Coming soon ultime 24h
        nextPhase = "comingSoon";
        overlay = true;
      } else if (now >= launchTime) {
        // 🚀 Fase di lancio
        nextPhase = "launching";
        overlay = true;
      }

      setPhase(nextPhase);
      setShowOverlay(overlay);
      if (overlay) setIsFadingOut(false);
    };

    updatePhase();
    const interval = setInterval(updatePhase, 1000);

    return () => clearInterval(interval);
  }, [hasLaunched]);

  // 🚀 Gestione della fase di lancio: barra 7s + dissolve + fine
  useEffect(() => {
    if (hasLaunched) return;
    if (phase !== "launching") return;

    const barTimer = setTimeout(() => {
      setIsFadingOut(true);

      const fadeTimer = setTimeout(() => {
        setShowOverlay(false);
        setIsFadingOut(false);
        setPhase("done");
        setHasLaunched(true);

        if (typeof window !== "undefined") {
          window.localStorage.setItem("launchCompleted", "true");
        }
      }, 700); // durata dissolve

      return () => clearTimeout(fadeTimer);
    }, 7000); // durata barra

    return () => clearTimeout(barTimer);
  }, [phase, hasLaunched]);

  // 🌙 Fase finale: nessun overlay
  if (hasLaunched || phase === "done" || !showOverlay) {
    return null;
  }

  // Scegli la schermata
  let Screen = null;
  if (phase === "maintenance") {
    Screen = Maintenance;
  } else if (phase === "comingSoon") {
    Screen = ComingSoon;
  } else if (phase === "launching") {
    Screen = LaunchBarScreen;
  } else {
    // "idle" → non mostrare nulla
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-9999 bg-white transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <Screen />
    </div>
  );
};

export default LaunchGate;










