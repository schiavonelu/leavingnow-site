// src/data/viaggi-nozze-images.js

const images = import.meta.glob(
  "/src/assets/mete-viaggi-nozze/*.webp",
  {
    eager: true,
    import: "default",
  }
);

export const HONEYMOON_IMAGES = Object.fromEntries(
  Object.entries(images).map(([path, url]) => {
    const filename = path.split("/").pop(); // "dubai-maldive.webp"
    const slug = filename.replace(".webp", "");
    return [slug, url];
  })
);

