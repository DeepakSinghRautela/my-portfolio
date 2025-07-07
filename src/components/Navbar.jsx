// Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {name: "Education", path: "/education"},
    { name: "Skills", path: "/skills" },
    {name: "Experience", path: "/experience"},
    { name: "Projects", path: "/project" },
    { name: "Contact", path: "/contact" },
    
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md fixed top-0 w-full z-50 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-6 md:px-10">
        <h1 className="text-2xl font-extrabold tracking-wide">
          Deepak Singh Rautela
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`px-3 py-2 rounded-md transition duration-200 font-medium ${
                  location.pathname === link.path
                    ? "bg-white text-indigo-600 shadow-md"
                    : "hover:bg-white hover:text-indigo-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 to-purple-600 border-t border-indigo-300">
          <ul className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md transition duration-200 font-medium ${
                    location.pathname === link.path
                      ? "bg-white text-indigo-600 shadow-md"
                      : "hover:bg-white hover:text-indigo-600"
                  }`}
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
