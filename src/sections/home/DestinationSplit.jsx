import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useInView } from "../../hooks/useInView";

const DestinationSplit = ({
  title,
  subtitle,
  text,
  image,
  imageLeft = false,
  delay = 0,
  linkTo,
}) => {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  // alterna: se l’immagine è a sinistra, esce prima la foto, altrimenti il testo
  const textFirst = !imageLeft;

  const baseDelay = delay || 0;
  const offset = 120; // piccolo stacco tra testo e immagine
  const textDelay = baseDelay + (textFirst ? 0 : offset);
  const imageDelay = baseDelay + (textFirst ? offset : 0);

  // classi per effetto laterale
  const textHiddenSide = imageLeft ? "translate-x-4" : "-translate-x-4";
  const imageHiddenSide = imageLeft ? "-translate-x-4" : "translate-x-4";

  return (
    <section ref={ref} className="group w-full py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-stretch gap-6">
        {/* IMMAGINE */}
        <div className={`${imageLeft ? "md:order-1" : "md:order-2"} flex`}>
          <div
            style={{ transitionDelay: `${imageDelay}ms` }}
            className={[
              "w-full h-64 md:h-[380px] rounded-3xl overflow-hidden shadow-lg md:mx-4 transform transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0 translate-x-0"
                : `opacity-0 translate-y-4 ${imageHiddenSide}`,
            ].join(" ")}
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* TESTO */}
        <div
          className={`${imageLeft ? "md:order-2" : "md:order-1"} flex items-center`}
        >
          <div
            style={{ transitionDelay: `${textDelay}ms` }}
            className={[
              "max-w-md mx-4 text-center md:text-left transform transition-all duration-700 ease-out",
              isVisible
                ? "opacity-100 translate-y-0 translate-x-0"
                : `opacity-0 translate-y-4 ${textHiddenSide}`,
            ].join(" ")}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm font-semibold text-slate-500 mb-4">
                {subtitle}
              </p>
            )}
            <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed text-justify">
              {text}
            </p>

            {linkTo ? (
              <Link
                to={linkTo}
                className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-2 text-xs md:text-sm font-semibold text-slate-800 hover:border-sky-500 hover:text-sky-600 hover:bg-sky-50 transition"
              >
                Scopri di più
                <FaArrowRight className="text-xs" />
              </Link>
            ) : (
              <button className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-2 text-xs md:text-sm font-semibold text-slate-800 hover:border-sky-500 hover:text-sky-600 hover:bg-sky-50 transition">
                Scopri di più
                <FaArrowRight className="text-xs" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSplit;






