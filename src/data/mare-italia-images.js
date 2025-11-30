// src/data/mare-italia-images.js

// Carica tutte le immagini .webp presenti in /src/assets/mare-italia
// Esempi di file:
// - mare-italia-riviera-romagnola.webp
// - mare-italia-versilia-elba.webp
// - mare-italia-sardegna-nord-esteso.webp
// - mare-italia-sardegna-sud.webp
// - mare-italia-salento-esteso.webp
// - mare-italia-gargano-esteso.webp
//
// La chiave dell’oggetto risultante sarà il nome del file SENZA estensione,
// così da combaciare con trip.id nel JSON.

const images = import.meta.glob("/src/assets/mete-mare-italia/*.webp", {
  eager: true,
  import: "default",
});

export const MARE_ITALIA_IMAGES = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const filename = path.split("/").pop(); // es: "mare-italia-riviera-romagnola.webp"
    const key = filename.replace(".webp", ""); // es: "mare-italia-riviera-romagnola"
    return [key, url];
  })
);

