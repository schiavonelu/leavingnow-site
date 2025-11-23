const DestinationsIntro = () => {
  return (
    <section
      id="next-section"
      className="w-full py-2 md:py-2"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Sottotitolo – primary (#0863D6) */}
        <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
          Le tue destinazioni
        </p>

        {/* Titolo – navy-900 (#132C50) */}
        <h2 className="text-2xl md:text-3xl font-medium text-[#EB2480]">
          Scopri il mondo con noi
        </h2>

        {/* Testo – navy-100 (#718093) */}
        <p className="mt-3 text-sm md:text-base text-slate-700

 max-w-2xl mx-auto">
          Dall’Europa all’Oceania: lasciati ispirare dalle nostre selezioni
          e trova il viaggio perfetto per te.
        </p>

      </div>
    </section>
  );
};

export default DestinationsIntro;



