import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

const Africa = () => {
// 🔝 Torna sempre in top quando la Home viene caricata / ricaricata
     useEffect(() => {
       window.scrollTo({ top: 0, left: 0, behavior: "auto" });
     }, []);
 
  return (
    <>
      <InnerHero
        title="Africa"
        subtitle="Safari, deserti e isole tropicali."
        image="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
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
              image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
              title="Safari &amp; grandi parchi"
              badge="Safari"
              period="Stagione secca (giugno – ottobre, a seconda del Paese)"
              description="Tanzania, Kenya, Sudafrica, Namibia: lodge selezionati, guide locali esperte, game drive all’alba e al tramonto per vedere la fauna nel suo habitat naturale."
            />

            <ContinentCard
              image="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg"
              title="Isole dell’Oceano Indiano"
              badge="Honeymoon"
              period="Aprile – Novembre (secondo l’isola)"
              description="Mauritius, Seychelles, Zanzibar, Madagascar: resort romantici, guesthouse autentiche e combinati mare + tour per un viaggio da ricordare."
            />

            <ContinentCard
              image="https://images.pexels.com/photos/2404370/pexels-photo-2404370.jpeg"
              title="Deserti e città storiche"
              badge="Esperienza culturale"
              period="Autunno e primavera"
              description="Marocco, Tunisia, Egitto: città imperiali, kasbah, crociere sul Nilo, notti nel deserto e visite guidate ai siti storici più importanti."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Africa;

