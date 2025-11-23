import { useEffect } from "react";
import InnerHero from "../sections/shared/InnerHero.jsx";

const CondizioniVendita = () => {
  // 🔝 Torna sempre in top quando la pagina viene caricata
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero
        title="Condizioni di Vendita"
        subtitle="Condizioni generali di vendita dei pacchetti e servizi turistici."
        image="https://images.pexels.com/photos/1796600/pexels-photo-1796600.jpeg"
      />

      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-6 text-xs uppercase tracking-[0.18em] text-slate-500">
            Ultimo aggiornamento: Febbraio 2025
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm px-6 py-8 md:px-10 md:py-10 text-sm md:text-base text-slate-700 leading-relaxed space-y-6 text-justify">
            <p className="text-slate-500 text-xs text-left">
              Le presenti Condizioni Generali regolano la vendita dei pacchetti
              turistici da parte di <span className="font-semibold">Kiru s.r.l.</span>,
              in conformità alla normativa vigente.
            </p>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                1. Contenuto del Contratto di Vendita
              </h2>
              <p>
                Il contratto di vendita di pacchetti turistici è costituito
                dall’insieme delle condizioni generali qui riportate, dalle
                condizioni particolari indicate nella documentazione di viaggio,
                dalla conferma di prenotazione e da ogni ulteriore informazione
                fornita al viaggiatore.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                2. Fonti Normative
              </h2>
              <p>
                La vendita di pacchetti turistici è regolata dagli articoli 32–51
                del <span className="font-semibold">Codice del Turismo</span>, come modificato
                dal D.Lgs. 62/2018 e dalle successive disposizioni applicabili,
                nonché dalle normative regionali e dalla normativa UE in materia
                di viaggi, pacchetti turistici e servizi turistici collegati.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                3. Regime Amministrativo
              </h2>
              <p>
                L’Organizzatore e l’Agenzia venditrice devono essere abilitati
                all’esecuzione delle rispettive attività in base alla
                legislazione vigente, alle autorizzazioni amministrative
                richieste e alle iscrizioni ai relativi albi o elenchi
                professionali, ove previsti.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                4. Definizioni
              </h2>
              <p className="text-sm text-slate-700
">
                Ai fini delle presenti Condizioni, si intende per:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Viaggiatore:</strong> chiunque intenda stipulare,
                  stipuli o sia autorizzato a viaggiare in base a un contratto
                  di pacchetto turistico.
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
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                5. Nozione di Pacchetto Turistico
              </h2>
              <p>
                Per <strong>pacchetto turistico</strong> si intende la
                combinazione di almeno due diversi servizi turistici (ad
                esempio: trasporto, alloggio, noleggio veicoli, altri servizi
                turistici) per lo stesso viaggio o vacanza, quando ricorrono
                le condizioni previste dal Codice del Turismo.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                6. Informazioni Precontrattuali
              </h2>
              <p>
                Prima della conclusione del contratto, l’Organizzatore fornirà
                al viaggiatore, in modo chiaro e comprensibile, tutte le
                informazioni precontrattuali previste dalla legge, tra cui:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>caratteristiche principali dei servizi;</li>
                <li>prezzo complessivo del pacchetto e modalità di pagamento;</li>
                <li>numero minimo di persone richiesto per il viaggio;</li>
                <li>condizioni di recesso e penali eventualmente applicabili;</li>
                <li>
                  indicazioni su passaporto, visti, formalità sanitarie e altri
                  requisiti di ingresso nel Paese di destinazione.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                7. Prezzi e Pagamenti
              </h2>
              <p>
                I prezzi dei pacchetti turistici sono indicati nel contratto e
                possono subire variazioni, in aumento o in diminuzione,
                esclusivamente nei casi e nei limiti previsti dalla legge (ad
                esempio in relazione a costo del carburante, tasse, diritti o
                tassi di cambio).
              </p>
              <p>
                Le modalità di pagamento, le eventuali rate e la somma dovuta a
                titolo di acconto e saldo sono specificate nella conferma di
                prenotazione o nel contratto di viaggio.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                8. Diritto di Recesso
              </h2>
              <p>
                Il viaggiatore può esercitare il proprio diritto di recesso nei
                casi previsti dal Codice del Turismo e dalle condizioni
                particolari di contratto. Eventuali penali di recesso, termini e
                modalità di comunicazione saranno indicati nella documentazione
                contrattuale.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                9. Responsabilità
              </h2>
              <p>
                L’Organizzatore è responsabile della corretta esecuzione del
                pacchetto turistico, indipendentemente dal fatto che i servizi
                siano prestati direttamente o tramite terzi fornitori, e deve
                garantire un’adeguata assistenza al viaggiatore in caso di
                difficoltà durante il viaggio, nei limiti e con le modalità
                previste dalla normativa vigente.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h2 className="text-lg md:text-xl font-semibold text-slate-900 text-left">
                Contatti
              </h2>
              <p>
                Per maggiori informazioni sulle Condizioni di Vendita o per
                richiedere assistenza, puoi contattarci via email:
              </p>
              <p>
                <a
                  href="mailto:leavingnowviaggi@gmail.com"
                  className="font-medium text-primary hover:underline"
                >
                  leavingnowviaggi@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CondizioniVendita;


