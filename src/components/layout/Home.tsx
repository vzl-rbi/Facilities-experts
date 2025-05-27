import construction from "/src/images/construction.jpg";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <p className="text-sm font-bold text-gray-600 tracking-wider mb-2">
          Award Winning Excellence
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          Where Innovation Meets <br />
          <span className="text-amber-600">Perfection</span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* Tags Section */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "General Construction Services",
            "Concrete Work",
            "Design and Planning",
            "Pre-Construction",
          ].map((service) => (
            <div
              key={service}
              className="p-1 border-1 border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center"
            >
              <h2 className="text-lg font-medium text-center">{service}</h2>
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="flex-1 flex items-center">
          <p className="text-gray-800 text-base leading-relaxed">
            We deliver exceptional construction services with a commitment to
            quality and innovation. Our award-winning team combines decades of
            experience with cutting-edge techniques to bring your vision to
            life. From initial design to final execution, we ensure every detail
            meets our exacting standards of perfection.
          </p>
        </div>
      </div>

      {/* Stats Section - 75% image | 25% stats */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Image - 75% width (medium size) */}
        <div className="w-full md:w-[75%]">
          <img
            src={construction}
            alt="Building Construction"
            className="w-full h-auto max-h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Stats - 25% width */}
        <div className="w-full md:w-[25%] bg-amber-600 rounded-lg p-2 flex flex-col justify-evenly">
          {[
            { id: 1, number: "100+", label: "Projects Completed" },
            { id: 2, number: "5+", label: "Awards Won" },
            { id: 3, number: "200+", label: "Satisfied Clients" },
          ].map((stat) => (
            <div key={stat.id} className="text-center py-2">
              <h2 className="text-2xl font-bold text-white">{stat.number}</h2>
              <p className="text-white text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
