import { useState } from "react";
import {
  FaHardHat,
  FaTools,
  FaTruckMoving,
  FaMedal,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-950 sm:text-5xl">
          Building Excellence Since
          <span className="text-amber-700"> 1985</span>
        </h1>
        <p className="mt-6 text-md font-semibold text-gray-950 max-w-3xl mx-auto">
          For nearly four decades, Construction Experts has been transforming
          skylines and communities with innovative building solutions and
          uncompromising quality.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
        {[
          { id: "history", label: "Our History" },
          { id: "mission", label: "Our Mission" },
          { id: "team", label: "Leadership Team" },
          { id: "values", label: "Core Values" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 px-6 text-lg font-semibold cursor-pointer hover:bg-amber-700 hover:text-white hover:rounded-lg ${
              activeTab === tab.id
                ? "text-amber-700 border-b-1 border-amber-700"
                : "text-gray-950 hover:text-gray-950"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
        {activeTab === "history" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-950 mb-6">
                Building Legacies Since 1985
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-sm font-semibold text-gray-950">
                  Founded by Robert Johnson in a small garage, Construction
                  Experts started with just two employees and a single truck.
                  Today, we're a nationally recognized firm with over 500
                  employees and $2 billion in completed projects.
                </p>
                <p className="text-sm font-semibold text-gray-950">
                  Our journey has been marked by landmark projects that have
                  reshaped city skylines and created thriving communities. From
                  our first commercial building in downtown Chicago to
                  award-winning sustainable developments across the country.
                </p>
                <p className="text-sm font-semibold text-gray-950">
                  What hasn't changed is our commitment to craftsmanship,
                  integrity, and building relationships that last longer than
                  our structures.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 mt-8" />
            </div>
          </div>
        )}

        {activeTab === "mission" && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-950 text-center mb-12">
              Building the Future,{" "}
              <span className="text-3xl font-bold text-amber-700">
                Honoring the Past
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-amber-700 mb-4 flex items-center">
                  <FaHardHat className="mr-2" /> Our Vision
                </h3>
                <p className="text-md font-semibold text-gray-950">
                  To redefine the construction landscape through innovative
                  engineering, sustainable practices, and structures that
                  inspire communities for generations.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-amber-700 mb-4 flex items-center">
                  <FaTools className="mr-2" /> Our Mission
                </h3>
                <p className="text-md font-semibold text-gray-950">
                  To deliver exceptional construction services through
                  unparalleled expertise, cutting-edge technology, and a
                  relentless commitment to safety and quality.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-amber-50 p-8 rounded-lg border-l-4 border-amber-700">
              <h3 className="text-xl font-bold text-gray-950 mb-4">
                2025 Strategic Goals
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start text-md font-semibold text-gray-950">
                  <span className="text-amber-700 mr-2">•</span>
                  Achieve net-zero carbon footprint on all new projects
                </li>
                <li className="flex items-start text-md font-semibold text-gray-950">
                  <span className="text-amber-700 mr-2">•</span>
                  Implement AI-assisted project management across all divisions
                </li>
                <li className="flex items-start text-md font-semibold text-gray-950">
                  <span className="text-amber-700 mr-2">•</span>
                  Develop apprenticeship programs in 10 underserved communities
                </li>
                <li className="flex items-start text-md font-semibold text-gray-950">
                  <span className="text-amber-700 mr-2">•</span>
                  Reduce construction waste by 40% through advanced recycling
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "team" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-950 text-center mb-12">
              Meet Our <span className="text-amber-700">Leadership Team</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Sarah Johnson", role: "CEO", experience: "25 years" },
                {
                  name: "Michael Chen",
                  role: "Chief Engineer",
                  experience: "18 years",
                },
                {
                  name: "Elena Rodriguez",
                  role: "Operations Director",
                  experience: "15 years",
                },
                {
                  name: "David Wilson",
                  role: "Sustainability Officer",
                  experience: "12 years",
                },
                {
                  name: "Priya Patel",
                  role: "Finance Director",
                  experience: "14 years",
                },
                {
                  name: "James Carter",
                  role: "Safety Director",
                  experience: "20 years",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
                >
                  <div className="bg-gray-200 border-2 border-dashed w-full h-64" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-950">
                      {member.name}
                    </h3>
                    <p className="text-amber-700 font-medium">{member.role}</p>
                    <p className="text-sm font-semibold text-gray-950 mt-2">
                      Industry experience: {member.experience}
                    </p>
                    <button className="mt-4 text-sm text-amber-600 font-medium cursor-pointer">
                      <span className="hover:text-amber-700">View Profile</span>{" "}
                      →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "values" && (
          <div>
            <h2 className="text-3xl font-bold text-gray-950 text-center mb-12">
              The Foundation of{" "}
              <span className="text-amber-700">Our Success</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaMedal className="text-2xl text-amber-700" />,
                  title: "Quality Craftsmanship",
                  description:
                    "We never compromise on materials or workmanship, ensuring every project meets our exacting standards.",
                },
                {
                  icon: <FaHandshake className="text-2xl text-amber-700" />,
                  title: "Integrity",
                  description:
                    "We build trust through transparency, honesty, and ethical business practices.",
                },
                {
                  icon: <FaTruckMoving className="text-2xl text-amber-700" />,
                  title: "Reliability",
                  description:
                    "We honor our commitments, delivering projects on time and within budget.",
                },
                {
                  icon: <FaLightbulb className="text-2xl text-amber-700" />,
                  title: "Innovation",
                  description:
                    "We embrace new technologies and methods to solve complex construction challenges.",
                },
                {
                  icon: <FaHardHat className="text-2xl text-amber-700" />,
                  title: "Safety First",
                  description:
                    "Our zero-incident policy protects our team, partners, and communities.",
                },
                {
                  icon: <FaTools className="text-2xl text-amber-700" />,
                  title: "Sustainability",
                  description:
                    "We build responsibly, minimizing environmental impact for future generations.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200"
                >
                  <div className="w-13 h-13 rounded-full bg-gray-950 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-md font-semibold text-gray-900">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-amber-700 rounded-xl text-white p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">By The Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "38", label: "Years Experience" },
            { value: "1200+", label: "Projects Completed" },
            { value: "96%", label: "Client Retention" },
            { value: "500+", label: "Team Members" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-amber-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gray-50 rounded-xl p-12">
        <h2 className="text-3xl font-bold text-gray-950 mb-4">
          Ready to Build{" "}
          <span className="text-amber-700">Something Remarkable?</span>
        </h2>
        <p className="text-md font-semibold text-gray-950 max-w-2xl mx-auto mb-8">
          Whether you're planning a commercial development, renovation, or
          custom build, our team is ready to bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors cursor-pointer">
            Start Your Project
          </button>
          <button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-950 transition-colors cursor-pointer">
            View Our Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
