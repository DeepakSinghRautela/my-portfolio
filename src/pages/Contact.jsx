// Contact.jsx
function Contact() {
  return (
    <section className="bg-[#0f172a] text-white   px-4 py-12 mt-16 sm:px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-300">Contact Me</h2>
        <p className="text-base sm:text-lg mb-8">
          Feel free to reach out for collaborations, freelance opportunities, or just to say hello!
        </p>

        <div className="bg-slate-800 p-4 sm:p-6 rounded-lg shadow-lg text-left text-base sm:text-lg">
          <ul className="space-y-4">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:deepaksinghrautela15@gmail.com"
                className="text-blue-400 hover:underline break-all"
              >
                deepaksinghrautela15@gmail.com
              </a>
            </li>
            <li>
              📞 Phone:{" "}
              <a
                href="tel:+917466842956"
                className="text-blue-400 hover:underline"
              >
                +91 74668 42956
              </a>
            </li>
            <li>
              💼 LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/deepaksinghrautela"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline break-all"
              >
                linkedin.com/in/deepaksinghrautela
              </a>
            </li>
            <li>
              💼 GitHub:{" "}
              <a
                href="https://github.com/DeepakSinghRautela"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline break-all"
              >
                github.com/DeepakSinghRautela
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-xs sm:text-sm text-slate-400">
          I'll do my best to get back to you within 24 hours. Looking forward to connecting!
        </p>
      </div>
    </section>
  );
}

export default Contact;
