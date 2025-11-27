import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaEuroSign,
  FaShieldAlt,
  FaUmbrellaBeach,
  FaHeart,
  FaCalendarCheck,
} from "react-icons/fa";
import InnerHero from "../sections/shared/InnerHero.jsx";
import { useInView } from "../hooks/useInView";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

// 📌 Immagini locali per la pagina "Chi siamo"
import heroImg from "../assets/chisiamo/hero.webp";
import assiaImg from "../assets/chisiamo/assia.webp";
import teamImg from "../assets/chisiamo/team.webp";
import partnerImg from "../assets/chisiamo/partner.webp";

const COLORS = {
  primary: "#0863D6", // Blue CTA
  accent: "#EB2480", // Pink accent
  navy700: "#1F3759",
  navy900: "#132C50",
};

const RESERVIO_URL = "https://leaving-now-viaggi.reservio.com/";

// TEAM DATA
const team = [
  {
    name: "Assia",
    role: "Travel Designer",
    bio: "Cuore creativo dell’agenzia, specializzata negli itinerari su misura per coppie e viaggiatori che cercano esperienze uniche.",
    image: assiaImg,
  },
  {
    name: "Team Leaving Now",
    role: "Consulenti",
    bio: "Un gruppo affiatato che lavora ogni giorno per garantire risposte rapide, proposte complete e assistenza puntuale.",
    image: teamImg,
  },
  {
    name: "I nostri viaggiatori",
    role: "I veri protagonisti",
    bio: "Le persone che ci scelgono danno senso al nostro lavoro: ascoltiamo i loro desideri, trasformiamo le idee in itinerari concreti e costruiamo ricordi che durano nel tempo.",
    image: heroImg, // oppure teamImg o un'altra foto che preferisci
  },
];

/* CARD VALORE – stesso stile delle altre pagine:
   - icona dentro box 44x44
   - card con bordo #E2E8F0, shadow leggera
*/
const ValueCard = ({ icon, badgeColor, title, text }) => (
  <article className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-5 md:p-7 flex gap-3 md:gap-4 items-start transition-all duration-200 hover:shadow-md">
    <div
      className="flex h-11 w-11 items-center justify-center rounded-2xl text-white shadow-md shrink-0"
      style={{ backgroundColor: badgeColor }}
    >
      <span className="text-xl">{icon}</span>
    </div>

    <div className="text-left">
      <h3 className="text-base md:text-lg font-semibold text-[#132C50] mb-1">
        {title}
      </h3>
      <p className="text-xs md:text-sm text-slate-700 leading-relaxed text-justify">
        {text}
      </p>
    </div>
  </article>
);

// SEZIONE "Pensiamo a tutto, tu pensa solo a rilassarti"
const PercheAffidarti = () => (
  <section className="py-12 md:py-16 bg-[#F8FAFC]">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2 text-[#0863D6]">
          I nostri punti di forza
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#EB2480]">
          Pensiamo a tutto, tu pensa solo a rilassarti
        </h2>

        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          Servizi, sicurezza e consulenza pensati per farti vivere ogni viaggio
          con la massima serenità.
        </p>
      </div>

      {/* 2 card per riga su desktop, 1 su mobile */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        <ValueCard
          icon={<FaUsers />}
          badgeColor={COLORS.accent}
          title="Team di Agenti di Viaggio"
          text="La nostra professionalità è al servizio delle vostre vacanze, con ascolto reale e assistenza continua."
        />

        <ValueCard
          icon={<FaEuroSign />}
          badgeColor={COLORS.accent}
          title="Best Price"
          text="È sempre garantito il miglior rapporto qualità/prezzo, con preventivi chiari e senza sorprese."
        />

        <ValueCard
          icon={<FaShieldAlt />}
          badgeColor={COLORS.accent}
          title="Trust & Safety"
          text="Pensiamo a tutto ciò che serve a garantirti il meglio per la tua vacanza, anche in caso di imprevisti."
        />

        <ValueCard
          icon={<FaUmbrellaBeach />}
          badgeColor={COLORS.accent}
          title="Viaggi da sogno"
          text="Consigliamo le migliori destinazioni per soddisfare ogni richiesta, dai viaggi relax alle esperienze più particolari."
        />

        <ValueCard
          icon={<FaHeart />}
          badgeColor={COLORS.accent}
          title="Passione per il Viaggio"
          text="Ogni viaggio è organizzato come se fosse il nostro: è la nostra passione a guidare ogni scelta."
        />

        <ValueCard
          icon={<FaCalendarCheck />}
          badgeColor={COLORS.accent}
          title="Prenotazioni sicure"
          text="Prenota velocemente e con le migliori garanzie, grazie a partner affidabili e processi sicuri."
        />
      </div>
    </div>
  </section>
);

// COMPONENTE PRINCIPALE
const ChiSiamo = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const { ref: teamRef, isVisible: teamVisible } = useInView({
    threshold: 0.2,
  });

  return (
    <>
      <InnerHero
        title="Chi siamo"
        subtitle="Leaving Now – Storie di viaggi su misura."
        image={heroImg}
      />

      <Breadcrumb />

      {/* STORIA AGENZIA */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-[#0863D6]">
            La nostra storia
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#EB2480]">
            Un’agenzia nata dall’ascolto, cresciuta grazie alle persone
          </h2>

          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            <p>
              Il nostro progetto nasce da una profonda passione per i viaggi, una
              passione cresciuta nel tempo fino a trasformarsi in una vera
              professione.
            </p>

            <p>
              Il lavoro di squadra è da sempre ciò che ci distingue: ognuno di noi
              ha un ruolo preciso, complementare e indispensabile per il successo
              di questa avventura. È proprio questa sinergia la nostra forza.
            </p>

            <p>
              Un altro pilastro fondamentale è lo studio continuo. Il nostro staff
              è costantemente aggiornato, curioso e pronto ad ampliare le proprie
              competenze nel settore turistico. Un impegno che ci ha permesso di
              raggiungere gli obiettivi attuali e che continuerà a guidarci verso
              traguardi sempre più ambiziosi.
            </p>

            <p>
              Uno dei nostri maggiori orgogli è la gestione dei viaggi di nozze,
              uno dei viaggi più significativi nella vita di una coppia. Li
              accompagniamo passo dopo passo, con delicatezza, cura e
              professionalità, perché possano custodire un ricordo davvero
              indelebile.
            </p>

            <p>
              Ma non ci fermiamo ai viaggi di nozze: lo staff di Leaving Now è in
              grado di organizzare qualsiasi tipo di viaggio o vacanza: viaggi di
              gruppo, crociere, itinerari personalizzati e molto altro.
            </p>

            <p>
              Ogni viaggio lo pensiamo, definiamo e curiamo come se fosse il
              nostro, ed è per questo che i nostri clienti tornano sempre
              soddisfatti e con tanta voglia di ripartire.
            </p>
          </div>
        </div>
      </section>

      {/* SEZIONE VALORI / PUNTI DI FORZA */}
      <PercheAffidarti />

      {/* TEAM */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-[#0863D6]">
              Il nostro team
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#EB2480]">
              Le persone dietro ogni viaggio
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Professionisti con esperienza, passione e cura del dettaglio: non
              solo consulenti, ma compagni di viaggio prima, durante e dopo la
              partenza.
            </p>
          </div>

          <div ref={teamRef} className="grid gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <article
                key={member.name}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={[
                  "rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-700 overflow-hidden flex flex-col",
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
                  <span className="absolute left-3 top-3 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm bg-[#0863D6]/80">
                    {member.role}
                  </span>
                </div>

                {/* TESTO */}
                <div className="p-6 flex-1 flex flex-col text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-[#132C50] mb-2">
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

      {/* CTA FINALE */}
      <section className="py-10 md:py-14 bg-[#132C50]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 text-[#0863D6]">
            Consulenza gratuita
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Vuoi parlare del tuo prossimo viaggio con noi?
          </h2>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-6">
            Raccontaci chi sei, con chi viaggi e che tipo di esperienza stai
            cercando. Possiamo sentirci in agenzia o da remoto e costruire
            insieme il viaggio giusto per te.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0863D6] bg-[#0863D6] text-white hover:bg-white hover:text-[#0863D6] transition"
            >
              Scrivici per informazioni
            </Link>

            <a
              href={RESERVIO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold border border-slate-500 text-slate-100 hover:border-[#EB2480] hover:text-[#EB2480] transition"
            >
              <FaCalendarCheck className="mr-2" />
              Prenota una consulenza
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChiSiamo;














