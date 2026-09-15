import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download, ExternalLink, Terminal, Shield, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { PortioLogo } from './PortioLogo';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenCvModal: () => void;
  onOpenAdminModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  darkMode, 
  setDarkMode, 
  onOpenCvModal,
  onOpenAdminModal
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'cv-section', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills & Tools', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <a
            href="#hero"
            id="navbar-brand-logo"
            className="focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <PortioLogo darkMode={darkMode} size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <button
                  key={link.name}
                  id={`nav-link-${targetId}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? darkMode
                        ? 'text-cyan-400 bg-cyan-950/50 border border-cyan-800/50'
                        : 'text-blue-600 bg-blue-50 border border-blue-200'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              id="theme-toggle-btn"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`p-2.5 rounded-xl border transition-colors ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800 hover:border-slate-700'
                  : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Admin Portal Button */}
            <button
              id="header-admin-portal-btn"
              onClick={onOpenAdminModal}
              title="Admin Panel: Upload Certificates, Projects, Images"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                darkMode
                  ? 'bg-cyan-950/40 text-cyan-400 border-cyan-800/60 hover:bg-cyan-900/50'
                  : 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-100'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>

            <button
              id="header-view-cv-btn"
              onClick={onOpenCvModal}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border ${
                darkMode
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700 hover:border-slate-600'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              <Download className="w-3.5 h-3.5 text-cyan-500" />
              <span>Resume</span>
            </button>

            <a
              id="header-hire-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:-translate-y-0.5"
            >
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-amber-400'
                  : 'bg-slate-100 border-slate-200 text-slate-700'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'bg-slate-900 border-slate-800 text-slate-200'
                  : 'bg-slate-100 border-slate-200 text-slate-800'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200 ${
            darkMode
              ? 'bg-slate-950/95 backdrop-blur-xl border-slate-800'
              : 'bg-white/95 backdrop-blur-xl border-slate-200'
          }`}
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? darkMode
                      ? 'bg-cyan-950/60 text-cyan-400 font-semibold'
                      : 'bg-blue-50 text-blue-600 font-semibold'
                    : darkMode
                    ? 'text-slate-300 hover:bg-slate-900'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800/60 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenAdminModal();
              }}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border ${
                darkMode
                  ? 'bg-cyan-950/40 text-cyan-400 border-cyan-800/60'
                  : 'bg-cyan-50 text-cyan-800 border-cyan-200'
              }`}
            >
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>Admin Panel (Upload Certificates & Projects)</span>
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenCvModal();
              }}
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium border ${
                darkMode
                  ? 'bg-slate-900 text-slate-200 border-slate-700'
                  : 'bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              <Download className="w-4 h-4 text-cyan-500" />
              <span>Download / View Resume</span>
            </button>
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              <span>Contact Shuv Chandra Das</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
