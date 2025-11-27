import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/home/Hero.jsx";
import StickySection from "../components/layout/StickySection.jsx";
import LazySection from "../components/LazySection.jsx";

// ✅ import diretti (no lazy) per la sezione Tipologie di viaggio
import TripTypesStripIntro from "../sections/home/TripTypesStripIntro.jsx";
import TripTypesStrip from "../components/ui/TripTypesStrip.jsx";

// 🔹 NUOVA SEZIONE DINAMICA METE STAGIONALI
import SeasonalHighlightSection from "../sections/home/SeasonalHighlightSection.jsx";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const HEADER_OFFSET = 80; // regola se serve (navbar + eventuale sticky)

    const hash = location.hash;

    if (hash) {
      const id = hash.replace("#", "");

      const scrollWithOffset = () => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - HEADER_OFFSET;

        window.scrollTo({
          top: targetY,
          behavior: "auto",
        });
      };

      // 1° tentativo subito dopo il render
      setTimeout(scrollWithOffset, 0);
      // 2° tentativo dopo un po' (quando lazy / immagini hanno finito di “spingere” la pagina)
      setTimeout(scrollWithOffset, 300);

      return;
    }

    // Nessun hash → normale scroll in alto
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return (
    <main>
      <h1 className="sr-only">
        Leaving Now - Agenzia viaggi ad Aversa specializzata in pacchetti
        vacanze, crociere e viaggi di nozze
      </h1>

      {/* HERO */}
      <Hero />

      {/* DESTINAZIONI – HEADER STICKY */}
      <section id="destinazioni">
        <StickySection
          header={
            <LazySection
              loader={() => import("../sections/home/DestinationIntro.jsx")}
              fallback={null}
            />
          }
        >
          <LazySection
            loader={() => import("../sections/home/DestinationsSection.jsx")}
            fallback={null}
          />
        </StickySection>
      </section>

      {/* 🔹 SEZIONE DINAMICA METE STAGIONALI (dopo i continenti) */}
      <section id="mete-stagionali">
        <SeasonalHighlightSection />
      </section>

      {/* TIPOLOGIE DI VIAGGIO – HEADER STICKY (NO LAZY QUI) */}
      <section id="tipologie">
        <StickySection header={<TripTypesStripIntro />}>
          <TripTypesStrip />
        </StickySection>
      </section>

      {/* RECENSIONI – HEADER STICKY */}
      <section id="recensioni">
        <StickySection
          header={
            <LazySection
              loader={() => import("../sections/home/ReviewsIntro.jsx")}
              fallback={null}
            />
          }
        >
          <LazySection
            loader={() => import("../components/ui/ReviewsSection.jsx")}
            fallback={null}
          />
        </StickySection>
      </section>

      {/* AGENZIA – HEADER STICKY */}
      <section id="agenzia">
        <StickySection
          header={
            <LazySection
              loader={() => import("../sections/home/AgencyIntroHeader.jsx")}
              fallback={null}
            />
          }
        >
          <LazySection
            loader={() => import("../sections/shared/AgencyIntroStrip.jsx")}
            fallback={null}
          />
        </StickySection>
      </section>
    </main>
  );
};

export default Home;






















