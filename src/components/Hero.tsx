import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';
import { SITE_LINKS } from '../config/site';

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 mb-5">
              HI, I'M PAMELA
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-normal tracking-tight text-zinc-900 leading-[1.12] mb-6">
              I design products
              <br />
              that feel <span className="text-[#E87A6E]">human.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-500 font-normal leading-relaxed max-w-xl mb-10">
              A UI/UX Product Designer and Frontend Developer creating thoughtful
              digital experiences for people and impact-driven brands.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <Button
                variant="primary"
                size="lg"
                as="a"
                href="#work"
                icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
                className="px-7 py-3.5 text-[15px]"
              >
                View Work
              </Button>

              <a
                href={SITE_LINKS.mailto}
                className="text-[15px] font-medium text-zinc-700 hover:text-zinc-950 transition-colors duration-200 cursor-pointer underline-offset-4 hover:underline"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right Column: Hero Graphic matching exact reference */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center select-none">
            {/* Soft blush radial halo */}
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-[#FDEEEA] via-[#FDF2F0] to-[#FFF5F2] rounded-full blur-2xl opacity-80 pointer-events-none" />

            {/* Spark bursts at top right */}
            <div className="absolute top-2 right-4 sm:right-8 text-zinc-800 z-20">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="24" y1="4" x2="28" y2="0" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />
                <line x1="28" y1="10" x2="34" y2="10" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />
                <line x1="22" y1="16" x2="27" y2="20" stroke="#18181B" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Looping vector ribbon */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
              viewBox="0 0 460 380"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 60 260 C 20 280 40 330 110 330 C 220 330 260 220 360 210 C 440 200 450 280 390 310"
                stroke="#D4D4D8"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              <path
                d="M 330 140 C 200 120 120 230 190 280 C 260 330 390 270 340 180"
                stroke="#E4E4E7"
                strokeWidth="1.25"
                strokeDasharray="3 3"
              />
              {/* Dark pin node 1 */}
              <circle cx="106" cy="208" r="3.5" fill="#18181B" />
              {/* Dark pin node 2 */}
              <circle cx="274" cy="274" r="3.5" fill="#18181B" />
            </svg>

            {/* Composition of floating UI mockups */}
            <div className="relative w-full max-w-[420px] aspect-[4/3.5] flex items-center justify-center">
              {/* Main elevated browser card */}
              <div className="w-[84%] bg-white rounded-2xl p-5 shadow-[0_20px_45px_-12px_rgba(232,122,110,0.18),0_8px_20px_-6px_rgba(0,0,0,0.06)] border border-zinc-100/90 relative z-10 transition-transform duration-500 hover:-translate-y-1">
                {/* Browser 3 dots */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F5C2B9]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F5C2B9]/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F5C2B9]/40" />
                </div>

                {/* Framed Graphic inside Card */}
                <div className="w-full h-36 sm:h-44 rounded-xl bg-gradient-to-b from-[#FCEAE6] to-[#FDF4F1] flex items-center justify-center relative overflow-hidden p-4">
                  {/* Subtle sun & landscape shapes */}
                  <div className="w-14 h-14 rounded-full bg-[#F6BEB5]/70 absolute top-4 right-8 blur-[1px]" />
                  <div className="w-36 h-28 rounded-3xl bg-[#F0A89C]/40 absolute -bottom-6 left-2 transform rotate-6" />
                  <div className="w-48 h-32 rounded-3xl bg-[#E87A6E]/30 absolute -bottom-8 right-0 transform -rotate-12" />

                  {/* Minimal card silhouette */}
                  <div className="relative z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/90 shadow-sm flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#E87A6E]" />
                    <span className="text-[11px] font-medium text-zinc-600">Product Experience</span>
                  </div>
                </div>
              </div>

              {/* Smaller Card Overlay on the right */}
              <div className="absolute -right-2 top-16 sm:top-14 w-32 sm:w-36 bg-white rounded-xl p-3 shadow-lg border border-zinc-100 z-20 transition-transform duration-500 hover:-translate-y-1.5">
                <div className="w-10 h-10 rounded-lg bg-[#FDECE8] flex items-center justify-center mb-2.5">
                  <div className="w-5 h-5 rounded-md bg-[#E87A6E]/30 border border-[#E87A6E]" />
                </div>
                <div className="h-2 w-16 bg-zinc-200 rounded-full mb-1.5" />
                <div className="h-2 w-20 bg-zinc-100 rounded-full" />
              </div>

              {/* Text Card Overlay Below on left */}
              <div className="absolute left-0 -bottom-2 sm:-bottom-4 w-44 sm:w-52 bg-white rounded-xl p-4 shadow-xl border border-zinc-100 z-20 transition-transform duration-500 hover:-translate-y-1">
                <div className="h-3 w-16 bg-[#F6BEB5] rounded-full mb-2.5" />
                <div className="h-2 w-full bg-zinc-100 rounded-full mb-2" />
                <div className="h-2 w-24 bg-zinc-100 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
