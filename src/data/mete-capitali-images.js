// src/data/mete-capitali-images.js

// Importa tutte le .webp nella cartella mete-capitali
const images = import.meta.glob("/src/assets/mete-capitali/*.webp", {
  eager: true,
  import: "default",
});

/**
 * CAPITAL_CITIES_IMAGES è una mappa:
 * {
 *   [slug]: urlImmagine,
 *   ...
 * }
 *
 * dove "slug" è il nome del file senza estensione.
 * Es: "/src/assets/mete-capitali/parigi.webp" → "parigi"
 */
export const CAPITAL_CITIES_IMAGES = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const filename = path.split("/").pop(); // "parigi.webp"
    const slug = filename.replace(".webp", ""); // "parigi"
    return [slug, url];
  })
);

