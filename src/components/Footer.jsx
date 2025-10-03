import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "project" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left - Logo / Name */}
          <h2 className="text-xl font-bold">Deepak Singh Rautela</h2>

          {/* Middle - Navigation Links */}
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="cursor-pointer hover:text-yellow-300 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right - Social Icons */}
          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/DeepakSinghRautela"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6 text-sm text-gray-300">
          © {new Date().getFullYear()} Deepak Singh Rautela. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
