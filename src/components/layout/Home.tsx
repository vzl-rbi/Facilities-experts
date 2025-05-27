import construction from "/src/images/construction.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
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

      {/* Tags + Description */}
      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "General Construction Services",
            "Concrete Work",
            "Design & Planning",
            "Pre-Construction",
          ].map((service) => (
            <div
              key={service}
              className="p-1 border border-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-300 cursor-pointer flex items-center justify-center"
            >
              <h2 className="text-lg font-medium text-center">{service}</h2>
            </div>
          ))}
        </div>
        <div className="flex-1 flex items-center">
          <p className="text-gray-800 text-base leading-relaxed">
            We deliver exceptional construction services with a commitment to
            quality and innovation. Our award-winning team combines decades of
            experience with cutting-edge techniques to bring your vision to
            life.
          </p>
        </div>
      </div>

      {/* Image + Stats with Background Half Behind */}
      <div className="relative mt-14 pb-20">
        {/* Changed: Full-width blue background (no horizontal margins) */}
        <div className="absolute inset-x-0 top-1/2 h-1/2 bg-[#2e6678] z-0 -mx-4 sm:-mx-6 lg:-mx-8" />

        <div className="relative z-10 flex flex-col md:flex-row gap-4 items-center">
          {/* Image Block */}
          <div className="w-full md:w-[75%] rounded-xl overflow-hidden shadow-lg bg-white p-2">
            <div className="relative group">
              <img
                src={construction}
                alt="Building Construction"
                className="w-full h-auto max-h-[320px] object-cover"
              />
              <button className="absolute inset-0 m-auto w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="w-10 h-10 border-amber-600 text-amber-600"
                />
              </button>
            </div>
          </div>

          {/* Stats Block */}
          <div className="w-full md:w-[20%] bg-amber-600 rounded-xl px-6 py-4 flex flex-col justify-center space-y-4 shadow-lg">
            {[
              { id: 1, number: "100+", label: "Projects Completed" },
              { id: 2, number: "5+", label: "Years of Experience" },
              { id: 3, number: "200+", label: "Happy Customers" },
            ].map((stat) => (
              <div key={stat.id} className="text-center">
                <h2 className="text-2xl font-bold text-white">{stat.number}</h2>
                <p className="text-white text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
