// src/pages/ComingSoon.jsx
import { useEffect, useState } from "react";
import { FaSuitcaseRolling, FaPhone } from "react-icons/fa6";
import logo from "../assets/logo/leavingnow-logo.webp";
import { getTimeLeft, ONE_DAY_MS } from "../config/launchConfig";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Ultimo minuto → solo secondi enormi
  const lastMinute =
    timeLeft.total > 0 && timeLeft.total <= 60 * 1000;

  // Ultimi 10 secondi → effetto zoom
  const lastTenSeconds =
    timeLeft.total > 0 && timeLeft.total <= 10 * 1000;

  // Barra dinamica sulle ultime 24 ore
  const progress24 = (() => {
    if (timeLeft.total <= 0) return 1;

    const ratio = 1 - timeLeft.total / ONE_DAY_MS;
    const clamped = Math.min(1, Math.max(0, ratio));

    return Math.max(clamped, 0.05);
  })();

  const format = (n) => String(n).padStart(2, "0");

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F8FAFC] text-[#132C50]">
      {/* SFONDI */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 
        -translate-x-1/2 rounded-full bg-[#0863D6]/15 blur-3xl" />

        <div className="absolute bottom-[-4rem] left-[-3rem] 
        h-64 w-64 rounded-full bg-[#EB2480]/12 blur-3xl" />

        <div className="absolute bottom-[-5rem] right-[-3rem] 
        h-72 w-72 rounded-full bg-[#1F3759]/12 blur-3xl" />
      </div>

      {/* CONTENUTO */}
      <div className="relative mx-auto flex h-full max-w-5xl flex-col px-4 py-4">

        {/* HEADER */}
        <header className="flex flex-col items-center justify-start pt-2">
          <img
            src={logo}
            alt="Leaving Now logo"
            className="h-16 w-auto md:h-20 drop-shadow-md mb-3"
          />

          <div className="flex flex-col items-end text-right drop-shadow">
            <div className="bg-[#EB2480] px-4 py-1.5 
            text-[10px] sm:text-xs md:text-sm font-extrabold uppercase 
            tracking-[0.18em] text-white rounded-t-md">
              CON NOI
            </div>
            <div className="bg-[#1F3759] px-4 py-2 
            text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold 
            uppercase tracking-[0.16em] text-white rounded-b-md whitespace-nowrap">
              IN GIRO PER IL MONDO
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex flex-1 flex-col items-center justify-center text-center">

          <p className="text-[11px] sm:text-xs md:text-sm uppercase 
          tracking-[0.26em] text-slate-500 mb-6">
            Lancio del nuovo sito tra
          </p>

          {/* COUNTDOWN / ULTIMI 60S */}
          <div className="w-full max-w-3xl">

            {/* 🔥 ULTIMO MINUTO → SOLO SECONDI GIGANTI */}
            {lastMinute ? (
              <>
                <div className="rounded-3xl bg-white/95 px-6 py-8
                md:px-8 md:py-10 border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.16)]
                flex flex-col items-center justify-center gap-4 animate-pulse">

                  <span
                    className={
                      "text-6xl sm:text-7xl md:text-8xl font-black tabular-nums text-[#EB2480] leading-none " +
                      (lastTenSeconds ? "countdown-zoom" : "")
                    }
                  >
                    {format(timeLeft.seconds)}
                  </span>
                </div>

                <div className="mt-4 h-1 w-24 mx-auto rounded-full 
                bg-gradient-to-r from-[#0863D6] via-[#EB2480] to-amber-300 animate-pulse" />
              </>
            ) : (
              /* 🕒 FASE NORMALE → SOLO ORE / MINUTI / SECONDI */
              <>
                <div className="grid grid-cols-3 gap-3 
                rounded-3xl bg-white/95 px-4 py-5 md:px-6 md:py-7 
                border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">

                  {["Ore", "Minuti", "Secondi"].map((label, i) => {
                    const value = [
                      timeLeft.hours,
                      timeLeft.minutes,
                      timeLeft.seconds,
                    ][i];

                    return (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <span className="text-4xl sm:text-5xl md:text-6xl 
                        font-extrabold tabular-nums text-[#0863D6] leading-none">
                          {format(value)}
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-sm 
                        uppercase tracking-[0.26em] text-slate-500">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Barra dinamica ultime 24h */}
                <div className="mt-5 h-2 w-full max-w-3xl rounded-full 
                bg-slate-200 overflow-hidden mx-auto">
                  <div
                    className="h-full bg-gradient-to-r from-[#0863D6] via-[#EB2480] to-amber-300 
                    transition-all duration-700 ease-out"
                    style={{ width: `${progress24 * 100}%` }}
                  />
                </div>
              </>
            )}
          </div>
        </main>


      </div>

      {/* Effetto zoom ultimi 10 secondi */}
      <style>
        {`
          @keyframes countdownZoom {
            0% { transform: scale(1); }
            50% { transform: scale(1.18); }
            100% { transform: scale(1); }
          }
          .countdown-zoom {
            animation: countdownZoom 0.6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ComingSoon;





