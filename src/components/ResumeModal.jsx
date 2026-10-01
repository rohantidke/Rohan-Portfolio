import React from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-xl">
      <div className="w-full max-w-5xl max-h-[96vh] rounded-2xl bg-black border border-emerald-500/50 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="bg-black px-4 py-3 border-b border-white/10 flex items-center justify-between shrink-0 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span onClick={onClose} className="h-3 w-3 rounded-full bg-red-500 cursor-pointer"></span>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span className="font-mono text-xs sm:text-sm font-bold text-emerald-400 ml-2">📄 Rohan_Tidke_Resume.pdf (Exact Uploaded PDF)</span>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href="/Rohan_Tidke_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs text-white hover:bg-white/20 font-mono transition-colors font-bold cursor-pointer inline-flex items-center gap-1.5"
            >
              ↗ Open Full PDF
            </a>
            <a 
              href="/Rohan_Tidke_Resume.pdf" 
              download="Rohan_Tidke_Resume.pdf"
              className="rounded-full bg-emerald-500 px-4 py-1.5 text-xs text-slate-950 hover:bg-emerald-400 font-mono transition-all font-bold cursor-pointer inline-flex items-center gap-1.5 shadow-lg"
            >
              ⬇ Download Original PDF
            </a>
            <button onClick={onClose} className="text-slate-400 hover:text-white text-lg ml-2 cursor-pointer font-bold">✕</button>
          </div>
        </div>

        {/* EXACT ORIGINAL PDF EMBED VIEWER */}
        <div className="flex-1 overflow-hidden p-2 sm:p-4 bg-black/90 flex justify-center items-center">
          <iframe 
            src="/Rohan_Tidke_Resume.pdf#toolbar=1" 
            title="Rohan Tidke Resume PDF"
            className="w-full h-[82vh] rounded-xl border border-white/15 shadow-2xl bg-white"
          />
        </div>

      </div>
    </div>
  );
}
