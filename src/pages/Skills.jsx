// Skills.jsx
function Skills() {
  const skillData = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3 / Tailwind CSS", level: 90 },
        { name: "JavaScript (ES6+)", level: 80 },
        { name: "React.js", level: 80 },
        { name: "Redux / Redux Toolkit", level: 75 },
      ],
    },
     {
      category: "Programming Languages",
      skills: [
        { name: "c", level: 85 },
        { name: "java", level: 70 },
        { name: "OOPS", level: 75 },
        { name: "SQL", level: 75 },

      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Bitbucket", level: 85 },
        { name: "Vite, NPM", level: 80 },
      ],
    },
   
  ];

  return (
    <section className="bg-[#0f172a] text-white   px-6 py-12 mt-16 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-yellow-300">My Skills</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillData.map((section, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-indigo-800 to-purple-800 p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">
                {section.category}
              </h3>
              <ul className="space-y-5 text-left">
                {section.skills.map((skill, i) => (
                  <li key={i}>
                    <div className="flex justify-between mb-1 text-sm font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <div
                        className="bg-yellow-300 h-2.5 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
