const ReviewsIntro = () => {
  return (
    <section className="w-full py-8 md:py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Sottotitolo – primary (#0863D6) */}
        <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
          Dicono di noi
        </p>

        {/* Titolo – navy-900 (#132C50) */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#EB2480]">
          Storie di viaggio vere, come le tue
        </h2>

        {/* Testo – navy-100 (#718093) */}
        <p className="mt-3 text-sm md:text-base text-slate-700

 max-w-2xl mx-auto">
          Qualche parola da chi è già partito con noi. Recensioni autentiche,
          per aiutarti a immaginare il tuo prossimo viaggio.
        </p>

      </div>
    </section>
  );
};

export default ReviewsIntro;

