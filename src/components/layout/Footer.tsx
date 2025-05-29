import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "/src/images/logo-vector.svg";

const Footer = () => {
  return (
    <footer id="contact-us" className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-6 border-b border-white">
          <div className=" flex flex-row text-center gap-3 font-bold md:text-left mb-4 md:mb-0">
            <h1 className="text-white text-3xl md:text-4xl">Lets</h1>
            <h1 className="text-amber-600 text-3xl md:text-4xl">Connect</h1>
          </div>
          <button className="bg-amber-600 text-white font-bold text-sm px-5 py-1.5 rounded-full hover:bg-amber-700 transition-colors w-full md:w-auto">
            Contact Us
          </button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Social */}
          <div className="flex flex-col">
            <div className="mb-4">
              <img
                src={logo}
                alt="Facilities Expert Australia"
                className="h-12 max-md:h-10 object-contain opacity-100" // Changed to ensure full opacity
              />
            </div>
            <p className="mb-6 text-sm text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati doloribus dolores blanditiis id provident assumenda.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-600 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} size="xs" />
              </a>
              <a
                href="#"
                className="bg-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-600 transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} size="xs" />
              </a>
              <a
                href="#"
                className="bg-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-600 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} size="xs" />
              </a>
              <a
                href="#"
                className="bg-gray-700 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-600 transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} size="xs" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">
              Navigation
            </h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-amber-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-300 hover:text-amber-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">Contact</h2>
            <ul className="space-y-2">
              <li className="flex text-sm text-gray-300 items-start">
                +9876542732
              </li>
              <li className="flex text-sm text-gray-300 items-start">
                info@Facilitiesexpert.com.au
              </li>
              <li className="flex text-sm text-gray-300 items-start">
                Address line 1
              </li>
              <li className="flex text-sm text-gray-300 items-start">
                Address line 2
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-white">
              Get the latest Information
            </h2>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="py-2 pl-4 pr-10 text-sm text-white bg-gray-800 border border-gray-700 rounded-full w-full focus:outline-none focus:ring-1 focus:ring-amber-300"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-500 hover:text-amber-600">
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  className="h-7 w-7 bg-amber-600 text-white rounded-2xl hover:bg-amber-700 transition-colors p-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-amber-600 py-4 text-center text-white font-medium">
        Copyright © 2025, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
