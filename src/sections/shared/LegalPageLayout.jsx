import { useEffect } from "react";
import InnerHero from "./InnerHero.jsx";

const LegalPageLayout = ({
  title,
  subtitle,
  heroImage,
  lastUpdate,
  metaLabel,
  children,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      <InnerHero title={title} subtitle={subtitle} image={heroImage} />

      <section className="py-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          {(lastUpdate || metaLabel) && (
            <div className="mb-6 text-xs uppercase tracking-[0.18em] text-slate-500">
              {metaLabel && metaLabel}
              {metaLabel && lastUpdate && " – "}
              {lastUpdate && `Ultimo aggiornamento: ${lastUpdate}`}
            </div>
          )}

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm px-6 py-8 md:px-10 md:py-10 text-sm md:text-base text-slate-700 leading-relaxed text-justify space-y-6">
            {children}
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPageLayout;

