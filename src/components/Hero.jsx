import React, { useState, useEffect } from 'react';

export default function Hero({ onOpenRecruiter, onOpenResume, showToast }) {
  const [activeNode, setActiveNode] = useState('gateway');
  const [latency, setLatency] = useState(24);

  // Subtle live ping simulation for technical architecture monitor
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(20 + Math.random() * 8));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden px-5 pb-16 pt-10 md:px-8 md:pb-24 md:pt-16 bg-[#090d14]">
      {/* Background architectural grid / subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.12),rgba(255,255,255,0))] pointer-events-none"></div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-12 lg:gap-12">
        
        {/* Left Column: Personal Introduction & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Availability Status Badge */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-mono font-medium text-emerald-400 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Software Engineering Roles
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-mono text-slate-400">
              Pune, India
            </span>
          </div>

          {/* Personal Introduction & Exact Professional Headline */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Rohan Tidke
            </h1>
            <p className="text-lg sm:text-xl font-semibold font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300">
              Java Backend Developer | Spring Boot | Microservices
            </p>
          </div>

          {/* Exact Supporting Text requested by recruiter guidelines */}
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-300 font-normal">
            I build secure REST APIs, scalable backend services, and reliable software systems. I enjoy solving challenging problems and turning complex requirements into practical solutions.
          </p>

          {/* Quick Technical Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
            <span className="rounded-md border border-white/10 bg-slate-900/80 px-2.5 py-1 text-slate-300">
              ☕ Java 21
            </span>
            <span className="rounded-md border border-white/10 bg-slate-900/80 px-2.5 py-1 text-slate-300">
              🌱 Spring Boot 3
            </span>
            <span className="rounded-md border border-white/10 bg-slate-900/80 px-2.5 py-1 text-slate-300">
              🔐 Spring Security & JWT
            </span>
            <span className="rounded-md border border-white/10 bg-slate-900/80 px-2.5 py-1 text-slate-300">
              🗄️ MySQL / JPA
            </span>
            <span className="rounded-md border border-sky-500/30 bg-sky-500/10 px-2.5 py-1 text-sky-300 font-bold">
              🧩 200+ LeetCode Solved
            </span>
          </div>

          {/* CTAs matching Section 2 specification */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Primary CTA */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-2.5 text-xs sm:text-sm font-bold text-slate-950 hover:bg-sky-400 transition-all shadow-lg hover:shadow-sky-500/25 cursor-pointer font-mono"
            >
              <span>View My Projects</span>
              <span>↓</span>
            </a>

            {/* Secondary CTA */}
            <a
              href="/Rohan_Tidke_Resume.pdf"
              download="Rohan_Tidke_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-sky-950/30 px-5 py-2.5 text-xs sm:text-sm font-bold text-sky-300 hover:bg-sky-500 hover:text-slate-950 transition-all cursor-pointer font-mono"
            >
              <span>⬇ Download Resume</span>
            </a>

            {/* View Resume in Modal */}
            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer font-mono"
            >
              <span>📄 View Resume</span>
            </button>

            {/* Contact Me Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer font-mono"
            >
              <span>Contact Me ✉</span>
            </a>
          </div>

          {/* Social Profiles: GitHub & LinkedIn */}
          <div className="flex items-center gap-4 pt-1 text-xs font-mono text-slate-400">
            <span className="text-slate-500">Profiles:</span>
            
            <a
              href="https://github.com/rohantidke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>GitHub @rohantidke ↗</span>
            </a>

            <a
              href="https://linkedin.com/in/rohan-tidke-31510a26b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92m1.37 9.74v-8.37H5.09v8.37h2.74z"/>
              </svg>
              <span>LinkedIn ↗</span>
            </a>

            <a
              href="https://leetcode.com/u/rohan6086/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber-400/90 hover:text-amber-300 transition-colors"
            >
              <span>🟡 LeetCode @rohan6086 ↗</span>
            </a>
          </div>

        </div>

        {/* Right Column: Technical Backend Architecture Visual */}
        <aside className="lg:col-span-5 relative min-w-0">
          <div className="rounded-3xl border border-white/10 bg-[#0f1420]/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl space-y-4">
            
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
                <span className="ml-2 font-mono text-xs text-slate-400">backend-pipeline.telemetry</span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-2.5 py-0.5 text-[11px] font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                LIVE · {latency}ms
              </span>
            </div>

            {/* Architecture Node Diagram */}
            <div className="space-y-3 font-mono text-xs">
              
              {/* Node 1: Client Ingress */}
              <div 
                onClick={() => setActiveNode('ingress')}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  activeNode === 'ingress' 
                    ? 'border-sky-500/60 bg-sky-950/30 shadow-md' 
                    : 'border-white/10 bg-slate-900/50 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <span className="text-sky-400">01.</span> HTTP Ingress / Client Request
                  </span>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    POST /api/v1/auth/verify
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-sans">
                  Payload validation, CORS headers, rate limiting filters.
                </p>
              </div>

              {/* Connecting Flow Arrow */}
              <div className="flex justify-center text-slate-600 text-xs py-0.5">
                ↓ JWT Bearer Authentication Filter
              </div>

              {/* Node 2: Spring Boot Microservices */}
              <div 
                onClick={() => setActiveNode('gateway')}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  activeNode === 'gateway' 
                    ? 'border-sky-500/60 bg-sky-950/30 shadow-md' 
                    : 'border-white/10 bg-slate-900/50 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <span className="text-sky-400">02.</span> Spring Boot 3 Core Services
                  </span>
                  <span className="text-[10px] text-sky-400 font-bold bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                    Java 21 · Stateless RBAC
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-sans">
                  Controller–Service–Repository layered logic, @RestControllerAdvice global exception handling.
                </p>
              </div>

              {/* Connecting Flow Arrow */}
              <div className="flex justify-center text-slate-600 text-xs py-0.5">
                ↓ Spring Data JPA / Hibernate Transactions
              </div>

              {/* Node 3: Persistence Layer */}
              <div 
                onClick={() => setActiveNode('persistence')}
                className={`p-3 rounded-xl border transition-all cursor-pointer ${
                  activeNode === 'persistence' 
                    ? 'border-sky-500/60 bg-sky-950/30 shadow-md' 
                    : 'border-white/10 bg-slate-900/50 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                    <span className="text-sky-400">03.</span> Relational Persistence (MySQL)
                  </span>
                  <span className="text-[10px] text-indigo-400 font-bold bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    ACID · Indexing
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 font-sans">
                  Optimized relational schema, connection pooling (HikariCP), custom AttributeConverters.
                </p>
              </div>

            </div>

            {/* Recruiter Fast-Track Button */}
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={onOpenRecruiter}
                type="button"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/15 py-2.5 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <span>⚡ Open Recruiter Fast-Track Summary (1-Min)</span>
              </button>
            </div>

          </div>
        </aside>

      </div>
    </section>
  );
}
