import { useState } from "react";
import {
  FaHardHat,
  FaHome,
  FaBuilding,
  FaTruck,
  FaDraftingCompass,
  FaWrench,
  FaClipboardList,
  FaLeaf,
} from "react-icons/fa";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const serviceCategories = [
    { id: "all", label: "All Services" },
    { id: "construction", label: "Construction" },
    { id: "renovation", label: "Renovation" },
    { id: "design", label: "Design" },
    { id: "specialty", label: "Specialty" },
  ];

  const allServices = [
    {
      id: 1,
      title: "Residential Construction",
      description:
        "Custom home building and residential developments with personalized design solutions.",
      icon: <FaHome className="text-2xl text-amber-700" />,
      category: "construction",
    },
    {
      id: 2,
      title: "Commercial Buildings",
      description:
        "Office complexes, retail spaces, and industrial facilities built to commercial standards.",
      icon: <FaBuilding className="text-2xl text-amber-700" />,
      category: "construction",
    },
    {
      id: 3,
      title: "Renovation & Remodeling",
      description:
        "Transforming existing spaces with modern designs while preserving structural integrity.",
      icon: <FaTruck className="text-2xl text-amber-700" />,
      category: "renovation",
    },
    {
      id: 4,
      title: "Architectural Design",
      description:
        "Innovative building designs that blend functionality with aesthetic excellence.",
      icon: <FaDraftingCompass className="text-2xl text-amber-700" />,
      category: "design",
    },
    {
      id: 5,
      title: "Facility Maintenance",
      description:
        "Comprehensive maintenance programs to keep your properties in optimal condition.",
      icon: <FaWrench className="text-2xl text-amber-700" />,
      category: "specialty",
    },
    {
      id: 6,
      title: "Project Management",
      description:
        "End-to-end oversight ensuring projects stay on schedule and within budget.",
      icon: <FaClipboardList className="text-2xl text-amber-700" />,
      category: "specialty",
    },
    {
      id: 7,
      title: "Sustainable Building",
      description:
        "Eco-friendly construction using green materials and energy-efficient systems.",
      icon: <FaLeaf className="text-2xl text-amber-700" />,
      category: "construction",
    },
    {
      id: 8,
      title: "Foundation & Structural",
      description:
        "Specialized foundation work and structural repairs for all building types.",
      icon: <FaHardHat className="text-2xl text-amber-700" />,
      category: "specialty",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? allServices
      : allServices.filter((service) => service.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-950 sm:text-5xl">
          Comprehensive <span className="text-amber-700">Construction</span>{" "}
          Services
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
          From groundbreaking to ribbon-cutting, we deliver complete building
          solutions with unmatched craftsmanship and attention to detail.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
        {serviceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`py-4 px-6 text-lg font-medium ${
              activeCategory === category.id
                ? "text-amber-700 border-b-2 border-amber-700"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-8">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <button className="text-amber-700 font-medium flex items-center">
                Learn more
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-950 text-center mb-12">
          Our Proven <span className="text-amber-700">Process</span>
        </h2>

        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-4 top-5 h-3/4 w-0.5 bg-amber-200 transform -translate-y-3"></div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Consultation & Planning",
                description:
                  "We begin with a thorough understanding of your vision, requirements, and budget constraints.",
              },
              {
                step: "02",
                title: "Design & Engineering",
                description:
                  "Our architects and engineers create detailed plans with 3D visualizations.",
              },
              {
                step: "03",
                title: "Permitting & Approvals",
                description:
                  "We handle all regulatory requirements and municipal approvals.",
              },
              {
                step: "04",
                title: "Construction Execution",
                description:
                  "Our skilled craftsmen bring designs to life with precision and quality.",
              },
              {
                step: "05",
                title: "Final Inspection & Delivery",
                description:
                  "Rigorous quality checks before handing over your completed project.",
              },
            ].map((process, index) => (
              <div key={index} className="relative pl-16">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-950 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-700">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-amber-700 rounded-xl p-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-amber-100 max-w-2xl mx-auto mb-8">
          Schedule a free consultation with our experts to discuss your
          construction needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-amber-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Request a Quote
          </button>
          <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
            View Our Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
