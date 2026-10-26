import React, { useState } from 'react';

export default function CaseStudyModal({ isOpen, onClose, type }) {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture', 'endpoints', 'tradeoffs'

  if (!isOpen) return null;

  const data = {
    credential: {
      title: 'Credential Fraud Detection Platform',
      category: 'Microservices Architecture & Cryptographic Verification',
      stack: 'Spring Boot 3 · FastAPI · React · MySQL · JWT · OCR · SHA-256 · Blockchain Merkle Proofs',
      summary: 'A microservices-based distributed system built to verify digital credentials and flag tampered documents with cryptographic certainty.',
      problem: 'Conventional degree and certificate validation relies heavily on either manual verification or unauthenticated database queries that fail to detect post-issuance alterations, pixel tampering, or forged metadata.',
      architecture: [
        {
          layer: 'Layer 1: Client & Ingress',
          details: 'React single-page application communicating via authenticated HTTP requests with Bearer JWT tokens. Supports bulk ZIP and PDF document uploads.'
        },
        {
          layer: 'Layer 2: Spring Boot 3 API Gateway & Core Service',
          details: 'Handles role-based access control (RBAC), multi-tenant MySQL credential records, token expiration, and asynchronous dispatching to the computer vision engine.'
        },
        {
          layer: 'Layer 3: FastAPI OCR & Computer Vision Microservice',
          details: 'Runs Tesseract OCR text extraction, OpenCV alignment algorithms, and SHA-256 cryptographic hashing to inspect pixel boundaries and detect spliced text.'
        },
        {
          layer: 'Layer 4: Cryptographic Ledger & Merkle Proofs',
          details: 'Calculates SHA-256 document digests and validates against Merkle tree roots to verify bit-level authenticity without storing sensitive personal data on-chain.'
        }
      ],
      diagram: `
+-------------------------------------------------------------------------+
|                              React Frontend                             |
|  (Document Upload / Credential Verification Portal / Admin Dashboard)   |
+------------------------------------+------------------------------------+
                                     |  HTTPS + JWT Bearer
                                     v
+-------------------------------------------------------------------------+
|                 Spring Boot 3 API Gateway & Core Service                |
|  - Role-Based Access Control (Student / Issuer / Auditor)               |
|  - Multi-Tenant Schema Isolation                                        |
|  - Global Exception Handling (@RestControllerAdvice)                    |
+-------------------+--------------------------------+--------------------+
                    |                                |
     REST / JSON    v                                v  Spring Data JPA
+----------------------------+      +-------------------------------------+
|  FastAPI OCR Microservice  |      |        MySQL Relational DB          |
|  - Tesseract OCR Pipeline  |      |  - User Credentials & Roles         |
|  - OpenCV Tamper Analysis  |      |  - Document Metadata & Audit Logs   |
|  - SHA-256 Digest Engine   |      +-------------------------------------+
+----------------------------+
                    |
                    v
+-------------------------------------------------------------------------+
|                  Blockchain Merkle Root Proof Engine                    |
|  - Cryptographic Hash Immutability & Tamper Alert Flagging             |
+-------------------------------------------------------------------------+
      `,
      tradeoffs: [
        {
          title: 'Microservices vs Monolith',
          reason: 'Computer vision and OCR are CPU-intensive tasks. Decoupling the Python FastAPI OCR service prevented compute spikes from choking the transactional Spring Boot API gateway.'
        },
        {
          title: 'Merkle Tree Roots vs Full Document On-Chain',
          reason: 'Storing raw PDF files or PII on-chain violates privacy and causes prohibitive transaction costs. Merkle roots enable instant O(log N) zero-knowledge tamper verification.'
        },
        {
          title: 'Stateless JWT Authentication',
          reason: 'Eliminated server session clustering, allowing individual Spring Boot instances to verify claims independently.'
        }
      ]
    },
    forensics: {
      title: 'Digital Image Forensics Tool (VeriPix)',
      category: 'Passive Digital Forensics & Evidence Auditing',
      stack: 'FastAPI · Python 3.10+ · OpenCV · SQLite · ReportLab · SHA-256 / MD5',
      summary: 'A passive forensics suite designed to examine image metadata, cryptographic file integrity, and manipulation anomalies.',
      problem: 'Detecting spliced or cloned regions in digital evidence is critical for investigations. Without multi-factor analysis, simple image filters fail to detect sophisticated forgery.',
      architecture: [
        {
          layer: 'Cryptographic Hashing & Chain of Custody',
          details: 'Computes MD5 and SHA-256 bit-level hashes immediately on upload to establish tamper-evident chain of custody conforming to ISO/IEC 27037 standards.'
        },
        {
          layer: 'Metadata & EXIF Inspection',
          details: 'Parses raw EXIF tags, GPS coordinate geocoding, and post-processing software signatures (identifying Adobe Photoshop, Canva, GIMP).'
        },
        {
          layer: 'Error Level Analysis (ELA)',
          details: 'Re-compresses images at known JPEG quantization quality (95%) and scales differentials to detect regions with divergent compression histories.'
        },
        {
          layer: 'Clone Detection & 2D FFT Analysis',
          details: 'Extracts spatial keypoints to discover copy-move cloned regions and computes 2D Fast Fourier Transforms to reveal resampling lattices.'
        },
        {
          layer: 'Automated Evidence Report Generation',
          details: 'Compiles diagnostic heatmaps, risk verdict scoring, and hash verifications into court-admissible PDF reports using ReportLab.'
        }
      ],
      diagram: `
+-------------------------------------------------------------------------+
|                         Forensic Web Workbench                          |
|         (Specimen Upload, Comparative Heatmaps, Telemetry Log)          |
+------------------------------------+------------------------------------+
                                     |  Multipart / REST
                                     v
+-------------------------------------------------------------------------+
|                   FastAPI Forensic Processing Engine                    |
|  - Asynchronous File Ingress & Chain of Custody Integrity Check         |
+-------------------+-------------------+-------------------+-------------+
                    |                   |                   |
                    v                   v                   v
      +-------------------+   +-------------------+   +-------------------+
      | Cryptographic     |   | Metadata & EXIF   |   | Error Level       |
      | Hashes (SHA-256)  |   | Inspection (GPS)  |   | Analysis (ELA)    |
      +-------------------+   +-------------------+   +-------------------+
                    |                   |                   |
                    +-------------------+-------------------+
                                        |
                                        v
      +-------------------+   +-------------------+   +-------------------+
      | Copy-Move Clone   |   | 2D FFT Frequency  |   | ReportLab PDF     |
      | Detection (ORB)   |   | Spectrum Engine   |   | Evidence Exporter |
      +-------------------+   +-------------------+   +-------------------+
                                        |
                                        v
                      +-----------------------------------+
                      |      SQLite Evidence Store        |
                      |  - Case History, Verdicts, Hashes |
                      +-----------------------------------+
      `,
      tradeoffs: [
        {
          title: 'Passive Analysis vs Watermarking',
          reason: 'Passive forensics requires no prior image modifications or watermarks, making it usable on any specimen received during evidence investigations.'
        },
        {
          title: 'Configurable ELA Scale Factor',
          reason: 'Different compression quality levels require adaptive differential scaling to minimize false-positive noise in forensic reports.'
        }
      ]
    },
    complaint: {
      title: 'Full-Stack Complaint Management System',
      category: 'Enterprise REST Architecture & Layered Domain Design',
      stack: 'Java 21 · Spring Boot 3 · Spring Security (JWT) · JPA/Hibernate · MySQL · React 19',
      summary: 'An auditable grievance lifecycle tracking and resolution platform with automated role separation and 37 RESTful endpoints.',
      problem: 'Organizations require strict separation between citizens filing complaints, department officers investigating them, and administrators monitoring SLAs, requiring resilient APIs with zero session leakage.',
      architecture: [
        {
          layer: 'Controller Layer (10 Spring Boot Controllers)',
          details: 'Exposes 37 RESTful endpoints, handles HTTP parameter validation with @Valid, and returns standardized ResponseEntity payloads.'
        },
        {
          layer: 'Security Filter Chain (Spring Security & JWT)',
          details: 'Protects 32 sensitive endpoints using stateless OncePerRequestFilter JWT token extraction and role-based authority mapping.'
        },
        {
          layer: 'Service & Domain Business Logic',
          details: 'Encapsulates complaint lifecycle state machine (SUBMITTED → ASSIGNED → IN_PROGRESS → RESOLVED → CLOSED) and SLA escalation rules.'
        },
        {
          layer: 'Repository & Persistence Layer (JPA / MySQL)',
          details: 'Leverages Spring Data JPA with custom AttributeConverters to handle cross-database enum mapping and transactional integrity.'
        },
        {
          layer: 'Centralized Exception Advice',
          details: '@RestControllerAdvice intercepts 6 exception categories (ResourceNotFound, AccessDenied, ValidationException) into standardized JSON contracts.'
        }
      ],
      diagram: `
+-------------------------------------------------------------------------+
|                         React 19 / Vite Frontend                        |
|        (Citizen Portal, Department Dashboard, Admin Analytics)          |
+------------------------------------+------------------------------------+
                                     |  REST HTTP / JSON + JWT
                                     v
+-------------------------------------------------------------------------+
|                  Spring Security Stateless Filter Chain                 |
|  - Bearer Token Validation & Role Authority Mapping (RBAC)             |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|             10 Layered Spring Boot Controllers (37 Endpoints)           |
|  - AuthController, ComplaintController, DepartmentController, etc.      |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                     Service Layer Business Logic                        |
|  - Complaint State Transitions, SLA Escalation, Input Validation        |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                    JPA / Hibernate Repository Layer                     |
|  - Custom AttributeConverters, Optimized SQL Queries, ACID Transactions |
+------------------------------------+------------------------------------+
                                     |
                                     v
+-------------------------------------------------------------------------+
|                         MySQL Relational Database                       |
+-------------------------------------------------------------------------+
      `,
      tradeoffs: [
        {
          title: 'Stateless JWT vs HTTP Sessions',
          reason: 'Stateless JWT tokens allowed horizontal scaling across server nodes without shared session replication or sticky routing.'
        },
        {
          title: 'Custom JPA AttributeConverters',
          reason: 'Standardized enum mappings to ensure clean portability across both MySQL and PostgreSQL without schema syntax clashes.'
        }
      ]
    },
    rag: {
      title: 'Full-Stack RAG Chat Platform',
      category: 'Retrieval-Augmented Generation & Distributed Microservices',
      stack: 'Spring Boot · FastAPI · Next.js · LangChain · ChromaDB · FAISS',
      summary: 'A citation-grounded RAG platform for document querying with low latency and zero ungrounded statements.',
      problem: 'Language models frequently generate hallucinated answers when queried on company manuals and private domain documents.',
      architecture: [
        {
          layer: 'Document Chunking & Vectorization',
          details: 'Performs page-aware semantic text chunking with 512-token overlap and generates vector embeddings.'
        },
        {
          layer: 'Vector Storage & Hybrid Retrieval',
          details: 'Stores high-dimensional vectors in ChromaDB/FAISS and performs cosine similarity search with cross-encoder reranking.'
        },
        {
          layer: 'Spring Boot API Gateway',
          details: 'Enforces rate limits, validates incoming user tokens, and securely orchestrates requests to the AI engine.'
        },
        {
          layer: 'FastAPI Streaming Response',
          details: 'Uses Server-Sent Events (SSE) to stream generation tokens with precise source citations in real-time.'
        }
      ],
      diagram: `
+-------------------------------------------------------------------------+
|                            Next.js Client UI                            |
|             (Real-time Token Stream & PDF Citation Viewer)              |
+------------------------------------+------------------------------------+
                                     |  HTTP / JWT
                                     v
+-------------------------------------------------------------------------+
|                       Spring Boot API Gateway                           |
|         (Token Rate Limiting, Request Auditing, User Auth)              |
+------------------------------------+------------------------------------+
                                     |  Internal RPC / REST
                                     v
+-------------------------------------------------------------------------+
|                       FastAPI RAG Inference Engine                      |
|  - Page-Aware Chunking Pipeline (512-token overlap)                     |
|  - Embedding Generation & Cosine Similarity Match                       |
|  - Cross-Encoder Re-Ranking Pipeline                                    |
|  - SSE Streaming Response Engine (76ms average latency)                |
+-------------------+--------------------------------+--------------------+
                    |                                |
                    v                                v
+----------------------------+      +-------------------------------------+
| ChromaDB / FAISS Vector DB |      |           LLM Inference             |
| - High-Dimensional Indices |      | - Strict Citation-Grounded Context  |
+----------------------------+      +-------------------------------------+
      `,
      tradeoffs: [
        {
          title: 'Page-Aware Chunking vs Fixed Token Window',
          reason: 'Retaining page and section metadata enabled exact citations and eliminated cross-section semantic bleed.'
        },
        {
          title: 'Server-Sent Events (SSE) vs WebSockets',
          reason: 'SSE is unidirectional over standard HTTP/2, reducing connection state overhead while providing instantaneous streaming.'
        }
      ]
    }
  };

  const current = data[type] || data.credential;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md">
      <div className="rounded-3xl border border-sky-500/40 bg-[#0f1420] text-slate-100 max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between gap-4 bg-slate-900/60">
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-sky-400 font-bold uppercase tracking-widest">
              SYSTEM ARCHITECTURE & CASE STUDY
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {current.title}
            </h3>
            <p className="text-xs font-mono text-slate-300">
              {current.stack}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 text-slate-400 hover:text-white hover:bg-white/20 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/10 bg-black/30 font-mono text-xs">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-3 px-2 border-b-2 font-semibold transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-sky-400 text-sky-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            📐 Architecture Diagram
          </button>

          <button
            onClick={() => setActiveTab('layers')}
            className={`pb-3 px-2 border-b-2 font-semibold transition-all cursor-pointer ${
              activeTab === 'layers'
                ? 'border-sky-400 text-sky-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            ⚙️ Component Layers
          </button>

          <button
            onClick={() => setActiveTab('tradeoffs')}
            className={`pb-3 px-2 border-b-2 font-semibold transition-all cursor-pointer ${
              activeTab === 'tradeoffs'
                ? 'border-sky-400 text-sky-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            ⚖️ Trade-offs & Decisions
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          
          {/* Problem Statement Box */}
          <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-1">
            <span className="font-mono text-xs text-amber-400 font-semibold uppercase tracking-wider">
              Problem & Engineering Objective:
            </span>
            <p className="text-slate-300 text-xs sm:text-sm">
              {current.problem}
            </p>
          </div>

          {activeTab === 'architecture' && (
            <div className="space-y-3">
              <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider">
                System Topology & Service Flow:
              </span>
              <pre className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-[10px] sm:text-xs text-sky-300 overflow-x-auto leading-tight shadow-inner">
                {current.diagram}
              </pre>
            </div>
          )}

          {activeTab === 'layers' && (
            <div className="space-y-3">
              <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider">
                Detailed Architectural Components:
              </span>
              <div className="space-y-3">
                {current.architecture.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-white/10 bg-slate-900/60 p-3.5 space-y-1">
                    <h4 className="font-mono text-xs font-bold text-white">{item.layer}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'tradeoffs' && (
            <div className="space-y-3">
              <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider">
                Engineering Trade-offs & Design Choices:
              </span>
              <div className="space-y-3">
                {current.tradeoffs.map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-white/10 bg-slate-900/60 p-3.5 space-y-1">
                    <h4 className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                      <span>✓</span> {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-slate-900/60 flex items-center justify-between">
          <span className="font-mono text-[11px] text-slate-400">
            Engineered by Rohan Tidke · Java Backend & Distributed Systems
          </span>
          <button
            onClick={onClose}
            className="rounded-full bg-sky-500 px-5 py-2 text-xs font-mono font-bold text-slate-950 hover:bg-sky-400 transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
