import React, { useState } from 'react';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Layers, 
  Sparkles,
  Server,
  ShieldAlert,
  GitBranch,
  Cpu,
  Globe
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';

interface ProjectsSectionProps {
  darkMode: boolean;
  onSelectProject: (project: Project) => void;
  projects?: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ 
  darkMode, 
  onSelectProject,
  projects = PROJECTS
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories = [
    { id: 'all', label: `All Projects (${projects.length})` },
    { id: 'fintech', label: `FinTech & Banking (${projects.filter(p => p.category === 'fintech').length})` },
    { id: 'fullstack', label: `Web & E-Commerce (${projects.filter(p => p.category === 'fullstack').length})` },
    { id: 'cms', label: `CMS Solutions (${projects.filter(p => p.category === 'cms').length})` },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fintech':
        return <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />;
      case 'devops':
        return <GitBranch className="w-3.5 h-3.5 text-amber-400" />;
      case 'ai':
        return <Cpu className="w-3.5 h-3.5 text-purple-400" />;
      case 'cms':
        return <Globe className="w-3.5 h-3.5 text-blue-400" />;
      default:
        return <Server className="w-3.5 h-3.5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50">
            <Code2 className="w-3.5 h-3.5" />
            <span>KEY ENTERPRISE & BANKING PROJECTS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Key Banking & Enterprise Projects
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Web-based management systems, banking portals, and digital services developed and supported using Laravel, Vue.js, AJAX, and modern database architectures.
          </p>
        </div>

        {/* Category Filters & Admin Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : darkMode
                    ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-800/60 shadow-lg shadow-black/20 hover:shadow-cyan-950/30'
                  : 'bg-white border-slate-200 shadow-md shadow-slate-200/50 hover:border-slate-300'
              }`}
            >
              <div>
                {/* Top Card Graphic Header */}
                <div className={`h-36 bg-gradient-to-r ${project.imageGradient || 'from-cyan-600 to-blue-700'} p-5 flex flex-col justify-between relative overflow-hidden`}>
                  {project.imageUrl ? (
                    <img src={project.imageUrl} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  ) : null}
                  <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px]" />
                  
                  {/* Category Pill & Year */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-950/70 text-white border border-white/15">
                        {getCategoryIcon(project.category)}
                        <span className="capitalize">{project.category}</span>
                      </span>
                      {project.projectType && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                          {project.projectType}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-white/80 bg-slate-950/50 px-2 py-0.5 rounded">
                      {project.date}
                    </span>
                  </div>

                  {/* Title Preview in Graphic */}
                  <div className="relative z-10">
                    <h3 className="text-white font-extrabold text-lg leading-snug line-clamp-2 drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <p className={`text-xs font-semibold text-cyan-500 line-clamp-1`}>
                    {project.subtitle}
                  </p>

                  <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* Key Metrics Chips */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {project.metrics.slice(0, 2).map((m, i) => (
                        <div
                          key={i}
                          className={`p-2 rounded-lg border text-center ${
                            darkMode ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                          }`}
                        >
                          <span className="block text-xs font-bold text-cyan-400 font-mono">
                            {m.value}
                          </span>
                          <span className="text-[10px] text-slate-400 block truncate">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-2 py-0.5 rounded text-[11px] font-mono ${
                          darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className={`p-4 border-t flex items-center justify-between gap-2 ${
                darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50/70 border-slate-200'
              }`}>
                <button
                  onClick={() => onSelectProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group/btn"
                >
                  <span>System Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 rounded-lg border transition-colors ${
                        darkMode
                          ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
                          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700 shadow-xs'
                      }`}
                      title="View GitHub Repository"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-2 rounded-lg border transition-colors ${
                        darkMode
                          ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
                          : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700 shadow-xs'
                      }`}
                      title="Live Website / Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
