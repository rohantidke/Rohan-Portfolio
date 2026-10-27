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
    <section id="skills" className="relative px-5 py-14 md:px-8 md:py-20 border-t border-[#263449] bg-[#0B1120]">
      {/* Anchor alias for #stack */}
      <span id="stack" className="absolute -top-10"></span>

      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs text-[#3B82F6] font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
              Technical Competencies Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              All Technical Skills (From Latest Resume)
            </h2>
            <p className="text-sm text-[#94A3B8] max-w-2xl">
              100% verified against <strong className="text-[#F8FAFC] font-mono">SDE Latest.pdf</strong>. Categorized across 11 disciplines with prioritized backend engineering competencies.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            <span className="rounded-full border border-[#263449] bg-[#111C32] px-3 py-1 text-[#22D3EE] font-bold">
              {totalSkillsCount} Verified Skills
            </span>
            <span className="rounded-full border border-[#263449] bg-[#111C32] px-3 py-1 text-[#3B82F6] font-bold">
              11 Categories
            </span>
          </div>
        </div>

        {/* 1. VISUAL PRIORITY: Core Java Backend & Distributed Systems Showcase */}
        <div className="rounded-2xl border border-[#263449] bg-[#111C32] p-6 sm:p-8 shadow-xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#263449] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#3B82F6]">
                  Primary Profile Focus
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC]">
                Java Backend & Distributed Systems Architecture
              </h3>
            </div>
            <span className="text-xs font-mono text-[#94A3B8] bg-[#0B1120] border border-[#263449] px-3 py-1 rounded-full shrink-0 self-start sm:self-auto">
              Production & Internship Tested
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
            Specialized in architecting high-throughput REST APIs, stateless JWT authorization, and layered services in <strong className="text-[#F8FAFC] font-mono">Java 21 & Spring Boot 3</strong> with relational persistence in <strong className="text-[#F8FAFC] font-mono">MySQL & JPA/Hibernate</strong>.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 pt-1">
            {backendCoreSkills.map((skill, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-[#263449] bg-[#0F172A] p-4 space-y-1 hover:border-[#3B82F6] transition-all shadow-sm group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs sm:text-sm font-bold text-[#F8FAFC] group-hover:text-[#3B82F6] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#111C32] border border-[#263449] text-[#22D3EE] font-semibold">
                    {skill.tag}
                  </span>
                </div>
                <p className="text-[11px] text-[#94A3B8] leading-snug">
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
                      ? 'bg-[#3B82F6] text-[#F8FAFC] font-bold shadow-sm'
                      : 'border border-[#263449] bg-[#111C32] text-[#CBD5E1] hover:text-[#F8FAFC] hover:border-[#3B82F6]'
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
                className="w-full rounded-full border border-[#263449] bg-[#0F172A] px-4 py-2 text-xs font-mono text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#3B82F6] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-xs text-[#94A3B8] hover:text-[#F8FAFC]"
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
              className="rounded-2xl border border-[#263449] bg-[#111C32] p-6 space-y-5 hover:border-[#3B82F6] transition-all shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-[#263449] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{cat.icon}</span>
                    <h3 className="font-bold text-[#F8FAFC] text-base leading-snug">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border border-[#263449] bg-[#0F172A] text-[#22D3EE] font-semibold shrink-0">
                    {cat.badge}
                  </span>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">
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
                            ? 'border-[#3B82F6]/40 bg-[#0F172A] text-[#F8FAFC] shadow-sm hover:border-[#3B82F6]'
                            : 'border-[#263449] bg-[#0B1120] text-[#CBD5E1] hover:border-[#263449]'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-1.5 font-mono text-xs font-semibold">
                          <span className={isHighlighted ? 'text-[#F8FAFC]' : 'text-[#CBD5E1]'}>
                            {skill.name}
                          </span>
                          {isHighlighted && (
                            <span className="text-[9px] font-bold text-[#3B82F6] bg-[#111C32] px-1 py-0.2 rounded">
                              ★
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-[#94A3B8] font-mono mt-0.5 leading-tight">
                          {skill.note}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="pt-3 border-t border-[#263449] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                <span>Verified in SDE Latest.pdf</span>
                <span className="text-[#22D3EE] font-semibold">✓ Source of Truth</span>
              </div>
            </article>
          ))}
        </div>

        {/* Empty Search State */}
        {displayedCategories.length === 0 && (
          <div className="rounded-2xl border border-[#263449] bg-[#111C32] p-8 text-center space-y-2">
            <p className="text-sm font-mono text-[#CBD5E1]">No skills found matching "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="text-xs font-mono text-[#3B82F6] hover:underline"
            >
              Reset filters & search ↺
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
