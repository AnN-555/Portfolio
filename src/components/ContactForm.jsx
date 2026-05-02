import { Reveal } from "./Reveal";
import { Send } from "lucide-react";

export const ContactForm = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-16 bg-[#141616]">
      <div className="w-full max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif text-center">Get in Touch</h2>
          <p className="text-[#a0a0a0] text-lg md:text-xl mb-12 md:mb-16 leading-relaxed text-center">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass p-10 md:p-14 lg:p-16 rounded-3xl w-full text-center">
            <form action="https://formspree.io/f/mkonenbl" method="POST" className="flex flex-col gap-8">
              <div className="flex flex-col gap-3 text-center w-full">
                <label className="text-sm tracking-wider text-[#a0a0a0] uppercase">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-5 md:p-6 text-lg text-white focus:outline-none focus:border-accent transition-colors text-center"
                  placeholder="name@example.com"
                />
              </div>

              <div className="flex flex-col gap-3 text-center w-full">
                <label className="text-sm tracking-wider text-[#a0a0a0] uppercase">Your Message</label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  className="w-full bg-white/5 border-2 border-white/10 rounded-xl p-5 md:p-6 text-lg text-white focus:outline-none focus:border-accent transition-colors resize-none text-center"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-3 bg-accent text-black font-bold py-5 px-10 rounded-xl hover:bg-[#e5c150] transition-all duration-300 text-lg"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};