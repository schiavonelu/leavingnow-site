import { useEffect } from "react";
import Hero from "../sections/home/Hero.jsx";
import StickySection from "../components/layout/StickySection.jsx";
import LazySection from "../components/LazySection.jsx";

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

      {/* HERO: above-the-fold, caricata subito */}
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

      {/* TIPOLOGIE DI VIAGGIO – HEADER STICKY */}
      <StickySection
        header={
          <LazySection
            loader={() => import("../sections/home/TripTypesStripIntro.jsx")}
            fallback={null}
          />
        }
      >
        <LazySection
          loader={() => import("../components/ui/TripTypesStrip.jsx")}
          fallback={null}
        />
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


















