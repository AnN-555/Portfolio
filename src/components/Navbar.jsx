import { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { NAV_LINKS } from "../constants";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 bg-[#0f1111]/90 backdrop-blur-md z-[1000] border-b border-white/5">
      <a href="#about" className="text-lg sm:text-xl font-bold tracking-wider text-accent">
        MA
      </a>

      <ul className="hidden md:flex gap-8 lg:gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs sm:text-sm font-medium tracking-wider text-[#a0a0a0] hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white"
        aria-label="Toggle Menu"
      >
        {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      <div
        className={`fixed inset-0 bg-[#0f1111]/98 backdrop-blur-lg flex flex-col items-center justify-center z-[1001] transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2"
          aria-label="Close Menu"
        >
          <XIcon size={28} />
        </button>
        <ul className="flex flex-col items-center gap-6 sm:gap-8">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl sm:text-3xl font-serif text-[#a0a0a0] hover:text-white transition-colors duration-300"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};