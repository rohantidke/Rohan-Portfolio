import React from 'react';

export default function ObservabilityMonitor() {
  return (
    <section id="observability" className="px-5 py-14 md:px-8 md:py-20 border-t border-[#262626] bg-[#080808]">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        
        <div>
          <span className="font-mono text-xs text-[#22D3EE] font-bold uppercase tracking-widest">Real-time Telemetry</span>
          <h2 className="text-3xl font-bold text-[#FFFFFF] tracking-tight mt-1">Observability & Health Dashboard</h2>
          <p className="text-sm text-[#D4D4D8] mt-1">Simulated Prometheus/CloudWatch cluster health and p99 latency metrics.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="rounded-2xl p-4 space-y-2 bg-[#101010] border border-[#262626] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#D4D4D8]">spring-auth-service</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-[#FFFFFF] font-mono">99.98% <span className="text-xs text-[#22D3EE]">UP</span></p>
            <p className="text-[11px] text-[#A1A1AA]">Latency: <strong className="text-[#FFFFFF]">14ms</strong> · JWT Security</p>
          </div>

          <div className="rounded-2xl p-4 space-y-2 bg-[#101010] border border-[#262626] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#D4D4D8]">fastapi-ocr-service</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-[#FFFFFF] font-mono">99.92% <span className="text-xs text-[#22D3EE]">UP</span></p>
            <p className="text-[11px] text-[#A1A1AA]">Latency: <strong className="text-[#FFFFFF]">110ms</strong> · Tesseract Engine</p>
          </div>

          <div className="rounded-2xl p-4 space-y-2 bg-[#101010] border border-[#262626] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#D4D4D8]">solidity-merkle-node</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-[#FFFFFF] font-mono">100.0% <span className="text-xs text-[#22D3EE]">UP</span></p>
            <p className="text-[11px] text-[#A1A1AA]">Latency: <strong className="text-[#FFFFFF]">35ms</strong> · Ethereum Proofs</p>
          </div>

          <div className="rounded-2xl p-4 space-y-2 bg-[#101010] border border-[#262626] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#D4D4D8]">langchain-rag-service</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-[#FFFFFF] font-mono">99.95% <span className="text-xs text-[#22D3EE]">UP</span></p>
            <p className="text-[11px] text-[#A1A1AA]">Latency: <strong className="text-[#FFFFFF]">68ms</strong> · FAISS Vector Store</p>
          </div>

        </div>

      </div>
    </section>
  );
}
