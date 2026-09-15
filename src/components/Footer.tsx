import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Terminal, Heart, Github, Linkedin, ExternalLink, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PortioLogo } from './PortioLogo';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t ${
      darkMode ? 'bg-slate-950 border-slate-900 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <PortioLogo darkMode={darkMode} size="sm" />

          {/* Copyright */}
          <div className="text-center text-xs font-mono">
            <p>© {new Date().getFullYear()} Shuv Chandra Das. All rights reserved.</p>
            <p className="text-slate-500 mt-1 flex items-center justify-center gap-1.5">
              <span>shovo portfolio • Personal Portfolio of Shuv Chandra Das</span>
              <span className="text-slate-700">•</span>
              <Link
                to="/admin-portal"
                className="text-slate-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 opacity-60 hover:opacity-100"
                title="Admin Management Portal"
              >
                <Lock className="w-3 h-3" />
                <span>Admin</span>
              </Link>
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.website}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:text-cyan-400 transition-colors"
              aria-label="Personal Website"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2 rounded-lg border transition-all ${
                darkMode ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs'
              }`}
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
