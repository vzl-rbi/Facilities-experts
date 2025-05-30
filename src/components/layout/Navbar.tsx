import { Link, useLocation } from "react-router-dom";
import {
  faPhoneAlt,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();

  // Define navigation items with their labels, target section IDs, and paths
  const navLinksData = [
    { label: "Home", sectionId: "hero", path: "/" },
    { label: "Services", sectionId: "services", path: "/" },
    { label: "Projects", sectionId: "projects", path: "/" },
    { label: "Blogs", sectionId: "blogs", path: "/" },
    { label: "About Us", path: "/about-us" },
    { label: "Contact Us", path: "/contact-us" },
  ];

  const handleClickScroll = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarElement = document.querySelector("header");
      const navbarHeight = navbarElement?.offsetHeight || 0;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine color for mobile toggle button based on scroll and menu state
  const mobileToggleColor =
    isScrolled || mobileMenuOpen ? "text-gray-800" : "text-white";

  return (
    <header
      className={`border-t-4 border-blue-950 border-b py-2.5 sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-5">
        <div className="flex items-center mr-8">
          <img
            src="/src/images/logo-vector.svg"
            alt="Facilities Expert Australia"
            className="h-[70px] max-md:h-12"
          />
        </div>

        <button
          className={`md:hidden ml-auto p-2 ${mobileToggleColor}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
        </button>

        <div
          className={`${
            mobileMenuOpen ? "block w-full mt-4 md:mt-0" : "hidden"
          } md:flex md:flex-col md:flex-grow md:w-auto md:items-stretch`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center w-full mb-3 md:mb-2 max-md:gap-3">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-x-8 text-sm text-gray-800">
              <span>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="text-amber-600 mr-1.5"
                />
                +98765432111
              </span>
              <span>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-amber-600 mr-1.5"
                />
                info@facilitiesexpert.com.au
              </span>
            </div>

            <div className="flex gap-2 max-md:self-end">
              {[faFacebookF, faXTwitter, faInstagram, faYoutube].map(
                (icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-cyan-900 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs hover:bg-gray-700 transition-colors"
                    aria-label={`Follow us on ${
                      icon.iconName === "x-twitter"
                        ? "X Twitter"
                        : icon.iconName.replace(/-/g, " ")
                    }`}
                  >
                    <FontAwesomeIcon icon={icon} />
                  </a>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full border-t border-gray-200 pt-3 md:pt-4 gap-3 md:gap-0">
            <nav aria-label="Main navigation">
              <ul className="flex list-none flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-x-4 w-full md:w-auto">
                {navLinksData.map((navItem) => (
                  <li key={navItem.label} className="w-full md:w-auto">
                    <Link
                      to={navItem.path}
                      className={`block w-full md:w-auto text-left md:text-center px-2 py-2 rounded font-semibold text-sm capitalize transition-colors duration-300 hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500/50 ${
                        isScrolled ? "text-gray-700" : "text-gray-950"
                      }`}
                      onClick={(e) => {
                        setMobileMenuOpen(false);

                        // Only handle scroll if on homepage and section exists
                        if (location.pathname === "/" && navItem.sectionId) {
                          e.preventDefault();
                          handleClickScroll(navItem.sectionId);
                        }
                      }}
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <button className="bg-amber-600 text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-amber-700 transition-colors w-full md:w-auto md:ml-4">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
