// src/data/mete-capitali-images.js

// Importa tutte le immagini .webp nella cartella mete-capitali
// Es: /src/assets/mete-capitali/parigi.webp → slug "parigi"
const images = import.meta.glob("/src/assets/mete-capitali/*.webp", {
  eager: true,
  import: "default",
});

/**
 * CAPITALI_IMAGES è una mappa:
 * {
 *   [slug]: urlImmagine,
 *   ...
 * }
 *
 * dove "slug" è il nome del file senza estensione.
 * Es: "/src/assets/mete-capitali/parigi.webp" → "parigi"
 */
export const CAPITALI_IMAGES = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const filename = path.split("/").pop(); // "parigi.webp"
    const slug = filename.replace(".webp", ""); // "parigi"
    return [slug, url];
  })
);



