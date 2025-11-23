import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [overFooter, setOverFooter] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOverFooter(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  const baseClasses =
    // ⬇️ spostato più in alto per non sovrapporsi al widget cookie
    "fixed bottom-14 right-2 md:bottom-20 md:right-8 z-40 inline-flex items-center justify-center rounded-full shadow-lg w-10 h-10 md:w-11 md:h-11 transition";

  const colorClasses = overFooter
    ? "bg-[#0863D6] text-white border border-white/60 hover:bg-[#0648A3]"
    : "bg-[#132C50] text-white border border-[#E2E8F0] hover:bg-[#0A192F]";

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`${baseClasses} ${colorClasses}`}
      aria-label="Torna all'inizio pagina"
    >
      <HiArrowUp className="text-lg" />
    </button>
  );
};

export default BackToTopButton;



