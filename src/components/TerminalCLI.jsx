import React, { useState, useRef, useEffect } from 'react';

export default function TerminalCLI({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: '==================================================' },
    { type: 'system', text: '  🚀 ROHAN TIDKE DEVELOPER CLI [Version 1.0.0]' },
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
  • exp          - Work experience & Java Developer Internship details
  • edu          - Academic degrees, CGPA (8.5), and college details
  • certs        - AWS Certified Cloud Practitioner & technical credentials
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
ROHAN TIDKE - BACKEND DEVELOPER & COMPUTER ENGINEER
==================================================
• Status: Final-Year Computer Engineering Student (CGPA 8.5, Expected 2027)
• Institution: Bharati Vidyapeeth’s College of Engineering, Lavale, Pune
• Certification: AWS Certified Cloud Practitioner (2025)
• Summary:
  Computer Engineering student with internship experience building production
  REST APIs using Java and Spring Boot. Strong in Spring Security, JPA/Hibernate,
  SQL, and backend microservices architecture, with hands-on experience developing
  document verification systems & RAG AI pipelines. 120+ LeetCode problems solved.`
        });
        break;

      case 'skills':
      case 'stack':
      case 'tech':
        newLogs.push({
          type: 'output',
          text: `==================================================
TECHNICAL SKILLS MATRIX
==================================================
[1] Languages:
    • Java (Primary), Python, SQL, JavaScript, C++

[2] Backend & Frameworks:
    • Spring Boot 3, Spring MVC, Spring Security (JWT)
    • JPA / Hibernate, REST APIs, Microservices, FastAPI

[3] AI & Data Science:
    • RAG, LangChain, Vector Embeddings, Semantic Retrieval
    • Data Cleaning, Exploratory Data Analysis, NumPy, Pandas

[4] Databases:
    • MySQL, PostgreSQL, MongoDB

[5] Cloud & DevOps Tools:
    • AWS (Certified Cloud Practitioner), Docker, Git, Maven, JUnit, Postman, Swagger`
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
    • Architecture: 5 Microservices (Spring Boot 3, FastAPI, React 18 + TypeScript, Solidity)
    • 7-Layer Fraud Engine: Tesseract OCR, OpenCV, SHA-256 hashing, Merkle root proofs on local Ethereum (Hardhat).
    • Security & Batch Ops: Spring Security (JWT), multi-tenant MySQL schemas, ZXing QR codes, PDF/ZIP batch verification.
    • Verified Results: 95% detection accuracy across 20 genuine & 20 tampered files; batch verification of 50 documents completes in 20 seconds.

[2] RAG Platform – Document Question Answering
    • Stack: Python, LangChain, FAISS, ChromaDB
    • Pipeline: Document-grounded Q&A with document chunking, embedding generation, and semantic retrieval to maximize response accuracy.`
        });
        break;

      case 'exp':
      case 'experience':
        newLogs.push({
          type: 'output',
          text: `==================================================
PROFESSIONAL WORK EXPERIENCE
==================================================
• Role: Java Developer Intern
• Company: Shri Software Technologies
• Period: Jul 2023 – Oct 2023
• Key Responsibilities & Achievements:
  - Built REST APIs for a student management module using Java, Spring Boot, and JPA/Hibernate.
  - Integrated backend services with MySQL, PostgreSQL, and MongoDB databases.
  - Tested APIs using Postman, fixed bugs, and followed the team's Git workflow & code reviews.
  - Applied layered software architecture, exception handling, and API documentation.`
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
   • Timeline: Expected 2027
   • Grade: CGPA 8.5 / 10

2. Diploma in Computer Engineering
   • Institution: Yogeshwari Polytechnic, Ambajogai
   • Timeline: 2021 – 2024
   • Grade: 88.46%

3. SSC Secondary Education
   • Institution: Shri Yogeshwari Nutan Vidyalaya, Ambajogai
   • Year: 2021
   • Grade: 95.60%`
        });
        break;

      case 'certs':
      case 'certifications':
        newLogs.push({
          type: 'output',
          text: `==================================================
VERIFIED CERTIFICATIONS & TRAINING
==================================================
• AWS Certified Cloud Practitioner – Amazon Web Services (2025)
• AWS Cloud Computing Workshop (EC2, S3, VPC, IAM) – Tech Bodhi & AWS (2024)
• Advanced Java Programming – Shri Software Solutions & Training Center (2023)
• Python NumPy & Pandas Industrial Training – Shri Software Solutions & Training Center (2023)`
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
• Key Topics: Algorithms, Data Structures, Hash Tables, Strings, Arrays, Dynamic Programming`
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
• Annual Activity: 169+ contributions in the past year
• Total Active Days: 39 days
• Max Streak: 7 consecutive days`
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
• Status: Verified Original Document Loaded
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
Rohan Tidke is available for Software Engineering & Backend Developer roles.
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
            placeholder="type a command (e.g. help, skills, projects, leetcode, contact)..." 
            className="w-full bg-transparent text-emerald-300 focus:outline-none placeholder-slate-600 font-mono text-xs"
          />
        </form>

      </div>
    </div>
  );
}
