import React from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, Clock, Award } from 'lucide-react';
import { ProjectData } from './FeaturedWork';
import { Button } from './ui/Button';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/40 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-zinc-100 animate-in zoom-in-95 duration-200 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
            <span>CASE STUDY</span>
            <span>·</span>
            <span>{project.timeline}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-zinc-900 mb-2">
            {project.title}
          </h2>

          <p className="text-lg text-zinc-500 font-normal">
            {project.subtitle}
          </p>
        </div>

        {/* Key Metrics Row */}
        <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-100 mb-8">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <span className="text-xl sm:text-2xl font-bold text-zinc-900 block tracking-tight">
                {metric.value}
              </span>
              <span className="text-xs text-zinc-500 font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative / Problem & Solution */}
        <div className="space-y-6 text-[15px] text-zinc-600 leading-relaxed mb-8">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 mb-2">
              Overview & Vision
            </h4>
            <p>{project.fullOverview}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-900 mb-2">
              Key Deliverables & Responsibilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-zinc-700 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#E87A6E] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
              className="px-4"
            >
              Close
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              icon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Discuss Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
