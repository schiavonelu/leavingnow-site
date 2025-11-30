// src/data/mete-stagionali-images.js

// Usiamo l'hero generale come fallback di default (trama/base)
import heroImg from "../assets/destination/hero.webp";

// Importa tutte le .webp nella cartella mete-stagionali
// Percorso RELATIVO rispetto a questo file (src/data)
const images = import.meta.glob("../assets/mete-stagionali/*.webp", {
  eager: true,
  import: "default",
});

/**
 * SEASONAL_IMAGES è una mappa:
 * {
 *   [slug]: urlImmagine,
 *   ...
 * }
 *
 * dove "slug" è il nome del file senza estensione.
 * Es: "../assets/mete-stagionali/inverno-mercatini-trentino-austria.webp"
 *  → "inverno-mercatini-trentino-austria"
 */
export const SEASONAL_IMAGES = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const filename = path.split("/").pop(); // "inverno-mercatini-trentino-austria.webp"
    const slug = filename.replace(".webp", ""); // "inverno-mercatini-trentino-austria"
    return [slug, url];
  })
);

// Fallback di default (hero)
export const DEFAULT_SEASON_PATTERN = heroImg;

/**
 * Restituisce una singola immagine per una card, dato lo slug,
 * con fallback all'immagine di default.
 */
export const getSeasonImageBySlug = (slug, fallback = DEFAULT_SEASON_PATTERN) => {
  if (!slug) return fallback;
  return SEASONAL_IMAGES[slug] || fallback;
};

/**
 * Restituisce un'immagine RANDOM per una stagione (id: inverno/primavera/...)
 * cercando tra i file che iniziano con `${seasonId}-`.
 * Se non trova nulla, pesca random tra tutte le immagini disponibili.
 * Se non ci sono immagini, usa l'immagine di default.
 */
export const getRandomSeasonImageForSeason = (
  seasonId,
  fallback = DEFAULT_SEASON_PATTERN
) => {
  const allUrls = Object.values(SEASONAL_IMAGES);

  if (!seasonId || allUrls.length === 0) return fallback;

  const seasonPrefix = `${seasonId.toLowerCase()}-`;

  const seasonImages = Object.entries(SEASONAL_IMAGES)
    .filter(([slug]) => slug.startsWith(seasonPrefix))
    .map(([, url]) => url);

  const pool = seasonImages.length > 0 ? seasonImages : allUrls;
  if (pool.length === 0) return fallback;

  const index = Math.floor(Math.random() * pool.length);
  return pool[index];
};



