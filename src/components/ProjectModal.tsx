import React from 'react';
import { X, ExternalLink, Github, CheckCircle, Server, Cpu, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  darkMode: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, darkMode, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] rounded-2xl border flex flex-col overflow-hidden shadow-2xl ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div className={`p-6 border-b flex items-start justify-between gap-4 ${
          darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 capitalize">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.date}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">{project.title}</h2>
            <p className="text-xs sm:text-sm text-cyan-500 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-colors ${
              darkMode ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900 shadow-xs'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Overview */}
          <div>
            <h3 className={`text-xs font-mono uppercase tracking-wider mb-2 font-bold ${
              darkMode ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              SYSTEM ARCHITECTURE & OVERVIEW
            </h3>
            <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {project.longDescription}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className={`text-xs font-mono uppercase tracking-wider mb-2.5 font-bold ${
                darkMode ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                KEY ACHIEVEMENTS & BENCHMARKS
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-center ${
                      darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <span className="block text-lg font-bold font-mono text-cyan-400">
                      {m.value}
                    </span>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div>
            <h3 className={`text-xs font-mono uppercase tracking-wider mb-2.5 font-bold ${
              darkMode ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              CORE FUNCTIONAL CAPABILITIES
            </h3>
            <div className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* System Highlights */}
          {project.systemHighlights && project.systemHighlights.length > 0 && (
            <div>
              <h3 className={`text-xs font-mono uppercase tracking-wider mb-2.5 font-bold ${
                darkMode ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                CONCURRENCY & DATA SAFEGUARDS
              </h3>
              <div className="space-y-2">
                {project.systemHighlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Server className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Tech Stack */}
          <div>
            <h3 className={`text-xs font-mono uppercase tracking-wider mb-2.5 font-bold ${
              darkMode ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              COMPLETE TECH STACK & LIBRARIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`p-4 border-t flex items-center justify-between gap-3 ${
          darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700' : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-xs'
                }`}
              >
                <Github className="w-4 h-4" />
                <span>View Source on GitHub</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Project Demo</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className={`px-4 py-2 rounded-xl text-xs font-medium ${
              darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
