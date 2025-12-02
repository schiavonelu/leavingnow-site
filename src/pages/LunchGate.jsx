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
    }, 30000); // aggiorna ogni 30 secondi

    return () => clearInterval(interval);
  }, []);

  const diffHours = diffMs / ONE_HOUR_MS;

  // Se il lancio è passato: non mostrare più nulla (userai il sito normale)
  if (diffMs <= 0) {
    return null;
  }

  // Da 0 a 24 ore → Coming Soon con countdown
  if (diffHours <= 24) {
    return <ComingSoon />;
  }

  // Da 24 a 36 ore → pagina manutenzione / sito in costruzione
  if (diffHours <= 36) {
    return <Maintenance />;
  }

  // Oltre 36 ore: opzionalmente manutenzione "soft"
  // (ma nella pratica attiverai LAUNCH_MODE solo nelle ultime 36 ore)
  return <Maintenance />;
};

export default LaunchGate;


