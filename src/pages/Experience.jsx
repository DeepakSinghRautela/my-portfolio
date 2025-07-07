// Experience.jsx
function Experience() {
  return (
    <section className="bg-[#0f172a] text-white min-h-screen px-4 py-12 mt-16 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto pt-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-yellow-300 text-center">Work Experience</h2>

        <div className="space-y-8">
          <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-cyan-300">
              Front-End Developer
            </h3>
            <p className="text-yellow-200">
              Good Earth Design Studio Pvt. Ltd. — Gurugram, Haryana
            </p>
            <p className="text-slate-300">Oct 2024 – Present</p>
            <ul className="list-disc pl-6 mt-4 space-y-2 text-slate-300 text-base">
              <li>
                Developed and maintained reusable components using React, Redux,
                and Tailwind CSS for multiple e-commerce and CMS platforms.
              </li>
              <li>
                Collaborated with cross-functional teams to implement responsive
                and accessible UI features.
              </li>
              <li>
                Optimized performance and user experience by debugging and
                refactoring legacy components.
              </li>
              <li>
                Participated in code reviews and contributed to design decisions
                with a focus on clean and scalable architecture.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
