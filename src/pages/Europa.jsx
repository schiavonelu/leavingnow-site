import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";


const Europa = () => {

  // 🔝 Torna sempre in top quando la Home viene caricata / ricaricata
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

  return (
    <>
      <InnerHero
        title="Europa"
        subtitle="Città d’arte, capitali romantiche e coste del Mediterraneo."
        image="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
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
              image="https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg"
              title="Città d’arte"
              badge="City break"
              period="Tutto l’anno, ideale primavera/autunno"
              description="Roma, Firenze, Parigi, Vienna, Praga: musei, monumenti, visite guidate, ingressi salta-fila e hotel in posizione strategica per vivere al massimo ogni città."
            />

            <ContinentCard
              image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"
              title="Mare Mediterraneo"
              badge="Mare & relax"
              period="Maggio – Settembre"
              description="Grecia, Spagna, Italia, Croazia: isole, crociere, villaggi, boutique hotel vista mare e combinati città + mare per un’estate tra tuffi ed esplorazioni."
            />

            <ContinentCard
              image="https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg"
              title="Tour su misura"
              badge="Su misura"
              period="In base alla destinazione"
              description="Fly &amp; drive, viaggi in treno, itinerari tra più capitali, esperienze locali e servizi personalizzati in base ai tuoi interessi e al tempo a disposizione."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Europa;


