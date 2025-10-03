function Project() {
  return (
    <section className="bg-[#0f172a] text-white   px-6 py-12 mt-16 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-yellow-300 text-center">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Notebook - Assignment Management
            </h3>
            <p className="text-slate-300 mb-4">
              A secure role-based assignment management system with user
              authentication. Developed using HTML, CSS, JavaScript, Bootstrap,
              Node.js, and MySQL.
            </p>
            <a href="#" className="inline-block text-blue-400 hover:underline">
              View Project
            </a>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Blogmania - Content Management System
            </h3>
            <p className="text-slate-300 mb-4">
              A CMS platform for writing and publishing blog posts with
              authentication and responsive UI. Built using React, Node.js, and
              modern UI principles.
            </p>
            <a href="#" className="inline-block text-blue-400 hover:underline">
              View Project
            </a>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              E-commerce Dashboard
            </h3>
            <p className="text-slate-300 mb-4">
              Built with React and Redux for dynamic data management. Includes
              charts, user management, and product analytics.
            </p>
            <a href="#" className="inline-block text-blue-400 hover:underline">
              View Project
            </a>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1">
            <h3 className="text-2xl font-semibold mb-2 text-white">
              Personal Portfolio Website
            </h3>
            <p className="text-slate-300 mb-4">
              Responsive portfolio built using React Router, Tailwind CSS, and
              deployed on GitHub Pages.
            </p>
            <a href="#" className="inline-block text-blue-400 hover:underline">
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
