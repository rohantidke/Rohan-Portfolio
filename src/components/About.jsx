import React from 'react';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="relative px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-[#090d14]">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        {/* Section Header */}
        <div>
          <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-widest flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-400"></span>
            Background & Engineering Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">About Me</h2>
          <p className="mt-1 text-sm text-slate-400">Personal background, technical philosophy, and academic trajectory.</p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              I am a final-year <strong className="text-white">Computer Engineering</strong> student at{' '}
              <strong className="text-white">Bharati Vidyapeeth's College of Engineering, Pune</strong>, graduating in{' '}
              <span className="text-sky-400 font-mono font-semibold">2027</span> with an academic record of{' '}
              <span className="text-sky-400 font-mono font-semibold">8.5 CGPA</span>.
            </p>
            
            <p>
              My primary specialization is <strong className="text-white">Java Backend Engineering</strong>. I focus on architecting secure, reliable backend services using <strong className="text-white">Spring Boot</strong> and designing clean, intuitive <strong className="text-white">RESTful APIs</strong>. I have a deep interest in distributed systems, microservices communication, application security, databases, and scalable software architecture.
            </p>

            <p>
              Through hands-on internship experience at tech organizations, I have developed a disciplined approach to software development—consistently following structured <strong className="text-white">Git workflows</strong>, participating in thorough <strong className="text-white">code reviews</strong>, implementing layered architecture (Controller–Service–Repository), and writing standardized exception handling.
            </p>

            {/* Core Values Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3.5 space-y-1">
                <div className="font-mono text-xs font-semibold text-sky-400 flex items-center gap-1.5">
                  <span>🛡️</span>
                  <span>Secure By Design</span>
                </div>
                <p className="text-xs text-slate-400">Stateless JWT authentication, RBAC, input sanitization.</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3.5 space-y-1">
                <div className="font-mono text-xs font-semibold text-sky-400 flex items-center gap-1.5">
                  <span>⚙️</span>
                  <span>Clean Architecture</span>
                </div>
                <p className="text-xs text-slate-400">Separation of concerns, JPA/Hibernate, standardized DTOs.</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3.5 space-y-1">
                <div className="font-mono text-xs font-semibold text-sky-400 flex items-center gap-1.5">
                  <span>🧩</span>
                  <span>DSA Foundation</span>
                </div>
                <p className="text-xs text-slate-400">200+ LeetCode problems solved with algorithmic rigor.</p>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-500/30 px-5 py-2 text-xs font-mono font-semibold text-sky-300 hover:bg-sky-500 hover:text-slate-950 transition-all cursor-pointer"
              >
                <span>📄 View Full Resume</span>
              </button>

              <a
                href="/Rohan_Tidke_Resume.pdf"
                download="Rohan_Tidke_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-mono font-semibold text-slate-300 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
              >
                <span>⬇ Download PDF</span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors ml-1"
              >
                <span>Explore Featured Systems ▹</span>
              </a>
            </div>
          </div>

          {/* Quick Summary Card Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Education Highlight Card */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
                  <span>🎓</span> Academic Profile
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full font-bold">
                  8.5 CGPA
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">Bharati Vidyapeeth's College of Engineering</h3>
                <p className="text-xs text-slate-400 font-medium">Lavale, Pune · Affiliated with SPPU</p>
                <p className="text-xs text-slate-300 pt-1">
                  Bachelor of Engineering (B.E.) in <strong className="text-white">Computer Engineering</strong>
                </p>
                <p className="text-xs font-mono text-slate-400">Expected Graduation: <span className="text-sky-400 font-semibold">2027</span></p>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Prior Academic Record</p>
                
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Diploma in Computer Engineering (Yogeshwari Poly.)</span>
                  <span className="font-mono font-semibold text-white">88.46%</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Secondary School Certificate (SSC)</span>
                  <span className="font-mono font-semibold text-white">95.60%</span>
                </div>
              </div>
            </div>

            {/* Key Focus Areas Card */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 space-y-3 shadow-xl">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                <span>⚡</span> Technical Focus
              </span>
              
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center justify-between">
                  <span>Primary Language</span>
                  <span className="font-mono font-semibold text-sky-300">Java (Modern Java / OOP)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Backend Framework</span>
                  <span className="font-mono font-semibold text-sky-300">Spring Boot 3 / Spring Security</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>API Protocol</span>
                  <span className="font-mono font-semibold text-sky-300">RESTful APIs / OpenAPI Specs</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Persistence Layer</span>
                  <span className="font-mono font-semibold text-sky-300">MySQL / JPA / Hibernate</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Version Control & Reviews</span>
                  <span className="font-mono font-semibold text-sky-300">Git / GitHub PR Workflows</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
