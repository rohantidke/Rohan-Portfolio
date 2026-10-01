import React, { useState, useRef, useEffect } from 'react';

export default function TerminalCLI({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Rohan Tidke Developer CLI [Version 1.0.0]' },
    { type: 'system', text: "Type 'help' to view all available commands." },
    { type: 'system', text: '--------------------------------------------------' },
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
          text: `Available commands:
  • about        - Brief summary of Rohan Tidke
  • skills       - Primary backend tech stack
  • projects     - Featured engineering projects
  • exp          - Work internship experience
  • edu          - Education timeline & CGPA
  • certs        - AWS Cloud certifications & training
  • leetcode     - LeetCode problem-solving stats
  • github       - Official GitHub telemetry
  • resume       - Resume overview & download info
  • contact      - Direct email, phone & social profiles
  • clear        - Clear terminal logs
  • sudo hire    - Direct offer acceptance!
  • exit         - Close CLI window`
        });
        break;

      case 'about':
      case 'whoami':
      case 'bio':
        newLogs.push({
          type: 'output',
          text: 'Rohan Tidke: Computer Engineering student (CGPA 8.5, expected 2027) with internship experience building REST APIs using Java and Spring Boot. Strong in Spring Security, JPA/Hibernate, SQL, microservices, and AWS (Certified Cloud Practitioner).'
        });
        break;

      case 'skills':
      case 'stack':
      case 'tech':
        newLogs.push({
          type: 'output',
          text: `• Languages: Java (primary), Python, SQL, JavaScript, C++
• Backend: Spring Boot 3, Spring MVC, Spring Security (JWT), JPA/Hibernate, REST APIs, Microservices, FastAPI
• AI & Data: RAG, LangChain, Vector Embeddings, Semantic Retrieval, Data Cleaning, Exploratory Data Analysis, NumPy, Pandas
• Databases: MySQL, PostgreSQL, MongoDB
• Cloud & Tools: AWS, Docker, Git, Maven, JUnit, Postman, Swagger`
        });
        break;

      case 'projects':
      case 'work':
      case 'repo':
        newLogs.push({
          type: 'output',
          text: `1. Credential Validator Platform – Microservices-Based Fraud Detection:
   • Spring Boot 3, FastAPI, React, TypeScript, MySQL, Solidity (5 microservices).
   • 7-layer fraud engine using Tesseract OCR, OpenCV, SHA-256, and Ethereum Merkle proofs (95% detection accuracy).
2. RAG Platform – Document Question Answering:
   • Python, LangChain, FAISS, ChromaDB document-grounded question answering system.`
        });
        break;

      case 'exp':
      case 'experience':
        newLogs.push({
          type: 'output',
          text: `• Java Developer Intern @ Shri Software Technologies (Jul 2023 – Oct 2023):
   - Built REST APIs for a student management module using Java, Spring Boot, and JPA/Hibernate.
   - Integrated with MySQL, PostgreSQL, and MongoDB. Tested APIs with Postman and followed Git workflow.`
        });
        break;

      case 'edu':
      case 'education':
        newLogs.push({
          type: 'output',
          text: `• Bharati Vidyapeeth’s College of Engineering, Lavale, Pune (Expected 2027)
   - B.E. Computer Engineering | CGPA: 8.5
• Yogeshwari Polytechnic, Ambajogai (2021 – 2024)
   - Diploma in Computer Engineering | 88.46%
• Shri Yogeshwari Nutan Vidyalaya, Ambajogai (2021)
   - SSC Secondary Education | 95.60%`
        });
        break;

      case 'certs':
      case 'certifications':
        newLogs.push({
          type: 'output',
          text: `• AWS Certified Cloud Practitioner – Amazon Web Services (2025)
• AWS Cloud Computing Workshop (EC2, S3, VPC, IAM) – Tech Bodhi & AWS (2024)
• Advanced Java Programming – Shri Software Solutions & Training Center (2023)
• Python NumPy & Pandas Industrial Training – Shri Software Solutions & Training Center (2023)`
        });
        break;

      case 'leetcode':
      case 'lc':
        newLogs.push({
          type: 'output',
          text: `• Profile: https://leetcode.com/u/rohan6086/
• Total Solved: 120+ Problems
• Skills: Algorithms, Data Structures, Array, Hash Table, Dynamic Programming, Strings`
        });
        break;

      case 'github':
      case 'gh':
        newLogs.push({
          type: 'output',
          text: `• Profile: https://github.com/rohantidke
• Account: @rohantidke
• Contributions: 169+ in the past year | 39 active days | 7-day max streak`
        });
        break;

      case 'resume':
      case 'cv':
      case 'cat resume':
        newLogs.push({
          type: 'output',
          text: `• Resume PDF hosted at: /Rohan_Tidke_Resume.pdf
• Status: Verified Original Document Uploaded
• Click '📄 View Resume PDF' on header or hero to open full viewer.`
        });
        break;

      case 'contact':
      case 'email':
      case 'phone':
        newLogs.push({
          type: 'output',
          text: `• Email: rohantidke6086@gmail.com
• Phone: +91-8208391705
• LinkedIn: linkedin.com/in/rohan-tidke-31510a26b
• GitHub: github.com/rohantidke`
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
          text: "🎉 Offer accepted! Rohan Tidke is ready to build high-scale backend microservices with your engineering team."
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
          text: `Command not found: '${rawCmd}'. Type 'help' for available commands.`
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
        <div ref={outputRef} className="p-4 h-80 overflow-y-auto space-y-2 text-slate-300 select-text">
          {history.map((item, i) => (
            <div key={i}>
              {item.type === 'user' && <p className="text-white font-bold"><span className="text-emerald-400">&gt;</span> {item.text.replace('> ', '')}</p>}
              {item.type === 'system' && <p className="text-emerald-400">{item.text}</p>}
              {item.type === 'output' && <pre className="whitespace-pre-wrap font-mono text-slate-300 ml-2">{item.text}</pre>}
              {item.type === 'success' && <p className="text-emerald-400 font-bold ml-2">{item.text}</p>}
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
