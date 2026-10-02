import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarColor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '“Pamela has an incredible ability to turn complex ideas into simple, beautiful experiences. She’s a true partner and a joy to work with.”',
    author: 'Sarah Chen',
    role: 'Product Manager',
    company: 'Stripe',
    avatarColor: 'bg-[#F4F4F6]',
  },
  {
    quote:
      '“Pamela bridged the gap between our design system and frontend engineering with effortless poise. The speed, craft, and attention to micro-interactions blew our team away.”',
    author: 'Alex Rivera',
    role: 'Staff Product Designer',
    company: 'Spotify',
    avatarColor: 'bg-[#FDECE8]',
  },
  {
    quote:
      '“Working with Pamela was transformative for our core workflow experience. She designs with genuine empathy and codes with razor-sharp discipline.”',
    author: 'Elena Rostova',
    role: 'VP of Product',
    company: 'Notion',
    avatarColor: 'bg-[#EAF3F5]',
  },
];

export const KindWords: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="section-spacing border-t border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 mb-8 sm:mb-10">
          KIND WORDS
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Quote */}
          <div className="lg:col-span-8">
            <blockquote className="text-2xl sm:text-3xl lg:text-[34px] font-normal tracking-tight text-zinc-900 leading-[1.3] min-h-[120px] transition-opacity duration-300">
              {current.quote}
            </blockquote>
          </div>

          {/* Right Column: Author Card & Carousel Controls */}
          <div className="lg:col-span-4 flex flex-col justify-between sm:items-start lg:items-end space-y-8">
            {/* Author Profile */}
            <div className="flex items-center gap-3.5">
              {/* Circular Avatar */}
              <div
                className={`w-12 h-12 rounded-full ${current.avatarColor} border border-zinc-200/60 flex items-center justify-center text-zinc-600 font-semibold text-sm select-none shadow-sm`}
              >
                {current.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>

              <div>
                <p className="text-[15px] font-semibold text-zinc-900 leading-tight">
                  {current.author}
                </p>
                <p className="text-xs text-zinc-500 mt-0.5">
                  {current.role}, {current.company}
                </p>
              </div>
            </div>

            {/* Navigation Controls matching the reference image */}
            <div className="flex items-center gap-4 select-none">
              {/* Previous button */}
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-400 hover:bg-zinc-50 transition-all cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              {/* Indicator Dots */}
              <div className="flex items-center gap-1.5 px-1">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? 'w-5 bg-[#E87A6E]'
                        : 'w-2 bg-zinc-200 hover:bg-zinc-300'
                    }`}
                  />
                ))}
              </div>

              {/* Next button */}
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-9 h-9 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:border-zinc-400 hover:bg-zinc-50 transition-all cursor-pointer active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
