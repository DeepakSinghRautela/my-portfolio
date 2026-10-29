
function Skills() {
  const skillData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3 / SCSS", level: 85 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "React.js", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Tailwind CSS", level: 80 },
        { name: "React Router", level: 75 },
      ],
    },
    {
      category: "State & Application Architecture",
      skills: [
        { name: "Redux Toolkit", level: 85 },
        { name: "REST API Integration", level: 85 },
        { name: "Server-Side Rendering (SSR)", level: 75 },
        { name: "Reusable Components", level: 85 },
        { name: "Responsive UI", level: 85 },
      ],
    },
    {
      category: "Performance & Developer Tools",
      skills: [
        { name: "Core Web Vitals", level: 75 },
        { name: "Lighthouse / PageSpeed", level: 75 },
        { name: "Webpack", level: 75 },
        { name: "Git & GitHub", level: 85 },
        { name: "Bitbucket", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Node.js", level: 65 },
      ],
    },
    {
      category: "Programming & Database",
      skills: [
        { name: "Java", level: 70 },
        { name: "C", level: 75 },
        { name: "OOPs", level: 75 },
        { name: "SQL", level: 75 },
        { name: "MySQL", level: 75 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#0f172a] text-white px-6 py-12 mt-16 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-yellow-300">
          My Skills
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto mb-12">
          Technologies and tools I use to build, maintain, and
          optimize responsive web applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 text-left">
          {skillData.map((section) => (
            <div
              key={section.category}
              className="bg-gradient-to-br from-indigo-800 to-purple-800 p-6 rounded-xl shadow-md border border-indigo-700 hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-300 mb-6">
                {section.category}
              </h3>

              <ul className="space-y-5">
                {section.skills.map((skill) => (
                  <li key={skill.name}>
                    <div className="flex justify-between items-center gap-3 mb-2 text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-yellow-200 shrink-0">
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="bg-yellow-300 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
