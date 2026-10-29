
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Education", path: "education" },
    { name: "Skills", path: "skills" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo / Name */}
          <Link
            to="home"
            smooth={true}
            duration={600}
            className="cursor-pointer text-xl font-bold hover:text-yellow-300 transition"
          >
            Deepak Singh Rautela
          </Link>

          {/* Navigation Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm md:text-base">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    className="cursor-pointer hover:text-yellow-300 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/DeepakSinghRautela"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              title="GitHub"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/deepaksinghrautela"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              title="LinkedIn"
              className="hover:text-yellow-300 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-200">
          <p>
            © {new Date().getFullYear()} Deepak Singh Rautela. All rights reserved.
          </p>
          <p className="mt-2 text-gray-300">
            Designed and developed with React.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
