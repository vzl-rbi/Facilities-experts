import { faPhoneAlt, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faXTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '/src/images/logo-vector.svg';
import { useState } from 'react';
const Navbar = ()=>{
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return(
    <header className="bg-white border-t-4 border-blue-950 border-b py-2.5">
        <div className="max-w-6xl mx-auto flex flex-wrap px-5">
          <div className="flex items-center mr-8">
            <img
              src={logo}
              alt="Facilities Expert Australia"
              className="h-[70px] max-md:h-12"
            />
          </div>
          <button 
            className="md:hidden ml-auto p-2 text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
          </button>

          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex flex-col flex-grow w-full md:w-auto`}>
            <div className="flex justify-between items-center w-full mb-4 max-md:flex-wrap">
              <div className="max-md:hidden md:flex items-center gap-10 text-sm text-gray-800">
                <span>
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-amber-600" />
                  +98765432111
                </span>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} className="text-amber-600" />
                  info@facilitiesexpert.com.au
                </span>
              </div>

              <div className="flex gap-2 max-md:ml-auto">
                <a
                  href="#"
                  className="bg-cyan-900 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs hover:bg-gray-800"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="#"
                  className="bg-cyan-900 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs hover:bg-gray-800"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="#"
                  className="bg-cyan-900 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs hover:bg-gray-800"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="#"
                  className="bg-cyan-900 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs hover:bg-gray-800"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>

            <div className="flex justify-between items-center w-full border-t border-gray-200 pt-4 flex-col md:flex-row gap-4 md:gap-0">
              <ul className="flex list-none gap-5 flex-col md:flex-row w-full md:w-auto">
                <li className="cursor-pointer font-semibold text-sm text-amber-600 capitalize">
                  Home
                </li>
                <li className="cursor-pointer font-semibold text-sm text-gray-800 hover:text-amber-600 capitalize transition-colors">
                  Services
                </li>
                <li className="cursor-pointer font-semibold text-sm text-gray-800 hover:text-amber-600 capitalize transition-colors">
                  Projects
                </li>
                <li className="cursor-pointer font-semibold text-sm text-gray-800 hover:text-amber-600 capitalize transition-colors">
                  Blogs
                </li>
                <li className="cursor-pointer font-semibold text-sm text-gray-800 hover:text-amber-600 capitalize transition-colors">
                  About Us
                </li>
                <li className="cursor-pointer font-semibold text-sm text-gray-800 hover:text-amber-600 capitalize transition-colors">
                  Contact Us
                </li>
              </ul>

              <button className="bg-amber-600 text-white font-bold text-sm px-5 py-1.5 rounded-full hover:bg-amber-700 transition-colors w-full md:w-auto">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </header>
  )

}
export default Navbar;
