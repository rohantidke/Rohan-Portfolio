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
          <p className="mt-1 text-sm text-slate-300">Software development internships building production RESTful APIs, full-stack systems, and microservices.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          
          {/* Experience 1: Shorat Innovations */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border-white/15 hover:border-emerald-500/40 transition-all shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Java Full Stack Development Intern</h3>
                  <p className="text-base text-emerald-400 font-medium font-mono mt-0.5">Shorat Innovations Pvt. Ltd., Pune</p>
                  <p className="text-xs text-slate-400 font-mono">Cert. No. SI-INT2025/304</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs text-emerald-300 font-mono font-bold shrink-0 self-start sm:self-auto">
                  Jan 2026 – Feb 2026
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Engineered a full-stack Complaint Management System for 3 user roles, implementing <strong>37 REST endpoints</strong>, 10 Spring Boot controllers, and 26 React pages across a layered controller–service–repository architecture (Java 21, JPA/Hibernate, React 19, Vite).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Architected role-based access control (RBAC) across <strong>32 protected endpoints</strong> with stateless Spring Security and JWT, eliminating server-side session overhead for horizontal scalability and documenting contracts via OpenAPI/Swagger.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Resolved cross-database enum mapping errors between MySQL and PostgreSQL using custom JPA AttributeConverters, standardizing responses across 6 exception types via a global @RestControllerAdvice.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Streamlined deployment to Render, Supabase, and Vercel by authoring multi-stage Dockerfiles and containerizing services into a reproducible 3-container Docker Compose stack (MySQL, Spring Boot, Nginx/React).</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">Java 21</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">Spring Boot 3</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">Spring Security (JWT)</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">React 19 / Vite</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">Docker Compose</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">OpenAPI / Swagger</span>
            </div>
          </div>

          {/* Experience 2: Shri Software Solutions */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 border-white/15 hover:border-emerald-500/40 transition-all shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Java Developer Intern (Industrial Training)</h3>
                  <p className="text-base text-emerald-400 font-medium font-mono mt-0.5">Shri Software Solutions & Training Center</p>
                  <p className="text-xs text-slate-400 font-mono">(MSME, Govt. of India) | during Diploma</p>
                </div>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs text-emerald-300 font-mono font-bold shrink-0 self-start sm:self-auto">
                  Aug 2023 – Nov 2023
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 leading-relaxed">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Developed core business logic for complaint lifecycles, department routing, and SLA escalations, delivering <strong>30 REST endpoints</strong> thoroughly validated via Postman within a modular Spring Boot architecture.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Implemented a polyglot persistence architecture, routing relational complaint and user transactions to MySQL via JPA/Hibernate while streaming high-volume audit logs to MongoDB via Spring Data.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Resolved 15+ authentication and validation edge cases, standardizing system-wide API error responses using centralized @ControllerAdvice and rigorous Git code reviews.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">Java</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">Spring Boot</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">JPA / Hibernate</span>
              <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs text-white font-mono">MySQL</span>
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
