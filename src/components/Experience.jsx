import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-black">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        <div>
          <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Professional Experience
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">Work Experience</h2>
          <p className="mt-1 text-sm text-slate-300">Software development internship experience building production RESTful APIs and microservices.</p>
        </div>

        <div className="max-w-3xl">
          <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border-white/15 hover:border-emerald-500/40 transition-all shadow-xl">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Java Developer Intern</h3>
                <p className="text-base text-emerald-400 font-medium font-mono mt-0.5">Shri Software Technologies</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs text-emerald-300 font-mono font-bold shrink-0 self-start sm:self-auto">
                Jul 2023 – Oct 2023
              </span>
            </div>

            <ul className="space-y-3 text-sm text-slate-200 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                <span>Built REST APIs for a student management module using Java, Spring Boot, and JPA/Hibernate, integrated with MySQL, PostgreSQL, and MongoDB.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                <span>Tested APIs with Postman, fixed bugs, and followed the team’s Git workflow and code review process.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                <span>Applied layered architecture, exception handling, and API documentation.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">Java</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">Spring Boot</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">JPA / Hibernate</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">REST APIs</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">MySQL</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">PostgreSQL</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">MongoDB</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">Postman</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">Git</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
