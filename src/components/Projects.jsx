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
          <p className="mt-1 text-sm text-slate-300">Production-grade microservices, multi-layer fraud detection engines, and RAG AI pipelines.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          
          {/* Project 1: Credential Validator Platform */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between border-white/15 hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">PROJECT 01</span>
                <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-0.5 text-xs font-mono text-emerald-300 font-bold">
                  Spring Boot 3 + FastAPI + Solidity
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
                  <span>Built a microservices credential validation platform (Spring Boot 3, FastAPI, React 18 + TypeScript, Solidity) running as five services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Engineered a 7-layer fraud detection engine using Tesseract OCR, OpenCV, SHA-256 hashing, and Merkle root proofs on a local Ethereum (Hardhat) network to detect modified PDFs within seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Developed role-based REST APIs with Spring Security (JWT), multi-tenant MySQL schemas, ZXing QR codes, and PDF/ZIP batch verification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Tested on 20 genuine and 20 tampered files (95% detection accuracy across grade, seal, and hash edits); batch verification of 50 documents completes in about 20 seconds.</span>
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

          {/* Project 2: RAG Platform */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5 flex flex-col justify-between border-white/15 hover:border-emerald-500/40 transition-all shadow-xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-bold">PROJECT 02</span>
                <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-0.5 text-xs font-mono text-cyan-300 font-bold">
                  Python + LangChain + FAISS + ChromaDB
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-white">RAG Platform – Document Question Answering</h3>
                <p className="text-xs text-slate-300 font-mono mt-1">Document-Grounded AI Question Answering System</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">Python</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">LangChain</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">FAISS</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">ChromaDB</span>
                <span className="rounded-md bg-white/10 border border-white/20 px-2.5 py-0.5 text-xs text-white font-mono">Vector Embeddings</span>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-200 leading-relaxed pt-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Built a RAG application with Python, LangChain, and vector embeddings for document-grounded question answering.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Implemented document chunking, embedding generation, and semantic retrieval using FAISS and ChromaDB to improve answer accuracy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold mt-0.5">▹</span>
                  <span>Performed data cleaning, exploratory analysis, and statistical validation to prepare datasets.</span>
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-2 rounded-xl bg-white/5 p-3 border border-white/10">
                <div>
                  <p className="text-xs font-mono text-cyan-400 font-bold">Vector DB</p>
                  <p className="text-[10px] text-slate-300">FAISS & ChromaDB</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-emerald-400 font-bold">LangChain</p>
                  <p className="text-[10px] text-slate-300">RAG Pipeline</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-amber-400 font-bold">Semantic</p>
                  <p className="text-[10px] text-slate-300">Retrieval & Chunking</p>
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
