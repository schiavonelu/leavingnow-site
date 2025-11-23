const TripTypesStripIntro = () => {
  return (
    <section className="w-full py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Sottotitolo – primary (#0863D6) */}
        <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
          Le tue esperienze
        </p>

        {/* Titolo – navy-900 (#132C50) */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#132C50]">
          Viaggi su misura per ogni occasione
        </h2>

        {/* Descrizione – navy-100 (#718093) */}
        <p className="mt-3 text-sm md:text-base text-slate-600
 max-w-2xl mx-auto">
          Dalle lune di miele ai viaggi di lavoro: scegli il viaggio che
          racconta davvero chi sei, al resto pensiamo noi.
        </p>

      </div>
    </section>
  );
};

export default TripTypesStripIntro;

