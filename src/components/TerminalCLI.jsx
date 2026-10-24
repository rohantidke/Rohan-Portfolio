import React, { useState, useRef, useEffect } from 'react';

export default function TerminalCLI({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: '==================================================' },
    { type: 'system', text: '  🚀 ROHAN TIDKE DEVELOPER CLI [Version 2.0.0]' },
    { type: 'system', text: "  Type 'help' or 'ls' to view all available commands." },
    { type: 'system', text: '==================================================' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const outputRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const rawCmd = inputVal.trim();
    const cmd = rawCmd.toLowerCase();
    if (!cmd) return;

    const newLogs = [...history, { type: 'user', text: `> ${rawCmd}` }];

    switch (cmd) {
      case 'help':
      case '?':
      case 'ls':
      case 'dir':
        newLogs.push({
          type: 'output',
          text: `--------------------------------------------------
AVAILABLE CLI COMMANDS & SYSTEM DIRECTORIES:
--------------------------------------------------
  • about        - Full bio, background & summary of Rohan Tidke
  • skills       - Categorized technical skills (Languages, Backend, Cloud, DBs)
  • projects     - Detailed architecture breakdown of featured projects
  • exp          - Work experience & Java Full Stack internships
  • edu          - Academic degrees, CGPA (8.5), and college details
  • certs        - AWS Cloud Computing, Java & AI credentials
  • leetcode     - Problem-solving analytics (120+ solved) & profile
  • github       - Live GitHub telemetry, commits & repository stats
  • resume       - Resume document details & download link
  • contact      - Direct email, phone number (+91-8208391705) & socials
  • clear        - Clear terminal logs
  • sudo hire    - Recruit & accept software engineering offer!
  • exit         - Close interactive terminal window`
        });
        break;

      case 'about':
      case 'whoami':
      case 'bio':
        newLogs.push({
          type: 'output',
          text: `==================================================
ROHAN TIDKE - FULL STACK & BACKEND SOFTWARE ENGINEER
==================================================
• Status: Computer Engineering Student (B.E. graduating 2027, CGPA 8.5)
• Institution: Bharati Vidyapeeth’s College of Engineering, Lavale, Pune
• Professional Summary:
  Hands-on software development experience building backend and full-stack applications
  using Java, Spring Boot, REST APIs, and microservices. Built 37 REST endpoints during
  an internship and solved 120+ LeetCode problems, with strong foundations in DSA, OOP,
  backend development, and problem solving.`
        });
        break;

      case 'skills':
      case 'stack':
      case 'tech':
        newLogs.push({
          type: 'output',
          text: `==================================================
TECHNICAL SKILLS MATRIX (FROM OFFICIAL RESUME)
==================================================
[1] Programming Languages:
    • Java (Primary), Python, JavaScript, C++, SQL

[2] Backend Development:
    • Spring Boot 3, Spring MVC, Spring Security (JWT), REST APIs, Microservices

[3] Persistence & Databases:
    • JPA, Hibernate, MySQL, PostgreSQL, MongoDB, Redis

[4] Messaging & API Documentation:
    • Apache Kafka, Swagger/OpenAPI

[5] Cloud & DevOps:
    • AWS (EC2, S3, VPC, IAM), Docker, Kubernetes, Jenkins, CI/CD

[6] Build & Development Tools:
    • Maven, Gradle, Git, IntelliJ IDEA, Visual Studio Code

[7] Core Concepts:
    • Data Structures & Algorithms, Object-Oriented Programming (OOP), Computer Network (CN)`
        });
        break;

      case 'projects':
      case 'work':
      case 'repo':
        newLogs.push({
          type: 'output',
          text: `==================================================
FEATURED ENGINEERING PROJECTS
==================================================
[1] Credential Validator Platform – Microservices Fraud Detection
    • Stack: Spring Boot 3, FastAPI, React, TypeScript, MySQL, Solidity
    • 7-Layer Fraud Engine: Tesseract OCR, OpenCV, SHA-256, and Merkle-root proofs on an Ethereum/Hardhat network.
    • Results: 95% detection accuracy across 40-document test suite, verifying 50 documents in ∼20 seconds.
    • Architecture: 5 independent microservices with JWT-secured RBAC endpoints, multi-tenant MySQL schemas, ZXing QR generation, automated PDF/ZIP batch verification.

[2] Full-Stack RAG Chat Platform
    • Stack: Next.js, Spring Boot, FastAPI, LangChain, ChromaDB, FAISS
    • Optimized Pipeline: Page-aware chunking, ChromaDB, cross-encoder reranking.
    • Evaluation: 83.3% Recall@5, 0.83 MRR, 100% correct abstention, 76 ms average latency on golden evaluation set.
    • Architecture: Decoupled 3-microservice system (Next.js frontend, Spring Boot API gateway with JWT & rate limiting, FastAPI backend with SSE streaming).`
        });
        break;

      case 'exp':
      case 'experience':
        newLogs.push({
          type: 'output',
          text: `==================================================
PROFESSIONAL WORK EXPERIENCE
==================================================
[1] Java Full Stack Development Intern
    • Company: Shorat Innovations Pvt. Ltd., Pune (Cert. No. SI-INT2025/304)
    • Timeline: Jan 2026 – Feb 2026
    • Highlights:
      - Full-stack Complaint Management System for 3 user roles, 37 REST endpoints, 10 Spring Boot controllers, 26 React pages (Java 21, JPA/Hibernate, React 19, Vite).
      - Stateless RBAC across 32 protected endpoints using Spring Security + JWT, documented via OpenAPI/Swagger.
      - Resolved cross-database enum mapping errors with custom JPA AttributeConverters; standardized responses across 6 exception types via @RestControllerAdvice.
      - Containerized services into 3-container Docker Compose stack (MySQL, Spring Boot, Nginx/React); deployed to Render, Supabase, Vercel.

[2] Java Developer Intern (Industrial Training)
    • Company: Shri Software Solutions & Training Center (MSME, Govt. of India)
    • Timeline: Aug 2023 – Nov 2023
    • Highlights:
      - Developed core business logic for complaint lifecycles and SLA escalations; delivered 30 REST endpoints thoroughly validated via Postman.
      - Polyglot persistence: MySQL via JPA/Hibernate for relational data, MongoDB via Spring Data for high-volume audit logs.
      - Resolved 15+ authentication and validation edge cases via centralized @ControllerAdvice.`
        });
        break;

      case 'edu':
      case 'education':
        newLogs.push({
          type: 'output',
          text: `==================================================
ACADEMIC QUALIFICATIONS
==================================================
1. Bachelor of Engineering in Computer Engineering
   • Institution: Bharati Vidyapeeth’s College of Engineering, Lavale, Pune
   • Timeline: Expected 2027 | Grade: CGPA 8.5 / 10

2. Diploma in Computer Engineering
   • Institution: Yogeshwari Polytechnic, Ambajogai
   • Timeline: 2021 – 2024 | Grade: 88.46%

3. SSC Secondary Education
   • Institution: Shri Yogeshwari Nutan Vidyalaya, Ambajogai
   • Year: 2021 | Grade: 95.60%`
        });
        break;

      case 'certs':
      case 'certifications':
        newLogs.push({
          type: 'output',
          text: `==================================================
CERTIFICATIONS & TRAINING
==================================================
• AWS Cloud Computing Workshop (EC2, S3, VPC, IAM) – Tech Bodhi, Pune (Oct 2024)
• Advanced Java Programming – Shri Software Solutions & Training Center (Aug–Nov 2023)
• AI Applications Workflow using MATLAB – BVCOE Lavale, with MathWorks (Jan–Feb 2025)`
        });
        break;

      case 'leetcode':
      case 'lc':
        newLogs.push({
          type: 'output',
          text: `==================================================
LEETCODE PROBLEM SOLVING METRICS
==================================================
• Profile URL: https://leetcode.com/u/rohan6086/
• Username: @rohan6086
• Total Problems Solved: 120+ Solved
• Key Topics: Algorithms, Data Structures, Arrays, Hash Tables, Dynamic Programming, Strings`
        });
        break;

      case 'github':
      case 'gh':
        newLogs.push({
          type: 'output',
          text: `==================================================
LIVE GITHUB TELEMETRY
==================================================
• Profile URL: https://github.com/rohantidke
• Username: @rohantidke
• Repositories: Full-Stack Complaint Management, Credential Validator, RAG Pipeline`
        });
        break;

      case 'resume':
      case 'cv':
      case 'cat resume':
        newLogs.push({
          type: 'output',
          text: `==================================================
RESUME DOCUMENT INFORMATION
==================================================
• File Path: /Rohan_Tidke_Resume.pdf
• Status: 100% Exact Uploaded Resume Active
• Access: Click '📄 View Resume PDF' in top navigation or hero section to view & download.`
        });
        break;

      case 'contact':
      case 'email':
      case 'phone':
        newLogs.push({
          type: 'output',
          text: `==================================================
DIRECT CONTACT DIRECTORY
==================================================
• Location: Pune, India
• Direct Phone: +91-8208391705
• Email: rohantidke6086@gmail.com
• LinkedIn: https://linkedin.com/in/rohan-tidke-31510a26b
• GitHub: https://github.com/rohantidke`
        });
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'sudo hire':
      case 'hire':
        newLogs.push({
          type: 'success',
          text: `==================================================
🎉 OFFER ACCEPTED! 
Rohan Tidke is available for Software Engineering & Full Stack roles.
Direct Contact: rohantidke6086@gmail.com | +91-8208391705
==================================================`
        });
        break;

      case 'exit':
      case 'quit':
      case 'close':
        onClose();
        return;

      default:
        newLogs.push({
          type: 'error',
          text: `Command not found: '${rawCmd}'. Type 'help' or 'ls' for all available commands.`
        });
    }

    setHistory(newLogs);
    setInputVal('');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-default"
      onClick={() => inputRef.current && inputRef.current.focus()}
    >
      <div 
        className="w-full max-w-2xl rounded-2xl bg-black border border-emerald-500/40 shadow-2xl overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-black px-4 py-2.5 flex items-center justify-between border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="h-3 w-3 rounded-full bg-red-500 cursor-pointer" title="Close"></button>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span className="text-emerald-400 font-bold text-[11px] ml-2">rohan@developer-terminal:~</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white font-bold text-sm cursor-pointer">✕</button>
        </div>

        {/* Output Logs */}
        <div ref={outputRef} className="p-4 h-84 overflow-y-auto space-y-2 text-slate-300 select-text">
          {history.map((item, i) => (
            <div key={i}>
              {item.type === 'user' && <p className="text-white font-bold"><span className="text-emerald-400">&gt;</span> {item.text.replace('> ', '')}</p>}
              {item.type === 'system' && <p className="text-emerald-400">{item.text}</p>}
              {item.type === 'output' && <pre className="whitespace-pre-wrap font-mono text-slate-300 ml-2">{item.text}</pre>}
              {item.type === 'success' && <pre className="whitespace-pre-wrap font-mono text-emerald-400 font-bold ml-2">{item.text}</pre>}
              {item.type === 'error' && <p className="text-red-400 ml-2">{item.text}</p>}
            </div>
          ))}
        </div>

        {/* Form Input */}
        <form onSubmit={handleCommand} className="p-3 bg-black/90 border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">&gt;</span>
          <input 
            ref={inputRef}
            type="text" 
            autoFocus 
            value={inputVal} 
            onChange={(e) => setInputVal(e.target.value)} 
            placeholder="type a command (e.g. help, skills, projects, exp, contact)..." 
            className="w-full bg-transparent text-emerald-300 focus:outline-none placeholder-slate-600 font-mono text-xs"
          />
        </form>

      </div>
    </div>
  );
}
