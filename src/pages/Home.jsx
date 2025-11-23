import { useEffect } from "react";
import Hero from "../sections/home/Hero.jsx";
import DestinationsIntro from "../sections/home/DestinationIntro.jsx";
import DestinationsSection from "../sections/home/DestinationsSection.jsx";
import TripTypesStrip from "../components/ui/TripTypesStrip.jsx";
import TripTypesStripIntro from "../sections/home/TripTypesStripIntro.jsx";
import ReviewsSection from "../components/ui/ReviewsSection.jsx";
import ReviewsIntro from "../sections/home/ReviewsIntro.jsx";
import AgencyIntroStrip from "../sections/shared/AgencyIntroStrip.jsx";
import AgencyIntroHeader from "../sections/home/AgencyIntroHeader.jsx";
import StickySection from "../components/layout/StickySection.jsx";

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

      <Hero />

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
        {/* Card chiara + scura, senza intestazione interna */}
        <AgencyIntroStrip showHeading={false} />
      </StickySection>
    </main>
  );
};

export default Home;
















