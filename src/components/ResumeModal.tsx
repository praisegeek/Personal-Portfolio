import React, { useState } from 'react';
import { X, Download, Copy, Check, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Button } from './ui/Button';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [downloaded, setDownloaded] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Create text blob download as clean readable resume
    const resumeText = `PAMELA ENE
UI/UX Product Designer & Frontend Developer
Website: https://pamelaene.com | Email: hello@pamelaene.com

EXPERIENCE
- Senior Product Designer & Design Engineer (2023 - Present)
  Led end-to-end design and frontend development for high-growth tech platforms.
  Built unified design systems, streamlined user onboarding, improved retention by 34%.

- Lead UX/UI Designer, Nova Analytics (2021 - 2023)
  Designed comprehensive SaaS reporting platform and multi-tier analytics console.

- Frontend Engineer & UI Specialist, Studio Forma (2019 - 2021)
  Crafted accessible design token systems, responsive web applications, and interactive prototypes.

EDUCATION
- B.S. in Human-Computer Interaction & Computer Science

SKILLS
Product Design, UI/UX, Design Systems, React, TypeScript, Tailwind CSS, Next.js, Figma, Prototyping.`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Pamela_Ene_Resume.txt';
    link.click();
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloaded(false), 2500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@pamelaene.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-900">
              Pamela Ene
            </h2>
            <p className="text-sm text-zinc-500 mt-0.5">
              UI/UX Product Designer & Frontend Developer
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              icon={downloaded ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Download className="w-3.5 h-3.5" />}
            >
              {downloaded ? 'Downloaded' : 'Download CV'}
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8 text-sm text-zinc-600">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 text-zinc-900 font-semibold text-xs uppercase tracking-wider mb-4">
              <Briefcase className="w-4 h-4 text-[#E87A6E]" />
              <span>Experience</span>
            </div>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-semibold text-zinc-900 text-[15px]">
                    Senior Product Designer & Design Engineer
                  </h4>
                  <span className="text-xs text-zinc-400">2023 — Present</span>
                </div>
                <p className="text-zinc-500 text-xs mb-1.5">Independent Consultant & Studio Lead</p>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Leading end-to-end UX architecture and design systems for funded technology companies.
                  Bridging product vision, Figma foundations, and pixel-perfect React/TypeScript implementation.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-semibold text-zinc-900 text-[15px]">
                    Lead UX/UI Designer
                  </h4>
                  <span className="text-xs text-zinc-400">2021 — 2023</span>
                </div>
                <p className="text-zinc-500 text-xs mb-1.5">Nova Analytics Platform</p>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Architected user experience for core reporting modules, reducing task completion time by 42%.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h4 className="font-semibold text-zinc-900 text-[15px]">
                    UX Engineer & Designer
                  </h4>
                  <span className="text-xs text-zinc-400">2019 — 2021</span>
                </div>
                <p className="text-zinc-500 text-xs mb-1.5">Creative Digital Agency</p>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Crafted high-fidelity web applications, consumer prototypes, and accessible digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Core Skills & Tools */}
          <div>
            <div className="flex items-center gap-2 text-zinc-900 font-semibold text-xs uppercase tracking-wider mb-3">
              <Code className="w-4 h-4 text-[#E87A6E]" />
              <span>Skills & Competencies</span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {[
                'Product Design',
                'Design Systems',
                'Figma & FigJam',
                'User Research',
                'Interaction Design',
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Next.js',
                'Micro-interactions',
                'Accessibility (WCAG AA)',
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 text-zinc-900 font-semibold text-xs uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4 text-[#E87A6E]" />
              <span>Education</span>
            </div>
            <div className="flex justify-between items-baseline">
              <div>
                <p className="font-semibold text-zinc-900 text-sm">
                  B.S. in Human-Computer Interaction & Computer Science
                </p>
                <p className="text-xs text-zinc-500">First Class Honors</p>
              </div>
              <span className="text-xs text-zinc-400">2015 — 2019</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCopy}
            icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
          >
            {copied ? 'Email copied' : 'hello@pamelaene.com'}
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              onClose();
              onOpenContact();
            }}
          >
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};
