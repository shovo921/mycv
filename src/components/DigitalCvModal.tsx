import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Globe, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION_LIST, CERTIFICATIONS } from '../data/portfolioData';

interface DigitalCvModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const DigitalCvModal: React.FC<DigitalCvModalProps> = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `
CURRICULUM VITAE
================
${PERSONAL_INFO.name} (${PERSONAL_INFO.alternateName})
${PERSONAL_INFO.role}
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone} / ${PERSONAL_INFO.mobile}
Location: ${PERSONAL_INFO.location}
Website: ${PERSONAL_INFO.website} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

PROFESSIONAL SUMMARY
--------------------
Software Engineer with 5+ years of enterprise experience across banking platforms, microservices, and automated cloud systems. Holds a Master of Science in Computer Science from Jahangirnagar University (CGPA 3.45) with research in Enterprise Customer Service Systems, and certified as a DevOps Engineer.

WORK EXPERIENCE
---------------
1. Officer (Software & Banking IT Systems) — Padma Bank PLC (Sep 2023 - Present)
   - Core banking transactional microservices, compliance AML/CFT modules.
   - Idempotent gateways, double-entry audit logging, high-throughput systems.

2. Software Engineer — Kaicom Solutions Japan BD Co. Ltd. (Jan 2022 - Aug 2023)
   - Enterprise client backend services in PHP (Laravel) and Java.
   - Reduced database latency by 35% through indexing and query refactoring.

3. Junior Software Officer — Kaicom Solutions Japan (Jan 2020 - Dec 2021)
4. Software Engineering Intern — Kaicom Solutions Japan (Sep 2019 - Dec 2019)

EDUCATION
---------
- Master of Science in Computer Science (PMSCS) — Jahangirnagar University (2022-2023)
  CGPA: 3.45 / 4.00 | Capstone: Enterprise Customer Service Management System (Grade: A, 3.75)
- Bachelor of Computer Science and Engineering (BCSE) — IUBAT (2016-2019)
  CGPA: 3.49 / 4.00 | Senior Practicum Defense: Grade A (4.00)
- Higher Secondary Certificate (HSC) — Pubail Adarsha College (2015) | GPA 4.17 / 5.00
- Secondary School Certificate (SSC) — Kayer High School (2013) | GPA 4.63 / 5.00

CERTIFICATIONS
--------------
- Certified DevOps Engineer — Page Cloud Academy (Aug 2024, ID: CDE-C004-005)
- Fundamentals of AML & CFT Examination — Padma Bank PLC (Dec 2024)

TECHNICAL SKILLS
----------------
Languages: Java, PHP, TypeScript, JavaScript, Python, C++
Frameworks: Spring Boot, Laravel, React, Tailwind CSS, Express
Databases: MySQL, PostgreSQL, Oracle DB, Redis
DevOps: Docker, Kubernetes, Helm, GitHub Actions, Linux (Ubuntu/RHEL), Prometheus
    `.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] rounded-2xl border flex flex-col overflow-hidden shadow-2xl ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
        }`}
      >
        {/* Actions Bar */}
        <div className={`p-4 border-b flex items-center justify-between gap-3 ${
          darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="font-bold text-xs sm:text-sm font-mono">
              ATS-Optimized Printable Resume: {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download TXT</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper Body */}
        <div className="flex-1 overflow-y-auto p-8 sm:p-12 bg-white text-slate-900 font-sans leading-relaxed">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Resume Header */}
            <div className="text-center border-b pb-6 space-y-1">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-cyan-700">
                {PERSONAL_INFO.role} • Banking IT Officer & DevOps Practitioner
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-slate-600 pt-2 font-mono">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-slate-400" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-slate-400" />
                  shovodas.netlify.com
                </span>
              </div>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950 border-b pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {PERSONAL_INFO.about[0]} {PERSONAL_INFO.about[1]}
              </p>
            </div>

            {/* Core Competencies */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950 border-b pb-1 mb-2">
                Core Competencies & Tooling
              </h2>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-bold text-slate-900">Languages & Frameworks: </span>
                  <span className="text-slate-700">Java (Spring Boot), PHP (Laravel), TypeScript, React, Python, C++</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900">Databases: </span>
                  <span className="text-slate-700">MySQL, PostgreSQL, Oracle DB, Redis</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900">DevOps & Cloud: </span>
                  <span className="text-slate-700">Docker, Kubernetes, Helm, GitHub Actions, Linux, Nginx, Prometheus</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900">Domain & Architecture: </span>
                  <span className="text-slate-700">AML/CFT Regulatory Compliance, Concurrency Locking, Microservices</span>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950 border-b pb-1 mb-3">
                Professional Experience
              </h2>

              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-sm text-slate-900">
                        {exp.role} <span className="font-normal text-slate-600">| {exp.company}</span>
                      </h3>
                      <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                    </div>
                    <p className="text-xs text-slate-700 italic">{exp.summary}</p>
                    <ul className="list-disc ml-5 space-y-1 text-xs text-slate-700">
                      {exp.responsibilities.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950 border-b pb-1 mb-3">
                Education & Academic Research
              </h2>

              <div className="space-y-3">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline">
                      <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono font-bold text-cyan-800">
                        CGPA: {edu.cgpa} / {edu.scale}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600">{edu.institution} • {edu.period}</p>
                    {edu.thesisOrProject && (
                      <p className="text-xs text-slate-800 font-medium mt-0.5">
                        Research Capstone: {edu.thesisOrProject}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-950 border-b pb-1 mb-2">
                Verified Certifications & Credentials
              </h2>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="flex justify-between items-baseline text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{cert.title}</span>
                      <span className="text-slate-600"> — {cert.issuer}</span>
                      {cert.credentialId && <span className="text-slate-500 font-mono"> (ID: {cert.credentialId})</span>}
                    </div>
                    <span className="font-mono text-slate-500 text-[11px]">{cert.issueDate}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
