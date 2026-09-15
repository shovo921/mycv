import React from 'react';

interface PortioLogoProps {
  darkMode?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const PortioLogo: React.FC<PortioLogoProps> = ({
  darkMode = true,
  size = 'md',
  showSubtitle = true,
}) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group select-none">
      {/* Brand Icon Emblem */}
      <div
        className={`${iconSizes[size]} relative rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/35 transition-all duration-300 group-hover:scale-105 shrink-0`}
      >
        <div className="w-full h-full rounded-[10px] bg-slate-950 flex items-center justify-center relative overflow-hidden">
          {/* Subtle tech background grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:6px_6px] opacity-25" />
          
          {/* Stylized 'S' Monogram / Code Emblem */}
          <svg
            className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors z-10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Geometric stylized 'S' with tech terminal brackets */}
            <path d="M17 6.5A4.5 4.5 0 0 0 8 8c0 3 8 3 8 6a4.5 4.5 0 0 1-9 1.5" />
            <circle cx="18" cy="18" r="1.5" fill="#38bdf8" stroke="none" />
          </svg>
          
          {/* Corner accent glow */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full blur-[3px] opacity-70" />
        </div>
      </div>

      {/* Brand Text: shovo portfolio */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-black font-mono tracking-tight ${titleSizes[size]} ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            <span className="text-cyan-400">shovo</span>{' '}
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>portfolio</span>
            <span className="text-cyan-500 font-extrabold">.</span>
          </span>
          {isLg && (
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold ml-1">
              Dev
            </span>
          )}
        </div>

        {showSubtitle && !isSm && (
          <span className="text-[11px] font-mono tracking-wider text-slate-400 font-medium">
            Shuv Chandra Das
          </span>
        )}
      </div>
    </div>
  );
};
