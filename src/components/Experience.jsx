import React from 'react';

export default function Experience() {
  const experiences = [
    {
      role: 'Java Full Stack Development Intern',
      organization: 'Shorat Innovations Pvt. Ltd., Pune',
      period: 'Jan 2026 – Feb 2026',
      badge: 'Internship',
      certId: 'Cert. No. SI-INT2025/304',
      points: [
        'Developed and integrated 37 REST endpoints across 10 Spring Boot controllers and 26 React pages following a clean controller–service–repository layered architecture.',
        'Implemented role-based access control (RBAC) across 32 protected endpoints using stateless Spring Security and JWT, eliminating server-side session overhead.',
        'Resolved cross-database enum mapping differences between MySQL and PostgreSQL using custom JPA AttributeConverters.',
        'Standardized error responses across 6 exception hierarchies using a centralized @RestControllerAdvice global exception handler.',
        'Documented REST API schemas and data contracts using OpenAPI / Swagger specifications.'
      ],
      skills: ['Java 21', 'Spring Boot 3', 'Spring Security (JWT)', 'JPA / Hibernate', 'MySQL', 'React 19', 'REST APIs', 'OpenAPI']
    },
    {
      role: 'Java Developer Intern',
      organization: 'Shri Software Technologies',
      period: 'Aug 2023 – Nov 2023',
      badge: 'Industrial Training',
      certId: 'MSME Certified Training Center',
      points: [
        'Developed and integrated REST APIs for complaint lifecycles, department routing, and status transitions.',
        'Followed structured Git workflows, feature branching, and code review practices to maintain clean version control hygiene.',
        'Worked with layered application architecture (Controller, Service, DAO/Repository) and implemented centralized exception handling.',
        'Managed relational persistence schemas in MySQL using JPA and Hibernate ORM for reliable transaction management.'
      ],
      skills: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'JPA / Hibernate', 'Git Workflows', 'Code Reviews', 'Exception Handling']
    }
  ];

  return (
    <section id="experience" className="relative px-5 py-14 md:px-8 md:py-20 border-t border-[#263449] bg-[#0B1120]">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-[#3B82F6] font-semibold uppercase tracking-widest flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
              Practical Industry Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight mt-1">Internship Experience</h2>
            <p className="mt-1 text-sm text-[#94A3B8]">
              Verified software engineering internships building production RESTful APIs and layered architectures.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#94A3B8]">
            <span>Verified credentials & structured Git workflows</span>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, idx) => (
            <article 
              key={idx} 
              className="rounded-2xl border border-[#263449] bg-[#111C32] p-6 sm:p-8 space-y-6 hover:border-[#3B82F6] transition-all shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="border-b border-[#263449] pb-4 space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-mono font-bold text-[#3B82F6] bg-[#0F172A] border border-[#263449] px-3 py-1 rounded-full">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-[#94A3B8] font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#F8FAFC] pt-1">
                    {exp.role}
                  </h3>

                  <div className="flex items-center justify-between flex-wrap text-xs font-mono">
                    <span className="text-[#CBD5E1] font-semibold">{exp.organization}</span>
                    <span className="text-[#94A3B8] text-[11px]">{exp.certId}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <span className="text-[#3B82F6] font-bold shrink-0 mt-0.5">▹</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-[#263449] space-y-2">
                <span className="font-mono text-[11px] text-[#94A3B8] uppercase tracking-wider block">
                  Technologies & Practices:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="rounded-md border border-[#263449] bg-[#0F172A] px-2.5 py-0.5 text-xs font-mono text-[#CBD5E1]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
