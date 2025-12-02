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

  // Aggiorna la differenza di tempo ogni 30 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setDiffMs(getTimeDiffMs());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Gestione logica overlay + fade-out finale
  useEffect(() => {
    const hours = diffMs / ONE_HOUR_MS;
    const inWindow = diffMs > 0 && hours <= 36; // finestra attiva overlay (36h prima del lancio)

    if (inWindow) {
      // Siamo nella finestra di lancio → decido modalità
      const newMode = hours <= 24 ? "comingSoon" : "maintenance";
      setMode(newMode);
      setShowOverlay(true);
      setIsFadingOut(false);
      return;
    }

    // Fuori dalla finestra di lancio ma l'overlay è ancora visibile → avvia fade-out
    if (showOverlay && !isFadingOut) {
      setIsFadingOut(true);

      const timeout = setTimeout(() => {
        setShowOverlay(false);
        setIsFadingOut(false);
        setMode(null);
      }, 500); // durata dissolve in ms (0,5s)

      return () => clearTimeout(timeout);
    }
  }, [diffMs, showOverlay, isFadingOut]);

  // Se non dobbiamo mostrare l'overlay → nulla
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






