import { Routes, Route } from "react-router-dom";

// Layout principale
import MainLayout from "./layout/MainLayout.jsx";

// Pagine principali
import Home from "./pages/Home.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import Destinazioni from "./pages/Destinazioni.jsx";
import Contatti from "./pages/Contatti.jsx";
import ViaggiDiNozze from "./pages/ViaggiDiNozze.jsx";

// Pagine legali
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TerminiCondizioni from "./pages/TerminiCondizioni.jsx";
import CondizioniVendita from "./pages/CondizioniVendita.jsx";
import CreditiImmagini from "./pages/CreditiImmagini.jsx";


// Sotto-pagine destinazioni
import Europa from "./pages/Europa.jsx";
import AmericheCaraibi from "./pages/AmericheCaraibi.jsx";
import Africa from "./pages/Africa.jsx";
import Asia from "./pages/Asia.jsx";
import Oceania from "./pages/Oceania.jsx";

// Componenti UI
import WhatsAppWidget from "./components/ui/WhatsAppWidget.jsx";
import CookieConsent from "./components/ui/CookieConsent.jsx";

function App() {
  return (
    <>
      {/* Widget WhatsApp sempre visibile */}
      <WhatsAppWidget />

      {/* Router principale */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Pagine principali */}
          <Route index element={<Home />} />
          <Route path="chi-siamo" element={<ChiSiamo />} />
          <Route path="destinazioni" element={<Destinazioni />} />
          <Route path="contatti" element={<Contatti />} />
          <Route path="viaggi-di-nozze" element={<ViaggiDiNozze />} />

          {/* Sotto-pagine destinazioni */}
          <Route path="destinazioni/europa" element={<Europa />} />
          <Route
            path="destinazioni/americhe-caraibi"
            element={<AmericheCaraibi />}
          />
          <Route path="destinazioni/africa" element={<Africa />} />
          <Route path="destinazioni/asia" element={<Asia />} />
          <Route path="destinazioni/oceania" element={<Oceania />} />

          {/* Pagine legali */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="termini-e-condizioni" element={<TerminiCondizioni />} />
          <Route path="condizioni-di-vendita" element={<CondizioniVendita />} />
          <Route path="crediti-immagini" element={<CreditiImmagini />} />
        </Route>
      </Routes>

      {/* Banner cookie globale */}
      <CookieConsent />
    </>
  );
}

export default App;






