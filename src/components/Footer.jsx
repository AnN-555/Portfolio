import { Phone as PhoneIcon, Mail as MailIcon } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { Reveal } from "./Reveal";

export const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#0f1111]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
          <Reveal>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-serif mb-3 sm:mb-4">Minh An</h3>
              <p className="text-[#a0a0a0] text-sm leading-relaxed">
                Journey from Medicine to Technology. Combining analytical thinking with creative problem-solving.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h3 className="text-xs sm:text-sm text-accent tracking-wider uppercase mb-3 sm:mb-4">Contact</h3>
              <div className="flex flex-col gap-2 sm:gap-3 text-[#a0a0a0] text-sm">
                <p>{CONTACT_INFO.address}</p>
                <a href={CONTACT_INFO.phone} className="hover:text-white transition-colors flex items-center gap-2">
                  <PhoneIcon size={14} /> +84 981 121 857
                </a>
                <a href={CONTACT_INFO.email} className="hover:text-white transition-colors flex items-center gap-2">
                  <MailIcon size={14} /> lma75111@gmail.com
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-xs sm:text-sm text-accent tracking-wider uppercase mb-3 sm:mb-4">Connect</h3>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0a0] hover:text-white transition-colors text-sm inline-block"
              >
                Facebook
              </a>
            </div>
          </Reveal>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 text-center">
          <p className="text-[#a0a0a0] text-xs sm:text-sm">© 2025 Minh An</p>
        </div>
      </div>
    </footer>
  );
};