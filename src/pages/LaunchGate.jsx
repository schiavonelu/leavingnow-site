// src/pages/LaunchGate.jsx
import { useEffect, useState } from "react";
import { LAUNCH_DATE } from "../config/launchConfig";
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
   LaunchGate (solo overlay di lancio)
-------------------------------- */
const LaunchGate = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const launchCompleted = window.localStorage.getItem("launchCompleted") === "true";
    const now = Date.now();
    const launchTime = LAUNCH_DATE.getTime();

    // Se il lancio è nel futuro → non mostrare ancora nulla
    if (now < launchTime) return;

    // Se l'utente ha già visto la barra → non mostrarla più
    if (launchCompleted) return;

    // Altrimenti: mostra la barra e nascondila dopo 7s
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
      window.localStorage.setItem("launchCompleted", "true");
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-white">
      <LaunchBarScreen />
    </div>
  );
};

export default LaunchGate;












