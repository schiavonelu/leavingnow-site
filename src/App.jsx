// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Layout principale
import MainLayout from "./layout/MainLayout.jsx";

// Config lancio / manutenzione
import { LAUNCH_DATE, MAINTENANCE_START_DATE } from "./config/launchConfig.js";

// Pagine principali
import Home from "./pages/Home.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import Destinazioni from "./pages/Destinazioni.jsx";
import Contatti from "./pages/Contatti.jsx";
import ViaggiDiNozze from "./pages/ViaggiDiNozze.jsx";
import Crociere from "./pages/Crociere.jsx";
import ViaggiIndividualiGruppo from "./pages/ViaggiIndividualiGruppo.jsx";
import ViaggiFamily from "./pages/ViaggiFamily.jsx";
import IdeeRegalo from "./pages/IdeeRegalo.jsx";
import MeteStagionali from "./pages/MeteStagionali.jsx";
import MeteCapitali from "./pages/MeteCapitali.jsx";
import MeteViaggiNozze from "./pages/MeteViaggiNozze.jsx";
import MeteMareItalia from "./pages/MeteMareItalia.jsx";
import MeteMareEstero from "./pages/MeteMareEstero.jsx";

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

// Pagine speciali
import NotFound from "./pages/NotFound.jsx";

// Pagine “speciali” di lancio
import ComingSoon from "./pages/ComingSoon.jsx";
import Maintenance from "./pages/Maintenance.jsx";

// UI Components
import WhatsAppWidget from "./components/ui/WhatsAppWidget.jsx";
import CookieConsent from "./components/ui/CookieConsent.jsx";

function App() {
  const now = Date.now();
  const launch = LAUNCH_DATE.getTime();
  const maintenanceStart = MAINTENANCE_START_DATE.getTime();

  const beforeLaunch = now < launch;
  const beforeMaintenance = now < maintenanceStart;
  const inMaintenance = now >= maintenanceStart && now < launch;

  // 🔵 FASE 1 – prima della manutenzione → COMING SOON
  if (beforeLaunch && beforeMaintenance) {
    return (
      <>
        <ComingSoon />
        <CookieConsent />
      </>
    );
  }

  // 🟠 FASE 2 – tra manutenzione e lancio → MAINTENANCE
  if (inMaintenance) {
    return (
      <>
        <Maintenance />
        <CookieConsent />
      </>
    );
  }

  // ✅ FASE 3 – dopo il lancio → sito normale
  return (
    <>
      {/* Widget WhatsApp sempre visibile */}
      <WhatsAppWidget />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Pagine principali */}
          <Route index element={<Home />} />
          <Route path="chi-siamo" element={<ChiSiamo />} />
          <Route path="destinazioni" element={<Destinazioni />} />
          <Route path="contatti" element={<Contatti />} />
          <Route path="viaggi-di-nozze" element={<ViaggiDiNozze />} />
          <Route path="crociere" element={<Crociere />} />
          <Route
            path="viaggi-individuali-gruppo"
            element={<ViaggiIndividualiGruppo />}
          />
          <Route path="viaggi-family" element={<ViaggiFamily />} />
          <Route path="idee-regalo" element={<IdeeRegalo />} />
          <Route path="mete-stagionali" element={<MeteStagionali />} />
          <Route path="citta-europee" element={<MeteCapitali />} />
          <Route path="mete-viaggi-di-nozze" element={<MeteViaggiNozze />} />
          <Route path="mare-italia" element={<MeteMareItalia />} />
          <Route path="mare-estero" element={<MeteMareEstero />} />

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
          <Route
            path="condizioni-di-vendita"
            element={<CondizioniVendita />}
          />
          <Route path="crediti-immagini" element={<CreditiImmagini />} />
        </Route>

        {/* Pagina 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Banner Cookie */}
      <CookieConsent />
    </>
  );
}

export default App;












