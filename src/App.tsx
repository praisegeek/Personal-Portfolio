import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { FeaturedWork, ProjectData } from './components/FeaturedWork';
import { AboutSection } from './components/AboutSection';
import { KindWords } from './components/KindWords';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { AboutModal } from './components/AboutModal';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  const openResume = () => setResumeOpen(true);
  const closeResume = () => setResumeOpen(false);

  const openAbout = () => setAboutOpen(true);
  const closeAbout = () => setAboutOpen(false);

  const handleSelectProject = (project: ProjectData) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-[#FDECE8] selection:text-[#E87A6E]">
      {/* Top Bar Navigation */}
      <Header
        onOpenContact={openContact}
        onOpenResume={openResume}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenContact={openContact} />

        {/* Client Logos Strip */}
        <TrustBar />

        {/* Featured Work Grid */}
        <FeaturedWork onSelectProject={handleSelectProject} />

        {/* About Section */}
        <AboutSection onOpenAboutDetails={openAbout} />

        {/* Testimonials */}
        <KindWords />

        {/* CTA Banner */}
        <CtaBanner onOpenContact={openContact} />
      </main>

      {/* Footer */}
      <Footer
        onOpenContact={openContact}
        onOpenResume={openResume}
      />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactOpen}
        onClose={closeContact}
      />

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onOpenContact={openContact}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={closeResume}
        onOpenContact={openContact}
      />

      <AboutModal
        isOpen={aboutOpen}
        onClose={closeAbout}
        onOpenContact={openContact}
      />
    </div>
  );
}
