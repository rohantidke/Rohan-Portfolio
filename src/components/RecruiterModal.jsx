import React from 'react';

export default function RecruiterModal({ isOpen, onClose, showToast }) {
  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText('rohantidke6086@gmail.com');
    showToast('rohantidke6086@gmail.com copied to clipboard!');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/80 backdrop-blur-md">
      <div className="max-w-xl w-full rounded-2xl p-6 space-y-5 bg-[#111C32] border border-[#263449] shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button onClick={onClose} className="absolute top-4 right-4 text-[#94A3B8] hover:text-[#F8FAFC]">
          ✕
        </button>

        <div className="flex items-center gap-3 border-b border-[#263449] pb-3">
          <div className="h-10 w-10 rounded-xl bg-[#0B1120] border border-[#263449] flex items-center justify-center text-[#22D3EE] font-bold">
            ⚡
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#F8FAFC]">Recruiter 1-Minute Fast-Track</h3>
            <p className="text-xs text-[#22D3EE] font-mono">Executive Candidate Overview · Rohan Tidke</p>
          </div>
        </div>

        <div className="space-y-3 text-xs text-[#CBD5E1]">
          <div className="p-3 rounded-xl bg-[#0B1120] border border-[#263449] space-y-1">
            <p className="font-bold text-[#F8FAFC] font-mono">🎯 Target Role & Availability</p>
            <p>Backend Engineer / Java Microservices Developer. Final-year Computer Engineering (CGPA 8.5, Graduating 2027).</p>
          </div>

          <div className="p-3 rounded-xl bg-[#0B1120] border border-[#263449] space-y-1">
            <p className="font-bold text-[#22D3EE] font-mono">🚀 Core Highlights</p>
            <ul className="space-y-1 list-disc list-inside text-[#CBD5E1]">
              <li><strong className="text-[#F8FAFC]">Spring Boot 3 & Microservices:</strong> 5-port local microservices architecture with JWT security & multi-tenant MySQL.</li>
              <li><strong className="text-[#F8FAFC]">7-Layer Fraud Engine:</strong> SHA-256 cryptographic hashing, OCR document scanning, and Ethereum Merkle root proofing.</li>
              <li><strong className="text-[#F8FAFC]">AI / RAG Integration:</strong> Document-grounded Q&A application using Python, LangChain, and vector embeddings.</li>
              <li><strong className="text-[#F8FAFC]">Problem Solving & Cloud:</strong> Solved 111+ LeetCode problems (50 Days Badge 2026).</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center font-mono">
            <div className="p-2.5 rounded-xl bg-[#0B1120] border border-[#263449]">
              <p className="text-[#3B82F6] font-bold text-sm">8.5 / 10</p>
              <p className="text-[10px] text-[#94A3B8]">Engineering CGPA</p>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0B1120] border border-[#263449]">
              <p className="text-[#22D3EE] font-bold text-sm">111 Solved</p>
              <p className="text-[10px] text-[#94A3B8]">LeetCode Profile</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-[#263449]">
          <a
            href="mailto:rohantidke6086@gmail.com?subject=Interview%20Inquiry%20-%20Rohan%20Tidke&body=Hi%20Rohan,%0A%0AWe%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
            className="flex-1 rounded-full bg-[#3B82F6] py-2.5 text-xs font-medium text-[#F8FAFC] hover:bg-[#2563EB] transition-colors text-center font-mono shadow-sm"
          >
            ✉ Email Candidate (Launch Gmail App)
          </a>
          <button onClick={onClose} className="rounded-full border border-[#263449] bg-[#0B1120] px-4 py-2.5 text-xs text-[#CBD5E1] hover:text-[#F8FAFC] hover:border-[#3B82F6] transition-colors font-mono">
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
