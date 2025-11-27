import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import SeasonalTeaserCompact from "../sections/shared/SeasonalTeaserCompact.jsx";

// 📌 Immagini locali Europa
import heroImg from "../assets/destination/europa/hero.webp";
import cittaImg from "../assets/destination/europa/citta.webp";
import mareImg from "../assets/destination/europa/mare.webp";
import tourImg from "../assets/destination/europa/tour.webp";

const Europa = () => {

  // 🔝 Torna sempre in top quando la pagina viene aperta
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Europa"
        subtitle="Città d’arte, capitali romantiche e coste del Mediterraneo."
        image={heroImg}  // <-- immagine locale
      />

      <Breadcrumb />

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            Dalle grandi capitali come Roma, Parigi, Londra e Madrid ai piccoli
            borghi affacciati sul mare, l’Europa è ideale per city break,
            viaggi culturali e vacanze al mare. Creiamo itinerari su misura tra
            arte, enogastronomia, natura e relax.
          </p>

          <div className="grid gap-8 md:grid-cols-3">

            <ContinentCard
              image={cittaImg}     // <-- immagine locale CITTÀ
              title="Città d’arte"
              badge="City break"
              period="Tutto l’anno, ideale primavera/autunno"
              description="Roma, Firenze, Parigi, Vienna, Praga: musei, monumenti, visite guidate, ingressi salta-fila e hotel in posizione strategica per vivere al massimo ogni città."
            />

            <ContinentCard
              image={mareImg}      // <-- immagine locale MARE
              title="Mare Mediterraneo"
              badge="Mare & relax"
              period="Maggio – Settembre"
              description="Grecia, Spagna, Italia, Croazia: isole, crociere, villaggi, boutique hotel vista mare e combinati città + mare per un’estate tra tuffi ed esplorazioni."
            />

            <ContinentCard
              image={tourImg}      // <-- immagine locale TOUR
              title="Tour su misura"
              badge="Su misura"
              period="In base alla destinazione"
              description="Fly & drive, viaggi in treno, itinerari tra più capitali, esperienze locali e servizi personalizzati in base ai tuoi interessi e al tempo a disposizione."
            />

          </div>
        </div>
      </section>
       <SeasonalTeaserCompact />
    </>
  );
};

export default Europa;



