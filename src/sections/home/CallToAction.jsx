const CallToAction = () => {
  return (
    <section id="offerte" className="py-16 bg-gradient-to-r from-primary to-secondary">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Pronto a prenotare il tuo prossimo viaggio?
        </h2>
        <p className="text-sm md:text-base text-sky-100 mb-6">
          Inviaci una richiesta senza impegno: ti proporremo 3 soluzioni su misura entro 24 ore.
        </p>
        <a
          href="#contatti"
          className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-primary hover:bg-slate-100 transition shadow"
        >
          Richiedi preventivo personalizzato
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
