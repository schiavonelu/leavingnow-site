// src/pages/MeteCapitali.jsx
import { useEffect, useState } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";
import ContinentCard from "../components/ui/ContinentCard.jsx";
import heroImg from "../assets/destination/hero.webp";

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";
const ITEMS_PER_PAGE = 9;

const CAPITAL_CITIES = [
  {
    title: "Parigi",
    badge: "Capitale europea",
    period: "Tutto l’anno",
    description:
      "Romantica, iconica, elegante. Parigi è perfetta per chi ama musei, bistrot, quartieri caratteristici e una certa atmosfera cinematografica in ogni stagione.",
  },
  {
    title: "Londra",
    badge: "Capitale europea",
    period: "Tutto l’anno",
    description:
      "Quartieri diversi tra loro, mercati, musei gratuiti, teatri e locali. Londra è una città da vivere a strati, ideale per più viaggi nel tempo.",
  },
  {
    title: "Madrid",
    badge: "Capitale europea",
    period: "Autunno – Primavera",
    description:
      "Tavoli all’aperto, tapas, arte e vita di quartiere. Una città vivace e solare, perfetta per chi cerca energia, cultura e ottimo cibo.",
  },
  {
    title: "Lisbona",
    badge: "Capitale europea",
    period: "Primavera – Autunno",
    description:
      "Saliscendi, miradouros, tram storici e quartieri dal fascino un po’ malinconico. Ideale per chi ama camminare, ascoltare musica e guardare il mare.",
  },
  {
    title: "Vienna",
    badge: "Capitale europea",
    period: "Tutto l’anno",
    description:
      "Elegante, curata, perfetta sia d’inverno tra mercatini e caffè storici, sia in primavera tra parchi e palazzi. Una città ideale per chi ama l’arte e la musica.",
  },
  {
    title: "Praga",
    badge: "Capitale europea",
    period: "Tutto l’anno",
    description:
      "Ponti, castelli, vicoli acciottolati e tetti rossi. Praga ha un’atmosfera fiabesca, perfetta per city break romantici o di scoperta culturale.",
  },
  {
    title: "Budapest",
    badge: "Capitale europea",
    period: "Autunno – Primavera",
    description:
      "Terme, ponti sul Danubio, locali e quartieri creativi. Budapest è ideale per chi vuole unire benessere, storia e vita notturna.",
  },
  {
    title: "Berlino",
    badge: "Capitale europea",
    period: "Tutto l’anno",
    description:
      "Storia recente, arte contemporanea, club, quartieri alternativi e spazi verdi. Una città che parla al presente, ideale per chi cerca contenuto e creatività.",
  },
  {
    title: "Bruxelles",
    badge: "Capitale europea",
    period: "Tutto l’anno",
    description:
      "Cioccolato, birre, palazzi storici e istituzioni europee. Perfetta come base anche per escursioni in giornata verso Bruges e Gand.",
  },
  {
    title: "Copenaghen",
    badge: "Capitale nordica",
    period: "Primavera – Inverno",
    description:
      "Design, hygge, caffetterie curate e quartieri colorati. Ideale per chi ama uno stile di vita rilassato, sostenibile e molto curato nei dettagli.",
  },
  {
    title: "Stoccolma",
    badge: "Capitale nordica",
    period: "Estate – Inverno",
    description:
      "Isolotti collegati da ponti, quartieri eleganti, musei e natura a portata di mano. Una capitale luminosa, vivibile e a misura d’uomo.",
  },
  {
    title: "Atene",
    badge: "Capitale mediterranea",
    period: "Primavera – Autunno",
    description:
      "Acropoli, vista sul mare, taverne e quartieri pieni di vita. Atene è perfetta sia come city break, sia come punto di partenza per le isole greche.",
  },
  {
    title: "Dublino",
    badge: "Capitale europea",
    period: "Autunno – Primavera",
    description:
      "Pub, musica dal vivo, parchi e scogliere a poca distanza. Una città accogliente, ideale per chi vuole un’atmosfera calda e rilassata.",
  },
  {
    title: "Varsavia",
    badge: "Capitale europea",
    period: "Primavera – Autunno",
    description:
      "Una città che parla di storia recente, ma anche di moderno, spazi verdi e quartieri in trasformazione. Interessante per chi cerca qualcosa di meno scontato.",
  },
  {
    title: "Helsinki",
    badge: "Capitale nordica",
    period: "Estate – Inverno",
    description:
      "Architettura nordica, saune, mare e design. Ideale per chi ama l’atmosfera scandinava e vuole combinare città e natura.",
  },
  {
    title: "Oslo",
    badge: "Capitale nordica",
    period: "Estate – Inverno",
    description:
      "Fjord, musei sul mare, quartieri nuovi e molta natura intorno. Perfetta per chi vuole una città nordica raccolta, luminosa e vivibile.",
  },
  {
    title: "Reykjavík",
    badge: "Capitale nordica",
    period: "Autunno – Inverno",
    description:
      "Piccola capitale immersa in paesaggi incredibili. Ideale come base per esplorare geyser, cascate, lagune termali e – con un po’ di fortuna – l’aurora boreale.",
  },
];

const MeteCapitali = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const totalPages = Math.ceil(CAPITAL_CITIES.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = CAPITAL_CITIES.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <InnerHero
        title="Mete capitali europee"
        subtitle="Grandi città, quartieri da esplorare, musei, locali e panorami iconici: una selezione di capitali su cui costruire il tuo viaggio."
        image={heroImg}
      />

      <Breadcrumb />

      {/* INTRO */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
            Idee di viaggio by Leaving Now
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-[#EB2480] mb-3">
            Capitali europee, senza pacchetti standard
          </h1>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed">
            Ogni capitale può essere vissuta in modi diversi: in coppia, tra
            amici, in famiglia o da soli. Qui trovi alcuni spunti da cui partire,
            ma il viaggio lo costruiamo su misura insieme.
          </p>
        </div>
      </section>

      {/* GRID + PAGINAZIONE */}
      <section className="py-8 md:py-10 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="grid gap-8 md:grid-cols-3">
            {currentItems.map((city, idx) => (
              <ContinentCard
                key={`${city.title}-${idx}`}
                image={heroImg}
                title={city.title}
                badge={city.badge}
                period={city.period}
                description={city.description}
              />
            ))}
          </div>

          {/* Paginazione */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              type="button"
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-slate-300 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#0863D6] hover:text-[#0863D6] transition"
            >
              ← Precedente
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1.5 text-xs md:text-sm rounded-full border ${
                  page === currentPage
                    ? "bg-[#0863D6] border-[#0863D6] text-white"
                    : "border-slate-300 text-slate-600 hover:border-[#0863D6] hover:text-[#0863D6]"
                } transition`}
              >
                {page}
              </button>
            ))}

            <button
              type="button"
              onClick={() =>
                currentPage < totalPages && handlePageChange(currentPage + 1)
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-slate-300 text-slate-600 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#0863D6] hover:text-[#0863D6] transition"
            >
              Successiva →
            </button>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#0863D6] mb-3">
            Consulenza personalizzata
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi partire da una capitale o combinarne più di una?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0EA5E9] bg-[#0EA5E9] text-white hover:bg-white hover:text-[#0863D6] hover:border-[#0863D6] transition"
            >
              Scrivici per parlarne insieme
            </a>
            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              Preferisci una consulenza?
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeteCapitali;
