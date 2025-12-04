// src/pages/Maintenance.jsx
import { useEffect, useState } from "react";
import {
  FaHammer,
  FaPhone,
  FaMapLocationDot,
  FaGears,
  FaPlaneDeparture,
  FaMessage,
} from "react-icons/fa6";
import logo from "../assets/logo/leavingnow-logowhite.webp";
import {
  LAUNCH_DATE,
  MAINTENANCE_START_DATE,
  ONE_DAY_MS,
} from "../config/launchConfig";

// Calcola l'avanzamento lavori: dal 6/12 → 0% al (lancio - 24h) → 100%
const getMaintenanceProgress = () => {
  const now = Date.now();
  const start = MAINTENANCE_START_DATE.getTime();
  const launch = LAUNCH_DATE.getTime();
  const end = launch - ONE_DAY_MS; // 24h prima del lancio

  if (now <= start) return 0;
  if (now >= end) return 100;

  const ratio = (now - start) / (end - start);
  const clamped = Math.max(0, Math.min(1, ratio));

  return Math.round(clamped * 100);
};

// Dati step (così li riusiamo per desktop + mobile)
const STEPS = [
  {
    id: 1,
    label: "Cerca la tua prossima meta",
    Icon: FaMapLocationDot,
    iconClass: "text-lg text-sky-300 animate-pulse",
  },
  {
    id: 2,
    label: "Costruiamo il tuo viaggio",
    Icon: FaGears,
    iconClass: "text-lg text-amber-200 animate-bounce",
  },
  {
    id: 3,
    label: "Pronti a partire",
    Icon: FaPlaneDeparture,
    iconClass: "text-lg text-emerald-300 animate-bounce",
  },
];

const Maintenance = () => {
  const [progress, setProgress] = useState(getMaintenanceProgress());
  const [visibleSteps, setVisibleSteps] = useState(0); // animazione card desktop
  const [activeStepIndex, setActiveStepIndex] = useState(0); // carousel mobile

  // Aggiorna la barra ogni 60 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(getMaintenanceProgress());
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  // Animazione progressiva delle 3 card (DESKTOP)
  useEffect(() => {
    setVisibleSteps(0);
    let step = 0;

    const interval = setInterval(() => {
      step += 1;
      setVisibleSteps(step);
      if (step >= 3) {
        clearInterval(interval);
      }
    }, 900); // ogni 900ms si accende una card

    return () => clearInterval(interval);
  }, []);

  // Carousel MOBILE: cambio card ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % STEPS.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Etichetta della fase
  let phaseLabel = "FASE INIZIALE";
  if (progress >= 70) {
    phaseLabel = "FASE FINALE";
  } else if (progress >= 30) {
    phaseLabel = "IN CORSO";
  }

  const activeStep = STEPS[activeStepIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0F172A] text-slate-100">
      {/* SFONDI / GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-[#0863D6]/25 blur-3xl" />
        <div className="absolute -bottom-16 -right-12 h-80 w-80 rounded-full bg-[#EB2480]/25 blur-3xl" />
      </div>

      {/* CONTENUTO */}
      <div className="relative mx-auto flex h-full max-w-5xl flex-col px-4 py-4">
        {/* HEADER */}
        <header className="flex flex-col items-center justify-start pt-2">
          <div className="mb-3">
            <img
              src={logo}
              alt="Leaving Now logo"
              className="h-16 w-auto md:h-20 drop-shadow-lg"
            />
          </div>

          <div className="flex flex-col items-end text-right drop-shadow">
            <div className="bg-[#EB2480] px-4 py-1.5 text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-[0.18em] text-white rounded-t-md">
              STIAMO LAVORANDO
            </div>
            <div className="bg-[#0863D6]/80 px-4 py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.16em] text-white rounded-b-md whitespace-nowrap">
              AL NUOVO SITO LEAVING NOW
            </div>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex flex-1 flex-col items-center justify-center text-center">
          {/* Testo principale */}
          <div className="mb-8 max-w-3xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-slate-50">
              Ultimi ritocchi prima del decollo ✨
            </h1>
          </div>

          {/* “CANTIERE” ANIMATO */}
          <div className="w-full max-w-3xl">
            <div className="mb-4 text-[10px] md:text-xs uppercase tracking-[0.22em] text-slate-400">
              Stiamo costruendo la tua prossima partenza
            </div>

            <div className="rounded-3xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.85)] backdrop-blur">
              {/* Barra avanzamento “lavori in corso” */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                  <span className="inline-flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-950">
                      <FaHammer className="text-xs text-amber-300" />
                    </span>
                    <span>Avanzamento lavori</span>
                  </span>
                  <span className="font-semibold text-amber-200">
                    {phaseLabel} • {progress}%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-700 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-[#0863D6] via-[#EB2480] to-amber-300 transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* --- MOBILE: CAROUSEL 1 CARD ALLA VOLTA --- */}
              <div className="sm:hidden">
                {/* Card attiva */}
                <div className="rounded-2xl bg-slate-800/90 p-4 border border-slate-700/90 min-h-[130px] flex flex-col items-center justify-center transition-all duration-500 ease-out">
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950">
                    <activeStep.Icon className={activeStep.iconClass} />
                  </span>
                  <p className="text-[11px] md:text-sm font-semibold text-slate-100">
                    {activeStep.label}
                  </p>
                </div>

                {/* Pallini sotto */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  {STEPS.map((step, index) => (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => setActiveStepIndex(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeStepIndex
                          ? "w-6 bg-amber-300"
                          : "w-2 bg-slate-500"
                      }`}
                      aria-label={`Vai allo step ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* --- DESKTOP: griglia a 3 card come prima --- */}
              <div className="hidden sm:grid gap-4 sm:grid-cols-3">
                {STEPS.map((step, index) => {
                  const isVisible = visibleSteps >= index + 1;
                  return (
                    <div
                      key={step.id}
                      className={`rounded-2xl bg-slate-800/90 p-4 border border-slate-700/90 min-h-[130px] flex flex-col items-center justify-center transition-all duration-700 ease-out ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950">
                        <step.Icon className={step.iconClass} />
                      </span>
                      <p className="text-[11px] md:text-sm font-semibold text-slate-100">
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="flex flex-col items-center justify-end pb-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <p className="text-[11px] md:text-sm text-slate-300 max-w-md text-center sm:text-right sm:mr-2">
              Anche durante i lavori sul sito, puoi contattarci per organizzare il tuo
              prossimo viaggio.
            </p>

            {/* Bottoni footer SOLO DESKTOP/TABLET */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:leavingnowviaggi@gmail.com"
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-2.5 text-sm md:text-base font-semibold shadow-md border border-sky-500 bg-sky-500 text-white hover:bg-transparent hover:text-sky-300 hover:border-sky-300 transition"
              >
                <FaMessage className="mr-2" />
                Scrivici per un preventivo
              </a>

              <a
                href="tel:08118754553"
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-2.5 text-sm md:text-base font-semibold border border-slate-400 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
              >
                <FaPhone className="mr-2" />
                Chiamaci in agenzia
              </a>
            </div>
          </div>
        </footer>
      </div>

      {/* WIDGET FISSI MAIL / TELEFONO SOLO MOBILE */}
      <div className="sm:hidden">
        {/* Mail in basso a sinistra */}
        <a
          href="mailto:leavingnowviaggi@gmail.com"
          className="fixed bottom-4 left-4 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg border border-sky-300 active:scale-95 transition"
          aria-label="Scrivici per un preventivo"
        >
          <FaMessage className="text-lg" />
        </a>

        {/* Telefono in basso a destra */}
        <a
          href="tel:08118754553"
          className="fixed bottom-4 right-4 z-[9999] flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg border border-emerald-300 active:scale-95 transition"
          aria-label="Chiamaci in agenzia"
        >
          <FaPhone className="text-lg" />
        </a>
      </div>
    </section>
  );
};

export default Maintenance;












