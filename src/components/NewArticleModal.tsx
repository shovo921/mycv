import React, { useState } from 'react';
import { X, Plus, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import { BlogPost } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NewArticleModalProps {
  darkMode: boolean;
  isOpen: boolean;
  onClose: () => void;
  onAddArticle: (newArticle: BlogPost) => void;
}

export const NewArticleModal: React.FC<NewArticleModalProps> = ({ 
  darkMode, 
  isOpen, 
  onClose, 
  onAddArticle 
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Software Engineering');
  const [readTime, setReadTime] = useState('5 min read');
  const [excerpt, setExcerpt] = useState('');
  const [tagsInput, setTagsInput] = useState('Backend, Architecture, Java');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !excerpt || !content) return;

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      title,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      excerpt,
      content,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric'
      }),
      readTime,
      category,
      tags,
      author: {
        name: PERSONAL_INFO.name,
        role: PERSONAL_INFO.role
      }
    };

    onAddArticle(newPost);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className={`relative w-full max-w-2xl max-h-[90vh] rounded-2xl border flex flex-col overflow-hidden shadow-2xl ${
          darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className={`p-6 border-b flex items-center justify-between ${
          darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Draft New Technical Insight</h2>
              <p className="text-xs text-slate-400 font-mono">Publish insight to your developer blog</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm">
          <div>
            <label className="block font-mono text-xs text-slate-400 mb-1">
              ARTICLE TITLE *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Scaling Distributed State in Financial Pipelines"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl border outline-none ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-cyan-500' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-mono text-xs text-slate-400 mb-1">
                PRIMARY DOMAIN / CATEGORY
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl border outline-none ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              >
                <option>FinTech & Banking</option>
                <option>DevOps & Cloud</option>
                <option>Software Engineering</option>
                <option>AI & Machine Learning</option>
                <option>Database Internals</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-xs text-slate-400 mb-1">
                ESTIMATED READ TIME
              </label>
              <input
                type="text"
                placeholder="e.g. 6 min read"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl border outline-none ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>

          <div>
            <label className="block font-mono text-xs text-slate-400 mb-1">
              TAGS (COMMA SEPARATED)
            </label>
            <input
              type="text"
              placeholder="Java, Concurrency, Spring Boot, MySQL"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl border outline-none ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-slate-400 mb-1">
              EXCERPT / BRIEF SUMMARY *
            </label>
            <textarea
              required
              rows={2}
              placeholder="A short punchy summary visible in the card grid..."
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl border outline-none resize-none ${
                darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
          </div>

          <div>
            <label className="block font-mono text-xs text-slate-400 mb-1">
              ARTICLE CONTENT (MARKDOWN SUPPORTED) *
            </label>
            <textarea
              required
              rows={8}
              placeholder="Write your article. Use ## for section headers, ``` for code blocks, and - for bullet points."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl border outline-none font-mono text-xs leading-relaxed ${
                darkMode ? 'bg-slate-950 border-slate-800 text-cyan-300' : 'bg-slate-50 border-slate-200 text-slate-900'
              }`}
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
            >
              Publish Insight
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
