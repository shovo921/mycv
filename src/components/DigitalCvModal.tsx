import React, { useState } from 'react';
import { X, Printer, Download, Mail, Phone, Globe, Linkedin, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import { SHUV_PORTRAIT_URL } from '../data/officialCredentials';

interface DigitalCvModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const DigitalCvModal: React.FC<DigitalCvModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [activePageView, setActivePageView] = useState<'all' | 'page1' | 'page2'>('all');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const textContent = `Shuv Chandra Das
E-mail: shovodas921@gmail.com
Phone: +8801303802470
Profile: https://www.linkedin.com/in/shovo-das-0385a3193/
Website: shovodas.netlify.com

Professional Summary
--------------------
Software Engineer with over 7 years of experience in software development, including banking and enterprise applications. Currently working at Padma Bank PLC, developing and supporting banking applications, digital platforms and database-driven systems. Experienced in Laravel, PHP, Vue.js, React.js, .NET, REST APIs, SQL, Oracle, MySQL, Docker and Git. Also completed professional certifications in DevOps Engineering and Fundamentals of AML & CFT. Strong in problem solving, application support, system integration and working with teams to deliver reliable software solutions.

Skills
------
Reporting: Jasper Reports Server • Meta Report Server • PDF/Excel Reporting
DevOps & Tools: Docker • Git • GitHub • Postman
Web & API: HTML5 • CSS3 • Bootstrap • jQuery • AJAX • REST APIs
Database: Oracle Database • MySQL • SQL Query & Database Design
Frameworks: Laravel • Vue.js • React.js • .NET • ASP.NET • Django CMS
Programming: PHP (OOP) • JavaScript • Python • C# • SQL
Core Competencies: Banking Application Development • Software Development Life Cycle (SDLC) • System Analysis • Application Support • API Integration • Database Management • Troubleshooting

Professional Experience
-----------------------
Padma Bank PLC. (03 September 2023 – Present) Officer – Software Development
• Develop and maintain banking-related internal web applications and digital solutions.
• Work with Laravel, PHP, JavaScript, AJAX, HTML, CSS and Bootstrap for application development and support.
• Support database-driven applications, reporting, API integration and production issues.
• Troubleshoot application problems and contribute to secure, scalable and maintainable solutions.

Kaicom Solutions Japan Co. Ltd. (01 August 2019 – 30 August 2023) Software Engineer – Software Development
• Developed web and enterprise applications using Laravel, JavaScript, Vue.js, Django CMS and WordPress.
• Designed and integrated REST APIs and worked with MySQL and Oracle databases.
• Handled testing, debugging, deployment support, database design and application improvements.
• Worked with teams and clients to deliver and support production software.

Reporting & BI Tools
--------------------
Jasper Reports Server
• Report design and deployment
• Parameterized reports
• Database connection with Oracle/MySQL

Meta Report Server
• Dynamic report generation
• Multi-database reporting
• Filtering and exporting reports (PDF/Excel)

Professional Certifications
---------------------------
Certified DevOps Engineer — Page Cloud Academy
22 August 2024 | Certification ID: CDE-C004-005

Fundamentals of AML & CFT – Certificate of Examination — AML & CFT Division, Padma Bank PLC
10 December 2024 | Successfully passed the examination

================================================================================
Key Banking & Enterprise Projects
================================================================================
• E-commerce Management Systems — Developed web-based management systems using Laravel, Vue.js and AJAX.
• CMS Projects — Developed CMS-based solutions using PHP/Laravel and Django CMS.
• Education / Study Portal — Developed a Laravel-based education portal using JavaScript, HTML, CSS and Bootstrap.
• Padma Bank Website — Developed and supported website functionality using Laravel, AJAX, JavaScript, HTML, CSS and Bootstrap.
• Padma NRB Project — Worked on an NRB-focused banking solution supporting application processes and digital services.
• Padma Visa Processing — Worked on a visa processing solution to support application workflow and related banking operations.
• Padma NID Verification — Worked on NID verification functionality and application integration using Laravel, JavaScript, jQuery and Bootstrap.
• Padma Portal — Developed and supported a banking portal for internal operations and digital services using Laravel and related web technologies.
• Padma HRIS System — Developed and supported an HR information system using Laravel, AJAX, JavaScript, HTML, CSS and Bootstrap.

Education
---------
Degree: M.Sc.
Group/Subject: Computer Science & Engineering
Institute: Jahangirnagar University
CGPA/GPA: 3.45 / 4.00
Passing Year: 2023

Degree: B.Sc. Engineering
Group/Subject: Computer Science & Engineering
Institute: International University of Business Agriculture and Technology
CGPA/GPA: 3.49 / 4.00
Passing Year: 2020

Degree: H.S.C.
Group/Subject: Science
Institute: Pubail Adarsha University College
CGPA/GPA: 4.17 / 5.00
Passing Year: 2015

Degree: S.S.C.
Group/Subject: Science
Institute: Kayer High School
CGPA/GPA: 4.63 / 5.00
Passing Year: 2013

Personal Information
--------------------
Date of Birth: 18 July 1997
Blood Group: B+
Nationality: Bangladeshi
Marital Status: Married
Address: House #109, Barakayer, Pubail, Gazipur Sadar, Gazipur

References
----------
Md. Mosharraf Hossain Khan
Padma Bank PLC
Executive Vice President
Mobile: 01946375712
Email: mosharraf.2021@padmabankbd.com
Relation: Professional

Pronab Kumar Roy
NRB Bank PLC
Principal Officer
Mobile: 01780884747
Email: pronab.roy@nrbbankbd.com
Relation: Professional
`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Shuv_Chandra_Das_ATS_Resume.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      {/* Print Specific Styling */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-ats-resume, #printable-ats-resume * {
            visibility: visible;
          }
          #printable-ats-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 0;
            background: white !important;
            color: black !important;
          }
          .no-print {
            display: none !important;
          }
          .page-break {
            page-break-before: always;
            break-before: page;
          }
        }
      `}</style>

      <div
        className={`relative w-full max-w-4xl max-h-[96vh] rounded-2xl border flex flex-col overflow-hidden shadow-2xl ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
        }`}
      >
        {/* Modal Controls Header */}
        <div className={`p-3.5 sm:p-4 border-b flex flex-wrap items-center justify-between gap-3 no-print ${
          darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-100 border-slate-200'
        }`}>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm font-mono">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>ATS Resume: Shuv Chandra Das</span>
            </div>
            <span className="hidden md:inline-block px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              Official 2-Page Document
            </span>
          </div>

          {/* Page view filters & Action Buttons */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-slate-900/60 p-0.5 rounded-lg border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActivePageView('all')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activePageView === 'all' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Pages
              </button>
              <button
                onClick={() => setActivePageView('page1')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activePageView === 'page1' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Page 1
              </button>
              <button
                onClick={() => setActivePageView('page2')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activePageView === 'page2' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Page 2
              </button>
            </div>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300'
              }`}
              title="Download clean plain text resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download TXT</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable ATS Resume Paper Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-950/40 flex justify-center">
          <div 
            id="printable-ats-resume"
            className="w-full max-w-[850px] bg-white text-slate-950 shadow-2xl border border-slate-300 rounded-sm font-serif print:border-none print:shadow-none print:max-w-none leading-normal"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            {/* ============================================================ */}
            {/* PAGE 1 */}
            {/* ============================================================ */}
            {(activePageView === 'all' || activePageView === 'page1') && (
              <div className="p-8 sm:p-12 space-y-4">
                {/* Header with Info and Photo */}
                <div className="flex justify-between items-start gap-4 pb-2">
                  <div className="space-y-1">
                    <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
                      Shuv Chandra Das
                    </h1>
                    <div className="text-[13px] text-slate-800 space-y-0.5">
                      <p>
                        <span className="font-semibold">E-mail:</span>{' '}
                        <a href="mailto:shovodas921@gmail.com" className="text-slate-900 hover:underline">
                          shovodas921@gmail.com
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">Phone:</span> +8801303802470
                      </p>
                      <p>
                        <span className="font-semibold">Profile:</span>{' '}
                        <a 
                          href="https://www.linkedin.com/in/shovo-das-0385a3193/" 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-slate-900 hover:underline break-all"
                        >
                          https://www.linkedin.com/in/shovo-das-0385a3193/
                        </a>
                      </p>
                      <p>
                        <span className="font-semibold">Website:</span>{' '}
                        <a 
                          href="https://shovodas.netlify.com" 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-slate-900 hover:underline"
                        >
                          shovodas.netlify.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Formal Portrait Photo */}
                  <div className="shrink-0 w-24 h-32 sm:w-28 sm:h-36 border border-slate-400 overflow-hidden bg-slate-100 shadow-sm">
                    <img 
                      src={SHUV_PORTRAIT_URL} 
                      alt="Shuv Chandra Das" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Professional Summary */}
                <div>
                  <h2 className="text-sm font-bold text-slate-950 border-b border-slate-900 pb-0.5 mb-1.5">
                    Professional Summary
                  </h2>
                  <p className="text-[13px] text-slate-800 leading-relaxed text-justify">
                    Software Engineer with over 7 years of experience in software development, including banking and enterprise applications. Currently working at Padma Bank PLC, developing and supporting banking applications, digital platforms and database-driven systems. Experienced in Laravel, PHP, Vue.js, React.js, .NET, REST APIs, SQL, Oracle, MySQL, Docker and Git. Also completed professional certifications in DevOps Engineering and Fundamentals of AML & CFT. Strong in problem solving, application support, system integration and working with teams to deliver reliable software solutions.
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h2 className="text-sm font-bold text-slate-950 border-b border-slate-900 pb-0.5 mb-1.5">
                    Skills
                  </h2>
                  <div className="text-[13px] text-slate-800 space-y-1">
                    <p>
                      <span className="font-bold">Reporting:</span> Jasper Reports Server • Meta Report Server • PDF/Excel Reporting
                    </p>
                    <p>
                      <span className="font-bold">DevOps & Tools:</span> Docker • Git • GitHub • Postman
                    </p>
                    <p>
                      <span className="font-bold">Web & API:</span> HTML5 • CSS3 • Bootstrap • jQuery • AJAX • REST APIs
                    </p>
                    <p>
                      <span className="font-bold">Database:</span> Oracle Database • MySQL • SQL Query & Database Design
                    </p>
                    <p>
                      <span className="font-bold">Frameworks:</span> Laravel • Vue.js • React.js • .NET • ASP.NET • Django CMS
                    </p>
                    <p>
                      <span className="font-bold">Programming:</span> PHP (OOP) • JavaScript • Python • C# • SQL
                    </p>
                    <p>
                      <span className="font-bold">Core Competencies:</span> Banking Application Development • Software Development Life Cycle (SDLC) • System Analysis • Application Support • API Integration • Database Management • Troubleshooting
                    </p>
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h2 className="text-sm font-bold text-slate-950 border-b border-slate-900 pb-0.5 mb-1.5">
                    Professional Experience
                  </h2>

                  <div className="space-y-3 pt-1">
                    {/* Padma Bank PLC */}
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between">
                        <p className="text-[13px] font-bold text-slate-950">
                          Padma Bank PLC. <span className="font-normal text-slate-700">(03 September 2023 – Present)</span>
                        </p>
                        <p className="text-[13px] font-semibold text-slate-900">
                          Officer – Software Development
                        </p>
                      </div>
                      <ul className="list-disc ml-5 mt-1 text-[13px] text-slate-800 space-y-0.5">
                        <li>Develop and maintain banking-related internal web applications and digital solutions.</li>
                        <li>Work with Laravel, PHP, JavaScript, AJAX, HTML, CSS and Bootstrap for application development and support.</li>
                        <li>Support database-driven applications, reporting, API integration and production issues.</li>
                        <li>Troubleshoot application problems and contribute to secure, scalable and maintainable solutions.</li>
                      </ul>
                    </div>

                    {/* Kaicom Solutions Japan Co. Ltd. */}
                    <div>
                      <div className="flex flex-wrap items-baseline justify-between">
                        <p className="text-[13px] font-bold text-slate-950">
                          Kaicom Solutions Japan Co. Ltd. <span className="font-normal text-slate-700">(01 August 2019 – 30 August 2023)</span>
                        </p>
                        <p className="text-[13px] font-semibold text-slate-900">
                          Software Engineer – Software Development
                        </p>
                      </div>
                      <ul className="list-disc ml-5 mt-1 text-[13px] text-slate-800 space-y-0.5">
                        <li>Developed web and enterprise applications using Laravel, JavaScript, Vue.js, Django CMS and WordPress.</li>
                        <li>Designed and integrated REST APIs and worked with MySQL and Oracle databases.</li>
                        <li>Handled testing, debugging, deployment support, database design and application improvements.</li>
                        <li>Worked with teams and clients to deliver and support production software.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Reporting & BI Tools */}
                <div>
                  <h2 className="text-sm font-bold text-slate-950 border-b border-slate-900 pb-0.5 mb-1.5">
                    Reporting & BI Tools
                  </h2>
                  <div className="space-y-2 pt-1 text-[13px] text-slate-800">
                    <div>
                      <p className="font-bold text-slate-950">Jasper Reports Server</p>
                      <ul className="list-disc ml-5 space-y-0.5">
                        <li>Report design and deployment</li>
                        <li>Parameterized reports</li>
                        <li>Database connection with Oracle/MySQL</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold text-slate-950">Meta Report Server</p>
                      <ul className="list-disc ml-5 space-y-0.5">
                        <li>Dynamic report generation</li>
                        <li>Multi-database reporting</li>
                        <li>Filtering and exporting reports (PDF/Excel)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Professional Certifications */}
                <div>
                  <h2 className="text-sm font-bold text-slate-950 border-b border-slate-900 pb-0.5 mb-1.5">
                    Professional Certifications
                  </h2>
                  <div className="space-y-1.5 pt-1 text-[13px] text-slate-800">
                    <div>
                      <p className="font-bold text-slate-950">
                        Certified DevOps Engineer — <span className="font-normal">Page Cloud Academy</span>
                      </p>
                      <p className="text-slate-600 text-[12px]">
                        22 August 2024 | Certification ID: CDE-C004-005
                      </p>
                    </div>
                    <div>
                      <p className="font-bold text-slate-950">
                        Fundamentals of AML & CFT – Certificate of Examination — <span className="font-normal">AML & CFT Division, Padma Bank PLC</span>
                      </p>
                      <p className="text-slate-600 text-[12px]">
                        10 December 2024 | Successfully passed the examination
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Page Divider / Break Indicator */}
            {activePageView === 'all' && (
              <div className="border-t-2 border-dashed border-slate-300 py-3 bg-slate-100/60 flex items-center justify-center text-[11px] font-mono text-slate-500 no-print">
                <span>— Page 2 Break (Page 1 above • Page 2 below) —</span>
              </div>
            )}

            {/* ============================================================ */}
            {/* PAGE 2 */}
            {/* ============================================================ */}
            {(activePageView === 'all' || activePageView === 'page2') && (
              <div className={`p-8 sm:p-12 space-y-4 ${activePageView === 'all' ? 'page-break' : ''}`}>
                {/* Key Banking & Enterprise Projects */}
                <div>
                  <h2 className="text-sm font-bold text-slate-950 border-b border-slate-900 pb-0.5 mb-2">
                    Key Banking & Enterprise Projects
                  </h2>
                  <ul className="space-y-1.5 text-[13px] text-slate-800">
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <div>
                        <span className="font-bold text-slate-950">E-commerce Management Systems</span>
                        <span> — Developed web-based management systems using Laravel, Vue.js and AJAX.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <div>
                        <span className="font-bold text-slate-950">CMS Projects</span>
                        <span> — Developed CMS-based solutions using PHP/Laravel and Django CMS.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <div>
                        <span className="font-bold text-slate-950">Education / Study Portal</span>
                        <span> — Developed a Laravel-based education portal using JavaScript, HTML, CSS and Bootstrap.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <div>
                        <span className="font-bold text-slate-950">Padma Bank Website</span>
                        <span> — Developed and supported website functionality using Laravel, AJAX, JavaScript, HTML, CSS and Bootstrap.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <div>
                        <span className="font-bold text-slate-950">Padma NRB Project</span>
                        <span> — Worked on an NRB-focused banking solution supporting application processes and digital services.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <div>
                        <span className="font-bold text-slate-950">Padma Visa Processing</span>
                        <span> — Worked on a visa processing solution to support application workflow and related banking operations.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <div>
                        <span className="font-bold text-slate-950">Padma NID Verification</span>
                        <span> — Worked on NID verification functionality and application integration using Laravel, JavaScript, jQuery and Bootstrap.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <div>
                        <span className="font-bold text-slate-950">Padma Portal</span>
                        <span> — Developed and supported a banking portal for internal operations and digital services using Laravel and related web technologies.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-slate-900 font-bold">•</span>
                      <div>
                        <span className="font-bold text-slate-950">Padma HRIS System</span>
                        <span> — Developed and supported an HR information system using Laravel, AJAX, JavaScript, HTML, CSS and Bootstrap.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Education Table */}
                <div>
                  <h2 className="text-sm font-bold text-slate-950 border-b border-slate-900 pb-0.5 mb-2">
                    Education
                  </h2>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-slate-400 text-[12.5px] text-slate-800">
                      <thead>
                        <tr className="bg-slate-100 font-bold text-slate-950 text-left">
                          <th className="border border-slate-400 p-2">Degree</th>
                          <th className="border border-slate-400 p-2">Group/Subject</th>
                          <th className="border border-slate-400 p-2">Institute</th>
                          <th className="border border-slate-400 p-2 text-center">CGPA/GPA</th>
                          <th className="border border-slate-400 p-2 text-center">Passing Year</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-400 p-2 font-medium">M.Sc.</td>
                          <td className="border border-slate-400 p-2">Computer Science & Engineering</td>
                          <td className="border border-slate-400 p-2">Jahangirnagar University</td>
                          <td className="border border-slate-400 p-2 text-center">3.45 / 4.00</td>
                          <td className="border border-slate-400 p-2 text-center">2023</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-400 p-2 font-medium">B.Sc. Engineering</td>
                          <td className="border border-slate-400 p-2">Computer Science & Engineering</td>
                          <td className="border border-slate-400 p-2">International University of Business Agriculture and Technology</td>
                          <td className="border border-slate-400 p-2 text-center">3.49 / 4.00</td>
                          <td className="border border-slate-400 p-2 text-center">2020</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-400 p-2 font-medium">H.S.C.</td>
                          <td className="border border-slate-400 p-2">Science</td>
                          <td className="border border-slate-400 p-2">Pubail Adarsha University College</td>
                          <td className="border border-slate-400 p-2 text-center">4.17 / 5.00</td>
                          <td className="border border-slate-400 p-2 text-center">2015</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-400 p-2 font-medium">S.S.C.</td>
                          <td className="border border-slate-400 p-2">Science</td>
                          <td className="border border-slate-400 p-2">Kayer High School</td>
                          <td className="border border-slate-400 p-2 text-center">4.63 / 5.00</td>
                          <td className="border border-slate-400 p-2 text-center">2013</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <h2 className="text-sm font-bold text-slate-950 border-b border-slate-900 pb-0.5 mb-1.5">
                    Personal Information
                  </h2>
                  <div className="text-[13px] text-slate-800 space-y-0.5">
                    <p><span className="font-bold">Date of Birth:</span> 18 July 1997</p>
                    <p><span className="font-bold">Blood Group:</span> B+</p>
                    <p><span className="font-bold">Nationality:</span> Bangladeshi</p>
                    <p><span className="font-bold">Marital Status:</span> Married</p>
                    <p><span className="font-bold">Address:</span> House #109, Barakayer, Pubail, Gazipur Sadar, Gazipur</p>
                  </div>
                </div>

                {/* References */}
                <div>
                  <h2 className="text-sm font-bold text-slate-950 border-b border-slate-900 pb-0.5 mb-2">
                    References
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px] text-slate-800 pt-1">
                    {/* Reference 1 */}
                    <div className="space-y-0.5">
                      <p className="font-bold text-slate-950 text-sm">Md. Mosharraf Hossain Khan</p>
                      <p className="font-semibold text-slate-900">Padma Bank PLC</p>
                      <p>Executive Vice President</p>
                      <p>Mobile: 01946375712</p>
                      <p>
                        Email:{' '}
                        <a href="mailto:mosharraf.2021@padmabankbd.com" className="text-slate-900 hover:underline">
                          mosharraf.2021@padmabankbd.com
                        </a>
                      </p>
                      <p>Relation: Professional</p>
                    </div>

                    {/* Reference 2 */}
                    <div className="space-y-0.5">
                      <p className="font-bold text-slate-950 text-sm">Pronab Kumar Roy</p>
                      <p className="font-semibold text-slate-900">NRB Bank PLC</p>
                      <p>Principal Officer</p>
                      <p>Mobile: 01780884747</p>
                      <p>
                        Email:{' '}
                        <a href="mailto:pronab.roy@nrbbankbd.com" className="text-slate-900 hover:underline">
                          pronab.roy@nrbbankbd.com
                        </a>
                      </p>
                      <p>Relation: Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
