import React from 'react';
import { X, Sparkles, Heart, Compass, Terminal, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/Button';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/40 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-zinc-100 animate-in zoom-in-95 duration-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 mb-2">
            BEHIND THE WORK
          </p>
          <h2 className="text-3xl font-normal tracking-tight text-zinc-900 mb-2">
            About Pamela Ene
          </h2>
          <p className="text-base text-zinc-500 font-normal">
            Designer, frontend builder, and advocate for human-centered digital interfaces.
          </p>
        </div>

        {/* Body */}
        <div className="space-y-6 text-[15px] text-zinc-600 leading-relaxed">
          <p>
            With over 6 years of experience working at the intersection of design systems and modern web development, I believe software is at its best when it feels effortless, accessible, and warm.
          </p>

          <p>
            Too much modern software feels mechanical and bloated. My focus is on intentional simplicity: distilling complex requirements into clarity, building design systems that scale sustainably, and writing code that performs reliably.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-[#FDEEEA] border border-[#FADBD4]">
              <div className="flex items-center gap-2 text-zinc-900 font-medium text-sm mb-1.5">
                <Heart className="w-4 h-4 text-[#E87A6E]" />
                <span>Design Philosophy</span>
              </div>
              <p className="text-xs text-zinc-600 leading-normal">
                Focus on the human outcome. Ruthlessly eliminate superfluous noise and prioritize empathetic clarity.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F4F4F6] border border-zinc-200/70">
              <div className="flex items-center gap-2 text-zinc-900 font-medium text-sm mb-1.5">
                <Terminal className="w-4 h-4 text-zinc-700" />
                <span>Code Craft</span>
              </div>
              <p className="text-xs text-zinc-600 leading-normal">
                Pixel-accurate implementation using React, TypeScript, and modern component architectures with strict performance discipline.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-8 mt-6 border-t border-zinc-100 flex items-center justify-between">
          <span className="text-xs text-zinc-400">Available for select projects worldwide</span>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Start a Conversation
          </Button>
        </div>
      </div>
    </div>
  );
};
