import { FaFacebookF, FaInstagram } from "react-icons/fa";

const FACEBOOK_URL = "https://www.facebook.com/leavingnowviaggi/";
const INSTAGRAM_URL = "https://www.instagram.com/leavingnow_viaggi/";

// LOGHI PAYMENT
import bonificoLogo from "../../assets/payment/bonifico.webp";
import mastercardLogo from "../../assets/payment/mastercard.webp";
import visaLogo from "../../assets/payment/visa.webp";
import postepayLogo from "../../assets/payment/postepay.webp";
import scalapayLogo from "../../assets/payment/scalapay.webp";

// ORDINE DEFINITO
const paymentMethods = [
  { name: "Bonifico", logo: bonificoLogo },
  { name: "Mastercard", logo: mastercardLogo },
  { name: "Visa", logo: visaLogo },
  { name: "Postepay", logo: postepayLogo },
  { name: "Scalapay", logo: scalapayLogo },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-[#132C50] text-[#E5E7EB] mt-16">
      {/* linea superiore */}
      <div className="border-t border-white/10" />

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-10 space-y-6">
        {/* RIGA PRINCIPALE */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 text-xs md:text-sm">
          {/* COLONNA 1 – Dati + Social */}
          <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <p className="font-semibold text-[#F9FAFB] text-sm md:text-base">
              Leaving Now by Kiru s.r.l.
            </p>
            <p className="text-[#CBD5E1]">
              Via Salvo d&apos;Acquisto, 10 – 81031 Aversa
            </p>
            <p className="text-[#CBD5E1]">P. IVA 04318290618</p>

            {/* SOCIAL */}
            <div className="flex items-center gap-3 mt-3">
              <a
                href={FACEBOOK_URL}
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex h-9 w-9 items-center justify-center
                  rounded-full bg-white
                  border border-[#D1D5DB]
                  text-[#132C50]
                  shadow-sm
                  hover:border-[#1877F2] hover:text-[#1877F2]
                  transition
                "
              >
                <FaFacebookF className="text-lg" />
              </a>

              <a
                href={INSTAGRAM_URL}
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex h-9 w-9 items-center justify-center
                  rounded-full bg-white
                  border border-[#D1D5DB]
                  text-[#132C50]
                  shadow-sm
                  hover:border-[#EB2480] hover:text-[#EB2480]
                  transition
                "
              >
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* COLONNA 2 – PAYMENT BADGES */}
          <div className="md:w-1/3 flex flex-col items-center text-center gap-3">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 w-full">
              {paymentMethods.map((method) => (
                <div
                  key={method.name}
                  className="
                    flex flex-col items-center justify-center
                    bg-white rounded-xl px-2 py-1
                    border border-[#E2E8F0] shadow-lg
                    hover:shadow-xl hover:scale-[1.03]
                    transition-all
                  "
                >
                  <img
                    src={method.logo}
                    alt={method.name}
                    loading="lazy"
                    className="h-6 md:h-7 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* COLONNA 3 – Link legali */}
          <div className="md:w-1/3 flex flex-col md:items-end items-center gap-2 text-xs md:text-sm text-center md:text-right">
            <a
              href="/privacy-policy"
              className="px-3 py-2 text-[#E5E7EB] hover:text-[#0863D6] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="/termini-e-condizioni"
              className="px-3 py-2 text-[#E5E7EB] hover:text-[#0863D6] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Termini e Condizioni
            </a>
            <a
              href="/condizioni-di-vendita"
              className="px-3 py-2 text-[#E5E7EB] hover:text-[#0863D6] transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              Condizioni di Vendita
            </a>
          </div>
        </div>

        {/* SEPARATORE + COPYRIGHT */}
        <div className="pt-4">
          <div className="border-t border-white/15" />
          <p className="mt-3 text-xs md:text-sm text-[#CBD5E1] text-center">
            © {year} Leaving Now by Kiru s.r.l. · Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;















