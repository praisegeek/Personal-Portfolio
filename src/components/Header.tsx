import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_LINKS } from '../config/site';

interface HeaderProps {
  onOpenContact?: () => void;
  onOpenResume?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md transition-all">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 h-24 flex items-center justify-between">
        {/* Brand Mark */}
        <a
          href="#"
          className="group flex items-baseline text-3xl font-serif font-bold text-zinc-900 tracking-tight transition-transform duration-200 hover:scale-105"
          aria-label="Pamela Ene Homepage"
        >
          <span>P</span>
          <span className="text-[#E87A6E] text-4xl leading-none inline-block ml-0.5 group-hover:scale-125 transition-transform duration-300">
            .
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9 text-[15px] font-medium text-zinc-600">
          <a
            href="#about"
            className="hover:text-zinc-950 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#work"
            className="hover:text-zinc-950 transition-colors duration-200"
          >
            Work
          </a>
          <a
            href={SITE_LINKS.mailto}
            className="hover:text-zinc-950 transition-colors duration-200 cursor-pointer"
          >
            Contact
          </a>
          <a
            href={SITE_LINKS.dropboxResume}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="hover:text-zinc-950 transition-colors duration-200 cursor-pointer"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:text-zinc-900 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-100 bg-white px-6 pt-2 pb-6 space-y-4 text-base font-medium shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-700 hover:text-zinc-900"
          >
            About
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-700 hover:text-zinc-900"
          >
            Work
          </a>
          <a
            href={SITE_LINKS.mailto}
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-700 hover:text-zinc-900 cursor-pointer"
          >
            Contact
          </a>
          <a
            href={SITE_LINKS.dropboxResume}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-700 hover:text-zinc-900 cursor-pointer"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};
