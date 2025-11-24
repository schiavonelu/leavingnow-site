import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

// 📌 Immagini locali Asia
import heroImg from "../assets/destination/asia/hero.webp";
import estremoImg from "../assets/destination/asia/estremo-oriente.webp";
import sudEstImg from "../assets/destination/asia/sud-est-asiatico.webp";
import honeymoonImg from "../assets/destination/asia/honeymoon.webp";

const Asia = () => {

  // 🔝 Torna sempre in top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Asia"
        subtitle="Tra tradizioni millenarie e metropoli futuristiche."
        image={heroImg}   // <-- IMMAGINE LOCALE
      />

      <Breadcrumb />

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">

          <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            Templi, risaie, mercati, grattacieli, isole tropicali: ogni viaggio
            in Asia è un incontro tra culture, sapori, spiritualità e paesaggi
            completamente diversi tra loro. Perfetta per grandi viaggi e lune di
            miele.
          </p>

          <div className="grid gap-8 md:grid-cols-3">

            <ContinentCard
              image={estremoImg}
              title="Estremo Oriente"
              badge="Culture & città"
              period="Primavera e autunno"
              description="Giappone, Corea, Cina: templi, quartieri tradizionali, onsen, tecnologia e città ultramoderne in itinerari che uniscono tradizione e innovazione."
            />

            <ContinentCard
              image={sudEstImg}
              title="Sud-Est asiatico"
              badge="Mare & tour"
              period="Novembre – Aprile (stagione secca)"
              description="Thailandia, Vietnam, Indonesia, Singapore: tour culturali, mare tropicale, combinati città + isole e soggiorni in resort selezionati."
            />

            <ContinentCard
              image={honeymoonImg}
              title="Grandi viaggi & honeymoon"
              badge="Honeymoon"
              period="In base al Paese, spesso inverno europeo"
              description="Itinerari multi-paese, lune di miele e viaggi esperienziali con guide locali, trasferimenti privati e servizi pensati per rendere unico ogni momento."
            />

          </div>
        </div>
      </section>
    </>
  );
};

export default Asia;



