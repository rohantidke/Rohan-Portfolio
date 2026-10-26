import React, { useState, useMemo } from 'react';
import { backendCoreSkills, skillCategories } from '../data/skillsData';

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter groups
  const filterTabs = [
    { id: 'all', label: 'All Categories (11)' },
    { id: 'backend', label: 'Backend & Systems' },
    { id: 'languages', label: 'Languages' },
    { id: 'data', label: 'Databases & Storage' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'security', label: 'Security & Verification' },
    { id: 'ai', label: 'AI & Intelligent Systems' },
  ];

  // Map category to filter tab
  const matchesFilter = (catId, tabId) => {
    if (tabId === 'all') return true;
    if (tabId === 'backend') return ['backend-development', 'architecture-concepts'].includes(catId);
    if (tabId === 'languages') return ['programming-languages', 'dsa-problem-solving'].includes(catId);
    if (tabId === 'data') return ['databases-storage'].includes(catId);
    if (tabId === 'cloud') return ['deployment-infrastructure', 'developer-tools'].includes(catId);
    if (tabId === 'security') return ['security-authentication', 'document-verification'].includes(catId);
    if (tabId === 'ai') return ['ai-ml-systems'].includes(catId);
    return true;
  };

  // Filtered categories and skills based on search and active tab
  const displayedCategories = useMemo(() => {
    return skillCategories
      .filter((cat) => matchesFilter(cat.id, activeFilter))
      .map((cat) => {
        if (!searchQuery.trim()) return cat;
        const q = searchQuery.toLowerCase();
        const filteredSkills = cat.skills.filter(
          (s) => s.name.toLowerCase().includes(q) || s.note.toLowerCase().includes(q)
        );
        const matchesCategory = cat.category.toLowerCase().includes(q) || cat.description.toLowerCase().includes(q);
        if (matchesCategory) return cat;
        if (filteredSkills.length > 0) return { ...cat, skills: filteredSkills };
        return null;
      })
      .filter(Boolean);
  }, [activeFilter, searchQuery]);

  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  return (
    <section id="skills" className="relative px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-[#090d14]">
      {/* Anchor alias for #stack */}
      <span id="stack" className="absolute -top-10"></span>

      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400"></span>
              Technical Competencies Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              All Technical Skills (From Latest Resume)
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              100% verified against <strong className="text-white font-mono">SDE Latest.pdf</strong>. Categorized across 11 disciplines with prioritized backend engineering competencies.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="rounded-full border border-sky-500/30 bg-sky-950/40 px-3 py-1 text-sky-300 font-bold">
              {totalSkillsCount} Verified Skills
            </span>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-950/40 px-3 py-1 text-emerald-400 font-bold">
              11 Categories
            </span>
          </div>
        </div>

        {/* 1. VISUAL PRIORITY: Core Java Backend & Distributed Systems Showcase */}
        <div className="rounded-3xl border border-sky-500/40 bg-gradient-to-b from-sky-950/20 via-[#0f1420] to-[#0f1420] p-6 sm:p-8 shadow-2xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-500/20 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400 animate-ping"></span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-sky-400">
                  Primary Profile Focus
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Java Backend & Distributed Systems Architecture
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full shrink-0 self-start sm:self-auto">
              Production & Internship Tested
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Specialized in architecting high-throughput REST APIs, stateless JWT authorization, and layered services in <strong className="text-white font-mono">Java 21 & Spring Boot 3</strong> with relational persistence in <strong className="text-white font-mono">MySQL & JPA/Hibernate</strong>.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-1">
            {backendCoreSkills.map((skill, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-sky-500/30 bg-slate-900/80 p-4 space-y-1 hover:border-sky-400 hover:bg-slate-900 transition-all shadow-md group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 font-semibold">
                    {skill.tag}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  {skill.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls: Category Filter Tabs & Instant Skill Search */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs w-full md:w-auto">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  type="button"
                  className={`px-3 py-1.5 rounded-full transition-all cursor-pointer font-medium ${
                    activeFilter === tab.id
                      ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                      : 'border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Quick Search Input */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search skills (e.g. Kafka, JWT, Redis)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-xs text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2. Categorized Skill Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayedCategories.map((cat) => (
            <article
              key={cat.id}
              className="rounded-3xl border border-white/10 bg-[#0f1420]/90 backdrop-blur-md p-6 space-y-5 hover:border-sky-500/30 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{cat.icon}</span>
                    <h3 className="font-bold text-white text-base leading-snug">
                      {cat.category}
                    </h3>
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${cat.badgeColor} font-semibold shrink-0`}>
                    {cat.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {cat.description}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => {
                    const isHighlighted = skill.priority;
                    return (
                      <div
                        key={sIdx}
                        className={`rounded-xl border px-3 py-2 flex flex-col transition-all ${
                          isHighlighted
                            ? 'border-sky-500/40 bg-sky-950/20 text-white shadow-sm hover:border-sky-400'
                            : 'border-white/10 bg-black/40 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1.5 font-mono text-xs font-semibold">
                          <span className={isHighlighted ? 'text-sky-300' : 'text-slate-200'}>
                            {skill.name}
                          </span>
                          {isHighlighted && (
                            <span className="text-[9px] font-bold text-sky-400 bg-sky-500/10 px-1 py-0.2 rounded">
                              ★
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 font-mono mt-0.5 leading-tight">
                          {skill.note}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Verified in SDE Latest.pdf</span>
                <span className="text-emerald-400 font-bold">✓ Source of Truth</span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty Search State */}
        {displayedCategories.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-black/40 p-8 text-center space-y-2">
            <p className="text-sm font-mono text-slate-300">No skills found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="text-xs font-mono text-sky-400 hover:underline"
            >
              Reset filters & search ↺
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
