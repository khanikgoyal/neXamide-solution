import React from "react";

const techData = [
  {
    title: "Mobile",
    items: [
      { name: "Native iOS", img: "/tech/ios.png" },
      { name: "Native Android", img: "/tech/android2.jpg" },
      { name: "React Native", img: "/tech/react-native.png" },
      { name: "Flutter", img: "/tech/flutter.png" },
    ],
  },
  {
    title: "Front-End",
    items: [
      { name: "React JS", img: "/tech/reactjs1.png" },
      { name: "Angular", img: "/tech/angular.png" },
      { name: "Vue JS", img: "/tech/vue.png" },
      { name: "HTML5", img: "/tech/html.png" },
    ],
  },
  {
    title: "Open Source / CRM",
    items: [
      { name: "Node JS", img: "/tech/node.jpg" },
      { name: "Laravel", img: "/tech/laravel.png" },
      { name: "CakePHP", img: "/tech/cakePhp.png" },
      { name: "CodeIgniter", img: "/tech/coddeigniter.png" },
      { name: "Shopify", img: "/tech/shopify.png" },
      { name: "WordPress", img: "/tech/wordpress.png" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", img: "/tech/mongodb.png" },
      { name: "MySQL", img: "/tech/mysql.png" },
      { name: "PostgreSQL", img: "/tech/postgresql.png" },
    ],
  },
];

export default function Technologies() {
  return (
    <section id="technologies" className="py-20 bg-[#f8fbff] text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12  from-blue-400">
          Technologies We Work With
        </h2>

        {techData.map((category, index) => (
          <div key={index} className="mb-16">
            {/* Category Title */}
            <h3 className="text-3xl font-semibold mb-6">{category.title}</h3>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.items.map((tech, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-lg hover:shadow-[#4ade8055] hover:border-[#4ade80] transition-all cursor-pointer"
                >
                  <img
                    src={tech.img}
                    alt={tech.name}
                    className="h-16 object-contain mb-4"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
