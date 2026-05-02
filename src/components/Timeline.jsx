import { TIMELINE_DATA } from "../constants";
import { Reveal } from "./Reveal";

export const Timeline = () => {
  return (
    <div className="relative pl-6 sm:pl-8 border-l border-white/20 my-8 sm:my-10">
      {TIMELINE_DATA.map((item, index) => (
        <Reveal key={index} delay={index * 0.1}>
          <div className="relative mb-8 sm:mb-10 last:mb-0 pb-2">
            <div className="absolute -left-[8px] sm:-left-[9px] top-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent rounded-full" />

            <div className="flex flex-col gap-1">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base sm:text-lg font-serif text-accent hover:underline underline-offset-4"
                >
                  {item.year}
                </a>
              ) : (
                <span className="text-base sm:text-lg font-serif text-accent">{item.year}</span>
              )}

              <h3 className="text-base sm:text-lg text-white">{item.title}</h3>
              {item.institution && (
                <p className="text-xs sm:text-sm text-[#a0a0a0]">{item.institution}</p>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};