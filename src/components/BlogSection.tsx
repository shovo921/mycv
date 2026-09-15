import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  PlusCircle, 
  Tag, 
  Sparkles,
  Terminal,
  Bookmark
} from 'lucide-react';
import { BlogPost } from '../types';

interface BlogSectionProps {
  darkMode: boolean;
  blogPosts: BlogPost[];
  onSelectArticle: (article: BlogPost) => void;
  onOpenNewArticleModal: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ 
  darkMode, 
  blogPosts, 
  onSelectArticle,
  onOpenNewArticleModal 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');

  // Extract all unique tags
  const allTags = ['all', ...Array.from(new Set(blogPosts.flatMap((p) => p.tags)))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50">
            <BookOpen className="w-3.5 h-3.5" />
            <span>TECHNICAL INSIGHTS & ENGINEERING BLOG</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Engineering Notes & System Design
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Deep-dives on core banking concurrency, enterprise customer ticketing, zero-downtime Kubernetes deployments, and clean code paradigms.
          </p>
        </div>

        {/* Search, Filter Bar & New Article Button */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 max-w-5xl mx-auto">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles, topics, or technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border outline-none transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-white focus:border-cyan-500'
                  : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500 shadow-xs'
              }`}
            />
          </div>

          {/* Action Trigger */}
          <button
            id="blog-write-insight-btn"
            onClick={onOpenNewArticleModal}
            className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Draft New Insight</span>
          </button>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-10 max-w-4xl mx-auto">
          {allTags.slice(0, 10).map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-lg text-xs font-mono capitalize transition-all ${
                selectedTag === tag
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : darkMode
                  ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 space-y-3">
            <p className="text-slate-400 text-sm">No technical articles found matching "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedTag('all'); }}
              className="text-cyan-400 text-xs underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className={`rounded-2xl border flex flex-col justify-between overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-cyan-800/60 shadow-lg shadow-black/20'
                    : 'bg-white border-slate-200 shadow-md shadow-slate-200/50 hover:border-slate-300'
                }`}
              >
                <div className="p-6 space-y-4">
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onSelectArticle(post)}
                    className={`text-base sm:text-lg font-bold leading-snug cursor-pointer group-hover:text-cyan-400 transition-colors line-clamp-2 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className={`text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Metadata */}
                <div className={`p-4 border-t flex items-center justify-between text-xs ${
                  darkMode ? 'bg-slate-950/40 border-slate-800 text-slate-400' : 'bg-slate-50/70 border-slate-200 text-slate-500'
                }`}>
                  <div className="flex items-center gap-1.5 font-mono text-[11px]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>

                  <button
                    onClick={() => onSelectArticle(post)}
                    className="flex items-center gap-1 font-semibold text-cyan-400 hover:text-cyan-300 group/link"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
