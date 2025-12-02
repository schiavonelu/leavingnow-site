// src/pages/Home.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/home/Hero.jsx";
import StickySection from "../components/layout/StickySection.jsx";
import LazySection from "../components/LazySection.jsx";

// ✅ import diretti (no lazy) per la sezione Tipologie di viaggio
import TripTypesStripIntro from "../sections/home/TripTypesStripIntro.jsx";
import TripTypesStrip from "../components/ui/TripTypesStrip.jsx";

// 🔹 SEZIONE DINAMICA METE STAGIONALI
import SeasonalHighlightSection from "../sections/home/SeasonalHighlightSection.jsx";

const HEADER_OFFSET = 80; // navbar + eventuali elementi sticky

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const { pathname, hash } = location;

    const scrollWithOffset = (id) => {
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

    if (hash) {
      const id = hash.replace("#", "");
      setTimeout(() => scrollWithOffset(id), 0);
      setTimeout(() => scrollWithOffset(id), 300);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return (
    <main>
      <h1 className="sr-only">
        Leaving Now – agenzia viaggi ad Aversa per viaggi su misura, crociere e viaggi di nozze
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

      {/* METE STAGIONALI – BANNER DINAMICO */}
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























