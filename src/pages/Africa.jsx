import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import SeasonalTeaserCompact from "../sections/shared/SeasonalTeaserCompact.jsx";

// 📌 Immagini locali Africa
import heroImg from "../assets/destination/africa/hero.webp";
import safariImg from "../assets/destination/africa/safari.webp";
import mareImg from "../assets/destination/africa/mare.webp";
import desertoImg from "../assets/destination/africa/deserto.webp";

const Africa = () => {

  // 🔝 Torna sempre in top quando la pagina viene caricata / ricaricata
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Africa"
        subtitle="Safari, deserti e isole tropicali."
        image={heroImg}   // <-- IMMAGINE LOCALE
      />

      <Breadcrumb />

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 space-y-10">

          <p className="text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            Il continente dei tramonti infuocati, della savana, delle isole
            tropicali e dei deserti dorati. Perfetto per grandi viaggi, lune di
            miele ed esperienze intense a contatto con la natura e le culture
            locali.
          </p>

          <div className="grid gap-8 md:grid-cols-3">

            <ContinentCard
              image={safariImg}
              title="Safari & grandi parchi"
              badge="Safari"
              period="Stagione secca (giugno – ottobre, a seconda del Paese)"
              description="Tanzania, Kenya, Sudafrica, Namibia: lodge selezionati, guide locali esperte, game drive all’alba e al tramonto per vedere la fauna nel suo habitat naturale."
            />

            <ContinentCard
              image={mareImg}
              title="Isole dell’Oceano Indiano"
              badge="Honeymoon"
              period="Aprile – Novembre (secondo l’isola)"
              description="Mauritius, Maldive, Seychelles, Zanzibar, Madagascar: resort romantici, guesthouse autentiche e combinati mare + tour per un viaggio da ricordare."
            />

            <ContinentCard
              image={desertoImg}
              title="Deserti e città storiche"
              badge="Esperienza culturale"
              period="Autunno e primavera"
              description="Marocco, Tunisia, Egitto: città imperiali, kasbah, crociere sul Nilo, notti nel deserto e visite guidate ai siti storici più importanti."
            />

          </div>
        </div>
      </section>
             <SeasonalTeaserCompact />
    </>
  );
};

export default Africa;


