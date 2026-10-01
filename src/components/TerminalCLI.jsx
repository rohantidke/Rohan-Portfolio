import React, { useState, useRef, useEffect } from 'react';

export default function TerminalCLI({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Rohan Tidke Developer CLI [Version 1.0.0]' },
    { type: 'system', text: "Type 'help' to view all available commands." },
    { type: 'system', text: '--------------------------------------------------' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...history, { type: 'user', text: `> ${cmd}` }];

    switch (cmd) {
      case 'help':
        newLogs.push({
          type: 'output',
          text: `Available commands:
  • about      - Brief summary of Rohan Tidke
  • skills     - Primary backend tech stack
  • projects   - Featured engineering projects
  • exp        - Work internship experience
  • edu        - Education timeline & CGPA
  • contact    - Email, phone & social profiles
  • clear      - Clear terminal output
  • sudo hire  - Direct offer acceptance!`
        });
        break;
      case 'about':
        newLogs.push({
          type: 'output',
          text: 'Rohan Tidke: Backend Developer & Final-Year Computer Engineering Student (CGPA 8.5, expected 2027). Specialized in Spring Boot 3, REST APIs, Microservices, and Fraud Detection Engines.'
        });
        break;
      case 'skills':
        newLogs.push({
          type: 'output',
          text: `• Languages: Java (primary), Python, SQL, JavaScript, C++
• Backend: Spring Boot 3, Spring Security (JWT), FastAPI, JPA/Hibernate
• Databases & Distributed Systems: MySQL, MongoDB, PostgreSQL, Kafka, Redis
• Cloud & DevOps: Docker, Git, Maven, Postman, Linux`
        });
        break;
      case 'projects':
        newLogs.push({
          type: 'output',
          text: `1. Credential Validator Platform: Spring Boot 3 + FastAPI + Solidity 7-layer fraud engine with OCR & Merkle root proofing.
2. RAG Platform: Python, LangChain, Vector DBs document-grounded question answering system.`
        });
        break;
      case 'exp':
        newLogs.push({
          type: 'output',
          text: `• Java Developer Intern @ Shri Software Technologies (July 2023 - Oct 2023)
• Network Engineer Intern @ Shri Software Technologies (Nov 2023 - Feb 2024)`
        });
        break;
      case 'edu':
        newLogs.push({
          type: 'output',
          text: `• B.E. Computer Engineering - Bharati Vidyapeeth's College of Engineering, Pune (8.5 CGPA, Expected 2027)
• Diploma Computer Engineering - K.P.C.Y. Polytechnic (88.46%)
• SSC Secondary Education - Shri Yogeshwari Nutan Vidyalaya (95.60%)`
        });
        break;
      case 'contact':
        newLogs.push({
          type: 'output',
          text: `• Email: rohantidke6086@gmail.com
• Phone: +91 93257 90846
• GitHub: github.com/rohantidke
• LinkedIn: linkedin.com/in/rohan-tidke-31510a26b`
        });
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'sudo hire':
        newLogs.push({
          type: 'success',
          text: "🎉 Offer accepted! Rohan Tidke is ready to build high-scale backend services with your engineering team."
        });
        break;
      default:
        newLogs.push({
          type: 'error',
          text: `Command not found: '${cmd}'. Type 'help' for available commands.`
        });
    }

    setHistory(newLogs);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="w-full max-w-2xl rounded-2xl bg-black border border-emerald-500/40 shadow-2xl overflow-hidden font-mono text-xs">
        
        <div className="bg-black px-4 py-2.5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2">
            <button onClick={onClose} className="h-3 w-3 rounded-full bg-red-500 cursor-pointer"></button>
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span className="text-slate-400 text-[11px] ml-2">rohan@developer-terminal:~</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>

        <div ref={outputRef} className="p-4 h-80 overflow-y-auto space-y-2 text-slate-300">
          {history.map((item, i) => (
            <div key={i}>
              {item.type === 'user' && <p className="text-white"><span className="text-emerald-400">&gt;</span> {item.text.replace('> ', '')}</p>}
              {item.type === 'system' && <p className="text-emerald-400">{item.text}</p>}
              {item.type === 'output' && <pre className="whitespace-pre-wrap font-mono text-slate-300 ml-2">{item.text}</pre>}
              {item.type === 'success' && <p className="text-emerald-400 font-bold ml-2">{item.text}</p>}
              {item.type === 'error' && <p className="text-red-400 ml-2">{item.text}</p>}
            </div>
          ))}
        </div>

        <form onSubmit={handleCommand} className="p-3 bg-black/90 border-t border-white/10 flex items-center gap-2">
          <span className="text-emerald-400 font-bold">&gt;</span>
          <input 
            type="text" 
            autoFocus 
            value={inputVal} 
            onChange={(e) => setInputVal(e.target.value)} 
            placeholder="type a command (e.g. help, skills, projects)..." 
            className="w-full bg-transparent text-emerald-300 focus:outline-none placeholder-slate-600"
          />
        </form>

      </div>
    </div>
  );
}
