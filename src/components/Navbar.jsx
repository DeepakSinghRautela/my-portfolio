
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Education", path: "education" },
    { name: "Skills", path: "skills" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md fixed top-0 left-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-6 md:px-10">
        {/* Logo / Name */}
        <Link
          to="home"
          smooth={true}
          duration={600}
          className="text-lg sm:text-2xl font-extrabold tracking-wide cursor-pointer hover:text-yellow-300 transition-colors"
          onClick={closeMenu}
        >
          Deepak Singh Rautela
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                smooth={true}
                duration={600}
                offset={-70}
                spy={true}
                activeClass="bg-white !text-indigo-600 shadow-md"
                className="block px-3 py-2 rounded-md transition-colors duration-200 font-medium cursor-pointer hover:bg-white hover:text-indigo-600"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-gradient-to-r from-indigo-600 to-purple-600 border-t border-indigo-300/50 shadow-lg"
        >
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  spy={true}
                  onClick={closeMenu}
                  activeClass="bg-white !text-indigo-600 shadow-md"
                  className="block px-4 py-3 rounded-md transition-colors duration-200 font-medium cursor-pointer hover:bg-white hover:text-indigo-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
