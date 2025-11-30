import LegalPageLayout from "../sections/shared/LegalPageLayout.jsx";
import heroPrivacyPolicy from "../assets/legal-pages/privacy-policy.webp";

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="Come gestiamo e proteggiamo i tuoi dati personali."
      heroImage={heroPrivacyPolicy}
      metaLabel="Privacy Policy di www.leavingnow.it"
      lastUpdate="25 Novembre 2025"
    >
      {/* TITOLARE */}
      <div className="space-y-2">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          Titolare del Trattamento dei Dati
        </h2>
        <p>
          <span className="font-semibold">Kiru s.r.l.</span> – Via
          Atellana, 115 – 81031 Aversa (CE)
        </p>
        <p>
          Indirizzo email del Titolare:{" "}
          <a
            href="mailto:leavingnowviaggi@gmail.com"
            className="font-medium text-[#0863D6] hover:underline"
          >
            leavingnowviaggi@gmail.com
          </a>
        </p>
      </div>

      {/* TIPI DI DATI */}
      <div className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          Tipologie di Dati raccolti
        </h2>
        <p>
          Fra i Dati Personali raccolti da questa Applicazione, in modo
          autonomo o tramite terze parti, possono rientrare: Dati di
          utilizzo; Strumenti di Tracciamento; nome; cognome; numero di
          telefono; dati di contatto; dati comunicati durante l’utilizzo
          del servizio (ad esempio tramite form di contatto o richiesta
          preventivo); contenuti del messaggio o dell’email; data ed ora
          del messaggio; mittente del messaggio.
        </p>
        <p>
          Dettagli completi su ciascuna tipologia di Dati Personali
          raccolti sono forniti nelle sezioni dedicate di questa privacy
          policy o mediante specifici testi informativi visualizzati prima
          della raccolta dei Dati stessi.
        </p>
        <p>
          I Dati Personali possono essere liberamente forniti dall’Utente
          o, nel caso di Dati di Utilizzo, raccolti automaticamente
          durante l’uso di questa Applicazione.
        </p>
        <p>
          Se non diversamente specificato, tutti i Dati richiesti da
          questa Applicazione sono obbligatori. Se l’Utente rifiuta di
          comunicarli, potrebbe essere impossibile per questa
          Applicazione fornire il Servizio.
        </p>
        <p>
          L’eventuale utilizzo di Cookie o altri strumenti di
          tracciamento ha la finalità di fornire il Servizio richiesto
          dall’Utente, oltre alle ulteriori finalità descritte nel
          presente documento e nella Cookie Policy.
        </p>
      </div>

      {/* MODALITÀ E LUOGO */}
      <div className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          Modalità e luogo del trattamento dei Dati raccolti
        </h2>

        <div className="space-y-2">
          <h3 className="font-semibold text-slate-900 text-left">
            Modalità di trattamento
          </h3>
          <p>
            Il Titolare adotta misure di sicurezza adeguate per impedire
            accesso, divulgazione, modifica o distruzione non autorizzate
            dei Dati Personali. Il trattamento viene effettuato mediante
            strumenti informatici e/o telematici, con modalità
            organizzative e logiche strettamente correlate alle finalità
            indicate.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-slate-900 text-left">
            Luogo
          </h3>
          <p>
            I Dati sono trattati presso le sedi operative del Titolare ed
            in ogni altro luogo in cui le parti coinvolte nel trattamento
            siano localizzate. I Dati Personali dell’Utente possono essere
            trasferiti in un paese diverso da quello in cui l’Utente si
            trova, nel rispetto delle norme vigenti in materia di
            trasferimento dei dati.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-slate-900 text-left">
            Periodo di conservazione
          </h3>
          <p>
            Se non diversamente indicato, i Dati Personali sono trattati
            e conservati per il tempo richiesto dalla finalità per la
            quale sono stati raccolti e possono essere conservati più a
            lungo in caso di obblighi di legge o in presenza di consenso
            espresso dell’Utente.
          </p>
        </div>
      </div>

      {/* FINALITÀ */}
      <div className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          Finalità del Trattamento dei Dati raccolti
        </h2>
        <p>
          I Dati dell’Utente sono raccolti per consentire al Titolare di
          fornire il Servizio, adempiere agli obblighi di legge,
          rispondere a richieste, tutelare i propri diritti ed interessi,
          individuare attività fraudolente, nonché per:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>hosting ed infrastruttura backend;</li>
          <li>gestione delle comunicazioni e delle richieste dell’Utente;</li>
          <li>interazione con piattaforme di contatto e messaggistica;</li>
          <li>gestione delle richieste di preventivo e prenotazione;</li>
          <li>analisi statistiche sull’utilizzo del sito e dei servizi.</li>
        </ul>
      </div>

      {/* GOOGLE ANALYTICS E COOKIE */}
      <div className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          Utilizzo di Google Analytics e Cookie
        </h2>
        <p>
          Questo sito utilizza <span className="font-semibold">Google Analytics</span>,
          un servizio di analisi web fornito da Google LLC (di seguito,
          “Google”), che permette di raccogliere, in forma aggregata, dati
          statistici sull’uso del sito (ad esempio pagine visitate, tempo
          di permanenza, tipologia di dispositivo utilizzato).
        </p>
        <p>
          Le informazioni generate dai cookie sull’utilizzo del sito da
          parte dell’Utente (incluso l’indirizzo IP, ove possibile reso
          anonimo) vengono trasmesse a e depositate presso i server di
          Google, che le utilizza per fornire al Titolare report e
          servizi relativi all’attività del sito. L’uso di questi cookie
          avviene sulla base del consenso espresso dall’Utente tramite il
          banner o le impostazioni della Cookie Policy.
        </p>
        <p>
          L’Utente può in ogni momento modificare le proprie preferenze
          relative ai cookie tramite l’apposito banner, le impostazioni
          del browser o facendo riferimento alla{" "}
          <span className="font-semibold">Cookie Policy</span> del sito, dove
          sono riportate informazioni dettagliate sui cookie utilizzati e
          sulle modalità di gestione del consenso.
        </p>
      </div>

      {/* DIRITTI UTENTE */}
      <div className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          Diritti dell’Utente (GDPR)
        </h2>
        <p>
          Gli Utenti possono esercitare diversi diritti riconosciuti dal
          Regolamento (UE) 2016/679 (“GDPR”), tra cui:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>revocare il consenso in qualsiasi momento;</li>
          <li>opporsi al trattamento dei propri Dati;</li>
          <li>ottenere l’accesso ai propri Dati;</li>
          <li>richiedere la rettifica o l’aggiornamento dei Dati;</li>
          <li>richiedere la limitazione del trattamento;</li>
          <li>richiedere la cancellazione dei Dati Personali;</li>
          <li>ottenere la portabilità dei Dati;</li>
          <li>
            proporre reclamo all’autorità di controllo competente (in
            Italia: Garante per la protezione dei dati personali).
          </li>
        </ul>
      </div>

      {/* COME ESERCITARE I DIRITTI */}
      <div className="space-y-2">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          Come esercitare i diritti
        </h2>
        <p>
          Le richieste relative ai diritti dell’Utente possono essere
          indirizzate al Titolare tramite i recapiti indicati in questa
          policy. Il Titolare si impegna a rispondere nel più breve tempo
          possibile e, in ogni caso, entro un mese dal ricevimento della
          richiesta, salvo i casi di particolare complessità previsti
          dalla normativa.
        </p>
      </div>

      {/* MODIFICHE POLICY */}
      <div className="space-y-2">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          Modifiche a questa privacy policy
        </h2>
        <p>
          Il Titolare si riserva il diritto di apportare modifiche alla
          presente privacy policy in qualunque momento, pubblicandone la
          versione aggiornata su questa pagina e, se possibile, dandone
          comunicazione tramite altri canali di contatto (ad esempio
          email, notifiche sul sito). Si invita pertanto l’Utente a
          consultare regolarmente questa pagina, facendo riferimento alla
          data di ultima modifica indicata di seguito.
        </p>
        <p className="text-xs text-slate-500 text-left">
          Ultima modifica: 25 novembre 2025
        </p>
        <p className="text-xs text-slate-500 text-left">
          La presente informativa è redatta ai sensi del Regolamento (UE)
          2016/679 (“GDPR”) e della normativa nazionale applicabile in
          materia di protezione dei dati personali.
        </p>
      </div>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;




