import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import handshake from "/src/images/handshake.jpg";

const About = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      {" "}
      {/* Added container with responsive padding */}
      <div className="flex flex-col mt-8 mb-8">
        <p className="text-sm font-bold text-slate-800">
          <span className="text-3xl px-2 text-amber-600">-</span>Who We Are
        </p>
        <h1 className="text-3xl text-amber-700 font-bold">
          Crafting Excellence
        </h1>
        <h1 className="text-3xl text-slate-950 font-bold">in Every Project</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <p className="text-stone-950 text-base md:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Optio exercitationem possimus commodi, totam ea consectetur
          <br />
          quibusdam perspiciatis corporis amet nostrum at maiores.
        </p>
        <div className="flex items-center gap-2">
          <a
            href="#learn-more-target"
            className="bg-amber-600 text-white px-6 py-1.5 rounded-full hover:bg-amber-500 transition-colors md:w-auto"
          >
            Learn More
          </a>
          <a
            href="#learn-more-target"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-700 transition-colors"
            aria-label="Learn more"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="w-4 h-4 text-white"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="w-full md:w-1/2 h-60 overflow-hidden rounded-lg relative">
          <img
            src={handshake}
            alt="HandShaking"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-1 bg-opacity-70 text-white px-10 py-1 rounded-full">
            <h1 className="flex flex-row text-5xl font-bold gap-4 p-4 bg-amber-600 text-white">
              25+{" "}
              <span className="text-sm font-bold block">
                <span className="text-3xl">Years</span> <br />
                of experiences
              </span>
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-60 bg-slate-950 rounded-lg flex flex-col">
          <p className="text-white p-6 flex-grow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            assumenda debitis in veniam inventore distinctio fuga voluptatem,
            consequuntur iusto ab repellendus deserunt dolorum quaerat molestiae
            mollitia sapiente sunt sequi praesentium.
          </p>
          <div className="flex items-center justify-between p-4">
            <a
              href="#our-mission-details"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-amber-600 rounded-none shadow-sm"
            >
              Our Mission
            </a>

            <div className="flex gap-3">
              <a
                href="#previous-mission"
                className="inline-flex items-center justify-center w-8 h-8 border border-amber-600 hover:border-amber-600 transition-colors rounded-full"
                aria-label="Previous Mission"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="w-3 h-3 text-amber-600"
                />
              </a>
              <a
                href="#next-mission"
                className="inline-flex items-center justify-center w-8 h-8 bg-amber-600 hover:bg-amber-600 transition-colors rounded-full"
                aria-label="Next Mission"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-3 h-3 text-white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
