import React from 'react';

export default function ObservabilityMonitor() {
  return (
    <section id="observability" className="px-5 py-14 md:px-8 md:py-20 border-t border-[#263449] bg-[#0F172A]">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        
        <div>
          <span className="font-mono text-xs text-[#22D3EE] font-bold uppercase tracking-widest">Real-time Telemetry</span>
          <h2 className="text-3xl font-bold text-[#F8FAFC] tracking-tight mt-1">Observability & Health Dashboard</h2>
          <p className="text-sm text-[#CBD5E1] mt-1">Simulated Prometheus/CloudWatch cluster health and p99 latency metrics.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="rounded-2xl p-4 space-y-2 bg-[#111C32] border border-[#263449] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#CBD5E1]">spring-auth-service</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-[#F8FAFC] font-mono">99.98% <span className="text-xs text-[#22D3EE]">UP</span></p>
            <p className="text-[11px] text-[#94A3B8]">Latency: <strong className="text-[#F8FAFC]">14ms</strong> · JWT Security</p>
          </div>

          <div className="rounded-2xl p-4 space-y-2 bg-[#111C32] border border-[#263449] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#CBD5E1]">fastapi-ocr-service</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-[#F8FAFC] font-mono">99.92% <span className="text-xs text-[#22D3EE]">UP</span></p>
            <p className="text-[11px] text-[#94A3B8]">Latency: <strong className="text-[#F8FAFC]">110ms</strong> · Tesseract Engine</p>
          </div>

          <div className="rounded-2xl p-4 space-y-2 bg-[#111C32] border border-[#263449] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#CBD5E1]">solidity-merkle-node</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-[#F8FAFC] font-mono">100.0% <span className="text-xs text-[#22D3EE]">UP</span></p>
            <p className="text-[11px] text-[#94A3B8]">Latency: <strong className="text-[#F8FAFC]">35ms</strong> · Ethereum Proofs</p>
          </div>

          <div className="rounded-2xl p-4 space-y-2 bg-[#111C32] border border-[#263449] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#CBD5E1]">langchain-rag-service</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-lg font-bold text-[#F8FAFC] font-mono">99.95% <span className="text-xs text-[#22D3EE]">UP</span></p>
            <p className="text-[11px] text-[#94A3B8]">Latency: <strong className="text-[#F8FAFC]">68ms</strong> · FAISS Vector Store</p>
          </div>

        </div>

      </div>
    </section>
  );
}
