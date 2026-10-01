import React from 'react';

export default function Hero({ onOpenRecruiter, onOpenResume, showToast }) {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-14 pt-12 md:px-8 md:pb-20 md:pt-16">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        
        <div className="min-w-0 space-y-6">
          
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-xs font-medium text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Backend Engineer & Software Engineering Roles
            </span>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight text-white">
              Rohan Tidke
            </h1>
            <p className="mt-1.5 text-base sm:text-lg font-medium text-white font-mono">
              Computer Engineering Student & Backend Developer
            </p>
          </div>

          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white">
            Computer Engineering student (<span className="text-white font-bold">CGPA 8.5</span>, Bharati Vidyapeeth Lavale Pune, Expected 2027) with internship experience building REST APIs using Java and Spring Boot. Strong in Spring Security, JPA/Hibernate, SQL, and backend architecture, with hands-on experience developing microservices and document-verification systems.
          </p>

          <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-100">
            <span className="text-emerald-400 font-bold">AWS Certified Cloud Practitioner</span> with <span className="text-amber-400 font-mono font-bold">120+ LeetCode problems solved</span>. Built microservices-based fraud detection engines (Tesseract OCR, OpenCV, Ethereum Merkle proofs) and document-grounded RAG platforms (Python, LangChain, FAISS, ChromaDB).
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap pt-2">
            <button onClick={onOpenRecruiter} type="button" className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-all hover:scale-105 emerald-glow cursor-pointer">
              <svg className="size-4 fill-slate-950" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              <span>Recruiter Fast-Track (1-Min)</span>
            </button>

            <button onClick={onOpenResume} type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-all cursor-pointer">
              <span>📄 View Resume PDF</span>
            </button>

            <a
              href="https://leetcode.com/u/rohan6086/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-500/50 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold text-amber-300 hover:bg-amber-500 hover:text-slate-950 transition-all cursor-pointer font-mono"
            >
              <span>🟡 LeetCode @rohan6086 ↗</span>
            </a>

            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors">
              <span>Explore Projects</span>
            </a>
          </div>

          <div className="grid max-w-xl grid-cols-1 sm:grid-cols-3 gap-3 rounded-2xl glass-card p-4 border-white/10">
            <div>
              <p className="font-mono text-xs text-white uppercase tracking-wider">Education</p>
              <p className="mt-1 text-sm font-semibold text-white">B.E. Computer (8.5 CGPA)</p>
            </div>
            <div>
              <p className="font-mono text-xs text-white uppercase tracking-wider">Cloud Certification</p>
              <p className="mt-1 text-sm font-semibold text-emerald-400">AWS Certified Practitioner</p>
            </div>
            <div>
              <p className="font-mono text-xs text-white uppercase tracking-wider">Problem Solving</p>
              <p className="mt-1 text-sm font-semibold text-amber-400 font-mono">120+ LeetCode Solved</p>
            </div>
          </div>

        </div>

        <aside className="relative min-w-0">
          <div className="rounded-3xl glass-card p-6 shadow-2xl space-y-5 border-white/15">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-mono text-white">
                resume.profile.json
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-white text-base font-mono shadow-lg">
                  RT
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Rohan Tidke</h3>
                  <p className="text-xs text-white font-mono">Java Developer Intern</p>
                  <p className="text-xs text-white">Pune, Maharashtra, India · +91-8208391705</p>
                </div>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-white/10">
                <p className="text-xs font-mono text-white">Education & CGPA</p>
                <p className="text-xs font-medium text-white">Bharati Vidyapeeth's COE Lavale, Pune (Expected 2027)</p>
                <p className="text-xs font-semibold text-emerald-400 font-mono">B.E. Computer Engineering · CGPA: 8.5</p>
              </div>

              <div className="space-y-1.5">
                <p className="text-xs font-mono text-white">Primary Tech Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-xs text-white font-mono">Java (primary)</span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-xs text-white font-mono">Spring Boot 3</span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-xs text-white font-mono">Spring Security</span>
                  <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-0.5 text-xs text-white font-mono">FastAPI & RAG</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <p className="text-xs font-mono text-white">Certifications & Metrics</p>
                <p className="text-xs font-medium text-white">☁️ AWS Certified Cloud Practitioner (2025)</p>
                <p className="text-xs font-medium text-amber-300 font-mono">🧩 120+ LeetCode Problems Solved</p>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </section>
  );
}
