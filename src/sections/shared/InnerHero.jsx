import { motion } from "framer-motion";

const InnerHero = ({ title, subtitle, image }) => {
  return (
    <section className="relative h-[60vh] min-h-80 w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/40" />

      {/* Content */}
      <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-center pt-20">

        {/* Title */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-white drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="mt-2 text-sm md:text-base text-slate-100 drop-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default InnerHero;




