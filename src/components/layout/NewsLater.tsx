import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    // e.g., send the email to your backend API
    if (email.trim() === "") {
      alert("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log("Subscribing with email:", email);
    alert(`Thank you for subscribing with ${email}!`);
    setEmail(""); // Clear the input after submission
  };

  return (
    <section className="py-12 bg-slate-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600 uppercase">
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

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto mt-8 space-y-4 sm:space-y-0 sm:flex sm:space-x-4"
        >
          <div className="relative flex-grow">
            {/* Visually hidden label for accessibility, placeholder acts as visual cue */}
            <label htmlFor="email-subscribe" className="sr-only">
              Email Address
            </label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-5 h-5 text-gray-400"
                aria-hidden="true" // Decorative icon
              />
            </div>
            <input
              id="email-subscribe"
              type="email"
              name="email" // Good practice for forms
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email Address"
              required // Basic HTML5 validation
              className="block w-full py-3 pl-10 pr-4 text-sm text-slate-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600 sm:text-base"
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
