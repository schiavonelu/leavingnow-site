import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import InnerHero from "../sections/shared/InnerHero.jsx";

const Contatti = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    oggetto: "",
    messaggio: "",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.target);
    data.append("access_key", "59cd3a4d-3c21-4152-8f8d-95c3c2590684");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      setStatus("success");
      setFormData({
        nome: "",
        email: "",
        oggetto: "",
        messaggio: "",
      });
    } else {
      setStatus("error");
    }
  };

  // Orari reali
  const openingHours = [
    { day: "Lunedì", slots: ["17:00 – 19:30"] },
    { day: "Martedì", slots: ["09:30 – 13:00", "17:00 – 19:30"] },
    { day: "Mercoledì", slots: ["09:30 – 13:00", "17:00 – 19:30"] },
    { day: "Giovedì", slots: ["09:30 – 13:00", "17:00 – 19:30"] },
    { day: "Venerdì", slots: ["09:30 – 13:00", "17:00 – 19:30"] },
    { day: "Sabato", slots: ["09:30 – 13:00", "17:00 – 19:30"] },
    { day: "Domenica", slots: ["Chiuso"] },
  ];

  const contacts = [
    {
      icon: <Mail className="w-5 h-5 text-[#0863D6]" />,
      label: "Email",
      value: "leavingnowviaggi@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-[#0863D6]" />,
      label: "Telefono",
      value: "081 18754553",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#0863D6]" />,
      label: "Sede",
      value: "Via Salvo D’Acquisto, 10 – 81031 Aversa (CE)",
    },
  ];

  return (
    <>
      <InnerHero
        title="Contattaci"
        subtitle="Raccontaci il viaggio che hai in mente, al resto pensiamo noi."
        image="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg"
      />

      <section className="py-12 md:py-16 bg-[#E8F1FD]">
        <div className="max-w-6xl mx-auto px-4">

          {/* INTRO */}
          <div className="text-center mb-10 md:mb-12">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#0863D6] mb-2">
              Tutti i nostri Contatti
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-[#132C50]">
              Siamo qui per ascoltarti
            </h1>

            <p className="mt-3 text-sm md:text-base text-[#718093] max-w-xl mx-auto">
              Per preventivi, informazioni o richieste su misura puoi usare il form
              oppure i nostri contatti diretti.
            </p>
          </div>

          {/* CONTATTI + FORM */}
          <div className="grid gap-8 lg:grid-cols-2 mb-12">

            {/* CARD CONTATTI */}
            <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-6 md:p-7 flex flex-col justify-between">
              <div>
                <h2 className="text-lg md:text-xl font-semibold text-[#132C50] mb-4">
                  I nostri contatti
                </h2>

                <p className="text-sm text-[#718093] mb-5 text-justify">
                  Puoi scriverci, chiamarci o venirci a trovare in agenzia. Scegli il canale
                  che preferisci, al resto pensiamo noi.
                </p>

                <div className="space-y-4">
                  {contacts.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 border-b border-[#E2E8F0] last:border-b-0 pb-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8F1FD]">
                        {item.icon}
                      </div>
                      <div className="text-sm text-left">
                        <p className="font-semibold text-[#132C50]">{item.label}</p>
                        <p className="text-[#718093] mt-0.5">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-5 text-xs text-[#718093] text-center">
                Se preferisci, puoi anche richiedere una consulenza su appuntamento
                per organizzare insieme i tuoi prossimi viaggi.
              </p>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-3xl border border-[#E2E8F0] shadow-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#132C50] mb-4 text-center md:text-left">
                Scrivici un messaggio
              </h2>

              <p className="text-sm text-[#718093] mb-6 text-center md:text-left">
                Compila il form con qualche dettaglio sul viaggio che hai in mente:
                ti risponderemo il prima possibile.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nome + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#132C50] mb-1 block">
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#132C50] mb-1 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                      placeholder="La tua email"
                    />
                  </div>
                </div>

                {/* Oggetto */}
                <div>
                  <label className="text-sm font-medium text-[#132C50] mb-1 block">
                    Oggetto *
                  </label>
                  <input
                    type="text"
                    name="oggetto"
                    required
                    value={formData.oggetto}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                    placeholder="Es. Viaggio di nozze, crociera, weekend..."
                  />
                </div>

                {/* Messaggio */}
                <div>
                  <label className="text-sm font-medium text-[#132C50] mb-1 block">
                    Messaggio *
                  </label>
                  <textarea
                    name="messaggio"
                    rows="5"
                    required
                    value={formData.messaggio}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBD5E1] focus:ring-2 focus:ring-[#0863D6] focus:outline-none text-sm"
                    placeholder="Raccontaci un po’ di più su date, persone, destinazione e budget indicativo."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-full font-semibold text-white bg-[#0863D6] hover:bg-[#0648a3] transition disabled:opacity-60 text-sm"
                >
                  {loading ? "Invio in corso..." : "Invia messaggio"}
                </button>
              </form>

              {status === "success" && (
                <p className="mt-4 text-center text-emerald-600 text-sm font-medium">
                  ✔ Messaggio inviato correttamente! Ti risponderemo al più presto.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-center text-red-600 text-sm font-medium">
                  ✖ Si è verificato un problema durante l’invio. Riprova tra poco.
                </p>
              )}
            </div>
          </div>

          {/* MAP + ORARI */}
          <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-stretch">

            {/* MAPPA */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E2E8F0] bg-white">
              <iframe
                title="Mappa sede Leaving Now"
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Via+Salvo+D%27Acquisto+10,+Aversa&output=embed"
              ></iframe>

              <div className="px-4 py-3 border-t border-[#E2E8F0] bg-[#F8FAFC] flex justify-between items-center">
                <div>
                  <p className="text-xs font-semibold text-[#132C50]">
                    Leaving Now – Kiru s.r.l.
                  </p>
                  <p className="text-xs text-[#718093]">
                    Via Salvo D’Acquisto, 10 – 81031 Aversa (CE)
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps?q=Via+Salvo+D%27Acquisto+10,+Aversa"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-[#0863D6] hover:text-[#0648a3]"
                >
                  Apri in Google Maps
                </a>
              </div>
            </div>

            {/* ORARI */}
            <div className="rounded-3xl bg-white border border-[#E2E8F0] shadow-sm p-6 md:p-7 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#0863D6]" />
                <h2 className="text-lg md:text-xl font-semibold text-[#132C50]">
                  Orari di apertura
                </h2>
              </div>

              <div className="space-y-2 text-sm text-[#132C50]">
                {openingHours.map(({ day, slots }) => (
                  <div
                    key={day}
                    className="py-2 border-b border-[#E2E8F0] last:border-b-0 flex justify-between gap-4"
                  >
                    <span className="font-medium text-[#132C50] min-w-[90px]">
                      {day}
                    </span>

                    <div className="flex flex-col items-end text-right">
                      {slots.map((slot) => (
                        <span
                          key={slot}
                          className={`
                            ${
                              slot === "Chiuso"
                                ? "text-red-500 font-semibold"
                                : "text-[#718093]"
                            }
                          `}
                        >
                          {slot}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Contatti;












