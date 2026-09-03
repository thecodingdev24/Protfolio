import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Terminal, ArrowRight, X, Mail, Phone, Github, Linkedin, ExternalLink, Code2, Server, FileText, Download } from 'lucide-react';
import { PROFILE, PROJECTS } from '../data';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (id: string) => void;
  onCopyPhone: () => void;
  onCopyEmail: () => void;
  onOpenResume?: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectSection,
  onCopyPhone,
  onCopyEmail,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: 'download-resume', title: 'Download Resume (PDF)', desc: 'Download Shalender_Singh_Resume.pdf (17 KB)', category: 'Resume', icon: Download, action: () => { const a = document.createElement('a'); a.href = '/Shalender_Singh_Resume.pdf'; a.download = 'Shalender_Singh_Resume.pdf'; a.click(); } },
    { id: 'view-resume', title: 'Preview Resume (Interactive)', desc: 'View complete 1-page ATS formatted resume modal', category: 'Resume', icon: FileText, action: onOpenResume },
    { id: 'build', title: 'The Build', desc: 'Browse Tikki Topple & CarVault projects', category: 'Navigation', icon: Code2 },
    { id: 'stack', title: 'The Stack', desc: 'Explore languages, MySQL, Git, and frameworks', category: 'Navigation', icon: Terminal },
    { id: 'cloud-lab', title: 'Cloud Backbone Lab', desc: 'Simulate distributed backend request flow', category: 'Interactive', icon: Server },
    { id: 'path', title: 'The Path', desc: 'View academic timeline & LPU B.Tech history', category: 'Navigation', icon: ArrowRight },
    { id: 'recognition', title: 'Recognition', desc: 'GSA 2026 Ambassador & Infosys certifications', category: 'Navigation', icon: ArrowRight },
    { id: 'about', title: 'About Shalender', desc: 'Read background, philosophy, and focus', category: 'Navigation', icon: ArrowRight },
    { id: 'contact', title: 'Contact Section', desc: 'Outreach composer and direct details', category: 'Navigation', icon: Mail },
    { id: 'copy-email', title: `Copy Email (${PROFILE.email})`, desc: 'Direct copy to clipboard', category: 'Action', icon: Mail, action: onCopyEmail },
    { id: 'copy-phone', title: `Copy Phone (${PROFILE.phone})`, desc: 'Direct copy to clipboard', category: 'Action', icon: Phone, action: onCopyPhone },
    { id: 'open-github', title: 'Open GitHub Profile', desc: 'github.com/thecodingdev24', category: 'Link', icon: Github, external: PROFILE.github },
    { id: 'open-linkedin', title: 'Open LinkedIn Profile', desc: 'linkedin.com/in/shalender-singh-rawat', category: 'Link', icon: Linkedin, external: PROFILE.linkedin },
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.desc.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (item: typeof actions[0]) => {
    onClose();
    if (item.action) {
      item.action();
    } else if (item.external) {
      window.open(item.external, '_blank', 'noopener,noreferrer');
    } else {
      onSelectSection(item.id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/60 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: -10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -10 }}
        className="w-full max-w-xl bg-white rounded-2xl border-2 border-slate-900 shadow-[8px_8px_0px_0px_#000] overflow-hidden"
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b-2 border-slate-900 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Type a command or section name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm font-mono text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-200 text-slate-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length > 0 ? (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl text-left hover:bg-emerald-50 hover:border-emerald-300 border border-transparent transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-emerald-200 text-slate-700 group-hover:text-emerald-950 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-space font-bold text-xs sm:text-sm text-slate-950 group-hover:text-emerald-950">
                        {item.title}
                      </div>
                      <div className="font-mono text-[11px] text-slate-500 line-clamp-1">
                        {item.desc}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-slate-400 px-2 py-0.5 rounded bg-slate-100 uppercase">
                    {item.category}
                  </span>
                </button>
              );
            })
          ) : (
            <div className="py-8 text-center text-xs font-mono text-slate-500">
              No actions found for &quot;{query}&quot;
            </div>
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-4 py-2 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Use <strong>ESC</strong> to dismiss</span>
          <span>Shalender Singh Portfolio</span>
        </div>
      </motion.div>
    </div>
  );
};
