import React from 'react';
import { Linkedin, Twitter, Globe, Github } from 'lucide-react';
import { SITE_LINKS } from '../config/site';

interface FooterProps {
  onOpenContact?: () => void;
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        {/* Top Tier: Brand, Links, Socials */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-zinc-100">
          {/* Logo Mark */}
          <a
            href="#"
            className="flex items-baseline text-3xl font-serif font-bold text-zinc-900 tracking-tight"
            aria-label="Back to top"
          >
            <span>P</span>
            <span className="text-[#E87A6E] text-4xl leading-none inline-block ml-0.5">
              .
            </span>
          </a>

          {/* Clean Navigation Links */}
          <nav className="flex flex-wrap items-center gap-8 sm:gap-10 text-[15px] font-medium text-zinc-600">
            <a href="#about" className="hover:text-zinc-950 transition-colors">
              About
            </a>
            <a href="#work" className="hover:text-zinc-950 transition-colors">
              Work
            </a>
            <a
              href={SITE_LINKS.mailto}
              className="hover:text-zinc-950 transition-colors cursor-pointer"
            >
              Contact
            </a>
            <a
              href={SITE_LINKS.dropboxResume}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="hover:text-zinc-950 transition-colors cursor-pointer"
            >
              Resume
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-zinc-700">
            <a
              href={SITE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1 hover:text-zinc-950 hover:scale-110 transition-all"
            >
              <Linkedin className="w-4 h-4 stroke-[1.8]" />
            </a>
            <a
              href={SITE_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X Profile"
              className="p-1 hover:text-zinc-950 hover:scale-110 transition-all"
            >
              <Twitter className="w-4 h-4 stroke-[1.8]" />
            </a>
            <a
              href={SITE_LINKS.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Personal Website"
              className="p-1 hover:text-zinc-950 hover:scale-110 transition-all"
            >
              <Globe className="w-4 h-4 stroke-[1.8]" />
            </a>
            <a
              href={SITE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1 hover:text-zinc-950 hover:scale-110 transition-all"
            >
              <Github className="w-4 h-4 stroke-[1.8]" />
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright and subtle heart note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Pamela Ene. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed & developed with</span>
            <span className="text-red-500 inline-block">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

