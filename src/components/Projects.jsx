import React from 'react';

export default function Projects({ onOpenCaseStudy }) {
  return (
    <section id="projects" className="px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-black">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        <div>
          <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Featured Engineering Systems
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">Featured Projects</h2>
          <p className="mt-1 text-sm text-slate-300">Production-grade distributed microservices, multi-layer fraud detection engines, and full-stack RAG pipelines.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Project 1: Credential Validator Platform */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between border-white/15 hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">PROJECT 01</span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-0.5 text-xs font-mono text-emerald-300 font-bold">
                  Spring Boot 3 + FastAPI + React + Solidity
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">Credential Validator Platform</h3>
                <p className="text-xs text-slate-300 font-mono mt-1">Microservices-Based Fraud Detection System</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">Spring Boot 3</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">FastAPI</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">React</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">TypeScript</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">MySQL</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">Solidity</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-200 leading-relaxed pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Developed a <strong>7-layer fraud engine</strong> using Tesseract OCR, OpenCV, SHA-256, and Merkle-root proofs on an Ethereum/Hardhat network, detecting tampered PDFs with <strong>95% accuracy</strong> across a 40-document test suite and verifying 50 documents in ∼20 seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Architected a distributed system of <strong>5 independent microservices</strong> (Spring Boot 3, FastAPI, React), integrating JWT-secured RBAC endpoints, multi-tenant MySQL schemas, ZXing QR generation, and automated PDF/ZIP batch verification.</span>
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/5 p-3 border border-white/10">
                <div>
                  <p className="text-xs font-mono text-emerald-400 font-bold">95% Accuracy</p>
                  <p className="text-[10px] text-slate-300">Fraud Engine</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-cyan-400 font-bold">5 Microservices</p>
                  <p className="text-[10px] text-slate-300">Architecture</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-amber-400 font-bold">50 Docs / 20s</p>
                  <p className="text-[10px] text-slate-300">Batch Verification</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <button 
                onClick={() => onOpenCaseStudy('credential')} 
                className="w-full rounded-full bg-emerald-500/10 border border-emerald-500/30 py-2.5 text-xs text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all font-bold font-mono cursor-pointer"
              >
                🔍 Read Architecture Case Study
              </button>
            </div>
          </div>

          {/* Project 2: Full-Stack RAG Chat Platform */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between border-white/15 hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">PROJECT 02</span>
                <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-0.5 text-xs font-mono text-cyan-300 font-bold">
                  Next.js + Spring Boot + FastAPI + ChromaDB
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">Full-Stack RAG Chat Platform</h3>
                <p className="text-xs text-slate-300 font-mono mt-1">AI Retrieval-Augmented Generation & Distributed Microservices</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">Next.js</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">Spring Boot</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">FastAPI</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">LangChain</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">ChromaDB</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">FAISS</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-200 leading-relaxed pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Engineered an optimized retrieval pipeline using page-aware chunking, ChromaDB, and cross-encoder reranking, achieving <strong>83.3% Recall@5, 0.83 MRR, 100% correct abstention</strong>, and a <strong>76 ms average latency</strong> on a golden evaluation set.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Architected a decoupled system across <strong>3 microservices</strong>, implementing a Next.js frontend, a Spring Boot API gateway with JWT security and rate limiting, and a FastAPI backend with SSE-based streaming responses.</span>
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/5 p-3 border border-white/10">
                <div>
                  <p className="text-xs font-mono text-cyan-400 font-bold">83.3% Recall@5</p>
                  <p className="text-[10px] text-slate-300">0.83 MRR Score</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-emerald-400 font-bold">3 Microservices</p>
                  <p className="text-[10px] text-slate-300">API Gateway + SSE</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-amber-400 font-bold">76 ms Latency</p>
                  <p className="text-[10px] text-slate-300">FastAPI Pipeline</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <button 
                onClick={() => onOpenCaseStudy('rag')} 
                className="w-full rounded-full bg-cyan-500/10 border border-cyan-500/30 py-2.5 text-xs text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 transition-all font-bold font-mono cursor-pointer"
              >
                🔍 Read Architecture Case Study
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
