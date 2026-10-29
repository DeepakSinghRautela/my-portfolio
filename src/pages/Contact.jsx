
function Contact() {
  const contacts = [
    {
      icon: "📧",
      label: "Email",
      value: "deepaksinghrautela15@gmail.com",
      href: "mailto:deepaksinghrautela15@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 74668 42956",
      href: "tel:+917466842956",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "linkedin.com/in/deepaksinghrautela",
      href: "https://linkedin.com/in/deepaksinghrautela",
    },
    {
      icon: "💻",
      label: "GitHub",
      value: "github.com/DeepakSinghRautela",
      href: "https://github.com/DeepakSinghRautela",
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#0f172a] text-white px-4 py-12 mt-16 sm:px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-yellow-300">
          Contact Me
        </h2>

        <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
          Have a project in mind or looking for a frontend developer?
          Feel free to reach out for collaborations, opportunities,
          or just to say hello!
        </p>

        <div className="bg-slate-800 p-5 sm:p-8 rounded-2xl shadow-xl border border-slate-700 text-left">
          <h3 className="text-xl font-semibold text-yellow-300 mb-6">
            Get in Touch
          </h3>

          <div className="space-y-5">
            {contacts.map((contact) => (
              <div
                key={contact.label}
                className="flex items-start gap-4"
              >
                <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-lg bg-slate-700 text-xl">
                  {contact.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-sm text-slate-400 mb-1">
                    {contact.label}
                  </p>

                  <a
                    href={contact.href}
                    target={
                      contact.label === "LinkedIn" ||
                      contact.label === "GitHub"
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      contact.label === "LinkedIn" ||
                      contact.label === "GitHub"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-blue-400 hover:text-yellow-300 transition-colors duration-200 break-all"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="mailto:deepaksinghrautela15@gmail.com"
          className="inline-block mt-8 px-7 py-3 bg-yellow-300 text-slate-900 font-semibold rounded-lg hover:bg-yellow-200 transition-colors duration-200"
        >
          Send Me an Email
        </a>

        <p className="mt-8 text-xs sm:text-sm text-slate-400">
          Thank you for visiting my portfolio. I look forward to connecting
          with you!
        </p>
      </div>
    </section>
  );
}

export default Contact;
