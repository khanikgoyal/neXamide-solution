import { motion } from "framer-motion";
import { FiSmartphone, FiCpu, FiGlobe, FiShoppingCart, FiPenTool, FiDatabase } from "react-icons/fi";

const services = [
  {
    icon: <FiSmartphone size={40} />,
    title: "Native Mobile Applications",
    desc: "We build high-performance Android & iOS mobile apps that solve real business problems and deliver smooth user experience.",
  },
  {
    icon: <FiCpu size={40} />,
    title: "Hybrid Mobile Development",
    desc: "Fast, scalable cross-platform apps using the latest frameworks — delivering native quality with reduced cost.",
  },
  {
    icon: <FiGlobe size={40} />,
    title: "Custom Web Development",
    desc: "From business websites to complex dashboards, we build modern responsive web applications tailored to your needs.",
  },
  {
    icon: <FiDatabase size={40} />,
    title: "Data Science & Analytics",
    desc: "Transform raw data into insights with Machine Learning, dashboards, predictions, and powerful analytics tools.",
  },
  {
    icon: <FiShoppingCart size={40} />,
    title: "E-commerce Development",
    desc: "We develop full-featured e-commerce platforms with secure payments, inventory, and lightning-fast performance.",
  },
  {
    icon: <FiPenTool size={40} />,
    title: "Design & Creative",
    desc: "UI/UX design, branding, and creative solutions that make your digital presence memorable and impactful.",
  }
];

function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Our{" "}
          <span className="bg-linear-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
            Services
          </span>
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We help businesses turn ideas into powerful digital products through modern technology and expert execution.
        </p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((srv, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                {srv.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{srv.title}</h3>
              <p className="text-gray-600 text-sm">{srv.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesSection
