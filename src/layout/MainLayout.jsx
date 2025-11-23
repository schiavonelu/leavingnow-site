import { Outlet } from "react-router-dom";
import Navbar from "../sections/shared/Navbar.jsx";
import Footer from "../sections/shared/Footer.jsx";
import BackToTopButton from "../components/ui/BackToTopButton.jsx";
import WhatsAppWidget from "../components/ui/WhatsAppWidget.jsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar fissa */}
      <Navbar />

      {/* Contenuto dinamico delle pagine */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Pulsante Torna Su */}
      <BackToTopButton />

      {/* Widget WhatsApp in basso a sinistra */}
      <WhatsAppWidget />
    </div>
  );
};

export default MainLayout;


