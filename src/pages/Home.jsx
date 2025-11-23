import { useEffect, lazy, Suspense } from "react";
import Hero from "../sections/home/Hero.jsx";
import StickySection from "../components/layout/StickySection.jsx";

// Lazy loading delle sezioni non above-the-fold
const DestinationsIntro = lazy(() => import("../sections/home/DestinationIntro.jsx"));
const DestinationsSection = lazy(() => import("../sections/home/DestinationsSection.jsx"));
const TripTypesStrip = lazy(() => import("../components/ui/TripTypesStrip.jsx"));
const TripTypesStripIntro = lazy(() => import("../sections/home/TripTypesStripIntro.jsx"));
const ReviewsSection = lazy(() => import("../components/ui/ReviewsSection.jsx"));
const ReviewsIntro = lazy(() => import("../sections/home/ReviewsIntro.jsx"));
const AgencyIntroStrip = lazy(() => import("../sections/shared/AgencyIntroStrip.jsx"));
const AgencyIntroHeader = lazy(() => import("../sections/home/AgencyIntroHeader.jsx"));

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

      {/* Il resto può permettersi un fallback leggero mentre carica */}
      <Suspense fallback={null}>
        {/* DESTINAZIONI – HEADER STICKY */}
        <StickySection header={<DestinationsIntro />}>
          <DestinationsSection />
        </StickySection>

        {/* TIPOLOGIE DI VIAGGIO – HEADER STICKY */}
        <StickySection header={<TripTypesStripIntro />}>
          <TripTypesStrip />
        </StickySection>

        {/* RECENSIONI – HEADER STICKY */}
        <StickySection header={<ReviewsIntro />}>
          <ReviewsSection />
        </StickySection>

        {/* AGENZIA – HEADER STICKY */}
        <StickySection header={<AgencyIntroHeader />}>
          <AgencyIntroStrip showHeading={false} />
        </StickySection>
      </Suspense>
    </main>
  );
};

export default Home;

















