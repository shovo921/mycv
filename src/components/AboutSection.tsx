import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  GitBranch, 
  Layers, 
  CheckCircle2, 
  Award, 
  BookOpen, 
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SHUV_PORTRAIT_URL } from '../data/officialCredentials';

interface AboutSectionProps {
  darkMode: boolean;
  onOpenCredentialModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, onOpenCredentialModal }) => {
  return (
    <section id="about" className={`py-20 border-t ${
      darkMode ? 'bg-slate-950/40 border-slate-800/80' : 'bg-slate-50/60 border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50">
            <Cpu className="w-3.5 h-3.5" />
            <span>ENGINEERING BACKGROUND</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Delivering Robust Software at Scale
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Bridging academic rigor in distributed systems with real-world banking and international client execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Bio & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800/60">
                <div className="flex items-center gap-4">
                  <div className="relative shrink-0">
                    <img
                      src={SHUV_PORTRAIT_URL}
                      alt="Shuv Chandra Das Portrait"
                      className="w-16 h-16 rounded-xl object-cover border-2 border-cyan-500 shadow-md shadow-cyan-500/20"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-400">
                      Officer • Software Development (Padma Bank PLC)
                    </p>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      M.Sc. in CSE, Jahangirnagar University • 7.1+ Yrs Experience
                    </p>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end justify-between gap-1 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800 text-cyan-300 text-[11px] font-semibold">
                    Full-Stack & Banking IT
                  </span>
                  <span className="text-slate-400 text-[11px]">
                    Gulshan-1, Dhaka
                  </span>
                </div>
              </div>

              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {PERSONAL_INFO.about.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex flex-wrap gap-4 items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Verified Credentials & Experience Records</span>
                </div>
                <button
                  id="about-view-docs-btn"
                  onClick={onOpenCredentialModal}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all border ${
                    darkMode
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300'
                  }`}
                >
                  <Award className="w-3.5 h-3.5 text-indigo-400" />
                  <span>View Academic & Official Records</span>
                </button>
              </div>
            </div>

            {/* Core Values / Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className={`p-5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-cyan-800/50' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className={`font-bold text-sm mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  ACID & Concurrency
                </h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Strict financial idempotency, pessimistic locks, and zero-loss ledger designs.
                </p>
              </div>

              <div className={`p-5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-blue-800/50' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-3">
                  <GitBranch className="w-5 h-5" />
                </div>
                <h4 className={`font-bold text-sm mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  DevOps Automation
                </h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Automated container pipelines, Kubernetes cluster health probes, and zero-downtime rollouts.
                </p>
              </div>

              <div className={`p-5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-emerald-800/50' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className={`font-bold text-sm mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Compliance & Security
                </h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Trained in AML/CFT protocols, sensitive data masking, and RBAC authorization matrices.
                </p>
              </div>

              <div className={`p-5 rounded-xl border transition-all ${
                darkMode ? 'bg-slate-900/40 border-slate-800 hover:border-purple-800/50' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className={`font-bold text-sm mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Computer Science Foundation
                </h4>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Master's degree with A-grade research in Distributed Enterprise Customer Management Systems.
                </p>
              </div>
            </div>
          </div>

          {/* Right: What I Do (Service Offerings) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className={`text-lg font-bold tracking-tight px-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Areas of Specialization
            </h3>

            {PERSONAL_INFO.services.map((service, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 font-mono text-xs flex items-center justify-center mt-0.5">
                    0{index + 1}
                  </span>
                  <div>
                    <h4 className={`font-bold text-sm mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {service.title}
                    </h4>
                    <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
