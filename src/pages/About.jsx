import Education from '../pages/Education.jsx';
function About() {
  return (
    <section className="bg-[#0f172a] text-white min-h-screen px-6 py-12 mt-16 md:px-12 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-yellow-300 text-center">
          About Me
        </h2>
        <p className="text-lg mb-6 leading-relaxed">
          I'm{" "}
          <span className="font-semibold text-yellow-200">
            Deepak Singh Rautela
          </span>
          , a dedicated and highly skilled Front-End Developer based in
          Gurugram, Haryana. I specialize in creating efficient, scalable, and
          user-friendly web applications using modern technologies such as{" "}
          <span className="text-cyan-300">React</span>,{" "}
          <span className="text-cyan-300">Redux</span>,{" "}
          <span className="text-cyan-300">Tailwind CSS</span>, and{" "}
          <span className="text-cyan-300">JavaScript</span>.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          With over a year of professional experience at{" "}
          <span className="text-yellow-200">
            Good Earth Design Studio Pvt. Ltd.
          </span>
          , I have collaborated with cross-functional teams to enhance
          performance and implement reusable components. My passion lies in
          building intuitive UI, debugging efficiently, and delivering quality
          results.
        </p>
        <p className="text-lg mb-6 leading-relaxed">
          I hold a{" "}
          <span className="text-yellow-200">
            B.Tech in Computer Science & Engineering
          </span>{" "}
          from Dev Bhoomi Institute of Technology, and a Diploma from Govt.
          Polytechnic Dwarahat. I continuously seek to improve my skills through
          hands-on experience and learning.
        </p>

        <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
            Highlights
          </h3>
          <ul className="list-disc pl-6 space-y-3 text-slate-300">
            <li>
              💼 React.js Developer at Good Earth Design Studio (Oct 2024 –
              Present)
            </li>
            <li>
              🛠️ Tech Stack: HTML, CSS, JavaScript, TypeScript, React, Redux, SQL, C, Java
            </li>
            <li>
              🚀 Projects: Blogmania CMS, Notebook Assignment System, E-commerce
              Dashboard
            </li>
            <li>🎖️ 3rd Position in Lakshagriha Hackathon 2.0</li>
            <li>📜 Certified in Python Fundamentals by Nasscom</li>
            <li>🌐 Fluent in English and Hindi</li>
          </ul>
        </div>
      </div>
      <Education />
    </section>
  );
}

export default About;
