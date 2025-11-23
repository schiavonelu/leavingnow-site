// src/utils/loadAnalytics.js

let isAnalyticsLoaded = false;

export function loadAnalytics() {
  if (typeof window === "undefined") return;
  if (isAnalyticsLoaded) return; // evita doppi caricamenti

  isAnalyticsLoaded = true;

  const MEASUREMENT_ID = "G-XXXXXXXXXX"; // 🔴 Sostituisci con il tuo ID GA4

  // Inizializza dataLayer e gtag se non esistono
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  // Carica lo script di GA4
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

  script.onload = () => {
    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID);

    // Se vuoi, qui puoi anche impostare direttamente il consenso "granted"
    // ma in realtà lo stai già gestendo dal banner, quindi questo è opzionale.
    // window.gtag("consent", "update", {
    //   ad_storage: "granted",
    //   analytics_storage: "granted",
    // });
  };

  document.head.appendChild(script);
}
