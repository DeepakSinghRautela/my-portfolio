
function Experience() {
  const responsibilities = [
    "Develop and maintain goodearth.in, a production-level e-commerce platform using React.js, TypeScript, and Redux Toolkit within a server-side-rendered (SSR) architecture.",

    "Optimize Core Web Vitals by diagnosing render-blocking fonts, service worker configuration issues, and slow third-party scripts to improve Largest Contentful Paint (LCP) and reduce Total Blocking Time (TBT).",

    "Build and maintain reusable UI components, including multi-select Product Listing Page (PLP) filters, Product Detail Page (PDP) size and variant selectors, and accessible dropdown menus.",

    "Developed a careers module end-to-end, including server-rendered meta tags for social sharing, Google Analytics event tracking, and mobile-responsive UI.",

    "Implement secure form submission flows with field-level encryption and resilient error handling for backend API integrations.",

    "Integrate REST APIs and manage complex application state using Redux Toolkit to deliver a consistent user experience across desktop, tablet, and mobile devices.",

    "Collaborate with designers, backend engineers, and QA teams in an Agile/Scrum environment, participating in sprint planning, code reviews, and bug triage.",
  ];

  return (
    <section
      id="experience"
      className="bg-[#0f172a] text-white px-4 py-12 mt-16 sm:px-6 md:px-12"
    >
      <div className="max-w-4xl mx-auto pt-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-yellow-300 text-center">
          Work Experience
        </h2>

        <div className="space-y-8">
          <div className="bg-slate-800 p-5 sm:p-8 rounded-xl shadow-lg border border-slate-700 hover:border-yellow-300/40 transition-colors duration-300">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold text-cyan-300">
                  Frontend Developer
                </h3>

                <p className="text-yellow-200 mt-2">
                  Good Earth Design Studio Pvt. Ltd.
                </p>

                <p className="text-slate-400 mt-1">
                  Delhi, India
                </p>
              </div>

              <span className="text-slate-300 text-sm sm:text-right shrink-0">
                Oct 2024 – Present
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 mb-6">
              {[
                "React.js",
                "TypeScript",
                "Redux Toolkit",
                "SSR",
                "REST APIs",
                "Core Web Vitals",
              ].map((skill) => (
                <span
                  key={skill}
                  className="text-xs sm:text-sm bg-slate-700 text-cyan-200 px-3 py-1.5 rounded-full border border-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h4 className="text-lg font-semibold text-white mb-4">
              Key Responsibilities & Contributions
            </h4>

            <ul className="list-disc pl-5 sm:pl-6 space-y-3 text-slate-300 text-sm sm:text-base leading-7">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="pl-1">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
