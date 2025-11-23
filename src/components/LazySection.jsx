// src/components/LazySection.jsx
import { useEffect, useRef, useState } from "react";

const LazySection = ({ loader, fallback = null }) => {
  const [Component, setComponent] = useState(null);
  const ref = useRef(null);
  const hasStartedLoadingRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && !hasStartedLoadingRef.current) {
          hasStartedLoadingRef.current = true;

          loader().then((mod) => {
            const Loaded = mod.default || mod;
            setComponent(() => Loaded);
          });

          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "200px 0px", // inizia a caricare un po' prima che entri a vista
        threshold: 0.1,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [loader]);

  return (
    <div ref={ref}>
      {Component ? <Component /> : fallback}
    </div>
  );
};

export default LazySection;
