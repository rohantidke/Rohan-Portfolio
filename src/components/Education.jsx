import React from 'react';

export default function Education() {
  const certs = [
    {
      title: 'AWS Cloud Computing Workshop (EC2, S3, VPC, IAM)',
      issuer: 'Tech Bodhi, Pune',
      date: 'Oct 2024',
      id: 'Infrastructure: EC2, S3, VPC, and IAM',
      badge: 'AWS',
      color: 'border-[#3B82F6]/30 text-[#3B82F6] bg-[#3B82F6]/10'
    },
    {
      title: 'Advanced Java Programming',
      issuer: 'Shri Software Solutions & Training Center',
      date: 'Aug–Nov 2023',
      id: 'Enterprise Java, OOP & Backend Architecture',
      badge: 'JAVA',
      color: 'border-[#22D3EE]/30 text-[#22D3EE] bg-[#22D3EE]/10'
    },
    {
      title: 'AI Applications Workflow using MATLAB',
      issuer: 'BVCOE Lavale, with MathWorks',
      date: 'Jan–Feb 2025',
      id: 'AI & Data Processing Workflows',
      badge: 'AI/ML',
      color: 'border-[#3B82F6]/30 text-[#3B82F6] bg-[#3B82F6]/10'
    },
  ];

  return (
    <section id="education" className="relative px-5 py-14 md:px-8 md:py-20 border-t border-[#262626] bg-[#000000]">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        <div>
          <span className="font-mono text-xs text-[#22D3EE] font-semibold uppercase tracking-widest flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#22D3EE]"></span>
            Academic & Professional Qualifications
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FFFFFF] tracking-tight mt-1">Education & Certifications</h2>
          <p className="mt-1 text-sm text-[#E5E7EB]">Verified academic background, university degrees, and specialized technical training.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          
          {/* Education Timeline */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#FFFFFF] font-mono flex items-center gap-2">
              <span>🎓 Formal Academic Education</span>
            </h3>

            <div className="rounded-2xl border border-[#262626] bg-[#101010] p-6 sm:p-7 space-y-6 shadow-sm">
              
              <div className="pb-5 border-b border-[#262626] space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-base font-bold text-[#FFFFFF]">Bharati Vidyapeeth’s College of Engineering, Pune</h4>
                  <span className="text-xs font-mono text-[#3B82F6] font-medium bg-[#3B82F6]/10 px-3 py-1 rounded-full border border-[#3B82F6]/30">
                    Expected 2027
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#E5E7EB] font-medium">Bachelor of Engineering (B.E.) in Computer Engineering</p>
                <div className="flex items-center gap-2 font-mono text-xs pt-1">
                  <span className="text-[#A1A1AA]">Cumulative GPA:</span>
                  <span className="text-[#22D3EE] font-semibold bg-[#161616] px-2.5 py-0.5 rounded border border-[#262626]">8.5 CGPA</span>
                </div>
              </div>

              <div className="pb-5 border-b border-[#262626] space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-base font-bold text-[#FFFFFF]">Yogeshwari Polytechnic, Ambajogai</h4>
                  <span className="text-xs font-mono text-[#A1A1AA]">2021 – 2024</span>
                </div>
                <p className="text-xs sm:text-sm text-[#E5E7EB] font-medium">Diploma in Computer Engineering</p>
                <div className="flex items-center gap-2 font-mono text-xs pt-1">
                  <span className="text-[#A1A1AA]">Score:</span>
                  <span className="text-emerald-400 font-semibold bg-[#161616] px-2.5 py-0.5 rounded border border-[#262626]">88.46% (Distinction)</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h4 className="text-base font-bold text-[#FFFFFF]">Shri Yogeshwari Nutan Vidyalaya, Ambajogai</h4>
                  <span className="text-xs font-mono text-[#A1A1AA]">2021</span>
                </div>
                <p className="text-xs sm:text-sm text-[#E5E7EB] font-medium">Secondary School Certificate (SSC)</p>
                <div className="flex items-center gap-2 font-mono text-xs pt-1">
                  <span className="text-[#A1A1AA]">Score:</span>
                  <span className="text-emerald-400 font-semibold bg-[#161616] px-2.5 py-0.5 rounded border border-[#262626]">95.60% (Distinction)</span>
                </div>
              </div>

            </div>
          </div>

          {/* Certifications & Industry Training */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-[#FFFFFF] font-mono flex items-center gap-2">
              <span>📜 Technical Certifications & Workshops</span>
            </h3>

            <div className="space-y-3">
              {certs.map((c, idx) => (
                <div key={idx} className="rounded-2xl border border-[#262626] bg-[#101010] p-4 sm:p-5 flex items-center justify-between hover:border-[#3B82F6] transition-colors shadow-sm">
                  <div className="flex items-center gap-3.5">
                    <div className={`h-11 w-11 rounded-xl border flex items-center justify-center font-bold text-xs font-mono shrink-0 ${c.color}`}>
                      {c.badge}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#FFFFFF] leading-tight">{c.title}</h4>
                      <p className="text-xs text-[#E5E7EB] mt-0.5">{c.issuer}</p>
                      <p className="text-[11px] text-[#A1A1AA] font-mono mt-0.5">{c.id}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#161616] border border-[#262626] px-3 py-1 text-[11px] text-[#E5E7EB] font-mono shrink-0 ml-3">
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
