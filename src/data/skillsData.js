// Centralized Skills Configuration extracted 100% from Rohan's Latest Resume (SDE Latest.pdf)
export const backendCoreSkills = [
  { name: 'Java 21', note: 'Primary Language · OOP & Multithreading', tag: 'Core' },
  { name: 'Spring Boot 3', note: 'Enterprise Microservices & RESTful APIs', tag: 'Core' },
  { name: 'Spring Security', note: 'Stateless JWT & Role-Based Access Control', tag: 'Core' },
  { name: 'REST APIs', note: 'Layered Endpoints, DTOs & Swagger Docs', tag: 'Core' },
  { name: 'Microservices', note: 'Distributed Systems & Inter-Service APIs', tag: 'Core' },
  { name: 'JPA / Hibernate', note: 'ORM Persistence & Transaction Management', tag: 'Core' },
  { name: 'MySQL', note: 'Relational Schemas, Indexing & ACID', tag: 'Core' }
];

export const skillCategories = [
  {
    id: 'programming-languages',
    category: 'Programming Languages',
    icon: '☕',
    badge: 'Languages',
    badgeColor: 'border-sky-500/30 text-sky-300 bg-sky-500/10',
    description: 'Core programming languages specified in resume technical skills and production projects.',
    skills: [
      { name: 'Java', note: 'Primary Language · Modern Java 21 / OOP', priority: true },
      { name: 'Python', note: 'FastAPI & AI Automation Services', priority: false },
      { name: 'JavaScript', note: 'ES6+ / Web Client Development', priority: false },
      { name: 'C++', note: 'Foundational Data Structures & Systems', priority: false },
      { name: 'SQL', note: 'Relational DDL, Complex Joins & Queries', priority: true },
      { name: 'TypeScript', note: 'Strict Type-Safe Frontend Applications', priority: false },
      { name: 'Solidity', note: 'Smart Contract Development for Merkle Roots', priority: false }
    ]
  },
  {
    id: 'backend-development',
    category: 'Backend Development',
    icon: '⚙️',
    badge: 'Primary Focus',
    badgeColor: 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10',
    description: 'Server-side frameworks, microservices architectures, and asynchronous messaging pipelines.',
    skills: [
      { name: 'Spring Boot 3', note: 'Enterprise Microservices & REST Endpoints', priority: true },
      { name: 'Spring MVC', note: 'Model-View-Controller Request Pipelines', priority: true },
      { name: 'Spring Security (JWT)', note: 'Stateless Authentication & Authorization', priority: true },
      { name: 'REST APIs', note: 'Layered Endpoints & JSON Error Contracts', priority: true },
      { name: 'Microservices', note: 'Decoupled Service-Oriented Architecture', priority: true },
      { name: 'FastAPI', note: 'High-Performance Asynchronous Python Microservices', priority: false },
      { name: 'JPA / Hibernate', note: 'Object-Relational Mapping & Entity Lifecycle', priority: true },
      { name: 'Spring Data', note: 'Data Access Repositories for SQL & NoSQL', priority: true },
      { name: 'Apache Kafka', note: 'Event-Driven Messaging & Streaming', priority: false },
      { name: 'Swagger / OpenAPI', note: 'Automated REST API Contract Documentation', priority: false }
    ]
  },
  {
    id: 'frontend-development',
    category: 'Frontend Development',
    icon: '💻',
    badge: 'Client Interfaces',
    badgeColor: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
    description: 'Modern component-based web interfaces and responsive dashboards for backend services.',
    skills: [
      { name: 'React 19 / React', note: 'Component Architecture & State Hooks', priority: false },
      { name: 'Next.js', note: 'Full-Stack React Framework & SSR', priority: false },
      { name: 'Vite', note: 'Modern Fast Build Tooling & HMR', priority: false },
      { name: 'TypeScript', note: 'Typed Interfaces & Props Validation', priority: false },
      { name: 'JavaScript (ES6+)', note: 'Asynchronous Fetch & Event Handling', priority: false }
    ]
  },
  {
    id: 'databases-storage',
    category: 'Databases and Data Storage',
    icon: '🗄️',
    badge: 'Persistence',
    badgeColor: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
    description: 'Relational schemas, NoSQL document stores, distributed caches, and vector databases.',
    skills: [
      { name: 'MySQL', note: 'Relational Database, Indexing & Schemas', priority: true },
      { name: 'PostgreSQL', note: 'Enterprise Relational Database & Transactions', priority: true },
      { name: 'MongoDB', note: 'Document Store for High-Volume Audit Logs', priority: false },
      { name: 'Redis', note: 'In-Memory Data Store & Caching Layer', priority: false },
      { name: 'ChromaDB', note: 'Vector Database for Embeddings Retrieval', priority: false },
      { name: 'FAISS', note: 'Facebook AI High-Dimensional Similarity Index', priority: false }
    ]
  },
  {
    id: 'dsa-problem-solving',
    category: 'Data Structures and Algorithms',
    icon: '🧠',
    badge: 'Problem Solving',
    badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
    description: 'Core computational fundamentals, time/space complexity optimization, and OOP design patterns.',
    skills: [
      { name: 'Data Structures & Algorithms (DSA)', note: 'Arrays, Lists, Trees, Graphs & DP', priority: true },
      { name: 'Object-Oriented Programming (OOP)', note: 'SOLID, Polymorphism & Abstraction', priority: true },
      { name: 'Problem Solving', note: '200+ LeetCode Solutions with Optimal Complexity', priority: true },
      { name: 'Computer Networks (CN)', note: 'OSI Model, TCP/IP, HTTP/HTTPS Protocols', priority: false }
    ]
  },
  {
    id: 'ai-ml-systems',
    category: 'AI/ML and Intelligent Systems',
    icon: '🤖',
    badge: 'RAG & AI Workflows',
    badgeColor: 'border-purple-500/30 text-purple-300 bg-purple-500/10',
    description: 'Intelligent document retrieval, vector embedding pipelines, and semantic search integration.',
    skills: [
      { name: 'Retrieval-Augmented Generation (RAG)', note: 'Citation-Grounded Question Answering', priority: false },
      { name: 'LangChain', note: 'Chains, Document Loaders & Prompt Pipelines', priority: false },
      { name: 'Page-Aware Semantic Chunking', note: 'Context Preservation with Overlap Windows', priority: false },
      { name: 'Vector Embeddings & Cosine Search', note: 'Semantic Proximity Matching', priority: false },
      { name: 'Cross-Encoder Re-Ranking', note: 'High-Precision Context Ordering', priority: false },
      { name: 'MATLAB / MathWorks', note: 'AI Applications Workflow Certification', priority: false }
    ]
  },
  {
    id: 'document-verification',
    category: 'Document Processing and Verification',
    icon: '🛡️',
    badge: 'Verification Engines',
    badgeColor: 'border-blue-500/30 text-blue-300 bg-blue-500/10',
    description: 'Computer vision, optical character recognition, and cryptographic tamper-detection engines.',
    skills: [
      { name: 'Tesseract OCR', note: 'Automated Optical Character Extraction', priority: false },
      { name: 'OpenCV', note: 'Computer Vision & Pixel Alignment Analysis', priority: false },
      { name: 'Cryptographic Hashing (SHA-256)', note: 'Bit-Level Digest Computation & Integrity Checks', priority: false },
      { name: 'Blockchain Merkle-Root Proofs', note: 'Tamper Detection on Ethereum/Hardhat', priority: false },
      { name: 'ZXing QR Code Generation', note: 'Encrypted Credential Verification Codes', priority: false }
    ]
  },
  {
    id: 'security-authentication',
    category: 'Security and Authentication',
    icon: '🔒',
    badge: 'Application Security',
    badgeColor: 'border-rose-500/30 text-rose-300 bg-rose-500/10',
    description: 'Stateless access tokens, role-based authorities, and secure client-server communication.',
    skills: [
      { name: 'JSON Web Tokens (JWT)', note: 'Stateless Claims & Signature Verification', priority: true },
      { name: 'Role-Based Access Control (RBAC)', note: 'Method-Level Security & Endpoint Protection', priority: true },
      { name: 'Spring Security Filter Chain', note: 'OncePerRequestFilter & SecurityContext', priority: true },
      { name: 'Multi-Tenant Security Isolation', note: 'Tenant-Scoped Data Access & Routing', priority: false }
    ]
  },
  {
    id: 'developer-tools',
    category: 'Developer Tools and API Testing',
    icon: '🛠️',
    badge: 'Tooling & CI/CD',
    badgeColor: 'border-teal-500/30 text-teal-300 bg-teal-500/10',
    description: 'Build automation, version control systems, API testing suites, and IDEs.',
    skills: [
      { name: 'Git', note: 'Feature Branching, Rebase & Clean Commit History', priority: true },
      { name: 'GitHub', note: 'Pull Requests, Code Reviews & Team Collaboration', priority: true },
      { name: 'Postman', note: 'REST API Validation, Automated Collections & Tests', priority: true },
      { name: 'Maven', note: 'Dependency Lifecycle, Plugins & Build Automation', priority: true },
      { name: 'Gradle', note: 'Build Automation & Dependency Management', priority: false },
      { name: 'IntelliJ IDEA', note: 'Enterprise Java / Spring Debugging & Profiling', priority: false },
      { name: 'Visual Studio Code', note: 'Full-Stack Development Environment', priority: false }
    ]
  },
  {
    id: 'architecture-concepts',
    category: 'Architecture and Engineering Concepts',
    icon: '📐',
    badge: 'System Design',
    badgeColor: 'border-sky-500/30 text-sky-300 bg-sky-500/10',
    description: 'Structural patterns, exception handling mechanisms, and distributed design principles.',
    skills: [
      { name: 'Layered Architecture', note: 'Controller–Service–Repository Separation of Concerns', priority: true },
      { name: 'Global Exception Handling', note: '@RestControllerAdvice & Centralized Error Schemas', priority: true },
      { name: 'Custom JPA AttributeConverters', note: 'Cross-Database Enum Mapping (MySQL & Postgres)', priority: true },
      { name: 'Server-Sent Events (SSE)', note: 'Asynchronous Token Streaming Responses', priority: false },
      { name: 'Polyglot Persistence', note: 'Relational MySQL for Transactions + MongoDB for Audits', priority: false }
    ]
  },
  {
    id: 'deployment-infrastructure',
    category: 'Deployment and Infrastructure',
    icon: '☁️',
    badge: 'Cloud & Containers',
    badgeColor: 'border-amber-500/30 text-amber-300 bg-amber-500/10',
    description: 'Cloud computing platforms, containerization, orchestration, and continuous integration.',
    skills: [
      { name: 'AWS Cloud (EC2, S3, VPC, IAM)', note: 'Compute, Object Storage & Network Security', priority: false },
      { name: 'Docker', note: 'Multi-Stage Production Dockerfile Optimization', priority: false },
      { name: 'Docker Compose', note: 'Multi-Container Stack Orchestration', priority: false },
      { name: 'Kubernetes', note: 'Container Orchestration & Pod Scaling Basics', priority: false },
      { name: 'Jenkins & CI/CD', note: 'Automated Build & Deployment Pipelines', priority: false },
      { name: 'Render', note: 'Cloud Backend API Hosting', priority: false },
      { name: 'Vercel', note: 'Edge Frontend Application Deployment', priority: false },
      { name: 'Supabase', note: 'Managed Cloud Relational Database', priority: false },
      { name: 'Nginx', note: 'Reverse Proxy & Static Web Asset Serving', priority: false }
    ]
  }
];
