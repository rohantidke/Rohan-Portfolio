import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import LeetCodeMatrix from './components/LeetCodeMatrix';
import GitHubTelemetry from './components/GitHubTelemetry';
import ObservabilityMonitor from './components/ObservabilityMonitor';
import Education from './components/Education';
import Contact from './components/Contact';
import TerminalCLI from './components/TerminalCLI';
import RecruiterModal from './components/RecruiterModal';
import CommandPalette from './components/CommandPalette';
import CaseStudyModal from './components/CaseStudyModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isCLIOpen, setIsCLIOpen] = useState(false);
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [caseStudyType, setCaseStudyType] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
      if (e.key === '~' || e.key === '`') {
        if (document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setIsCLIOpen((prev) => !prev);
        }
      }
      if (e.key === 'Escape') {
        setIsCLIOpen(false);
        setIsRecruiterOpen(false);
        setIsPaletteOpen(false);
        setIsResumeOpen(false);
        setCaseStudyType(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] text-[#D4D4D8] selection:bg-[#3B82F6] selection:text-[#FFFFFF]">
      <Header 
        onOpenCLI={() => setIsCLIOpen(true)}
        onOpenPalette={() => setIsPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        showToast={showToast}
      />

      <main>
        {/* 1. Hero / Developer Profile Header (Main background #000000) */}
        <Hero 
          onOpenRecruiter={() => setIsRecruiterOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          showToast={showToast}
        />

        {/* 2. Professional About Me & Background (Alternate background #080808) */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Core Technical Competencies & Skills (Main background #000000) */}
        <TechStack />

        {/* 4. Featured Engineering Systems & Projects (Alternate background #080808) */}
        <Projects onOpenCaseStudy={(type) => setCaseStudyType(type)} />

        {/* 5. Professional Work Experience & Internships (Main background #000000) */}
        <Experience />

        {/* 6. Problem Solving & LeetCode Matrix (Alternate background #080808) */}
        <LeetCodeMatrix />

        {/* 7. Verified GitHub Activity Telemetry & Heatmap (Main background #000000) */}
        <GitHubTelemetry />

        {/* 8. Live System Observability & Metrics (Alternate background #080808) */}
        <ObservabilityMonitor />

        {/* 9. Academic Background & Qualifications (Main background #000000) */}
        <Education />

        {/* 10. Direct Contact Channels (Alternate background #080808) */}
        <Contact showToast={showToast} />
      </main>

      <footer className="border-t border-[#262626] py-12 px-5 text-center text-xs text-[#A1A1AA] font-mono space-y-2 bg-[#000000]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <p className="font-bold text-[#FFFFFF] text-sm">Rohan Tidke</p>
            <p className="text-[#A1A1AA] text-xs">Java Backend Developer | Spring Boot | Microservices</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="#home" className="hover:text-[#3B82F6] transition-colors">Back to Top ↑</a>
            <a href="https://github.com/rohantidke" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors">GitHub ↗</a>
            <a href="https://linkedin.com/in/rohan-tidke-31510a26b" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors">LinkedIn ↗</a>
            <a href="https://leetcode.com/u/rohan6086/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors">LeetCode ↗</a>
          </div>
        </div>
        <p className="text-[11px] text-[#A1A1AA] pt-4">© 2026 Rohan Tidke · Pune, India · rohantidke6086@gmail.com</p>
      </footer>

      {/* Modals & Overlays */}
      <TerminalCLI 
        isOpen={isCLIOpen} 
        onClose={() => setIsCLIOpen(false)} 
      />

      <RecruiterModal 
        isOpen={isRecruiterOpen} 
        onClose={() => setIsRecruiterOpen(false)} 
        showToast={showToast}
      />

      <CommandPalette 
        isOpen={isPaletteOpen} 
        onClose={() => setIsPaletteOpen(false)} 
      />

      <CaseStudyModal 
        isOpen={!!caseStudyType} 
        type={caseStudyType} 
        onClose={() => setCaseStudyType(null)} 
      />

      <ResumeModal 
        isOpen={isResumeOpen} 
        onClose={() => setIsResumeOpen(false)} 
        showToast={showToast}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-[#3B82F6] text-[#FFFFFF] font-semibold px-4 py-2.5 text-xs shadow-2xl flex items-center gap-2 border border-[#262626]">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
