import { useState } from "react";
import {
  FaBuilding,
  FaHome,
  FaIndustry,
  FaTools,
  FaTruck,
  FaLeaf,
  FaHardHat,
} from "react-icons/fa";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const projectCategories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
    { id: "industrial", label: "Industrial" },
    { id: "renovation", label: "Renovation" },
    { id: "sustainable", label: "Sustainable" },
  ];

  const allProjects = [
    {
      id: 1,
      title: "Downtown Corporate Tower",
      description:
        "45-story LEED-certified office complex with retail space and public plaza.",
      type: "commercial",
      icon: <FaBuilding className="text-2xl text-amber-700" />,
      year: "2023",
      size: "850,000 sq ft",
    },
    {
      id: 2,
      title: "Lakeside Residential Community",
      description:
        "Sustainable housing development with 120 luxury units and community amenities.",
      type: "residential",
      icon: <FaHome className="text-2xl text-amber-700" />,
      year: "2022",
      size: "15 acres",
    },
    {
      id: 3,
      title: "Advanced Manufacturing Facility",
      description:
        "State-of-the-art production plant with automated systems and eco-friendly design.",
      type: "industrial",
      icon: <FaIndustry className="text-2xl text-amber-700" />,
      year: "2024",
      size: "300,000 sq ft",
    },
    {
      id: 4,
      title: "Historic Hotel Renovation",
      description:
        "Restoration of 1920s landmark building with modern infrastructure upgrades.",
      type: "renovation",
      icon: <FaTools className="text-2xl text-amber-700" />,
      year: "2021",
      size: "120,000 sq ft",
    },
    {
      id: 5,
      title: "Eco-Friendly Apartment Complex",
      description:
        "Net-zero energy residential building with green roofs and solar integration.",
      type: "sustainable",
      icon: <FaLeaf className="text-2xl text-amber-700" />,
      year: "2023",
      size: "75 units",
    },
    {
      id: 6,
      title: "Regional Distribution Center",
      description:
        "Logistics hub with advanced inventory systems and electric vehicle charging.",
      type: "industrial",
      icon: <FaTruck className="text-2xl text-amber-700" />,
      year: "2022",
      size: "500,000 sq ft",
    },
    {
      id: 7,
      title: "Urban Mixed-Use Development",
      description:
        "Combining retail, office, and residential spaces in a walkable community.",
      type: "commercial",
      icon: <FaBuilding className="text-2xl text-amber-700" />,
      year: "2024",
      size: "1.2M sq ft",
    },
    {
      id: 8,
      title: "Coastal Luxury Residences",
      description:
        "Beachfront properties with hurricane-resistant construction and panoramic views.",
      type: "residential",
      icon: <FaHome className="text-2xl text-amber-700" />,
      year: "2023",
      size: "20 units",
    },
    {
      id: 9,
      title: "University Science Center",
      description:
        "Research facility with specialized labs and collaborative learning spaces.",
      type: "commercial",
      icon: <FaBuilding className="text-2xl text-amber-700" />,
      year: "2021",
      size: "250,000 sq ft",
    },
    {
      id: 10,
      title: "Warehouse Conversion",
      description:
        "Transforming industrial space into modern loft apartments and artist studios.",
      type: "renovation",
      icon: <FaTools className="text-2xl text-amber-700" />,
      year: "2022",
      size: "80,000 sq ft",
    },
    {
      id: 11,
      title: "Geothermal Office Park",
      description:
        "Commercial campus powered by renewable geothermal energy sources.",
      type: "sustainable",
      icon: <FaLeaf className="text-2xl text-amber-700" />,
      year: "2024",
      size: "400,000 sq ft",
    },
    {
      id: 12,
      title: "Bridge Reconstruction",
      description:
        "Infrastructure upgrade with seismic retrofitting and expanded capacity.",
      type: "industrial",
      icon: <FaHardHat className="text-2xl text-amber-700" />,
      year: "2023",
      size: "1.2 miles",
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? allProjects
      : allProjects.filter((project) => project.type === activeCategory);

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-950 sm:text-5xl">
          Our <span className="text-amber-700">Construction</span> Portfolio
        </h1>
        <p className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto">
          Explore our completed projects that showcase our commitment to
          quality, innovation, and sustainable building practices.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
        {projectCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setVisibleProjects(6);
            }}
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

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProjects.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-gray-200 border-2 border-dashed w-full h-64" />
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  {project.icon}
                </div>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-amber-700 bg-amber-100 rounded-full">
                  {project.year}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-950 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-6">{project.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">
                  {project.size}
                </span>
                <button className="text-amber-700 font-medium flex items-center">
                  View case study
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
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProjects < filteredProjects.length && (
        <div className="text-center mb-16">
          <button
            onClick={loadMoreProjects}
            className="px-6 py-3 bg-amber-700 text-white font-medium rounded-lg hover:bg-amber-800 transition-colors"
          >
            Load More Projects
          </button>
        </div>
      )}

      {/* Stats Section */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-950 text-center mb-12">
          By The <span className="text-amber-700">Numbers</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "1,200+", label: "Projects Completed" },
            { value: "98%", label: "On-Time Delivery" },
            { value: "$4.2B", label: "Total Project Value" },
            { value: "250+", label: "Repeat Clients" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-amber-700 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-amber-700 rounded-xl p-12">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Start Your Construction Project?
        </h2>
        <p className="text-amber-100 max-w-2xl mx-auto mb-8">
          Our team of experts is ready to bring your vision to life with the
          same quality and craftsmanship showcased in our portfolio.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-white text-amber-700 font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Request a Consultation
          </button>
          <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
            View Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
