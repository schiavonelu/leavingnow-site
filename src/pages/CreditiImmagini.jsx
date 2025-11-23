const CreditiImmagini = () => {
  return (
    <section className="max-w-4xl mx-auto px-5 py-20">
      <h1 className="text-3xl font-bold mb-8 text-slate-900">
        Crediti Immagini
      </h1>

      <p className="text-slate-700 mb-6 leading-relaxed">
        Le immagini presenti su questo sito sono utilizzate nel rispetto delle
        licenze concesse dagli autori su{" "}
        <a
          href="https://www.pexels.com"
          className="text-sky-600 underline hover:text-sky-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pexels
        </a>
        . Ringraziamo di cuore i fotografi che hanno contribuito con i loro
        scatti.
      </p>

      <div className="space-y-4 text-sm text-slate-600">
        <p>
          – Foto Europa: scatto di <strong>Nome Fotografo</strong> via{" "}
          <a
            href="https://www.pexels.com"
            className="text-sky-600 underline hover:text-sky-800"
            target="_blank"
          >
            Pexels
          </a>
        </p>

        <p>
          – Foto Americhe & Caraibi: scatto di{" "}
          <strong>Nome Fotografo</strong> via{" "}
          <a
            href="https://www.pexels.com"
            className="text-sky-600 underline hover:text-sky-800"
            target="_blank"
          >
            Pexels
          </a>
        </p>

        <p>
          – Foto Africa: scatto di <strong>Nome Fotografo</strong> via{" "}
          <a
            href="https://www.pexels.com"
            className="text-sky-600 underline hover:text-sky-800"
            target="_blank"
          >
            Pexels
          </a>
        </p>

        <p>
          – Foto Asia: scatto di <strong>Nome Fotografo</strong> via{" "}
          <a
            href="https://www.pexels.com"
            className="text-sky-600 underline hover:text-sky-800"
            target="_blank"
          >
            Pexels
          </a>
        </p>

        <p>
          – Foto Oceania: scatto di <strong>Nome Fotografo</strong> via{" "}
          <a
            href="https://www.pexels.com"
            className="text-sky-600 underline hover:text-sky-800"
            target="_blank"
          >
            Pexels
          </a>
        </p>
      </div>

      <p className="mt-10 text-xs text-slate-500">
        *Nota: Le immagini sono utilizzate secondo le condizioni della licenza
        Pexels, che permette l&apos;uso gratuito anche per scopi commerciali.
        Non è obbligatoria l&apos;attribuzione, ma la riteniamo una forma di
        rispetto verso i fotografi.
      </p>
    </section>
  );
};

export default CreditiImmagini;
