import { Reveal } from "./Reveal";
import { Timeline } from "./Timeline";
import { Code2 } from "lucide-react";

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 sm:py-28 md:py-32 px-4 sm:px-6 bg-[#141616]">
      <div className="max-w-4xl w-full">
        <Reveal>
          <p className="text-accent tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm uppercase mb-4 sm:mb-6">Welcome</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
            Minh An
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="text-lg sm:text-xl md:text-2xl text-[#a0a0a0] font-serif italic mb-10 sm:mb-16">
            From Medicine to Technology
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <Timeline />
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-10 sm:mt-16">
            <p className="text-base sm:text-lg text-[#a0a0a0] mb-4 sm:mb-6 leading-relaxed">
              Sharpening problem-solving skills and learning new languages through Codingame.
            </p>
            <a
              href="https://www.codingame.com/profile/5a7ea1271aa1baf53ff992632107dd510604386"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 text-accent hover:text-white transition-colors duration-300"
            >
              <Code2 size={18} className="sm:w-5 sm:h-5" />
              <span className="underline underline-offset-4 text-sm sm:text-base">View Codingame Profile</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};