import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Service {
  id: number;
  img: string;
  title: string;
  description: string;
}

const Services = () => {
  const services: Service[] = [
    {
      id: 1,
      img: "/src/images/business-doors.webp",
      title: "Residential Doors",
      description: "High-quality residential door solutions for your home.",
    },
    {
      id: 2,
      img: "/src/images/business-doors.webp",
      title: "Commercial Doors",
      description: "Durable and secure doors for business establishments.",
    },
    {
      id: 3,
      img: "/src/images/business-doors.webp",
      title: "Custom Doors",
      description: "Tailored door solutions to match your specific needs.",
    },
  ];

  return (
    <section id="services" className="bg-gray-200 py-12 mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-bold text-slate-950">
          <span className="text-3xl px-2 text-amber-600">-</span>Our Services
        </p>
        <h1 className="text-4xl text-amber-700 font-bold">Services That Fit</h1>
        <h1 className="text-4xl text-slate-950 font-bold">Your Need</h1>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative"
              style={{
                clipPath: "polygon(90px 0, 100% 0, 100% 100%, 0 100%, 0 90px)",
              }}
            >
              <div className="relative h-60">
                <img
                  className="w-full h-full object-cover"
                  src={service.img}
                  alt={service.title}
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 mb-[-20px] ml-[20px] w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l9-9 9 9M4 10v10h16V10"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#learn-more"
                  className="text-amber-600 font-medium hover:text-amber-700 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center mt-4">
        <div className="flex items-center gap-2">
          <a
            href="#learn-more-target"
            className="bg-amber-600 text-white px-6 py-1.5 rounded-full hover:bg-amber-600 transition-colors md:w-auto"
          >
            View All Services
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-700 transition-colors"
            aria-label="View All Services"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-4 h-4 text-white"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
