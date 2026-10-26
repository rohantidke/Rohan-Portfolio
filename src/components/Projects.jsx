import React, { useState } from 'react';

export default function Projects({ onOpenCaseStudy }) {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      id: 'credential',
      badge: 'FEATURED PROJECT 01',
      badgeColor: 'border-sky-500/30 text-sky-300 bg-sky-500/10',
      title: 'Credential Fraud Detection Platform',
      tagline: 'Microservices-Based Digital Credential Verification & Anti-Tampering Engine',
      problem: 'Educational institutions and employers struggle to verify digital credentials at scale, while fraudulent PDFs and tampered transcripts frequently evade conventional checksum or manual verification.',
      solution: 'Architected a distributed microservices platform combining Spring Boot 3 REST APIs, a FastAPI computer vision service, and SHA-256 cryptographic hashing with blockchain Merkle proofs to deliver end-to-end credential integrity verification.',
      techStack: [
        'Spring Boot 3',
        'FastAPI',
        'React',
        'MySQL',
        'JWT',
        'OCR (Tesseract)',
        'SHA-256',
        'Blockchain Merkle Proofs'
      ],
      keyFeatures: [
        'Role-Based Authentication & Authorization (RBAC): Secured API endpoints with stateless JWT tokens separating student, issuer, and auditor privileges.',
        'REST APIs Secured with JWT: Decoupled client requests through modular controllers with request validation and standardized JSON error responses.',
        'Multi-Tenant Data Management: Designed isolated relational schemas in MySQL for multi-institution credential management.',
        'Document Extraction & Verification Workflows: Automated OCR text extraction, QR payload parsing, and batch PDF/ZIP processing pipeline.',
        'Hash-Based Integrity Checks: Computed SHA-256 digests and Merkle-tree root proofs to flag modified bytes and pixel-level tampering.'
      ],
      contribution: 'Engineered the core Spring Boot 3 REST backend, designed the relational database schemas with JPA/Hibernate, built JWT authentication filters, and integrated the FastAPI OCR microservice.',
      architectureSnippet: 'Client (React) → Spring Boot Gateway (JWT Filter) → FastAPI OCR Engine → MySQL DB & Merkle Verifier',
      githubUrl: 'https://github.com/rohantidke',
      liveDemoUrl: null,
      stats: [
        { label: 'Detection Accuracy', value: '95%' },
        { label: 'Architecture', value: 'Microservices' },
        { label: 'Throughput', value: '50 Docs / 20s' }
      ]
    },
    {
      id: 'forensics',
      badge: 'FEATURED PROJECT 02',
      badgeColor: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10',
      title: 'Digital Image Forensics Tool (VeriPix)',
      tagline: 'Cryptographic Image Integrity, EXIF Auditing & Manipulation Analysis Suite',
      problem: 'Image manipulation (splicing, clone-stamping, metadata scrubbing) undermines digital evidence integrity in academic, investigative, and compliance contexts.',
      solution: 'Engineered a specialized forensics suite performing passive digital forensics across file integrity hashes, compression discrepancies, metadata anomalies, and frequency transforms.',
      techStack: [
        'FastAPI',
        'Python 3.10+',
        'OpenCV',
        'SQLite',
        'ReportLab (PDF)',
        'SHA-256 / MD5',
        'NumPy'
      ],
      keyFeatures: [
        'Metadata Extraction: Audited EXIF headers, camera model, software tags (flagging Photoshop/Canva/GIMP edits), and reverse GPS coordinates.',
        'Cryptographic Hash Calculation: Bit-level integrity verification using MD5 and SHA-256 to ensure chain-of-custody immutability.',
        'Error Level Analysis (ELA): Identified spliced regions by analyzing compression rate differentials and re-quantization artifacts.',
        'Copy-Move Clone Detection & FFT: Highlighted cloned image patches using feature clustering and computed 2D Fourier magnitude spectrums.',
        'Forensic Analysis Reports: Automated generation of court-admissible PDF evidence reports containing diagnostic heatmaps and tamper verdicts.'
      ],
      contribution: 'Implemented the FastAPI backend endpoints, engineered the ELA re-saving analysis algorithm, integrated SQLite evidence persistence, and built automated PDF report compilation.',
      architectureSnippet: 'FastAPI REST Ingress → OpenCV & NumPy Forensics Pipeline (ELA, FFT, Hashing) → SQLite Evidence Store → PDF Generator',
      githubUrl: 'https://github.com/rohantidke',
      liveDemoUrl: null,
      stats: [
        { label: 'Forensic Modules', value: '10 Techniques' },
        { label: 'Integrity Hashes', value: 'SHA-256 / MD5' },
        { label: 'Output', value: 'PDF Audit Reports' }
      ]
    },
    {
      id: 'complaint',
      badge: 'ADDITIONAL PROJECT 03',
      badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
      title: 'Full-Stack Complaint Management System',
      tagline: 'Multi-Tenant Grievance Lifecycle Tracking System with Stateless JWT & Layered Architecture',
      problem: 'Large organizations require robust, auditable grievance tracking systems that enforce strict role separation between citizens, department officers, and executive admins without session bottlenecks.',
      solution: 'Developed an enterprise-grade backend and web application featuring 37 REST endpoints, 10 Spring Boot controllers, and stateless Spring Security JWT authentication.',
      techStack: [
        'Java 21',
        'Spring Boot 3',
        'Spring Security (JWT)',
        'JPA / Hibernate',
        'MySQL',
        'React 19 / Vite',
        'OpenAPI / Swagger'
      ],
      keyFeatures: [
        '37 Layered REST Endpoints: Architected controller–service–repository pattern for complete grievance lifecycles, comments, and status transitions.',
        'Stateless RBAC Security: Configured 32 protected endpoints with stateless JWT verification eliminating server-side session overhead.',
        'Custom JPA Converters: Implemented AttributeConverters to ensure database portability and schema integrity.',
        'Centralized Exception Handling: Standardized error responses across 6 exception hierarchies using @RestControllerAdvice.',
        'Comprehensive API Documentation: Documented all data contracts and request schemas with Swagger / OpenAPI 3.'
      ],
      contribution: 'Built the entire Spring Boot backend, authored 37 REST endpoints, configured Spring Security filters, and developed the database schema and repository queries.',
      architectureSnippet: 'React 19 Client → Spring Security JWT Filter → 10 Spring Boot Controllers → JPA/Hibernate → MySQL Database',
      githubUrl: 'https://github.com/rohantidke',
      liveDemoUrl: null,
      stats: [
        { label: 'REST Endpoints', value: '37 Implemented' },
        { label: 'Controllers', value: '10 Spring Boot' },
        { label: 'Architecture', value: 'Layered RBAC' }
      ]
    },
    {
      id: 'rag',
      badge: 'ADDITIONAL PROJECT 04',
      badgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
      title: 'Full-Stack RAG Chat Platform',
      tagline: 'Retrieval-Augmented Generation & Distributed AI Semantic Search Platform',
      problem: 'General-purpose LLMs hallucinate when queried on domain-specific private manuals and lack verifiable citations.',
      solution: 'Architected a distributed microservices platform with page-aware text chunking, vector embeddings in ChromaDB/FAISS, and cross-encoder reranking to ensure citation-grounded generation.',
      techStack: [
        'Spring Boot',
        'FastAPI',
        'Next.js',
        'LangChain',
        'ChromaDB',
        'FAISS',
        'Python'
      ],
      keyFeatures: [
        'Page-Aware Semantic Chunking: Segmented multi-page PDF documents into overlapping chunks with source citation tracking.',
        'Vector Similarity Search: High-dimensional embeddings stored in ChromaDB/FAISS with cosine similarity matching.',
        'Spring Boot Gateway: Handled rate limiting, user authentication, and distributed request routing.',
        'FastAPI SSE Streaming: Implemented real-time token streaming via Server-Sent Events for minimal perceived user latency.'
      ],
      contribution: 'Architected the Spring Boot gateway service, engineered vector indexing workflows, and integrated citation grounding filters.',
      architectureSnippet: 'Next.js UI → Spring Boot API Gateway → FastAPI Vector Engine (ChromaDB) → SSE Stream Response',
      githubUrl: 'https://github.com/rohantidke',
      liveDemoUrl: null,
      stats: [
        { label: 'Recall@5', value: '83.3%' },
        { label: 'Average Latency', value: '76 ms' },
        { label: 'Pipeline', value: '3 Microservices' }
      ]
    }
  ];

  return (
    <section id="projects" className="relative px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-[#090d14]">
      <div className="mx-auto w-full max-w-6xl space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400"></span>
              Verified Software Engineering Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">Featured Projects</h2>
            <p className="mt-1 text-sm text-slate-400">
              Distributed microservices, anti-fraud engines, digital forensics, and layered REST API architectures.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span>Built with real codebases & production standards</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-10">
          {projects.map((proj, idx) => (
            <article 
              key={proj.id} 
              className="rounded-3xl border border-white/10 bg-[#0f1420]/90 backdrop-blur-md p-6 sm:p-8 space-y-6 hover:border-sky-500/40 transition-all shadow-xl"
            >
              {/* Card Top: Badges & Title */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className={`text-[11px] font-mono font-bold px-3 py-1 rounded-full border ${proj.badgeColor}`}>
                      {proj.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      ID: #{proj.id}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-sky-300 mt-0.5">
                    {proj.tagline}
                  </p>
                </div>

                {/* Quick Metrics */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                  {proj.stats.map((s, sIdx) => (
                    <div key={sIdx} className="rounded-xl border border-white/10 bg-black/40 px-3 py-1.5 text-center">
                      <p className="text-xs sm:text-sm font-mono font-bold text-white">{s.value}</p>
                      <p className="text-[10px] text-slate-400 font-sans">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="grid gap-4 md:grid-cols-2 text-xs sm:text-sm leading-relaxed">
                <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 space-y-1.5">
                  <p className="font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                    <span>⚠️</span> The Problem
                  </p>
                  <p className="text-slate-300">
                    {proj.problem}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-4 space-y-1.5">
                  <p className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span>💡</span> The Solution
                  </p>
                  <p className="text-slate-300">
                    {proj.solution}
                  </p>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="space-y-2">
                <p className="font-mono text-xs text-slate-400 uppercase tracking-wider">Technology Stack:</p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Implemented Features */}
              <div className="space-y-2 pt-1">
                <p className="font-mono text-xs text-slate-400 uppercase tracking-wider">Key Implemented Features:</p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {proj.keyFeatures.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <span className="text-sky-400 font-bold shrink-0 mt-0.5">▹</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Architecture Snippet Illustration */}
              <div className="rounded-xl border border-white/10 bg-black/60 p-3.5 space-y-1 font-mono text-xs">
                <p className="text-[11px] text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span>📐</span> Architecture Pipeline:
                </p>
                <p className="text-sky-300 text-[11px] sm:text-xs">
                  {proj.architectureSnippet}
                </p>
              </div>

              {/* Actual Contribution */}
              <div className="text-xs text-slate-400 pt-1">
                <strong className="text-slate-300 font-mono">My Contribution:</strong> {proj.contribution}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <span>View Repository ↗</span>
                  </a>

                  {proj.liveDemoUrl && (
                    <a
                      href={proj.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-xs font-mono text-sky-300 hover:bg-sky-500 hover:text-slate-950 transition-colors"
                    >
                      <span>Live Demo ↗</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => onOpenCaseStudy(proj.id)}
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-500/40 px-5 py-2 text-xs font-mono font-bold text-sky-300 hover:bg-sky-500 hover:text-slate-950 transition-all cursor-pointer shadow-md"
                >
                  <span>🔍 View Architecture & Deep Dive</span>
                  <span>→</span>
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
