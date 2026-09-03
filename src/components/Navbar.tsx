import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { PROFILE } from '../data';
import { ProfileImage } from './ProfileImage';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'build', label: 'Build' },
    { id: 'stack', label: 'Stack' },
    { id: 'cloud-lab', label: 'Cloud Lab' },
    { id: 'path', label: 'Path' },
    { id: 'recognition', label: 'Recognition' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5'
            : 'bg-white/60 backdrop-blur-xs border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Mark */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-2.5 text-decoration-none"
            id="nav-logo"
          >
            <div className="w-8 h-8 rounded-lg overflow-hidden border-2 border-slate-900 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(0,229,106,0.5)] transition-all bg-slate-900 flex-shrink-0">
              <ProfileImage className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-space font-bold text-slate-900 text-sm tracking-tight">
                {PROFILE.name}
              </span>
              <span className="font-mono text-[10px] text-slate-500 tracking-wider uppercase">
                Cloud & Backend
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-white text-slate-950 shadow-xs border border-slate-300 font-bold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-2">
            {/* Quick Command Palette Button */}
            <button
              id="open-command-palette-btn"
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-mono transition-colors shadow-2xs"
              title="Search and quick actions (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline text-[11px] text-slate-400">Search</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[9px] bg-slate-100 text-slate-500 rounded border border-slate-200 font-sans">
                ⌘K
              </kbd>
            </button>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
              className="hidden sm:inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-emerald-400 hover:bg-emerald-300 text-slate-950 border border-emerald-500 shadow-[0_0_12px_rgba(0,229,106,0.3)] hover:shadow-[0_0_18px_rgba(0,229,106,0.5)] transition-all"
              id="nav-cta-contact"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 p-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-left font-mono text-sm text-slate-800 hover:bg-emerald-50 hover:text-emerald-950 border border-transparent hover:border-emerald-200 transition-all"
                >
                  <span>{link.label}</span>
                  <span className="text-slate-400 text-xs">→</span>
                </button>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-400 text-slate-950 font-mono text-sm font-bold shadow-sm"
                >
                  <Terminal className="w-4 h-4" />
                  Email {PROFILE.name.split(' ')[0]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
