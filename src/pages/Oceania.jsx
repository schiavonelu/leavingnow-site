import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

const Oceania = () => {

  // 🔝 Torna sempre in top quando la Home viene caricata / ricaricata
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Oceania"
        subtitle="Australia, Nuova Zelanda e isole del Pacifico."
        image="https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg"
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
              image="https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg"
              title="Australia"
              badge="On the road"
              period="Ottobre – Aprile (variabile per area)"
              description="Sydney, Queensland, deserto rosso e Great Ocean Road: viaggi fly &amp; drive tra città vivaci, oceano, barriera corallina e outback australiano."
            />

            <ContinentCard
              image="https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg"
              title="Nuova Zelanda"
              badge="Natura & trekking"
              period="Novembre – Marzo"
              description="Paesaggi da film, trekking, laghi e fiordi: itinerari tra Nord e Sud con auto a noleggio, attività outdoor e strutture selezionate."
            />

            <ContinentCard
              image="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg"
              title="Isole del Pacifico"
              badge="Paradiso tropicale"
              period="Maggio – Ottobre (a seconda dell’isola)"
              description="Fiji, Polinesia Francese e altre isole del Pacifico: resort da sogno, bungalow sull’acqua e combinati perfetti da abbinare ad Australia o Nuova Zelanda."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Oceania;


