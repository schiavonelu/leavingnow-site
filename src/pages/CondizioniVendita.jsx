import LegalPageLayout from "../sections/shared/LegalPageLayout.jsx";
import heroCondizioniVendita from "../assets/legal-pages/condizioni-vendita.webp";

const CondizioniVendita = () => {
  return (
    <LegalPageLayout
      title="Condizioni di Vendita"
      subtitle="Condizioni generali di vendita dei pacchetti e servizi turistici."
      heroImage={heroCondizioniVendita}
      lastUpdate="25 Novembre 2025"
    >
      {/* INTRO BREVE */}
      <p className="text-slate-500 text-xs text-left">
        Le presenti Condizioni generali regolano la vendita dei pacchetti
        e dei servizi turistici da parte di{" "}
        <span className="font-semibold">Kiru s.r.l.</span>, in conformità
        alla normativa vigente e al Codice del Turismo.
      </p>

      {/* DATI AGENZIA */}
      <div className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          1. Dati dell’Agenzia e ambito di applicazione
        </h2>
        <p>
          Le presenti Condizioni di vendita si applicano ai pacchetti
          turistici, ai servizi turistici collegati e ai singoli servizi
          turistici venduti da:
        </p>
        <p>
          <span className="font-semibold">Kiru s.r.l.</span> – Via
          Atellana, 115 – 81031 Aversa (CE), che opera come agenzia di
          viaggio per la vendita di pacchetti organizzati da tour
          operator terzi e/o di singoli servizi forniti da operatori
          terzi (compagnie aeree, strutture ricettive, società di
          trasporto, ecc.).
        </p>
        <p>
          Le presenti condizioni si applicano alle vendite effettuate sia
          in agenzia, sia tramite i canali online e di contatto
          indicati sul sito.
        </p>
      </div>

      {/* CONTENUTO CONTRATTO */}
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          2. Contenuto del contratto di vendita
        </h2>
        <p>
          Il contratto di vendita di pacchetti o servizi turistici è
          costituito dall’insieme di:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Condizioni generali di vendita qui riportate;</li>
          <li>
            condizioni particolari indicate nella documentazione di
            viaggio;
          </li>
          <li>preventivo e conferma di prenotazione;</li>
          <li>
            eventuali schede tecniche, programmi di viaggio e ogni altra
            informazione fornita al viaggiatore.
          </li>
        </ul>
      </div>

      {/* FONTI NORMATIVE */}
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          3. Fonti normative
        </h2>
        <p>
          La vendita di pacchetti turistici è disciplinata dagli articoli
          32–51 del <span className="font-semibold">Codice del Turismo</span>{" "}
          (D.Lgs. 79/2011), come modificato dal D.Lgs. 62/2018, nonché
          dalle disposizioni del Codice Civile, dalla normativa UE in
          materia di viaggi, pacchetti turistici e servizi turistici
          collegati e dalle eventuali normative regionali applicabili.
        </p>
      </div>

      {/* REGIME AMMINISTRATIVO */}
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          4. Regime amministrativo
        </h2>
        <p>
          L’Organizzatore e l’Agenzia venditrice devono essere abilitati
          all’esecuzione delle rispettive attività in base alla
          legislazione vigente, alle autorizzazioni amministrative
          richieste e alle iscrizioni ai relativi albi o elenchi
          professionali, ove previsti.
        </p>
      </div>

      {/* DEFINIZIONI */}
      <div className="space-y-3">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          5. Definizioni
        </h2>
        <p>
          Ai fini delle presenti Condizioni di vendita, si intende per:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Viaggiatore:</strong> chiunque intenda stipulare,
            stipuli o sia autorizzato a viaggiare in base a un contratto
            di pacchetto turistico o di servizi turistici collegati.
          </li>
          <li>
            <strong>Organizzatore:</strong> il professionista che
            combina e vende o offre pacchetti turistici, direttamente o
            tramite un altro professionista.
          </li>
          <li>
            <strong>Venditore:</strong> il professionista, diverso
            dall’Organizzatore, che vende o offre pacchetti turistici
            combinati da un Organizzatore.
          </li>
          <li>
            <strong>Pacchetto turistico:</strong> la combinazione di
            almeno due diversi servizi turistici per lo stesso viaggio
            o vacanza, alle condizioni previste dal Codice del Turismo.
          </li>
        </ul>
      </div>

      {/* INFORMAZIONI PRECONTRATTUALI */}
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          6. Informazioni precontrattuali
        </h2>
        <p>
          Prima della conclusione del contratto, l’Organizzatore fornisce
          al viaggiatore, in modo chiaro e comprensibile, tutte le
          informazioni precontrattuali previste dalla legge, tra cui:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>caratteristiche principali dei servizi offerti;</li>
          <li>prezzo complessivo del pacchetto o dei servizi;</li>
          <li>modalità di pagamento e termini per il saldo;</li>
          <li>
            numero minimo di persone richiesto per l’effettuazione del
            viaggio, ove previsto;
          </li>
          <li>
            condizioni di recesso e penali eventualmente applicabili;
          </li>
          <li>
            informazioni su passaporto, visti, formalità sanitarie e
            altri requisiti di ingresso nel Paese di destinazione.
          </li>
        </ul>
      </div>

      {/* PREZZI E PAGAMENTI */}
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          7. Prezzi e pagamenti
        </h2>
        <p>
          I prezzi dei pacchetti e dei servizi turistici sono indicati nel
          preventivo e nel contratto di viaggio. Essi possono subire
          variazioni, in aumento o in diminuzione, solo nei casi e nei
          limiti previsti dalla legge (ad esempio, in relazione a costo
          del carburante, tasse, diritti o tassi di cambio).
        </p>
        <p>
          Le modalità di pagamento, l’ammontare dell’eventuale acconto e
          i termini per il saldo sono indicati nella conferma di
          prenotazione o nella scheda di viaggio. Il mancato pagamento
          entro i termini può comportare l’annullamento della
          prenotazione e l’applicazione delle penali previste.
        </p>
      </div>

      {/* DIRITTO DI RECESSO */}
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          8. Diritto di recesso e penali
        </h2>
        <p>
          Il viaggiatore può recedere dal contratto nei casi previsti dal
          Codice del Turismo e dalle condizioni particolari di contratto.
          Le penali di recesso, i termini e le modalità di comunicazione
          sono indicati nella documentazione contrattuale e possono
          variare in base alla tipologia di servizio (ad esempio, tariffe
          aeree non rimborsabili, offerte speciali, ecc.).
        </p>
      </div>

      {/* RESPONSABILITÀ */}
      <div className="space-y-4">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          9. Responsabilità e assistenza
        </h2>
        <p>
          L’Organizzatore è responsabile della corretta esecuzione del
          pacchetto turistico, indipendentemente dal fatto che i servizi
          siano prestati direttamente o tramite terzi, nei limiti
          previsti dalla normativa vigente.
        </p>
        <p>
          Il viaggiatore ha diritto a un’adeguata assistenza in caso di
          difficoltà durante il viaggio. Le modalità e i limiti di tale
          assistenza sono indicati nel contratto e nelle condizioni
          generali dell’Organizzatore.
        </p>
      </div>

      {/* CONTATTI */}
      <div className="pt-4 border-t border-slate-100 space-y-2">
        <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
          Contatti
        </h2>
        <p>
          Per maggiori informazioni sulle Condizioni di vendita o per
          richiedere assistenza, puoi contattarci ai seguenti recapiti:
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
            tramite il sito:{" "}
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
    </LegalPageLayout>
  );
};

export default CondizioniVendita;




