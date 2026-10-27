import React, { useState } from 'react';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' or 'doc'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-[#000000]/80 backdrop-blur-md">
      <div className="w-full max-w-5xl max-h-[96vh] rounded-2xl bg-[#080808] border border-[#262626] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="bg-[#101010] px-4 py-3 border-b border-[#262626] flex items-center justify-between shrink-0 flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span onClick={onClose} className="h-3 w-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer" title="Close"></span>
            <span className="h-3 w-3 rounded-full bg-amber-500/80"></span>
            <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
            <span className="font-mono text-xs sm:text-sm font-bold text-[#FFFFFF] ml-2">📄 Rohan_Tidke_Resume.pdf</span>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 rounded-full border border-[#262626] bg-[#000000] p-1 font-mono text-xs">
            <button
              onClick={() => setViewMode('pdf')}
              className={`px-3 py-1 rounded-full transition-colors font-medium cursor-pointer ${
                viewMode === 'pdf' ? 'bg-[#3B82F6] text-[#FFFFFF]' : 'text-[#A1A1AA] hover:text-[#FFFFFF]'
              }`}
            >
              📄 PDF Embed
            </button>
            <button
              onClick={() => setViewMode('doc')}
              className={`px-3 py-1 rounded-full transition-colors font-medium cursor-pointer ${
                viewMode === 'doc' ? 'bg-[#3B82F6] text-[#FFFFFF]' : 'text-[#A1A1AA] hover:text-[#FFFFFF]'
              }`}
            >
              📝 Document View
            </button>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href="/Rohan_Tidke_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border border-[#262626] bg-[#000000] px-4 py-1.5 text-xs text-[#D4D4D8] hover:text-[#FFFFFF] hover:border-[#3F3F46] font-mono transition-colors font-medium cursor-pointer inline-flex items-center gap-1.5"
            >
              ↗ Open Full PDF
            </a>
            <a 
              href="/Rohan_Tidke_Resume.pdf" 
              download="Rohan_Tidke_Resume.pdf"
              className="rounded-full bg-[#3B82F6] px-4 py-1.5 text-xs text-[#FFFFFF] hover:bg-[#60A5FA] font-mono transition-colors font-medium cursor-pointer inline-flex items-center gap-1.5 shadow-sm"
            >
              ⬇ Download Original PDF
            </a>
            <button onClick={onClose} className="text-[#A1A1AA] hover:text-[#FFFFFF] text-lg ml-2 cursor-pointer font-bold">✕</button>
          </div>
        </div>

        {/* MODAL CONTENT */}
        {viewMode === 'pdf' ? (
          /* EXACT ORIGINAL PDF EMBED VIEWER */
          <div className="flex-1 overflow-hidden p-2 sm:p-4 bg-[#000000] flex justify-center items-center">
            <object
              data="/Rohan_Tidke_Resume.pdf#toolbar=1"
              type="application/pdf"
              className="w-full h-[82vh] rounded-xl border border-[#262626] shadow-2xl bg-white"
            >
              <iframe 
                src="/Rohan_Tidke_Resume.pdf#toolbar=1" 
                title="Rohan Tidke Resume PDF"
                className="w-full h-[82vh] rounded-xl border border-[#262626] shadow-2xl bg-white"
              >
                <div className="p-8 text-center text-[#D4D4D8] space-y-4">
                  <p>Your browser does not support inline PDF viewing.</p>
                  <a 
                    href="/Rohan_Tidke_Resume.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block bg-[#3B82F6] text-[#FFFFFF] font-bold px-4 py-2 rounded-lg hover:bg-[#60A5FA] transition-colors"
                  >
                    Open PDF in New Tab
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        ) : (
          /* EXACT PIXEL-PERFECT HIGH-FIDELITY DOCUMENT VIEW */
          <div className="flex-1 overflow-y-auto p-3 sm:p-6 bg-[#000000] flex justify-center items-start">
            <div 
              style={{ 
                backgroundColor: '#ffffff', 
                color: '#000000',
                fontFamily: '"Computer Modern", "Times New Roman", Georgia, serif'
              }}
              className="w-full max-w-[800px] p-6 sm:p-10 shadow-2xl text-[11px] sm:text-[11.5px] leading-relaxed select-text text-black my-auto space-y-3 border border-slate-300 rounded-sm"
            >
              {/* Header */}
              <div className="text-center space-y-0.5">
                <h1 style={{ color: '#000000' }} className="text-2xl sm:text-3xl font-bold tracking-tight">Rohan Tidke</h1>
                <p style={{ color: '#000000' }} className="text-[11px]">
                  Pune, India &nbsp;|&nbsp; +91-8208391705 &nbsp;|&nbsp; <a href="mailto:rohantidke6086@gmail.com" style={{ color: '#000000' }} className="hover:underline">rohantidke6086@gmail.com</a>
                </p>
                <p style={{ color: '#000000' }} className="text-[11px]">
                  <a href="https://linkedin.com/in/rohan-tidke-31510a26b" target="_blank" rel="noopener noreferrer" style={{ color: '#000000' }} className="hover:underline">linkedin.com/in/rohan-tidke-31510a26b</a> &nbsp;|&nbsp; <a href="https://github.com/rohantidke" target="_blank" rel="noopener noreferrer" style={{ color: '#000000' }} className="hover:underline">github.com/rohantidke</a> &nbsp;|&nbsp; Portfolio
                </p>
              </div>

              <hr className="border-t border-black my-1.5" />

              {/* Summary */}
              <div className="space-y-1">
                <h2 style={{ color: '#000000', borderColor: '#000000' }} className="font-bold text-[12.5px] border-b pb-0.5">
                  Summary
                </h2>
                <p style={{ color: '#000000' }} className="text-justify text-[11px] leading-relaxed">
                  Computer Engineering student (B.E. graduating 2027, CGPA 8.5) with hands-on software development experience building backend and full-stack applications using Java, Spring Boot, REST APIs, and microservices. Built 37 REST endpoints during an internship and solved 120+ LeetCode problems, with strong foundations in DSA, OOP, backend development, and problem solving.
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-1">
                <h2 style={{ color: '#000000', borderColor: '#000000' }} className="font-bold text-[12.5px] border-b pb-0.5">
                  Technical Skills
                </h2>
                <div style={{ color: '#000000' }} className="space-y-0.5 text-[11px]">
                  <p><strong>Programming Languages:</strong> Java (Primary), Python, JavaScript, C++, SQL</p>
                  <p><strong>Backend Development:</strong> Spring Boot 3, Spring MVC, Spring Security (JWT), REST APIs, Microservices</p>
                  <p><strong>Persistence & Databases:</strong> JPA, Hibernate, MySQL, PostgreSQL, MongoDB, Redis</p>
                  <p><strong>Messaging & API Documentation:</strong> Apache Kafka, Swagger/OpenAPI</p>
                  <p><strong>Cloud & DevOps:</strong> AWS (EC2, S3, VPC, IAM), Docker, Kubernetes, Jenkins, CI/CD</p>
                  <p><strong>Build & Development Tools:</strong> Maven, Gradle, Git, IntelliJ IDEA, Visual Studio Code</p>
                  <p><strong>Core Concepts:</strong> Data Structures & Algorithms, Object-Oriented Programming (OOP) , Computer Network (CN)</p>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-1">
                <h2 style={{ color: '#000000', borderColor: '#000000' }} className="font-bold text-[12.5px] border-b pb-0.5">
                  Experience
                </h2>
                <div className="space-y-2 text-[11px]">
                  {/* Internship 1 */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold" style={{ color: '#000000' }}>
                      <span>Java Full Stack Development Intern</span>
                      <span className="font-normal text-[10.5px]">Jan 2026 – Feb 2026</span>
                    </div>
                    <div className="flex justify-between items-baseline italic text-slate-800 text-[10.5px]">
                      <span>Shorat Innovations Pvt. Ltd., Pune</span>
                      <span>Cert. No. SI-INT2025/304</span>
                    </div>
                    <ul className="list-disc list-inside pl-2 space-y-0.5 text-[11px]" style={{ color: '#000000' }}>
                      <li>Engineered a full-stack Complaint Management System for 3 user roles, implementing 37 REST endpoints, 10 Spring Boot controllers, and 26 React pages across a layered controller–service–repository architecture (Java 21, JPA/Hibernate, React 19, Vite).</li>
                      <li>Architected role-based access control (RBAC) across 32 protected endpoints with stateless Spring Security and JWT, eliminating server-side session overhead for horizontal scalability and documenting contracts via OpenAPI/Swagger.</li>
                      <li>Resolved cross-database enum mapping errors between MySQL and PostgreSQL using custom JPA AttributeConverters, standardizing responses across 6 exception types via a global @RestControllerAdvice.</li>
                      <li>Streamlined deployment to Render, Supabase, and Vercel by authoring multi-stage Dockerfiles and containerizing services into a reproducible 3-container Docker Compose stack (MySQL, Spring Boot, Nginx/React).</li>
                    </ul>
                  </div>

                  {/* Internship 2 */}
                  <div>
                    <div className="flex justify-between items-baseline font-bold" style={{ color: '#000000' }}>
                      <span>Java Developer Intern (Industrial Training)</span>
                      <span className="font-normal text-[10.5px]">Aug 2023 – Nov 2023</span>
                    </div>
                    <p className="italic text-slate-800 text-[10.5px]">
                      Shri Software Solutions & Training Center (MSME, Govt. of India) | during Diploma
                    </p>
                    <ul className="list-disc list-inside pl-2 space-y-0.5 text-[11px]" style={{ color: '#000000' }}>
                      <li>Developed core business logic for complaint lifecycles, department routing, and SLA escalations, delivering 30 REST endpoints thoroughly validated via Postman within a modular Spring Boot architecture.</li>
                      <li>Implemented a polyglot persistence architecture, routing relational complaint and user transactions to MySQL via JPA/Hibernate while streaming high-volume audit logs to MongoDB via Spring Data.</li>
                      <li>Resolved 15+ authentication and validation edge cases, standardizing system-wide API error responses using centralized @ControllerAdvice and rigorous Git code reviews.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-1">
                <h2 style={{ color: '#000000', borderColor: '#000000' }} className="font-bold text-[12.5px] border-b pb-0.5">
                  Projects
                </h2>
                <div className="space-y-2 text-[11px]">
                  <div>
                    <p className="font-bold" style={{ color: '#000000' }}>
                      Credential Validator Platform – Microservices-Based Fraud Detection
                    </p>
                    <p className="italic text-slate-800 text-[10.5px] mb-0.5">
                      Spring Boot 3, FastAPI, React, TypeScript, MySQL, Solidity
                    </p>
                    <ul className="list-disc list-inside pl-2 space-y-0.5 text-[11px]" style={{ color: '#000000' }}>
                      <li>Developed a 7-layer fraud engine using Tesseract OCR, OpenCV, SHA-256, and Merkle-root proofs on an Ethereum/Hardhat network, detecting tampered PDFs with 95% accuracy across a 40-document test suite and verifying 50 documents in ∼20 seconds.</li>
                      <li>Architected a distributed system of 5 independent microservices (Spring Boot 3, FastAPI, React), integrating JWT-secured RBAC endpoints, multi-tenant MySQL schemas, ZXing QR generation, and automated PDF/ZIP batch verification.</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold" style={{ color: '#000000' }}>
                      Full-Stack RAG Chat Platform
                    </p>
                    <p className="italic text-slate-800 text-[10.5px] mb-0.5">
                      Next.js, Spring Boot, FastAPI, LangChain, ChromaDB, FAISS
                    </p>
                    <ul className="list-disc list-inside pl-2 space-y-0.5 text-[11px]" style={{ color: '#000000' }}>
                      <li>Engineered an optimized retrieval pipeline using page-aware chunking, ChromaDB, and cross-encoder reranking, achieving 83.3% Recall@5, 0.83 MRR, 100% correct abstention, and a 76 ms average latency on a golden evaluation set.</li>
                      <li>Architected a decoupled system across 3 microservices, implementing a Next.js frontend, a Spring Boot API gateway with JWT security and rate limiting, and a FastAPI backend with SSE-based streaming responses.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-1">
                <h2 style={{ color: '#000000', borderColor: '#000000' }} className="font-bold text-[12.5px] border-b pb-0.5">
                  Education
                </h2>
                <div className="space-y-1 text-[11px]">
                  <div>
                    <div className="flex justify-between items-baseline font-bold" style={{ color: '#000000' }}>
                      <span>Bharati Vidyapeeth’s College of Engineering, Lavale, Pune</span>
                      <span className="font-normal text-[10.5px]">Expected 2027</span>
                    </div>
                    <p className="italic text-slate-800 text-[10.5px]">
                      Bachelor of Engineering in Computer Engineering | <strong>CGPA: 8.5</strong>
                    </p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline" style={{ color: '#000000' }}>
                      <span>Diploma in Computer Engineering, Yogeshwari Polytechnic, Ambajogai – <strong>88.46%</strong></span>
                      <span className="text-[10.5px]">2021 – 2024</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline" style={{ color: '#000000' }}>
                      <span>SSC, Shri Yogeshwari Nutan Vidyalaya, Ambajogai – <strong>95.60%</strong></span>
                      <span className="text-[10.5px]">2021</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications & Training */}
              <div className="space-y-1">
                <h2 style={{ color: '#000000', borderColor: '#000000' }} className="font-bold text-[12.5px] border-b pb-0.5">
                  Certifications & Training
                </h2>
                <ul style={{ color: '#000000' }} className="list-disc list-inside space-y-0.5 text-[11px]">
                  <li>AWS Cloud Computing Workshop (EC2, S3, VPC, IAM) – Tech Bodhi, Pune (Oct 2024)</li>
                  <li>Advanced Java Programming – Shri Software Solutions & Training Center (Aug–Nov 2023)</li>
                  <li>AI Applications Workflow using MATLAB – BVCOE Lavale, with MathWorks (Jan–Feb 2025)</li>
                </ul>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
