import React from 'react';

export default function TechStack() {
  const skillCategories = [
    {
      category: 'Programming',
      icon: '☕',
      badgeColor: 'border-sky-500/30 text-sky-300 bg-sky-500/10',
      description: 'Core languages for backend services and query operations.',
      skills: [
        { name: 'Java', note: 'Primary · Java 21 / OOP' },
        { name: 'SQL', note: 'Relational Queries & DDL' },
        { name: 'JavaScript', note: 'ES6+ / Web Client' }
      ]
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      badgeColor: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10',
      description: 'Frameworks and paradigms for resilient server-side applications.',
      skills: [
        { name: 'Spring Boot', note: 'Enterprise Microservices' },
        { name: 'Spring Security', note: 'Stateless JWT / RBAC' },
        { name: 'RESTful APIs', note: 'Layered Endpoints & Swagger' },
        { name: 'Microservices', note: 'Decoupled Service Design' },
        { name: 'JPA / Hibernate', note: 'ORM & Entity Lifecycle' }
      ]
    },
    {
      category: 'Databases',
      icon: '🗄️',
      badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
      description: 'Persistent relational data modeling and management.',
      skills: [
        { name: 'MySQL', note: 'Relational Schema & Indexing' }
      ]
    },
    {
      category: 'Development Tools',
      icon: '🛠️',
      badgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
      description: 'Version control and automated build tooling.',
      skills: [
        { name: 'Git', note: 'Branching & Code Hygiene' },
        { name: 'GitHub', note: 'PR Reviews & CI Workflows' },
        { name: 'Maven', note: 'Dependency Lifecycle Management' }
      ]
    },
    {
      category: 'Problem Solving',
      icon: '🧠',
      badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
      description: 'Algorithmic efficiency and object-oriented abstractions.',
      skills: [
        { name: 'Data Structures & Algorithms', note: 'Arrays, Lists, Trees, DP' },
        { name: 'Object-Oriented Programming', note: 'Encapsulation, SOLID' },
        { name: 'LeetCode', note: '200+ Problems Solved' }
      ]
    }
  ];

  return (
    <section id="skills" className="relative px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-[#090d14]">
      {/* Anchor alias for #stack */}
      <span id="stack" className="absolute -top-10"></span>

      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400"></span>
              Core Technical Competencies
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">Technical Skills</h2>
            <p className="mt-1 text-sm text-slate-400">
              Verified software engineering stack and tools. Scannable in under 10 seconds.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            <span>Zero fabricated tools or progress bars</span>
          </div>
        </div>

        {/* 5 Grouped Categories Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => (
            <article 
              key={idx} 
              className={`rounded-2xl border border-white/10 bg-slate-900/60 p-5 space-y-4 hover:border-sky-500/30 transition-all shadow-lg flex flex-col justify-between ${
                idx === 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2 font-bold text-white text-base">
                    <span>{cat.icon}</span>
                    <h3>{cat.category}</h3>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${cat.badgeColor}`}>
                    {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </div>

                <p className="text-xs text-slate-400">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="group rounded-xl border border-white/10 bg-black/50 px-3 py-2 flex flex-col hover:border-white/20 transition-colors"
                    >
                      <span className="font-mono text-xs font-semibold text-white group-hover:text-sky-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {skill.note}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicator */}
              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in production / projects</span>
                <span>✓</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
