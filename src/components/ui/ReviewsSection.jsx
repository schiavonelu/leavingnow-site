import { useEffect, useState } from "react";
import { FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import { useInView } from "../../hooks/useInView";

const reviews = [
  {
    name: "Margherita Imperatore",
    tripType: "Viaggio di Nozze · Giappone e Maldive",
    text: "Assia ci ha seguiti passo dopo passo con una professionalità incredibile. Sempre disponibile, gentile e preparata. Il nostro viaggio è stato perfetto e senza alcun intoppo. Un sogno realizzato! Grazie di cuore da Marghe e Fabri ♥️",
    rating: 5,
  },
  {
    name: "Lucio D'Isanto",
    tripType: "Crociera · Natale",
    text: "Organizzazione impeccabile: cabina perfetta, tavolo singolo con vista, pacchetto bevande consigliato da Assia super conveniente. Ciliegina sulla torta: escursione regalata a Valencia. Agenzia seria e precisa.",
    rating: 5,
  },
  {
    name: "Fabrizio Cristaldi",
    tripType: "Viaggio Individuale · Parigi",
    text: "Viaggio meraviglioso consigliato da Assia in ogni minimo dettaglio. Hotel in posizione strategica e suggerimenti utilissimi su cosa vedere. Già prenotato il prossimo viaggio con loro, perché sono il top!",
    rating: 5,
  },
  {
    name: "Matteo Massaro",
    tripType: "Viaggio di Nozze · Cile e Aruba",
    text: "Agenzia di fiducia da anni. L’ultimo viaggio in Cile e Aruba è stato straordinario: Atacama, Patagonia, Caraibi… tutto perfetto e organizzato nei minimi dettagli. Servizio eccezionale ovunque siamo stati.",
    rating: 5,
  },
  {
    name: "Anna Di Grazia",
    tripType: "Viaggio di Gruppo · Amsterdam",
    text: "Meta stupenda resa ancora migliore dalla loro assistenza! Ogni viaggio con loro è studiato alla perfezione, sanno sempre consigliare dove alloggiare in base alle esigenze. Professionalità e preparazione al top.",
    rating: 5,
  },
  {
    name: "Rosita Mendicino",
    tripType: "Mare Italia",
    text: "Assia è stata impeccabile: professionale, disponibile e attenta ad ogni dettaglio. Ha capito subito le mie esigenze e costruito un viaggio perfetto. Servizio accurato, gentilezza e massima attenzione al cliente.",
    rating: 5,
  },
  {
    name: "Michela Cannavale",
    tripType: "Viaggio di Nozze · New York & Santo Domingo",
    text: "Assia ha curato tutto nei dettagli: hotel perfetto a Manhattan, villaggio stupendo a Bayahibe, consigli utilissimi su trasporti e attrazioni. Ci ha assistiti anche durante un imprevisto. Ha realizzato un sogno!",
    rating: 5,
  },

  // --- NUOVE RECENSIONI ---
  {
    name: "Serena Odierna",
    tripType: "Viaggio di Gruppo · Amsterdam",
    text: "Ho prenotato da loro per il mio viaggio ad Amsterdam, tutto perfetto, dall’hotel ai posti che hanno saputo consigliarmi, e soprattutto mi hanno consigliato il periodo più giusto per avere belle giornate. Persone di cuore e sempre disponibili, attenti alle mie esigenze e super preparati. Ci vediamo per il prossimo viaggio, un grazie speciale ad Assia che senza di lei questo viaggio non sarebbe stato lo stesso.",
    rating: 5,
  },
  {
    name: "Teresa La Fata",
    tripType: "Viaggio in Europa · Grecia",
    text: "Quest'anno per la prima volta mi sono rivolta a questa agenzia per organizzare un viaggio per le mie vacanze estive e mai scelta è stata più azzeccata. Sono stata seguita con attenzione e gentilezza ed il viaggio è stato perfetto. Ritornerò sicuramente per altri viaggi.",
    rating: 5,
  },
  {
    name: "Marika Campanile",
    tripType: "Viaggio in Europa · Parigi",
    text: "Un grazie di cuore va ad Assia per aver reso il mio viaggio a Parigi semplicemente PERFETTO! Organizzazione impeccabile e massima disponibilità. Consigliatissima!",
    rating: 5,
  },
  {
    name: "Romolo",
    tripType: "Viaggio Individuale · Europa",
    text: "Mi sono trovato benissimo! Avete preparato il mio viaggio ad Amsterdam nei minimi dettagli in base alle mie esigenze.",
    rating: 5,
  },
  {
    name: "Raffaella Ferone",
    tripType: "Crociera · Caraibi",
    text: "Non potevamo scegliere di meglio per la nostra luna di miele. È stato un viaggio fantastico, tutto curato nei minimi dettagli. Grazie ai vostri consigli abbiamo visto luoghi spettacolari e fatto esperienze stupende che mai pensavamo di fare. Grazie davvero per la vostra precisione e soprattutto per la vostra disponibilità. Non vediamo l'ora di organizzare il prossimo viaggio con voi.",
    rating: 5,
  },
  {
    name: "Emia Ughetto",
    tripType: "Crociera di Famiglia · Mediterraneo",
    text: "Ci siamo affidati a questa agenzia per la nostra prima crociera. Assia si è dimostrata fin da subito disponibile e attenta alle nostre esigenze, organizzandoci nei minimi dettagli tutte le tappe. È stata un'esperienza bellissima e piacevole soprattutto per i nostri 3 figli ❤️. Si è rivelata una persona gentilissima e piena di amore per il suo lavoro! Sicuramente ci affideremo a loro per i prossimi viaggi. Complimenti Assia.",
    rating: 5,
  },
  {
    name: "Emanuela Sommella",
    tripType: "Viaggio di Coppia · Santo Domingo",
    text: "Una meravigliosa vacanza organizzata da Leaving Now, una riconferma! Ogni anno mi affido ad Assia e al suo team per organizzare il mio viaggio. Santo Domingo è stata la prima esperienza con quest’agenzia ed è stata ineccepibile, dai trasferimenti alle strutture perfettamente in linea con le nostre esigenze. Le esperienze trascorse (organizzate stesso in struttura) sono state impeccabili. Subito dopo io e il mio ragazzo abbiamo deciso di affidarci ancora a loro per Sharm el Sheikh, Sardegna e tanti altri viaggi. Cortesia, professionalità e attenzione al cliente. Non vedo l’ora di poter organizzare anche quest’anno il prossimo viaggio!",
    rating: 5,
  },
  {
    name: "Vincenza Marlisa De Lucia",
    tripType: "Viaggio di Nozze · Tour Thailandia + Maldive",
    text: "La nostra prima esperienza con loro è stata il nostro viaggio di nozze. In poco tempo hanno realizzato un viaggio ad hoc per noi. Volevamo un’esperienza unica e loro hanno realizzato il nostro sogno: tour organizzato della Thailandia e tappa da sogno alle Maldive. Assia è stata disponibile sin da subito, attenta alle nostre esigenze e ai nostri desideri. L’ho consigliata ad amici e parenti che, per viaggi più o meno lunghi, si sono rivolti a lei e sono rimasti altrettanto contenti. Continuate così! Consigliatissima! ❤️",
    rating: 5,
  },
  {
    name: "Giuseppe Sangiovanni",
    tripType: "Viaggio di Nozze · Fly & Drive USA",
    text: "Abbiamo scelto Leaving Now per organizzare il nostro viaggio di nozze. Tutto perfetto, sin dal primo momento sono stati attenti ad ascoltare tutte le nostre richieste e a cercare le varie soluzioni per soddisfare i nostri desideri. Sono riusciti a realizzare un pacchetto ad hoc con un rapporto qualità/prezzo imbattibile. I loro servizi tour operator, inoltre, fanno in modo da non avere alcuna preoccupazione durante tutta la durata del viaggio. Scelta più che consigliata, non vediamo l'ora di riorganizzare un altro viaggio con loro.",
    rating: 5,
  },
  {
    name: "Felisia Conte",
    tripType: "Viaggio di Nozze · Tour USA + Crociera Caraibi",
    text: "Il team della Leaving Now di Aversa, con la splendida Assia come timoniere, è davvero eccezionale. Assia organizza i viaggi dei suoi clienti come se fossero i suoi e quando si viaggia con lei è una sensazione che si sente costantemente addosso. A partire dai consigli sulle mete, la migliore ricerca di voli e sistemazioni (orari, comfort e soprattutto prezzo). Affidarmi completamente, per una maniaca del controllo come me, non è mai facile. Con Assia chiudo gli occhi e lascio fare a lei. Ogni volta è una riconferma ed ogni volta, in viaggio, anche in pieno ferragosto, non sei mai solo per qualsiasi evenienza. Grazie Leaving Now, grazie Assia.",
    rating: 5,
  },
  {
    name: "Nicola Ossuto",
    tripType: "Viaggi di Coppia · USA + Bahamas",
    text: "Hanno organizzato per me e la mia ragazza il viaggio dei nostri sogni in America (New York - Orlando - Bahamas). Hanno curato ogni minimo dettaglio e, cosa non trascurabile per una persona super ansiosa come me che viaggiava per la prima volta fuori Europa, sono stati sempre presenti per ogni dubbio o informazione durante l’intero soggiorno (anzi, molte volte anticipavano le risposte a domande che ancora dovevo formulare 😂).",
    rating: 5,
  },
];

const AUTO_SLIDE_MS_MOBILE = 9000;   // più tempo su mobile
const AUTO_SLIDE_MS_DESKTOP = 15000; // più tempo su desktop
const MAX_DESKTOP_PAGES = 3;

const ReviewsSection = () => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const [carouselReviews, setCarouselReviews] = useState([]);

  // shuffle iniziale per non avere sempre lo stesso ordine
  useEffect(() => {
    const shuffled = [...reviews].sort(() => Math.random() - 0.5);
    setCarouselReviews(shuffled);
  }, []);

  // responsive: 1 mobile, 2 tablet, 3 desktop
  useEffect(() => {
    const updatePerPage = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerPage(3);
      else if (w >= 768) setPerPage(2);
      else setPerPage(1);
      setCurrentPage(0); // reset pagina al cambio layout
    };

    updatePerPage();
    window.addEventListener("resize", updatePerPage);
    return () => window.removeEventListener("resize", updatePerPage);
  }, []);

  // limitiamo a max 3 pagine da 3 su desktop
  const getEffectiveReviews = () => {
    if (perPage === 3) {
      const maxVisible = MAX_DESKTOP_PAGES * perPage; // 3 pagine * 3 card
      return carouselReviews.slice(0, maxVisible);
    }
    return carouselReviews;
  };

  const effectiveReviews = getEffectiveReviews();
  const total = effectiveReviews.length || 1;
  const pageCount = Math.max(1, Math.ceil(total / perPage));

  const intervalMs =
    perPage === 1 ? AUTO_SLIDE_MS_MOBILE : AUTO_SLIDE_MS_DESKTOP;

  // autoplay
  useEffect(() => {
    if (pageCount <= 1 || !isVisible) return;

    const id = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % pageCount);
    }, intervalMs);

    return () => clearInterval(id);
  }, [pageCount, intervalMs, isVisible]);

  const startIndex = currentPage * perPage;
  const visibleReviews = effectiveReviews.slice(
    startIndex,
    startIndex + perPage
  );

  const getInitials = (name) =>
    name
      .trim()
      .split(" ")
      .filter(Boolean)
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div
          ref={ref}
          className={[
            "relative max-w-5xl mx-auto",
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          ].join(" ")}
        >
          <div className="grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleReviews.map((review, index) => (
              <article
                key={`${review.name}-${startIndex + index}`}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-50 via-white to-amber-50 border border-slate-200 px-5 py-6 md:px-6 md:py-7 shadow-[0_10px_35px_rgba(15,23,42,0.18)] transform transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.35)]"
              >
                <FaQuoteLeft className="pointer-events-none absolute -right-1 -bottom-2 text-6xl text-sky-100/70" />

                <div className="mb-3">
                  <div className="inline-flex items-center gap-1 rounded-full bg-white/80 border border-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 shadow-sm">
                    <FaCheckCircle className="text-[11px]" />
                    Recensione verificata
                  </div>
                </div>

                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white font-semibold text-sm shadow-md">
                      {getInitials(review.name)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm md:text-[15px]">
                        {review.name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {review.tripType}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-0.5 mb-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < review.rating
                              ? "text-amber-400 text-xs"
                              : "text-slate-300 text-xs"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-500">
                      {review.rating}.0 / 5
                    </span>
                  </div>
                </div>

                <p className="mt-1 text-sm md:text-[15px] text-slate-700 leading-relaxed text-justify">
                  {review.text}
                </p>
              </article>
            ))}
          </div>

          {/* PAGINATION DOTS */}
          <div className="flex flex-col items-center gap-1.5 mt-6">
            <div className="flex justify-center items-center gap-2">
              {Array.from({ length: pageCount }).map((_, index) => {
                const isActive = index === currentPage;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentPage(index)}
                    className="inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center group"
                  >
                    <span
                      className={[
                        "h-2.5 w-2.5 rounded-full border transition-all duration-200",
                        isActive
                          ? "bg-sky-500 border-sky-500"
                          : "border-slate-400 bg-transparent group-hover:border-sky-400 group-hover:bg-sky-100",
                      ].join(" ")}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;









