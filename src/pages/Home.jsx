// Home.jsx
import { Link } from 'react-router-dom';
import { FaReact, FaJs, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <section id="home" className="flex items-center justify-center min-h-screen bg-[#0f172a] px-6 mt-16 md:px-20 py-24 text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
            Hi, I'm <span className="text-yellow-300">Deepak Singh Rautela</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-cyan-300 font-semibold">
            <Typewriter
              words={['Front-End Developer', 'React Enthusiast', 'UI Specialist']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            I build fast, responsive, and scalable web applications using{" "}
            <span className="text-cyan-300">React</span>,{" "}
            <span className="text-cyan-300">Redux</span>,{" "}
            <span className="text-cyan-300">Tailwind CSS</span>, and{" "}
            <span className="text-cyan-300">JavaScript</span>.
          </p>

          {/* Tech Icons */}
          <div className="flex gap-4 mb-6 text-3xl text-cyan-300 justify-center md:justify-start">
            <FaReact title="React" />
            <FaJs title="JavaScript" />
            <FaCss3Alt title="Tailwind CSS" />
            <FaGithub title="GitHub" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/project"
              className="px-6 py-3 bg-yellow-300 text-indigo-800 font-semibold rounded shadow hover:bg-yellow-400 transition"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-indigo-700 transition"
            >
              Let's Connect
            </Link>
            <a
              href="/DSR_Resume.pdf"
              download
              className="px-6 py-3 border-2 border-yellow-300 text-yellow-300 font-semibold rounded hover:bg-yellow-300 hover:text-indigo-900 transition"
            >
              Download Resume
            </a>
          </div>

        </div>

        {/* Profile Image */}
        <div className="w-40 h-40 md:w-60 md:h-60 scale-105 rounded-full bg-yellow-300 overflow-hidden shadow-lg transition-transform duration-300 hover:scale-110">
          <img
            src="/Profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
