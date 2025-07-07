// Education.jsx
function Education() {
  return (
    <section id="education" className="bg-[#0f172a] text-white min-h-screen px-6 py-20 md:px-12 pt-24 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-yellow-300 text-center">Education</h2>

        <div className="space-y-8">
          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-cyan-300">Bachelor of Technology (B.Tech)</h3>
            <p className="text-yellow-200">Computer Science & Engineering</p>
            <p className="text-slate-300">Dev Bhoomi Institute of Technology, Dehradun</p>
            <p className="text-slate-400">2021 – 2024 (77.79%)</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-cyan-300">Diploma</h3>
            <p className="text-yellow-200">Computer Science</p>
            <p className="text-slate-300">Government Polytechnic Dwarahat</p>
            <p className="text-slate-400">2018 – 2021(73.36%)</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-cyan-300">Senior Secondary (12th)</h3>
            <p className="text-yellow-200">Science Stream (PCM)</p>
            <p className="text-slate-300">Government Inter College, Jalali , Almora</p>
            <p className="text-slate-400">2017 – 2018</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-cyan-300">High School (10th)</h3>
            <p className="text-yellow-200">General Education</p>
            <p className="text-slate-300">Government Inter College, Jalali , Almora</p>
            <p className="text-slate-400">2015 – 2016</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
