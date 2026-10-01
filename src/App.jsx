import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
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
    <div className="relative min-h-screen bg-black text-slate-100 selection:bg-emerald-500 selection:text-black">
      {/* Background ambient lighting */}
      <div className="fixed top-10 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed top-1/3 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="fixed bottom-10 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

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

        {/* 2. Featured Engineering Projects & Systems */}
        <Projects onOpenCaseStudy={(type) => setCaseStudyType(type)} />

        {/* 3. Professional Work Experience & Internships */}
        <Experience />

        {/* 4. Core Technology Stack & Architecture */}
        <TechStack />

        {/* 5. Live LeetCode Problem Solving Analytics */}
        <LeetCodeMatrix />

        {/* 6. Verified GitHub Activity Telemetry & Heatmap */}
        <GitHubTelemetry />

        {/* 7. Live System Observability & Performance Metrics */}
        <ObservabilityMonitor />

        {/* 8. Academic Background & Education */}
        <Education />

        {/* 9. Direct Contact & Collaboration */}
        <Contact showToast={showToast} />
      </main>

      <footer className="border-t border-white/10 py-10 px-5 text-center text-xs text-slate-400 font-mono space-y-2 bg-black">
        <p>© 2026 Rohan Tidke · Software Engineer & Backend Systems Architect</p>
        <p className="text-[11px] text-slate-500">Built with React, Tailwind CSS, LeetCode Live API & Pure Black Glassmorphism</p>
        <p className="text-[11px] text-emerald-400 font-semibold pt-1">Pune, India · rohantidke6086@gmail.com</p>
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
        <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-emerald-500 text-slate-950 font-bold px-4 py-2.5 text-xs shadow-2xl flex items-center gap-2 animate-bounce">
          <span>✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
