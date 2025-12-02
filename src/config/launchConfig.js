// src/config/launchConfig.js

// 🔁 DATA DI LANCIO (cambiala solo qui)
export const LAUNCH_DATE = new Date("2025-12-03T21:00:00+01:00");

// Millisecondi
export const ONE_HOUR_MS = 1000 * 60 * 60;
export const ONE_DAY_MS = ONE_HOUR_MS * 24;

/**
 * Ritorna la differenza in ms tra ora e data di lancio
 */
export const getTimeDiffMs = () => {
  return LAUNCH_DATE.getTime() - Date.now();
};

/**
 * Calcola il tempo rimanente al lancio
 */
export const getTimeLeft = () => {
  const diff = getTimeDiffMs();

  if (diff <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / ONE_DAY_MS);
  const hours = Math.floor((diff / ONE_HOUR_MS) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    total: diff,
    days,
    hours,
    minutes,
    seconds,
  };
};



