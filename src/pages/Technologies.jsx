import React from "react";

const techData = [
  {
    title: "Mobile",
    items: [
      { name: "Native iOS", img: "/src/assets/tech/ios.png" },
      { name: "Native Android", img: "/src/assets/tech/android2.jpg" },
      { name: "React Native", img: "/src/assets/tech/react-native.png" },
      { name: "Flutter", img: "/src/assets/tech/flutter.png" },
    ],
  },
  {
    title: "Front-End",
    items: [
      { name: "React JS", img: "/src/assets/tech/reactjs1.png" },
      { name: "Angular", img: "/src/assets/tech/angular.png" },
      { name: "Vue JS", img: "/src/assets/tech/vue.png" },
      { name: "HTML5", img: "/src/assets/tech/html.png" },
    ],
  },
  {
    title: "Open Source / CRM",
    items: [
      { name: "Node JS", img: "/src/assets/tech/node.jpg" },
      { name: "Laravel", img: "/src/assets/tech/laravel.png" },
      { name: "CakePHP", img: "/src/assets/tech/cakePhp.png" },
      { name: "CodeIgniter", img: "/src/assets/tech/coddeigniter.png" },
      { name: "Shopify", img: "/src/assets/tech/shopify.png" },
      { name: "WordPress", img: "/src/assets/tech/wordpress.png" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", img: "/src/assets/tech/mongodb.png" },
      { name: "MySQL", img: "/src/assets/tech/mysql.png" },
      { name: "PostgreSQL", img: "/src/assets/tech/postgresql.png" },
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
