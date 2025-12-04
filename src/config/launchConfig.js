// src/config/launchConfig.js

// 🔁 DATA DI LANCIO REALE (ora italiana = 19:37, in UTC = 18:37)
export const LAUNCH_DATE = new Date("2025-12-04T19:45:00Z");

// 🛠 INIZIO MODALITÀ MANUTENZIONE (01:00 italiane = 00:00 UTC)
export const MAINTENANCE_START_DATE = new Date("2025-12-04T00:00:00Z");

// Millisecondi
export const ONE_HOUR_MS = 1000 * 60 * 60;
export const ONE_DAY_MS = ONE_HOUR_MS * 24;

export const getTimeDiffMs = () => {
  return LAUNCH_DATE.getTime() - Date.now();
};

export const getTimeLeft = () => {
  const diff = getTimeDiffMs();

  if (diff <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / ONE_DAY_MS);
  const hours = Math.floor((diff / ONE_HOUR_MS) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { total: diff, days, hours, minutes, seconds };
};

// Non più affidabile per il lancio definitivo → usalo solo per debug
export const isMaintenanceMode = () => {
  const now = Date.now();
  const start = MAINTENANCE_START_DATE.getTime();
  const launch = LAUNCH_DATE.getTime();

  console.log("DEBUG MAINT:", { now, start, launch, result: now >= start && now < launch });

  return now >= start && now < launch;
};







