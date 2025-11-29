// src/data/mare-italia-images.js

const images = import.meta.glob(
  "/src/assets/mare-italia/*.webp",
  {
    eager: true,
    import: "default",
  }
);

export const MARE_ITALIA_IMAGES = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const filename = path.split("/").pop(); // "mare-italia-riviera-romagnola.webp"
    const key = filename.replace(".webp", "");
    return [key, url];
  })
);
