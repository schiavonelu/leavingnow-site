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

  // LANCIO PASSATO o troppo distante: nessun overlay → sito normale
  if (diffMs <= 0 || diffHours > 36) {
    return null;
  }

  // Da 36h a 24h → manutenzione
  if (diffHours <= 36 && diffHours > 24) {
    return (
      <div className="fixed inset-0 z-50">
        <Maintenance />
      </div>
    );
  }

  // Da 24h a 0 → coming soon con countdown
  if (diffHours <= 24 && diffHours > 0) {
    return (
      <div className="fixed inset-0 z-50">
        <ComingSoon />
      </div>
    );
  }

  return null;
};

export default LaunchGate;





