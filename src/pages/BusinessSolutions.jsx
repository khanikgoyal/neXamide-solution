import React from "react";

const solutions = [
  {
    title: "Mobile Solutions",
    description:
      "Connect with customers wherever they are with high-performance mobile apps that engage and retain users.",
  },
  {
    title: "Web Experiences",
    description:
      "Interactive websites and dashboards that turn visitors into loyal customers and boost conversions.",
  },
  {
    title: "E-Commerce & Platforms",
    description:
      "Scalable online stores and business systems designed to increase sales and streamline operations.",
  },
  {
    title: "Data & Analytics",
    description:
      "Transform your business data into actionable insights with dashboards and predictive analytics.",
  },
];

export default function BusinessSolutions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span className="block bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Solutions That Help Your Business Grow
          </span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl">
          We create apps, websites, e-commerce stores, and data systems that attract customers, increase revenue, and save you time.
        </p>

        {/* Solutions Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold">
                <span className="block mt-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                  {item.title}
                </span>
              </h3>
              <p className="mt-4 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}