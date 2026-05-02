import { PROJECTS } from "../constants";
import { Reveal } from "./Reveal";

export const Projects = () => {
  return (
    <section id="project" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[#0f1111]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-16 font-serif">Selected Work</h2>
        </Reveal>

        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          {PROJECTS.map((project, index) => (
            <Reveal key={index} delay={0.1}>
              <div
                className={`flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 w-full">
                  <iframe
                    title={project.title}
                    src={project.videoSrc}
                    className="w-full aspect-video rounded-lg sm:rounded-xl"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-serif">{project.title}</h3>
                  <p className="text-[#a0a0a0] text-sm sm:text-base leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};