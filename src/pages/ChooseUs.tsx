import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import video from "/src/images/video.jpeg";
import onTime from "/src/images/on-time.png";
import creative from "/src/images/creative.png";
import idea from "/src/images/idea.png";
import civil from "/src/images/civil-engineering.png";

const ChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: creative,
      title: "Creative Workflow",
      description:
        "Streamlined processes with innovative ideas to maximize productivity and quality.",
    },
    {
      id: 2,
      icon: civil,
      title: "Expert Team",
      description:
        "Professional engineers and skilled workers dedicated to every project’s success.",
    },
    {
      id: 3,
      icon: onTime,
      title: "On Time Delivery",
      description:
        "We deliver projects according to schedule without compromising quality.",
    },
    {
      id: 4,
      icon: idea,
      title: "Award Winning",
      description:
        "Recognized for excellence and innovation in the construction industry.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <p className="text-sm font-semibold text-gray-800 tracking-wider mb-2 text-center md:text-left">
              - Why Choose Us -
            </p>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Building Trust
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold text-amber-600 leading-tight">
                  Delivering Excellence
                </h1>
              </div>

              <div className="flex items-center justify-center md:justify-end gap-3">
                <a
                  href="#learn-more-target"
                  className="bg-amber-600 text-white font-bold text-sm px-5 py-1.5 rounded-full hover:bg-amber-700 transition-colors w-full md:w-auto"
                >
                  Learn More
                </a>
                <a
                  href="#learn-more-target"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 hover:bg-gray-700 transition-colors"
                  aria-label="Learn more"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="w-5 h-5 text-white"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          {/* Video */}
          <div className="w-full lg:w-1/2 relative group max-h-[400px] overflow-hidden rounded-xl shadow-lg">
            <img
              src={video}
              alt="Construction video"
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="w-10 h-10 text-amber-500"
              />
            </button>
          </div>

          {/* Features List */}
          <div className="w-full lg:w-1/2 space-y-6  bg-gray-900">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex gap-4  text-white p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-16 h-14 bg-blue-700 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-9 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChooseUs;
