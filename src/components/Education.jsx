import React from 'react';

export default function Education() {
  const certs = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      date: '2025',
      id: 'Official AWS Certification',
      badge: 'AWS',
      color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
    },
    {
      title: 'AWS Cloud Computing Workshop (EC2, S3, VPC, IAM)',
      issuer: 'Tech Bodhi & AWS',
      date: '2024',
      id: 'Topic: EC2, S3, VPC, IAM Infrastructure',
      badge: 'CLOUD',
      color: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
    },
    {
      title: 'Advanced Java Programming',
      issuer: 'Shri Software Solutions & Training Center',
      date: '2023',
      id: 'Java & Object Oriented Programming',
      badge: 'JAVA',
      color: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
    },
    {
      title: 'Python NumPy & Pandas Industrial Training',
      issuer: 'Shri Software Solutions & Training Center',
      date: '2023',
      id: 'Data Analysis & Industrial Training',
      badge: 'PYTHON',
      color: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
    },
  ];

  return (
    <section id="education" className="px-5 py-14 md:px-8 md:py-20 border-t border-white/5 bg-black">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        <div>
          <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Academic & Professional Qualifications
          </span>
          <h2 className="text-3xl font-extrabold text-white tracking-tight mt-1">Education & Certifications</h2>
          <p className="mt-1 text-sm text-slate-300">Academic accomplishments, degrees, and official cloud certifications.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          
          {/* Education Timeline */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <span>🎓 Education</span>
            </h3>

            <div className="glass-card rounded-2xl p-6 space-y-5 border-white/15 hover:border-emerald-500/40 transition-all shadow-xl">
              
              <div className="pb-4 border-b border-white/10 space-y-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-base font-bold text-white">Bharati Vidyapeeth’s College of Engineering, Lavale, Pune</h4>
                  <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Expected 2027
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-medium">Bachelor of Engineering in Computer Engineering</p>
                <p className="text-xs text-emerald-400 font-mono font-bold pt-0.5">CGPA: 8.5</p>
              </div>

              <div className="pb-4 border-b border-white/10 space-y-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-base font-bold text-white">Yogeshwari Polytechnic, Ambajogai</h4>
                  <span className="text-xs font-mono text-slate-300">2021 – 2024</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">Diploma in Computer Engineering</p>
                <p className="text-xs text-emerald-400 font-mono font-bold pt-0.5">88.46%</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-base font-bold text-white">Shri Yogeshwari Nutan Vidyalaya, Ambajogai</h4>
                  <span className="text-xs font-mono text-slate-300">2021</span>
                </div>
                <p className="text-xs text-slate-300 font-medium">SSC Secondary Education</p>
                <p className="text-xs text-emerald-400 font-mono font-bold pt-0.5">95.60%</p>
              </div>

            </div>
          </div>

          {/* Certifications & Training */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
              <span>📜 Certifications & Training</span>
            </h3>

            <div className="space-y-3">
              {certs.map((c, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-4 flex items-center justify-between border-white/15 hover:border-emerald-500/40 transition-all shadow-md">
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-xl border flex items-center justify-center font-bold text-xs font-mono shrink-0 ${c.color}`}>
                      {c.badge}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">{c.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5">{c.issuer}</p>
                      <p className="text-[10px] text-slate-400 font-mono mt-0.5">{c.id}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/10 border border-white/20 px-3 py-1 text-[11px] text-white font-mono shrink-0 ml-2 font-bold">
                    {c.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
