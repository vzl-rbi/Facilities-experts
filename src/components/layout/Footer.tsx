import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"; // Using free alternative
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "/src/images/logo-vector.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="text-center md:text-left mb-4 md:mb-0">
            <span className="text-white text-3xl md:text-4xl">Lets</span>{" "}
            <span className="text-amber-600 text-3xl md:text-4xl">Connect</span>
          </h1>
          <button className="bg-amber-600 hover:bg-amber-600 text-gray-800 font-medium px-6 py-2 rounded-sm text-sm transition-colors whitespace-nowrap">
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
                className="h-12 max-md:h-10"
              />
            </div>
            <p className="mb-6 text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati doloribus dolores blanditiis id provident assumenda.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-cyan-900 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
              >
                <FontAwesomeIcon icon={faFacebookF} size="xs" />
              </a>
              <a
                href="#"
                className="bg-cyan-900 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
              >
                <FontAwesomeIcon icon={faXTwitter} size="xs" />
              </a>
              <a
                href="#"
                className="bg-cyan-900 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
              >
                <FontAwesomeIcon icon={faInstagram} size="xs" />
              </a>
              <a
                href="#"
                className="bg-cyan-900 text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
              >
                <FontAwesomeIcon icon={faYoutube} size="xs" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Navigation</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2">📞</span> +9876542732
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span> info@Facilitiesexpert.com.au
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span> Address line 1
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span> Address line 2
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              Get the latest Information
            </h2>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="py-2 pl-4 pr-10 text-sm border rounded-full w-full focus:outline-none focus:ring-1 focus:ring-amber-300 text-gray-800"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-amber-500 hover:text-amber-600">
                <FontAwesomeIcon icon={faPaperPlane} className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs mt-2">
              We'll never share your email with anyone else.
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-amber-600 py-4 text-center text-gray-800 font-medium">
        Copyright © 2025, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
