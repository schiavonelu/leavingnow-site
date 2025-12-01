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
import { Mail } from "lucide-react";
import { Helmet } from "react-helmet-async"; // 🟣 SEO pagina
import InnerHero from "../sections/shared/InnerHero.jsx";
import { useInView } from "../hooks/useInView";
import Breadcrumb from "../components/ui/Breadcrumb.jsx";

// 📌 Immagini locali per la pagina "Chi siamo"
import heroImg from "../assets/chisiamo/hero.webp";
import assiaImg from "../assets/chisiamo/assia.webp";
import teamImg from "../assets/chisiamo/team.webp";
import partnerImg from "../assets/chisiamo/hero.webp";

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
    name: "La nostra agenzia",
    role: "I veri protagonisti",
    bio: "Benvenuti nella nostra agenzia viaggi ad Aversa: uno spazio accogliente dove i vostri sogni di viaggio prendono forma. Raccontateci le vostre idee… al resto pensiamo insieme.",
    image: heroImg, // oppure teamImg o un'altra foto che preferisci
  },
];

/* CARD VALORE – stesso stile delle altre pagine */
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
  <section
    className="py-12 md:py-16 bg-[#F8FAFC]"
    aria-labelledby="perche-affidarti-title"
  >
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-2 text-[#0863D6]">
          I nostri punti di forza
        </p>

        <h2
          id="perche-affidarti-title"
          className="text-2xl md:text-3xl font-bold mb-3 text-[#EB2480]"
        >
          Pensiamo a tutto, tu pensa solo a rilassarti
        </h2>

        <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          Servizi, sicurezza e consulenza pensati per farti vivere ogni viaggio
          con la massima serenità: <strong>viaggi di nozze</strong>, crociere,
          biglietteria <strong>voli, treni e navi</strong>, vacanze mare e
          tour su misura.
        </p>
      </div>

      {/* 2 card per riga su desktop, 1 su mobile */}
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        <ValueCard
          icon={<FaUsers />}
          badgeColor={COLORS.accent}
          title="Team di Agenti di Viaggio"
          text="La nostra professionalità è al servizio delle vostre vacanze, con ascolto reale, consulenza personalizzata e assistenza continua prima, durante e dopo il viaggio."
        />

        <ValueCard
          icon={<FaEuroSign />}
          badgeColor={COLORS.accent}
          title="Best Price"
          text="Cerchiamo sempre il miglior rapporto qualità/prezzo per ogni proposta: preventivi chiari, nessun costo nascosto e soluzioni in linea con il vostro budget."
        />

        <ValueCard
          icon={<FaShieldAlt />}
          badgeColor={COLORS.accent}
          title="Trust & Safety"
          text="Pensiamo a tutto ciò che serve a garantirti il meglio per la tua vacanza, con coperture assicurative, partner selezionati e supporto anche in caso di imprevisti."
        />

        <ValueCard
          icon={<FaUmbrellaBeach />}
          badgeColor={COLORS.accent}
          title="Viaggi da sogno"
          text="Consigliamo le migliori destinazioni per soddisfare ogni richiesta: mare Italia ed estero, capitali europee, viaggi intercontinentali, crociere e tanto altro."
        />

        <ValueCard
          icon={<FaHeart />}
          badgeColor={COLORS.accent}
          title="Passione per il Viaggio"
          text="Ogni viaggio è organizzato come se fosse il nostro: la passione per il mondo del turismo guida ogni scelta e ogni dettaglio della vostra esperienza."
        />

        <ValueCard
          icon={<FaCalendarCheck />}
          badgeColor={COLORS.accent}
          title="Prenotazioni sicure"
          text="Dalla biglietteria aerea ai treni e traghetti, fino agli hotel e alle escursioni: prenotazioni rapide, sicure e gestite con partner affidabili."
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

  // 🔹 Dati strutturati AboutPage (collegato alla TravelAgency del sito)
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://leavingnow.it/chi-siamo#about",
    name: "Chi siamo - Leaving Now Agenzia Viaggi Aversa",
    description:
      "Scopri la storia, il team e i valori di Leaving Now, agenzia viaggi ad Aversa specializzata in viaggi di nozze su misura, crociere, biglietteria treni, navi e aerei per chi parte dall'area nord di Napoli e Caserta.",
    mainEntityOfPage: {
      "@type": "TravelAgency",
      "@id": "https://leavingnow.it/#agency",
    },
  };

  return (
    <>
      {/* 🟣 SEO specifico per la pagina Chi siamo */}
      <Helmet>
        <title>
          Chi siamo - Leaving Now Agenzia Viaggi Aversa | Viaggi su misura e
          viaggi di nozze
        </title>
        <meta
          name="description"
          content="Leaving Now è l'agenzia viaggi ad Aversa nata dalla passione per i viaggi su misura. Specializzati in viaggi di nozze, crociere, biglietteria voli, treni e navi per chi parte dall'area nord di Napoli e Caserta."
        />
        <meta
          name="keywords"
          content="chi siamo Leaving Now, agenzia viaggi Aversa, agenzia viaggi nord Napoli, travel designer Aversa, viaggi su misura Aversa, viaggi di nozze Aversa, crociere Aversa, biglietteria aerea Aversa, biglietteria treni Aversa, biglietteria navi Aversa, agenzia viaggi Caserta, agenzia viaggi Napoli nord"
        />
        <link rel="canonical" href="https://leavingnow.it/chi-siamo" />
        {/* Open Graph dedicato */}
        <meta
          property="og:title"
          content="Chi siamo - Leaving Now Agenzia Viaggi Aversa"
        />
        <meta
          property="og:description"
          content="Conosci il team di Leaving Now, agenzia viaggi ad Aversa: viaggi di nozze su misura, crociere, biglietteria voli, treni e navi, viaggi per coppie, famiglie e gruppi."
        />
        <meta
          property="og:url"
          content="https://leavingnow.it/chi-siamo"
        />
        <meta
          property="og:image"
          content="https://leavingnow.it/images/og-leaving-now.jpg"
        />
        <meta property="og:type" content="website" />
        {/* JSON-LD AboutPage */}
        <script type="application/ld+json">
          {JSON.stringify(aboutJsonLd)}
        </script>
      </Helmet>

      <InnerHero
        title="Chi siamo"
        subtitle="Leaving Now – Storie di viaggi su misura."
        image={heroImg}
      />

      <Breadcrumb />

      {/* STORIA AGENZIA */}
      <section
        className="py-12 md:py-16 bg-white"
        aria-labelledby="storia-agenzia-title"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-[#0863D6]">
            La nostra storia
          </p>

          <h1
            id="storia-agenzia-title"
            className="text-2xl md:text-3xl font-bold mb-6 text-[#EB2480]"
          >
            Un’agenzia viaggi ad Aversa nata dall’ascolto, cresciuta grazie alle persone
          </h1>

          <div className="space-y-4 text-sm md:text-base text-slate-700 leading-relaxed text-justify">
            <p>
              Leaving Now nasce come <strong>agenzia viaggi ad Aversa</strong> da una
              profonda passione per i viaggi, una passione cresciuta nel tempo
              fino a trasformarsi in una vera professione. Oggi accompagniamo
              chi parte dall&apos;area nord di Napoli e Caserta verso mete vicine
              e lontane, con soluzioni pensate su misura.
            </p>

            <p>
              Il lavoro di squadra è da sempre ciò che ci distingue: ognuno di noi
              ha un ruolo preciso, complementare e indispensabile per il successo
              di questa avventura. È proprio questa sinergia la nostra forza e ciò
              che ci permette di offrire <strong>consulenza, preventivi e assistenza</strong> in modo rapido e chiaro.
            </p>

            <p>
              Un altro pilastro fondamentale è lo studio continuo. Il nostro staff
              è costantemente aggiornato, curioso e pronto ad ampliare le proprie
              competenze nel settore turistico. Questo ci consente di proporre
              <strong> viaggi di nozze personalizzati, crociere, tour, vacanze mare e città,
              oltre alla biglietteria aerea, treni e navi</strong> con partner affidabili.
            </p>

            <p>
              Uno dei nostri maggiori orgogli è la gestione dei <strong>viaggi di nozze</strong>,
              uno dei viaggi più significativi nella vita di una coppia. Le
              accompagniamo passo dopo passo, con delicatezza, cura e
              professionalità, perché possano custodire un ricordo davvero
              indelebile e costruito su misura.
            </p>

            <p>
              Ma non ci fermiamo ai viaggi di nozze: lo staff di Leaving Now è in
              grado di organizzare qualsiasi tipo di viaggio o vacanza:{" "}
              <strong>viaggi di gruppo, crociere, city break, itinerari personalizzati,
              weekend in Europa, mare Italia ed estero</strong> e molto altro.
            </p>

            <p>
              Ogni viaggio lo pensiamo, definiamo e curiamo come se fosse il
              nostro, ed è per questo che molti clienti continuano a scegliere
              la nostra <strong>agenzia viaggi ad Aversa</strong> per partire in serenità,
              con la sicurezza di avere sempre un punto di riferimento.
            </p>
          </div>
        </div>
      </section>

      {/* SEZIONE VALORI / PUNTI DI FORZA */}
      <PercheAffidarti />

      {/* TEAM */}
      <section
        className="py-12 md:py-16 bg-white"
        aria-labelledby="team-title"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-2 text-[#0863D6]">
              Il nostro team
            </p>

            <h2
              id="team-title"
              className="text-2xl md:text-3xl font-bold text-[#EB2480]"
            >
              Le persone dietro ogni viaggio
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-700 max-w-2xl mx-auto">
              Professionisti con esperienza, passione e cura del dettaglio:
              non solo consulenti di viaggio, ma veri <strong>compagni di viaggio</strong>,
              pronti a seguirti prima, durante e dopo la partenza, sia in
              agenzia che da remoto.
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
                <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
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
      <section
        className="py-10 md:py-14 bg-[#132C50]"
        aria-labelledby="cta-contatti-title"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase mb-3 text-[#0863D6]">
            Consulenza gratuita
          </p>

          <h2
            id="cta-contatti-title"
            className="text-2xl md:text-3xl font-bold text-white mb-3"
          >
            Vuoi parlare del tuo prossimo viaggio con noi?
          </h2>

          <p className="text-sm md:text-base text-slate-300 max-w-2xl mx-auto mb-6">
            Raccontaci chi sei, con chi viaggi e che tipo di esperienza stai
            cercando. Possiamo sentirci in agenzia ad Aversa o da remoto e
            costruire insieme il <strong>viaggio su misura</strong> più adatto a te:
            vacanza mare, tour, crociera o viaggio di nozze.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contatti"
              className="inline-flex w-full sm:w-auto justify-center items-center rounded-full px-6 py-3 text-sm md:text-base font-semibold shadow-md border border-[#0863D6] bg-[#0863D6] text-white hover:bg-white hover:text-[#0863D6] transition"
            >
              <Mail className="text-lg mr-2" />
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














