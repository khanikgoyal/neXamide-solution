import { motion } from "framer-motion";

export default function ContactUS() {
  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-300 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-300 rounded-full blur-[120px] opacity-30"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Get In
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {" "}Touch
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Have an idea or a project in mind? Let’s build something amazing together.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Information</h3>

            <p className="text-gray-600">
              Reach out to us for web development, AI solutions, or digital transformation.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>📧 <span className="font-medium">contact@nexamindsolution.in</span></p>
              <p>📞 <span className="font-medium">+91 8708161165</span></p>
              <p>📞 <span className="font-medium">+91 9023046719</span></p>
              <p>📍 <span className="font-medium">India</span></p>
            </div>
          </div>

          {/* Right Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg font-medium shadow-lg"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
