// Contact.jsx
function Contact() {
  return (
    <section className="bg-[#0f172a] text-white min-h-screen px-6 py-12 mt-16 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-300">Contact Me</h2>
        <p className="text-lg mb-8">
          Feel free to reach out for collaborations, freelance opportunities, or
          just to say hello!
        </p>

        <div className="bg-slate-800 p-6 rounded-lg shadow-lg text-left">
          <ul className="space-y-4 text-lg">
            <li>
              📧 Email:{" "}
              <a
                href="mailto:deepaksinghrautela15@gmail.com"
                className="text-blue-400 hover:underline"
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
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/deepaksinghrautela
              </a>
            </li>
            <li>
              💼 GitHub:{" "}
              <a
                href="https://linkedin.com/in/deepaksinghrautela"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                https://github.com/DeepakSinghRautela
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-10 text-sm text-slate-400">
          I'll do my best to get back to you within 24 hours. Looking forward to
          connecting!
        </p>
      </div>
    </section>
  );
}

export default Contact;
