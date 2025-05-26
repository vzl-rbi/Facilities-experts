import businessDoors from "/src/images/business-doors.webp";

const services = [
  {
    id: 1,
    img: businessDoors,
    title: "Residential Doors",
    description: "High-quality residential door solutions for your home.",
  },
  {
    id: 2,
    img: businessDoors,
    title: "Commercial Doors",
    description: "Durable and secure doors for business establishments.",
  },
  {
    id: 3,
    img: businessDoors,
    title: "Custom Doors",
    description: "Tailored door solutions to match your specific needs.",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-200 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-slate-800">-Our Services</p>
        <h1 className="text-3xl text-amber-600 font-bold">Services That Fit</h1>
        <h1 className="text-3xl text-slate-950 font-semibold">Your Need</h1>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                className="w-full h-48 object-cover"
                src={service.img}
                alt={service.title}
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#learn-more"
                  className="text-amber-600 font-medium hover:text-amber-600 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
