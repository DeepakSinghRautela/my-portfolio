// Home.jsx
function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#0f172a] px-6  mt-16 md:px-20 py-24 text-white">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Hi, I'm{" "}
            <span className="text-yellow-300">Deepak Singh Rautela</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Front-End Developer passionate about building fast, responsive, and
            scalable web applications using{" "}
            <span className="text-cyan-300">React</span>,{" "}
            <span className="text-cyan-300">Redux</span>,{" "}
            <span className="text-cyan-300">Tailwind CSS</span>, and{" "}
            <span className="text-cyan-300">JavaScript</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/project"
              className="px-6 py-3 bg-yellow-300 text-indigo-800 font-semibold rounded shadow hover:bg-yellow-400 transition"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-indigo-700 transition"
            >
              Let's Connect
            </a>
            <a
              href="DSR_Resume.pdf"
              download
              className="px-6 py-3 border-2 border-yellow-300 text-yellow-300 font-semibold rounded hover:bg-yellow-300 hover:text-indigo-900 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-yellow-300 overflow-hidden shadow-lg">
          <img
            src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
