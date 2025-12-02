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

  // lancio passato → non mostra nulla (userai il sito normale)
  if (diffMs <= 0) {
    return null;
  }

  // Se mancano 24 ore o meno → pagina Coming Soon con countdown
  if (diffHours <= 24) {
    return <ComingSoon />;
  }

  // Se siamo tra 24 e 36 ore → pagina manutenzione
  if (diffHours <= 36) {
    return <Maintenance />;
  }

  // Oltre 36 ore: opzionalmente manutenzione generica
  return <Maintenance />;
};

export default LaunchGate;




