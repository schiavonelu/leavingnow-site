import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";

const CreditiImmagini = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Crediti immagini"
        subtitle="Un ringraziamento ai fotografi che raccontano il mondo attraverso i loro scatti."
        image="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg"
      />

      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm px-6 py-8 md:px-8 md:py-10 text-sm md:text-base text-slate-700 leading-relaxed text-justify space-y-5">

            {/* INTRO GENERALE */}
            <p>
              Le immagini presenti su questo sito sono utilizzate nel rispetto delle
              licenze offerte da{" "}
              <a
                href="https://www.pexels.com"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              . Anche se l&apos;attribuzione non è obbligatoria, abbiamo scelto di
              ringraziare chi mette a disposizione i propri scatti.
            </p>

            <hr className="border-slate-200" />

            {/* 🔹 HOME PAGE – HERO (SEA BLUE) */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Hero della homepage – mare blu.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Scatto che trasmette serenità, libertà e l’essenza del viaggio.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              Asad Photo Maldives.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/foto-del-mare-blu-1430677/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – &quot;foto del mare blu&quot;
              </a>.
            </p>

            {/* 🔹 OCEANIA – HERO HOME PAGE */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Hero della homepage – Oceania (mare/oceano a forma di cuore).<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Immagine evocativa del mare cristallino e dei paesaggi dell’Oceania.<br />
              <span className="font-semibold text-[#132C50]">Fotografa:</span>{" "}
              Katie Cerami.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/mare-oceano-verde-a-forma-di-cuore-11807185/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – &quot;mare oceano verde a forma di cuore&quot;
              </a>.
            </p>

            {/* 🔹 OCEANIA – HERO PAGINA INTERNA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Hero Oceania – isola con cottage e sdraio.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Scatto che rappresenta il relax tropicale delle isole oceaniche.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              Asad Photo Maldives.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/un-isola-con-cottage-e-sedie-a-sdraio-1174732/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – &quot;un'isola con cottage e sedie a sdraio&quot;
              </a>.
            </p>

            {/* 🔹 NUOVA ZELANDA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Nuova Zelanda – persona con felpa rossa.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Paesaggi montuosi e boscosi tipici della Nuova Zelanda.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              Sam Kolder.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/persona-che-indossa-la-felpa-con-cappuccio-rossa-in-piedi-vicino-agli-alberi-con-la-montagna-a-distanza-395242/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – &quot;persona con felpa rossa&quot;
              </a>.
            </p>

            {/* 🔹 AUSTRALIA – SYDNEY */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Sydney Opera House – Australia.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Iconico scatto del simbolo architettonico australiano.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              Belle Co.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/white-sydney-opera-house-2193300/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – &quot;white sydney opera house&quot;
              </a>.
            </p>

            {/* 🔹 OCEANO PACIFICO */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Oceano Pacifico – ombra di palma sulla sabbia.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Atmosfera tropicale tipica delle spiagge del Pacifico.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              Krivec Ales.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/ombra-di-albero-di-cocco-in-riva-al-mare-2765869/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – &quot;ombra di albero di cocco&quot;
              </a>.
            </p>

            {/* 🔹 DESTINAZIONI – MAPPA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Mappa del mondo – pagina Destinazioni.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Illustrazione che introduce l’esplorazione globale.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              Aaditya Arora.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/illustrazione-della-mappa-del-mondo-592753/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – &quot;mappa del mondo&quot;
              </a>.
            </p>

            {/* ------------------------------------------------ */}
            {/* 🔹 METE – CAPITALI (TUTTE INSERITE) */}
            {/* ------------------------------------------------ */}

            <hr className="border-slate-200" />
            <h2 className="text-lg font-semibold text-[#132C50] pt-2">Mete – Capitali</h2>

            {/* CAPITALI – GENERATE MANUALMENTE IN MODO ORDINATO */}

            {/* LONDRA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Londra – skyline iconico.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Simbolo moderno della capitale britannica.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Londra
              </a>.
            </p>

            {/* PARIGI */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Parigi – Torre Eiffel.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Icona romantica della capitale francese.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?cs=srgb&dl=pexels-pixabay-460672.jpg"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Parigi
              </a>.
            </p>

            {/* MADRID */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Madrid – Palazzo delle Comunicazioni.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Monumento emblema della capitale spagnola.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/fontana-di-cibele-di-fronte-al-palazzo-delle-comunicazioni-a-madrid-spagna-16133335/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Madrid
              </a>.
            </p>

            {/* BERLINO */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Berlino – Konzerthaus.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Iconica architettura storica berlinese.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/edificio-konzerthaus-di-berlino-1128424/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Berlino
              </a>.
            </p>

            {/* LISBONA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Lisbona – luci natalizie urbane.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Atmosfera suggestiva della capitale portoghese.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/citta-edifici-natale-urbano-19952257/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Lisbona
              </a>.
            </p>

            {/* BUDAPEST */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Budapest – riflessi sul Danubio.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Scorcio romantico della capitale ungherese.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/specchio-d-acqua-vicino-all-edificio-2350351/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Budapest
              </a>.
            </p>

            {/* ATENE */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Atene – Partenone.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Icona immortale dell’antica Grecia.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/fotografia-ad-angolo-basso-del-partenone-durante-il-giorno-164336/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Atene
              </a>.
            </p>

            {/* VALENCIA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Valencia – skyline notturno.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Riflessioni sul Mediterraneo in notturna.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/riflessione-del-paesaggio-urbano-in-mare-di-notte-256150/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Valencia
              </a>.
            </p>

            {/* NIZZA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Nizza – costa e lungomare.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Colori vivaci della Costa Azzurra.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/mare-auto-strada-veicoli-16797538/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Nizza
              </a>.
            </p>

            {/* DUBLINO */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Dublino – ponte Samuel Beckett.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Iconica struttura sul fiume Liffey.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/ponte-di-cemento-bianco-3566191/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Dublino
              </a>.
            </p>

            {/* MARSIGLIA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Marsiglia – porto e mare.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> La vivacità mediterranea della città francese.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/29803747/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Marsiglia
              </a>.
            </p>

            {/* VARSAVIA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Varsavia – skyline contemporaneo.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Equilibrio tra storia e modernità nella capitale polacca.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/14621/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Varsavia
              </a>.
            </p>

            {/* CRACOVIA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Cracovia – chiesa storica.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Elegante architettura religiosa della città polacca.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/chiesa-di-cemento-marrone-46273/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Cracovia
              </a>.
            </p>

            {/* STOCCOLMA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Stoccolma – ristorante galleggiante.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Iconico paesaggio nordico della capitale svedese.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/fotografia-architettonica-del-ristorante-galleggiante-39378/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Stoccolma
              </a>.
            </p>

            {/* COPENAGHEN */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Copenaghen – canali e barche.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Paesaggio marittimo tipico della capitale danese.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/edifici-nave-canale-trasporto-pubblico-14252682/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Copenaghen
              </a>.
            </p>

            {/* HELSINKI */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Helsinki – cattedrale bianca.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Icona della capitale finlandese.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/foto-della-cattedrale-vicino-agli-edifici-e-al-fiume-2311602/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Helsinki
              </a>.
            </p>

            {/* OSLO */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Oslo – edifici vicino al fiordo.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Architettura contemporanea riflessa nelle acque norvegesi.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/costruire-vicino-allo-specchio-d-acqua-2360665/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Oslo
              </a>.
            </p>

            {/* DANZICA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Danzica – centro storico.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Storica città portuale sul Baltico.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/vecchio-quartiere-della-citta-europea-sulla-costa-del-fiume-5273641/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Danzica
              </a>.
            </p>

            {/* REYKJAVIK */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Reykjavík – città innevata.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Colori nordici tra neve e architetture islandesi.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/neve-citta-edifici-inverno-7403883/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Reykjavík
              </a>.
            </p>

            {/* MALTA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Malta – La Valletta.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Panorama della capitale maltese al tramonto.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/photo/golden-hour-view-of-valletta-skyline-in-malta-30279310/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Malta
              </a>.
            </p>

            {/* SIVIGLIA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span> Siviglia – Plaza de España.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span> Maestosa piazza simbolo dell’Andalusia.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/photo/people-at-spain-square-in-seville-spain-22194241/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – Siviglia
              </a>.
            </p>

            <hr className="border-slate-200" />

            {/* NOTA FINALE */}
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              * Le immagini sono utilizzate secondo la licenza Pexels, che permette l&apos;uso gratuito anche commerciale.  
              I diritti rimangono dei rispettivi fotografi.  
              Questa pagina riconosce il loro contributo visivo al progetto Leaving Now.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreditiImmagini;










