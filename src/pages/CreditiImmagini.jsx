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
              ringraziare chi mette a disposizione i propri scatti, contribuendo a
              trasmettere la bellezza del viaggio.
            </p>

            <hr className="border-slate-200" />

            {/* 🔹 ESEMPIO 1 – HERO HOME */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Hero della homepage (coppia in viaggio con valigia).<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Immagine di copertina che rappresenta lo spirito del viaggio e la voglia di partire.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              <a
                href="URL_PEXELS_FOTOGRAFO_HERO"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                NOME FOTOGRAFO HERO
              </a>
              .<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="URL_PEXELS_FOTO_HERO"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              .
            </p>

            {/* 🔹 EUROPA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Sezione / pagina Europa (città europee, paesaggio urbano o scorcio iconico).<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Foto utilizzata per rappresentare le destinazioni europee, tra città d&apos;arte,
              capitali storiche e panorami caratteristici.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              <a
                href="URL_PEXELS_FOTOGRAFO_EUROPA"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                NOME FOTOGRAFO EUROPA
              </a>
              .<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="URL_PEXELS_FOTO_EUROPA"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              .
            </p>

            {/* 🔹 AMERICHE & CARAIBI */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Sezione / pagina Americhe &amp; Caraibi (spiaggia, mare o paesaggio tropicale).<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Scatto che richiama le atmosfere delle isole caraibiche, delle grandi città
              americane o delle coste oceaniche.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              <a
                href="URL_PEXELS_FOTOGRAFO_AMERICHE"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                NOME FOTOGRAFO AMERICHE
              </a>
              .<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="URL_PEXELS_FOTO_AMERICHE"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              .
            </p>

            {/* 🔹 AFRICA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Sezione / pagina Africa (safari, deserto o paesaggio naturale africano).<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Immagine che rappresenta i safari, i tramonti nel deserto o le atmosfere naturali del continente africano.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              <a
                href="URL_PEXELS_FOTOGRAFO_AFRICA"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                NOME FOTOGRAFO AFRICA
              </a>
              .<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="URL_PEXELS_FOTO_AFRICA"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              .
            </p>

            {/* 🔹 ASIA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Sezione / pagina Asia (templi, città luminosa o paesaggio esotico).<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Foto scelta per raccontare il mix tra tradizione, spiritualità e modernità
              tipico delle destinazioni asiatiche.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              <a
                href="URL_PEXELS_FOTOGRAFO_ASIA"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                NOME FOTOGRAFO ASIA
              </a>
              .<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="URL_PEXELS_FOTO_ASIA"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              .
            </p>

            {/* 🔹 OCEANIA */}
            <p>
              <span className="font-semibold text-[#132C50]">Immagine:</span>{" "}
              Sezione / pagina Oceania (oceano, scogliera o grande paesaggio naturale).<br />
              <span className="font-semibold text-[#132C50]">Descrizione:</span>{" "}
              Immagine utilizzata per evocare i grandi spazi, il mare cristallino e la natura incontaminata di Australia, Nuova Zelanda e Pacifico.<br />
              <span className="font-semibold text-[#132C50]">Fotografo:</span>{" "}
              <a
                href="URL_PEXELS_FOTOGRAFO_OCEANIA"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                NOME FOTOGRAFO OCEANIA
              </a>
              .<br />
              <span className="font-semibold text-[#132C50]">Fonte:</span>{" "}
              <a
                href="URL_PEXELS_FOTO_OCEANIA"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              .
            </p>

            {/* 🔹 ALTRE IMMAGINI GENERALI */}
            <p>
              <span className="font-semibold text-[#132C50]">Altre immagini generali del sito:</span>{" "}
              alcune foto utilizzate come sfondo, elementi decorativi o immagini di
              contesto (es. sezioni informative, contatti, privacy) provengono sempre da{" "}
              <a
                href="https://www.pexels.com"
                className="text-sky-600 underline underline-offset-2 hover:text-sky-800"
                target="_blank"
                rel="noreferrer"
              >
                Pexels
              </a>
              . Per ciascuna immagine vengono rispettati i diritti e le condizioni
              stabilite dagli autori.
            </p>

            <hr className="border-slate-200" />

            {/* NOTA FINALE */}
            <p className="text-xs text-slate-500 leading-relaxed text-justify">
              * Le immagini sono utilizzate secondo le condizioni della licenza Pexels,
              che consente l&apos;uso gratuito anche per scopi commerciali. I diritti
              rimangono esclusivamente dei rispettivi fotografi. Questa pagina ha lo
              scopo di riconoscere il loro lavoro e valorizzare il contributo visivo al
              progetto Leaving Now.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreditiImmagini;





