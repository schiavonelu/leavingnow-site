const AgencyIntroHeader = () => {
  return (
    <section className="w-full py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Sottotitolo – primary (#0863D6) */}
        <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
          Chi siamo
        </p>

        {/* Titolo – navy-900 (#132C50) */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#132C50]">
          Agenzia viaggi ad Aversa: Leaving Now
        </h2>

        {/* Testo – navy-100 (#718093) */}
        <p className="mt-3 text-sm md:text-base text-[#718093] max-w-2xl mx-auto">
          Un team di consulenti di viaggio che ti segue dalla scelta della
          meta al rientro, con soluzioni su misura per coppie, famiglie,
          gruppi e viaggi di lavoro.
        </p>
      </div>
    </section>
  );
};

export default AgencyIntroHeader;



