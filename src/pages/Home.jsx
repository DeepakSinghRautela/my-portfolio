
import {
  FaReact,
  FaJs,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiRedux } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";

function Home() {
  return (
    <div className="bg-[#0f172a] text-white scroll-smooth">
      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center px-6 mt-16 md:px-12 lg:px-20 py-20 md:py-24"
      >
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-cyan-300 font-medium mb-4 tracking-wide">
              FRONTEND DEVELOPER
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight">
              Hi, I'm{" "}
              <span className="text-yellow-300">
                Deepak Singh Rautela
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 text-cyan-300 font-semibold">
              <Typewriter
                words={[
                  "React.js Developer",
                  "TypeScript Developer",
                  "Frontend Developer",
                  "UI Performance Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </h2>

            <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl text-slate-300 leading-relaxed">
              I build responsive, scalable, and high-performance web
              applications using{" "}
              <span className="text-cyan-300 font-medium">React.js</span>,{" "}
              <span className="text-cyan-300 font-medium">TypeScript</span>,{" "}
              <span className="text-cyan-300 font-medium">
                Redux Toolkit
              </span>
              , and modern frontend technologies. I also work with
              server-side rendering and Core Web Vitals optimization.
            </p>

            {/* Technology Icons */}
            <div className="flex gap-5 mb-8 text-3xl text-cyan-300 justify-center md:justify-start">
              <FaReact title="React.js" />
              <SiTypescript title="TypeScript" />
              <SiRedux title="Redux Toolkit" />
              <FaJs title="JavaScript" />
              <FaCss3Alt title="CSS" />
              <FaGithub title="GitHub" />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-yellow-300 text-slate-900 font-semibold rounded-lg hover:bg-yellow-200 transition-colors duration-300"
              >
                Let's Connect
              </a>

              <a
                href="/DSR_Resume.pdf"
                download="Deepak_Resume.pdf"
                type="application/pdf"
                className="px-6 py-3 border-2 border-yellow-300 text-yellow-300 font-semibold rounded-lg hover:bg-yellow-300 hover:text-slate-900 transition-colors duration-300"
              >
                Download Resume
              </a>

              <a
                href="https://github.com/DeepakSinghRautela"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-slate-500 text-white font-semibold rounded-lg hover:border-cyan-300 hover:text-cyan-300 transition-colors duration-300"
              >
                <FaGithub className="inline mr-2" />
                GitHub
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 shrink-0 rounded-full bg-yellow-300 overflow-hidden shadow-xl ring-4 ring-cyan-300/20 transition-transform duration-300 hover:scale-105">
            <img
              src="/Profile.jpeg"
              alt="Deepak Singh Rautela"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Sections */}
      <About />
      <Education />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
