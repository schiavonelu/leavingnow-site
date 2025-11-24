import { useEffect, useState } from "react";
import { Plane, Heart, Mail, Clock } from "lucide-react";

// 🔔 Imposta qui la data/ora di lancio del sito
const LAUNCH_DATE = new Date("2025-12-01T10:00:00"); // <-- MODIFICA A PIACERE

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const isOver = timeLeft.total <= 0;

  return (
    <main className="min-h-screen bg-[#0B1220] flex items-center justify-center px-4 py-10">
      <div className="max-w-xl w-full relative">
        {/* Glow di sfondo */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 h-40 w-40 rounded-full bg-[#0863D6]/30 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-40 w-40 rounded-full bg-[#EB2480]/25 blur-3xl" />
        </div>

        {/* Card principale */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-700/70 shadow-2xl backdrop-blur-sm px-5 py-7 md:px-8 md:py-9">
          {/* Badge + icone */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-[#0EA5E9]">
              <Plane className="w-5 h-5" />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800 text-[#F97316]">
              <Heart className="w-5 h-5" />
            </div>
          </div>

          <p className="text-[10px] md:text-xs font-semibold tracking-[0.32em] uppercase text-[#0EA5E9] text-center mb-3">
            Leaving Now · Nuovo sito in arrivo
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">
            Stiamo preparando il viaggio perfetto anche online.
          </h1>

          <p className="text-sm md:text-base text-slate-300 text-center mb-6 leading-relaxed">
            Il nostro nuovo sito è quasi pronto: presto potrai scoprire ispirazioni,
            destinazioni e servizi dedicati ai tuoi prossimi viaggi, dai weekend
            alle grandi fughe da sogno.
          </p>

          {/* Countdown */}
          <div className="mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-[#0EA5E9]" />
              <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-slate-400">
                Countdown al lancio
              </p>
            </div>

            {isOver ? (
              <p className="text-center text-sm text-emerald-400 font-medium">
                Il sito è pronto a decollare. Se non vedi ancora i contenuti,
                prova ad aggiornare la pagina tra qualche istante.
              </p>
            ) : (
              <div className="grid grid-cols-4 gap-3 max-w-xs md:max-w-sm mx-auto">
                <TimeBox label="Giorni" value={timeLeft.days} />
                <TimeBox label="Ore" value={timeLeft.hours} />
                <TimeBox label="Minuti" value={timeLeft.minutes} />
                <TimeBox label="Secondi" value={timeLeft.seconds} />
              </div>
            )}

            {/* Data testuale sotto il countdown */}
            {!isOver && (
              <p className="mt-3 text-[11px] md:text-xs text-slate-400 text-center">
                Lancio previsto il{" "}
                <span className="font-semibold text-slate-200">
                  {formatLaunchDate(LAUNCH_DATE)}
                </span>
              </p>
            )}
          </div>

          {/* Contatti rapidi */}
          <div className="border-t border-slate-700/70 pt-5 mt-4">
            <p className="text-xs md:text-sm text-slate-300 text-center mb-3">
              Nel frattempo, il team Leaving Now è già pronto ad aiutarti a
              organizzare il tuo viaggio in agenzia o da remoto.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* Email pill */}
              <a
                href="mailto:leavingnowviaggi@gmail.com"
                className="inline-flex items-center justify-center rounded-full bg-slate-800 px-4 py-2 text-xs md:text-sm text-slate-100 border border-slate-600 hover:border-[#0EA5E9] hover:text-[#0EA5E9] transition"
              >
                <Mail className="w-4 h-4 mr-2" />
                leavingnowviaggi@gmail.com
              </a>

              {/* Micro copy */}
              <p className="text-[11px] text-slate-500 text-center">
                Oppure vieni a trovarci in agenzia ad Aversa per parlarne di persona.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

/**
 * Box singolo del countdown
 */
const TimeBox = ({ label, value }) => (
  <div className="rounded-2xl bg-white/5 border border-white/10 px-2.5 py-3 md:px-3 md:py-3.5 flex flex-col items-center justify-center shadow-sm">
    <span className="text-xl md:text-2xl font-bold text-white tabular-nums leading-none">
      {String(value).padStart(2, "0")}
    </span>
    <span className="mt-1 text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-slate-300">
      {label}
    </span>
  </div>
);

/**
 * Calcola il tempo rimanente
 */
function calculateTimeLeft() {
  const now = new Date().getTime();
  const target = LAUNCH_DATE.getTime();
  const diff = target - now;

  if (diff <= 0) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  return {
    total: diff,
    days,
    hours,
    minutes,
    seconds,
  };
}

/**
 * Formatta la data di lancio in modo leggibile (es. "01 dicembre 2025, ore 10:00")
 */
function formatLaunchDate(date) {
  return date.toLocaleString("it-IT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default ComingSoon;

