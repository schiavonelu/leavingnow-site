// src/pages/LaunchGate.jsx
import { useEffect, useState } from "react";
import { getTimeDiffMs, ONE_HOUR_MS } from "../config/launchConfig";
import ComingSoon from "./ComingSoon";
import Maintenance from "./Maintenance";

const LaunchGate = () => {
  const [diffMs, setDiffMs] = useState(getTimeDiffMs());

  // Stato dell'overlay
  const [showOverlay, setShowOverlay] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [mode, setMode] = useState(null); // "maintenance" | "comingSoon" | null

  // Aggiorna la differenza di tempo ogni 1 secondo
  useEffect(() => {
    const interval = setInterval(() => {
      setDiffMs(getTimeDiffMs());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Gestione overlay + fade-out finale
  useEffect(() => {
    const hours = diffMs / ONE_HOUR_MS;
    const inWindow = diffMs > 0 && hours <= 36; // finestra di 36h prima del lancio

    if (inWindow) {
      const newMode = hours <= 24 ? "comingSoon" : "maintenance";

      if (mode !== newMode) {
        setMode(newMode);
      }
      if (!showOverlay) {
        setShowOverlay(true);
      }
      if (isFadingOut) {
        setIsFadingOut(false);
      }
      return;
    }

    // Fuori dalla finestra (lancio passato o troppo lontano) → se overlay visibile, fai dissolve e poi rimuovi
    if (showOverlay && !isFadingOut) {
      setIsFadingOut(true);

      const timeout = setTimeout(() => {
        setShowOverlay(false);
        setIsFadingOut(false);
        setMode(null);
      }, 500); // 0,5s di dissolve

      return () => clearTimeout(timeout);
    }
  }, [diffMs, showOverlay, isFadingOut, mode]);

  // Se non dobbiamo mostrare nulla
  if (!showOverlay || !mode) {
    return null;
  }

  const OverlayContent = mode === "comingSoon" ? ComingSoon : Maintenance;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white transition-opacity duration-500 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <OverlayContent />
    </div>
  );
};

export default LaunchGate;






