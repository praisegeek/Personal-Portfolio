import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';
import { SITE_LINKS } from '../config/site';

interface CtaBannerProps {
  onOpenContact?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = () => {
  return (
    <section className="pb-24 sm:pb-32 lg:pb-40">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="w-full bg-[#FDEEEA] rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-all duration-300">
          {/* Copy */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 mb-3">
              LET'S WORK TOGETHER
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-zinc-900 leading-tight mb-2.5">
              Have a project in mind?
            </h2>
            <p className="text-[15px] sm:text-base text-zinc-600 font-normal">
              I'm currently open to freelance projects and full-time opportunities.
            </p>
          </div>

          {/* Action */}
          <div className="shrink-0">
            <Button
              variant="primary"
              size="lg"
              as="a"
              href={SITE_LINKS.mailto}
              icon={<ArrowUpRight className="w-4 h-4 ml-0.5" />}
              className="px-7 py-3.5 text-[15px]"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

