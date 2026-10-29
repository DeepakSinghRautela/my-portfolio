
function About() {
  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white px-6 py-12 mt-16 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-yellow-300 text-center">
          About Me
        </h2>

        <p className="text-lg mb-6 leading-relaxed text-slate-300">
          I'm{" "}
          <span className="font-semibold text-yellow-200">
            Deepak Singh Rautela
          </span>
          , a Frontend Developer based in Gurugram, Haryana, with over a year
          of experience building and optimizing production-grade web
          applications. I specialize in{" "}
          <span className="text-cyan-300">React.js</span>,{" "}
          <span className="text-cyan-300">TypeScript</span>, and{" "}
          <span className="text-cyan-300">Redux Toolkit</span>, with a focus on
          scalable architecture, reusable components, and responsive user
          interfaces.
        </p>

        <p className="text-lg mb-6 leading-relaxed text-slate-300">
          At{" "}
          <span className="text-yellow-200">
            Good Earth Design Studio Pvt. Ltd.
          </span>
          , I develop and maintain a production e-commerce platform using
          React.js, TypeScript, Redux Toolkit, and server-side rendering.
          My work includes REST API integration, reusable UI components,
          application state management, and performance optimization using
          Core Web Vitals and Lighthouse audits.
        </p>

        <p className="text-lg mb-6 leading-relaxed text-slate-300">
          I hold a{" "}
          <span className="text-yellow-200">
            B.Tech in Computer Science & Engineering
          </span>{" "}
          from Dev Bhoomi Institute of Technology and a Diploma in Computer
          Science & Engineering from Govt. Polytechnic Dwarahat, Uttarakhand.
          I enjoy solving complex frontend problems, learning new technologies,
          and building reliable, user-friendly web experiences.
        </p>

        <div className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700">
          <h3 className="text-2xl font-semibold mb-5 text-yellow-300">
            Highlights
          </h3>

          <ul className="space-y-4 text-slate-300">
            <li className="flex gap-3">
              <span>💼</span>
              <span>
                <strong className="text-white">Professional Experience:</strong>{" "}
                Frontend Developer at Good Earth Design Studio Pvt. Ltd.
                (October 2024 – Present).
              </span>
            </li>

            <li className="flex gap-3">
              <span>⚛️</span>
              <span>
                <strong className="text-white">Core Technologies:</strong>{" "}
                React.js, TypeScript, JavaScript, Redux Toolkit, HTML,
                CSS/SCSS, and Tailwind CSS.
              </span>
            </li>

            <li className="flex gap-3">
              <span>🚀</span>
              <span>
                <strong className="text-white">Specializations:</strong>{" "}
                Server-side rendering, REST API integration, reusable
                components, and Core Web Vitals optimization.
              </span>
            </li>

            <li className="flex gap-3">
              <span>🛠️</span>
              <span>
                <strong className="text-white">Projects:</strong>{" "}
                Sunshine Logistics business website, Notebook Assignment
                Management, and Blogmania Content Management System.
              </span>
            </li>

            <li className="flex gap-3">
              <span>🎓</span>
              <span>
                <strong className="text-white">Education:</strong>{" "}
                B.Tech and Diploma in Computer Science & Engineering.
              </span>
            </li>

            <li className="flex gap-3">
              <span>🏆</span>
              <span>
                <strong className="text-white">Achievement:</strong>{" "}
                Third position in Lakshagriha Hackathon 2.0, organized by
                Dev Bhoomi Uttarakhand University.
              </span>
            </li>

            <li className="flex gap-3">
              <span>📜</span>
              <span>
                <strong className="text-white">Certification:</strong>{" "}
                Python Fundamentals & Programming certification by Nasscom.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
