// src/pages/ComingSoon.jsx
import { useEffect, useState } from "react";
import { FaSuitcaseRolling, FaPhone } from "react-icons/fa6";
import logo from "../assets/logo/leavingnow-logowhite.webp";
import { getTimeLeft } from "../config/launchConfig";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isLaunched = timeLeft.total === 0;
  const isFinalSeconds =
    timeLeft.total > 0 && timeLeft.total <= 60 * 1000; // ultimi 60 secondi

  const format = (n) => String(n).padStart(2, "0");

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F8FAFC] text-[#132C50]">
      {/* SFONDI COLORATI */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0863D6]/15 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-[-3rem] h-64 w-64 rounded-full bg-[#EB2480]/12 blur-3xl" />
        <div className="absolute bottom-[-5rem] right-[-3rem] h-72 w-72 rounded-full bg-[#1F3759]/12 blur-3xl" />
      </div>

      {/* CONTENUTO */}
      <div className="relative mx-auto flex h-full max-w-5xl flex-col px-4 py-4">
        {/* BLOCCO SUPERIORE */}
        <header className="flex flex-col items-center justify-start pt-2">
          {/* LOGO */}
          <div className="mb-3">
            <img
              src={logo}
              alt="Leaving Now logo"
              className="h-16 w-auto md:h-20 drop-shadow-md"
            />
          </div>

          {/* SLOGAN */}
          <div className="flex flex-col items-end text-right drop-shadow">
            <div className="bg-[#EB2480] px-4 py-1.5 text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.18em] text-white rounded-t-md">
              CON NOI
            </div>
            <div className="bg-[#1F3759] px-4 py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.16em] text-white rounded-b-md whitespace-nowrap">
              IN GIRO PER IL MONDO
            </div>
          </div>
        </header>

        {/* BLOCCO CENTRALE */}
        <main className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="w-full max-w-3xl mb-6">
            <p className="text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.26em] text-slate-500">
              Lancio del nuovo sito tra
            </p>
          </div>

          {/* COUNTDOWN GRANDE */}
          <div className="w-full max-w-3xl">
            {!isLaunched ? (
              <>
                <div
                  className={[
                    "grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-3xl bg-white/95 px-4 py-5 md:px-6 md:py-7 border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.12)]",
                    isFinalSeconds ? "animate-pulse" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {["Giorni", "Ore", "Minuti", "Secondi"].map((label, i) => {
                    const value = [
                      timeLeft.days,
                      timeLeft.hours,
                      timeLeft.minutes,
                      timeLeft.seconds,
                    ][i];

                    return (
                      <div
                        key={label}
                        className="flex flex-col items-center justify-center gap-1"
                      >
                        <span
                          className={[
                            "mb-1 font-extrabold tabular-nums text-[#0863D6] leading-none",
                            isFinalSeconds
                              ? "text-5xl sm:text-6xl md:text-7xl"
                              : "text-4xl sm:text-5xl md:text-6xl",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                        >
                          {format(value)}
                        </span>
                        <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.26em] text-slate-500">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* PROGRESS BAR */}
                <div className="mt-5 h-2 w-full max-w-3xl rounded-full bg-slate-200 overflow-hidden mx-auto">
                  <div className="h-full w-3/4 bg-gradient-to-r from-[#0863D6] via-[#EB2480] to-amber-300 animate-pulse" />
                </div>
              </>
            ) : (
              <div className="rounded-3xl bg-emerald-50 border border-emerald-200 px-6 py-4 inline-flex items-center gap-3 shadow-sm">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                  <FaSuitcaseRolling className="text-lg" />
                </span>
                <p className="text-sm md:text-base text-emerald-800">
                  Il nuovo sito è pronto! Aggiorna il browser.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* CTA */}
        <footer className="flex flex-col items-center justify-end pb-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <p className="text-[11px] md:text-sm text-slate-600 max-w-md text-center sm:text-right sm:mr-2">
              Fino al lancio, puoi comunque contattarci per organizzare il tuo viaggio.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* SCRIVICI */}
              <a
                href="mailto:leavingnowviaggi@gmail.com"
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-2.5 text-sm md:text-base font-semibold shadow-md border border-[#0369A1] bg-[#0369A1] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
              >
                <FaSuitcaseRolling className="mr-2" />
                Scrivici per un preventivo
              </a>

              {/* CHIAMACI */}
              <a
                href="tel:08118754553"
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-2.5 text-sm md:text-base font-semibold border border-slate-500 text-slate-700 hover:border-[#EB2480] hover:text-[#EB2480] transition"
              >
                <FaPhone className="mr-2" />
                Chiamaci in agenzia
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ComingSoon;

