import { useEffect, useState } from "react";
import { FaSuitcaseRolling, FaPhone } from "react-icons/fa6";
import logo from "../assets/logo/leavingnow-logo.jpeg";

/**
 * 🔁 DATA DI LANCIO (FITTIZIA PER ORA)
 */
const LAUNCH_DATE = new Date("2025-12-31T10:00:00+01:00");

const getTimeLeft = () => {
  const now = new Date().getTime();
  const diff = LAUNCH_DATE.getTime() - now;

  if (diff <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    total: diff,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isLaunched = timeLeft.total === 0;
  const format = (n) => String(n).padStart(2, "0");

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F8FAFC] text-[#132C50]">
      {/* SFONDI COLORATI */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#0863D6]/15 blur-3xl" />
        <div className="absolute bottom-[-4rem] left-[-3rem] h-64 w-64 rounded-full bg-[#EB2480]/12 blur-3xl" />
        <div className="absolute bottom-[-5rem] right-[-3rem] h-72 w-72 rounded-full bg-[#1F3759]/12 blur-3xl" />
      </div>

      {/* CONTENUTO CENTRALE */}
      <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 text-center">
        {/* LOGO + SLOGAN */}
        <div className="mb-4 flex flex-col items-center gap-1">
  <div className="inline-flex items-center gap-2 px-1 py-1">
    <img
      src={logo}
      alt="Leaving Now logo"
      className="h-40 md:h-40 w-auto drop-shadow-md"
    />
  </div>

  <div className="flex flex-col items-end text-right drop-shadow">
    {/* 👆 ho tolto mt-2 */}
    <div className="bg-[#EB2480] px-4 py-1.5 text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.18em] text-white rounded-t-md">
      CON NOI
    </div>
    <div className="bg-[#1F3759] px-4 py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.16em] text-white rounded-b-md whitespace-nowrap">
      IN GIRO PER IL MONDO
    </div>
  </div>
</div>

        {/* TITOLO */}
        <div className="mb-6 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#132C50]">
            Stiamo preparando un nuovo modo di farti viaggiare
          </h1>
        </div>

        {/* COUNTDOWN */}
        <div className="mb-8 w-full max-w-2xl">
          {!isLaunched ? (
            <>
              <p className="mb-4 text-[11px] md:text-xs uppercase tracking-[0.22em] text-slate-500">
                Lancio del nuovo sito tra
              </p>

              <div className="grid grid-cols-4 gap-3 rounded-3xl bg-white p-4 md:p-5 border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
                {["Giorni", "Ore", "Minuti", "Secondi"].map((label, i) => {
                  const value = [
                    timeLeft.days,
                    timeLeft.hours,
                    timeLeft.minutes,
                    timeLeft.seconds,
                  ][i];

                  return (
                    <div key={label} className="flex flex-col items-center">
                      <span className="mb-1 text-2xl sm:text-3xl md:text-4xl font-semibold tabular-nums text-[#0863D6]">
                        {format(value)}
                      </span>
                      <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-slate-500">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* PROGRESS BAR */}
              <div className="mt-4 h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-[#0863D6] via-[#EB2480] to-amber-300 animate-pulse" />
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

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <p className="text-xs md:text-sm text-slate-600 max-w-md text-center sm:text-right sm:mr-2">
            Nel frattempo, siamo operativi in agenzia.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            {/* SCRIVICI – stile pulsante blu */}
            <a
              href="mailto:leavingnowviaggi@gmail.com"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              <FaSuitcaseRolling className="mr-2" />
              Scrivici per un preventivo
            </a>

            {/* CHIAMACI – stile pulsante neutro */}
            <a
              href="tel:08118754553"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-700 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              <FaPhone className="mr-2" />
              Chiamaci in agenzia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;





