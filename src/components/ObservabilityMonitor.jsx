import React from 'react';

export default function ObservabilityMonitor() {
  return (
    <section id="observability" className="px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-black">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        
        <div>
          <span className="font-mono text-xs text-white font-bold uppercase tracking-widest">Real-time Telemetry</span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">Observability & Health Dashboard</h2>
          <p className="text-sm text-white mt-1">Simulated Prometheus/CloudWatch cluster health and p99 latency metrics.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="glass-card rounded-2xl p-4 space-y-2 border-white/15">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white">spring-auth-service</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-white font-mono">99.98% <span className="text-xs text-emerald-400">UP</span></p>
            <p className="text-[11px] text-white">Latency: <strong className="text-white">14ms</strong> · JWT Security</p>
          </div>

          <div className="glass-card rounded-2xl p-4 space-y-2 border-white/15">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white">fastapi-ocr-service</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-white font-mono">99.92% <span className="text-xs text-emerald-400">UP</span></p>
            <p className="text-[11px] text-white">Latency: <strong className="text-white">110ms</strong> · Tesseract Engine</p>
          </div>

          <div className="glass-card rounded-2xl p-4 space-y-2 border-white/15">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white">solidity-merkle-node</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-white font-mono">100.0% <span className="text-xs text-emerald-400">UP</span></p>
            <p className="text-[11px] text-white">Latency: <strong className="text-white">35ms</strong> · Ethereum Proofs</p>
          </div>

          <div className="glass-card rounded-2xl p-4 space-y-2 border-white/15">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-white">langchain-rag-service</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-white font-mono">99.95% <span className="text-xs text-emerald-400">UP</span></p>
            <p className="text-[11px] text-white">Latency: <strong className="text-white">68ms</strong> · FAISS Vector Store</p>
          </div>

        </div>

      </div>
    </section>
  );
}
