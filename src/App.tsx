import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CloudPlayground } from './components/CloudPlayground';
import { EducationSection } from './components/EducationSection';
import { RecognitionSection } from './components/RecognitionSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { Toast } from './components/Toast';
import { PROFILE } from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('top');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 2400);
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.phoneClean);
      showToast(`Phone number copied: ${PROFILE.phone}`);
    } catch {
      showToast(PROFILE.phone);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      showToast(`Email copied: ${PROFILE.email}`);
    } catch {
      showToast(PROFILE.email);
    }
  };

  const handleExploreArchitecture = () => {
    const el = document.getElementById('cloud-lab');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['top', 'build', 'stack', 'cloud-lab', 'path', 'recognition', 'about', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -40% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-300 selection:text-slate-950">
      {/* Dynamic Toast Feedback */}
      <Toast message={toastMessage} />

      {/* Floating Top Navigation */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <Hero
        onCopyPhone={handleCopyPhone}
        onCopyEmail={handleCopyEmail}
        onExploreArchitecture={handleExploreArchitecture}
      />

      <main>
        {/* 01. The Build (Projects) */}
        <ProjectsSection />

        {/* 02. The Stack (Skills) */}
        <SkillsSection />

        {/* Interactive Feature: The Cloud Backbone Architecture Lab */}
        <CloudPlayground />

        {/* 03. The Path (Education) */}
        <EducationSection />

        {/* 04. Recognition & Certifications */}
        <RecognitionSection />

        {/* 05. About */}
        <AboutSection />

        {/* 06. Contact */}
        <ContactSection
          onCopyPhone={handleCopyPhone}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectSection={handleSelectSection}
        onCopyPhone={handleCopyPhone}
        onCopyEmail={handleCopyEmail}
      />
    </div>
  );
}
