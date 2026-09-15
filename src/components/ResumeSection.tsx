import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  CheckCircle, 
  FileCheck2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { EXPERIENCES, EDUCATION_LIST, CERTIFICATIONS } from '../data/portfolioData';
import { Experience, Education, Certification } from '../types';

interface ResumeSectionProps {
  darkMode: boolean;
  onOpenCredentialModal: (docType?: string) => void;
  onOpenCvModal: () => void;
  certifications?: Certification[];
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ 
  darkMode, 
  onOpenCredentialModal,
  onOpenCvModal,
  certifications = CERTIFICATIONS
}) => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'certifications'>('experience');

  return (
    <section id="experience" className={`py-20 border-t ${
      darkMode ? 'bg-slate-950/60 border-slate-800/80' : 'bg-slate-50/70 border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & ACADEMIC TRAJECTORY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Experience & Education Timeline
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Track record of continuous advancement across enterprise banking, international software consulting, and postgraduate research.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className={`p-1.5 rounded-2xl border flex flex-wrap gap-1 ${
            darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <button
              id="resume-tab-experience"
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                  : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Experience ({EXPERIENCES.length})</span>
            </button>

            <button
              id="resume-tab-education"
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                  : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education ({EDUCATION_LIST.length})</span>
            </button>

            <button
              id="resume-tab-certs"
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                  : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Certifications ({certifications.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  exp.current
                    ? darkMode
                      ? 'bg-slate-900/80 border-cyan-800/60 shadow-lg shadow-cyan-950/20'
                      : 'bg-white border-blue-300 shadow-md shadow-blue-100'
                    : darkMode
                    ? 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          Current Role
                        </span>
                      )}
                    </div>
                    <p className={`text-sm font-semibold text-cyan-500`}>
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className={`text-sm mb-4 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {exp.summary}
                </p>

                <div className="space-y-2 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <ChevronRight className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                        {resp}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono ${
                          darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.certificateAvailable && (
                    <button
                      onClick={() => onOpenCredentialModal(exp.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 underline underline-offset-4"
                    >
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Verified Documentation</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Education */}
        {activeTab === 'education' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all ${
                  edu.degreeType === 'master'
                    ? darkMode
                      ? 'bg-slate-900/80 border-indigo-900/60 shadow-lg'
                      : 'bg-white border-indigo-200 shadow-md'
                    : darkMode
                    ? 'bg-slate-900/40 border-slate-800'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {edu.location}
                      </span>
                    </div>
                  </div>

                  <div className={`px-3.5 py-1.5 rounded-xl border text-center ${
                    darkMode ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-100 border-slate-200'
                  }`}>
                    <span className="block text-[11px] font-mono text-slate-400">CGPA / GPA</span>
                    <span className="text-lg font-bold font-mono text-cyan-400">
                      {edu.cgpa} <span className="text-xs text-slate-400 font-normal">/ {edu.scale}</span>
                    </span>
                  </div>
                </div>

                {edu.thesisOrProject && (
                  <div className={`p-3.5 rounded-xl border mb-4 text-xs sm:text-sm ${
                    darkMode ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}>
                    <span className="font-bold text-cyan-400">Research Capstone: </span>
                    {edu.thesisOrProject}
                  </div>
                )}

                <div className="space-y-2 mb-4">
                  <span className={`text-xs font-mono uppercase tracking-wider block ${
                    darkMode ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Key Coursework & Advanced Modules
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {edu.keyCourses.map((course, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-lg text-xs font-medium ${
                          darkMode ? 'bg-slate-800/80 text-slate-300 border border-slate-700/50' : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/50 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono">
                    Official Transcript & Degree Verified
                  </span>
                  <button
                    onClick={() => onOpenCredentialModal(edu.id)}
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium underline underline-offset-4"
                  >
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>View Academic Record Details</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === 'certifications' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
                    cert.category === 'devops'
                      ? darkMode
                        ? 'bg-slate-900/80 border-cyan-800/50 shadow-md'
                        : 'bg-white border-cyan-200 shadow-sm'
                      : cert.category === 'banking'
                      ? darkMode
                        ? 'bg-slate-900/80 border-emerald-800/50 shadow-md'
                        : 'bg-white border-emerald-200 shadow-sm'
                      : darkMode
                      ? 'bg-slate-900/80 border-indigo-800/50 shadow-md'
                      : 'bg-white border-indigo-200 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {cert.credentialId && (
                          <span className="px-2.5 py-1 rounded font-mono text-xs bg-slate-800 text-slate-300 border border-slate-700">
                            ID: {cert.credentialId}
                          </span>
                        )}
                        {cert.fileUrl && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            Attachment Verified
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {cert.title}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-500 mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs font-mono text-slate-400 mb-4">
                      Issued: {cert.issueDate}
                    </p>

                    <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                      darkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-2.5 py-1 rounded text-[11px] font-mono ${
                            darkMode ? 'bg-slate-800 text-cyan-300' : 'bg-slate-100 text-blue-700'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onOpenCredentialModal(cert.id)}
                      className="w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider border border-cyan-800/50 text-cyan-400 hover:bg-cyan-950/40 transition-colors flex items-center justify-center gap-2"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>Inspect Verified Certificate Details</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Action Strip */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenCvModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 transition-all"
          >
            <Award className="w-4 h-4" />
            <span>Open Comprehensive ATS Resume & Document Viewer</span>
          </button>
        </div>

      </div>
    </section>
  );
};
