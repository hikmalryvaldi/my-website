function Contact() {
  const FORM_ENDPOINT = 'https://formspree.io/f/your_form_id';

  return (
    <section id="contact" className="mb-16 mt-20 scroll-mt-24 lg:mb-36">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-200">Send Me a Message</h2>
      </div>

      <form
        action={FORM_ENDPOINT}
        method="POST"
        className="mt-10 max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-slate-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Hikmal"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700
                         text-slate-200 placeholder-slate-500
                         focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="mal@example.com"
              required
              className="w-full px-4 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700
                         text-slate-200 placeholder-slate-500
                         focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-slate-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subjectnya Apa bro"
            required
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700
                       text-slate-200 placeholder-slate-500
                       focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-slate-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Sok yapping ..."
            required
            className="w-full px-4 py-2.5 rounded-lg bg-slate-800/60 border border-slate-700
                       text-slate-200 placeholder-slate-500
                       focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
          ></textarea>
        </div>

        <div className="mt-8 text-center">
          <button
            type="submit"
            className="w-full px-8 py-3 rounded-lg bg-slate-200 text-slate-900
                       font-bold tracking-wide
                       transition-colors duration-300
                       hover:bg-sky-400 hover:text-white"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
