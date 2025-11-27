import { useEffect } from "react";
import Hero from "../sections/home/Hero.jsx";
import StickySection from "../components/layout/StickySection.jsx";
import LazySection from "../components/LazySection.jsx";

// ✅ import diretti (no lazy) per la sezione Tipologie di viaggio
import TripTypesStripIntro from "../sections/home/TripTypesStripIntro.jsx";
import TripTypesStrip from "../components/ui/TripTypesStrip.jsx";

// 🔹 NUOVA SEZIONE DINAMICA METE STAGIONALI
import SeasonalHighlightSection from "../sections/home/SeasonalHighlightSection.jsx";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main>
      <h1 className="sr-only">
        Leaving Now - Agenzia viaggi ad Aversa specializzata in pacchetti
        vacanze, crociere e viaggi di nozze
      </h1>

      {/* HERO */}
      <Hero />

      {/* DESTINAZIONI – HEADER STICKY */}
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

      {/* 🔹 SEZIONE DINAMICA METE STAGIONALI (dopo i continenti) */}
      <SeasonalHighlightSection />

      {/* TIPOLOGIE DI VIAGGIO – HEADER STICKY (NO LAZY QUI) */}
      <StickySection header={<TripTypesStripIntro />}>
        <TripTypesStrip />
      </StickySection>

      {/* RECENSIONI – HEADER STICKY */}
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

      {/* AGENZIA – HEADER STICKY */}
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
    </main>
  );
};

export default Home;




















