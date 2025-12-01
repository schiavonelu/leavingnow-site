// src/data/mare-estero-images.js

// Carica tutte le immagini .webp presenti in /src/assets/mare-estero
// Esempi:
// - mare-estero-canarie-tenerife.webp
// - mare-estero-ibiza.webp
// - mare-estero-grecia-mykonos.webp

const images = import.meta.glob("/src/assets/mete-mare-estero/*.webp", {
  eager: true,
  import: "default",
});

export const MARE_ESTERO_IMAGES = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const filename = path.split("/").pop();     // es: "mare-estero-grecia-mykonos.webp"
    const key = filename.replace(".webp", "");  // es: "mare-estero-grecia-mykonos"
    return [key, url];
  })
);


