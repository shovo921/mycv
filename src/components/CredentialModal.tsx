import React, { useState } from 'react';
import { X, Award, CheckCircle2, FileCheck, ShieldCheck, GraduationCap, Briefcase, ExternalLink, Calendar, MapPin, Eye, Download } from 'lucide-react';
import { Certification } from '../types';
import {
  MSC_CERTIFICATE_URL,
  MSC_TRANSCRIPT_URL,
  HSC_CERTIFICATE_URL,
  HSC_TRANSCRIPT_URL,
  SSC_CERTIFICATE_URL,
  SSC_TRANSCRIPT_URL,
  DEVOPS_CERTIFICATE_URL,
  AML_CERTIFICATE_URL
} from '../data/officialCredentials';

interface CredentialModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  selectedDocId?: string;
  customCertifications?: Certification[];
}

interface CredentialRecord {
  id: string;
  category: 'academic' | 'certification' | 'employment';
  title: string;
  institution: string;
  date: string;
  identifier: string;
  gradeOrStatus: string;
  description: string;
  verificationPoints: string[];
  fileUrl?: string;
  fileName?: string;
}

export const CredentialModal: React.FC<CredentialModalProps> = ({ 
  isOpen, 
  onClose, 
  darkMode,
  selectedDocId,
  customCertifications = []
}) => {
  const baseRecords: CredentialRecord[] = [
    {
      id: 'edu-msc',
      category: 'academic',
      title: 'Master of Science in Computer Science (PMSCS)',
      institution: 'Jahangirnagar University, Savar, Dhaka',
      date: 'Spring 2022 – Fall 2022 (Conferred 2023)',
      identifier: 'Student Roll: 20230903008 | Reg: 2021-22 3672',
      gradeOrStatus: 'CGPA 3.45 / 4.00 (Class: High Distinction)',
      fileUrl: MSC_CERTIFICATE_URL,
      fileName: 'Jahangirnagar_University_MSc_Certificate.svg',
      description: 'Official Master of Science degree conferred under the Department of Computer Science & Engineering. Thesis project focused on Enterprise Customer Service Management Systems under senior faculty advisement.',
      verificationPoints: [
        'Research Project: "Enterprise Customer Service Management System" (Grade: A, 3.75 GPA)',
        'Neural Networks (Grade: A, 3.75)',
        'Advanced Database Management Systems (Grade: A, 3.75)',
        'Digital Image Processing (Grade: A, 3.75)',
        'Network Programming (Grade: A, 3.75)',
        'Neuroinformatics (Grade: A, 3.75)',
        'Parallel & Distributed Computing (Grade: B+, 3.25)'
      ]
    },
    {
      id: 'edu-bsc',
      category: 'academic',
      title: 'Bachelor of Computer Science and Engineering (BCSE)',
      institution: 'IUBAT—International University of Business Agriculture and Technology',
      date: 'Spring 2016 – Fall 2019 (Conferred 2020)',
      identifier: 'Student ID: 16103130',
      gradeOrStatus: 'CGPA 3.49 / 4.00 (Senior Practicum: Grade A, 4.00)',
      description: 'Comprehensive four-year computer science curriculum covering computational mathematics, software engineering architectures, database design, compiler design, and operating systems.',
      verificationPoints: [
        'Senior Practicum & Comprehensive Defense: Grade A (4.00 SGPA)',
        'Core DBMS, Algorithms, Object-Oriented Software Design',
        'Academic integrity verification on record'
      ]
    },
    {
      id: 'cert-devops',
      category: 'certification',
      title: 'Certified DevOps Engineer',
      institution: 'Page Cloud Academy',
      date: 'Conferred August 22, 2024',
      identifier: 'Credential ID: CDE-C004-005',
      gradeOrStatus: 'Certified Professional',
      fileUrl: DEVOPS_CERTIFICATE_URL,
      fileName: 'PageCloud_DevOps_Engineer_Certificate.svg',
      description: 'Practical certification validating mastery of container orchestration, multi-stage Docker builds, Kubernetes cluster management, CI/CD pipeline automation, and production monitoring.',
      verificationPoints: [
        'Kubernetes cluster manifest authoring, ingress configuration, and rolling updates',
        'Multi-stage Dockerfile design reducing production images by over 60%',
        'Automated GitHub Actions CI/CD workflows with vulnerability scanning',
        'Prometheus metrics export and Grafana performance telemetry'
      ]
    },
    {
      id: 'cert-aml',
      category: 'certification',
      title: 'Fundamentals of AML & CFT Examination',
      institution: 'Padma Bank PLC (Anti-Money Laundering & CFT Division)',
      date: 'Conferred December 10, 2024',
      identifier: 'Institutional Certificate No. PB-AML-2024-12',
      gradeOrStatus: 'Verified Compliance Examiner',
      fileUrl: AML_CERTIFICATE_URL,
      fileName: 'PadmaBank_AML_CFT_Compliance_Certificate.svg',
      description: 'Mandatory banking certification assessing deep knowledge of central bank regulations, Know Your Customer (KYC) requirements, Suspicious Transaction Reports (STR), and automated AML screening logic.',
      verificationPoints: [
        'Anti-Money Laundering transaction velocity detection logic',
        'Combating Financing of Terrorism verification parameters',
        'Regulatory reporting and audit log immutability'
      ]
    },
    {
      id: 'cert-jasper',
      category: 'certification',
      title: 'Jasper Reports & Enterprise BI Specialist',
      institution: 'Enterprise Banking Technical Systems',
      date: 'Conferred 2024',
      identifier: 'BI-JASPER-2024',
      gradeOrStatus: 'Certified BI Specialist',
      description: 'Verification of operational expertise in enterprise report development, parameterized query execution, multi-database aggregation, and high-volume financial data export.',
      verificationPoints: [
        'Jasper Reports Server configuration and deployment with Oracle/MySQL',
        'Meta Report Server dynamic aggregation and multi-database connectivity',
        'High-throughput scheduled reporting in PDF and Excel formats'
      ]
    },
    {
      id: 'exp-padma',
      category: 'employment',
      title: 'Appointment & Employment Record: Officer (Software & IT)',
      institution: 'Padma Bank PLC (Head Office, Gulshan, Dhaka)',
      date: 'September 2023 – Present',
      identifier: 'Employee Code / Ref: HRD/REC-O/2023/2765',
      gradeOrStatus: 'Active Banking Officer',
      description: 'Responsible for core banking software support, transactional microservice maintenance, and compliance integrations within the bank central IT division.',
      verificationPoints: [
        'Official appointment approved by Chief Human Resources Officer and Managing Director & CEO',
        'High-volume core banking system operations and transactional integrity maintenance',
        'Collaboration with cross-functional branch managers and compliance audit committees'
      ]
    },
    {
      id: 'exp-kaicom-se',
      category: 'employment',
      title: 'Experience & Release Commendation (4.1 Years Service)',
      institution: 'Kaicom Solutions Japan BD Co. Ltd.',
      date: 'September 2019 – August 2023',
      identifier: 'Corporate Ref: KSJ/HR/EXP/2023-08-31',
      gradeOrStatus: 'Exemplary Service Rating',
      description: 'Progressed from Software Engineering Intern to Junior Software Officer to Software Engineer over 4 years of continuous service for Japanese client projects.',
      verificationPoints: [
        'Promoted from Intern to Junior Software Officer, and subsequently to Software Engineer',
        'Official commendation from Country Director & CTO for self-motivated productivity and reliable execution',
        'Formal release with clean audit clearance upon transitioning to Padma Bank PLC'
      ]
    },
    {
      id: 'edu-hsc',
      category: 'academic',
      title: 'Higher Secondary Certificate (HSC) - Science',
      institution: 'Pubail Adarsha College, Board of Intermediate and Secondary Education, Dhaka',
      date: 'Passing Year: 2015',
      identifier: 'Roll: 108139 | Reg: 1010959473',
      gradeOrStatus: 'GPA 4.17 / 5.00',
      fileUrl: HSC_CERTIFICATE_URL,
      fileName: 'Dhaka_Board_HSC_Certificate.svg',
      description: 'Higher Secondary education in Science with letter grades: Higher Mathematics (A+, 5.00), Chemistry (A), Physics (A-), ICT (A-).',
      verificationPoints: [
        'Higher Mathematics: Letter Grade A+ (Grade Point 5.0)',
        'Science group graduation under Dhaka Board'
      ]
    },
    {
      id: 'edu-ssc',
      category: 'academic',
      title: 'Secondary School Certificate (SSC) - Science',
      institution: 'Kayer High School, Board of Intermediate and Secondary Education, Dhaka',
      date: 'Passing Year: 2013',
      identifier: 'Roll: 109282 | Reg: 1010959473',
      gradeOrStatus: 'GPA 4.63 / 5.00',
      fileUrl: SSC_CERTIFICATE_URL,
      fileName: 'Dhaka_Board_SSC_Certificate.svg',
      description: 'Secondary education in Science with distinctions in Mathematics (A+, 5.00), Biology (A+, 5.00), and Religion (A+, 5.00).',
      verificationPoints: [
        'General Mathematics: A+ (5.00)',
        'Biology: A+ (5.00)',
        'Science foundation with high GPA'
      ]
    }
  ];

  // Merge in any custom uploaded certificates from Admin Panel that aren't already in baseRecords
  const dynamicCertRecords: CredentialRecord[] = customCertifications
    .filter((c) => !baseRecords.some((b) => b.id === c.id))
    .map((c) => ({
      id: c.id,
      category: 'certification',
      title: c.title,
      institution: c.issuer,
      date: c.issueDate,
      identifier: c.credentialId || `ID-${c.id.slice(-4)}`,
      gradeOrStatus: 'Verified Certificate',
      description: c.description,
      verificationPoints: c.verificationPoints || c.skills.map((s) => `Validated competency: ${s}`),
      fileUrl: c.fileUrl,
      fileName: c.fileName
    }));

  const records = [...dynamicCertRecords, ...baseRecords];

  const [activeTab, setActiveTab] = useState<'all' | 'academic' | 'certification' | 'employment'>('all');

  if (!isOpen) return null;

  const filteredRecords = activeTab === 'all'
    ? records
    : records.filter((r) => r.category === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl border flex flex-col overflow-hidden shadow-2xl ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className={`p-6 border-b flex items-start justify-between gap-4 ${
          darkMode ? 'bg-slate-950/70 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center shadow-md">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Verified Academic & Professional Credentials</h2>
              <p className="text-xs text-slate-400 font-mono">
                Official certificates, degree transcripts, and institutional service records of Shuv Chandra Das
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors ${
              darkMode ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className={`px-6 py-3 border-b flex items-center gap-2 overflow-x-auto ${
          darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-100/50 border-slate-200'
        }`}>
          {[
            { id: 'all', label: 'All Credentials' },
            { id: 'academic', label: 'University & Academic' },
            { id: 'certification', label: 'Certifications' },
            { id: 'employment', label: 'Employment Records' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : darkMode
                  ? 'text-slate-300 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Records */}
        <div className="p-6 overflow-y-auto space-y-6">
          {filteredRecords.map((record) => (
            <div
              key={record.id}
              className={`p-6 rounded-2xl border transition-all ${
                selectedDocId === record.id
                  ? 'border-cyan-500 ring-2 ring-cyan-500/20'
                  : darkMode
                  ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
                      {record.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {record.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{record.title}</h3>
                  <p className="text-sm text-cyan-400 font-semibold">{record.institution}</p>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">{record.identifier}</p>
                </div>

                <div className={`px-3.5 py-1.5 rounded-xl border text-center flex-shrink-0 ${
                  darkMode ? 'bg-slate-900 border-slate-800 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
                }`}>
                  <span className="block text-[10px] font-mono text-slate-400">RESULT / STATUS</span>
                  <span className="text-xs sm:text-sm font-bold font-mono">
                    {record.gradeOrStatus}
                  </span>
                </div>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {record.description}
              </p>

              {/* Uploaded Certificate Document Preview */}
              {record.fileUrl && (
                <div className={`p-4 rounded-xl border mb-4 ${
                  darkMode ? 'bg-slate-900/90 border-cyan-800/40' : 'bg-cyan-50/50 border-cyan-200'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-semibold text-cyan-400 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>Uploaded Certificate Attachment: {record.fileName || 'certificate-scan.pdf'}</span>
                    </span>
                    <a
                      href={record.fileUrl}
                      download={record.fileName || 'certificate'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download File</span>
                    </a>
                  </div>

                  {record.fileUrl.startsWith('data:image') && (
                    <div className="rounded-lg overflow-hidden border border-slate-700 max-h-60 mt-2">
                      <img
                        src={record.fileUrl}
                        alt={record.title}
                        className="w-full h-full object-contain bg-slate-950"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-1.5 pt-3 border-t border-slate-800/60">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  VERIFIED PARTICULARS:
                </span>
                {record.verificationPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`p-4 border-t flex items-center justify-between ${
          darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>All official seals, roll numbers, and institutional credentials confirmed.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
