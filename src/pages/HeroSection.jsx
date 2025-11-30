import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">

      {/* BACKGROUND GRADIENT BLOB */}
      <div className="absolute top-[-150px] left-[-150px] w-[350px] h-[350px] bg-purple-300 rounded-full blur-[120px] opacity-40"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[350px] h-[350px] bg-blue-300 rounded-full blur-[120px] opacity-40"></div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto"
      >
        {/* HEADLINE */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Transforming Ideas Into  
          <span className="block bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Intelligent Digital Solutions
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="text-lg md:text-xl text-gray-600 mt-6">
          I craft modern websites, AI-powered tools, and seamless digital experiences  
          that help businesses grow and stand out.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex justify-center gap-4">
          <motion.a 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full bg-linear-to-r from-purple-600 to-blue-600 text-white text-lg shadow-lg cursor-pointer"
          >
            View My Work
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full border border-gray-400 text-lg cursor-pointer"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
