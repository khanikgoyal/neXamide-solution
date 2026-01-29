import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Resume Analyzer",
    description:
      "An AI-powered tool that analyzes resumes and provides smart insights using NLP.",
    tech: ["React", "Node.js", "AI", "Tailwind"],
    link: "#",
  },
  {
    title: "Business Website",
    description:
      "A modern, responsive business website with clean UI and fast performance.",
    tech: ["React", "Tailwind", "SEO"],
    link: "#",
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with secure payments and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative py-26 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-300 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-72 h-72 bg-blue-300 rounded-full blur-[120px] opacity-30"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            My
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            A selection of projects showcasing my skills and experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center mt-auto px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-md hover:scale-105 transition"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
