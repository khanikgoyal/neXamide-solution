import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative bg-[#020617] text-white py-20 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-blue-400">NExamind</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            NExamind is a modern AI‑powered development & automation agency. We
            specialize in building scalable apps, websites, AI solutions, and
            end‑to‑end business automation systems. Our goal is to help startups
            and businesses grow faster using intelligent technology.
          </p>
          <p className="text-gray-400 leading-relaxed">
            With a team of passionate engineers, designers, and AI experts, we
            deliver pixel‑perfect UI, smooth user experiences, and powerful
            backend systems. Whether you need a brand identity, a mobile app, a
            SaaS product, or AI automation—we build it with precision.
          </p>
        </motion.div>

        {/* Right Side Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/src/assets/about/about-img.png"
            alt="About NExamind"
            className="w-full max-w-md rounded-xl shadow-lg shadow-blue-500/10 border border-blue-900/20"
          />
        </motion.div>
      </div>
    </section>
  );
}
