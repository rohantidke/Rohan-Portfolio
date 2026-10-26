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
    <div className="relative min-h-screen bg-[#090d14] text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Background ambient lighting - sophisticated charcoal with subtle cyan/violet glows */}
      <div className="fixed top-0 -left-20 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/3 -right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-10 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <Header 
        onOpenCLI={() => setIsCLIOpen(true)}
        onOpenPalette={() => setIsPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        showToast={showToast}
      />

      <main className="space-y-4">
        {/* 1. Hero / Developer Profile Header */}
        <Hero 
          onOpenRecruiter={() => setIsRecruiterOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          showToast={showToast}
        />

        {/* 2. Professional About Me & Background */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* 3. Core Technical Competencies & Skills */}
        <TechStack />

        {/* 4. Featured Engineering Systems & Projects */}
        <Projects onOpenCaseStudy={(type) => setCaseStudyType(type)} />

        {/* 5. Professional Work Experience & Internships */}
        <Experience />

        {/* 6. Problem Solving & LeetCode Matrix */}
        <LeetCodeMatrix />

        {/* 7. Verified GitHub Activity Telemetry & Heatmap */}
        <GitHubTelemetry />

        {/* 8. Live System Observability & Metrics */}
        <ObservabilityMonitor />

        {/* 9. Academic Background & Qualifications */}
        <Education />

        {/* 10. Direct Contact Channels */}
        <Contact showToast={showToast} />
      </main>

      <footer className="border-t border-white/10 py-12 px-5 text-center text-xs text-slate-400 font-mono space-y-2 bg-[#06090e]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <p className="font-bold text-white text-sm">Rohan Tidke</p>
            <p className="text-slate-400 text-xs">Java Backend Developer | Spring Boot | Microservices</p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="#home" className="hover:text-sky-400 transition-colors">Back to Top ↑</a>
            <a href="https://github.com/rohantidke" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">GitHub ↗</a>
            <a href="https://linkedin.com/in/rohan-tidke-31510a26b" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">LinkedIn ↗</a>
            <a href="https://leetcode.com/u/rohan6086/" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">LeetCode ↗</a>
          </div>
        </div>
        <p className="text-[11px] text-slate-500 pt-4">© 2026 Rohan Tidke · Pune, India · rohantidke6086@gmail.com</p>
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
        <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-sky-500 text-slate-950 font-bold px-4 py-2.5 text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
