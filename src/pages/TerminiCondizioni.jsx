import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";

const TerminiCondizioni = () => {
  // 🔝 Torna sempre in top quando la pagina viene caricata
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Termini e Condizioni"
        subtitle="Regolano l’uso del sito e dei nostri servizi online."
        image="https://images.pexels.com/photos/4427817/pexels-photo-4427817.jpeg"
      />

      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          {/* DATA AGGIORNAMENTO */}
          <div className="mb-6 text-xs uppercase tracking-[0.18em] text-slate-500">
            Ultimo aggiornamento: 25 Novembre 2025
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm px-6 py-8 md:px-10 md:py-10 text-sm md:text-base text-slate-700 leading-relaxed space-y-6 text-justify">
            <p>
              Si prega di leggere attentamente questi Termini e Condizioni prima
              di utilizzare il nostro Servizio. Accedendo o utilizzando il sito
              web, l’Utente accetta di essere vincolato dalle presenti condizioni.
            </p>

            {/* INTERPRETAZIONE E DEFINIZIONI */}
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                Interpretazione e Definizioni
              </h2>

              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900 text-left">
                  Interpretazione
                </h3>
                <p>
                  Le parole con l’iniziale maiuscola hanno significati definiti
                  nelle seguenti condizioni. Le definizioni avranno lo stesso
                  significato indipendentemente dal fatto che appaiano al
                  singolare o al plurale.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-slate-900 text-left">
                  Definizioni
                </h3>
                <p>Ai fini dei presenti Termini e Condizioni:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Affiliato</strong> indica un’entità che controlla,
                    è controllata da o è sotto il controllo comune con una
                    parte, dove “controllo” significa la proprietà del 50% o
                    più delle azioni, interessi azionari o altri titoli aventi
                    diritto di voto per l’elezione di amministratori o altra
                    autorità di gestione.
                  </li>
                  <li>
                    <strong>Paese</strong> si riferisce a: Italia.
                  </li>
                  <li>
                    <strong>Azienda</strong> (indicata come “l’Azienda”, “Noi”,
                    “Ci” o “Nostro” in questo Accordo) si riferisce a Kiru
                    s.r.l., Via Atellana, 115 – 81031 Aversa (CE).
                  </li>
                  <li>
                    <strong>Dispositivo</strong> indica qualsiasi dispositivo
                    che può accedere al Servizio, come un computer, un telefono
                    cellulare o un tablet digitale.
                  </li>
                  <li>
                    <strong>Servizio</strong> si riferisce al sito web.
                  </li>
                  <li>
                    <strong>Termini e Condizioni</strong> rappresentano i
                    presenti Termini e Condizioni che costituiscono l’intero
                    accordo tra te e l’Azienda riguardo l’uso del Servizio.
                  </li>
                  <li>
                    <strong>Servizio di Social Media di Terze Parti</strong>{" "}
                    indica qualsiasi servizio o contenuto (inclusi dati,
                    informazioni, prodotti o servizi) fornito da terzi che
                    può essere visualizzato, incluso o reso disponibile tramite
                    il Servizio.
                  </li>
                  <li>
                    <strong>Sito Web</strong> si riferisce a Leaving Now,
                    accessibile da{" "}
                    <a
                      href="https://www.leavingnow.it/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      https://www.leavingnow.it/
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Tu</strong> indica l’individuo che accede o
                    utilizza il Servizio, o l’azienda o altra entità giuridica
                    per conto della quale tale individuo accede o utilizza il
                    Servizio, se applicabile.
                  </li>
                </ul>
              </div>
            </div>

            {/* ACCETTAZIONE */}
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                Accettazione dei Termini
              </h2>
              <p>
                Questi Termini e Condizioni regolano l’uso del Servizio e
                costituiscono l’accordo tra te e l’Azienda.
              </p>
              <p>
                Il tuo accesso e utilizzo del Servizio è condizionato dalla tua
                accettazione e conformità con questi Termini e Condizioni. Se
                non sei d’accordo con qualsiasi parte di questi Termini, non
                puoi accedere al Servizio.
              </p>
              <p>
                Dichiari di avere più di 18 anni. L’Azienda non consente
                l’utilizzo del Servizio a persone di età inferiore ai 18 anni.
              </p>
              <p>
                Il tuo accesso e utilizzo del Servizio è anche condizionato
                dalla tua accettazione della{" "}
                <span className="font-semibold">Privacy Policy</span> dell’Azienda,
                che disciplina le modalità di raccolta e trattamento dei dati
                personali.
              </p>
            </div>

            {/* LINK A SITI ESTERNI */}
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                Collegamenti ad Altri Siti Web
              </h2>
              <p>
                Il nostro Servizio può contenere collegamenti a siti web o
                servizi di terze parti che non sono di proprietà o controllati
                dall’Azienda.
              </p>
              <p>
                L’Azienda non ha alcun controllo su, e non si assume alcuna
                responsabilità per, contenuti, privacy policy o pratiche di
                siti web o servizi di terze parti. L’Utente è invitato a
                leggere sempre termini e condizioni e privacy policy di ogni
                sito terzo visitato.
              </p>
            </div>

            {/* CHIUSURA ACCESSO */}
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                Chiusura o Limitazione dell’Accesso
              </h2>
              <p>
                Possiamo sospendere o limitare l’accesso al Servizio
                immediatamente, senza preavviso, per qualsiasi motivo, incluso
                in caso di violazione dei presenti Termini.
              </p>
              <p>
                In caso di cessazione o limitazione dell’accesso, i diritti e
                gli obblighi maturati dalle parti fino alla data di cessazione
                resteranno salvi, inclusi, a titolo esemplificativo, eventuali
                obblighi di pagamento dovuti.
              </p>
            </div>

            {/* LIMITAZIONE DI RESPONSABILITÀ */}
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                Limitazione di Responsabilità
              </h2>
              <p>
                Nei limiti massimi consentiti dalla legge, l’Azienda e i suoi
                fornitori non saranno responsabili per danni indiretti,
                consequenziali, speciali o incidentali, inclusi, a titolo
                esemplificativo, perdita di profitti, dati o altre perdite
                immateriali derivanti o connesse all’uso o all’impossibilità
                di utilizzare il Servizio.
              </p>
              <p>
                In ogni caso, la responsabilità complessiva dell’Azienda
                nei confronti dell’Utente non supererà l’importo
                eventualmente corrisposto dall’Utente tramite il Servizio,
                o, in mancanza di tali corrispettivi, la somma di{" "}
                <strong>100,00 € (cento/00 euro)</strong>.
              </p>
            </div>

            {/* LEGGE APPLICABILE */}
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                Legge Applicabile e Foro Competente
              </h2>
              <p>
                Le leggi italiane regolano questi Termini e l’uso del Servizio,
                fatta salva l’applicazione di eventuali altre normative locali o
                internazionali applicabili. Eventuali controversie saranno
                devolute alla giurisdizione esclusiva dei tribunali competenti
                del luogo in cui ha sede l’Azienda, salvo diversa previsione
                inderogabile di legge a tutela del consumatore.
              </p>
            </div>

            {/* MODIFICHE AI TERMINI */}
            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                Modifiche ai Termini
              </h2>
              <p>
                Ci riserviamo il diritto di modificare o sostituire questi
                Termini in qualsiasi momento. In caso di modifiche rilevanti,
                cercheremo di fornire un preavviso adeguato prima
                dell’entrata in vigore delle nuove condizioni, ad esempio
                tramite avviso sul sito.
              </p>
              <p>
                Continuando ad accedere o utilizzare il Servizio dopo
                l’entrata in vigore delle modifiche, l’Utente accetta di essere
                vincolato dai Termini aggiornati.
              </p>
            </div>

            {/* CONTATTI */}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                Contattaci
              </h2>
              <p>
                Se hai domande sui presenti Termini e Condizioni, puoi contattarci:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  via email:{" "}
                  <a
                    href="mailto:leavingnowviaggi@gmail.com"
                    className="font-medium text-primary hover:underline"
                  >
                    leavingnowviaggi@gmail.com
                  </a>
                </li>
                <li>
                  visitando il sito:{" "}
                  <a
                    href="https://www.leavingnow.it/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    https://www.leavingnow.it/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TerminiCondizioni;


