import React from 'react';

export default function TechStack() {
  const stackCategories = [
    {
      title: 'Programming Languages',
      skills: 'Java (Primary), Python, JavaScript, C++, SQL',
      icon: '⚡'
    },
    {
      title: 'Backend Development',
      skills: 'Spring Boot 3, Spring MVC, Spring Security (JWT), REST APIs, Microservices',
      icon: '⚙️'
    },
    {
      title: 'Persistence & Databases',
      skills: 'JPA, Hibernate, MySQL, PostgreSQL, MongoDB, Redis',
      icon: '💾'
    },
    {
      title: 'Messaging & API Docs',
      skills: 'Apache Kafka, Swagger/OpenAPI',
      icon: '📡'
    },
    {
      title: 'Cloud & DevOps',
      skills: 'AWS (EC2, S3, VPC, IAM), Docker, Kubernetes, Jenkins, CI/CD',
      icon: '☁️'
    },
    {
      title: 'Build & Dev Tools',
      skills: 'Maven, Gradle, Git, IntelliJ IDEA, Visual Studio Code',
      icon: '🛠️'
    },
    {
      title: 'Core Concepts',
      skills: 'Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Computer Networks (CN)',
      icon: '🧠'
    }
  ];

  return (
    <section id="stack" className="px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-black">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        <div>
          <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Technical Expertise
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">Technical Skills</h2>
          <p className="mt-1 text-sm text-slate-300">Core software engineering skills and tools as detailed on official resume.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stackCategories.map((cat, idx) => (
            <article key={idx} className="glass-card rounded-2xl p-5 space-y-2 border-white/15 hover:border-emerald-500/40 transition-all shadow-lg">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-bold border-b border-white/10 pb-2">
                <span>{cat.icon}</span>
                <span>{cat.title}</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-sans pt-1">
                {cat.skills}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
