// src/pages/LaunchGate.jsx
import { useEffect, useState } from "react";
import { getTimeDiffMs, ONE_HOUR_MS } from "../config/launchConfig";
import ComingSoon from "./ComingSoon";
import Maintenance from "./Maintenance";

const LaunchGate = () => {
  const [diffMs, setDiffMs] = useState(getTimeDiffMs());

  useEffect(() => {
    const interval = setInterval(() => {
      setDiffMs(getTimeDiffMs());
    }, 30000); // ogni 30 secondi

    return () => clearInterval(interval);
  }, []);

  const diffHours = diffMs / ONE_HOUR_MS;

  // DEBUG: vedi nel devtools e (per ora) in overlay
  console.log("Ore mancanti al lancio:", diffHours);

  // lancio passato → non mostra nulla (userai il sito normale)
  if (diffMs <= 0) {
    return null;
  }

  // Se mancano 24 ore o meno → pagina Coming Soon con countdown
  if (diffHours <= 24) {
    return (
      <>
        {/* piccolo badge debug in alto a sinistra */}
        <div className="fixed left-2 top-2 z-50 rounded bg-black/70 px-2 py-1 text-[10px] text-white">
          Modalità: COUNTDOWN – Ore al lancio: {diffHours.toFixed(2)}
        </div>
        <ComingSoon />
      </>
    );
  }

  // Se siamo tra 24 e 36 ore → pagina manutenzione
  if (diffHours <= 36) {
    return (
      <>
        <div className="fixed left-2 top-2 z-50 rounded bg-black/70 px-2 py-1 text-[10px] text-white">
          Modalità: MANUTENZIONE – Ore al lancio: {diffHours.toFixed(2)}
        </div>
        <Maintenance />
      </>
    );
  }

  // Oltre 36 ore (in pratica non userai questa fase, ma per sicurezza mettiamo manutenzione)
  return (
    <>
      <div className="fixed left-2 top-2 z-50 rounded bg-black/70 px-2 py-1 text-[10px] text-white">
        Modalità: PRE-PRE-LANCIO – Ore al lancio: {diffHours.toFixed(2)}
      </div>
      <Maintenance />
    </>
  );
};

export default LaunchGate;



