import React, { useState } from 'react';

export default function Header({ onOpenCLI, onOpenPalette, onOpenResume, showToast }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-full glass-nav px-4 shadow-2xl md:px-6">
        
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white hover:text-emerald-400 transition-colors">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>rohan_tidke</span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/40 p-1 md:flex">
          <a href="#home" className="rounded-full px-3 py-1.5 text-xs text-white transition-colors hover:bg-white/10 hover:text-white">Home</a>
          <a href="#projects" className="rounded-full px-3 py-1.5 text-xs text-white transition-colors hover:bg-white/10 hover:text-white">Projects</a>
          <a href="#experience" className="rounded-full px-3 py-1.5 text-xs text-white transition-colors hover:bg-white/10 hover:text-white">Experience</a>
          <a href="#stack" className="rounded-full px-3 py-1.5 text-xs text-white transition-colors hover:bg-white/10 hover:text-white">Stack</a>
          <a href="#leetcode" className="rounded-full px-3 py-1.5 text-xs text-amber-400 transition-colors hover:bg-amber-500/10 font-mono">LeetCode</a>
          <a href="#github" className="rounded-full px-3 py-1.5 text-xs text-emerald-400 transition-colors hover:bg-emerald-500/10 font-mono">GitHub</a>
          <a href="#observability" className="rounded-full px-3 py-1.5 text-xs text-cyan-400 transition-colors hover:bg-cyan-500/10 font-mono">Metrics</a>
          <a href="#contact" className="rounded-full px-3 py-1.5 text-xs text-white transition-colors hover:bg-white/10 hover:text-white">Contact</a>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button onClick={onOpenCLI} type="button" className="flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1.5 text-xs text-emerald-400 transition-all hover:border-emerald-500 hover:bg-emerald-950/60">
            <span className="font-mono font-bold">&gt;_</span>
            <span>CLI</span>
            <kbd className="ml-0.5 rounded border border-emerald-500/30 px-1 py-0.5 text-[10px] text-emerald-300">~</kbd>
          </button>

          <button onClick={onOpenPalette} type="button" className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:bg-white/10 hover:text-white">
            <svg className="size-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <span>Search</span>
            <kbd className="ml-1 rounded border border-white/20 px-1 py-0.5 text-[10px] text-slate-400">⌘K</kbd>
          </button>

          <button onClick={onOpenResume} className="rounded-full border border-emerald-500/40 bg-emerald-950/30 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 transition-all hover:bg-emerald-500 hover:text-slate-950 cursor-pointer shadow-lg shadow-emerald-950/50">
            📄 Resume PDF
          </button>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="flex md:hidden rounded-full p-2 text-slate-300 hover:bg-white/10">
          <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>

      </div>

      {mobileOpen && (
        <div className="fixed top-20 left-4 right-4 z-40 rounded-2xl glass-card p-5 space-y-3 md:hidden border border-white/15 bg-black/90 backdrop-blur-xl">
          <a href="#home" onClick={() => setMobileOpen(false)} className="block text-sm text-white hover:text-emerald-400 font-mono">Home</a>
          <a href="#projects" onClick={() => setMobileOpen(false)} className="block text-sm text-white hover:text-emerald-400 font-mono">Projects</a>
          <a href="#experience" onClick={() => setMobileOpen(false)} className="block text-sm text-white hover:text-emerald-400 font-mono">Experience</a>
          <a href="#stack" onClick={() => setMobileOpen(false)} className="block text-sm text-white hover:text-emerald-400 font-mono">Stack</a>
          <a href="#leetcode" onClick={() => setMobileOpen(false)} className="block text-sm text-amber-400 hover:text-amber-300 font-mono">LeetCode Analytics</a>
          <a href="#github" onClick={() => setMobileOpen(false)} className="block text-sm text-emerald-400 hover:text-emerald-300 font-mono">GitHub Telemetry</a>
          <a href="#observability" onClick={() => setMobileOpen(false)} className="block text-sm text-cyan-400 hover:text-cyan-300 font-mono">System Metrics</a>
          <a href="#education" onClick={() => setMobileOpen(false)} className="block text-sm text-white hover:text-emerald-400 font-mono">Education</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="block text-sm text-white hover:text-emerald-400 font-mono">Contact</a>
          <button onClick={() => { onOpenResume(); setMobileOpen(false); }} className="w-full rounded-full bg-emerald-500 py-2 text-xs font-bold text-slate-950 shadow-lg">
            📄 View Resume PDF
          </button>
        </div>
      )}
    </header>
  );
}
