import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlayCircle,
  faLightbulb,
  faUserGear,
  faClock,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import video from "/src/images/video.jpeg";

const features = [
  {
    id: 1,
    icon: faLightbulb,
    title: "Creative Workflow",
    description:
      "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts.",
  },
  {
    id: 2,
    icon: faUserGear,
    title: "Expert Team",
    description:
      "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts.",
  },
  {
    id: 3,
    icon: faClock,
    title: "On Time Delivery",
    description:
      "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts.",
  },
  {
    id: 4,
    icon: faAward,
    title: "Award Winning",
    description:
      "Lorem ipsum is a placeholder or dummy text used in typesetting and graphic design for previewing layouts.",
  },
];

const ChooseUs = () => {
  return (
    <div className="bg-white">
      {/* Top Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-gray-700 mb-1 flex items-center gap-2">
            <span className="text-amber-600 font-extrabold text-xl">–</span> Why
            Choose Us
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Building Trust
              </h1>
              <h1 className="text-3xl md:text-4xl font-bold text-amber-600 leading-tight">
                Delivering Excellence
              </h1>
            </div>
            <div className="flex gap-3 justify-center md:justify-end">
              <a
                href="#learn-more"
                className="bg-amber-600 text-white font-bold text-sm px-5 py-2 rounded-full hover:bg-amber-700 transition"
              >
                Learn More
              </a>
              <a
                href="#learn-more"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 hover:bg-gray-700 transition"
                aria-label="Learn more"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-white w-4 h-4"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left - Video (9:16 aspect ratio) */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg group h-full min-h-[500px]">
            <img
              src={video}
              alt="Construction Video"
              className="w-full h-full object-cover"
            />
            <button className="absolute inset-0 m-auto w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-80 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition duration-300">
              <FontAwesomeIcon
                icon={faPlayCircle}
                className="w-10 h-10 text-amber-500"
              />
            </button>
          </div>

          {/* Right - Features (matching height) */}
          <div className="bg-gray-900 rounded-2xl p-6 h-full min-h-[500px] overflow-y-auto">
            {features.map(({ id, icon, title, description }) => (
              <div
                key={id}
                className="flex items-start gap-4 text-white hover:bg-gray-800 p-4 rounded-lg transition duration-300 mb-4 last:mb-0"
              >
                <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-gray-800 rounded-lg">
                  <FontAwesomeIcon
                    icon={icon}
                    className="text-5xl text-white"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{title}</h3>
                  <p className="text-gray-300 text-sm">{description}</p>
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
