import React, { useState } from 'react';
import { ArrowUpRight, Search, Play, Heart, ChevronRight, TrendingUp } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullOverview: string;
  role: string[];
  deliverables: string[];
  tags: string[];
  timeline: string;
  metrics: { label: string; value: string }[];
  accentColor: string;
  bgClass: string;
  mockupType: 'lume' | 'nova' | 'roam' | 'mindful' | 'aura' | 'pulse';
  websiteUrl?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'lume',
    title: 'Lume',
    subtitle: 'A modern reading app for curious minds.',
    description: 'A modern reading app for curious minds.',
    fullOverview:
      'Lume redefines the digital reading experience with personalized editorial recommendations, distraction-free reading modes, and an intuitive library organization system designed for high retention and joyful discovery.',
    role: ['Product Design', 'UI/UX', 'Frontend'],
    deliverables: ['Mobile App (iOS & Android)', 'Design System', 'Interactive Prototype', 'Web Landing Page'],
    tags: ['Product Design', 'UI/UX', 'Frontend'],
    timeline: '4 Months · 2025',
    metrics: [
      { label: 'Daily Active Readers', value: '42K+' },
      { label: 'Reading Session Length', value: '+34%' },
      { label: 'App Store Rating', value: '4.9 ★' },
    ],
    accentColor: '#E87A6E',
    bgClass: 'bg-[#FDF2F0]',
    mockupType: 'lume',
    websiteUrl: '#',
  },
  {
    id: 'nova',
    title: 'Nova',
    subtitle: 'A unified dashboard for growing businesses.',
    description: 'A unified dashboard for growing businesses.',
    fullOverview:
      'Nova aggregates multi-channel revenue analytics, subscriber retention metrics, and team operations into a calm, coherent dashboard that eliminates cognitive overhead and speeds up executive decision-making.',
    role: ['Product Design', 'Design System', 'Frontend'],
    deliverables: ['Web Dashboard App', 'Component Library', 'Interactive Charts', 'Dark/Light Modes'],
    tags: ['Product Design', 'Design System', 'Frontend'],
    timeline: '6 Months · 2025',
    metrics: [
      { label: 'ARR Managed', value: '$84M' },
      { label: 'Decision Velocity', value: '2.4x' },
      { label: 'NPS Score', value: '+68' },
    ],
    accentColor: '#6366F1',
    bgClass: 'bg-[#F4F4F6]',
    mockupType: 'nova',
    websiteUrl: '#',
  },
  {
    id: 'roam',
    title: 'Roam',
    subtitle: 'A travel experience platform for modern explorers.',
    description: 'A travel experience platform for modern explorers.',
    fullOverview:
      'Roam connects conscious modern travelers with curated, off-the-beaten-path stays and cultural immersion guides, featuring offline maps, collaborative trip planning, and local artisan experiences.',
    role: ['UI/UX', 'Frontend', 'Interaction Design'],
    deliverables: ['Mobile App', 'Offline First Architecture', 'Interactive Booking Flow', 'Style Guide'],
    tags: ['UI/UX', 'Frontend', 'Interaction Design'],
    timeline: '3 Months · 2024',
    metrics: [
      { label: 'Curated Destinations', value: '180+' },
      { label: 'Booking Conversion', value: '+28%' },
      { label: 'User Retention', value: '72%' },
    ],
    accentColor: '#0D9488',
    bgClass: 'bg-[#EAF3F5]',
    mockupType: 'roam',
    websiteUrl: '#',
  },
  {
    id: 'mindful',
    title: 'Mindful',
    subtitle: 'A wellness app for a balanced life.',
    description: 'A wellness app for a balanced life.',
    fullOverview:
      'Mindful offers guided micro-meditations, circadian sleep soundscapes, and gentle biometric check-ins crafted to lower everyday stress without demanding overwhelming time commitments.',
    role: ['Product Design', 'UI/UX', 'Frontend'],
    deliverables: ['Mobile App Design', 'Audio Visualizer UI', 'Accessibility Compliance', 'Design System'],
    tags: ['Product Design', 'UI/UX', 'Frontend'],
    timeline: '5 Months · 2024',
    metrics: [
      { label: 'Meditation Sessions', value: '1.2M+' },
      { label: 'Stress Reduction Index', value: '41%' },
      { label: 'Apple Design Nominee', value: '2024' },
    ],
    accentColor: '#E87A6E',
    bgClass: 'bg-[#FDECE7]',
    mockupType: 'mindful',
    websiteUrl: '#',
  },
  {
    id: 'aura',
    title: 'Aura',
    subtitle: 'Design system for unified fintech products.',
    description: 'An enterprise-grade component architecture for multi-brand banking apps.',
    fullOverview:
      'Aura provides a rigorously tested tokenized design system for cross-platform financial products, ensuring accessibility, dark mode consistency, and rapid product velocity across 40+ engineering teams.',
    role: ['Design Systems', 'Frontend Architecture'],
    deliverables: ['Figma Token Library', 'React Component Package', 'Storybook Documentation'],
    tags: ['Design System', 'Frontend', 'Tokens'],
    timeline: '4 Months · 2024',
    metrics: [
      { label: 'Reused Components', value: '120+' },
      { label: 'Dev Time Saved', value: '45%' },
    ],
    accentColor: '#F59E0B',
    bgClass: 'bg-[#FEF8EE]',
    mockupType: 'aura',
    websiteUrl: '#',
  },
  {
    id: 'pulse',
    title: 'Pulse',
    subtitle: 'Real-time telemetry and health monitoring.',
    description: 'A wearable health dashboard with predictive heart rate telemetry.',
    fullOverview:
      'Pulse delivers instant clinical telemetry insights for cardiovascular patients and endurance athletes, featuring predictive health anomaly detection and frictionless physician reporting.',
    role: ['UI/UX', 'Frontend'],
    deliverables: ['iOS HealthKit Integration', 'Live Telemetry Viz', 'HIPAA Compliant UI'],
    tags: ['UI/UX', 'Frontend', 'Data Viz'],
    timeline: '3 Months · 2023',
    metrics: [
      { label: 'Telemetry Stream Latency', value: '<20ms' },
      { label: 'Doctor Approvals', value: '98%' },
    ],
    accentColor: '#EC4899',
    bgClass: 'bg-[#FDF2F8]',
    mockupType: 'pulse',
    websiteUrl: '#',
  },
];

interface FeaturedWorkProps {
  onSelectProject?: (project: ProjectData) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onSelectProject }) => {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Product Design' | 'Frontend' | 'UI/UX'>('All');

  const visibleProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'All') return showAll ? true : ['lume', 'nova', 'roam', 'mindful'].includes(project.id);
    return project.tags.includes(activeFilter);
  });

  return (
    <section id="work" className="section-spacing scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header: split row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 mb-3">
              FEATURED WORK
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-zinc-900 leading-[1.18] max-w-xl">
              Crafting digital products people love to use.
            </h2>
          </div>

          <div className="flex flex-col sm:items-start lg:items-end gap-3 max-w-md">
            <p className="text-[15px] sm:text-base text-zinc-500 font-normal leading-relaxed">
              A selection of recent projects where I led design and development to solve real problems.
            </p>
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-zinc-900 hover:text-[#E87A6E] transition-colors duration-200 cursor-pointer"
            >
              <span>{showAll ? 'Show featured only' : 'View all work'}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Optional Filter Pills if "View all" is enabled */}
        {showAll && (
          <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-2">
            {(['All', 'Product Design', 'UI/UX', 'Frontend'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-[#18181B] text-white shadow-sm'
                    : 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* 2x2 Grid of Project Cards with generous negative spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 sm:gap-y-20">
          {visibleProjects.map((project) => {
            const handleItemClick = (e: React.MouseEvent) => {
              if (!project.websiteUrl || project.websiteUrl === '#') {
                e.preventDefault();
              }
              if (onSelectProject) {
                // Kept for modal expansion if enabled
              }
            };

            return (
              <article
                key={project.id}
                className="group flex flex-col"
              >
                {/* Graphic Card Container */}
                <a
                  href={project.websiteUrl || '#'}
                  target={project.websiteUrl && project.websiteUrl !== '#' ? '_blank' : undefined}
                  rel={project.websiteUrl && project.websiteUrl !== '#' ? 'noopener noreferrer' : undefined}
                  onClick={handleItemClick}
                  className="block w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer"
                  aria-label={`View project: ${project.title}`}
                >
                  <div
                    className={`w-full h-full ${project.bgClass} p-6 sm:p-8 flex items-center justify-center overflow-hidden relative transition-all duration-300 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] group-hover:-translate-y-1`}
                  >
                    {/* Specific Mockup Renderers matching reference */}
                    {project.mockupType === 'lume' && <LumeMockup />}
                    {project.mockupType === 'nova' && <NovaMockup />}
                    {project.mockupType === 'roam' && <RoamMockup />}
                    {project.mockupType === 'mindful' && <MindfulMockup />}
                    {project.mockupType === 'aura' && <AuraMockup />}
                    {project.mockupType === 'pulse' && <PulseMockup />}
                  </div>
                </a>

                {/* Text Info Below Card */}
                <div className="pt-6">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900 mb-1.5 flex items-center gap-2">
                    <a
                      href={project.websiteUrl || '#'}
                      target={project.websiteUrl && project.websiteUrl !== '#' ? '_blank' : undefined}
                      rel={project.websiteUrl && project.websiteUrl !== '#' ? 'noopener noreferrer' : undefined}
                      onClick={handleItemClick}
                      className="hover:text-[#E87A6E] transition-colors inline-flex items-center gap-2"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#E87A6E]" />
                    </a>
                  </h3>
                  <p className="text-sm sm:text-[15px] text-zinc-500 font-normal mb-3">
                    {project.subtitle}
                  </p>

                  {/* Clean unboxed tags with subtle spacing */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-400">
                    {project.tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span className="hover:text-zinc-600 transition-colors">{tag}</span>
                        {idx < project.tags.length - 1 && <span className="opacity-40">·</span>}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* --- PIXEL-PERFECT MOCKUP COMPONENTS --- */

/** 1. Lume Reading App Mockup */
const LumeMockup: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none scale-[0.88] sm:scale-100 origin-center">
      {/* Phone 1 (Left): Discover Screen */}
      <div className="w-[185px] sm:w-[210px] h-[340px] sm:h-[370px] bg-white rounded-[32px] p-3 shadow-xl border border-zinc-200/60 flex flex-col justify-between -rotate-3 transition-transform duration-300 group-hover:-rotate-1">
        {/* Status bar */}
        <div>
          <div className="flex items-center justify-between text-[9px] font-semibold text-zinc-800 px-2 pt-1 mb-2">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-1.5 border border-zinc-700 rounded-sm inline-block" />
            </div>
          </div>
          <div className="flex items-center justify-between px-1 mb-3 text-zinc-400">
            <span className="text-xs">‹</span>
            <span className="text-xs">•••</span>
          </div>

          <h4 className="text-[14px] sm:text-[16px] font-medium text-zinc-900 leading-snug px-1 mb-2.5">
            Find your next favorite read
          </h4>

          {/* Search bar */}
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 text-[10px] text-zinc-400 mb-3">
            <Search className="w-3 h-3 text-zinc-400" />
            <span>Search books, authors...</span>
          </div>

          {/* Category tabs */}
          <div className="flex items-center gap-1 text-[9px] text-zinc-500 mb-3 overflow-hidden">
            <span className="bg-zinc-900 text-white px-2 py-0.5 rounded-full">Fiction</span>
            <span className="bg-zinc-100 px-2 py-0.5 rounded-full">Non-fiction</span>
            <span className="bg-zinc-100 px-2 py-0.5 rounded-full">Health</span>
          </div>

          <p className="text-[10px] font-semibold text-zinc-800 px-1 mb-2">Popular this week</p>

          {/* Book Cards */}
          <div className="grid grid-cols-2 gap-1.5 px-1">
            <div className="bg-[#FAF6F0] p-2 rounded-lg border border-amber-100">
              <div className="h-10 bg-amber-200/50 rounded mb-1 flex items-center justify-center text-[8px] font-serif font-bold text-amber-900">
                Atomic Habits
              </div>
              <p className="text-[8px] text-zinc-500 truncate">James Clear</p>
            </div>
            <div className="bg-[#F3EFF8] p-2 rounded-lg border border-purple-100">
              <div className="h-10 bg-purple-200/50 rounded mb-1 flex items-center justify-center text-[8px] font-serif font-bold text-purple-900">
                Midnight
              </div>
              <p className="text-[8px] text-zinc-500 truncate">Matt Haig</p>
            </div>
          </div>
        </div>
      </div>

      {/* Phone 2 (Right, slightly behind/overlapped): Book Detail Screen */}
      <div className="absolute right-2 sm:right-6 top-8 w-[160px] sm:w-[185px] h-[310px] sm:h-[340px] bg-zinc-900 text-white rounded-[28px] p-3 shadow-2xl border border-zinc-800 flex flex-col justify-between rotate-3 transition-transform duration-300 group-hover:rotate-6">
        <div>
          <div className="flex items-center justify-between text-[9px] text-zinc-400 px-1 pt-1 mb-3">
            <span>6:05</span>
            <span>•••</span>
          </div>

          <div className="w-16 h-24 mx-auto bg-gradient-to-b from-indigo-900 to-indigo-950 rounded-md shadow-md border border-indigo-700/50 flex flex-col items-center justify-center p-1.5 text-center mb-3">
            <span className="text-[7px] uppercase tracking-wider text-indigo-300 font-sans">Bestseller</span>
            <span className="text-[9px] font-serif font-bold text-white mt-1">The Midnight Library</span>
          </div>

          <h5 className="text-[12px] font-medium text-center text-white mb-0.5">The Midnight Library</h5>
          <p className="text-[9px] text-zinc-400 text-center mb-2">Matt Haig</p>
          <div className="flex items-center justify-center gap-1 text-[9px] text-amber-400 mb-4">
            <span>★ ★ ★ ★ ★</span>
            <span className="text-zinc-400 text-[8px]">(2.4k)</span>
          </div>
        </div>

        <button className="w-full bg-white text-zinc-950 font-medium py-1.5 rounded-full text-[10px] text-center shadow">
          Read
        </button>
      </div>
    </div>
  );
};

/** 2. Nova Dashboard Mockup */
const NovaMockup: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-2 select-none">
      <div className="w-full max-w-[420px] bg-white rounded-2xl shadow-xl border border-zinc-200/80 p-4 transition-transform duration-300 group-hover:scale-[1.02]">
        {/* Top bar of dashboard */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md bg-zinc-900 text-white text-[10px] font-bold flex items-center justify-center font-serif">
              N.
            </span>
            <span className="text-xs font-semibold text-zinc-900">Overview</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] text-zinc-400">
            <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600 font-medium">+ Add widget</span>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="grid grid-cols-12 gap-3">
          {/* Mini Left Sidebar */}
          <div className="col-span-3 space-y-1.5 text-[10px] text-zinc-500 border-r border-zinc-100 pr-2">
            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-zinc-100 text-zinc-900 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span>Overview</span>
            </div>
            <div className="px-2 py-1 hover:text-zinc-900">Customers</div>
            <div className="px-2 py-1 hover:text-zinc-900">Analytics</div>
            <div className="px-2 py-1 hover:text-zinc-900">Messages</div>
            <div className="px-2 py-1 hover:text-zinc-900">Settings</div>
          </div>

          {/* Main Analytics Panel */}
          <div className="col-span-9 space-y-3">
            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-zinc-50/80 p-2.5 rounded-xl border border-zinc-100">
                <span className="text-[9px] text-zinc-400 block mb-0.5">Gross users</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm font-semibold text-zinc-900">$12,460</span>
                  <span className="text-[9px] text-emerald-600 font-medium">↑ 12%</span>
                </div>
              </div>

              <div className="bg-zinc-50/80 p-2.5 rounded-xl border border-zinc-100">
                <span className="text-[9px] text-zinc-400 block mb-0.5">Active Users</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-sm font-semibold text-zinc-900">8,240</span>
                  <span className="text-[9px] text-emerald-600 font-medium">↑ 15%</span>
                </div>
              </div>
            </div>

            {/* SVG Wave Chart */}
            <div className="bg-zinc-50/50 p-2.5 rounded-xl border border-zinc-100">
              <div className="h-16 w-full relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="novaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#818CF8" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#818CF8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,45 C30,48 50,25 80,30 C110,35 130,12 160,20 C180,26 195,10 200,8 L200,60 L0,60 Z"
                    fill="url(#novaGrad)"
                  />
                  <path
                    d="M0,45 C30,48 50,25 80,30 C110,35 130,12 160,20 C180,26 195,10 200,8"
                    fill="none"
                    stroke="#6366F1"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex justify-between text-[8px] text-zinc-400 mt-1 px-1">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            {/* Recent Activity Mini List */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[9px] font-semibold text-zinc-500 block">Recent activity</span>
              <div className="flex items-center justify-between text-[9px] py-1 border-b border-zinc-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-zinc-700 font-medium">Payment received</span>
                </div>
                <span className="text-zinc-400">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between text-[9px] py-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span className="text-zinc-700 font-medium">New user signed up</span>
                </div>
                <span className="text-zinc-400">3 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/** 3. Roam Travel App Mockup */
const RoamMockup: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none scale-[0.88] sm:scale-100 origin-center">
      {/* Phone 1 (Left) */}
      <div className="w-[185px] sm:w-[210px] h-[340px] sm:h-[370px] bg-white rounded-[32px] p-3 shadow-xl border border-zinc-200/60 flex flex-col justify-between -rotate-3 transition-transform duration-300 group-hover:-rotate-1">
        <div>
          <div className="flex items-center justify-between text-[9px] font-semibold text-zinc-800 px-2 pt-1 mb-2">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-1.5 border border-zinc-700 rounded-sm inline-block" />
            </div>
          </div>

          <h4 className="text-[14px] sm:text-[16px] font-medium text-zinc-900 leading-snug px-1 mb-2.5">
            Explore
            <br />
            extraordinary places
          </h4>

          {/* Search bar */}
          <div className="bg-zinc-50 border border-zinc-200/80 rounded-xl px-2.5 py-1.5 flex items-center gap-1.5 text-[10px] text-zinc-400 mb-3">
            <Search className="w-3 h-3 text-zinc-400" />
            <span>Search destinations...</span>
          </div>

          {/* Category Icons */}
          <div className="flex items-center justify-between px-1 mb-3 text-[9px] text-zinc-500">
            <div className="flex flex-col items-center gap-1">
              <span className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs">🏖️</span>
              <span>Beaches</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="w-7 h-7 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-xs">⛰️</span>
              <span>Mountains</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="w-7 h-7 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center text-xs">🏙️</span>
              <span>Cities</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="w-7 h-7 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-xs">🌲</span>
              <span>Forests</span>
            </div>
          </div>

          {/* Destination Preview Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[16/10] bg-gradient-to-tr from-teal-800 to-cyan-700 p-2.5 flex flex-col justify-end text-white">
            <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay" />
            <span className="text-[11px] font-bold">Bali, Indonesia</span>
            <span className="text-[9px] text-teal-200">Starting from $850</span>
          </div>
        </div>
      </div>

      {/* Phone 2 (Right, overlapped) */}
      <div className="absolute right-2 sm:right-6 top-8 w-[160px] sm:w-[185px] h-[310px] sm:h-[340px] bg-white rounded-[28px] overflow-hidden shadow-2xl border border-zinc-200 flex flex-col rotate-3 transition-transform duration-300 group-hover:rotate-6">
        <div className="h-44 w-full bg-gradient-to-b from-teal-600 via-teal-800 to-emerald-950 p-3 flex flex-col justify-between text-white relative">
          <div className="flex items-center justify-between text-[9px]">
            <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">Explore</span>
            <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Heart className="w-3.5 h-3.5 fill-red-400 text-red-400" />
            </div>
          </div>
          <div>
            <h5 className="text-[13px] font-bold">Uluwatu Cliffs</h5>
            <span className="text-[9px] text-teal-200">Bali, Indonesia</span>
          </div>
        </div>
        <div className="p-3 flex-1 flex flex-col justify-between">
          <div className="flex items-center justify-between text-[10px]">
            <span className="font-semibold text-zinc-900">$240 / night</span>
            <span className="text-amber-500 font-medium">★ 4.8 (3.5k)</span>
          </div>
          <p className="text-[8px] text-zinc-500 leading-tight">
            Cliffside infinity pool with panoramic views of the Indian ocean.
          </p>
          <button className="w-full bg-[#18181B] text-white py-1.5 rounded-full text-[10px] font-medium">
            Book Stay
          </button>
        </div>
      </div>
    </div>
  );
};

/** 4. Mindful Wellness App Mockup */
const MindfulMockup: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none scale-[0.88] sm:scale-100 origin-center">
      {/* Phone 1 (Left): Dark Mode Meditate */}
      <div className="w-[185px] sm:w-[210px] h-[340px] sm:h-[370px] bg-zinc-950 text-white rounded-[32px] p-3.5 shadow-2xl border border-zinc-800 flex flex-col justify-between -rotate-3 transition-transform duration-300 group-hover:-rotate-1">
        <div>
          <div className="flex items-center justify-between text-[9px] text-zinc-400 px-1 pt-1 mb-3">
            <span>9:21</span>
            <span className="w-2.5 h-1.5 border border-zinc-500 rounded-sm inline-block" />
          </div>

          <h4 className="text-[14px] sm:text-[16px] font-medium text-white leading-snug px-1 mb-2">
            A calmer you,
            <br />
            every day.
          </h4>

          <p className="text-[9px] text-zinc-400 px-1 mb-3.5 leading-relaxed">
            Short meditations for a happier, healthier mind.
          </p>

          <button className="w-full bg-white text-zinc-950 font-medium py-1.5 rounded-full text-[10px] mb-4 shadow">
            Start now
          </button>

          <p className="text-[9px] font-semibold text-zinc-300 px-1 mb-2">Featured</p>

          {/* Featured Cards */}
          <div className="grid grid-cols-2 gap-2 px-1">
            <div className="bg-gradient-to-br from-rose-950 to-zinc-900 p-2 rounded-xl border border-rose-900/40">
              <span className="text-[9px] text-rose-300 font-medium block">Unwind</span>
              <span className="text-[8px] text-zinc-400">5 min</span>
            </div>
            <div className="bg-gradient-to-br from-indigo-950 to-zinc-900 p-2 rounded-xl border border-indigo-900/40">
              <span className="text-[9px] text-indigo-300 font-medium block">Deep Sleep</span>
              <span className="text-[8px] text-zinc-400">15 min</span>
            </div>
          </div>
        </div>
      </div>

      {/* Phone 2 (Right, overlapped): Audio Visualizer Session */}
      <div className="absolute right-2 sm:right-6 top-8 w-[160px] sm:w-[185px] h-[310px] sm:h-[340px] bg-gradient-to-b from-zinc-900 to-black text-white rounded-[28px] p-3 shadow-2xl border border-zinc-800 flex flex-col justify-between rotate-3 transition-transform duration-300 group-hover:rotate-6">
        <div>
          <div className="flex items-center justify-between text-[9px] text-zinc-500 px-1 pt-1 mb-4">
            <span>6:21</span>
            <span>•••</span>
          </div>

          {/* Serene Graphic */}
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-rose-400/20 via-orange-300/30 to-amber-200/20 flex items-center justify-center p-3 mb-4 relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E87A6E] to-rose-400/80 shadow-lg blur-[1px]" />
          </div>

          <h5 className="text-[13px] font-medium text-center text-white mb-0.5">Morning Calm</h5>
          <p className="text-[9px] text-zinc-400 text-center mb-4">10 min · Meditation</p>

          {/* Audio Waveform */}
          <div className="flex items-center justify-center gap-1 h-8 px-2 mb-3">
            {[4, 8, 16, 24, 12, 28, 20, 10, 26, 18, 8, 14, 22, 6].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-[#E87A6E]/80 rounded-full"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>

        {/* Player button */}
        <div className="flex items-center justify-center mb-1">
          <div className="w-9 h-9 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <Play className="w-4 h-4 fill-zinc-950 ml-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
};

/** 5. Aura Design System Mockup (view all) */
const AuraMockup: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-[340px] bg-white rounded-2xl p-4 shadow-lg border border-amber-100 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-zinc-900">Aura Tokens v2.4</span>
        <span className="text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full font-medium">Design System</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        <div className="h-8 rounded bg-zinc-900" />
        <div className="h-8 rounded bg-[#E87A6E]" />
        <div className="h-8 rounded bg-amber-400" />
        <div className="h-8 rounded bg-emerald-500" />
      </div>
      <div className="h-2 w-3/4 bg-zinc-100 rounded" />
      <div className="h-2 w-1/2 bg-zinc-100 rounded" />
    </div>
  </div>
);

/** 6. Pulse Telemetry Mockup (view all) */
const PulseMockup: React.FC = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="w-full max-w-[340px] bg-zinc-900 text-white rounded-2xl p-4 shadow-lg border border-zinc-800 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-white">Live Telemetry</span>
        <span className="text-[10px] text-pink-400 bg-pink-950/60 px-2 py-0.5 rounded-full font-medium">72 BPM</span>
      </div>
      <div className="h-14 flex items-end gap-1">
        {[20, 35, 45, 80, 25, 60, 40, 75, 90, 30, 45, 65, 85, 40, 60].map((h, idx) => (
          <div key={idx} className="flex-1 bg-pink-500 rounded-t" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  </div>
);
