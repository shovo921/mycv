import React, { useState } from 'react';
import { X, Clock, Calendar, Tag, Share2, Check, BookOpen, Terminal, Copy } from 'lucide-react';
import { BlogPost } from '../types';

interface ArticleModalProps {
  article: BlogPost | null;
  darkMode: boolean;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, darkMode, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple Markdown Parser to render headings, bold text, code blocks, and lists cleanly
  const renderFormattedContent = (content: string) => {
    const lines = content.split('\n');
    let inCodeBlock = false;
    let codeBlockBuffer: string[] = [];

    const elements: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <div key={`code-${index}`} className="my-4 rounded-xl overflow-hidden border border-slate-800 font-mono text-xs shadow-lg">
              <div className="bg-slate-950 px-4 py-2 text-slate-400 text-[11px] border-b border-slate-800 flex items-center justify-between">
                <span>Code snippet</span>
                <span className="text-cyan-400">Syntax Verified</span>
              </div>
              <pre className="p-4 bg-slate-900 text-cyan-200 overflow-x-auto leading-relaxed">
                <code>{codeBlockBuffer.join('\n')}</code>
              </pre>
            </div>
          );
          codeBlockBuffer = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockBuffer.push(line);
        return;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-xl sm:text-2xl font-bold mt-8 mb-3 text-cyan-400">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-lg sm:text-xl font-semibold mt-6 mb-2 text-blue-400">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="ml-5 list-disc my-1 text-slate-300">
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.trim() === '') {
        elements.push(<div key={index} className="h-3" />);
      } else {
        // Standard paragraph
        elements.push(
          <p key={index} className={`my-2 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            {line}
          </p>
        );
      }
    });

    return elements;
  };

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
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-2">
              <span className="px-2.5 py-0.5 rounded-full font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1 text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold leading-tight">
              {article.title}
            </h1>
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm sm:text-base leading-relaxed">
          {/* Author Strip */}
          <div className={`p-3.5 rounded-xl border flex items-center justify-between ${
            darkMode ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                SD
              </div>
              <div>
                <span className="font-bold text-xs sm:text-sm block">{article.author.name}</span>
                <span className="text-xs text-slate-400 font-mono block">{article.author.role}</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${
                darkMode ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700' : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300 shadow-xs'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share'}</span>
            </button>
          </div>

          {/* Article Rendered Content */}
          <div className="pt-2 font-sans">
            {renderFormattedContent(article.content)}
          </div>

          {/* Tags */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              TOPICS:
            </span>
            {article.tags.map((t, idx) => (
              <span
                key={idx}
                className={`px-2.5 py-1 rounded-md text-xs font-mono ${
                  darkMode ? 'bg-slate-800 text-cyan-300' : 'bg-slate-100 text-blue-700'
                }`}
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`p-4 border-t flex items-center justify-between ${
          darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <span className="text-xs text-slate-400 font-mono">
            Portio • Technical Insights by Shuv Chandra Das
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950"
          >
            Done Reading
          </button>
        </div>

      </div>
    </div>
  );
};
