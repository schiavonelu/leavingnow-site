const StickySection = ({
  header,
  children,
  sectionClassName = "bg-slate-50",
  stickyClassName = "",
  contentClassName = "",
}) => {
  return (
    <section className={`relative ${sectionClassName}`}>
      {/* HEADER STICKY COMPATTO */}
      <div
        className={[
          "sticky top-8 z-20", // 👈 offset da navbar, come hai messo tu
          "bg-slate-50/95 backdrop-blur-sm border-b border-slate-200/60",
          stickyClassName="top-16 md:top-18",
        ].join(" ")}
      >
        <div className="max-w-6xl mx-auto px-4 py-1 md:py-2">
          {/* 🔥 QUI si decide lo spessore verticale principale */}
          {header}
        </div>
      </div>

      {/* CONTENUTO SOTTO LO STICKY */}
      <div
        className={[
          "max-w-6xl mx-auto px-4 pt-4 pb-10",
          "space-y-8 md:space-y-10",
          contentClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </section>
  );
};

export default StickySection;


