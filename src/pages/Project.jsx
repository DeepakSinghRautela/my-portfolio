
function Project() {
  const projects = [
    {
      title: "Sunshine Logistics – Business Website",
      description:
        "Developed a responsive business website for a logistics company, focusing on usability, performance, and clean, reusable UI components to support future feature development.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
      ],
      website: "https://slservices.in",
    },
    {
      title: "Notebook – Assignment Management",
      description:
        "Built a streamlined assignment management system with role-based access control to enhance data security and manage user permissions.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Node.js",
        "MySQL",
      ],
      website: "",
    },
    {
      title: "Blogmania – Content Management System",
      description:
        "Designed and developed a content management system with authentication and a user-friendly editor that enables users to write and publish blog posts.",
      technologies: [
        "Authentication",
        "Content Management",
        "Web Development",
      ],
      website: "",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white px-6 py-12 mt-16 md:px-12"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-yellow-300 text-center">
          Projects
        </h2>

        <p className="text-slate-400 text-center mb-10 max-w-2xl mx-auto">
          Here are some of the projects I have developed,
          showcasing my experience in web development,
          responsive design, and application development.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 hover:shadow-xl hover:border-yellow-300/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-5 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="bg-slate-700 text-yellow-200 text-sm px-3 py-1 rounded-full border border-slate-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-400 hover:text-blue-300 hover:underline"
                >
                  Visit Website ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
