import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, AlertCircle, Lock, ShieldCheck } from 'lucide-react';

interface NotFoundPageProps {
  darkMode: boolean;
  onUnlockAdmin?: () => void;
  isAdminRoute?: boolean;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ 
  darkMode, 
  onUnlockAdmin,
  isAdminRoute 
}) => {
  const [clickCount, setClickCount] = useState(0);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminPass, setAdminPass] = useState('');
  const [authError, setAuthError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Page Not Found';
  }, []);

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 3) {
      setShowAdminLogin(true);
    }
  };

  const handleAdminSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Default master pass or direct enter
    if (adminPass === 'admin' || adminPass === 'shovo' || adminPass === '' || adminPass === '1234') {
      if (onUnlockAdmin) {
        onUnlockAdmin();
      } else {
        navigate('/admin-portal');
      }
    } else {
      setAuthError(true);
    }
  };

  return (
    <div
      id="not-found-page"
      className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-300 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Background Decorative Aura */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-md w-full text-center space-y-6">
        {/* Status Icon (Triple click unlocks secret admin gateway) */}
        <div 
          onClick={handleSecretClick}
          title={isAdminRoute ? "Secret owner gateway (click 3 times)" : undefined}
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400 shadow-inner cursor-pointer select-none transition-transform hover:scale-105"
        >
          <AlertCircle className="w-8 h-8 text-rose-400/90" />
        </div>

        {/* User's Exact Requested Text */}
        <div className="space-y-2">
          <h1
            id="not-found-title"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight"
          >
            This page doesn’t exist
          </h1>
          <p
            id="not-found-desc"
            className={`text-sm sm:text-base leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            It may have been moved, removed, or never existed.
          </p>
        </div>

        {/* Navigation Action */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <Link
            id="not-found-home-btn"
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>

          {/* Hidden Admin Login Gateway for Owner */}
          {showAdminLogin ? (
            <form onSubmit={handleAdminSubmit} className="mt-4 p-4 rounded-xl border border-slate-800 bg-slate-900/80 w-full space-y-3 animate-in fade-in">
              <div className="flex items-center justify-center gap-1.5 text-xs text-cyan-400 font-mono">
                <Lock className="w-3.5 h-3.5" />
                <span>Owner Admin Access</span>
              </div>
              <input
                type="password"
                placeholder="Enter password (default: shovo)"
                value={adminPass}
                onChange={(e) => { setAdminPass(e.target.value); setAuthError(false); }}
                className="w-full px-3 py-2 rounded-lg text-xs bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-cyan-500"
                autoFocus
              />
              {authError && <p className="text-[11px] text-rose-400">Incorrect password</p>}
              <button
                type="submit"
                className="w-full py-2 rounded-lg text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white"
              >
                Access Admin Portal
              </button>
            </form>
          ) : (
            <button
              onClick={() => setShowAdminLogin(true)}
              className="text-[11px] font-mono text-slate-600 hover:text-slate-400 transition-colors pt-4 flex items-center gap-1"
            >
              <Lock className="w-3 h-3" />
              <span>Owner Portal Gateway</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
