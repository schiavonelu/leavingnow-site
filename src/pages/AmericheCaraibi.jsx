import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import SeasonalTeaserCompact from "../sections/shared/SeasonalTeaserCompact.jsx";

// 📌 Immagini locali (sostituisci i file non appena disponibili)
import americaImg from "../assets/destination/americhe-caraibi/hero.webp";
import usaCanadaImg from "../assets/destination/americhe-caraibi/usa-canada.webp";
import caraibiMessicoImg from "../assets/destination/americhe-caraibi/caraibi-messico.webp";
import sudAmericaImg from "../assets/destination/americhe-caraibi/sud-america.webp";

const AmericheCaraibi = () => {

  // 🔝 Torna sempre in alto al caricamento
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Americhe e Caraibi"
        subtitle="Strade infinite, metropoli luminose e mare da cartolina."
        image={americaImg}
      />

      <Breadcrumb />

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">

          {/* INTRO */}
          <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            Dalle metropoli degli Stati Uniti alle spiagge caraibiche, fino ai
            paesaggi spettacolari del Sud America: ogni viaggio è un film da
            vivere in prima persona, costruito su misura tra natura, città,
            musica e relax.
          </p>

          {/* CARD DESTINAZIONI */}
          <div className="grid gap-8 md:grid-cols-3">

            <ContinentCard
              image={usaCanadaImg}
              title="Stati Uniti & Canada"
              badge="On the road"
              period="Aprile – Ottobre (variabile per area)"
              description="New York, West Coast, grandi parchi, cascate del Niagara: fly & drive, tour guidati e itinerari iconici sulla Route 66 e lungo le coste."
            />

            <ContinentCard
              image={caraibiMessicoImg}
              title="Caraibi e Messico"
              badge="All inclusive"
              period="Dicembre – Aprile"
              description="Resort all inclusive, boutique hotel sul mare, combinati mare + siti archeologici e città coloniali per una vacanza tra cultura e spiagge bianche."
            />

            <ContinentCard
              image={sudAmericaImg}
              title="Sud America"
              badge="Grandi viaggi"
              period="Inverno europeo (novembre – marzo)"
              description="Brasile, Perù, Argentina, Cile e oltre: cascate, metropoli, montagne e paesaggi estremi in itinerari personalizzati tra nord e sud."
            />

          </div>
        </div>
      </section>
      <SeasonalTeaserCompact />
    </>
  );
};

export default AmericheCaraibi;



