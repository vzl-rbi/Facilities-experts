import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import handshake from "/src/images/handshake.jpg";

const About = () => {
  return (
    <>
      <div className="mx-auto flex flex-col ml-4 mt-5">
        <p className="text-sm font-semibold text-slate-800">-Who We Are</p>
        <h1 className="text-3xl text-amber-600 font-bold">
          Crafting Excellence{" "}
        </h1>
        <h1 className="text-3xl text-slate-950 font-semibold">
          in Every Project
        </h1>
      </div>

      <div className="mx-auto flex flex-row justify-between items-center ml-4">
        <p className="text-stone-950 font-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Optio exercitationem possimus commodi, totam ea consectetur
          <br />
          quibusdam perspiciatis corporis amet nostrum at maiores.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#learn-more-target"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-800 bg-amber-600 border border-transparent rounded-md shadow-sm hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600 sm:text-base transition-colors whitespace-nowrap"
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

      <div className="flex flex-row items-center justify-center mt-4 gap-3 ml-6 mr-6">
        {" "}
        {/* Removed justify-around */}
        <div className="w-1/2 h-60 overflow-hidden rounded-lg relative">
          {" "}
          {/* Added relative positioning */}
          <img
            src={handshake}
            alt="HandShaking"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-5 bg-opacity-70 text-white px-13 py-2 rounded-full">
            <h1 className=" flex flex-row text-5xl font-bold gap-4 bg-amber-600 text-white">
              25+{" "}
              <span className="text-sm font-bold block">
                Years <br />
                of experiences
              </span>{" "}
            </h1>
          </div>
        </div>
        <div className="w-1/2 h-60 bg-slate-950 rounded-lg flex flex-col">
          {" "}
          {/* Same fixed size */}
          <p className="text-white p-4 flex-grow">
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
                className="inline-flex items-center justify-center w-8 h-8  hover:bg-stone-950 transition-colors rounded-md"
                aria-label="Previous Mission"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="w-3 h-3 text-amber-600"
                />
              </a>
              <a
                href="#next-mission"
                className="inline-flex items-center justify-center w-8 h-8 bg-amber-600 hover:bg-amber-600 transition-colors rounded-md"
                aria-label="Next Mission"
              >
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-3 h-3 text-slate-900"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
