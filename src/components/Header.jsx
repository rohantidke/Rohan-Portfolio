import React, { useState, useEffect } from 'react';

export default function Header({ onOpenCLI, onOpenPalette, onOpenResume, showToast }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'coding', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Coding', href: '#coding', id: 'coding' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-3 md:px-8">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between rounded-full border border-[#262626] bg-[#000000]/90 backdrop-blur-md px-4 shadow-lg md:px-6">
        
        {/* Brand / Logo */}
        <a 
          href="#home" 
          className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight text-[#FFFFFF] hover:text-[#3B82F6] transition-colors"
        >
          <span className="h-2 w-2 rounded-full bg-[#22D3EE]"></span>
          <span>rohan.tidke</span>
        </a>

        {/* Desktop Navigation with Subtle Active Section Highlighting */}
        <nav className="hidden items-center gap-1 rounded-full border border-[#262626] bg-[#000000]/80 p-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.id}
                href={link.href} 
                className={`rounded-full px-3 py-1 text-xs font-mono transition-all ${
                  isActive 
                    ? 'bg-[#3B82F6]/15 text-[#3B82F6] font-semibold border border-[#3B82F6]/30' 
                    : 'text-[#E5E7EB] hover:text-[#FFFFFF] hover:bg-[#101010]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Quick Action Buttons */}
        <div className="hidden items-center gap-2 md:flex">
          {/* CLI Shortcut */}
          <button 
            onClick={onOpenCLI} 
            type="button" 
            className="flex items-center gap-1.5 rounded-full border border-[#262626] bg-[#101010] px-3 py-1 text-xs text-[#22D3EE] hover:border-[#3B82F6] transition-all font-mono"
            title="Open Interactive Terminal (~)"
          >
            <span className="font-bold">&gt;_</span>
            <span>CLI</span>
            <kbd className="rounded border border-[#262626] px-1 text-[10px] text-[#A1A1AA]">~</kbd>
          </button>

          {/* Search Palette Shortcut */}
          <button 
            onClick={onOpenPalette} 
            type="button" 
            className="flex items-center gap-1.5 rounded-full border border-[#262626] bg-[#101010] px-3 py-1 text-xs text-[#E5E7EB] hover:text-[#FFFFFF] hover:border-[#3B82F6] transition-colors font-mono"
            title="Search Commands (⌘K or Ctrl+K)"
          >
            <svg className="size-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <span>Search</span>
            <kbd className="rounded border border-[#262626] px-1 text-[10px] text-[#A1A1AA]">⌘K</kbd>
          </button>

          {/* View Resume Button */}
          <button 
            onClick={onOpenResume} 
            type="button"
            className="rounded-full border border-[#3B82F6]/50 bg-[#3B82F6]/10 px-3.5 py-1 text-xs font-semibold text-[#3B82F6] hover:bg-[#3B82F6] hover:text-[#FFFFFF] transition-all cursor-pointer font-mono"
          >
            📄 Resume
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="flex lg:hidden rounded-full p-2 text-[#E5E7EB] hover:bg-[#101010] transition-colors"
          aria-label="Toggle navigation menu"
        >
          <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed top-20 left-4 right-4 z-40 rounded-2xl border border-[#262626] bg-[#080808] p-5 space-y-3 lg:hidden shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-[#262626]">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                onClick={() => setMobileOpen(false)} 
                className={`block px-3 py-2 rounded-xl text-xs font-mono transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#3B82F6]/15 text-[#3B82F6] font-bold border border-[#3B82F6]/30'
                    : 'text-[#E5E7EB] hover:bg-[#101010] hover:text-[#FFFFFF]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2 font-mono">
            <button 
              onClick={() => { onOpenResume(); setMobileOpen(false); }} 
              className="w-full rounded-full bg-[#3B82F6] py-2.5 text-xs font-bold text-[#FFFFFF] shadow-sm cursor-pointer text-center hover:bg-[#2563EB] transition-colors"
            >
              📄 View Resume PDF
            </button>
            <a 
              href="/Rohan_Tidke_Resume.pdf" 
              download="Rohan_Tidke_Resume.pdf"
              onClick={() => setMobileOpen(false)}
              className="w-full rounded-full border border-[#262626] bg-[#101010] py-2 text-xs font-medium text-[#E5E7EB] hover:text-[#FFFFFF] hover:border-[#3B82F6] text-center transition-colors"
            >
              ⬇ Download Resume PDF
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
