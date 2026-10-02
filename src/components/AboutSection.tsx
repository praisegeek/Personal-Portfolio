import React from 'react';
import { ArrowUpRight, User, Code2, Box } from 'lucide-react';
import { Button } from './ui/Button';

interface AboutSectionProps {
  onOpenAboutDetails: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenAboutDetails }) => {
  return (
    <section id="about" className="section-spacing scroll-mt-20 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          {/* Left Column: Heading, Bio & Button */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-start">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 mb-4">
              ABOUT
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-zinc-900 leading-[1.18] mb-8">
              Design-minded.
              <br />
              Code-curious.
              <br />
              <span className="text-[#E87A6E]">People-focused.</span>
            </h2>

            <p className="text-[15px] sm:text-base text-zinc-500 font-normal leading-relaxed max-w-lg mb-9">
              I'm a UI/UX Product Designer and Frontend Developer with a passion
              for creating clean, intuitive and accessible digital experiences. I
              love turning complex problems into simple, beautiful solutions.
            </p>

            <div>
              <Button
                variant="primary"
                size="md"
                onClick={onOpenAboutDetails}
                icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
                className="px-6 py-3"
              >
                More about me
              </Button>
            </div>
          </div>

          {/* Right Column: 3 Pillars with Circular Soft Pastel Icons */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-8 sm:space-y-10 lg:pl-6">
            {/* Pillar 1: User-Centered Design */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#FDECE8] flex items-center justify-center shrink-0 text-zinc-800">
                <User className="w-5 h-5 stroke-[1.6]" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-base sm:text-lg font-medium text-zinc-900 mb-1">
                  User-Centered Design
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  I design with empathy, always keeping real people in mind.
                </p>
              </div>
            </div>

            {/* Pillar 2: Modern Frontend */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#F4F4F6] flex items-center justify-center shrink-0 text-zinc-800">
                <Code2 className="w-5 h-5 stroke-[1.6]" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-base sm:text-lg font-medium text-zinc-900 mb-1">
                  Modern Frontend
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  I build scalable, pixel-perfect interfaces with modern tools.
                </p>
              </div>
            </div>

            {/* Pillar 3: Product Thinking */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-full bg-[#FDECE8] flex items-center justify-center shrink-0 text-zinc-800">
                <Box className="w-5 h-5 stroke-[1.6]" />
              </div>
              <div className="pt-0.5">
                <h3 className="text-base sm:text-lg font-medium text-zinc-900 mb-1">
                  Product Thinking
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  I bridge design and development to create meaningful products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
