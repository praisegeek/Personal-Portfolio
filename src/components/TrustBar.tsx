import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 border-t border-zinc-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 mb-8 sm:mb-10 text-left">
          TECHNOLOGIES I USE
        </p>

        {/* Fading list container */}
        <div className="relative w-full overflow-hidden">
          {/* Left edge fade into background */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />

          {/* Right edge fade into background */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Horizontal scrollable / flex row of technologies */}
          <div className="flex items-center gap-10 sm:gap-14 overflow-x-auto no-scrollbar py-2 px-6 sm:px-10 opacity-75 hover:opacity-100 transition-opacity">
            {/* React */}
            <div className="flex items-center gap-2 text-zinc-700 font-semibold text-lg select-none shrink-0 hover:text-zinc-950 transition-colors">
              <svg className="w-6 h-6 fill-none stroke-current" viewBox="-11.5 -10.23174 23 20.46348">
                <circle cx="0" cy="0" r="2.05" fill="currentColor" stroke="none" />
                <g strokeWidth="1">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
              <span className="font-semibold tracking-tight text-xl">React</span>
            </div>

            {/* Python */}
            <div className="flex items-center gap-2 text-zinc-700 font-semibold text-lg select-none shrink-0 hover:text-zinc-950 transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.006 2.753h5.814v.826H3.896S0 5.767 0 11.897c0 6.132 3.404 5.925 3.404 5.925h2.033v-2.852s-.11-3.404 3.35-3.404h5.758s3.242.053 3.242-3.188V2.656S18.258 0 11.914 0zM8.738 1.83a1.008 1.008 0 1 1 0 2.016 1.008 1.008 0 0 1 0-2.016zm3.348 22.17c6.094 0 5.714-2.656 5.714-2.656l-.006-2.753H11.98v-.826h8.124s3.896.468 3.896-5.662c0-6.132-3.404-5.925-3.404-5.925h-2.033v2.852s.11 3.404-3.35 3.404H9.455s-3.242-.053-3.242 3.188v5.727S5.742 24 12.086 24zm3.176-1.83a1.008 1.008 0 1 1 0-2.016 1.008 1.008 0 0 1 0 2.016z" />
              </svg>
              <span className="font-semibold tracking-tight text-xl">Python</span>
            </div>

            {/* Vercel */}
            <div className="flex items-center gap-2 text-zinc-700 font-semibold text-lg select-none shrink-0 hover:text-zinc-950 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 22.525H0l12-21.05 12 21.05z" />
              </svg>
              <span className="font-semibold tracking-tight text-xl">Vercel</span>
            </div>

            {/* Cloudflare */}
            <div className="flex items-center gap-2 text-zinc-700 font-semibold text-lg select-none shrink-0 hover:text-zinc-950 transition-colors">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M18.39 10.1a5.61 5.61 0 0 0-5.49-4.5 5.6 5.6 0 0 0-5.18 3.46 4.3 4.3 0 0 0-3.42 4.22c0 2.37 1.93 4.3 4.3 4.3h10.4a4.4 4.4 0 0 0 4.4-4.4c0-2.22-1.64-4.04-3.81-4.36l-1.2-.72z" />
              </svg>
              <span className="font-semibold tracking-tight text-xl">Cloudflare</span>
            </div>

            {/* Figma */}
            <div className="flex items-center gap-2 text-zinc-700 font-semibold text-lg select-none shrink-0 hover:text-zinc-950 transition-colors">
              <svg className="w-4 h-6 fill-current" viewBox="0 0 38 57">
                <path d="M19 28.5A9.5 9.5 0 0 1 28.5 19H38v9.5A9.5 9.5 0 0 1 28.5 38H19v-9.5z" />
                <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5A9.5 9.5 0 0 1 9.5 57 9.5 9.5 0 0 1 0 47.5z" />
                <path d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" />
                <path d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
                <path d="M19 0h9.5A9.5 9.5 0 0 1 38 9.5 9.5 9.5 0 0 1 28.5 19H19V0z" />
              </svg>
              <span className="font-semibold tracking-tight text-xl">Figma</span>
            </div>

            {/* Stripe */}
            <div className="flex items-center gap-1.5 text-zinc-700 font-semibold tracking-tight text-xl select-none shrink-0 hover:text-zinc-950 transition-colors">
              <span className="font-bold text-2xl tracking-tighter">stripe</span>
            </div>

            {/* Notion */}
            <div className="flex items-center gap-2 text-zinc-700 font-semibold text-lg select-none shrink-0 hover:text-zinc-950 transition-colors">
              <span className="w-5 h-5 border-2 border-zinc-700 rounded flex items-center justify-center text-xs font-serif font-black">
                N
              </span>
              <span className="font-semibold tracking-tight text-xl">Notion</span>
            </div>

            {/* Dropbox */}
            <div className="flex items-center gap-2 text-zinc-700 font-semibold text-lg select-none shrink-0 hover:text-zinc-950 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M6 2L0 6.5 6 11 12 6.5 6 2zm12 0l-6 4.5 6 4.5 6-4.5L18 2zM0 15.5l6 4.5 6-4.5-6-4.5L0 15.5zm18-4.5l-6 4.5 6 4.5 6-4.5-6-4.5zm-6 5.8l-6 4.2 6 4.5 6-4.5-6-4.2z" />
              </svg>
              <span className="font-semibold tracking-tight text-xl">Dropbox</span>
            </div>

            {/* Shopify */}
            <div className="flex items-center gap-2 text-zinc-700 font-semibold text-lg select-none shrink-0 hover:text-zinc-950 transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.34 7.02l-1.92-.56c-.05-.01-.09 0-.12.03-.03.02-.05.06-.05.1l-.32 1.48c-.01.06-.06.1-.12.1-.06 0-.11-.04-.12-.1L15.3 1.95c-.04-.14-.15-.24-.29-.27-.04-.01-.08-.01-.12 0l-2.6 1.48-.38-.79c-.06-.13-.19-.21-.33-.21s-.27.08-.33.21L9.67 5.75l-4.57.86c-.16.03-.28.16-.3.32-.01.07.01.14.05.2l.98 1.41-1.39 12.3c-.02.16.04.32.16.42.12.11.28.16.44.15l13.26-.95c.16-.01.3-.12.36-.27l2.84-12.27c.04-.17-.04-.34-.19-.41l-2-1zm-4.73 1.39l-1.33-4.2 1.99-1.13 1.46 5.12-2.12.21z" />
              </svg>
              <span className="font-semibold tracking-tight text-xl">Shopify</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
