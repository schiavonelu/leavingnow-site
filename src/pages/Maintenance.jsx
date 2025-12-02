// src/pages/Maintenance.jsx
import { FaHammer, FaWrench, FaPhone } from "react-icons/fa6";
import logo from "../assets/logo/leavingnow-logo.webp";

const Maintenance = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0F172A] text-slate-100">
      {/* SFONDI / GLOW */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-[#0863D6]/25 blur-3xl" />
        <div className="absolute bottom-[-4rem] right-[-3rem] h-80 w-80 rounded-full bg-[#EB2480]/25 blur-3xl" />
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
            <div className="bg-[#020617]/80 px-4 py-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-[0.16em] text-white rounded-b-md whitespace-nowrap">
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
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-300">
              In queste ore stiamo rifinendo le sezioni, organizzando le destinazioni
              e ottimizzando i percorsi per farti trovare un sito ancora più chiaro,
              veloce e ispirante quando sarà online.
            </p>
          </div>

          {/* “CANTIERE” ANIMATO */}
          <div className="w-full max-w-3xl">
            <div className="mb-4 text-[10px] md:text-xs uppercase tracking-[0.22em] text-slate-400">
              Lavori in corso sul nuovo sito
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
                    FASE FINALE
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-700 overflow-hidden">
                  <div className="h-full w-5/6 rounded-full bg-gradient-to-r from-[#0863D6] via-[#EB2480] to-amber-300 animate-pulse" />
                </div>
              </div>

              {/* Griglia “blocchi” del sito in costruzione */}
              <div className="grid gap-4 sm:grid-cols-3">
                {/* Blocco 1 */}
                <div className="rounded-2xl bg-slate-800/90 p-4 border border-slate-700/90 min-h-[130px] flex flex-col items-center justify-center">
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950">
                    <FaHammer className="text-lg text-amber-300 animate-bounce" />
                  </span>
                  <p className="text-[11px] md:text-sm font-semibold text-slate-100">
                    Layout destinazioni
                  </p>
                </div>

                {/* Blocco 2 */}
                <div className="rounded-2xl bg-slate-800/90 p-4 border border-slate-700/90 min-h-[130px] flex flex-col items-center justify-center">
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950">
                    <FaWrench className="text-lg text-sky-300 animate-spin" />
                  </span>
                  <p className="text-[11px] md:text-sm font-semibold text-slate-100">
                    Area viaggi di nozze
                  </p>
                </div>

                {/* Blocco 3 */}
                <div className="rounded-2xl bg-slate-800/90 p-4 border border-slate-700/90 min-h-[130px] flex flex-col items-center justify-center">
                  <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-950">
                    <FaHammer className="text-lg text-amber-300 animate-bounce" />
                  </span>
                  <p className="text-[11px] md:text-sm font-semibold text-slate-100">
                    Form richieste & preventivi
                  </p>
                </div>
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

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:leavingnowviaggi@gmail.com"
                className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-2.5 text-sm md:text-base font-semibold shadow-md border border-sky-500 bg-sky-500 text-white hover:bg-transparent hover:text-sky-300 hover:border-sky-300 transition"
              >
                <FaHammer className="mr-2" />
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
    </section>
  );
};

export default Maintenance;






