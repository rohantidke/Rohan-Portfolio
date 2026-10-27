import React, { useState } from 'react';

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const items = [
    { label: '📁 View Credential Validator Platform', type: 'Project', href: '#projects' },
    { label: '📁 View Retrieval-Augmented Generation (RAG) Platform', type: 'Project', href: '#projects' },
    { label: '💼 Java Developer Intern - Shri Software Technologies', type: 'Experience', href: '#experience' },
    { label: '💼 Network Engineer Intern - Shri Software Technologies', type: 'Experience', href: '#experience' },
    { label: '⚡ Spring Boot 3, FastAPI, Kafka & AWS Matrix', type: 'Skills', href: '#stack' },
    { label: '🎓 B.E. Computer Engineering (Bharati Vidyapeeth)', type: 'Education', href: '#education' },
    { label: '✉ Contact Rohan Tidke (rohantidke6086@gmail.com)', type: 'Contact', href: '#contact' },
  ];

  const filtered = items.filter(i => i.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-[#000000]/80 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-2xl bg-[#101010] border border-[#262626] shadow-2xl overflow-hidden space-y-2">
        <div className="p-3 border-b border-[#262626] flex items-center gap-2">
          <svg className="size-4 text-[#A1A1AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <input 
            type="text" 
            autoFocus 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            placeholder="Search sections, projects, or skills..." 
            className="w-full bg-transparent text-sm text-[#FFFFFF] placeholder-[#A1A1AA]/60 focus:outline-none"
          />
          <button onClick={onClose} className="text-[10px] border border-[#262626] bg-[#161616] rounded px-1.5 py-0.5 text-[#A1A1AA]">ESC</button>
        </div>
        
        <div className="p-2 max-h-64 overflow-y-auto space-y-1 text-xs">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <a 
                key={idx} 
                href={item.href} 
                onClick={onClose} 
                className="flex items-center justify-between p-2 rounded-xl hover:bg-[#161616] text-[#E5E7EB] hover:text-[#FFFFFF] transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[10px] text-[#22D3EE]">{item.type}</span>
              </a>
            ))
          ) : (
            <p className="p-3 text-[#A1A1AA] text-center">No results found for "{query}"</p>
          )}
        </div>
      </div>
    </div>
  );
}
