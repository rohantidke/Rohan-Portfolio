import React from 'react';

export default function CaseStudyModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="glass-card max-w-2xl w-full rounded-3xl p-6 space-y-5 border-emerald-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">✕</button>
        
        {type === 'credential' ? (
          <div className="space-y-4 text-xs text-slate-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-xl font-bold text-white">Credential Validator - Engineering Case Study</h3>
              <span className="rounded-full bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-0.5 text-xs text-emerald-300 font-mono">Spring Boot 3 + FastAPI</span>
            </div>
            <div className="space-y-3">
              <p><strong className="text-emerald-400 font-mono">1. Problem Statement:</strong> Standard PDF credential verification relies on database lookups which can be spoofed if records or uploaded file hashes are modified.</p>
              <p><strong class="text-emerald-400 font-mono">2. Architectural Solution:</strong> Engineered a 7-layer fraud detection engine combining Tesseract OCR, OpenCV, SHA-256 cryptographic hashing, and Ethereum Merkle root proofing.</p>
              <p><strong className="text-emerald-400 font-mono">3. Trade-offs & System Design:</strong> Microservices were isolated into 5 ports (Spring Boot API Gateway, Python FastAPI OCR Service, Solidity Node) to decouple heavy computer vision tasks from transactional API gateway routing.</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-slate-300">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-xl font-bold text-white">RAG Platform - Engineering Case Study</h3>
              <span className="rounded-full bg-cyan-950/60 border border-cyan-500/40 px-2.5 py-0.5 text-xs text-cyan-300 font-mono">Python + LangChain + Vector DB</span>
            </div>
            <div className="space-y-3">
              <p><strong className="text-cyan-400 font-mono">1. Problem Statement:</strong> Standard LLMs generate ungrounded answers (hallucinations) when asked about private unstructured documents.</p>
              <p><strong className="text-cyan-400 font-mono">2. Architectural Solution:</strong> Developed a document ingestion pipeline performing 512-token overlapping chunking, vector embedding generation, and cosine similarity vector retrieval using FAISS.</p>
              <p><strong className="text-cyan-400 font-mono">3. Measured Performance:</strong> Optimized prompt synthesis to achieve document-grounded question answering with zero ungrounded statements.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
