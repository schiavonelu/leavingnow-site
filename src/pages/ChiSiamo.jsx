// src/pages/ChiSiamo.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkedAlt, FaSuitcaseRolling, FaUsers } from "react-icons/fa";
import InnerHero from "../sections/shared/InnerHero.jsx";
import { useInView } from "../hooks/useInView";

const team = [
  {
    name: "Assia",
    role: "Travel Designer",
    bio: "Cuore creativo dell’agenzia, specializzata nella costruzione di itinerari su misura per coppie e viaggiatori che cercano un’esperienza unica. Ama ascoltare, proporre alternative intelligenti e trasformare ogni richiesta in un viaggio che racconta una storia, la tua.",
    image: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg",
  },
  {
    name: "Team Leaving Now",
    role: "Consulenti",
    bio: "Un gruppo affiatato che lavora ogni giorno per garantire risposte rapide, proposte complete e assistenza puntuale. Ogni preventivo nasce dal confronto tra professionisti che curano con attenzione voli, hotel, transfer, documentazione e sicurezza del viaggio.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
  },
  {
    name: "Partner nel mondo",
    role: "Corrispondenti",
    bio: "Guide locali, tour operator e strutture selezionate presenti nelle destinazioni. Grazie a loro possiamo offrire assistenza in loco, esperienze autentiche e soluzioni flessibili, anche nei viaggi più complessi o nelle destinazioni più lontane.",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
  },
];

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";

const ChiSiamo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const { ref: teamRef, isVisible: teamVisible } = useInView({ threshold: 0.2 });

  return (
    <>
      <InnerHero
        title="Chi siamo"
        subtitle="Leaving Now – Storie di viaggi su misura."
        image="https://images.pexels.com/photos/3860095/pexels-photo-3860095.jpeg"
      />

      {/* STORIA AGENZIA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-sky-600 mb-2">
            La nostra storia
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            Un’agenzia nata dall’ascolto, cresciuta grazie alle persone
          </h2>

          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            <p>
              Leaving Now nasce con un’idea semplice ma spesso dimenticata:
              prima di scegliere un viaggio bisogna ascoltare chi lo farà. Non
              un catalogo, non una lista di offerte, ma una conversazione
              reale, fatta di esigenze, tempi, budget, desideri, paure,
              ispirazioni.
            </p>

            <p>
              Negli anni abbiamo costruito una rete solida di professionisti in
              Italia e nel mondo: guide locali, hotel selezionati, tour
              operator certificati, fornitori di servizi affidabili. Questo ci
              permette di creare itinerari autentici, curati e sicuri,
              adattandoli a famiglie, coppie, gruppi e viaggiatori singoli.
            </p>

            <p>
              Oggi Leaving Now è una realtà moderna, strutturata e concreta: un
              punto di riferimento per chi vuole un viaggio progettato davvero
              su misura, con assistenza costante, chiarezza nei costi e
              soluzioni personalizzate in ogni fase, prima, durante e dopo la
              partenza.
            </p>
          </div>
        </div>
      </section>

      {/* PERCHÉ SCEGLIERCI */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-sky-600 mb-2">
              I nostri valori
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Perché scegliere Leaving Now
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {/* CARD 1 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-200">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-md">
                <FaSuitcaseRolling className="text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Viaggi su misura, davvero
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Ascoltiamo attentamente esigenze e preferenze per creare
                  itinerari unici, non pacchetti preconfezionati. Ogni viaggio
                  nasce da una consulenza dedicata, pensata per valorizzare il
                  tuo modo di esplorare il mondo.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-200">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md">
                <FaMapMarkedAlt className="text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Partner selezionati nel mondo
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Collaboriamo solo con operatori affidabili, presenti sul
                  territorio, che garantiscono qualità, sicurezza e autenticità.
                  Questo ci permette di proporti esperienze reali, curate e
                  personalizzate.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-200">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md">
                <FaUsers className="text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Assistenza presente e umana
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Siamo al tuo fianco in tutte le fasi del viaggio: dalla scelta
                  iniziale al rientro. Risposte rapide, comunicazione chiara e
                  supporto reale quando serve fanno parte del nostro modo di
                  lavorare.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-slate-200">
              <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-md">
                ✈️
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">
                  Soluzioni chiare e senza sorprese
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Preventivi trasparenti, costi dettagliati e proposte spiegate
                  punto per punto: crediamo che un viaggio ben progettato inizi
                  da informazioni chiare e da un confronto sereno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-sky-600 mb-2">
              Il nostro team
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Le persone dietro ogni viaggio
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-700
 max-w-2xl mx-auto text-center">
              Professionisti con esperienza, passione e cura del dettaglio.
              Non solo consulenti: compagni di viaggio prima, durante e dopo la partenza.
            </p>
          </div>

          <div ref={teamRef} className="grid gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <article
                key={member.name}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={[
                  "rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-700 overflow-hidden flex flex-col",
                  teamVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6",
                ].join(" ")}
              >
                {/* FOTO + BADGE */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-sky-600/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    {member.role}
                  </span>
                </div>

                {/* TESTO */}
                <div className="p-6 flex-1 flex flex-col text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed text-justify">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULENZA GRATUITA */}
      <section className="py-10 md:py-14 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-sky-600 mb-3">
            Consulenza gratuita
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi parlare del tuo prossimo viaggio con noi?
          </h2>
          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-6">
            Raccontaci chi sei, con chi viaggi e che tipo di esperienza stai cercando.
            Puoi richiedere una consulenza gratuita in agenzia o da remoto: ti aiuteremo a trovare la soluzione più adatta a te.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm md:text-base font-semibold text-white shadow-lg border border-sky-400 hover:bg-white hover:text-sky-600 hover:border-sky-500 transition"
            >
              Scrivici per informazioni
            </Link>

            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 px-6 py-3 text-sm md:text-base font-semibold text-slate-100 hover:border-sky-400 hover:text-sky-500 transition"
            >
              Prenota una consulenza in agenzia
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChiSiamo;







