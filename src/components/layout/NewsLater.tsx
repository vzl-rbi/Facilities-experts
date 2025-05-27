import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NewsLetter = () => {
  return (
    <section className="py-12 bg-slate-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold tracking-widest text-gray-950">
            - Our Newsletter -
          </p>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Join Our Newsletter For
            <br />
            <span className="text-amber-600">Exclusive Deals and Insights</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-6">
            Stay updated with our latest offers, news, and valuable content
            delivered straight to your inbox.
          </p>
        </div>

        <form className="max-w-lg mx-auto mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
          <div className="relative flex-grow">
            {/* Visually hidden label for accessibility, placeholder acts as visual cue */}
            <label htmlFor="email-subscribe" className="sr-only">
              Email Address
            </label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-5 h-5 text-white bg-gray-950 rounded-full p-2 hover:bg-amber-600 transition-colors"
                aria-hidden="true" // Decorative icon
              />
            </div>
            <input
              id="email-subscribe"
              type="email"
              name="email"
              placeholder="Enter Email Address"
              required // Basic HTML5 validation
              className="text-white border border-gray-300 rounded-full pl-12 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent placeholder-gray-400"
            />
          </div>
          <button
            type="submit"
            className="bg-amber-600 text-white font-bold text-sm px-5 py-1.5 rounded-full hover:bg-amber-700 transition-colors w-full md:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
