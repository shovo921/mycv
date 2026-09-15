import React, { useState } from 'react';
import { 
  Camera, 
  Eye, 
  X, 
  ExternalLink, 
  Calendar, 
  Tag, 
  Download, 
  ShieldCheck, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { GalleryPhoto } from '../types';

interface GallerySectionProps {
  darkMode: boolean;
  photos: GalleryPhoto[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  darkMode,
  photos
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: `All Media (${photos.length})` },
    { id: 'profile', label: 'Portraits & Headshots' },
    { id: 'work', label: 'Office & Banking' },
    { id: 'certificates', label: 'Certificates & Honors' },
    { id: 'events', label: 'Tech Summits & Academics' },
  ];

  const filteredPhotos = activeCategory === 'all'
    ? photos
    : photos.filter((p) => {
        if (activeCategory === 'certificates') return p.category === 'certificates' || p.category === 'certificate';
        if (activeCategory === 'events') return p.category === 'events' || p.category === 'event';
        return p.category === activeCategory;
      });

  return (
    <section id="gallery" className={`py-20 border-t ${
      darkMode ? 'bg-slate-950/70 border-slate-800/80' : 'bg-slate-50/80 border-slate-200/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50">
              <Camera className="w-3.5 h-3.5" />
              <span>MEDIA & CREDENTIAL GALLERY</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Professional Photos & Verified Honors
            </h2>
            <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Visual documentation of engineering milestones, executive banking sessions, keynote tech summits, and certified credentials.
            </p>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/25'
                  : darkMode
                  ? 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative rounded-2xl overflow-hidden border cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 hover:border-cyan-700/60 shadow-lg shadow-black/30'
                  : 'bg-white border-slate-200 shadow-sm hover:border-slate-300'
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-950 relative">
                <img
                  src={photo.url || photo.dataUrl}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-slate-950/80 text-cyan-300 border border-cyan-500/30">
                      {photo.category}
                    </span>
                    <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center backdrop-blur-xs">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-sm line-clamp-1">{photo.title}</h3>
                    {photo.caption && (
                      <p className="text-xs text-slate-300 line-clamp-2 mt-0.5">{photo.caption}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Card Meta */}
              <div className="p-3.5 flex items-center justify-between text-xs font-mono">
                <span className={`truncate font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  {photo.title}
                </span>
                {photo.date && (
                  <span className="text-slate-400 shrink-0 ml-2">{photo.date}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className={`text-center py-16 rounded-2xl border ${
            darkMode ? 'bg-slate-900/40 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-500'
          }`}>
            <Camera className="w-10 h-10 mx-auto mb-3 opacity-40 text-cyan-400" />
            <p className="text-sm font-medium">No media uploaded in this category yet.</p>
          </div>
        )}

      </div>

      {/* Full-Screen Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className={`relative max-w-4xl w-full rounded-2xl border overflow-hidden shadow-2xl flex flex-col ${
              darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-4 border-b flex items-center justify-between ${
              darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-slate-100 border-slate-200'
            }`}>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono uppercase bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                  {selectedPhoto.category}
                </span>
                <h3 className="font-bold text-sm sm:text-base truncate max-w-md">
                  {selectedPhoto.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className={`p-2 rounded-xl border transition-colors ${
                  darkMode ? 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white' : 'bg-white border-slate-200 text-slate-500 hover:text-slate-900'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="relative bg-slate-950 max-h-[65vh] flex items-center justify-center p-2 overflow-hidden">
              <img
                src={selectedPhoto.url || selectedPhoto.dataUrl}
                alt={selectedPhoto.title}
                className="max-h-[60vh] max-w-full object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer / Details */}
            <div className="p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
                {selectedPhoto.date && (
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Recorded Date: {selectedPhoto.date}</span>
                  </span>
                )}
                {selectedPhoto.tags && selectedPhoto.tags.length > 0 && (
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <Tag className="w-3.5 h-3.5 text-cyan-400" />
                    {selectedPhoto.tags.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {selectedPhoto.caption && (
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {selectedPhoto.caption}
                </p>
              )}

              <div className="pt-2 flex justify-end gap-3">
                <a
                  href={selectedPhoto.url || selectedPhoto.dataUrl}
                  target="_blank"
                  rel="noreferrer"
                  download={selectedPhoto.title.toLowerCase().replace(/\s+/g, '-') + '.jpg'}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-800/60 hover:bg-cyan-900/50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full Resolution</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
