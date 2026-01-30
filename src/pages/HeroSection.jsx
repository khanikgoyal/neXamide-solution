import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden pt-24 md:pt-0">

      {/* BACKGROUND GRADIENT BLOBS */}
      <div className="absolute top-[-120px] left-[-120px] w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] bg-purple-300 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[260px] h-[260px] sm:w-[350px] sm:h-[350px] bg-blue-300 rounded-full blur-[120px] opacity-40"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto"
      >
        {/* HEADLINE */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight">
          Transforming Ideas Into
          <span className="block mt-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Intelligent Digital Solutions
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-5 px-2 sm:px-0">
          I craft modern websites, AI-powered tools, and seamless digital
          experiences that help businesses grow and stand out.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-base sm:text-lg shadow-lg cursor-pointer"
          >
            View My Work
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full border border-gray-400 text-base sm:text-lg cursor-pointer"
          >
            <Link to="/contact-us">
            Contact Me
            </Link>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
