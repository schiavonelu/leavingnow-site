import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import SeasonalTeaserCompact from "../sections/shared/SeasonalTeaserCompact.jsx";

// 📌 Immagini locali Oceania
import heroImg from "../assets/destination/oceania/hero.webp";
import australiaImg from "../assets/destination/oceania/australia.webp";
import nuovaZelandaImg from "../assets/destination/oceania/nuova-zelanda.webp";
import pacificoImg from "../assets/destination/oceania/pacifico.webp";

const Oceania = () => {

  // 🔝 Torna sempre in top quando la pagina viene caricata
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Oceania"
        subtitle="Australia, Nuova Zelanda e isole del Pacifico."
        image={heroImg} // <-- immagine locale
      />

      <Breadcrumb />

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">

          <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            L’Oceania è il regno degli spazi sconfinati, delle strade on the
            road, dei mari turchesi e dei paesaggi da film. Una scelta ideale
            per chi sogna un grande viaggio o una luna di miele indimenticabile.
          </p>

          <div className="grid gap-8 md:grid-cols-3">

            <ContinentCard
              image={australiaImg}
              title="Australia"
              badge="On the road"
              period="Ottobre – Aprile (variabile per area)"
              description="Sydney, Queensland, deserto rosso e Great Ocean Road: viaggi fly & drive tra città vivaci, oceano, barriera corallina e outback australiano."
            />

            <ContinentCard
              image={nuovaZelandaImg}
              title="Nuova Zelanda"
              badge="Natura & trekking"
              period="Novembre – Marzo"
              description="Paesaggi da film, trekking, laghi e fiordi: itinerari tra Nord e Sud con auto a noleggio, attività outdoor e strutture selezionate."
            />

            <ContinentCard
              image={pacificoImg}
              title="Isole del Pacifico"
              badge="Paradiso tropicale"
              period="Maggio – Ottobre (a seconda dell’isola)"
              description="Fiji, Polinesia Francese e altre isole del Pacifico: resort da sogno, bungalow sull’acqua e combinati perfetti da abbinare ad Australia o Nuova Zelanda."
            />

          </div>
        </div>
      </section>
             <SeasonalTeaserCompact />
    </>
  );
};

export default Oceania;



