import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Upload, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink,
  Github,
  Linkedin,
  Sparkles,
  Code2,
  UserCheck,
  Building2,
  Award
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SHUV_PORTRAIT_URL } from '../data/officialCredentials';

interface HeroProps {
  darkMode: boolean;
  onOpenCvModal: () => void;
  onScrollToSection: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenCvModal, onScrollToSection }) => {
  const [activeCardTab, setActiveCardTab] = useState<'code' | 'portrait'>('code');
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wide">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className={darkMode ? 'text-emerald-400' : 'text-emerald-700 font-semibold'}>
                Officer (Software Development) • Padma Bank PLC
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                  Hi, I'm{' '}
                </span>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              <p className={`text-xl sm:text-2xl font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {PERSONAL_INFO.role}
              </p>
            </div>

            {/* Tagline & Key Credentials */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              7.2+ years crafting high-resilience banking applications, internal enterprise HRIS portals, and automated container delivery pipelines.
              Specialized in <span className="font-semibold text-cyan-400">PHP (Laravel)</span>, <span className="font-semibold text-blue-400">Oracle & MySQL</span>, <span className="font-semibold text-emerald-400">Docker</span>, and <span className="font-semibold text-amber-400">Jasper Reports</span>.
            </p>

            {/* Key Verified Credential Chips */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border ${
                darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                <span>Padma Bank PLC (03-09-2023 to Continue • 3.1 Years)</span>
              </div>
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border ${
                darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>MSc Computer Science (JU, CGPA 3.45)</span>
              </div>
              <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border ${
                darkMode ? 'bg-slate-900/80 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Certified DevOps Engineer</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-explore-projects-btn"
                onClick={() => onScrollToSection('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-upload-cv-btn"
                onClick={() => onScrollToSection('cv-section')}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all hover:-translate-y-0.5 ${
                  darkMode
                    ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-600'
                    : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-sm'
                }`}
              >
                <Upload className="w-4 h-4 text-cyan-400" />
                <span>Upload & View CV</span>
              </button>

              <button
                id="hero-quick-resume-btn"
                onClick={onOpenCvModal}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                  darkMode
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>ATS Resume</span>
              </button>
            </div>

            {/* Social & Contact Bar */}
            <div className={`pt-4 border-t flex flex-wrap items-center gap-6 text-xs font-mono ${
              darkMode ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
            }`}>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                title="Send email"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-500" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a 
                href={`tel:${PERSONAL_INFO.mobile}`} 
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                title="Call directly"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <div className="flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3 ml-auto">
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1.5 rounded-lg hover:text-cyan-400 transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1.5 rounded-lg hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href={PERSONAL_INFO.website} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-1.5 rounded-lg hover:text-cyan-400 transition-colors"
                  aria-label="Personal website"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Profile & Code Card */}
          <div className="lg:col-span-5">
            <div className={`rounded-2xl border p-1 shadow-2xl transition-all ${
              darkMode
                ? 'bg-slate-900/70 border-slate-800 shadow-cyan-950/20'
                : 'bg-white border-slate-200 shadow-slate-300/40'
            }`}>
              
              {/* Window Header with Tab Switcher */}
              <div className={`flex items-center justify-between px-3 sm:px-4 py-2.5 rounded-t-xl border-b ${
                darkMode ? 'bg-slate-950/80 border-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
              }`}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tab Switcher: Spec.ts first then Portrait */}
                <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-800 text-[11px] font-mono">
                  <button
                    id="hero-tab-spec"
                    onClick={() => setActiveCardTab('code')}
                    className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                      activeCardTab === 'code'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Code2 className="w-3 h-3" />
                    <span>Spec.ts</span>
                  </button>
                  <button
                    id="hero-tab-portrait"
                    onClick={() => setActiveCardTab('portrait')}
                    className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 ${
                      activeCardTab === 'portrait'
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <UserCheck className="w-3 h-3" />
                    <span>Portrait</span>
                  </button>
                </div>
              </div>

              {/* Tab 1: Code Editor Spec Body (First) */}
              {activeCardTab === 'code' ? (
                <div className={`p-5 font-mono text-xs overflow-x-auto leading-relaxed ${
                  darkMode ? 'bg-slate-950 text-slate-300' : 'bg-slate-900 text-slate-200'
                }`}>
                  <div className="space-y-1">
                    <p className="text-slate-500">// Personal Portfolio & Engineering Signature</p>
                    <p>
                      <span className="text-purple-400">const</span>{' '}
                      <span className="text-blue-400">engineer</span>:{' '}
                      <span className="text-amber-400">SoftwareDeveloper</span> = &#123;
                    </p>
                    
                    <div className="pl-4 space-y-1">
                      <p>
                        <span className="text-cyan-300">name</span>:{' '}
                        <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                      </p>
                      <p>
                        <span className="text-cyan-300">currentRole</span>:{' '}
                        <span className="text-emerald-300">"Officer (Software Development)"</span>,
                      </p>
                      <p>
                        <span className="text-cyan-300">organization</span>:{' '}
                        <span className="text-emerald-300">"Padma Bank PLC"</span>,
                      </p>
                      <p>
                        <span className="text-cyan-300">period</span>:{' '}
                        <span className="text-emerald-300">"03-09-2023 to Continue (3.1 Years)"</span>,
                      </p>
                      <p>
                        <span className="text-cyan-300">priorExperience</span>:{' '}
                        <span className="text-emerald-300">"Kaicom Solutions Japan (4.1 Years)"</span>,
                      </p>
                      <p>
                        <span className="text-cyan-300">education</span>: &#123;
                      </p>
                      <div className="pl-4">
                        <p>
                          <span className="text-cyan-300">degree</span>:{' '}
                          <span className="text-emerald-300">"MSc in Computer Science & Engineering"</span>,
                        </p>
                        <p>
                          <span className="text-cyan-300">university</span>:{' '}
                          <span className="text-emerald-300">"Jahangirnagar University"</span>,
                        </p>
                        <p>
                          <span className="text-cyan-300">cgpa</span>:{' '}
                          <span className="text-amber-300">3.45</span>
                        </p>
                      </div>
                      <p>&#125;,</p>
                      <p>
                        <span className="text-cyan-300">certifications</span>: [
                      </p>
                      <div className="pl-4">
                        <p className="text-emerald-300">"Certified DevOps Engineer (Page Cloud)",</p>
                        <p className="text-emerald-300">"Fundamentals of AML & CFT (Padma Bank)"</p>
                      </div>
                      <p>],</p>
                      <p>
                        <span className="text-cyan-300">coreStack</span>: [
                      </p>
                      <div className="pl-4 text-cyan-200">
                        <span className="text-cyan-400">"PHP"</span>,{' '}
                        <span className="text-cyan-400">"Laravel"</span>,{' '}
                        <span className="text-cyan-400">"Oracle DB"</span>,{' '}
                        <span className="text-cyan-400">"MySQL"</span>,{' '}
                        <span className="text-cyan-400">"Docker"</span>,{' '}
                        <span className="text-cyan-400">"Vue.js"</span>,{' '}
                        <span className="text-cyan-400">"Jasper Reports"</span>
                      </div>
                      <p>],</p>
                      <p>
                        <span className="text-cyan-300">openToOpportunities</span>:{' '}
                        <span className="text-purple-400">true</span>
                      </p>
                    </div>
                    <p>&#125;;</p>
                  </div>
                </div>
              ) : (
                /* Tab 2: Portrait & Official Profile View */
                <div className={`p-4 sm:p-5 ${darkMode ? 'bg-slate-950' : 'bg-slate-900 text-white'}`}>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    {/* User Image Frame */}
                    <div className="relative group shrink-0">
                      <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden border-2 border-cyan-500/50 shadow-lg shadow-cyan-500/20 bg-slate-900 relative">
                        <img
                          src={SHUV_PORTRAIT_URL}
                          alt="Shuv Chandra Das - Software Engineer Portrait"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <div className="absolute bottom-1.5 left-1.5 right-1.5 flex items-center justify-between text-[10px] font-mono text-cyan-300">
                          <span className="font-semibold">Padma Bank</span>
                          <span className="bg-cyan-500/30 px-1 py-0.5 rounded text-[9px] text-cyan-200">Verified</span>
                        </div>
                      </div>
                      <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center text-white shadow">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Quick Profile Summary */}
                    <div className="flex-1 space-y-2 text-center sm:text-left">
                      <div>
                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <h3 className="text-lg font-bold text-white font-mono">
                            {PERSONAL_INFO.name}
                          </h3>
                        </div>
                        <p className="text-xs text-cyan-400 font-mono font-semibold">
                          Officer (Software Development)
                        </p>
                        <p className="text-xs text-slate-300 flex items-center justify-center sm:justify-start gap-1 mt-0.5">
                          <Building2 className="w-3 h-3 text-slate-400 shrink-0" />
                          <span>Padma Bank PLC (Gulshan-1, Dhaka)</span>
                        </p>
                        <p className="text-[11px] font-mono text-emerald-400 mt-0.5">
                          03-09-2023 to Continue (3.1 Years)
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
                        <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-300">
                          <GraduationCap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>M.Sc. CSE, Jahangirnagar Univ (3.45)</span>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-300">
                          <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>Certified DevOps Engineer (CDE)</span>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-300">
                          <Briefcase className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>7.2+ Years Production Experience</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                        <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-[10px] font-mono text-cyan-300">
                          Laravel / PHP
                        </span>
                        <span className="px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/60 text-[10px] font-mono text-blue-300">
                          Docker
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/60 text-[10px] font-mono text-emerald-300">
                          Oracle DB
                        </span>
                        <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/60 text-[10px] font-mono text-amber-300">
                          Jasper Reports
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Footer Metrics */}
              <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 text-center rounded-b-xl border-t ${
                darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                {PERSONAL_INFO.stats.map((stat, i) => (
                  <div key={i} className="px-2 py-1">
                    <p className="text-base sm:text-lg font-bold font-mono text-cyan-400">
                      {stat.value}
                    </p>
                    <p className={`text-[11px] leading-tight ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
