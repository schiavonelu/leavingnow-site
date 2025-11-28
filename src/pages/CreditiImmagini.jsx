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
              Scatto che trasmette serenità, libertà e l’essenza del viaggio
              attraverso il colore intenso dell’oceano.<br />
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
              </a>
              .
            </p>

            {/* 🔹 OCEANIA – HERO HOME PAGE */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Hero della homepage – Oceania (mare/oceano verde a forma di cuore).<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Immagine evocativa del mare cristallino e dei grandi spazi naturali
              dell’Oceania.<br />
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
              </a>
              .
            </p>

            {/* 🔹 OCEANIA – HERO PAGINA INTERNA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Hero pagina Oceania – isola con cottage e sedie a sdraio.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Scatto che rappresenta il relax tropicale tipico delle isole dell’Oceania.<br />
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
              </a>
              .
            </p>

            {/* 🔹 NUOVA ZELANDA – HERO O SEZIONE INTERNA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Scatto Nuova Zelanda – persona con felpa rossa in ambiente naturale.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Fotografia che cattura l'essenza dei paesaggi montuosi e boscosi tipici della Nuova Zelanda.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              Sam Kolder.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/persona-che-indossa-la-felpa-con-cappuccio-rossa-in-piedi-vicino-agli-alberi-con-la-montagna-a-distanza-395242/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – &quot;persona con felpa rossa vicino agli alberi&quot;
              </a>
              .
            </p>

            {/* 🔹 AUSTRALIA – SYDNEY */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Sydney Opera House – Australia.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Iconico scatto della celebre Opera House, simbolo indiscusso dell’Australia.<br />
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
              </a>
              .
            </p>

            {/* 🔹 OCEANO PACIFICO – OMBRA PALMA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Oceano Pacifico – ombra di albero di cocco sulla spiaggia.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Scatto che richiama l'essenza delle spiagge del Pacifico, con atmosfere tropicali e rilassanti.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              Krivec Ales.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/ombra-di-albero-di-cocco-in-riva-al-mare-2765869/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – &quot;ombra di albero di cocco in riva al mare&quot;
              </a>
              .
            </p>

            {/* 🔹 DESTINAZIONI – MAPPA DEL MONDO */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Mappa del mondo – pagina Destinazioni.<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Illustrazione del globo utilizzata per introdurre l’esplorazione internazionale del sito.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              Aaditya Arora.<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="https://www.pexels.com/it-it/foto/illustrazione-della-mappa-del-mondo-592753/"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels – &quot;illustrazione della mappa del mondo&quot;
              </a>
              .
            </p>

            <hr className="border-slate-200" />

            {/* NOTA FINALE */}
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              * Le immagini sono utilizzate secondo le condizioni della licenza Pexels,
              che consente l&apos;uso gratuito anche per scopi commerciali. I diritti
              rimangono dei rispettivi fotografi. Questa pagina ne riconosce 
              il contributo visivo al progetto Leaving Now.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreditiImmagini;








