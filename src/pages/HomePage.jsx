import { useRef } from "react";

export default function HomePage() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>

      {/* HERO SECTION */}
      <section className="h-[90vh] flex flex-col justify-center items-center bg-gray-100">
        <h1 className="text-5xl font-bold">Building Websites with Impact</h1>
        <p className="text-xl mt-4">I turn your ideas into digital reality</p>
      </section>

      {/* ABOUT SECTION */}
      <section ref={aboutRef} id="about" className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-center">
          I am a full-stack developer who builds high-quality, fast, and scalable applications.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section ref={servicesRef} id="services" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Services</h2>
        <ul className="max-w-3xl mx-auto text-xl space-y-4">
          <li>✔ Website Development</li>
          <li>✔ Mobile App Development</li>
          <li>✔ UI/UX Design</li>
        </ul>
      </section>

      {/* PROJECTS SECTION */}
      <section ref={projectsRef} id="projects" className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      </section>

      {/* CONTACT SECTION */}
      <section ref={contactRef} id="contact" className="py-20 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Contact</h2>
      </section>

    </div>
  );
}
