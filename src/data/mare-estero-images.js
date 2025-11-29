// src/data/mare-estero-images.js

const images = import.meta.glob(
  "/src/assets/mare-estero/*.webp",
  {
    eager: true,
    import: "default",
  }
);

export const MARE_ESTERO_IMAGES = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const filename = path.split("/").pop(); // "mare-estero-ibiza.webp"
    const key = filename.replace(".webp", "");
    return [key, url];
  })
);
